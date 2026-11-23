---
title: "Try it out"
linkTitle: "Try it out"
description: "Information about trying out the {{% ctx %}} Portal for the first time."
weight: 10
---

# {{% param title %}}

This guide describes how to try out a new {{% ctx %}} Portal installation to make sure it is working. Please ensure that [Install Portal][] has been completed before taking these steps.

## Test access to {{% ctx %}} Portal

1. In a browser, open the {{% ctx %}} Portal website, for example `https://localhost/portal`, and wait for the page to load.
1. Confirm `https://localhost/portal/api/v1/health` returns successfully. If `ApplicationName` is not `portal`, use the name configured in [Configure {{% ctx %}} Portal Installation Script][] in both URLs.

[Configure {{% ctx %}} Portal Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.ConfigurePortalInstallationScript" >}}
[Install Portal]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.InstallPortal" >}}
