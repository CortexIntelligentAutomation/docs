---
title: "Install Grafana Alloy"
linkTitle: "Install Grafana Alloy"
description: "Information about installing Grafana Alloy on the Application Server(s)."
weight: 10
---

# {{% param title %}}

This guide describes how to install Grafana Alloy on the Application Server(s). Please ensure that the [Prerequisites][] have been completed before starting this installation.

## Install Grafana Alloy

1. Download the [Grafana Alloy 1.10.0][] archive.
1. Extract content of the downloaded archive to a suitable location, e.g. `C:\Program Data\Cortex\Observability\Grafana Alloy`.
1. Download the [Grafana Alloy.zip][] archive and extract its contents alongside the previously extracted Grafana Alloy `alloy-installer-windows-amd64.exe`.
This archive contains the `config.alloy` configuration file and PowerShell scripts to install Grafana Alloy as a Windows service.
1. Run Windows PowerShell as Administrator
1. Change the location to where all the files were extracted to in step 2, e.g. `cd "C:\Program Data\Cortex\Observability\Grafana Alloy"`.
1. Execute the `.\Install-Alloy.ps1` command to install the downloaded `alloy-installer-windows-amd64.exe` as a service.
1. When prompted, enter the credentials that the Grafana Alloy Service should run as.
1. When prompted to enter the bearer token, leave it blank and press Enter.

## Next Steps?

1. [Configure Grafana Alloy][]

[Configure Grafana Alloy]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.InstallAlloy.ConfigureAlloy.MainDoc" >}}
[Grafana Alloy 1.10.0]:  {{< url path="Grafana.Products.Loki.Alloy.1.10.0" >}}
[Grafana Alloy.zip]: {{< url path="GitHub.Cortex.Observability.4.0.0.GrafanaAlloyInstallZip" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Prerequisites" >}}
