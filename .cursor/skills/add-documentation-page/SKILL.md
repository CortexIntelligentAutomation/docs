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
5. Add next-step links with `{{< url path="Cortex...." >}}` — reuse keys from sibling pages.
6. If content repeats across pages, add `{version}/_shared/...` and `{{< section "/path.md" >}}` instead.
7. Do not edit other version trees unless requested.

## Checklist

- [ ] Frontmatter complete
- [ ] Branding matches `ctx` convention
- [ ] Links follow section `url` patterns
- [ ] Scope limited to requested version
