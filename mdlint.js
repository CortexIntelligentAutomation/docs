#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * A simple Markdown linter CLI using markdownlint with VS Code-like defaults.
 *
 * Usage:
 *  node mdlint.js --only MD052 content
 */

const fs = require("fs");
const path = require("path");
let markdownlint;
try {
  markdownlint = require("markdownlint"); // ensure 0.26.1 installed
} catch {
  console.error("Please run: npm i -D markdownlint@0.26.1");
  process.exit(2);
}

// Parse simple flags: --only MD052,MD013 ...
function parseArgs(argv) {
  const args = [];
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--only") {
      flags.only = (argv[++i] || "").split(",").map(s => s.trim()).filter(Boolean);
    } else if (a.startsWith("--only=")) {
      flags.only = a.slice("--only=".length).split(",").map(s => s.trim()).filter(Boolean);
    } else {
      args.push(a);
    }
  }
  return { paths: args, flags };
}

// Recursively collect .md files
function collect(target) {
  const abs = path.resolve(target);
  if (!fs.existsSync(abs)) throw new Error(`Path does not exist: ${target}`);
  const st = fs.statSync(abs);
  if (st.isDirectory()) {
    const out = [];
    for (const de of fs.readdirSync(abs, { withFileTypes: true })) {
      const p = path.join(abs, de.name);
      if (de.isDirectory()) out.push(...collect(p));
      else if (de.isFile() && p.toLowerCase().endsWith(".md")) out.push(p);
    }
    return out;
  }
  return st.isFile() && abs.toLowerCase().endsWith(".md") ? [abs] : [];
}

function buildConfig(only) {
  if (!only || only.length === 0) {
    return { default: true }; // VS Code-like defaults
  }
  // Normalize to rule code form (e.g., md052 -> MD052)
  const enabled = new Set(only.map(s => s.toUpperCase()));
  const cfg = { default: false };
  for (const code of enabled) cfg[code] = true;

  // Optional: also turn on known aliases for MD052 to be extra robust
  if (enabled.has("MD052")) cfg["reference-links-images"] = true;

  return cfg;
}

function lint(files, config) {
  if (files.length === 0) {
    console.log("No Markdown files to lint.");
    return 0;
  }
  const result = markdownlint.sync({
    files,
    config,
    resultVersion: 3
  });

  let issues = 0;
  for (const file of Object.keys(result)) {
    const problems = result[file];
    if (!problems.length) continue;
    console.log(`\n${file}`);
    for (const p of problems) {
      issues++;
      const loc = `${p.lineNumber}${p.errorRange ? ":" + p.errorRange[0] : ""}`;
      const msg =
        `${p.ruleNames.join("/")}: ${p.ruleDescription}` +
        (p.errorDetail ? ` [${p.errorDetail}]` : "") +
        (p.errorContext ? ` [Context: ${p.errorContext}]` : "");
      console.log(`  ${loc}  ${msg}`);
    }
  }
  if (issues === 0) console.log(`✔ No issues found in ${files.length} file(s).`);
  else console.log(`\n✖ ${issues} issue(s) total in ${files.length} file(s).`);
  return issues === 0 ? 0 : 1;
}

(function main() {
  const { paths, flags } = parseArgs(process.argv.slice(2));
  if (paths.length === 0) {
    console.error("Usage: mdlint [--only MD052[,MD013...]] <file-or-folder> [...]");
    process.exit(1);
  }
  let files = [];
  for (const p of paths) {
    try { files = files.concat(collect(p)); }
    catch (e) { console.error(e.message); process.exit(1); }
  }
  const config = buildConfig(flags.only);
  const code = lint(files, config);
  process.exit(code);
})();
