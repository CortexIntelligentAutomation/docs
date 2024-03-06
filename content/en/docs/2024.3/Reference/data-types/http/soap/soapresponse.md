---
title: "SoapResponse"
linkTitle: "SoapResponse"
description: "Used to represent a SOAP response."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Soap.SoapResponse)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `SoapResponse` data type is used to represent a SOAP response.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `SoapResponse`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Soap.SoapResponse`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent a SOAP response. |
| **Default Value:**     | `null`                                                     |
| **Can be used as:**    | `SoapResponse`, `Object`, `dynamic`              |
| **Can be cast to:**    | N/A                                                      |

## Properties

### ResponseEnvelope

The ResponseEnvelope is used to represent the content of the SOAP response.
  
| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `@$""` |

### ErrorMessage

The ErrorMessage is used represent any errors that occurred when executing the SOAP request.
  
| | |
|--------------------|---------------------------|
| Data Type | [string][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `@$""` |

### Headers

The Headers are used to represent the HTTP headers returned in the SOAP response.

| | |
|--------------------|---------------------------|
| Data Type | [IDictionary<String, Object>][IDictionary] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value |  |

### StatusCode

The StatusCode is the status returned in the SOAP response.
  
| | |
|--------------------|---------------------------|
| Data Type | [HttpStatusCode][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `OK` |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SoapResponse`.
- The Literal Editor is available for [Input][] properties where the data type is `SoapResponse`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SoapResponse`.

### Known Limitations

None

## See Also

### Related Data Types

- [dynamic][]
- [IDictionary<String, Object>][IDictionary]
- [HttpStatusCode][]
- [string][]
- [SoapRequest][]

### Related Concepts

None

### External Documentation

- [System.Net.HttpStatusCode][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[SoapRequest]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapRequest.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[System.Net.HttpStatusCode]: {{< url path="MSDocs.DotNet.Api.System.Net.HttpStatusCode" >}}
[HttpStatusCode]: {{< url path = "Cortex.Reference.DataTypes.Http.HttpStatusCode.MainDoc" >}}
