---
title: "Wait For"
linkTitle: "Wait For"
description: "Waits for a specified number of seconds."
---

![Icon](/blocks/schedules-wait-for-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Schedules.Wait.WaitForBlock)</p>

## Description

Waits for a specified [Wait Time][WaitTime Property] in seconds.

## Examples

### Wait for specified Wait Time

This example will wait for `60` seconds.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Wait Time][WaitTime Property] | `($)WaitTime`, with value `60` | `($)WaitTime` is a variable of type [Double][] |

#### Result

The block will wait for `60` seconds before completing, at which stage the flow execution will proceed to the next block.

***

## Properties

### Wait Time

The [Wait Time][WaitTime Property] in seconds to wait for.

| | |
|--------------------|---------------------------|
| Data Type | [Double][] |
| Property Type | [Input][] |
| Default Value | `($)WaitTime` with value `30` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when [Wait Time][WaitTime Property] is less than `0` or greater than `2147483`. |

## Remarks

No remarks for the block.

[WaitTime Property]: {{< ref "#wait-time" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[Double]: {{< url "Cortex.Reference.DataTypes.MostCommon.Double" >}}
