---
title: "Requirements"
linkTitle: "Requirements"
description: "Information about the requirements required."
weight: 10
---

# {{% param title %}}

The requirements for an installation of the {{% ctx %}} Portal are laid out in this guide. These must be considered before undertaking installation.

{{< alert color="warning" title="Important" >}}
The {{% ctx %}} Portal must be installed on the Web Application Server where {{% ctx %}} Gateway is installed. For any other installation scenario, please contact {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}}.
{{< /alert >}}

## Server Requirements

The Web Application Server must:

* Have {{% ctx %}} Gateway installed and working.
* Be able to connect to the {{% ctx %}} API Gateway endpoint configured during installation.

## Security Requirements

### Installation User

A domain user with the necessary administrative permissions to log on to the Web Application Server via Remote Desktop and execute PowerShell scripts.

## Installation Artefacts

The following artefacts must be available before installation:

* `Portal Application Server Scripts.zip`
* `Cortex Innovation 2026.9 - Portal.zip`

## Next Steps?

1. [Pre-Installation][]

[Pre-Installation]: ../pre-installation/
