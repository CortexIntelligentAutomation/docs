---
title: "Try it out"
linkTitle: "Try it out"
description: "Information about trying out the observability platform after upgrade."
weight: 5
---

# {{% param title %}}

## Confirm Grafana Upgrade

1. Navigate to your Grafana website e.g. `https://machinename.domain.com:3000`.
1. Identify the version number under the login prompt.
1. Confirm the version has updated to be 10.4.1.

## Confirm Dashboards load

1. Navigate to your Grafana website e.g. `https://machinename.domain.com:3000`
1. Login to Grafana.
1. Open the *Dashboards* page via the menu on the left sidebar.
1. Select the folder that hosts the Cortex Dashboards, e.g. *Cortex*
1. Click the *Flow Execution Requests* dashboard to open it.
1. Change the time period to be *Last 90 days* and confirm data is present.
1. Confirm the data from the previous step is similar to the data captured when [verifying the old version][].

## Confirm New Data is Processed

{{% alert title="Note" %}}
Any flow can be used that exists on the system and can be executed.
{{% / alert %}}

1. Open an HTTP client, such as [Postman][]. Make a request with the following format:
    | Property      | Value                                                                               |
    |---------------|-------------------------------------------------------------------------------------|
    | Action        | POST                                                                                |
    | URL           | For HA installation use: <br />`https://{FQDN of Load Balancer Server}/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}`<br />e.g. `https://load-balancer.domain.com/api/default/default/flows/NewFlow/executions?packageName=NewPackage` <br /><br /> For non-HA installation use: <br />`https://{FQDN of server}:8722/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}`<br />e.g. `https://server.domain.com:8722/api/default/default/flows/NewFlow/executions?packageName=NewPackage`|
    | Content Type  | application/json                                                                    |
    | Body          | {}                                                                                  |
    | Authentication| Basic                                                                               |
    | Username      | The value used for `ApiGatewayBasicAuthUsername` when Application Services were installed.|
    | Password      | The value used for `ApiGatewayBasicAuthPassword` when Application Services were installed.|

    {{% alert title="Note" %}} If you used self-signed certificates when installing the Application Servers you may need to disable SSL certificate validation in your HTTP client. {{% /alert %}}

1. Once the request has completed, using a web browser, log in to your configured Grafana.
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

[Postman]: {{< url path="Postman.Downloads.MainDoc" >}}
[verifying the old version]: {{< url path="Cortex.Guides.UpgradeObservability.OnPremise.VerifyOldVersion" >}}
