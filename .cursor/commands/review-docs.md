---
name: review-docs
description: Review documentation changes for Hugo conventions, branding, links, and scope.
---

Review current doc changes (branch diff or open files).

1. Frontmatter complete; CORTEX literal in title/linkTitle; `ctx` in body where expected.
2. Shortcodes valid (`section` paths exist under `_shared`, `figure` paths under `content/static`).
3. No edits to ignored paths or unrelated doc versions.
4. Tone matches surrounding customer-facing procedural docs.
5. List risks: missing `urls.toml` keys, cross-version drift, broken shared paths. Check `data/urls.toml` for new keys that duplicate an existing target URL.
6. Link footers (`url` and `ref`): flag duplicate defs for the same target, and reference labels that do not match the definition label’s case (prefer one canonical def + `[Text][canonical]`).
7. Same-page links: flag inline `[…](#…)` anchors; expect footer `[Label]: {{< ref "#slug" >}}` plus reference-style body links with the same exact-case rules as `url`. Flag `{{< ref "…" >}}` that is not `#slug`-only (relative `.md` / `.md#fragment`) — expect `url` + `urls.toml`.

Output: brief bullet list of issues and suggested fixes.
