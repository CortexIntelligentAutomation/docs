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
1. If presented with the *Get started in a few easy steps* page, click *I'm already familiar with Grafana. Skip setup →* in the top right corner.
1. Click the Menu icon {{< image src="/images/GrafanaMenuIcon.png" title="Menu icon" >}} to view the available options.
1. Click the *Connections* menu item and select *Add new connection*.
1. In the *Custom data* section click on *Hosted logs*.
1. In the *Choose your use case* section select *Send logs from a standalone host*.
  {{< figure src="/images/Grafana Cloud - Hosted Logs Config Usecase.png" >}}
1. Enter an *API Token name* in the *Configure promtail to send logs to your Grafana Cloud* section and click the *Create API token* button.  
The token name is used in the Grafana Cloud website to easily identify the key after its creation.
  {{< figure src="/images/Grafana Cloud - Hosted Logs Config Token Name.png" >}}
1. Make a note of the value of the *url* in the *client* section of the example configuration. Ignore the instruction to copy and paste the whole content.
  {{< figure src="/images/Grafana Cloud - Hosted Logs Config Data.png" >}}

## Next Steps?

1. [Install Grafana Alloy][]

[Install Grafana Alloy]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.InstallAlloy.MainDoc" >}}
[Prerequisites]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.Prerequisites.MainDoc" >}}
[Sign Up For Grafana Cloud]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupGrafana.SignUpForGrafanaCloud" >}}
