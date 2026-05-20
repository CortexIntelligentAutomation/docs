---
name: new-version
description: Set up a new CORTEX documentation version directory by copying the current latest version and wiring it into Hugo config. Run at the start of a new product release cycle. Provide the new version number as the argument (e.g., "2026.9").
disable-model-invocation: true
---

Set up a new documentation version for: $ARGUMENTS

Confirm the new version number before executing any step (e.g., `2026.9`).

## Steps

1. **Identify the current latest version** — read `config/_default/config.toml` and note the version listed as latest in `[params.versions]`.

2. **Create a feature branch**:
   ```bash
   git checkout -b Feature/add-<NEW_VERSION>-docs
   ```

3. **Copy the latest version directory** to the new version:
   ```powershell
   Copy-Item -Path "content/en/docs/<CURRENT_LATEST>" -Destination "content/en/docs/<NEW_VERSION>" -Recurse
   ```
   Confirm the copy completed and the new directory exists before continuing.

4. **Update `config/_default/config.toml`**:
   - Add the new version to the `[params.versions]` list
   - Move the `latest` alias (or equivalent marker) to the new version
   - Verify the TOML syntax is valid after editing — malformed TOML will break the build

5. **Update `createLatest.ps1`** — change the source version it reads from to the new version number.

6. **Regenerate the `latest/` alias**:
   ```powershell
   powershell ./createLatest.ps1
   ```

7. **Verify the build**:
   ```bash
   npm run build
   ```
   Resolve any Hugo errors before continuing.

8. **Commit** with a descriptive message:
   ```
   Feature: add <NEW_VERSION> docs version directory
   ```

Each step requires confirmation before execution. The config.toml and createLatest.ps1 changes are the most critical — double-check version strings match exactly.
