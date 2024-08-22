---
title: "Upgrade Loki"
linkTitle: "Upgrade Loki"
description: "The steps to upgrade Loki."
weight: 3
---

# {{% param title %}}

## Perform Upgrade

RDP to V-DEMOAUX1
Open File Explorer and navigate to C:\Loki\
Backup loki-local-config.yaml to a secure location.
Open PowerShell as Administrator in the C:\Loki\ directory
Run the Remove-Loki.ps1 script by executing .\Remove-Loki.ps1
Remove all files from the C:\Loki\ directory except log files. This includes:
Install-Loki.ps1
loki-local-config.yaml
loki-windows-amd64.exe
nssm.exe
Remove-Loki.ps1
Start-Loki.ps1
Stop-Loki.ps1
In a browser on V-DEMOAUX1, navigate to the CORTEX Product Documentation and find the Loki install instructions for your version of CORTEX.
Download the Grafana Loki X.X.X Archive from the CORTEX Product Documentation.
Extract the loki-windows-amd64.exe zip to your downloads folder.
Open the unzipped loki-windows-amd64.exe directory and copy the executable to C:\Loki\
Download the Grafana Loki Install.zip Archive from the CORTEX Product Documentation
Extract the Grafana.Loki.Install.zip zip to your downloads folder.
Open the unzipped Grafana.Loki.Install.zip directory and copy its contents to C:\Loki\
Open loki-local-config.yaml in Notepad++ and compare against the backup made in step 3.
The data for Grafana dashboards is defined under schema_config.
If there are differences under schema_config, copy the config from the backup and put it directly under configs in schema_config. Ensure the formatting is identical to whats already found in the file.
Update the pre-existing schema_config entry in the new loki-local-config.yaml file to start from todays date.
Save your changes
Open PowerShell as Administrator in the C:\Loki\ directory.
Run the Install-Loki.ps1 script by executing .\Install-Loki.ps1
Run the Start-Loki.ps1 script by executing .\Start-Loki.ps1
Open services.msc and confirm the Loki service exists and has started.

## Next Steps?

1. [Upgrade Promtail][]

[Upgrade Promtail]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.UpgradePromtail" >}}
