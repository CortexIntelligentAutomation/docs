---
title: "Develop Micro-applications"
linkTitle: "Develop Micro-applications"
description: "Information about creating and changing micro-applications in the {{% ctx %}} Portal SDK."
weight: 40
---

# {{% param title %}}

After the [developer workspace][Set up the developer workspace] is set up, create and change micro-applications in Cursor. The workspace file `docs/client-developer-guide.md` is the contract for SDK methods and manifests. The rules below are the ones that keep an application inside that contract.

## Create a micro-application

{{< section "/portal/create-micro-application.md" >}}

## Change a micro-application

1. Use the agent that created the application, or create a new agent.
1. Describe the change to make.

When a browser is open in the Cursor sidebar, Design Mode can be used while making the change.

## Review the code

Review the generated code before committing it.

1. Use the agent that created the application, or create a new agent.
1. Use the `/cortex-portal-code-review` skill.

## Remove a micro-application

{{% alert title="Important" color="warning" %}}
Removing an application that has not been committed to Git cannot be restored.
{{% /alert %}}

1. Use the agent that created the application, or create a new agent.
1. Use the `/cortex-portal-remove-app` skill.

The skill deletes `apps/microApplications/<id>/` and the staged copy of that application after you confirm.

## What a micro-application may change

| You may | You must not |
|---------|----------------|
| Edit `apps/microApplications/<id>/` | Edit `apps/shell`, the BFF, or the OpenAPI contract. Contact [{{% ctx %}} Service Portal][CORTEX Service Portal] to request that change. |
| Import `@platform/sdk` and `@platform/ui-kit` | Import `@platform/sdk/admin` from a micro-application. |
| Call `invokeFlow`, `getUser`, `signIn`, `signOut`, `getUserGroups`, `hasPermission`, and `requireSession` | Hold bearer tokens, call `fetch` or `axios`, or add `getToken()`. Flow credentials stay on the server. |
| Use layout-only CSS in the application | Import `primereact` or `primeicons`, use a native `input`, `select`, `textarea`, or `button`, or style controls with `.p-*` selectors. |

ESLint rule `eslint-plugin-platform-boundary` enforces the HTTP and import rules. When a control is missing from the ui-kit, stop and contact [{{% ctx %}} Service Portal][CORTEX Service Portal]. Do not replace it with HTML or PrimeReact in the micro-application. Shell-only controls, such as `Menu` and `AppsMenuIcon`, stay in the shell.

Show in-progress UI with the ui-kit `FlowInvocationNotice` while `invokeFlow` is running.

## Directory groups

`getUserGroups()` returns the signed-in user's directory groups. Each value is the full directory name from the gateway. Compare that full name.

```ts
import { getUserGroups } from '@platform/sdk';

const financeApprovers = 'CN=Finance-Approvers,OU=Group Management,DC=example,DC=com';
const groups = await getUserGroups();
const showFinanceControl = groups.includes(financeApprovers);
```

Compare the full name, including the `CN`, `OU`, and `DC` components. `hasPermission('Platform.Admin')` reads portal roles. Directory groups are a separate list.

`getUserGroups()` uses the user already loaded on the page when `getUser()` has run. Otherwise it calls `getUser()`. The call uses the portal session, and the response contains group names. The BFF reloads directory groups when it refreshes the access token. There is no separate timer.

## Human in the loop

Onboard User (`apps/microApplications/onboard-user`) is the reference application. To pause a flow for a person:

1. In `/cortex-portal-create-app`, answer yes to whether the application requires Human In The Loop. To add it to an existing application, use `/cortex-portal-develop-app`. The application then includes `./HitlView`.
1. When the application starts the process with `invokeFlow`, pass `_ProcessId` and `_ProcessName`. `_ProcessId` is the catalogue id. `_ProcessName` is the catalogue title. Take both from the application manifest so Studio receives the title from the micro-application.
1. In Studio, keep `_ProcessId` on the parameters of every human step. The UI page names in Studio must match `activeTask.uiPageName` in `./HitlView`.
1. Approve the catalogue id before a task page can load the application.
1. Sign in, start the process from the catalogue, open the task from the process dashboard, and complete each `./HitlView` step.

On the task page, use the step label on the action card. Do not repeat the catalogue application name, and do not render the task description. The shell already shows that context.

Property names sent when a step is completed must match the Studio variable names and casing. At most 100 keys can be sent. A `409` response means the task was completed, cancelled, or changed by someone else. Show the response detail and return the user to the process dashboard.

`_Environment` is the portal install name (`Cortex:Environment`, for example `CP`). Gateway process storage keys use that install name.

## Remarks

### Known Limitations

* The AI skills can change platform files outside `apps/microApplications/`. Revert those files. `pnpm-lock.yaml` is the only other file the skills are expected to change. Report the prompt and the changed files to [{{% ctx %}} Service Portal][CORTEX Service Portal].

## Next Steps?

1. [Publish a micro-application][]

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Publish a micro-application]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.PublishMicroApplication" >}}
[Set up the developer workspace]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.SetUpDeveloperWorkspace" >}}
