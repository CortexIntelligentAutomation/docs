---
title: "Format Text With Value"
linkTitle: "Format Text With Value"
description: "Formats text by replacing all `{0}` format parameters in a specified format template with a given value."
---

{{< figure src="/blocks/text-format-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.FormatText.FormatTextWithValueBlock`1)</p>

## Description

Replaces all `{0}` format parameters in the specified [Format Template][FormatTemplate Property] with the given [Value][Value Property], saving the result as [Text][Text Property].

An additional [Format Provider][FormatProvider Property] option can be specified to define the cultural rules used to control the formatting (e.g. `new CultureInfo("en-US")` will apply American English rules to the formatting).

## Examples

### Text Value

This example will format `"Hello {0}"` with `"world!"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"Hello {0}"` | `($)FormatTemplate` is a variable of type [String][] |
| [Value][Value Property] | `($)Value`, with value `"world!"` | `($)Value` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `null` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Formatting `"Hello {0}"` with `"world!"` results in the variable `($)Text` being updated to the following:

```json
"Hello world!"
```

***

### Double Value using American English ("en-US")

This example will format `"Your final bill is {0:C2}"` with `99.99`.

The format parameter `{0:C2}` will display the double value as U.S currency to two decimal places (i.e. `$99.99`):

* `0` - is replaced by the double value.
* `C` - indicates to include the currency symbol for the specified culture (i.e. `$`).
* `2` - indicates the number of decimal places to format the double value to.

For information about format templates and parameters, please see [Text Formatting][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"Your final bill is {0:C2}"` | `($)FormatTemplate` is a variable of type [String][] |
| [Value][Value Property] | `($)Value`, with value `99.99` | `($)Value` is a variable of type [Double][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `new CultureInfo("en-US")` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Formatting `"Your final bill is {0:C2}"` with `99.99` results in the variable `($)Text` being updated to the following:

```json
"Your final bill is $99.99"
```

***

## Properties

### Format Template

[Format Template][FormatTemplate Property] can be specified to define the format of the resultant [Text][Text Property].

All `{0}` format parameters in [Format Template][FormatTemplate Property] will be replaced with [Value][Value Property].

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), or does not contain any `{0}` format parameters, nothing is replaced; [Text][Text Property] will be set to the value of [Format Template][FormatTemplate Property].

For information about format templates and parameters, please see [Text Formatting][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | `@"{0}"` |

### Value

The [Value][Value Property] to replace all `{0}` format parameters with.

[Value][Value Property] does not have to be text, it can be any data type. Any non-text value will be converted to its text representation when it is replaced.

For information about how types are converted to their text representation please see [Converting Objects To Text][].

| | |
|--------------------|---------------------------|
| Data Type | [TValue][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Format Provider

[Format Provider][FormatProvider Property] can be specified to define the cultural rules used to control the formatting (e.g. `new CultureInfo("en-US")` will apply American English rules to the formatting.).

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

| | |
|--------------------|---------------------------|
| Data Type | [IFormatProvider][] |
| Property Type | [Input][] |
| Is Advanced | `true` |
| Default Editor | [Expression][] |
| Default Value | `CultureInfo.InvariantCulture` |

### Text

The formatted [Text][Text Property] that results from replacing all `{0}` format parameters in [Format Template][FormatTemplate Property] with [Value][Value Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [FormatException][] | Thrown when [Format Template][FormatTemplate Property] contains a format parameter not equal to zero (e.g. `"Hello {1}"`). |
| | Thrown when [Format Template][FormatTemplate Property] contains a format parameter that is invalid or not well-formed (e.g. `"Cost is {0:Q2}`, as `"Q"` is not a [valid format parameter][]). |

## Remarks

### Text Formatting

Please note that changes to operating system settings, could result in some of the examples above displaying different results.

For information about format templates and parameters, please see [Text Formatting][].

### Null or Empty Format Template

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), or does not contain any `{0}` format parameters, nothing is replaced; [Text][Text Property] will be set to the value of [Format Template][FormatTemplate Property].

### Null Format Provider

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

[FormatTemplate Property]: {{< ref "#format-template" >}}
[Value Property]: {{< ref "#value" >}}
[FormatProvider Property]: {{< ref "#format-provider" >}}
[Text Property]: {{< ref "#text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[FormatException]: {{< url "MSDocs.DotNet.Api.System.FormatException" >}}

[Converting Objects To Text]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.MainDoc" >}}
[Invariant Culture rules]: {{< url "Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Text Formatting]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc" >}}
[Valid Format Parameter]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.Formatting.FormatParameters" >}}

[TValue]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Double]: {{< url "Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[IFormatProvider]: {{< url "Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
