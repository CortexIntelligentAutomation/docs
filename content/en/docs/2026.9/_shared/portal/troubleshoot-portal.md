Use these checks when a micro-application does not build, load, or call a flow.

## ESLint reports `no-direct-http` or `no-direct-primereact`

Call the portal through `@platform/sdk`, and build the UI with `@platform/ui-kit`. See [Develop micro-applications][].

## ESLint reports `no-native-form-controls`

Replace the HTML control with a ui-kit control. When the ui-kit has no control for that case, contact [{{% ctx %}} Service Portal][CORTEX Service Portal] and ask for a ui-kit extension. Keep the micro-application on `@platform/ui-kit`.

## API calls return 401

The session has expired. Sign in again.

## The micro-application area is blank and shows a compatibility message

The application manifest does not match the portal that is running. This is expected after a portal upgrade until the application is built and published again. See [After a portal upgrade][].

## The micro-application fails to load

The catalogue address for the application must be `/apps/<id>/remoteEntry.js`. The portal may append a `?v=` query string. In the browser network tab, confirm that `remoteEntry.js` is requested from that path and that the response is successful.

## A published micro-application still shows the previous version

Reload the portal with the browser Reload command. The catalogue returns a cache-busted `remoteEntry.js` address.

## `invokeFlow` returns Problem Details

Either API Gateway client setup is incomplete, or the flow is not imported and published on the gateway. Check [API Gateway client setup][Register the API Gateway client] and [Prepare the reference flows][] when the failure is from Calculator or Onboard User. For an application you have added, confirm that its package is published and that the signed-in user is allowed to invoke the flow.

## The application is missing from the catalogue

The application has not been staged, it is not approved, or `pnpm dev` was not restarted after staging. See [Publish a micro-application][]. `pnpm build` keeps existing approval flags. Staging with `--apps` and without `--approve` leaves the application unapproved, so the catalogue omits it.

## Git rejects `Cortex.Portal.Bff.exe` on push

The prebuilt host executable is about 107 MB. Hosts such as GitHub reject files over 100 MB unless they are tracked with Git LFS. See [Set up the developer workspace][].

## An agent changed files outside the micro-application

Revert the platform files. The skills are expected to change `apps/microApplications/` and, in some cases, `pnpm-lock.yaml`. Contact [{{% ctx %}} Service Portal][CORTEX Service Portal] and include the prompt and the list of files the agent changed. See [Develop micro-applications][].

[After a portal upgrade]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.PublishMicroApplicationUpgrade" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Develop micro-applications]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.DevelopMicroApplications" >}}
[Prepare the reference flows]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.PrepareReferenceFlows" >}}
[Publish a micro-application]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.PublishMicroApplication" >}}
[Register the API Gateway client]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.RegisterApiGatewayClient" >}}
[Set up the developer workspace]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.SetUpDeveloperWorkspace" >}}
