---
title: "HttpResponse"
linkTitle: "HttpResponse"
description: "Used to represent an HTTP REST response."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Rest.HttpResponse)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpResponse` data type is used to represent an HTTP REST response.

|                     |                                           |
|---------------------|-------------------------------------------|
| **Category:**       | Http                                      |
| **Name:**           | `HttpResponse`                            |
| **Full Name:**      | `Cortex.DataTypes.Http.Rest.HttpResponse` |
| **Alias:**          | N/A                                       |
| **Description:**    | Used to represent an HTTP REST response.  |
| **Default Value:**  | `null`                                    |
| **Can be used as:** | `HttpResponse`, `Object`, `dynamic`       |
| **Can be cast to:** | N/A                                       |

## Properties

### ResponseBody

The ResponseBody represents the body of the REST response.

|                 |                            |
|-----------------|----------------------------|
| Data Type       | [dynamic][]                |
| Is [Advanced][] | `false`                    |
| Default Editor  | [Expression][]             |
| Default Value   | [String] with value `@$""` |

### ErrorMessage

The ErrorMessage is used represent any errors that occurred when executing the REST request.

|                 |                            |
|-----------------|----------------------------|
| Data Type       | [String][]                 |
| Is [Advanced][] | `false`                    |
| Default Editor  | [Expression][]             |
| Default Value   | [String] with value `@$""` |

### Headers

The Headers are used to represent the HTTP headers returned in the REST response.

|                 |                                                         |
|-----------------|---------------------------------------------------------|
| Data Type       | [Dictionary<String, dynamic>][Dictionary]               |
| Is [Advanced][] | `false`                                                 |
| Default Editor  | [Expression][]                                          |
| Default Value   | [Dictionary<String, dynamic>][Dictionary] with no value |

### StatusCode

The StatusCode is the status returned in the REST response.

|                 |                    |
|-----------------|--------------------|
| Data Type       | [HttpStatusCode][] |
| Is [Advanced][] | `false`            |
| Default Editor  | [Literal][]        |
| Default Value   | `OK`               |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpResponse`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpResponse`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpResponse`.

### Known Limitations

None

## See Also

### Related Data Types

- [Dictionary<String, dynamic>][Dictionary]
- [dynamic][]
- [HttpRequest][]
- [HttpStatusCode][]
- [String][]

### Related Concepts

None

### External Documentation

- [System.Net.HttpStatusCode][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[HttpRequest]: {{< url path = "Cortex.Reference.DataTypes.Http.Rest.HttpRequest.MainDoc" >}}

[HttpStatusCode]: {{< url path = "Cortex.Reference.DataTypes.Http.HttpStatusCode.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[System.Net.HttpStatusCode]: {{< url path="MSDocs.DotNet.Api.System.Net.HttpStatusCode" >}}
