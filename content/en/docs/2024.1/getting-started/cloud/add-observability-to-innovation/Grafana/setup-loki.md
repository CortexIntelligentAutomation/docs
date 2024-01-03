---
title: "Set up Grafana Loki"
linkTitle: "Set up Grafana Loki"
description: "Information about setting up Grafana Loki in the cloud."
weight: 40
---

# {{% param title %}}

This guide describes how to set up Grafana Loki in the cloud. Please ensure that the [Prerequisites][] have been completed before starting this installation.

## Set up Grafana Loki

1. Browse to the *Team URL* created during [Sign Up For Grafana Cloud][].
1. Click the Menu icon {{< image src="/images/GrafanaMenuIcon.png" title="Menu icon" >}} to view the available options.
1. Click the Connections menu item {{< image src="/images/GrafanaConnectionsLink.png" title="Connections menu item" >}}.
1. In the *Custom data* section click on *Hosted logs*.
  {{< figure src="/images/Grafana Cloud - Hosted Logs.png" >}}
1. In the *Choose your use case* section select *Send logs from a standalone host*.
  {{< figure src="/images/Grafana Cloud - Hosted Logs Config Usecase.png" >}}
1. Enter an *API Token name* in the *Configure promtail to send logs to your Grafana Cloud* section and click the *Create API token* button.  
The token name is used in the Grafana Cloud website to easily identify the key after its creation.
  {{< figure src="/images/Grafana Cloud - Hosted Logs Config Token Name.png" >}}
1. Make a note of the value of the *url* in the *client* section of the example configuration. Ignore the instruction to copy and paste the whole content.
  {{< figure src="/images/Grafana Cloud - Hosted Logs Config Data.png" >}}

## Next Steps?

1. [Install Promtail][]

[Install Promtail]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.InstallPromtail.MainDoc" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.Prerequisites.MainDoc" >}}
[Sign Up For Grafana Cloud]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupGrafana.SignUpForGrafanaCloud" >}}
