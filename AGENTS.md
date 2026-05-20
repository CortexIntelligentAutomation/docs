# AGENTS.md

## Repository purpose

- This repository builds the CORTEX Product Portal documentation site
  (Hugo + Docsy).
- Primary source content lives in `content/en`; built output is written to `docs/`.

## Key directories

- `content/en/docs/<version>/`: versioned product docs
  (for example `2026.3`, `2025.9`).
- `content/en/docs/<version>/_shared/`: shared pages reused within a version.
- `content/en/blog/releases/`: release note posts.
- `content/static/<version>/`: versioned static assets referenced by docs pages.
- `data/urls.toml`: canonical URL map used by the `{{< url >}}` shortcode.
- `layouts/shortcodes/url.html`: validates internal URL shortcode targets
  at build time.

## Authoring conventions

- Preserve front matter patterns used in nearby files (`title`, `linkTitle`,
  `description`, `weight`, and page-specific fields like `date` or `author`).
- Keep edits version-aware: change the intended version folder only,
  unless asked to backport/forward-port.
- Prefer shortcode-based internal links:
  - Use `{{< url path="..." version="..." >}}` when linking through `data/urls.toml`.
  - Use `{{< ref "#section-anchor" >}}` for local section anchors.
  - Keep `{{% ctx %}}` / `{{% cr %}}` shortcode usage consistent
    with surrounding docs.
- When new reusable internal link targets are introduced,
  update `data/urls.toml` accordingly.
- Do not hand-edit `content/en/docs/latest` or `content/static/latest`;
  regenerate them via `createLatest.ps1`.

## Build, lint, and validation

- Install dependencies: `npm install`
- Fast local build: `npm run build`
- CI-like build flow:
  1. `./createLatest.ps1`
  2. `hugo --minify --environment GitHubPages -d dist --buildFuture`
  3. `node ./assets/js/generate-lunr-index.js dist`
- Markdown lint (repo script): `node mdlint.js <file-or-folder>`
- Optional focused lint rule: `node mdlint.js --only MD052 <file-or-folder>`
- Optional URL map cleanup check:
  `node scan-and-clean-toml.js --toml data/urls.toml --dir content/en`
  `--out data/urls.toml --json paths.report.json`

## Quality bar for documentation changes

- Confirm the changed pages build without Hugo/link validation errors.
- Verify links and anchors introduced by the edit resolve correctly.
- Keep terminology and capitalization aligned with nearby CORTEX docs.
- Keep scope tight: avoid unrelated refactors or formatting churn
  in untouched docs.

## Safety and scope constraints

- Avoid changes under `themes/docsy/` unless the task explicitly requires
  theme-level edits.
- Treat large generated/asset updates as deliberate changes; do not regenerate
  broad folders unless needed by the task.
- For risky operations (mass delete/move/version-wide rewrites),
  propose a plan before executing.
