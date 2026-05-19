---
name: shared-sections
description: Create or edit reusable _shared markdown included via the section shortcode. Use for duplicated install, architecture, or upgrade steps within a doc version.
paths: content/**/_shared/**/*.md
---

# Shared sections

## When to use

- Same paragraph/block appears on multiple pages in one version
- User asks to DRY up install/architecture/upgrade content

## Steps

1. Locate `{version}/_shared/` (e.g. `content/en/docs/2026.3/_shared/`).
2. Find existing fragment before creating a new file.
3. Add or edit `.md` under `_shared/` with normal markdown (no page frontmatter required for fragments).
4. Include from pages: `{{< section "/relative/path/from/_shared.md" >}}` (leading path as in `architecture.md`).
5. Fix all includers if you rename or move a shared file.

## Pitfalls

- Path must resolve for the page's version or Hugo errors at build.
- Shared files are per-version; syncing across 2026.3 / 2025.9 requires explicit user approval.
