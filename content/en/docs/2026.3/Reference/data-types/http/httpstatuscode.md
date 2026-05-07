---
title: "HttpStatusCode"
linkTitle: "HttpStatusCode"
description: "Used to represent the status code returned by an HTTP request."
weight: 1
---

# {{% param title %}}

<p class="namespace">(System.Net.HttpStatusCode)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpStatusCode` data type is used to represent the status code returned by an HTTP request.

`HttpStatusCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

|                     |                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Category:**       | Http                                                                                                                               |
| **Name:**           | `HttpStatusCode`                                                                                                                   |
| **Full Name:**      | `System.Net.HttpStatusCode`                                                                                                        |
| **Alias:**          | N/A                                                                                                                                |
| **Description:**    | Used to represent the status code returned by an HTTP request.                                                                     |
| **Default Value:**  | `(HttpStatusCode)0`                                                                                                                |
| **Can be used as:** | `HttpStatusCode`, `Object`, `dynamic`                                                                                              |
| **Can be cast to:** | `Int16` (e.g. `(Int16)HttpStatusCode.Continue` or `(System.Int16)HttpStatusCode.Continue` or `(short)HttpStatusCode.Continue`)     |
|                     | `Int32` (e.g. `(Int32)HttpStatusCode.Continue` or `(System.Int32)HttpStatusCode.Continue` or `(int)HttpStatusCode.Continue`)       |
|                     | `Int64` (e.g. `(Int64)HttpStatusCode.Continue` or `(System.Int64)HttpStatusCode.Continue` or `(long)HttpStatusCode.Continue`)      |
|                     | `Single` (e.g. `(Single)HttpStatusCode.Continue` or `(System.Single)HttpStatusCode.Continue` or `(float)HttpStatusCode.Continue`)  |
|                     | `Double` (e.g. `(Double)HttpStatusCode.Continue` or `(System.Double)HttpStatusCode.Continue` or `(double)HttpStatusCode.Continue`) |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpStatusCode`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpStatusCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpStatusCode`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]
- [HttpResponse][]
- [SoapResponse][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]
- [System.Net.HttpStatusCode][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[HttpResponse]: {{< url path = "Cortex.Reference.DataTypes.Http.Rest.HttpResponse.MainDoc" >}}
[SoapResponse]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapResponse.MainDoc" >}}
[System.Net.HttpStatusCode]: {{< url path="MSDocs.DotNet.Api.System.Net.HttpStatusCode" >}}
