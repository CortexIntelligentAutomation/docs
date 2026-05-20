---
name: cortex-docs-workflow
description: >-
  Use when editing or creating CORTEX documentation pages in this repository,
  especially under content/en/docs, content/en/blog/releases, content/static,
  and data/urls.toml. Applies repo-specific authoring, versioning, linking,
  and validation steps.
---

# CORTEX Docs Workflow

Follow this workflow for documentation tasks in this repository.

## 1) Locate the correct version scope

1. Determine the target docs version first (for example `2026.3`).
2. Edit only that version folder unless the user asks for multi-version updates.
3. Keep static assets under matching version paths in `content/static/<version>/`.

## 2) Follow local authoring conventions

1. Preserve front matter style from adjacent files (`title`, `linkTitle`,
   `description`, `weight`, plus contextual fields like `date` and `author`).
2. Keep headings and terminology consistent with nearby CORTEX pages.
3. Avoid broad formatting rewrites outside the requested scope.

## 3) Apply linking rules

1. Prefer shortcode-driven internal links via `{{< url path="..." >}}` keys
   from `data/urls.toml`.
2. Use `{{< ref "#anchor" >}}` for local section anchors.
3. Keep existing `{{% ctx %}}` / `{{% cr %}}` shortcode usage patterns intact.
4. If you add a new canonical internal link target, add or update the
   corresponding key in `data/urls.toml`.

## 4) Respect latest-docs generation behavior

1. Do not manually edit `content/en/docs/latest` or `content/static/latest`.
2. If version metadata or latest-version content needs refresh, run `./createLatest.ps1`.

## 5) Validate before finalizing

1. Run markdown lint on touched files: `node mdlint.js <file-or-folder>`.
2. Run a build:
   - Fast path: `npm run build`
   - CI-like path when needed:
     - `./createLatest.ps1`
     - `hugo --minify --environment GitHubPages -d dist --buildFuture`
     - `node ./assets/js/generate-lunr-index.js dist`
3. If link integrity is in scope, run the repo HTML/link checks using
   `.htmltest.yml` after building.

## 6) Report outcome clearly

1. Summarize exactly which version(s) and files changed.
2. Call out any checks not run and why (missing tools, time, or scope constraints).
