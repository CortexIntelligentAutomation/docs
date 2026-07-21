---
name: review-docs
description: Review documentation changes for Hugo conventions, branding, links, and scope.
---

Review current doc changes (branch diff or open files).

1. Frontmatter complete; CORTEX literal in title/linkTitle; `ctx` in body where expected.
2. Shortcodes valid (`section` paths exist under `_shared`, `figure` paths under `content/static`).
3. No edits to ignored paths or unrelated doc versions.
4. Tone matches surrounding customer-facing procedural docs.
5. List risks: missing `urls.toml` keys, cross-version drift, broken shared paths.
6. Link footers: flag duplicate `{{< url path=… >}}` for the same path, and reference labels that do not match the definition label’s case (prefer one canonical def + `[Text][canonical]`).

Output: brief bullet list of issues and suggested fixes.
