---
title: "Upgrade Grafana"
linkTitle: "Upgrade Grafana"
description: "The steps to upgrade Grafana."
weight: 2
---

RDP to V-DEMOAUX1
Navigate to https://v-demoaux1.demo.wearecortex.com:3000 note the version number under the login prompt.
This will be for comparison after completing the Grafana upgrade.
Using credentials from password vault, login to Grafana.
Navigate to the Flow Execution Requests dashboard, set the timeframe to the last 90 days and confirm data is present.
Open File Explorer and navigate to C:\Program Files\GrafanaLabs\grafana\conf\
Backup custom.ini and defaults.ino to a secure location.
Open Services.msc from your Start-menu and stop the Grafana service.
In a browser on V-DEMOAUX1, navigate to the CORTEX Product Documentation on and find the Grafana install instructions for your version of CORTEX.
Click Grafana.X.X.X in the CORTEX Product Documentation and download the Standalone Windows Binaries from the Grafana download page.
Extract grafana-enterprise-X.X.X.windows-amd64.zip to your downloads folder
This zip file contains many small files, stressing the IOPS of the disk. Extraction can take a couple minutes and will show slow speeds when handling many small files.
Open the unzipped grafana-enteprise-X.X.X.windows-amd64 directory and open grafana-vX.X.X directory.
Copy the contents of grafana-vX.X.X into C:\Program Files\GrafanaLabs\grafana directory, and click Replace all existing files in the prompt.
These instructions were taken from Grafana's website here: https://grafana.com/docs/grafana/latest/upgrade-guide/upgrade-v10.4/#windows
Ensure that custom.ini and defaults.ini are unchanged in the C:\Program Files\GrafanaLabs\grafana\conf directory.
Start the Grafana service.
To confirm Grafana has updated, navigate to https://v-demoaux1.demo.wearecortex.com:3000 and confirm the version number changed on the login screen.