---
title: "Soap11Message"
linkTitle: "Soap11Message"
description: "Used to represent a SOAP 1.1 message."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Soap.Soap11Message)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `Soap11Message` data type is used to represent a SOAP 1.1 message.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `Soap11Message`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Soap.Soap11Message`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent a SOAP 1.1 message. |
| **Default Value:**     | `null`                                                     |
| **Can be used as:**    | `Soap11Message`, `SoapMessage`, `Object`, `dynamic`              |
| **Can be cast to:**    | N/A                                                      |

## Properties

### Action

The Action represents the SOAP action to use in the SOAP request.
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `""` |

### Envelope

The Envelope represents the content of the SOAP message. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@""` |

### Version

The Version represents the SOAP version of the SOAP message.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | N/A see [Version is read-only][]|
| Default Editor | N/A see [Version is read-only][]|
| Default Value | [Int32] with value `11` |

## Remarks

### Version is read-only

[Version][Version Property] is a read-only property set to `11` and as such will not be visible in the property editor.

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Soap11Message`.
- The Literal Editor is available for [Input][] properties where the data type is `Soap11Message`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Soap11Message`.

### Known Limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [Int32]
- [Soap12Message][]
- [SoapMessage][]
- [SoapRequest][]
- [String][]

### Related Concepts

None

### External Documentation

None

[Version Property]: {{< ref "#version" >}}
[Version is Read-only]: {{< ref "#version-is-read-only" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Soap12Message]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.Soap12Message.MainDoc" >}}
[SoapMessage]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapMessage.MainDoc" >}}

[SoapRequest]: {{< url path = "Cortex.Reference.DataTypes.Http.Soap.SoapRequest.MainDoc" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
