---
title: "Try it out"
linkTitle: "Try it out"
description: "Information about trying out {{% ctx %}} for the first time."
weight: 10
---

# {{% param title %}}

This guide describes how to try out a new {{% ctx %}} Configuration Portal installation to make sure it is working. Please ensure that [Setup Gateway][] has been completed before taking these steps.

## Test Access to Configuration Portal

1. Open a web browser and navigate to the URL of the Configuration Portal. This is typically in the format `http://<server-name>/ConfigurationPortal`.
1. Log in using your Active Directory credentials. Ensure that the account you are using is part of one of the Active Directory groups specified during installation.

## Test adding a new Configuration Container and Data

1. Once logged in, you should be able to add a container by doing as follows:
    1. Click on the `+ Add Container` button.
    1. Fill in the `Name` field with the value `TestContainer`.
    1. Click `Confirm` to create the container.
1. Click the container you just created.
1. Using the values of the table below, add a  some data to the created container as follows:
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

## Test reading data from Configuration Portal

1. Open a web browser and navigate to the URL of {{% ctx %}} Gateway. This is typically in the format `http://<server-name>/gateway`.
1. Log in using your Active Directory credentials.
1. Click on the `Dev` charms, then search for `CM-Get-Config`.
1. Click on the flow `CM-Get-Config`.
1. Once the flow opened, in the Settings tab, set the `ContainersNames` field to `["TestContainer"]`.
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
      "ParamValue": 22
    },
    {
      "ParamID": "b0cedd5c-e832-4fd2-8292-462be9b0ab71",
      "ParamName": "TestText",
      "ParamValue": "This is a test value"
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
    }
  ]
}
```
