The workstation needs:

* The {{% ctx %}} API Gateway on the installation where the portal is installed.
* A valid Cursor license.
* Git.
* Node.js 24 or later. The workspace requires `>=24`. When Node.js is installed with nvm, run `nvm use 24` in the workspace folder.
* PNPM 11.21.0.
* The `Cortex Innovation {{< version >}} - Portal SDK.zip` artefact.
* No .NET SDK. `pnpm dev` runs the prebuilt BFF under `eng/bff-host/`.
