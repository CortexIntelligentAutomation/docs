---
title: "Try it out"
linkTitle: "Try it out"
description: "Information about trying out {{% ctx %}} Innovation for the first time."
weight: 60
---

# {{% param title %}}

This guide describes how to try out a new Innovation installation to make sure it is working. Please ensure that [Setup Gateway][] has been completed before taking these steps.

## Test Debugging Flows

Test the platform by creating a new flow and executing it using the following steps:

1. Click on the `Flows` charm, then the `+` button and click `Group` to open a dialog.
1. Enter a name for the group, configure the `Permission Groups` and click `OK` to create the group.
1. Click on the group to open it (refresh the page if it does not appear).
1. Inside the group, click the `+` button again and click on `Flow` to open a dialog. If the menu item is not present, it means that the `FeatureFlags` in the `CortexGateway.SetParameters.xml` file was not set properly when installing Gateway. See [Troubleshooting][Troubleshooting No Innovation] for more information.
1. Enter a name for the flow, configure the `Permission Groups` and click `OK` to create the flow.
1. The flow should be displayed with a start flow block and end flow block. A list of block palettes should be displayed down the left hand side:
    {{< figure src="/images/New Innovation Flow View.PNG" title="New Flow - Number of palettes may differ" >}}
1. Add a `Set Variable` block and connect it between the start and end blocks.
1. Click the `Set Variable` block to open the Property Editor.
1. Set the `Value` property to the expression `DateTimeOffset.Now`.
1. Type `Result` into the `Variable` property and click `Create Result`.
1. In the Variable Editor, set `Is Output Variable?` to `true` for the new `Result` variable.
1. Set a breakpoint on the end block and start the flow. An execution token should appear, the `Result` variable should show the current time. If the token does not appear, try refreshing the page. Failing that, see [Troubleshooting][Troubleshooting Flow Not Starting].
1. Continue or stop the execution.
1. Commit the flow.

## Test Publishing Production Flows

1. Log in to Gateway with a user that has the `Admin` role.
1. Click on the `Settings` charm, then `Packages`.
1. Click `Add Package Definition`. Enter a package name and select the new flow to add to the package. Click `Save` to save the new package.
1. Click `Publish`. A success message should appear. If it doesn't it means that either one or more of the parameters prefixed with `Service Fabric` in the `CortexGateway.SetParameters.xml` file was not set properly when installing Gateway, or the Application Services aren't healthy. See [Troubleshooting][Troubleshooting No Publish] for more information.

## Test Executing Production Flows

1. Open an HTTP client, such as [Postman](https://www.postman.com/downloads/). Make a request with the following format:
    | Property      | Value                                                                               |
    |---------------|-------------------------------------------------------------------------------------|
    | Action        | POST                                                                                |
    | URL           | https://{FQDN of server}:8722/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}<br />e.g. https://server&#46;domain&#46;com:8722/api/default/default/flows/NewFlow/executions?packageName=NewPackage|
    | Content Type  | application/json                                                                    |
    | Body          | {}                                                                                  |
    | Authentication| Basic                                                                               |
    | Username      | The value used for `ApiGatewayBasicAuthUsername` when installing Application Services              |
    | Password      | The value used for `ApiGatewayBasicAuthPassword` when installing Application Services (Unencrypted) |

    {{% alert title="Note" %}} If you used self-signed certificates when installing the server you will need to disable SSL certificate validation in your HTTP client. {{% /alert %}}

1. The request should return a JSON object with the output variables of the flow e.g. `{ "Output": "2022-03-09T07:35:16+0000" }`.
1. {{% ctx %}} Innovation has now been verified and is ready to use.

[Troubleshooting During Installation]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingDuringInstallation" >}}
[Troubleshooting Flow Not Starting]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingFlowNotStarting" >}}
[Troubleshooting No Innovation]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingNoInnovation" >}}
[Troubleshooting No Publish]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingNoPublish" >}}
[Troubleshooting Root Certificate Error]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingNoRootCertificate" >}}
[Setup Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.SetupGateway" >}}
