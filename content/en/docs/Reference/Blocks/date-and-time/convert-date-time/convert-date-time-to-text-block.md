---
title: "Convert Date Time To Text"
linkTitle: "Convert Date Time To Text"
description: "Converts a Date Time to Text."
---

{{< figure src="/blocks/date-and-time-convert-to-text-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DateAndTime.ConvertDateTime.ConvertDateTimeToTextBlock)</p>

## Description

Converts a [Date Time][DateTime Property] to [Text][Text Property].

Additional options can be specified:

* [Format Template][FormatTemplate Property] can be specified to define the format the [Date Time][DateTime Property] should be converted to (e.g. `"dd/MM/yyyy"`).
* [Format Provider][FormatProvider Property] can be specified to define the cultural rules used to control the formatting (e.g. `new CultureInfo("en-US")` will apply American English rules to the formatting).

## Examples

### ISO 8601 Standard Format

This example will convert a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset) to the [ISO 8601 Standard][] format (i.e. `"yyyy-MM-ddTHH:mm:ss.fffffffzzz"`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `null` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `null` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Converting a Date Time representing midnight on 31st December 2021 (with a `0` UTC time offset and without specifying any format template or provider) will result in the variable `($)Text` being updated to the following [ISO 8601 Standard][] text representation:

```json
"2021-12-31T00:00:00.0000000+00:00"
```

***

### Default format for Invariant Culture

This example will convert a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset) to the default format for Invariant Culture (i.e. `"MM/dd/yyyy HH:mm:ss zzz"`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `null` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `CultureInfo.InvariantCulture` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Converting a Date Time representing midnight on 31st December 2021 (with a `0` UTC time offset and without a format template), but specifying Invariant Culture text representation, will result in the variable `($)Text` being updated to the following:

```json
"12/31/2021 00:00:00 +00:00"
```

***

### Full Date Long Time format for Invariant Culture

This example will convert a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset) to the Full Date Long Time format for Invariant Culture (i.e. `"dddd, dd MMMM yyyy HH:mm:ss"`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"F"` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `CultureInfo.InvariantCulture` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Converting a Date Time representing midnight on 31st December 2021 (with a `0` UTC time offset), and specifying the Full Date Long Time format for Invariant Culture, will result in the variable `($)Text` being updated to the following:

```json
"Friday, 31 December 2021 00:00:00"
```

***

### Default format for American English ("en-US")

This example will convert a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset) to the default format for American English `"en-US"` (i.e. `"MM/d/yyyy h:m:s tt zzz"`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `null` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `new CultureInfo("en-US")` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Converting a Date Time representing midnight on 31st December 2021 (with a `0` UTC time offset and without a format template), but specifying an American English `"en-US"` text representation, will result in the variable `($)Text` being updated to the following:

```json
"12/31/2021 12:00:00 AM +00:00"
```

***

### Full Date Long Time format for American English ("en-US")

This example will convert a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset) to the Full Date Long Time format for American English `"en-US"` (i.e. `"dddd, MMMM d, yyyy h:m:s tt"`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Date Time][DateTime Property] | `($)DateTime`, with value of [DateTimeOffset][] that has a text representation of `2021-12-31T00:00:00+00:00` | `($)DateTime` is a variable of type [DateTimeOffset][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"F"` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `new CultureInfo("en-US")` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Converting a Date Time representing midnight on 31st December 2021 (with a `0` UTC time offset), and specifying the Full Date Long Time format for American English `"en-US"`, will result in the variable `($)Text` being updated to the following:

```json
"Friday, December 31, 2021 12:00:00 AM"
```

***

## Properties

### Date Time

The [Date Time][DateTime Property] to convert to [Text][Text Property].

By default, if no [Format Template][FormatTemplate Property] or [Format Provider][FormatProvider Property] are specified, the resultant [Text][Text Property] will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Input][] |
| Default Value | `($)DateTime` with [DateTimeOffset][] value that has a text representation of `0001-01-01T00:00:00+00:00` |

### Format Template

[Format Template][FormatTemplate Property] can be specified to define the format the [Date Time][DateTime Property] should be converted to (e.g. `"dd/MM/yyyy"` -> `"31/12/2021"`).

If [Format Template][FormatTemplate Property] contains valid format specifiers (e.g. `"dd"` for 2 digit day representation), they will be subsitituted based on the [Date Time][DateTime Property]; characters that are not format specifiers will be passed through as literal text.

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), the default format template of the specified [Format Provider][FormatProvider Property] is used. If [Format Provider][FormatProvider Property] is also not specified or `null` the [ISO 8601 Standard][] format will be used (i.e. `"yyyy-MM-ddTHH:mm:ss.fffffffzzz"`).

For information about format templates and specifiers, please see [Date and Time Formatting][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FormatTemplate` with value `null` |

### Format Provider

[Format Provider][FormatProvider Property] can be specified to define the cultural rules used to control the formatting (e.g. `new CultureInfo("en-US")` will apply American English rules to the formatting.).

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

| | |
|--------------------|---------------------------|
| Data Type | [IFormatProvider][] |
| Property Type | [Input][] |
| Default Value | `($)FormatProvider` with value `null` |

### Text

The [Text][Text Property] representation of the [Date Time][DateTime Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Default Value | `($)Text` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [FormatException][] | Thrown when [Format Template][FormatTemplate Property] is a single invalid format specifier (i.e. `"a"`). |

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Date and Time][].

### Format Template and Specifiers

Please note that changes to operating system date and time formats, could result in some of the examples above displaying different results.

For information about format templates and specifiers, please see [Date and Time Formatting][].

### Null or Empty Format Template

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), the default format template of the specified [Format Provider][FormatProvider Property] is used. If [Format Provider][FormatProvider Property] is also not specified or `null` the [ISO 8601 Standard][] format will be used (i.e. `"yyyy-MM-ddTHH:mm:ss.fffffffzzz"`).

### Null Format Provider

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

[DateTime Property]: {{< ref "#date-time" >}}
[FormatTemplate Property]: {{< ref "#format-template" >}}
[FormatProvider Property]: {{< ref "#format-provider" >}}
[Text Property]: {{< ref "#text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[FormatException]: {{< url "MSDocs.DotNet.Api.System.FormatException" >}}

[Date and Time Formatting]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[Invariant Culture rules]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.InvariantCulture" >}}
[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[IFormatProvider]: {{< url "Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
