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

The ResponseEnvelope is used to encapsulate all data in the [Headers][].
  
| | |
|--------------------|---------------------------|
| Data Type | [Dynamic][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `@$""` |

### ErrorMessage

The ErrorMessage is used represent any errors.
  
| | |
|--------------------|---------------------------|
| Data Type | [string][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `@$""` |

### Headers

The Headers are a dictionary of the response headers being returned.
  
| | |
|--------------------|---------------------------|
| Data Type | [Dictionary<String, Object>][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `` |

### StatusCode

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SoapResponse`.
- The Literal Editor is available for [Input][] properties where the data type is `SoapResponse`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SoapResponse`.

### Known Limitations

None

## See Also

### Related Data Types

- [SoapRequest][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[SoapRequest]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapRequest.MainDoc" >}}
