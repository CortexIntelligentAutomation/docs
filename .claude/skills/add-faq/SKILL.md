---
name: add-faq
description: Add a new FAQ entry to the CORTEX documentation. Handles creating or extending FAQ category directories and ensures consistent structure, frontmatter, and shortcode usage. Provide the FAQ question and target version as arguments.
---

Add a new FAQ for: $ARGUMENTS

## Steps

1. **Confirm inputs** — establish:
   - The FAQ question / topic (required)
   - Target version (default: `2026.3`)
   - Whether this applies to multiple versions

2. **Explore existing FAQ categories**:
   - List directories under `content/en/docs/{VERSION}/FAQs/`
   - Read a sibling FAQ page to understand the structure and weight range

3. **Determine placement**:
   - If the question fits an existing category, add a new `.md` file there
   - If a new category is needed, create the category directory with a `_index.md`:

     ```yaml
     ---
     title: "How do I {category topic}?"
     linkTitle: "How do I {category topic}?"
     description: "Instructions on how to {brief description}."
     weight: <next available weight in FAQs/>
     ---

     Brief introductory paragraph explaining the category context.
     ```

4. **Create the FAQ page file** (kebab-case filename):

   ```yaml
   ---
   title: "FAQ question phrased as a title"
   linkTitle: "Short nav label"
   description: "One-sentence description of the answer."
   weight: <next weight in the category, spaced by 10>
   ---
   ```

5. **Write the answer** following these rules:
   - Use `{{% ctx %}}` for all product name references
   - Use numbered steps for any procedure
   - Always tag fenced code blocks with a language (` ```powershell `, ` ```json `)
   - Use `{{% alert title="Note" %}}` for warnings or important caveats
   - Reference external URLs via `{{< url path="Key" >}}` — add to `data/urls.toml` if new

6. **Multi-version check** — if the FAQ also applies to older supported versions (`2025.9`, `2025.3`, `2024.9`), ask the user whether to add it there too.

7. **Lint**:
   ```bash
   node mdlint.js
   ```
   Fix any reported issues before confirming.
