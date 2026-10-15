---
title: "Single Server without HA"
linkTitle: "Single Server without HA"
description: "Instructions on how to check the health of your single server cluster."
weight: 2
---

# Check Cluster Health

## Import Client Certificate

In order to access the [Service Fabric Explorer][] to check the health of the cluster, it is necessary for the client certificate specified during the [installation of {{% ctx %}}][Configure Installation Script] to be imported in to the current user store on the machine it is being accessed from.

Instructions on how to do this can be found [here][Import Client Certificate].

## View Cluster Health

1. Open a web browser.
1. {{< section "/install-application-server/single-server/check-application-services.md">}}

[Configure Installation Script]:  {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScriptNew" >}}
[Import Client Certificate]: {{< url path="Cortex.Faqs.ImportClientCertificate.SingleServer" >}}
[Service Fabric Explorer]: {{< url path="Cortex.Reference.Glossary.P-T.ServiceFabricExplorer" >}}
