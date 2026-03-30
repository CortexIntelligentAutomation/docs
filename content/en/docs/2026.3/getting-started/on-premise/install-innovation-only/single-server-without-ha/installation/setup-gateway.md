---
title: "Setup Gateway"
linkTitle: "Setup Gateway"
description: "Information about setting up {{% ctx %}} Gateway for first-time use."
weight: 50
---

# {{% param title %}}

This guide describes how to setup Gateway. Please ensure that the [Install Web Application Server][] step has been completed before taking these steps.

## Gateway Initial Setup

{{< section "/install-web-application-server/setup-gateway-initial-setup.md">}}

### Account Details

{{< section "/install-web-application-server/setup-gateway-account-details.md">}}

### Authentication

{{< section "/install-web-application-server/setup-gateway-authentication.md">}}

#### LDAP

{{< section "/install-web-application-server/setup-gateway-authentication-ldap.md">}}

#### OpenID Connect

{{< section "/install-web-application-server/setup-gateway-authentication-oidc.md">}}

### Authorisation

{{< section "/install-web-application-server/setup-gateway-authorisation.md">}}

## Next Steps?

1. [Post-Installation][]

[Account Details]: {{< ref "#account-details" >}}
[Authorisation]: {{< ref "#authorisation" >}}
[Authentication]: {{< ref "#authentication" >}}

[Install Web Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallWebApplicationServerNew" >}}
[supported web browser]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.WebBrowserRequirementsNew" >}}
[Post-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.PostInstallation" >}}