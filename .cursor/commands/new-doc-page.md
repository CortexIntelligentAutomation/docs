---
name: new-doc-page
description: Create a new CORTEX documentation page from a sibling template in the requested version and section.
---

Create a new documentation page for CORTEX Product Portal.

1. Confirm doc version (e.g. 2026.3) and target folder under `content/en/docs/{version}/`.
2. Open the closest sibling `_index.md` or leaf `.md` and mirror structure.
3. Apply the add-documentation-page skill workflow.
4. List files created/changed and any `urls.toml` keys the user must add (do not read ignored data files).
5. Summarize nav impact (`weight`, parent section).
