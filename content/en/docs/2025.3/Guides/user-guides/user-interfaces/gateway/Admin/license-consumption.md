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

Every function block connected to a Start Flow block adds one to the License Consumption, except for the following blocks, which do not impact the License Consumption:

* Start Flow
* End Flow
* Start Workspace
* End Workspace
* Wireless Receiver
* Wireless Sender
* Workspace (including the Handle Flow Exception workspace)

The License Consumption details are shown in a tabular format, where each flow’s license consumption is aggregated and shown as a total against its parent Group. Groups may be expanded to show the License Consumption of each individual flow.

The Breakdown switch expands the table to additionally show the number of Function blocks used in each flow, plus the flow Usage. The Usage identifies the number of times each flow has been calculated towards the total License Consumption; for {{% ctx %}} flows this will typically be a count of 1.

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
