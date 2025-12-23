---
title: "Setup Gateway"
linkTitle: "Setup Gateway"
description: "Information about setting up {{% ctx %}} Gateway for first-time use."
weight: 50
---

# {{% param title %}}

This guide describes how to setup Gateway. Please ensure that the [Install Web Application Server][] step has been completed before taking these steps.

## Gateway Initial Setup

Log on to Gateway and run through the setup wizard:

1. Open a [supported web browser][] and navigate to `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://server.domain.com/gateway`.

    If an error message is displayed in the browser, wait a few minutes and refresh the page as it is possible that the website was still starting.
1. Log on using the default credentials that Gateway deploys with:

    Username: `administrator`

    Password: `Adm1n1strat0r`
1. On a newly installed system, you will be presented with a Setup Wizard, which will guide you through some basic configuration steps:
    * [Account Details][]
    * [Authentication][]
    * [Authorisation][]

1. Click `Next` and follow the steps in the setup wizard to configure the relevant areas.
    {{< figure class="centre" src="/images/Gateway Setup1.png" title="Initial Setup Screen" >}}

{{< section "/install-web-application-server/setup-gateway.md">}}

## Next Steps?

1. [Post-Installation][]

[Account Details]: {{< ref "#account-details" >}}
[Authorisation]: {{< ref "#authorisation" >}}
[Authentication]: {{< ref "#authentication" >}}

[Install Web Application Server]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.InstallWebApplicationServerNew" >}}
[supported web browser]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.WebBrowserRequirementsNew" >}}
[Post-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.PostInstallation" >}}
