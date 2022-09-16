---
title: "Convert Text To Date Time"
linkTitle: "Convert Text To Date Time"
description: "Converts Text to a Date Time."
---

{{< figure src="/blocks/date-and-time-convert-to-datetime-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DateAndTime.ConvertDateTime.ConvertTextToDateTimeBlock)</p>

## Description

Converts [Text][Text Property] to a [Date Time][DateTime Property].

Additional options can be specified:

* [Format Template][FormatTemplate Property] can be specified to explicity define the format of the [Text][Text Property] (e.g. `"dd/MM/yyyy"`).
* [Format Provider][FormatProvider Property] can be specified to define the cultural rules used to control the conversion (e.g. `new CultureInfo("en-US")` will apply American English rules to the conversion).

## Examples

### ISO 8601 Standard Format

[ISO 8601 Standard][] format is `"yyyy-MM-ddTHH:mm:ss.fffffffzzz"`.

This example will convert `"2021-12-31T00:00:00.0000000+00:00"` to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"2021-12-31T00:00:00+00:00"` | `($)Text` is a variable of type [String][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `null` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `null` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Date Time][DateTime Property] | `($)DateTime`, with no value | `($)DateTime` is a variable that will be set to a [DateTimeOffset][] value |

#### Result

Converting `"2021-12-31T00:00:00.0000000+00:00"` to a Date Time (without specifying any format template or provider) will result in the variable `($)DateTime` being updated to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset). Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-12-31T00:00:00.0000000+00:00"
```

***

### Default format for Invariant Culture

Default format for Invariant Culture is `"MM/dd/yyyy HH:mm:ss zzz"`.

This example will convert `"12/31/2021 00:00:00 +00:00"` to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"12/31/2021 00:00:00 +00:00"` | `($)Text` is a variable of type [String][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `null` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `CultureInfo.InvariantCulture` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Date Time][DateTime Property] | `($)DateTime`, with no value | `($)DateTime` is a variable that will be set to a [DateTimeOffset][] value |

#### Result

Converting `"12/31/2021 00:00:00 +00:00"` to a Date Time without specifying a format template but specifying Invariant Culture, will result in the variable `($)DateTime` being updated to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset). Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-12-31T00:00:00.0000000+00:00"
```

***

### Full Date Long Time format for Invariant Culture

Full Date Long Time format for Invariant Culture is `"dddd, dd MMMM yyyy HH:mm:ss"`.

This example will convert `"Friday, 31 December 2021 00:00:00"` to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset).

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"Friday, 31 December 2021 00:00:00"` | `($)Text` is a variable of type [String][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"F"` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `CultureInfo.InvariantCulture` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Date Time][DateTime Property] | `($)DateTime`, with no value | `($)DateTime` is a variable that will be set to a [DateTimeOffset][] value |

#### Result

Converting `"Friday, 31 December 2021 00:00:00"` to a Date Time specifying the Full Date Long Time format for Invariant Culture, will result in the variable `($)DateTime` being updated to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset). Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-12-31T00:00:00.0000000+00:00"
```

***

### Default format for American English ("en-US")

Default format for American English ("en-US") is `"MM/d/yyyy h:m:s tt zzz"`.

This example will convert `"12/31/2021 12:00:00 AM +00:00"` to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset).

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"12/31/2021 12:00:00 AM +00:00"` | `($)Text` is a variable of type [String][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `null` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `new CultureInfo("en-US")` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Date Time][DateTime Property] | `($)DateTime`, with no value | `($)DateTime` is a variable that will be set to a [DateTimeOffset][] value |

#### Result

Converting `"12/31/2021 12:00:00 AM +00:00"` to a Date Time without specifying a format template but specifying American English `"en-US"`, will result in the variable `($)DateTime` being updated to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset). Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-12-31T00:00:00.0000000+00:00"
```

***

### Full Date Long Time format for American English ("en-US")

Full Date Long Time format for American English ("en-US") is `"dddd, MMMM d, yyyy h:m:s tt"`.

This example will convert `"Friday, December 31, 2021 12:00:00 AM"` to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"Friday, December 31, 2021 12:00:00 AM"` | `($)Text` is a variable of type [String][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"F"` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `new CultureInfo("en-US")` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Date Time][DateTime Property] | `($)DateTime`, with no value | `($)DateTime` is a variable that will be set to a [DateTimeOffset][] value |

#### Result

Converting `"Friday, December 31, 2021 12:00:00 AM"` to a Date Time specifying the Full Date Long Time format for American English `"en-US"`, will result in the variable `($)DateTime` being updated to a Date Time representing midnight on 31st December 2021 (with `0` UTC time offset). Its text representation will be in the [ISO 8601 Standard][], which can be seen below:

```json
"2021-12-31T00:00:00.0000000+00:00"
```

***

## Properties

### Text

The [Text][Text Property] to convert to a [Date Time][DateTime Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Text` with no value |

### Format Template

[Format Template][FormatTemplate Property] can be specified to define the format the [Text][Text Property] is in (e.g. `"dd/MM/yyyy"`).

If [Format Template][FormatTemplate Property] does not contain any valid format specifiers (e.g. `"ww/ww/wwww"`) and the text exactly matches the [Format Template][FormatTemplate Property] (e.g. `"ww/ww/wwww"`), then [Date Time][DateTime Property] is set to a [DateTimeOffset][] value that represents the current Date and Time.

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), the [ISO 8601 Standard][] format will be used for the conversion (i.e. `"yyyy-MM-ddTHH:mm:ss.fffffffzzz"`).

If the [ISO 8601 Standard][] format fails, then the default template of the specified [Format Provider][FormatProvider Property] will be used; if there is no specified [Format Provider][FormatProvider Property], then [Invariant Culture rules][] will be used instead.

For information about format templates and specifiers, please see [Date and Time Formatting][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][TODO] |
| Default Value | `yyyy-MM-ddTHH:mm:ss.fffffffzzz` |

### Format Provider

[Format Provider][FormatProvider Property] can be specified to define the cultural rules used to control the conversion (e.g. `new CultureInfo("en-US")` will apply American English rules to the conversion).

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

| | |
|--------------------|---------------------------|
| Data Type | [IFormatProvider][] |
| Property Type | [Input][] |
| Is Advanced | `true` |
| Default Editor | [Expression][TODO] |
| Default Value | `CultureInfo.InvariantCulture` |

### Date Time

The [Date Time][DateTime Property] that has been converted from [Text][Text Property].

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [DateTimeOffset][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)DateTime` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [FormatException][] | Thrown when [Format Template][FormatTemplate Property] does not contain any valid specifiers (e.g. `"ww/ww/wwww"`). |
| | Thrown when [Format Template][FormatTemplate Property] contains non-specifier characters, and [Text][Text Property] does not match the characters exactly (e.g. `"01/10/2021 12:00"` and `"dd/ww/yyyy hh:mm"` will throw, but `"01/ww/2021 12:00"` and `"dd/ww/yyyy hh:mm"` does not). |
| | Thrown when [Format Template][FormatTemplate Property] is `null` or empty (i.e. `""`) and the [Text][Text Property] does not match the [ISO 8601 Standard][] format, the default format of the [Format Provider][FormatProvider Property] (e.g. `"31/12/2021 00:00"` and `"dd/MM/yyyy"`). |
| [PropertyEmptyException][] | Thrown when [Text][Text Property] is empty (i.e. `""`). |
| [PropertyNullException][] | Thrown when [Text][Text Property] is `null`. |

## Remarks

### Dates and Time

The default text representation of Date and Time will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

For more information, please see [Working with Date and Time][].

### Format Template and Specifiers

Please note that changes to operating system date and time formats, could result in some of the examples above displaying different results.

For information about format templates and specifiers, please see [Date and Time Formatting][].

### Null or Empty Format Template

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), the [ISO 8601 Standard][] format will be used for the conversion (i.e. `"yyyy-MM-ddTHH:mm:ss.fffffffzzz"`).

If the [ISO 8601 Standard][] format fails, then the default template of the specified [Format Provider][FormatProvider Property] will be used; if there is no specified [Format Provider][FormatProvider Property], then [Invariant Culture rules][] will be used instead.

### Null Format Provider

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

[DateTime Property]: {{< ref "#date-time" >}}
[FormatTemplate Property]: {{< ref "#format-template" >}}
[FormatProvider Property]: {{< ref "#format-provider" >}}
[Text Property]: {{< ref "#text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[FormatException]: {{< url "MSDocs.DotNet.Api.System.FormatException" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[Date and Time Formatting]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[Invariant Culture rules]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.InvariantCulture" >}}
[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[IFormatProvider]: {{< url "Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
