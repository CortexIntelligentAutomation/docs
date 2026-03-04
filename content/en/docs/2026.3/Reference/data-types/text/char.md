---
title: "Char"
linkTitle: "Char"
description: "Used to represent unicode characters."
weight: 1
---

# {{% param title %}}

<p class="namespace">(System.Char)</p>

## Summary

The `Char` data type is used to represent unicode characters.

The [String][] data type represents text as a sequence of `Char` values.

| | |
|-|-|
| **Category:**          | Text                                                          |
| **Name:**              | `Char`                                                        |
| **Full Name:**         | `System.Char`                                                 |
| **Alias:**             | `char`                                                        |
| **Description:**       | A unicode character, surrounded by single quotes (e.g. `'a'` or `'!'`) |
| **Size:**              | `2` bytes                                                     |
| **Default Value:**     | `'\0'` or `'U0000'`                                           |
| **Can be used as:**    | `Int32`, `Int64`, `Single`, `Double`, `Object`, `dynamic`                                           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)'a'` or `(System.Int16)'a'` or `(short)'a'`)  |

## Remarks

### Create a Char

The following table shows some of the ways that a `Char` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a character literal            | `'a'`       | `'a'` | Expression | |
| Declare a Unicode escape sequence      | `'\u0061'`  | `'a'` | Expression | |
| Declare a hexadecimal escape sequence  | `'\x0061'` or  `'\x061'` or `'\x61'`| `'a'` | Expression | |
| Cast an `Int32` value                  | `(Char)97`  | `'a'` | Expression | |

### Property Editor Support

Currently no [Input][], [InputOutput][] or [Output][] properties require the `Char` data type.

### Known Limitations

None

## See Also

### Related Data Types

* [String][]

### Related Concepts

* [Working with Text][]

### External Documentation

* [System.Char][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[System.Char]: {{< url path="MSDocs.DotNet.Api.System.Char.MainDoc" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
