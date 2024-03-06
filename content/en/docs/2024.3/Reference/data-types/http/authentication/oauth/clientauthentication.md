---
title: "ClientAuthentication"
linkTitle: "ClientAuthentication"
description: "Used to represent the `ClientId` and `ClientSecret` required for OAuth authentication mechanisms that use Client Secrets."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.ClientAuthentication)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `ClientAuthentication` data type is used to represent the `ClientId` and `ClientSecret` required for OAuth authentication mechanisms that use Client Secrets.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `ClientAuthentication`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Authentication.OAuth.ClientAuthentication`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent the `ClientId` and `ClientSecret` required for OAuth authentication mechanisms that use Client Secrets. |
| **Default Value:**     | `null`                                                     |
| **Can be used as:**    | `ClientAuthentication`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                      |

## Properties

### ClientId

The ClientId is used to define the client ID of the client application created to allow authentication via OAuth. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].
| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

### ClientSecret

The ClientSecret is used to define the secret used to authenticate with the client application, this value should be kept secret. This property is an [EncryptedText][] and so it must be encrypted; for more information on how to encrypt the password, see [EncryptedText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptedText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptedText][] with value `""` |

### SendAs

The SendAs is used to specify whether the credentials are included as part of the body or the header.

| | |
|--------------------|---------------------------|
| Data Type | [ClientAuthType][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | [EncryptedText][] with value `""` |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ClientAuthentication`.
- The Literal Editor is available for [Input][] properties where the data type is `ClientAuthentication`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ClientAuthentication`.

### Known Limitations

None

## See Also

### Related Data Types

- [ClientAuthType][]
- [EncryptedText][]
- [EncryptableText][]
- [HttpOAuthClientCredentials][]
- [HttpOAuthPasswordCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[HttpOAuthClientCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc" >}}
[HttpOAuthPasswordCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[ClientAuthType]: {{< url path = "Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthType.MainDoc" >}}
