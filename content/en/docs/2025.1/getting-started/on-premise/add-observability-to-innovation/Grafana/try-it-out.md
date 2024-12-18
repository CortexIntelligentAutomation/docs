---
title: "Try it Out"
linkTitle: "Try it Out"
description: "Information about trying out Grafana Observability Dashboards for the first time."
weight: 60
---

# {{% param title %}}

## Check Dashboards are Displaying Data

{{% alert title="Note" %}}
This test uses the test flow published as part of testing the Innovation installation. See {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.TryItOutPublishedFlow" title="Testing HA installation" >}} or {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.TryItOutPublishedFlow" title="Testing non-HA installation" >}}. An alternative flow can be used that exists on the system and can be executed.
{{% / alert %}}

1. Open an HTTP client, such as [Postman][]. Make a request with the following format:
    | Property      | Value                                                                               |
    |---------------|-------------------------------------------------------------------------------------|
    | Action        | POST                                                                                |
    | URL           | For HA installation use: <br />`https://{FQDN of Load Balancer Server}/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}`<br />e.g. `https://load-balancer&#46;domain&#46;com/api/default/default/flows/NewFlow/executions?packageName=NewPackage` <br /><br /> For non-HA installation use: <br />`https://{FQDN of server}:8722/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}`<br />e.g. `https://server&#46;domain&#46;com:8722/api/default/default/flows/NewFlow/executions?packageName=NewPackage`|
    | Content Type  | application/json                                                                    |
    | Body          | {}                                                                                  |
    | Authentication| Basic                                                                               |
    | Username      | The value used for `ApiGatewayBasicAuthUsername` when installing Application Services. See [HA Installation script configuration][] or [Non-HA Installation script configuration][] for the value specified.|
    | Password      | The value used for `ApiGatewayBasicAuthPassword` when installing Application Services (Unencrypted). See [HA Installation script configuration][] or [Non-HA Installation script configuration][] for the value specified.|

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

[HA Installation script configuration]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScriptNew" >}}
[Non-HA Installation script configuration]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScriptNew" >}}
[Postman]: {{< url path="Postman.Downloads.MainDoc" >}}
