---
title: "Set up Grafana"
linkTitle: "Set up Grafana"
description: "Information about setting up Grafana in the cloud."
weight: 30
---

# {{% param title %}}

## Sign up for Grafana Cloud

1. Browse to [Grafana Labs][].
1. Find and click the link to create free account.
1. Review the terms and conditions as well as any agreements.
1. Create your account and follow any account verification steps.
1. If asked to start a free trial, do so.
1. On the **Let's create your Grafana Stack** dialog:
  
   {{< figure src="/images/Grafana Cloud - Create Stack.png" >}}

   * Enter an appropriate `Team URL` which will be used as a customised link to access the Grafana Cloud.
   * Select the `Deployment region` which is where the service will be deployed to. This should be preferably close to the High Availability nodes.

1. Wait for Grafana Cloud to load

## Next Steps?

1. [Set up Grafana Loki][]

<!-- Other links -->
[Grafana Labs]: {{< url path="Grafana.MainDoc" >}}
[Set up Grafana Loki]: {{< url path="Cortex.GettingStarted.Cloud.AddObservabilityToInnovation.Grafana.SetupLoki.MainDoc" >}}
