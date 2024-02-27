---
title: "HttpRequestVersion"
linkTitle: "HttpRequestVersion"
description: "Used to represent the version of HTTP to be used when making an HTTP request."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.HttpRequestVersion)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpRequestVersion` data type is used to represent the version of HTTP to be used when making an HTTP request.

`HttpRequestVersion` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Http                                                  |
| **Name:**              | `HttpRequestVersion`                                |
| **Full Name:**         | `Cortex.DataTypes.Http.HttpRequestVersion`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent the version of HTTP to be used when making an HTTP request. |
| **Default Value:**     | `(HttpRequestVersion)0`                             |
| **Can be used as:**    | `HttpRequestVersion`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)HttpRequestVersion.HTTP10` or `(System.Int16)HttpRequestVersion.HTTP10` or `(short)HttpRequestVersion.HTTP10`)  |
|                        | `Int32` (e.g. `(Int32)HttpRequestVersion.HTTP10` or `(System.Int32)HttpRequestVersion.HTTP10` or `(int)HttpRequestVersion.HTTP10`)  |
|                        | `Int64` (e.g. `(Int64)HttpRequestVersion.HTTP10` or `(System.Int64)HttpRequestVersion.HTTP10` or `(long)HttpRequestVersion.HTTP10`)  |
|                        | `Single` (e.g. `(Single)HttpRequestVersion.HTTP10` or `(System.Single)HttpRequestVersion.HTTP10` or `(float)HttpRequestVersion.HTTP10`)  |
|                        | `Double` (e.g. `(Double)HttpRequestVersion.HTTP10` or `(System.Double)HttpRequestVersion.HTTP10` or `(double)HttpRequestVersion.HTTP10`)  |

## Values

### HTTP10

### HTTP11

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpRequestVersion`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpRequestVersion`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpRequestVersion`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
