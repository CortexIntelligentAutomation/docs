---
title: "Install Promtail"
linkTitle: "Install Promtail"
description: "Information about installing Promtail on the Application Server(s)."
weight: 10
---

# {{% param title %}}

This guide describes how to install Promtail on the Application Server(s). Please ensure that the [Prerequisites][] have been completed before starting this installation.

## Install Promtail

1. Download [Promtail 2.5.0][] archive.
1. Extract content of the downloaded archive to a suitable location, e.g. `C:\Promtail`.
1. Download the [Promtail Install.zip][] archive and extract its contents alongside the previously extracted Promtail `promtail-windows-amd64.exe`.
This archive contains the `promtail-local-config.yaml` configuration file, [NSSM][] (the Non-Sucking Service Manager program) and PowerShell scripts to help manage Promtail as a Windows service.
1. Run Windows PowerShell as Administrator
1. Change the location to where all the files were extracted to.
1. Execute the `.\Install-Promtail.ps1` command to install the downloaded `promtail-windows-amd64.exe` as a service.

## Next Steps?

1. [Configure Promtail][]

[Configure Promtail]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallPromtail.ConfigurePromtail" >}}
[NSSM]: {{< url path="NSSM.MainDoc" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Prerequisites" >}}
[Promtail 2.5.0]:  {{< url path="Grafana.SelfManaged.Downloads.Promtail.PromtailInstallZip" >}}
[Promtail Install.zip]: {{< url path="GitHub.Cortex.Observability.2.0.1.PromtailInstallZip" >}}
[Software Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.SoftwareRequirements" >}}
