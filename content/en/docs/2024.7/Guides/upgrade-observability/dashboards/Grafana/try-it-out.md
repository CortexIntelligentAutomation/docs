---
title: "Try it out"
linkTitle: "Try it out"
description: "Information about trying out the observability platform after upgrading the dashboards."
weight: 3
---

# {{% param title %}}

## Confirm New Dashboards Display Data

{{% alert title="Note" %}}
Any flow can be used that exists on the system and can be executed.
{{% / alert %}}

1. Open a web browser and navigate to your installed {{% ctx %}} Gateway URL, e.g. https://server.domain.com/gateway, and log in when prompted.
1. Open a flow that you are able to execute on an adhoc basis.
1. Start the flow.
1. Once the request has completed, in your web browser, navigate to and log in to your configured Grafana.
1. Open the *Dashboards* page via the menu on the left sidebar.
1. Click the folder name that the dashboards were imported to.
1. Click the *Flow Execution Requests* dashboard to open it.
1. The request made at step 1 should be visible on the dashboard.
{{% alert title="Note" %}}
If other requests have been made then there may be more than one request visible on the dashboard.
{{% / alert %}}
1. Open the *Dashboards* page via the menu on the left sidebar.
1. Click the folder name that the dashboards were imported to.
1. Click the *Platform Health* dashboard to open it.
1. The request made at step 1 should be visible on the dashboard.
{{% alert title="Note" %}}
If other requests have been made then there may be more than one request visible on the dashboard.
{{% / alert %}}

[Upgrade Promtail]: {{< url path="Cortex.Guides.UpgradeObservability.Cloud.Grafana.UpgradePromtail" >}}
[verifying the old version]: {{< url path="Cortex.Guides.UpgradeObservability.Cloud.Grafana.VerifyOldVersion" >}}
