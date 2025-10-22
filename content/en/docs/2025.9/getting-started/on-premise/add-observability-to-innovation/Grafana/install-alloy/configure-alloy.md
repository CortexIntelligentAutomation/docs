---
title: "Configure Grafana Alloy"
linkTitle: "Configure Grafana Alloy"
description: "Information about configuring Grafana Alloy on the Application Server(s)."
weight: 20
---

# {{% param title %}}

This guide describes how to configure Grafana Alloy on the Application Server(s).

{{% alert type="note" title="Note" %}}These steps must be performed for every Grafana Alloy installation in the cluster.{{% /alert %}}

## Install Certificate

If a self-signed certificate was obtained in the [prerequisites][], the CA certificate used to create this certificate must be imported on each Application Server. Otherwise, Grafana Alloy will not be able to establish communication with Grafana Loki.

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

## Configure Grafana Alloy

1. Open the `config.alloy` configuration file, which is located in the folder alongside the `alloy-installer-windows-amd64.exe` file.
1. Set the `__path__` in the `local.file_match "ApiGateway"` > `path_targets` section to the path of the `Logs` folder for the API Gateway Service, e.g. `"C:/ProgramData/Cortex/API Gateway Service/Logs/**/ServiceFabricHttpEventLog-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]{_[0-9][0-9][0-9],}.json"`.
1. Set the `__path__` in the `local.file_match "ExecutionService"` > `path_targets` section to the path of the `Logs` folder for the Execution Service, e.g. `"C:/ProgramData/Cortex/Execution Service/Logs/**/*.json"`.
1. Set the Grafana Loki `url` in the `loki.write "default"` > `endpoint` section which can be found at the end of the file.

   The following template has been provided for convenience:
   `https://<loki host address>:<loki reverse proxy port>/loki/api/v1/push`
| Element | Description |
|------|-------------|
| loki host address | The host address of the machine where the Grafana Loki reverse proxy was configured during [Add a New Website][] steps. This must match the configured host name. |
| loki reverse proxy port | The port of the Grafana Loki reverse proxy configured during [Add a New Website][] steps. Usually 2100. |

   A correct URL should be similar to `https://hostaddress:2100/loki/api/v1/push`.
1. Save the file.

### Re-Start the Grafana Alloy Service

1. Open `services.msc`.
1. Locate the `Alloy` service.
1. Right click on the service name and select `Restart`. If the service is not already running, select `Start`.

## Next Steps?

1. [Setup Grafana][]

[Add a New Website]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallLoki.AddANewWebsite" >}}
[Generate The Root CA Certificate]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.Advanced.GenerateTheRootCaCertificate" >}}
[prerequisites]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.WebAppCertificateRequirements" >}}
[Setup Grafana]: {{< url path="Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.SetupGrafana" >}}
