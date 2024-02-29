---
title: "SoapRequest"
linkTitle: "SoapRequest"
description: "Used to represent a SOAP request."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Soap.SoapRequest)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `SoapRequest` data type is used to represent a SOAP request.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `SoapRequest`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Soap.SoapRequest`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent a SOAP request. |
| **Default Value:**     | `null`                                                     |
| **Can be used as:**    | `SoapRequest`, `Request`, `Object`, `dynamic`              |
| **Can be cast to:**    | N/A                                                      |

## Properties

### Uri

The Uri endpoint to use for this request.
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary<String, Object>][IDictionary] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `$@""` |

### SoapMessage

The SoapMessage to use in the request.
  
| | |
|--------------------|---------------------------|
| Data Type | [SoapMessage][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | N/A |

### Headers

The Headers to add to this request.
  
| | |
|--------------------|---------------------------|
| Data Type | [IDictionary<String, Object>][IDictionary] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | `` |

### HttpVersion

The HttpVersion to use in this request.
  
| | |
|--------------------|---------------------------|
| Data Type | [HttpRequestVersion][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `HTTP10` |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SoapRequest`.
- The Literal Editor is available for [Input][] properties where the data type is `SoapRequest`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SoapRequest`.

### Known Limitations

None

## See Also

### Related Data Types

- [IDictionary<String, Object>][IDictionary]
- [Request][]
- [Soap11Message][]
- [Soap12Message][]
- [SoapMessage][]
- [SoapResponse][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Soap11Message]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.Soap11Message.MainDoc" >}}
[Soap12Message]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.Soap12Message.MainDoc" >}}
[Request]: {{< url path = "Cortex.Reference.DataTypes.Http.Request.MainDoc" >}}
[SoapResponse]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapResponse.MainDoc" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[SoapMessage]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapMessage.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[HttpRequestVersion]: {{< url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.MainDoc" >}}
