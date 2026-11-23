---
title: "Requirements"
linkTitle: "Requirements"
description: "Information about the requirements required on the Web Application Server for installation of the {{% ctx %}} Portal."
weight: 20
---

# {{% param title %}}

The requirements for an installation of the {{% ctx %}} Portal (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking installation.

{{% alert title="Important" color="warning" %}}
The {{% ctx %}} Portal must be installed on the Web Application Server where {{% ctx %}} Gateway is installed. For any other installation scenario, please contact {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}}.
{{% /alert %}}

## Server Requirements

The Web Application Server must:

* Have {{% ctx %}} Gateway installed and working.
* Be able to connect to the {{% ctx %}} API Gateway endpoint configured during installation.

## Security Requirements

### Installation User

A domain user with the necessary administrative permissions to log on to the Web Application Server via Remote Desktop and execute PowerShell scripts.

## Next Steps?

1. [Pre-Installation][]

[Architecture]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.Architecture" >}}
[Pre-Installation]: {{< url path="Cortex.GettingStarted.OnPremise.AddPortalToInnovation.PreInstallation" >}}
