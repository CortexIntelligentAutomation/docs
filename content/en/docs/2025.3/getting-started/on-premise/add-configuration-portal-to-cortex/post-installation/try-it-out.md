---
title: "Try it out"
linkTitle: "Try it out"
description: "Information about trying out {{% ctx %}} Configuration Portal for the first time."
weight: 10
---

# {{% param title %}}

This guide describes how to try out a new {{% ctx %}} Configuration Portal installation to make sure it is working.

## Test Access to Configuration Portal

1. Open a web browser and navigate to `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://sever.domain.com/configurationportal`.
1. Log in using your Active Directory credentials. Ensure that the account you are using is a member of one of the Active Directory groups specified during installation.

## Test adding a new Configuration Container and Data

1. Once logged in, you should be able to add a container by doing as follows:
    1. Click on the `+ Add Container` button.
    1. Fill in the `Name` field with the value `TestContainer`.
    1. Click `Confirm` to create the container.
1. Click the container you just created.
1. Using the values of the table below, add data to the created container as follows:
    | Name          | Value                  | Type    |
    |---------------|------------------------|---------|
    | `TestText`    | `This is a test value` | Text    |
    | `TestInteger` | `22`                   | Integer |
    | `TestBool`    | `true`                 | Bool    |
    | `TestObject`  | `{"test":22}`          | Object  |

    1. Click on the `+ Add Parameter/Value Pair` button.
    1. Fill in the `Name` and the `Value`.
    1. Select the `Type`.
    1. Click `CONFIRM` to add the parameter/value pair.

{{< alert type="note" title="Note" >}}
The {{% ctx %}} Configuration Portal should be treated as a repository of sensitive information which will most likely contain usernames and passwords. We recommend that any sensitive data is {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}} before it is added to the portal.
{{< /alert >}}

## Test exporting an existing Container

1. You should be able to export a container by doing as follows:
    1. Click on `Home` to navigate back.
    1. Tick the `Export` checkbox next to the container you created in the previous section.
    1. Click on the `Export Containers` button.

The file should be downloaded to your computer.

## Test importing an existing Container

1. Modify some parameters from the `TestContainer` by doing as follows:
    1. Click on the `TestContainer` to open it.
    1. Click on the `Delete` button for `TestText`.
    1. Confirm the deletion by clicking `OK` on the pop-up.
    1. Click on the `Edit` button for `TestInteger`.
    1. Change the value to `33`.
    1. Click `CONFIRM` to save the changes.

1. You should be able to import a container by doing as follows:
    1. Click on `Home` to navigate back.
    1. Click on the `Import Containers` button.
    1. Select the previously exported container `zip` file.
    1. Click `Open` to load the container.
    1. On the confirmation page, click `IMPORT`.
    1. Please confirm the import by clicking the`OK` button on the pop-up.

1. Verify that the container has been imported by doing as follows:
    1. Click on the `TestContainer` to open it.
    1. Verify that the parameter `TestText` has been re-added and that the value of `TestInteger` retained the modified value of `33`.

{{< alert type="note" title="Note" >}}
Once you have successfully imported containers, it is recommended to always delete all the `zip` files.
{{< /alert >}}

## Test reading data from Configuration Portal

1. Open a web browser and navigate to `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://server.domain.com/gateway`
1. Log in using your Active Directory credentials.
1. Click on the `Dev` charm, then search for `CM-Get-Config`.
1. Click on the flow `CM-Get-Config`.
1. Once the flow has opened, in the Settings tab, set the `ContainersNames` property to `["TestContainer"]`.
1. Add a breakpoint to the `End Flow` block.
1. Click on the `Run` button to execute the flow.
1. When the flow hits the breakpoint, click on the `Variables` tab.
1. Select the variable `ConfigItems`.
1. Verify that the variable contains the data you added in the previous section, it should look like the following:

``` json
{
  "Parameters": [
    {
      "ParamID": "e440c1ee-29ee-4b70-9660-60f518a10339",
      "ParamName": "TestInteger",
      "ParamValue": 33
    },
    {
      "ParamID": "5f760269-41e4-4f99-8b82-96ac1ccfbb49",
      "ParamName": "TestBool",
      "ParamValue": true
    },
    {
      "ParamID": "e967217d-4ca0-4a77-b357-2b3ccf1335d7",
      "ParamName": "TestObject",
      "ParamValue": {
        "test": 22
      }
    },
    {
      "ParamID": "b0cedd5c-e832-4fd2-8292-462be9b0ab71",
      "ParamName": "TestText",
      "ParamValue": "This is a test value"
    }
  ]
}
```
