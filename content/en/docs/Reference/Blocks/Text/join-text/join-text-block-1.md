---
title: "Join Text"
linkTitle: "Join Text"
description: "Joins a set of values together as text, using the given separator between each value."
---

{{< figure src="/blocks/text-join-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.JoinText.JoinTextBlock`1)</p>

## Description

Joins a set of [Values][Values Property] together as [Text][Text Property], using the given [Separator][Separator Property] between each value.

## Examples

### Join a set of String Values together with a pipe Separator

This example will join the set of [String][] values, `["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]`, together with a pipe separator (i.e. `"|"`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Values][Values Property] | `($)Values`, with value `["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]` | `($)Values` is a variable of type [IEnumerable][]&lt;[String][]&gt; |
| [Separator][Separator Property] | `($)Separator`, with value `"\|"` | `($)Separator` is a variable of type [String][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] |

#### Result

Joining `["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]` together as text with a pipe separator (i.e. `"|"`), results in the variable `($)Text` being updated to the following:

```json
"Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday"
```

***

### Join a set of Int32 Values together with a comma Separator

This example will join the set of [Int32][] values, `[1, 2, 3]`, together with a comma separator (i.e. `","`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Values][Values Property] | `($)Values`, with value `[1, 2, 3]` | `($)Values` is a variable of type [IEnumerable][]&lt;[Int32][]&gt; |
| [Separator][Separator Property] | `($)Separator`, with value `","` | `($)Separator` is a variable of type [String][] |
| [Text][Text Property] | `($)Text`, with no value | `($)Text` is a variable that will be set to a [String][] |

#### Result

Each [Int32][] value will be converted to its text representation, by calling its [ToString][] method (i.e. `value.ToString()`).

Joining `[1, 2, 3]` together as text with a comma separator (i.e. `","`), results in the variable `($)Text` being updated to the following:

```json
"1,2,3"
```

***

## Properties

### Values

The set of [Values][Values Property] to join together as [Text][Text Property].

[Values][Values Property] will be joined together in the order they are defined.

[Values][Values Property] can be any [IEnumerable][]&lt;[TValue][]&gt;, where [TValue][] represents  the type of values.

Each non-text value will be converted to its text representation, by calling its [ToString][] method (i.e. `value.ToString()`).

| | |
|--------------------|---------------------------|
| Data Type | [IEnumerable][]&lt;[TValue][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)Values` with value `[]` |

### Separator

The text to use as a [Separator][Separator Property] between each of the [Values][Values Property].

[Separator][Separator Property] can contain zero or more characters.

The [Separator][Separator Property] is only included in the resultant [Text][Text Property] if [Values][Values Property] has more than `1` item.
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Separator` with value `""` |

### Text

The resultant [Text][Text Property] containing the specified [Values][Values Property] converted to their text representation and separated by the given [Separator][Separator Property].  
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Default Value | `($)Text` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Values][Values Property] is `null`. |
| [OutOfMemoryException][] | Thrown when the length of the resultant [Text][Text Property] is longer than the maximum allowed length (`2,147,483,647`). |

## Remarks

### Null or empty Separator

If [Separator][Separator Property] is `null` or empty (i.e. `""`), an empty text (i.e. `""`) will be used as the separator.

### Null or empty Value in Values

If any value in [Values][Values Property] is `null` or empty (i.e. `""`), an empty text (i.e. `""`) will be used as the value.

[Values Property]: {{< ref "#values" >}}
[Separator Property]: {{< ref "#separator" >}}
[Text Property]: {{< ref "#text" >}}

[TValue]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[OutOfMemoryException]: {{< url "MSDocs.DotNet.Api.System.OutOfMemoryException" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.MostCommon.IEnumerable" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[ToString]: {{< url "MSDocs.DotNet.Api.System.Object.ToString" >}}
