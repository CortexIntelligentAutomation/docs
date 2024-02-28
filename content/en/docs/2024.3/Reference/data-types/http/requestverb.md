---
title: "RequestVerb"
linkTitle: "RequestVerb"
description: "Used to represent the type of an HTTP request."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.RequestVerb)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `RequestVerb` data type is used to represent the the type of an HTTP request.

`RequestVerb` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Http                                                  |
| **Name:**              | `RequestVerb`                                |
| **Full Name:**         | `Cortex.DataTypes.Http.RequestVerb`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent the type of an HTTP request. |
| **Default Value:**     | `(RequestVerb)0`                             |
| **Can be used as:**    | `RequestVerb`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)RequestVerb.GET` or `(System.Int16)RequestVerb.GET` or `(short)RequestVerb.GET`)  |
|                        | `Int32` (e.g. `(Int32)RequestVerb.GET` or `(System.Int32)RequestVerb.GET` or `(int)RequestVerb.GET`)  |
|                        | `Int64` (e.g. `(Int64)RequestVerb.GET` or `(System.Int64)RequestVerb.GET` or `(long)RequestVerb.GET`)  |
|                        | `Single` (e.g. `(Single)RequestVerb.GET` or `(System.Single)RequestVerb.GET` or `(float)RequestVerb.GET`)  |
|                        | `Double` (e.g. `(Double)RequestVerb.GET` or `(System.Double)RequestVerb.GET` or `(double)RequestVerb.GET`)  |

## Values

### GET

### POST

### PUT

### DELETE

### PATCH

### HEAD

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `RequestVerb`.
- The Literal Editor is available for [Input][] properties where the data type is `RequestVerb`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `RequestVerb`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]
- [Request][]
- [HttpRequest][]
- [SoapRequest][]

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

[Request]: {{< url path = "Cortex.Reference.DataTypes.Http.Request.MainDoc" >}}
[HttpRequest]: {{< url path = "Cortex.Reference.DataTypes.Http.Rest.HttpRequest.MainDoc" >}}
[SoapRequest]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapRequest.MainDoc" >}}