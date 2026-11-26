Use these steps on a developer workstation after the portal installation has been tested and the installed portal's API Gateway client has been registered. See [Try it out][] and [Register the API Gateway client][]. These steps do not change the portal on the Web Application Server.

{{< section "/portal/developer-workstation-requirements.md" >}}

Run every command from the folder where the SDK was extracted.

## Extract the SDK and initialise Git

1. Extract `Cortex Innovation {{< version >}} - Portal SDK.zip` to a folder on the workstation.
1. If the Git host rejects files larger than 100 MB, track the prebuilt host with Git LFS before the first commit. The workspace commits `eng/bff-host/`, including `Cortex.Portal.Bff.exe` (about 107 MB), so a teammate who clones the repository can run `pnpm dev` without the zip. GitHub is one host that rejects files over 100 MB.

    ```powershell
    git lfs install
    git lfs track "eng/bff-host/*.exe"
    git add .gitattributes
    ```

1. Initialise the repository and commit the workspace:

    ```powershell
    git init -b main
    git add .
    git commit -m "Initial commit"
    ```

Commit a replacement `Cortex.Portal.Bff.exe` only when moving to a new Portal SDK release.

The shipped `.gitignore` keeps the following out of source control:

* `eng/bff-host/appsettings.json`. Each developer has their own host settings. When the file is missing, `pnpm dev` creates it from the committed `eng/bff-host/appsettings.template.json`.
* `eng/bff-host/apps/` and `eng/bff-host/data/approved-micro-applications.json`. `pnpm build` regenerates this local catalogue. The committed `approved-micro-applications.example.json` seeds a new clone with Calculator and Onboard User. When the primary file is missing, `pnpm dev` copies the example, so those applications can be published and approved after a browser refresh without restarting the BFF.

To use a remote repository, follow the instructions from the repository provider, for example Azure DevOps.

## Install PNPM and dependencies

1. Install and activate PNPM 11.21.0, then install the workspace dependencies:

    ```powershell
    npm install -g corepack
    corepack enable
    corepack prepare pnpm@11.21.0 --activate
    pnpm install
    ```

## Configure the BFF host

`pnpm dev` runs the prebuilt host in `eng\bff-host\`. That host reads `eng/bff-host/appsettings.json`. The workspace includes `eng/bff-host/appsettings.template.json` and, for reference, `eng/bff-host/appsettings.Development.example.json`.

This Base URL belongs to the workspace. The portal on the Web Application Server receives its Base URL from [Configure {{% ctx %}} Portal Installation Script][].

1. Run `pnpm dev` once, then stop it with Ctrl+C. This creates `eng/bff-host/appsettings.json` from the template.
1. Open `eng/bff-host/appsettings.json`.
1. Set `Cortex > ApiGateway > BaseUrl` to the {{% ctx %}} API Gateway, for example `https://server.domain.com:8722`.

To override the file without editing it, set the `Cortex__ApiGateway__BaseUrl` environment variable before `pnpm dev`.

## Build and stage the reference applications

The catalogue lists only applications that have been built and staged. `pnpm dev` does not discover them on its own.

1. Build and stage Calculator and Onboard User:

    ```powershell
    pnpm build
    ```

    This builds `apps/microApplications/calculator` and `apps/microApplications/onboard-user`, and stages them into `eng/bff-host/` with their approval flags.

## Start the workspace

1. Start the workspace:

    ```powershell
    pnpm dev
    ```

1. Open `http://localhost:5173`. The sign-in page is displayed.

## Sign in and register the API Gateway client

The workspace has its own BFF, so register it here as well.

1. Sign in with username `dev` and password `dev-password`. This account exists only on this workstation, has the `Platform.Admin` role, and never calls the gateway.
1. Complete [API Gateway client setup for the SDK][Register the API Gateway client for the SDK] at `http://localhost:5173/api-gateway-client`.

Until that setup is complete, this workspace blocks the catalogue and flows.

## Prepare the reference flows

Calculator and Onboard User call flows on the {{% ctx %}} API Gateway. Import and publish those flows before opening the applications. The same order and package names are written in `eng/flow-packages/README.md` in the SDK.

### Calculator

1. Import the Studio export from `eng/flow-packages/CalculatorStudioPkg/` into {{% ctx %}} Studio. See [Import individual flows][].
1. Create a gateway package named `CalculatorPkg` that includes the `Calculator` flow, and publish it. See [Create a package][] and [Publish a package version][].
1. Configure user authorisation for the accounts that will run Calculator. See [Manage flow access][].

### Onboard User

1. Import `eng/flow-packages/HumanInTheLoopStudioPkg/` first. See [Import individual flows][].
1. Import `eng/flow-packages/UserOnboardingStudioPkg/`.
1. Create a gateway package named `UserOnboardingPkg` and publish it. See [Create a package][] and [Publish a package version][].

## Open the reference applications

1. Sign out and sign in with a domain account, or stay signed in as `dev`.
1. Confirm that the catalogue lists Calculator and Onboard User.
1. Open an application by selecting its name.

Calculator is an example. It can be removed later with `/cortex-portal-remove-app`.

## What to read in the workspace

1. Open `portal-release.json` and confirm `releaseVersion`, `gitCommit`, and the component versions.
1. Read `AGENTS.md` and the blueprint pair in `docs/ai/`.
1. See `docs/testing.md` for the verify commands.
1. Run `node scripts/portal-workspace-profile.mjs` to list the BFF content root and the staging paths.

Creating, changing, and removing micro-applications is covered in [Develop micro-applications][].

[Configure {{% ctx %}} Portal Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.ConfigurePortalInstallationScript" >}}
[Create a package]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.CreatePackage" >}}
[Develop micro-applications]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.DevelopMicroApplications" >}}
[Import individual flows]: {{< url path="Cortex.Tutorials.Administration.StudioImport.ImportIndividualFlows" >}}
[Manage flow access]: {{< url path="Cortex.Tutorials.Administration.StudioAuthorisation.ManageFlowAccess" >}}
[Publish a package version]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.PublishPackage" >}}
[Register the API Gateway client]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.RegisterApiGatewayClient" >}}
[Register the API Gateway client for the SDK]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.RegisterApiGatewayClientSdk" >}}
[Try it out]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.TryItOut" >}}
