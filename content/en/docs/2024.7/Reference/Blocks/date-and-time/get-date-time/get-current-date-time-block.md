---
title: "Get Current Date Time"
linkTitle: "Get Current Date Time"
description: "Gets the current Date Time."
---

{{< figure src="/blocks/Cortex_Blocks_DateAndTime_GetDateTime_GetCurrentDateTimeBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DateAndTime.GetDateTime.GetCurrentDateTimeBlock)</p>

## Description

Gets the current [Date Time][DateTime Property].

## Examples

### Get the current Date Time

This example will get the current Date Time.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with no value | `($)DateTime` is a variable that will be set to a [DateTimeOffset][] value |

#### Result

Getting the current Date Time will result in the variable `($)DateTime` being set to a [DateTimeOffset][] representing the current Date Time (including a UTC time offset). Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-11-05T08:48:08.0307614+00:00"
```

***

## Properties

### Date Time

The current [Date Time][DateTime Property] including a UTC time offset.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)DateTime` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Date and Time][].

[DateTime Property]: {{< ref "#date-time" >}}

[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[ISO 8601 Standard]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
