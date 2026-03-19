#!/usr/bin/env node

/**
 * How to use:
 * run the following command:
 * node scan-and-clean-toml.js --toml data/urls.toml --dir content/en --out data/urls.toml --json paths.report.json
 */

const fs = require("fs-extra");
const path = require("path");
const { globby } = require("globby");
const TOML = require("@iarna/toml");

/** ---- CLI args ---- */
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    toml: "paths.toml",
    dir: ".",
    out: "paths.cleaned.toml",
    json: "paths.report.json",
    include: [],          // e.g., ["MainDoc"]
    ext: [],              // e.g., ["md","html"]
    debug: false,
    indent: 4,            // spaces per level
    blankLines: false,    // add blank line before each table (default false to match your example)
  };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--toml") opts.toml = args[++i];
    else if (a === "--dir") opts.dir = args[++i];
    else if (a === "--out") opts.out = args[++i];
    else if (a === "--json") opts.json = args[++i];
    else if (a === "--always-keep") {
      const next = args[++i];
      if (next) opts.include = next.split(",").map(s => s.trim()).filter(Boolean);
    } else if (a === "--ext") {
      const next = args[++i];
      if (next) opts.ext = next.split(",").map(s => s.trim()).filter(Boolean);
    } else if (a === "--debug") {
      opts.debug = true;
    } else if (a === "--indent") {
      opts.indent = Number(args[++i]) || 4;
    } else if (a === "--blank-lines") {
      opts.blankLines = true;
    } else if (a === "-h" || a === "--help") {
      printHelpAndExit();
    }
  }
  return opts;
}

function printHelpAndExit() {
  console.log(`
Usage:
  node scan-and-clean-toml.js --toml paths.toml --dir ./content --out paths.cleaned.toml --json paths.report.json --always-keep MainDoc --ext md,html,cshtml --debug

Options:
  --toml           Path to source TOML (default: paths.toml)
  --dir            Directory to scan (default: .)
  --out            Output path for cleaned TOML (default: paths.cleaned.toml)
  --json           Output path for JSON report (default: paths.report.json)
  --always-keep    Comma-separated leaf keys to keep on ancestor tables (e.g., "MainDoc")
  --ext            Comma-separated file extensions to scan (no dots)
  --indent         Spaces per indentation level (default: 4)
  --blank-lines    Insert a blank line before each table (default: false)
  --debug          Extra diagnostics
  -h, --help       Show this help
  `);
  process.exit(0);
}

/** ---- Extract all fully-qualified leaf keys from TOML ---- */
function extractTomlKeys(obj, prefix = "") {
  const keys = [];
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    const full = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") {
      keys.push(full);
    } else if (v && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...extractTomlKeys(v, full));
    }
  }
  return keys;
}

/** ---- Extract shortcode path="..." refs (supports " and ' and unquoted) ---- */
function extractShortcodePaths(content) {
  if (!content) return [];

  // Normalize escaped < and >
  const normalized = content
    .replace(/&amp;lt;/g, "<")
    .replace(/&amp;gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

  const results = [];

  // Match {{< ... >}} with optional whitespace/newlines before closing }}
  const shortcodeRegex = /\{\{<[\s\S]*?>\s*\}\}/g;
  let m;
  while ((m = shortcodeRegex.exec(normalized)) !== null) {
    const block = m[0];

    // path="..." | path='...' | path=bareword
    const pathAttrRegex = /(?:^|\s)path\s*=\s*(?:"([^"]+)"|'([^']+)'|([A-Za-z0-9_.-]+))/g;
    let pm;
    while ((pm = pathAttrRegex.exec(block)) !== null) {
      const pathVal = pm[1] || pm[2] || pm[3];
      if (pathVal && /^[A-Za-z0-9_.-]+$/.test(pathVal)) {
        results.push(pathVal);
      }
    }
  }
  return results;
}

/** ---- Compute all ancestor prefixes for used keys ---- */
function buildAncestorPrefixes(dottedPath) {
  const parts = dottedPath.split(".");
  const acc = [];
  for (let i = 0; i < parts.length; i++) {
    acc.push(parts.slice(0, i + 1).join("."));
  }
  return acc;
}

/** ---- Prune TOML object by used leaf keys, optionally keeping certain leaves on ancestor tables ---- */
function pruneTomlObject(originalObj, usedLeafSet, alwaysKeepLeaves = []) {
  const ancestorSet = new Set();
  for (const leaf of usedLeafSet) {
    for (const anc of buildAncestorPrefixes(leaf)) ancestorSet.add(anc);
  }

  function prune(obj, prefix = "") {
    let keptAny = false;
    const out = {};

    for (const key of Object.keys(obj)) {
      const v = obj[key];
      const full = prefix ? `${prefix}.${key}` : key;

      if (typeof v === "string") {
        const isUsedLeaf = usedLeafSet.has(full);
        const isAlwaysKeepLeaf = alwaysKeepLeaves.includes(key) && ancestorSet.has(prefix);
        if (isUsedLeaf || isAlwaysKeepLeaf) {
          out[key] = v;
          keptAny = true;
        }
      } else if (v && typeof v === "object") {
        const prunedChild = prune(v, full);
        if (prunedChild.keptAny) {
          out[key] = prunedChild.node;
          keptAny = true;
        }
      }
    }

    return { keptAny, node: out };
  }

  const result = prune(originalObj, "");
  return result.keptAny ? result.node : {};
}

/** ---- CUSTOM WRITER: emit bracketed, fully-qualified tables with indentation ---- */
function emitStructuredToml(obj, opts) {
  const lines = [];
  const indentUnit = " ".repeat(opts.indent);

  function escTomlString(s) {
    // Basic TOML string escaping
    return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  // Depth-first traversal; `pathParts` builds the fully-qualified table name
  function printTable(pathParts, node, isFirstTable) {
    const depth = Math.max(pathParts.length - 1, 0);
    const headerIndent = indentUnit.repeat(depth);
    const fqName = pathParts.join(".");

    if (opts.blankLines && !isFirstTable) lines.push(""); // optional blank line between tables
    lines.push(`${headerIndent}[${fqName}]`);

    // 1) Emit string leaves (keys) at this table
    const leafKeys = Object.keys(node).filter(k => typeof node[k] === "string");
    const keyIndent = indentUnit.repeat(depth + 1);
    for (const k of leafKeys) {
      lines.push(`${keyIndent}${k} = "${escTomlString(node[k])}"`);
    }

    // 2) Recurse into child tables (objects)
    const childKeys = Object.keys(node).filter(k => node[k] && typeof node[k] === "object" && !Array.isArray(node[k]));
    for (const k of childKeys) {
      const child = node[k];
      // child’s header should be indented one level deeper than this table
      printTable([...pathParts, k], child, /*isFirstTable*/ false);
    }
  }

  // Top-level: each key at root is a child table (object) or (rarely) a leaf
  // If you ever have leaf keys at root, we’ll hoist them under a [.] "root"—but your data doesn’t do that.
  const rootKeys = Object.keys(obj);
  let first = true;
  for (const k of rootKeys) {
    const v = obj[k];
    if (v && typeof v === "object") {
      printTable([k], v, first);
      first = false;
    } else if (typeof v === "string") {
      // If you truly have root-level leaves, you can uncomment to emit a synthetic root:
      // if (first) first = false;
      // const keyIndent = indentUnit.repeat(1);
      // if (opts.blankLines && lines.length) lines.push("");
      // lines.push(`[.]`);
      // lines.push(`${keyIndent}${k} = "${escTomlString(v)}"`);
      // But your structure uses only nested tables, so we skip.
    }
  }

  return lines.join("\n") + "\n";
}

async function main() {
  const opts = parseArgs();

  // Load & parse TOML
  const tomlRaw = await fs.readFile(opts.toml, "utf8");
  const tomlObj = TOML.parse(tomlRaw);

  // All leaf keys
  const allTomlLeaves = extractTomlKeys(tomlObj);
  const allTomlLeafSet = new Set(allTomlLeaves);

  // Collect files
  const include = opts.ext.length > 0 ? [`**/*.{${opts.ext.join(",")}}`] : ["**/*"];
  const ignore = [
    "**/node_modules/**", "**/.git/**", "**/.next/**", "**/dist/**", "**/build/**",
    "**/.cache/**", "**/.vite/**", "**/.astro/**", "**/.parcel-cache/**", "**/.DS_Store",
  ];
  const files = await globby(include, {
    cwd: opts.dir, ignore, dot: true, absolute: true, followSymbolicLinks: true,
  });

  if (opts.debug) {
    console.log(`DEBUG: CWD to scan: ${path.resolve(opts.dir)}`);
    console.log(`DEBUG: Files matched: ${files.length}`);
  }

  // Extract references
  const referenced = new Set();
  for (const f of files) {
    let content = "";
    try { content = await fs.readFile(f, "utf8"); } catch { continue; }
    for (const p of extractShortcodePaths(content)) referenced.add(p);
  }

  // Classify
  const used = new Set();
  const missing = new Set();
  for (const r of referenced) (allTomlLeafSet.has(r) ? used : missing).add(r);
  const unused = allTomlLeaves.filter(k => !used.has(k));

  // Prune
  const cleanedObj = pruneTomlObject(tomlObj, used, opts.include);

  // 🔥 WRITE in your requested format
  const cleanedToml = emitStructuredToml(cleanedObj, { indent: opts.indent, blankLines: opts.blankLines });
  await fs.writeFile(opts.out, cleanedToml, "utf8");

  // Report
  await fs.writeJson(
    opts.json,
    {
      summary: {
        tomlLeavesTotal: allTomlLeaves.length,
        filesScanned: files.length,
        referencedTotal: referenced.size,
        usedTotal: used.size,
        unusedTotal: unused.length,
        missingTotal: missing.size,
        alwaysKeptLeaves: opts.include,
        dir: path.resolve(opts.dir),
        extFilter: opts.ext,
      },
      used: Array.from(used).sort(),
      unused: unused.sort(),
      missing: Array.from(missing).sort(),
      referenced: Array.from(referenced).sort(),
    },
    { spaces: 2 }
  );

  console.log(`\n✅ Cleaned TOML written to: ${opts.out}`);
  console.log(`🧾 Report written to:       ${opts.json}`);
  console.log(`\n• Total TOML leaves: ${allTomlLeaves.length}`);
  console.log(`• Files scanned: ${files.length}`);
  console.log(`• Referenced in files: ${referenced.size}`);
  console.log(`• Used (kept): ${used.size}`);
  console.log(`• Unused (removed): ${unused.length}`);
  console.log(`• Missing (in files, not in TOML): ${missing.size}\n`);
}

main().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});