---
title: "SoapMessage"
linkTitle: "SoapMessage"
description: "Any data type that is used to represent a SOAP message."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Soap.SoapMessage)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

Any data type that is used to represent a SOAP message.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `SoapMessage`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Soap.SoapMessage`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Any data type that is used to represent a SOAP message. |
| **Default Value:**     | `null`                                                     |
| **Can be used as:**    | `SoapMessage`, `Object`, `dynamic`              |
| **Can be cast to:**    | N/A                                                      |

## Properties

### Envelope

The SOAP envelope to use for this request. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | N/A |

### Version

The SOAP Version to use for this request.

| | |
|--------------------|---------------------------|
| Data Type | [int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | N/A |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SoapMessage`.
- The Literal Editor is available for [Input][] properties where the data type is `SoapMessage`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SoapMessage`.

### Known Limitations

None

## See Also

### Related Data Types

- [Soap11Message][]
- [Soap12Message][]
- [SoapRequest][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Soap12Message]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.Soap12Message.MainDoc" >}}
[Soap11Message]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.Soap11Message.MainDoc" >}}
[SoapRequest]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapRequest.MainDoc" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
