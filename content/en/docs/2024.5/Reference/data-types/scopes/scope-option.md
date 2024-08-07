---
title: "ScopeOption"
linkTitle: "ScopeOption"
description: "Used to represent how each level of Scope is defined."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Scopes.ScopeOption)</p>

## Summary

The `ScopeOption` data type is used to represent how each level of [ScopeDefinition] is defined.

`ScopeOption` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Scopes                                                  |
| **Name:**              | `ScopeOption`                                |
| **Full Name:**         | `Cortex.DataTypes.Scopes.ScopeOption`         |
| **Alias:**             | N/A|
| **Description:**       | The data type used to represent how each level of [ScopeDefinition] is defined. |
| **Default Value:**     | `(ScopeOption)0`                             |
| **Can be used as:**    | `ScopeOption`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)ScopeOption.Current` or `(System.Int16)ScopeOption.Current` or `(short)ScopeOption.Current`)  |
|                        | `Int32` (e.g. `(Int32)ScopeOption.Current` or `(System.Int32)ScopeOption.Current` or `(int)ScopeOption.Current`)  |
|                        | `Int64` (e.g. `(Int64)ScopeOption.Current` or `(System.Int64)ScopeOption.Current` or `(long)ScopeOption.Current`)  |
|                        | `Single` (e.g. `(Single)ScopeOption.Current` or `(System.Single)ScopeOption.Current` or `(float)ScopeOption.Current`)  |
|                        | `Double` (e.g. `(Double)ScopeOption.Current` or `(System.Double)ScopeOption.Current` or `(double)ScopeOption.Current`)  |

## Values

### All

| | |
|-|-|
| **Name:**    | All                              |
| **Value:**   | [Int32][] with value `0`             |
| **Notes:**   | Restricts a level within [ScopeDefinition] to a unique "All" value. |

### Current

| | |
|-|-|
| **Name:**    | Current                              |
| **Value:**   | [Int32][] with value `1`             |
| **Notes:**   | Restricts a level within [ScopeDefinition] to its current value (e.g. the current Tenant). |

## Remarks

### Create a ScopeOption

The following table shows some of the ways that `ScopeOption` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `ScopeOption` literal | `Current` | `ScopeOption.Current`| Literal | Restricts a level within [ScopeDefinition] to its current value (e.g. the current Tenant). |
| Use a `ScopeOption` expression    | `ScopeOption.Current` | `ScopeOption.Current` | Expression | Restricts a level within [ScopeDefinition] to its current value (e.g. the current Tenant). |
| Use [Explicit Casting][]  | `(ScopeOption)1` | `ScopeOption.Current` | Expression | Restricts a level within [ScopeDefinition] to its current value (e.g. the current Tenant). |
| Use `Enum.Parse`  | `(ScopeOption)Enum.Parse(typeof(ScopeOption), "Current")` | `ScopeOption.Current` | Expression | Parses `"Current"` and converts it to `ScopeOption.Current`. See [Enum.Parse][] |
| Use `Enum.ToObject`   | `(ScopeOption)Enum.ToObject(typeof(ScopeOption), 1)` | `ScopeOption.Current`| Expression | Converts `1` to `ScopeOption.Current` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert ScopeOption to Text

The following table shows some of the ways that a `ScopeOption` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`    | `ScopeOption.Current.ToString()` | `"Current"` | Expression | Converts `ScopeOption.Current` to `"Current"`. See [Enum.ToString][] |
| Use `Convert.ToString`    | `Convert.ToString(ScopeOption.Current)` | `"Current"` | Expression | Converts `ScopeOption.Current` to `"Current"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has a value of `ScopeOption.Current` | `"Current"` | N/A  | Converts `ScopeOption.Current` to `"Current"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `ScopeOption.Current` | `"1"` | N/A  | Converts `ScopeOption.Current` to `"1"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert ScopeOption to a Number

The following table shows some of the ways that a `ScopeOption` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]  | `(Int32)ScopeOption.Current`   | `1` | Expression | [Casts][Explicit Casting] `ScopeOption.Current` to `1` |
| Use `Convert.ToInt32`     | `Convert.ToInt32(ScopeOption.Current)`   | `1` | Expression | Converts `ScopeOption.Current` to `1`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ScopeOption`.
- The Literal Editor is available for [Input][] properties where the data type is `ScopeOption`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ScopeOption`.

### Known Limitations

None

## See Also

### Related Data Types

- [ScopeDefinition][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working with Scopes][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Working with Scopes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.MainDoc">}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[ScopeDefinition]: {{< url path = "Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc">}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
