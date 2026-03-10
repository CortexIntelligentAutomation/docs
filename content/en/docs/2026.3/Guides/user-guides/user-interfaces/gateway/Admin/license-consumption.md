---
title: "License Consumption"
linkTitle: "License Consumption"
description: "View the license consumption in {{% ctx %}} Gateway."
weight: 80
---

# {{% param title %}}

## Summary

The License Consumption page is used to view the license consumption for the current platform and the minimum license requirement to support the current usage.

## Anatomy

{{< figure src="/images/License Consumption.png" title="License Consumption" >}}

## Actions

### View License Consumption

Every functional block connected to a Start Flow block adds one to the license consumption, except for the following blocks, which do not impact the license consumption:

* [Start Flow][]
* [End Flow][]
* [Start Workspace][]
* [End Workspace][]
* [Wireless Receiver][]
* [Wireless Sender][]
* [Workspace][]
* [Handle Flow Exception Workspace][]

The License Consumption details are shown in a tabular format, where each flow’s license consumption is aggregated and shown as a total against its parent group. Groups may be expanded to show the license consumption of each individual flow.

The `Breakdown` switch expands the table to additionally show the flow usage and the number of functional blocks used in each flow. In {{% ctx %}} all flows will have a count of 1 in the `Usage` column.

See the [Check License Consumption][Check License Consumption tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

None

### Related Tutorials

* [Check License Consumption][Check License Consumption tutorial]

[Check License Consumption tutorial]: {{< url path="Cortex.Tutorials.Administration.LicenseConsumption.CheckLicenseConsumption" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}
[Handle Flow Exception Workspace]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Start Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[Wireless Receiver]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessReceiver.WirelessReceiver.MainDoc" >}}
[Wireless Sender]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessSender.WirelessSender.MainDoc" >}}
[Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.Workspace.Workspace.MainDoc" >}}
