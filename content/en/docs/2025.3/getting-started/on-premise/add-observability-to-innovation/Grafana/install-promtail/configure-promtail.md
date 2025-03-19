---
title: "Configure Promtail"
linkTitle: "Configure Promtail"
description: "Information about configuring Promtail on the Application Server(s)."
weight: 20
---

# {{% param title %}}

This guide describes how to configure Promtail on the Application Server(s).

{{% alert type="note" title="Note" %}}These steps must be performed for every Promtail installation in the cluster.{{% /alert %}}

## Install Certificate

If a self-signed certificate was obtained in the [prerequisites][], the CA certificate used to create this certificate must be imported on each Application Server. Otherwise, Promtail will not be able to establish communication with Grafana Loki.

To import the CA certificate:

1. Copy the `cortexCA.pfx` CA certificate created during the [root CA certificate generation][Generate The Root CA Certificate] steps into a suitable location on the Application Server.
1. Double click on the `cortexCA.pfx` file to import the certificate into the Windows Certificate Store.
1. Select `Local Machine` then click `Next`.
1. Click `Next`.
1. Enter the Export Password which the certificate was generated with then click `Next`.
1. Select `Place all certificates in the following store`.
1. Click `Browse…`.
1. Select `Trusted Root Certification Authorities`, click `OK` then click `Next`.
1. Click `Finish`.

## Configure Promtail

### Set Client URL for Grafana Loki

1. Open the `promtail-local-config.yaml` configuration file, which is located in the folder alongside the `promtail-windows-amd64.exe` file.
1. Set the Grafana Loki `URL` in the `clients` section.

   The following template has been provided for convenience:
   `https://<username>:<password>@<loki host address>:<loki reverse proxy port>/loki/api/v1/push`
| Element | Description |
|------|-------------|
| username | The username of the user created during [Create Loki User][] steps. |
| password | The password which was set for the user  during [Create Loki User][] steps. |
| loki host address | The host address of the machine where the Grafana Loki reverse proxy was configured during [Add a New Website][] steps . This must match the configured host name. |
| loki reverse proxy port | The port of the Grafana Loki reverse proxy configured during [Add a New Website][] steps. Usually 2100. |

   A correct URL should be similar to `https://username:password@hostaddress:2100/loki/api/v1/push`.
1. Save the file.

### Set the positions.yaml File Path

1. Open the `promtail-local-config.yaml` configuration file, which is located in the folder alongside the `promtail-windows-amd64.exe` file.
1. Set the `filename` in the `positions` section to the location where you want the `positions.yaml` file to be created on Promtail startup, e.g. `C:/Program Data/Cortex/Observability/Promtail/Positions.yaml`.
1. Create all the folders of the path specified in the previous step.
1. Save the file.

{{% alert title="Note" %}}
If the specified path to the folder for the `positions.yaml` file doesn't exists, the file will not get created on Promtail startup.
{{% /alert %}}

### Set the Path to the API Gateway Service Log Files

1. Open the `promtail-local-config.yaml` configuration file, which is located in the folder alongside the `promtail-windows-amd64.exe` file.
1. Set the `__path__` in the `static_configs` > `targets` > `labels` section to the path of the `Logs` folder specified in the `appSettings.json` file during installation of the API Gateway Service, e.g. `"C:/ProgramData/Cortex/API Gateway Service/Logs/**/ServiceFabricHttpEventLog-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]{_[0-9][0-9][0-9],}.json"`.
1. Save the file.

### Start Promtail

1. Run Windows PowerShell as Administrator.
1. Change the location to the folder where the `promtail-windows-amd64.exe` file is located.
1. Execute the `.\Start-Promtail.ps1` command to start the Promtail Windows service.

## Next Steps?

1. [Setup Grafana][]

[Add a New Website]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallLoki.AddANewWebsite" >}}
[Create Loki User]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallLoki.CreateLokiUser" >}}
[Generate The Root CA Certificate]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Advanced.GenerateTheRootCaCertificate" >}}
[prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.WebAppCertificateRequirements" >}}
[Setup Grafana]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.SetupGrafana" >}}
