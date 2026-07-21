# CORTEX Product Portal — Agent Instructions

This repository is the source for the [CORTEX Product Portal](https://docs.wearecortex.com/) (Hugo + Docsy). Use these instructions when editing documentation, layouts, or static assets.

## Repository purpose

- **Site**: Public product documentation for the CORTEX automation platform.
- **Stack**: Hugo static site with Docsy theme, custom shortcodes under `layouts/shortcodes/`, versioned content under `content/en/docs/`.
- **Contributions**: Per [README.md](README.md), external contributions and feedback go through [CORTEX Support](https://support.wearecortex.com/). Do not assume undocumented publish or deploy steps.

## How to work in this repo

### Plan before large edits

For multi-page or cross-version changes, outline affected paths first (which version folders, `_shared` snippets, `urls.toml` entries, images). Prefer small, reviewable diffs over sweeping rewrites.

### Versioned documentation

- Product docs live under `content/en/docs/{version}/` (e.g. `2026.3`, `2025.9`, `2024.9`).
- Each version has a `_shared/` folder for reusable sections included via the `section` shortcode.
- When changing behavior that applies to multiple releases, identify whether content is duplicated per version or centralized in `_shared` before editing.
- Canonical example: `content/en/docs/2026.3/getting-started/on-premise/install-innovation-only/single-server-without-ha/architecture.md`

### Branding and naming

- In page **body** text, use `{{% ctx %}}` for the product name — do not hardcode "CORTEX" in prose when the shortcode applies.
- In YAML **`title`** and **`linkTitle`**, use the literal name (e.g. `CORTEX`) — shortcodes are not used there.
- Release label in prose: `{{< version >}}` (reads `{version}/_shared/currentVersion.md`).

### Images and diagrams

- Versioned assets: `content/static/{version}/images/` (`editable/` for draw.io).
- Use `{{< figure src="/images/..." >}}`; see `layouts/shortcodes/figure.html`.
- Diagram notes: `content/static/2026.3/images/_ReadMe.md`

### Security and ignored paths

Respect [.cursorignore](.cursorignore). Do not read or commit Hugo config, other `data/**`, CI workflows, secrets, or internal/draft paths. **Exception:** read and update [`data/urls.toml`](data/urls.toml) for link keys — look up existing keys first; do not add a second key that maps to the same destination (docs page or external URL).

## Project agent assets

| Asset | Location |
| --- | --- |
| Rules | `.cursor/rules/*.mdc` |
| Skills | `.cursor/skills/*/SKILL.md` |
| Commands | `.cursor/commands/*.md` |
| Agents | `.cursor/agents/*.md` |

## Quality bar

- Procedural, customer-facing tone; preserve frontmatter (`title`, `linkTitle`, `description`, `weight`).
- Prefer shortcodes over raw HTML; match `{{< url path="…" >}}` for internal **and** external links (never plain `[text](https://…)` or bare URLs).
- Scope changes to the version(s) the user requested.

## What not to do

- Do not modify `public/`, `node_modules/`, or ignored config/data files (except allowed updates to `data/urls.toml`).
- Do not invent install commands or CI steps not documented in-repo.
- Do not remove or weaken `.cursorignore` without explicit user approval.
