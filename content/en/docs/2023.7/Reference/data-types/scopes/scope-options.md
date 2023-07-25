---
title: "ScopeOptions"
linkTitle: "ScopeOptions"
description: "Used to restrict scope."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Scopes.ScopeOptions)</p>

## Summary

The `ScopeOptions` data type is used to represent formats to restrict scope.

`ScopeOptions` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Text                                                  |
| **Name:**              | `ScopeOptions`                                |
| **Full Name:**         | `Cortex.DataTypes.Scopes.ScopeOptions`         |
| **Alias:**             | N/A                                                 |
| **Description:**       | The encoding format used while encoding/decoding text. |
| **Default Value:**     | `(ScopeOptions)0`                             |
| **Can be used as:**    | `ScopeOptions`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)ScopeOptions.Current` or `(System.Int16)ScopeOptions.Current` or `(short)ScopeOptions.Current`)  |
|                        | `Int32` (e.g. `(Int32)ScopeOptions.Current` or `(System.Int32)ScopeOptions.Current` or `(int)ScopeOptions.Current`)  |
|                        | `Int64` (e.g. `(Int64)ScopeOptions.Current` or `(System.Int64)ScopeOptions.Current` or `(long)ScopeOptions.Current`)  |
|                        | `Single` (e.g. `(Single)ScopeOptions.Current` or `(System.Single)ScopeOptions.Current` or `(float)ScopeOptions.Current`)  |
|                        | `Double` (e.g. `(Double)ScopeOptions.Current` or `(System.Double)ScopeOptions.Current` or `(double)ScopeOptions.Current`)  |

## Values

### Current

| | |
|-|-|
| **Name:**    | Current                                         |
| **Value:**   | [Int32][] with value `0`                       |
| **Notes:**   | Restricts scope to the current value |

## Remarks

### Creating a ScopeOptions

The following table shows some of the ways that `TextEncodingFormat` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `ScopeOptions` literal | `Current` | `ScopeOptions.Current`| Literal | Used to restrict scope to the current value. |
| Use a `ScopeOptions` expression    | `ScopeOptions.Current` | `ScopeOptions.Current` | Expression | Used to restrict scope to the current value. |
| Use [Explicit Casting][]  | `(ScopeOptions)0` | `ScopeOptions.Current` | Expression | Used to restrict scope to the current value. |
| Use `Enum.Parse`  | `(ScopeOptions)Enum.Parse(typeof(ScopeOptions), "Current")` | `ScopeOptions.Current` | Expression | Parses `"Current"` and converts it to `ScopeOptions.Current`. See [Enum.Parse][] |
| Use `Enum.ToObject`   | `(ScopeOptions)Enum.ToObject(typeof(ScopeOptions), 0)` | `ScopeOptions.Current`| Expression | Converts `0` to `ScopeOptions.Current` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert TextEncodingFormat to Text

The following table shows some of the ways that a `TextEncodingFormat` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`    | `ScopeOptions.Current.ToString()` | `"Current"` | Expression | Converts `ScopeOptions.Current` to `"Current"`. See [Enum.ToString][] |
| Use `Convert.ToString`    | `Convert.ToString(ScopeOptions.Current)` | `"Current"` | Expression | Converts `ScopeOptions.Current` to `"Current"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has a value of `ScopeOptions.Current` | `"Current"` | N/A  | Converts `ScopeOptions.Current` to `"Current"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `ScopeOptions.Current` | `"0"` | N/A  | Converts `ScopeOptions.Current` to `"0"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert ScopeOptions to a Number

The following table shows some of the ways that a `ScopeOptions` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]  | `(Int32)ScopeOptions.Current`   | `0` | Expression | [Casts][Explicit Casting] `ScopeOptions.Current` to `0` |
| Use `Convert.ToInt32`     | `Convert.ToInt32(ScopeOptions.Current)`   | `0` | Expression | Converts `ScopeOptions.Current.Base64` to `0`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ScopeOptions`.
- The Literal Editor is available for [Input][] properties where the data type is `ScopeOptions`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ScopeOptions`.

### Known Limitations

None

## See Also

### Related Data Types

None

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working with Text][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
