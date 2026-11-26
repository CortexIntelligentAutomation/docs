Publish a micro-application after it has been implemented under `apps/microApplications/<id>/`. The catalogue lists only applications that have been built and staged. `pnpm dev` does not discover a new application on its own.

## Verify

1. In Cursor, use the `/cortex-portal-verify-app` skill, or from the workspace folder run:

    ```powershell
    pnpm verify
    ```

    `pnpm verify` includes `pnpm build`.

## Publish and approve

1. Use the `/cortex-portal-publish-app` skill.
    * When the skill asks to add the application to the local catalogue, answer `yes`.
    * When the skill asks to approve the application, answer `yes`. The application is then listed for signed-in users.

    The same actions can be run from the workspace folder. Replace `<id>` with the application id:

    ```powershell
    pnpm --filter @cortex/<id> build
    node scripts/stage-micro-applications.mjs --apps <id>
    node scripts/stage-micro-applications.mjs --apps <id> --approve
    ```

    `pnpm build` refreshes every built application and keeps the approval flags that are already set. Staging with `--apps` and without `--approve` leaves that application unapproved, so the catalogue omits it until it is approved.

1. If `pnpm dev` is already running, restart it so the BFF reloads the registry and the `/data` files.
1. In the browser, reload the portal. A normal reload is enough. The catalogue returns a cache-busted address for `remoteEntry.js`.

## Where the files go

Run `node scripts/portal-workspace-profile.mjs` to list the staging folders for this workspace.

| What | Where |
|------|--------|
| Source you edit | `apps/microApplications/<id>/` |
| Staged build | Each BFF apps folder for that id, including `remoteEntry.js` and `application.manifest.json` |
| Approval registry | `approved-micro-applications.json` under each BFF data folder. This file is not served as static files. |
| Browser address | `/apps/<id>/remoteEntry.js` on the portal origin |

Keep source changes in `apps/microApplications/<id>/`. The staged files and the approval registry are outputs of build, publish, and approve.

## Remarks

### Build warning

`vite build` reports one chunk larger than 500 kB for each micro-application. That chunk is the ui-kit PrimeReact code, bundled as the shared fallback. The warning is expected and does not stop staging.

### After a portal upgrade

Replace the workspace, or take a new SDK drop. Copy only `apps/microApplications/` into the new workspace, run `pnpm install` and `pnpm build`, then verify and publish each application again. Approve the applications again when the new workspace does not already list them as approved.

### Known Limitations

* The manifest security block is not a scan result. Staging writes `security.scanTool` as `not-scanned` and `passed` as `true` so the manifest schema is valid. The SHA-256 of `remoteEntry.js` in that block is the real hash, and the BFF uses it to detect a stale bundle. Scan the micro-application with your own tooling before production.
* Catalogue approval is stored in the local registry only. There is no admin approval screen in this release.
* The ui-kit loads only the latin and latin-ext subsets of Poppins and Source Code Pro. Text in other scripts falls back to a system font.

If the application does not appear in the catalogue, or a flow call fails, see [Troubleshooting][].

[Troubleshooting]: {{< url path="Cortex.Reference.Troubleshooting.CortexPortal.MainDoc" >}}
