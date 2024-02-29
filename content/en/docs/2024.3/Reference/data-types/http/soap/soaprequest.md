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

### SoapMessage

### Uri

### Headers

### HttpVersion

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SoapRequest`.
- The Literal Editor is available for [Input][] properties where the data type is `SoapRequest`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SoapRequest`.

### Known Limitations

None

## See Also

### Related Data Types

- [Request][]
- [Soap11Message][]
- [Soap12Message][]
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