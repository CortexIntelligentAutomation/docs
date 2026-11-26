---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the {{% ctx %}} Portal architecture when it is added to an existing Web Application Server."
weight: 10
---

# {{% param title %}}

{{% ctx %}} Portal replaces the {{% ctx %}} Interaction Portal. A signed-in user browses approved micro-applications and runs {{% ctx %}} flows. Micro-applications are built in the Portal SDK workspace, then published to the portal. See [Set up the developer workspace][].

## Components

| Component | Purpose | Server&nbsp;Role |
|-----------|---------|------------------|
| {{% ctx %}} Portal | IIS application added to the existing {{% ctx %}} Gateway site. The default application name is `portal`, so the portal is available under `/portal` on that site. It runs in its own application pool. | Web&nbsp;Application&nbsp;Server |
| Portal application | `Cortex.Portal.Bff.dll` and `web.config`, hosted in IIS with the ASP.NET Core Module from the .NET 10 Hosting Bundle. The installation script sets `Cortex:ApiGateway:BaseUrl` from `ServiceFabricApiGatewayEndpoint` so this application can call the {{% ctx %}} API Gateway. | Web&nbsp;Application&nbsp;Server |
| Portal website | Files in `wwwroot`, served with the portal application. | Web&nbsp;Application&nbsp;Server |
| {{% ctx %}} Gateway | Already installed. The portal is added to this site. When `ImportCertificate` is `$false`, the portal uses the certificate already assigned to the site. | Web&nbsp;Application&nbsp;Server |
| {{% ctx %}} API Gateway | {{< section "/architecture/components/purpose/api-gateway-service.md" >}} | Existing {{% ctx %}} installation |

## Sign-in and flows

The portal uses the {{% ctx %}} API Gateway for sign-in and for invoking flows:

* Sign-in. The gateway checks the user's domain credentials, and the browser receives an encrypted session cookie.
* Flows. The portal invokes flows on target packages. Gateway credentials stay on the portal server.

Catalogue and flow calls stay blocked until [API Gateway client setup][Register the API Gateway client] is complete. Sign-in stays available.

The Portal SDK workspace has a local administrator with username `dev`. That account is checked by the workspace and never calls the gateway. It exists only on that workstation.

## Web Application Server

{{% ctx %}} Portal is installed on the Web Application Server where {{% ctx %}} Gateway is already installed. The portal website and portal application are one IIS application on that Gateway site. The Web Application Server must be able to connect to the `ServiceFabricApiGatewayEndpoint` configured during [installation][Configure CORTEX Gateway Installation Script].

{{< figure src="/images/editable/Cortex Portal Architecture - Web Application Server.png" class="centre" title="CORTEX Portal on the Web Application Server" >}}

{{% alert title="Important" color="warning" %}}
This guide currently only describes how to add the {{% ctx %}} Portal to an existing Web Application Server with {{% ctx %}} Gateway installed. For any other installation scenario, please contact {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}}.
{{% /alert %}}

## Next Steps?

1. [Requirements][]

[Configure CORTEX Gateway Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew2" >}}
[Register the API Gateway client]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.RegisterApiGatewayClient" >}}
[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.Requirements" >}}
[Set up the developer workspace]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.SetUpDeveloperWorkspace" >}}
