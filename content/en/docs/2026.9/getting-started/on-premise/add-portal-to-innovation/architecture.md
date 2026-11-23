---
title: "Architecture"
linkTitle: "Architecture"
description: "Information about the {{% ctx %}} Portal architecture when it is added to an existing Web Application Server."
weight: 10
---

# {{% param title %}}

## Components

| Component | Purpose | Server&nbsp;Role |
|-----------|---------|------------------|
| {{% ctx %}} Portal | IIS application added to the existing {{% ctx %}} Gateway site. The default application name is `portal`, so the portal is available under `/portal` on that site. It runs in its own application pool. | Web&nbsp;Application&nbsp;Server |
| Portal application | `Cortex.Portal.Bff.dll` and `web.config`, hosted in IIS with the ASP.NET Core Module from the .NET 10 Hosting Bundle. The installation script sets `Cortex:ApiGateway:BaseUrl` from `ServiceFabricApiGatewayEndpoint` so this application can call the {{% ctx %}} API Gateway. | Web&nbsp;Application&nbsp;Server |
| Portal website | Files in `wwwroot`, served with the portal application. | Web&nbsp;Application&nbsp;Server |
| {{% ctx %}} Gateway | Already installed. The portal is added to this site. When `ImportCertificate` is `$false`, the portal uses the certificate already assigned to the site. | Web&nbsp;Application&nbsp;Server |
| {{% ctx %}} API Gateway | {{< section "/architecture/components/purpose/api-gateway-service.md" >}} | Existing {{% ctx %}} installation |

## Web Application Server

{{% ctx %}} Portal is installed on the Web Application Server where {{% ctx %}} Gateway is already installed. The portal website and portal application are one IIS application on that Gateway site. The Web Application Server must be able to connect to the `ServiceFabricApiGatewayEndpoint` configured during [installation][Configure CORTEX Gateway Installation Script].

{{% alert title="Important" color="warning" %}}
This guide currently only describes how to add the {{% ctx %}} Portal to an existing Web Application Server with {{% ctx %}} Gateway installed. For any other installation scenario, please contact {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}}.
{{% /alert %}}

## Next Steps?

1. [Requirements][]

[Configure CORTEX Gateway Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew2" >}}
[Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.Requirements" >}}
