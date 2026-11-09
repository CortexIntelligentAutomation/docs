---
title: "Is Date Time Between"
linkTitle: "Is Date Time Between"
description: "Checks if a Date Time is between two Date Times."
---

{{< figure src="/blocks/Cortex_Blocks_DateAndTime_IsDateTime_IsDateTimeBetweenBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DateAndTime.IsDateTime.IsDateTimeBetweenBlock)</p>

## Description

Checks if a [Date Time][DateTime Property] is between the specified [Start Date Time][StartDateTime Property] and [End Date Time][EndDateTime Property].

## Examples

### Date Time is between Start Date Time and End Date Time

This example will check if `2021-06-01T00:00:00+00:00` is between `2021-01-01T00:00:00+00:00` and `2022-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-06-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Start Date Time][StartDateTime Property] | `($)StartDateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)StartDateTime` is a variable of type [DateTimeOffset][] |
| [End Date Time][EndDateTime Property] | `($)EndDateTime`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)EndDateTime` is a variable of type [DateTimeOffset][] |
| [Date Time Is Between][DateTimeIsBetween Property] | `($)DateTimeIsBetween`, with no value | `($)DateTime` is a variable that will be set to a [Boolean][] value |

#### Result

Checking if `2021-06-01T00:00:00+00:00` is between `2021-01-01T00:00:00+00:00` and `2022-01-01T00:00:00+00:00` will result in the variable `($)DateTimeIsBetween` being updated to the following:

```json
true
```

***

### Date Time is not between Start Date Time and End Date Time

This example will check if `2020-01-01T00:00:00+00:00` is between `2021-01-01T00:00:00+00:00` and `2022-01-01T00:00:00+00:00`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2020-01-01T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Start Date Time][StartDateTime Property] | `($)StartDateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-01-01T00:00:00+00:00` | `($)StartDateTime` is a variable of type [DateTimeOffset][] |
| [End Date Time][EndDateTime Property] | `($)EndDateTime`, with value of [DateTimeOffset][] that has a text representation of `2022-01-01T00:00:00+00:00` | `($)EndDateTime` is a variable of type [DateTimeOffset][] |
| [Date Time Is Between][DateTimeIsBetween Property] | `($)DateTimeIsBetween`, with no value | `($)DateTime` is a variable that will be set to a [Boolean][] value |

#### Result

Checking if `2020-01-01T00:00:00+00:00` is between `2021-01-01T00:00:00+00:00` and `2022-01-01T00:00:00+00:00` will result in the variable `($)DateTimeIsBetween` being updated to the following:

```json
false
```

***

## Properties

### Date Time

The [Date Time][DateTime Property] to check is between [Start Date Time][StartDateTime Property] and [End Date Time][EndDateTime Property].

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)DateTime` with no value |

### Start Date Time

The [Start Date Time][StartDateTime Property] to check against. This is inclusive, which means if [Date Time][DateTime Property] is equal to it, it will be considered between.

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)StartDateTime` no value |

### End Date Time

The [End Date Time][EndDateTime Property] to check against. This is inclusive, which means if [Date Time][DateTime Property] is equal to it, it will be considered between.

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)EndDateTime` with no value |

### Date Time Is Between

The result of the is between check.

If [Date Time][DateTime Property] is between (and including) the [Start Date Time][StartDateTime Property] and [End Date Time][EndDateTime Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)DateTimeIsBetween` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Date and Time][].

### Start Date Time and End Date Time are inclusive

The [Start Date Time][StartDateTime Property] and [End Date Time][EndDateTime Property] properties are both inclusive, which means if [Date Time][DateTime Property] is equal to either of them, it will be considered between.

### Start Date Time greater than End Date Time

[Start Date Time][StartDateTime Property] can be greater than [End Date Time][EndDateTime Property]; as long as [Date Time][DateTime Property] is between or equal to either of them the variable specified for [Date Time Is Between][DateTimeIsBetween Property] will be set to `true`, otherwise it will be set to `false`.

[DateTime Property]: {{< ref "#date-time" >}}
[StartDateTime Property]: {{< ref "#start-date-time" >}}
[EndDateTime Property]: {{< ref "#end-date-time" >}}
[DateTimeIsBetween Property]: {{< ref "#date-time-is-between" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[ISO 8601 Standard]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
