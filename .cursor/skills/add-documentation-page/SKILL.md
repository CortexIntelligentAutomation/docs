---
name: add-documentation-page
description: Add a new Hugo documentation page under a versioned CORTEX docs section. Use when creating topics, install steps, reference pages, or _index.md section roots.
---

# Add documentation page

## When to use

- New leaf page or section `_index.md` under `content/en/docs/{version}/`
- User names a doc version (e.g. 2026.3) and section path

## Steps

1. Find a sibling page in the same folder; copy frontmatter shape (`title`, `linkTitle`, `description`, `weight`).
2. Set `weight` relative to neighbors (lower = earlier in sidebar).
3. Use literal CORTEX in `title`/`linkTitle`; `{{% ctx %}}` in body.
4. For install/guide style, use `# {{% param title %}}` and match callouts (`pageinfo`, `alert`).
5. Add next-step / cross-page links with `{{< url path="Cortex...." >}}` — reuse keys from sibling pages and look up [`data/urls.toml`](../../../data/urls.toml) before inventing any key. Never add a second `urls.toml` entry for a page that already has one. For a brand-new page, add at most one new key (sibling style). One footer definition per path; use `[variant][canonical]` when wording or case differs (exact case match on the shared label). Same-page headings: one `[Label]: {{< ref "#slug" >}}` per anchor; same exact-case / `[variant][canonical]` rules as `url` — never inline `[text](#slug)`.
6. If content repeats across pages, add `{version}/_shared/...` and `{{< section "/path.md" >}}` instead.
7. Do not edit other version trees unless requested.

## Checklist

- [ ] Frontmatter complete
- [ ] Branding matches `ctx` convention
- [ ] Cross-page links: keys reused or looked up in `data/urls.toml`; no duplicate target URLs; footers dedupe by path with shared labels (exact case)
- [ ] Same-page links: `ref` footers (`#slug`), not inline `[…](#…)`; one def per anchor; exact-case labels / `[variant][canonical]`
- [ ] At most one new `urls.toml` key if this page is new
- [ ] Scope limited to requested version
