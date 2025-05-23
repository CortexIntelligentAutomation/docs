---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required on each server type for installation."
weight: 20
---
# {{% param title %}}

The prerequisites required for each server role (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking the installation.

## Hardware Requirements

The application servers (as described in {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Architecture" title="Architecture" >}}) to which Promtail will be added have already been installed as part of the {{% ctx %}} install process and do not require any hardware modifications for the observability platform installation.

{{% alert title="Note" %}}
The application servers must have internet access in order to communicate with the Grafana Cloud managed service.
{{% /alert %}}


## Software Requirements

| Server Role        | Windows Server[^1]                             | Other Software     |
|--------------------|------------------------------------------------|--------------------|
| Application Server | [2022 (x64)][] *Recommended*<br>[2019 (x64)][] | [Promtail 3.0.0][] |

[^1]: Windows Server Standard and Datacenter editions are supported. Filesystem **must be NTFS** and networking **must use IPv4**. Linux is not supported, but may be in the future.

## Web Browser Requirements

Grafana supports the latest versions of the following browsers:

* Chrome/Chromium
* Firefox
* Safari
* Microsoft Edge

{{% alert title="Note" %}}
Always enable JavaScript in your browser. Running Grafana without JavaScript enabled in the browser is not supported.
{{% / alert %}}

## Additional Application Server Requirements

These requirements apply to each of the Application Servers.

### Security Requirements

#### Installation User

A domain user which is a member of the Local Administrators group on all Application Servers must be available to perform the installation.

## Next Steps?

1. [Set up Grafana][]

[2019 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2019" >}}
[2022 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2022" >}}
[Architecture]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.Architecture.MainDoc" >}}
[Promtail 3.0.0]:  {{< url path="Grafana.SelfManaged.Downloads.Promtail.3.0.0.PromtailInstallZip" >}}
[Set up Grafana]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupGrafana.MainDoc" >}}
