# Content authoring (Hugo / Docsy)

Applies when editing files under `content/`.

## Page types

| File | Purpose |
| --- | --- |
| `_index.md` | Section landing; `linkTitle` + `weight` control nav |
| `*.md` | Leaf topic |
| `_shared/**/*.md` | Fragments via `{{< section "/path.md" >}}` |

## Frontmatter

```yaml
---
title: "Page Title"
linkTitle: "Nav Label"
description: "Summary for indexes and SEO."
weight: 10
---
```

- `title` / `linkTitle`: literal **CORTEX**, not `{{% ctx %}}`.
- `description`: may use `{{% ctx %}}` in prose.

## Body

- Match siblings: `# {{% param title %}}`, `pageinfo`, `alert`, `figure`, `url`, `section`, `tab`/`tabpane`.
- Search `{version}/_shared/` before duplicating paragraphs.
- Do not edit other version folders unless explicitly asked.
