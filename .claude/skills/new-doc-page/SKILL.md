---
name: new-doc-page
description: Create a new documentation page in the CORTEX Product Portal following project conventions. Provide the target version, section, and page topic as arguments (e.g., "2026.3 FAQs configure-ssl").
---

Create a new documentation page for: $ARGUMENTS

## Steps

1. **Clarify inputs** if the version, section, or topic are not all provided. Ask for:
   - Version (default: `2026.3`)
   - Section (`FAQs`, `Getting Started`, `Guides`, `Whats New`, `Reference`, `Overview`, `Tutorials`)
   - Page topic / title

2. **Determine the target directory** under `content/en/docs/{VERSION}/{SECTION}/`.
   Use kebab-case for directory and file names (e.g., `configure-ssl-certificates/`).
   If this page belongs in a subcategory that does not yet exist, create a `_index.md` for it first.

3. **Check existing siblings** in the same section to understand:
   - The `weight` range in use (pick the next available value, spaced by 10)
   - Writing patterns and level of detail to match

4. **Create the file** with this frontmatter:

   ```yaml
   ---
   title: "Full Descriptive Page Title"
   linkTitle: "Short Nav Label"
   description: "One sentence describing what this page covers."
   weight: <next available weight>
   ---
   ```

5. **Write the content** following these rules:
   - Use `{{% ctx %}}` instead of hardcoding "CORTEX" in prose
   - Use numbered steps (`1.`, `2.`, ...) for procedures
   - Specify the language on every fenced code block (` ```powershell `, ` ```json `, etc.)
   - Use `{{% alert title="Note" %}} ... {{% /alert %}}` for important callouts
   - Reference external URLs via `{{< url path="Key.Path" >}}` — add to `data/urls.toml` first if new

6. **Lint the new file**:
   ```bash
   node mdlint.js
   ```
   Fix any reported issues.

7. **Confirm** the file path and content with the user before committing.
