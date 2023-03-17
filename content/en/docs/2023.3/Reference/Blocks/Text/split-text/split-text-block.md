---
title: "Split Text"
linkTitle: "Split Text"
description: "Splits text into a list of String values, using the given separator to determine where to split."
---

{{< figure src="/blocks/text-split-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Text.SplitText.SplitTextBlock)</p>

## Description

Splits [Text][Text Property] into a list of [String][] [Values][Values Property], using the given [Separator][Separator Property] to determine where to split.

[Split Options][SplitOptions Property] can be used to specify how to treat empty entries (i.e. `""`).

## Examples

### Split Text into a list of String Values using a pipe Separator

This example will split the text `"Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday"` into a list of [String][] values, using the pipe separator (i.e. `"|"`) to determine where to split.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"Sunday\|Monday\|Tuesday\|Wednesday\|Thursday\|Friday\|Saturday"` | `($)Text` is a variable of type [String][] |
| [Separator][Separator Property] | `($)Separator`, with value `"\|"` | `($)Separator` is a variable of type [String][] |
| [Split Options][SplitOptions Property] | `($)SplitOptions`, with value `StringSplitOptions.None` | `($)SplitOptions` is a variable of type [StringSplitOptions][] |
| [Values][Values Property] | `($)Values`, with no value | `($)Values` is a variable that will be set to an [IList][]&lt;[String][]&gt; |

#### Result

Splitting `"Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday"` using a pipe separator (i.e. `"|"`), results in the variable `($)Values` being updated to the following:

```json
["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
```

***

### Split Text into a list of String Values using a comma Separator (removing empty entries)

This example will split the text `"1,2,3,,"` into a list of [String][] values, using the comma separator (i.e. `","`) to determine where to split, and removing empty entries (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"1,2,3,,"` | `($)Text` is a variable of type [String][] |
| [Separator][Separator Property] | `($)Separator`, with value `","` | `($)Separator` is a variable of type [String][] |
| [Split Options][SplitOptions Property] | `($)SplitOptions`, with value `StringSplitOptions.RemoveEmptyEntries` | `($)SplitOptions` is a variable of type [StringSplitOptions][] |
| [Values][Values Property] | `($)Values`, with no value | `($)Values` is a variable that will be set to an [IList][]&lt;[String][]&gt; |

#### Result

Splitting `"1,2,3,,"` using a comma separator (i.e. `","`) and removing the last 2 entries which are  empty (i.e. `""`), results in the variable `($)Values` being updated to the following:

```json
["1", "2", "3"]
```

***

### Split Text into a list of String Values using a comma Separator (keeping empty entries)

This example will split the text `"1,2,3,,"` into a list of [String][] values, using the comma separator (i.e. `","`) to determine where to split, and keeping empty entries (i.e. `""`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"1,2,3,,"` | `($)Text` is a variable of type [String][] |
| [Separator][Separator Property] | `($)Separator`, with value `","` | `($)Separator` is a variable of type [String][] |
| [Split Options][SplitOptions Property] | `($)SplitOptions`, with value `StringSplitOptions.None` | `($)SplitOptions` is a variable of type [StringSplitOptions][] |
| [Values][Values Property] | `($)Values`, with no value | `($)Values` is a variable that will be set to an [IList][]&lt;[String][]&gt; |

#### Result

Splitting `"1,2,3,,"` using a comma separator (i.e. `","`) and keeping the last 2 entries which are empty but trimming, results in the variable `($)Values` being updated to the following:

```json
["1", "2", "3", "", ""]
```

***

### Split Text into a list of String Values using a comma Separator (keeping empty entries but trimming entries)

This example will split the text `" 1 , 2,3 ,,"` into a list of [String][] values, using the comma separator (i.e. `","`) to determine where to split, and keeping empty entries (i.e. `""`) but trimming whitespaces (i.e. `" 1 "` would become `"1"`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `" 1 , 2,3 ,,"` | `($)Text` is a variable of type [String][] |
| [Separator][Separator Property] | `($)Separator`, with value `","` | `($)Separator` is a variable of type [String][] |
| [Split Options][SplitOptions Property] | `($)SplitOptions`, with value `StringSplitOptions.TrimEntries` | `($)SplitOptions` is a variable of type [StringSplitOptions][] |
| [Values][Values Property] | `($)Values`, with no value | `($)Values` is a variable that will be set to an [IList][]&lt;[String][]&gt; |

#### Result

Splitting `" 1 , 2,3 ,,"` using a comma separator (i.e. `","`) and keeping the last 2 entries which are  empty (i.e. `""`) but trimming whitespaces (i.e. `" 1 "`), results in the variable `($)Values` being updated to the following:

```json
["1", "2", "3", "", ""]
```

***

### Split Text into a list of String Values using a comma Separator (removing empty entries and trimming entries)

This example will split the text `" 1 , 2,3 ,,"` into a list of [String][] values, using the comma separator (i.e. `","`) to determine where to split, and remove any empty entries (i.e. `""`) and trimming whitespaces (i.e. `" 1 "` would become `"1"`).

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `" 1 , 2,3 ,,"` | `($)Text` is a variable of type [String][] |
| [Separator][Separator Property] | `($)Separator`, with value `","` | `($)Separator` is a variable of type [String][] |
| [Split Options][SplitOptions Property] | `($)SplitOptions`, with value `StringSplitOptions.RemoveEmptyEntries \| StringSplitOptions.TrimEntries` | `($)SplitOptions` is a variable of type [StringSplitOptions][] |
| [Values][Values Property] | `($)Values`, with no value | `($)Values` is a variable that will be set to an [IList][]&lt;[String][]&gt; |

#### Result

Splitting `" 1 , 2,3 ,,"` using a comma separator (i.e. `","`) and removing the last 2 entries which are  empty (i.e. `""`) and trimming whitespaces (i.e. `" 1 "`), results in the variable `($)Values` being updated to the following:

```json
["1", "2", "3"]
```

***

## Properties

### Text

The [Text][Text Property] to split into [Values][Values Property] using the given [Separator][Separator Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Text` with no value |

### Separator

The [Separator][Separator Property] used to determine where to split the [Text][Text Property] into the [Values][Values Property].

[Separator][Separator Property] can contain zero or more characters.

The [Separator][Separator Property] is not included in the resultant [Values][Values Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `,` |

### Split Options

[Split Options][SplitOptions Property] used to specify how to treat empty entries (i.e. `""`).

Currently supported values for the [Split Options][SplitOptions Property] property are:

* StringSplitOptions.None (Default) - empty entries and trailing or leading whitespaces (at the start or end of text) are included in [Values][Values Property].
* StringSplitOptions.RemoveEmptyEntries - empty entries are excluded from [Values][Values Property]; trailing or leading whitespaces (at the start or end of text) are included.
* StringSplitOptions.TrimEntries - trailing or leading whitespaces (at the start or end of text) are excluded from [Values][Values Property]; empty entries are included.

It's also possible to combine `StringSplitOptions` in the [Expression Editor][Expression]. The example below shows how to remove empty entries and trim entries:

```csharp
StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries
```
  
| | |
|--------------------|---------------------------|
| Data Type | [StringSplitOptions][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `None` |

### Values

The resultant [Values][Values Property] containing an entry for each piece of split text in the order they are defined in [Text][Text Property].

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Values` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Split Options][SplitOptions Property] is not one of the specified [StringSplitOptions][] types (e.g. `(StringSplitOptions)10`). |

## Remarks

### Null or empty Text

If [Text][Text Property] is `null` or empty (i.e. `""`), then `null` or empty (i.e. `""`) respectively is added as the only entry to [Values][Values Property].

### Null or empty Separator

If [Separator][Separator Property] is `null` or empty (i.e. `""`), the value of the variable specified for the [Text][Text Property] property is added as the only entry to [Values][Values Property].

### Separator not found

If the [Separator][Separator Property] is not found in [Text][Text Property], the value of the variable specified for the [Text][Text Property] property is added as the only entry to [Values][Values Property].

[Values Property]: {{< ref "#values" >}}
[Separator Property]: {{< ref "#separator" >}}
[SplitOptions Property]: {{< ref "#split-options" >}}
[Text Property]: {{< ref "#text" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}

[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[StringSplitOptions]: {{< url path="Cortex.Reference.DataTypes.Text.StringSplitOptions.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

