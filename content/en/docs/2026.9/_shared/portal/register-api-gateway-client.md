The {{% ctx %}} Portal cannot list micro-applications or invoke flows until its client is registered with the {{% ctx %}} API Gateway. Until registration is complete, a signed-in user is sent to `Portal Setup - API Gateway client`. Sign-in stays available. Catalogue and flow calls stay blocked. Only a user with the `Platform.Admin` role can complete the page.

Register the installed portal and each Portal SDK workspace separately. Each one has its own BFF.

Complete this after the portal website and its health endpoint have been checked. See [Try it out][].

## Installed portal

1. In a browser, open the {{% ctx %}} Portal, for example `https://localhost/portal`.
1. Sign in with a domain account that has the `Platform.Admin` role. The username `dev` exists only in a Portal SDK workspace.
1. The portal opens `Portal Setup - API Gateway client`. The address is `/api-gateway-client` on the portal, for example `https://localhost/portal/api-gateway-client`. If `ApplicationName` is not `portal`, use the name configured in [Configure {{% ctx %}} Portal Installation Script][] in both addresses.
1. On that page, register the portal's client with the {{% ctx %}} API Gateway.
1. Sign out, then sign in with the domain account that will use the portal. The catalogue is available once registration is complete.

## Portal SDK workspace

1. Start the workspace with `pnpm dev`, as described in [Set up the developer workspace][].
1. Open `http://localhost:5173` and sign in with username `dev` and password `dev-password`. This account exists only on that workstation, has the `Platform.Admin` role, and never calls the gateway.
1. Open `http://localhost:5173/api-gateway-client` and register the workspace client with the {{% ctx %}} API Gateway.

[Configure {{% ctx %}} Portal Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.ConfigurePortalInstallationScript" >}}
[Set up the developer workspace]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.SetUpDeveloperWorkspace" >}}
[Try it out]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.TryItOut" >}}
