---
title: "Upgrade Promtail"
linkTitle: "Upgrade Promtail"
description: "The steps to upgrade Promtail."
weight: 4
---

RDP to V-APPX
Open File Explorer and navigate to C:\Promtail\
Backup promtail-local-config.yaml to a secure location.
Open PowerShell as Administrator in the C:\Promtail\ directory
Run the Remove-Promtail.ps1 script by executing .\Remove-Promtail.ps1
Remove all files from the C:\Promtail\ directory except log files and tmp directory. This includes:
Install-Promtail.ps1
nssm.exe
Promtail-local-config.yaml
Promtail-windows-amd64.exe
Remove-Promtail.ps1
Start-Promtail.ps1
Stop-Promtail.ps1
In a browser on V-APPX, navigate to the CORTEX Product Documentation and find the Promtail install instructions for your version of CORTEX.
Download the Promtail X.X.X Archive from the CORTEX Product Documentation.
Extract the promtail-windows-amd64.exe zip to your downloads folder
Open the unzipped promtail-windows-amd64.exe directory and copy to executable to C:\Promtail\
Download the Promtail Install.zip Archive from the CORTEX Product Documentation.
Extract the Promtail.Install.zip to your downloads folder.
Open the unzipped Promtail.Install.zip directory and copy its contents to C:\Promtail
Open the promtail-local-config.yaml and compare against the backup made in Step 3.
Update the filename property to the correct location (e.g. c:/Promtail/tmp/positions.yaml)
Update the clients URL property to the value found in the backup.
Save your changes
Open PowerShell as Administrator in the C:\Promtail\ directory
Run the Install-Promtail.ps1 script by executing .\Install-Promtail.ps1
Run the Start-Promtail.ps1 script by executing .\Start-Promtail.ps1
Open services.msc and confirm the Promtail service exists and has started.