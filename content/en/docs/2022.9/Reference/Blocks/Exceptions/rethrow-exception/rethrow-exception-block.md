---
title: "Rethrow Exception"
linkTitle: "Rethrow Exception"
description: "Rethrows an Exception which has previously been thrown and handled."
---

{{< figure src="/blocks/exceptions-rethrow-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Exceptions.RethrowException.RethrowExceptionBlock)</p>

## Description

Rethrows an [Exception][Exception Property] which has previously been thrown and handled.

## Examples

### Rethrowing an Exception

This example will rethrow the following handled [Exception][] thrown by an [Add Item At Beginning][] block:

{{< figure src="/images/rethrow-original-list-exception.png" >}}

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Exception][Exception Property] | `($)Exception`, with value of`{"Exception Type": "PropertyNullException","Message": "'List' is null; it must be provided with a non-null value.\r\nPlease click the HelpLink for more information on how to fix this.","HelpLink": "https://v2022.docs.cortex-ia.com/docs/reference/exceptions/common/property/property-null-exception"}` | `($)Exception` is a variable of type [PropertyNullException][] |

#### Result

Rethrowing `($)Exception` results in the [Exception][Exception Property] being rethrown and shown in the [Exceptions Viewer][]:

{{< figure src="/images/rethrow-from-list-exception.png" >}}

***

## Properties

### Exception

The [Exception][Exception Property] that is rethrown.

[Exception][Exception Property] can be any [Exception data type][Exception].

| | |
|--------------------|---------------------------|
| Data Type | [Exception][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Exception` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Exception][Exception Property] is `null`. |

## Remarks

### Propagating Exceptions

Sometimes it is necessary to propagate exceptions thrown in a child flow to the flow that called it. Currently, using the [Rethrow Exception][] block to rethrow the [Exception][] from the [Handle Flow Exception][] workspace is the only way to achieve this. This can be seen below:

{{< figure src="/images/rethrow-from-subflow.gif" >}}

In future, additional ways to propagate exceptions between flows may be added.

[Exception Property]: {{< ref "#exception" >}}

[Rethrow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.RethrowException.RethrowException.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Add Item At Beginning]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtBeginning.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Exceptions Viewer]: {{< url path="Cortex.Guides.Studio.EastPanel.ExceptionsViewer">}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}