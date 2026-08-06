---
name: new-doc-page
description: Create a new CORTEX documentation page from a sibling template in the requested version and section.
---

Create a new documentation page for CORTEX Product Portal.

1. Confirm doc version (e.g. 2026.3) and target folder under `content/en/docs/{version}/`.
2. Open the closest sibling `_index.md` or leaf `.md` and mirror structure.
3. Apply the add-documentation-page skill workflow.
4. Look up keys in `data/urls.toml` (and sibling pages) before adding any — for this page’s `Cortex.*` key, any heading destinations (`#slug` in the `urls.toml` value), and any external destinations. Never use plain `[text](https://…)` links. Never append `#…` after `{{< url … >}}`. List files created/changed and any **new** `urls.toml` keys added (page-level plus fragment keys as needed; never a second key for the same full destination URL).
5. Summarize nav impact (`weight`, parent section).
