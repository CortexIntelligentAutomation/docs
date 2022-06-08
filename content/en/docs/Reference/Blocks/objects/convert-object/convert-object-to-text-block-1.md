---
title: "Convert Object To Text"
linkTitle: "Convert Object To Text"
description: "Converts an object to text by replacing all `{Property}` format parameters in a specified format template with the Object's corresponding property value."
---

{{< figure src="/blocks/objects-convert-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Object.ConvertObject.ConvertObjectToTextBlock`1)</p>

## Description

Converts the given [Object][Object Property] to [Text][Text Property].

It does this by replacing all `{Property}` format parameters in the specified [Format Template][FormatTemplate Property] with the corresponding property value from the given [Object][Object Property].

An additional [Format Provider][FormatProvider Property] option can be specified to define the cultural rules used to control the formatting (e.g. `new CultureInfo("en-US")` will apply American English rules to the formatting).

## Examples

### Convert Structure to Text

This example will convert:

```json
{
    "LastPaymentAmount": 99.99, 
    "PercentagePaidOff": 0.8000, 
    "PercentageRemaining": 0.2000, 
    "TotalPaidOff": 350.99, 
    "TotalRemaining": 40
}
```

to text, based on the following format template:

```json
"Your latest payment of {LastPaymentAmount:C2} has been received. You have paid {PercentagePaidOff:P0} of your total and have {TotalRemaining:C2} outstanding."
```

The format parameter `{LastPaymentAmount:C2}` will display the `99.99` as U.S currency to two decimal places (i.e. `$99.99`):

* `LastPaymentAmount` - is replaced by the value of the `"LastPaymentAmount"` property (i.e. `99.99`).
* `C` - indicates to include the currency symbol for the specified culture (i.e. `$`).
* `2` - indicates to format the value to two decimal places.

The format parameter `{PercentagePaidOff:P0}` will display the `0.8000` as a percentage to zero decimal places (i.e. `80 %`):

* `PercentagePaidOff` - is replaced by the value of the `"PercentagePaidOff"` (i.e. `0.8000`).
* `P` - indicates the value should be formatted as a percentage.
* `0` - indicates to format the percentage value to zero decimal places.

The format parameter `{TotalRemaining:C2}` will display the `40` as U.S currency to two decimal places (i.e. `$40.00`):

* `TotalRemaining` - is replaced by the value of the `"TotalRemaining"` property (i.e. `40`).
* `C` - indicates to include the currency symbol for the specified culture (i.e. `$`).
* `2` - indicates to format the value to two decimal places.

For information about format templates and parameters, please see [Text Formatting][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Object][Object Property] | `($)Object`, with value `{"LastPaymentAmount":99.99, "PercentagePaidOff":0.8000, "PercentageRemaining":0.2000, "TotalPaidOff":350.99, "TotalRemaining":40}` | `($)Object` is a variable of type [Structure][] |
| [Format Template][FormatTemplate Property] | `($)FormatTemplate`, with value `"Your latest payment of {LastPaymentAmount:C2} has been received. You have paid {PercentagePaidOff:P0} of your total and have {TotalRemaining:C2} outstanding."` | `($)FormatTemplate` is a variable of type [String][] |
| [Format Provider][FormatProvider Property] | `($)FormatProvider`, with value `new CultureInfo("en-US")` | `($)FormatProvider` is a variable of type [IFormatProvider][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] value |

#### Result

Converting:

```json
{
    "LastPaymentAmount": 99.99, 
    "PercentagePaidOff": 0.8000, 
    "PercentageRemaining": 0.2000, 
    "TotalPaidOff": 350.99, 
    "TotalRemaining": 40
}
```

to text, based on the following format template:

```json
"Your latest payment of {LastPaymentAmount:C2} has been received. You have paid {PercentagePaidOff:P0} of your total and have {TotalRemaining:C2} outstanding."
```

results in the variable `($)Text` being updated to the following:

```json
"Your latest payment of $99.99 has been received. You have paid 80 % of your total and have $40.00 outstanding."
```

***

## Properties

### Object

The [Object][Object Property] to convert to [Text][Text Property].

All `{Property}` format parameters which match a property name in the [Object][Object Property] will be replaced by that property's value.

The values of matching properties do not have to be text, they can be any data type. Any non-text value will be converted to its text representation when it is replaced.

For information about how types are converted to their text representation please see [Converting Objects To Text][].

| | |
|--------------------|---------------------------|
| Data Type | [TObject][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Object` with no value |

### Format Template

[Format Template][FormatTemplate Property] can be specified to define the format of the resultant [Text][Text Property].

All `{Property}` format parameters in [Format Template][FormatTemplate Property] will be replaced with the corresponding property value from the [Object][Object Property].

`{Property}` format parameters are case-sensitive, so must exactly match the property name in the [Object][Object Property]; those that do not will not be replaced.

If [Format Template][FormatTemplate Property] is specified but does not contain any `{Property}` format parameters, nothing is replaced; [Text][Text Property] will be set to the value of [Format Template][FormatTemplate Property].

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), [Text][Text Property] will be set to the value of [Convert.ToString(Object, Format Provider)][Convert ToString].

For information about format templates and parameters, please see [Text Formatting][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Expression][TODO] |
| Default Value | `$@""` |

### Format Provider

[Format Provider][FormatProvider Property] can be specified to define the cultural rules used to control the formatting (e.g. `new CultureInfo("en-US")` will apply American English rules to the formatting.).

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

| | |
|--------------------|---------------------------|
| Data Type | [IFormatProvider][] |
| Property Type | [Input][] |
| Is Advanced | `true` |
| Default Editor | [Expression][TODO] |
| Default Value | `CultureInfo.InvariantCulture` |

### Text

The formatted [Text][Text Property] that results from replacing all `{Property}` format parameters in [Format Template][FormatTemplate Property] with their corresponding property value from the given [Object][Object Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Text` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [FormatException][] | Thrown when [Format Template][FormatTemplate Property] contains a format parameter that is invalid or not well-formed (e.g. `"Cost is {TotalCost:Q2}`, as `"Q"` is not a [valid format parameter][]). |
| [PropertyNullException][] | Thrown when [Object][Object Property] is `null`. |

## Remarks

### Text Formatting

Please note that changes to operating system settings, could result in some of the examples above displaying different results.

For information about format templates and parameters, please see [Text Formatting][].

### Null or Empty Format Template

If [Format Template][FormatTemplate Property] is specified but does not contain any `{Property}` format parameters, nothing is replaced; [Text][Text Property] will be set to the value of [Format Template][FormatTemplate Property].

If [Format Template][FormatTemplate Property] is not specified, `null` or empty (i.e. `""`), [Text][Text Property] will be set to the value of [Convert.ToString(Object, Format Provider)][Convert ToString].

### Null Format Provider

If [Format Provider][FormatProvider Property] is not specified or `null`, `CultureInfo.InvariantCulture` will be used; `CultureInfo.InvariantCulture` is associated with the English language but not with any country/region. For more information, please see [Invariant Culture rules][].

### Nested Properties

Format parameters support nested properties, which means given an object like the following:

```json
{
    "LastPaymentAmount": 99.99, 
    "PaidOff": { 
        "Percentage": 0.8000, 
        "Total": 350.99
    },
    "Remaining": {
        "Remaining": 0.2000, 
        "Total": 40
    }
}
```

that nested property values such as PaidOff.Total can be accessed. This is done by using the following format parameter syntax:

```json
"{PaidOff.Total}"
```

### Known Limitations

Currently the block does not support indexing into properties (i.e. `ListProperty[0]` or `DictionaryProperty["key"]`).

[Object Property]: {{< ref "#object" >}}
[FormatTemplate Property]: {{< ref "#format-template" >}}
[FormatProvider Property]: {{< ref "#format-provider" >}}
[Text Property]: {{< ref "#text" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[FormatException]: {{< url "MSDocs.DotNet.Api.System.FormatException" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[Convert ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToStringObjectFormatProvider" >}}

[Converting Objects To Text]: {{< url "Cortex.Reference.Concepts.Fundamentals.ConvertingObjectsToText.MainDoc" >}}
[Invariant Culture rules]: {{< url "Cortex.Reference.Concepts.Fundamentals.Culture.InvariantCulture" >}}
[Text Formatting]: {{< url "Cortex.Reference.Concepts.WorkingWithText.Formatting.MainDoc" >}}
[Valid Format Parameter]: {{< url "Cortex.Reference.Concepts.WorkingWithText.Formatting.FormatParameters" >}}

[TObject]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[IFormatProvider]: {{< url "Cortex.Reference.DataTypes.MostCommon.IFormatProvider" >}}
