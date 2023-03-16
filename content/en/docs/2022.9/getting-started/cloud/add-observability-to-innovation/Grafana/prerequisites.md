---
title: "Prerequisites"
linkTitle: "Prerequisites"
description: "Information about the prerequisites required on each server type for installation."
weight: 20
---
# {{% param title %}}

The prerequisites required for each server role (as described in [Architecture][]) are laid out in this guide. These must be considered before undertaking the installation.

## Hardware Requirements

The application servers (as described in {{< ahref "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.Architecture" "Architecture" >}}) to which Promtail will be added have already been installed as part of the Innovation install process and do not require any hardware modifications for the observability platform installation.

{{% alert title="Note" %}}
The application servers must have internet access in order to communicate with the Grafana Cloud managed service.
{{% /alert %}}


## Software Requirements

| Server&nbsp;Role | Windows&nbsp;Server[^1] | Other&nbsp;Software |
|------------------|-------------------------|---------|----------|
| Application Server | [2019 (x64)][] *Recommended*<br>[2016 (x64)][] | [Promtail 2.5.0][]|

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

[2016 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2016" >}}
[2019 (x64)]: {{< url path="Microsoft.Downloads.Windows.Server2019" >}}
[Architecture]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.Architecture.MainDoc" >}}
[Set up Grafana]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupGrafana.MainDoc" >}}
[Promtail 2.5.0]:  {{< url path="Grafana.SelfManaged.Downloads.Promtail.PromtailInstallZip" >}}
