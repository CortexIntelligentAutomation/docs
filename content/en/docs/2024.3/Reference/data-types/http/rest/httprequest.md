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

The Uri represents the endpoint to send the request to. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

|                 |                                       |
|-----------------|---------------------------------------|
| Data Type       | [EncryptableText][]                   |
| Is [Advanced][] | `false`                               |
| Default Editor  | [EncryptableText][]                   |
| Default Value   | [EncryptableText][] with value `@$""` |

### QueryParameters

The QueryParameters represents the parameters to use in the request.

|                 |                                             |
|-----------------|---------------------------------------------|
| Data Type       | [IDictionary<String, Dynamic>][IDictionary] |
| Is [Advanced][] | `true`                                      |
| Default Editor  | [Expression][]                              |
| Default Value   | `@$""`                                      |

### Verb

The RequestVerb represents the type of HTTP operation to use in the request.

|                 |                 |
|-----------------|-----------------|
| Data Type       | [RequestVerb][] |
| Is [Advanced][] | `false`         |
| Default Editor  | [Literal][]     |
| Default Value   | `@$""`          |

### ContentType

The ContentType represents the type of the content used in the request.

|                 |                    |
|-----------------|--------------------|
| Data Type       | [string][]         |
| Is [Advanced][] | `false`            |
| Default Editor  | [Literal][]        |
| Default Value   | `application/json` |

### Headers

The Headers represents the HTTP headers to include with the request.

|                 |                                             |
|-----------------|---------------------------------------------|
| Data Type       | [IDictionary<String, Dynamic>][IDictionary] |
| Is [Advanced][] | `false`                                     |
| Default Editor  | [Literal][]                                 |
| Default Value   | N/A                                         |

### Body

The data to include in the body to be used (not relevant in GET and HEAD requests). The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

|                 |                     |
|-----------------|---------------------|
| Data Type       | [EncryptableText][] |
| Is [Advanced][] | `false`             |
| Default Editor  | [Literal][]         |
| Default Value   | `@$""`              |

### HttpVersion

The HttpVersion represents the version of HTTP to use in the request.
  
|                 |                        |
|-----------------|------------------------|
| Data Type       | [HttpRequestVersion][] |
| Is [Advanced][] | `true`                 |
| Default Editor  | [Literal][]            |
| Default Value   | `HTTP10`               |

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

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}

[RequestVerb]: {{< url path = "Cortex.Reference.DataTypes.Http.RequestVerb.MainDoc" >}}
[HttpRequestVersion]: {{< url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.MainDoc" >}}
