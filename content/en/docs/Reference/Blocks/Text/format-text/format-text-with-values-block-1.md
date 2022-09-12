---
title: "Format Text With Values"
linkTitle: "Format Text With Values"
description: "Formats text by replacing all format parameters (e.g. `{0}` or `{1}` or `{2}`) in a specified format template with given values."
---

{{< figure src="/blocks/text-format-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.FormatText.FormatTextWithValuesBlock`1)</p>

## Description

Replaces all format parameters (e.g. `{0}` or `{1}` or `{2}`) in the given [Format Template][FormatTemplate Property] with the specified [Values][Values Property], saving the result as [Text][Text Property].

An additional [Format Provider][FormatProvider Property] option can be specified to define the cultural rules used to control the formatting (e.g. `new CultureInfo("en-US")` will apply American English rules to the formatting).

## Examples

### Text Values

This example will format `"Hello {0} {1}"` with `["Mr", "Smith"]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"Hello {0} {1}"` | `($)FormatTemplate` is a variable of type [String][] |
| [Values][Values Property] | `($)Values`, with value `["Mr", "Smith"]` | `($)Values` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `null` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Formatting `"Hello {0} {1}"` with `["Mr", "Smith"]` results in the variable `($)Text` being updated to the following:

```json
"Hello Mr Smith"
```

***

### Multiple non-text values using American English ("en-US")

This example will format `"Your latest payment of {0:C2} has been received. You have paid {1:P0} of your total and have {2:C2} outstanding."` with `[99.99, 0.8, 40]`.

The format parameter `{0:C2}` will display the `99.99` as U.S currency to two decimal places (i.e. `$99.99`):

* `0` - is replaced by the double value `99.99`.
* `C` - indicates to include the currency symbol for the specified culture (i.e. `$`).
* `2` - indicates to format the double value to two decimal places.

The format parameter `{1:P0}` will display the `0.8` as a percentage to zero decimal places (i.e. `80 %`):

* `1` - is replaced by the double value `0.8`.
* `P` - indicates the value should be formatted as a percentage.
* `0` - indicates to format the percentage value to zero decimal places.

The format parameter `{2:C2}` will display the `40` as U.S currency to two decimal places (i.e. `$40.00`):

* `2` - is replaced by the double value `40`.
* `C` - indicates to include the currency symbol for the specified culture (i.e. `$`).
* `2` - indicates to format the double value to two decimal places.

For information about format templates and parameters, please see [Text Formatting][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"Your latest payment of {0:C2} has been received. You have paid {1:P0} of your total and have {2:C2} outstanding."` | `($)FormatTemplate` is a variable of type [String][] |
| [Values][Values Property] | `($)Values`, with value `[99.99, 0.8, 40]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Double][]&gt; |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `new CultureInfo("en-US")` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

`"Your latest payment of {0:C2} has been received. You have paid {1:P0} of your total and have {2:C2} outstanding."` with `[99.99, 0.8, 40]` results in the variable `($)Text` being updated to the following:

```json
"Your latest payment of $99.99 has been received. You have paid 80 % of your total and have $40.00 outstanding."
```

***

## Properties

### Format Template

[Format Template][FormatTemplate Property] can be specified to define the format of the resultant [Text][Text Property].

All format parameters (e.g. `{0}` or `{1}` or `{2}`) in [Format Template][FormatTemplate Property] will be replaced with the corresponding value in [Values][Values Property]. Format parameter `{0}` will be replaced with the first value in [Values][Values Property]; `{1}` will be replaced with the second value in [Values][Values Property] etc.

The number of unique format parameters must be equal to or less than the number of items in [Values][Values Property].

The index of each format parameter must be equal to or less than the number of items in [Values][Values Property] - `1`.

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), or does not contain any format parameters, nothing is replaced; [Text][Text Property] will be set to the value of [Format Template][FormatTemplate Property].

For information about format templates and parameters, please see [Text Formatting][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)FormatTemplate` with value `null` |

### Values

The [Values][Values Property] to replace all format parameters with.

If a value does not have a corresponding format parameter, it is ignored.

[Values][Values Property] does not have to contain all text values, it can contain any data types. Any non-text values will be converted to their text representation when they are replaced.

If any value is `null` or empty (i.e. `""`), an empty text (i.e. `""`) will replace the corresponding format parameter.

For information about how types are converted to their text representation please see [Converting Objects To Text][].

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TValue][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Values` with value `[]` |

### Format Provider

[Format Provider][FormatProvider Property] can be specified to define the cultural rules used to control the formatting (e.g. `new CultureInfo("en-US")` will apply American English rules to the formatting.).

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

| | |
|--------------------|---------------------------|
| Data Type | [IFormatProvider][] |
| Property Type | [Input][] |
| Default Value | `($)FormatProvider` with value `null` |

### Text

The formatted [Text][Text Property] that results from replacing all format parameters in [Format Template][FormatTemplate Property] with corresponding [Values][Values Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Default Value | `($)Text` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [FormatException][] | Thrown when [Format Template][FormatTemplate Property] contains a format parameter less than zero (e.g. `"Hello {-1}"`) or greater than the count of [Values][Values Property] - `1`. |
| | Thrown when [Format Template][FormatTemplate Property] contains a format parameter that is invalid or not well-formed (e.g. `"Cost is {0:Q2}`, as `"Q"` is not a [valid format parameter][]). |
| [PropertyNullException][] | Thrown when [Values][Values Property] is `null`. |

## Remarks

### Text Formatting

Please note that changes to operating system settings, could result in some of the examples above displaying different results.

For information about format templates and parameters, please see [Text Formatting][].

### Null or Empty Format Template

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), or does not contain any format parameters, nothing is replaced; [Text][Text Property] will be set to the value of [Format Template][FormatTemplate Property].

### Null Format Provider

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

[FormatTemplate Property]: {{< ref "#format-template" >}}
[Values Property]: {{< ref "#values" >}}
[FormatProvider Property]: {{< ref "#format-provider" >}}
[Text Property]: {{< ref "#text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[FormatException]: {{< url "MSDocs.DotNet.Api.System.FormatException" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[Converting Objects To Text]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.MainDoc" >}}
[Invariant Culture rules]: {{< url "Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Text Formatting]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[Valid Format Parameter]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.Formatting.FormatParameters" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[TValue]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataTypes.Generics.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Double]: {{< url "Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[IFormatProvider]: {{< url "Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
