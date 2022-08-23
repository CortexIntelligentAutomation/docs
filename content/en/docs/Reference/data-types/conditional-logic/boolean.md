---
title: "Boolean"
linkTitle: "Boolean"
description: "Used to represent a logical value of `true` or `false`."
---

# {{< param title >}}

<p class="namespace">(System.Boolean)</p>

## Summary

The `Boolean` data type is used to represent a logical value of `true` or `false`.

| | |
|-|-|
| **Category:**          | Conditional Logic                                             |
| **Name:**              | `Boolean`                                                     |
| **Full Name:**         | `System.Boolean`                                              |
| **Alias:**             | `bool`                                                        |
| **Description:**       | A logical value of `true` or `false`.                         |
| **Size:**              | `1` bit                                                       |
| **Default Value:**     | `false`                                                       |
| **Can be used as:**    | `Nullable<Boolean>`, `Object`, `dynamic`                      |
| **Can be cast to:**    | N/A                                                           |

## Remarks

### Create a Boolean

The following table shows some of the ways that a `Boolean` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `Boolean` literal  | `true`                 | `true`           | Literal, Expression | True |
|                              | `false`                | `false`          | Literal, Expression | False |
| Use a `Boolean` expression   | `1 == 1`               | `true`           | Expression | Uses equals operator |
|                              | `1 != 1`               | `false`          | Expression | Uses not equals operator |
|                              | `1 > 0`                | `true`           | Expression | Uses greater than operator |
|                              | `1 < 0`                | `false`          | Expression | Uses less than operator |
|                              | `1 >= 0`               | `true`           | Expression | Uses greater than or equals operator |
|                              | `1 <= 0`               | `false`          | Expression | Uses less than or equals operator |
|                              | `true && false`        | `false`          | Expression | Uses logical AND operator |
|                              | `true \|\| false`      | `true`           | Expression | Uses logical OR operator |
|                              | `!(true \|\| false)`   | `false`          | Expression | Uses logical NOT operator |
|                              | `Boolean.Parse("true")`| `true`           | Expression | Attempts to parse text and convert it to a `Boolean` value. See [Boolean.Parse][] |
|                              | `Convert.ToBoolean("true")` | `true`      | Expression | Attempts to convert text to a `Boolean` value. See [Convert.ToBoolean][] |

### Convert Boolean to Text

The following table shows some of the ways that a `Boolean` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`                        | `true.ToString()`                         | `"True"` | Expression | See [Boolean.ToString][] |
|                                       | `($)BooleanVariable.ToString()` where `($)BooleanVariable` has a value of `true`          | `"True"` | Expression |  See [Boolean.ToString][] |
| Use `Convert.ToString`                | `Convert.ToString(true)`                  | `"True"` | Expression | See [Convert.ToString][] |
|                                       | `Convert.ToString(($)BooleanVariable)` where `($)BooleanVariable` has a value of `true`          | `"True"` | Expression | See [Convert.ToString][] |
| Use `Convert Object To Text` block    | where `Object` property has a value of `true`                | `"True"` | N/A | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `true`                | `"true"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Boolean`.
* The Literal Editor is available for [Input][] properties where the data type is `Boolean`.
  * Expression syntax is not supported within the Literal Editor for the `Boolean` data type.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Boolean`.

### Known Limitations

None

## See Also

### Related Data Types

None

### Related Concepts

None

### External Documentation

* [System.Boolean][]

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert.ToBoolean]: {{< url "MSDocs.DotNet.Api.System.Convert.ToBoolean" >}}
[Convert.ToString]: {{< url "MSDocs.DotNet.Api.System.Convert.ToString" >}}

[System.Boolean]: {{< url "MSDocs.DotNet.Api.System.Boolean.MainDoc" >}}
[Boolean.Parse]: {{< url "MSDocs.DotNet.Api.System.Boolean.Parse" >}}
[Boolean.ToString]: {{< url "MSDocs.DotNet.Api.System.Boolean.ToString" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
