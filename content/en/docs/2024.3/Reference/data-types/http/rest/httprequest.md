---
title: "HttpRequest"
linkTitle: "HttpRequest"
description: "Used to represent an HTTP REST request."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Rest.HttpRequest)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpRequest` data type is used to represent an HTTP REST request.

|                     |                                               |
|---------------------|-----------------------------------------------|
| **Category:**       | Http                                          |
| **Name:**           | `HttpRequest`                                 |
| **Full Name:**      | `Cortex.DataTypes.Http.Rest.HttpRequest`      |
| **Alias:**          | N/A                                           |
| **Description:**    | Used to represent an HTTP REST request.       |
| **Default Value:**  | `null`                                        |
| **Can be used as:** | `HttpRequest`, `Request`, `Object`, `dynamic` |
| **Can be cast to:** | N/A                                           |

## Properties

### Uri

The URI endpoint to use for this request.

|                 |             |
|-----------------|-------------|
| Data Type       | [string][]  |
| Is [Advanced][] | `false`     |
| Default Editor  | [Literal][] |
| Default Value   | `@$""`      |

### QueryParameters

The URI endpoint to use for this request.

|                 |                                 |
|-----------------|---------------------------------|
| Data Type       | [IDictionary<String, Dynamic>][] |
| Is [Advanced][] | `true`                          |
| Default Editor  | [Expression][]                     |
| Default Value   | `@$""`                          |

### Verb

The RequestVerb to use for this request.

|                 |                 |
|-----------------|-----------------|
| Data Type       | [RequestVerb][] |
| Is [Advanced][] | `false`         |
| Default Editor  | [Literal][]     |
| Default Value   | `@$""`          |

### ContentType

The ContentType to use for this request.

|                 |                 |
|-----------------|-----------------|
| Data Type       | [string][] |
| Is [Advanced][] | `false`         |
| Default Editor  | [Literal][]     |
| Default Value   | `application/json`          |

### Headers

The Headers to include with this request.

|                 |                 |
|-----------------|-----------------|
| Data Type       | [IDictionary<String, Dynamic>][] |
| Is [Advanced][] | `false`         |
| Default Editor  | [Literal][]     |
| Default Value   | N/A          |

### Body

The data to include in the body to be used in non GET and HEAD requests. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].


|                 |                 |
|-----------------|-----------------|
| Data Type       | [EncryptableText][] |
| Is [Advanced][] | `false`         |
| Default Editor  | [Literal][]     |
| Default Value   | `@$""`          |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpRequest`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpRequest`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpRequest`.

### Known Limitations

None

## See Also

### Related Data Types

- [HttpResponse][]
- [Request][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Request]: {{< url path = "Cortex.Reference.DataTypes.Http.Request.MainDoc" >}}
[HttpResponse]: {{< url path = "Cortex.Reference.DataTypes.Http.Rest.HttpResponse.MainDoc" >}}
