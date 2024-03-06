---
title: "HttpOAuthPasswordCredentials"
linkTitle: "HttpOAuthPasswordCredentials"
description: "Used to represent details required for the OAuth Resource Owner Password Credentials authentication mechanism."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpOAuthPasswordCredentials` data type is used to represent details required for the OAuth Resource Owner Password Credentials authentication mechanism.

|                     |                                                                                                                |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| **Category:**       | Http                                                                                                           |
| **Name:**           | `HttpOAuthPasswordCredentials`                                                                                 |
| **Full Name:**      | `Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials`                                      |
| **Alias:**          | N/A                                                                                                            |
| **Description:**    | Used to represent details required for the OAuth Resource Owner Password Credentials authentication mechanism. |
| **Default Value:**  | `null`                                                                                                         |
| **Can be used as:** | `HttpOAuthPasswordCredentials`, `HttpCredentials`, `IHttpCredentials`, `Object`, `dynamic`                     |
| **Can be cast to:** | N/A                                                                                                            |

## Properties

### AccessTokenUri

The AccessTokenUri provides the URI used to get the access token. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

|                 |                     |
|-----------------|---------------------|
| Data Type       | [EncryptableText][] |
| Is [Advanced][] | `false`             |
| Default Editor  | [Expression][]      |
| Default Value   | `@$""`              |

### ClientAuthentication

The ClientAuthentication that represents the clientId, ClientSecret and SendAs.

|                 |                          |
|-----------------|--------------------------|
| Data Type       | [ClientAuthentication][] |
| Is [Advanced][] | `true`                   |
| Default Editor  | [Expression][]           |
| Default Value   | ``                       |

### Scope

The scope of what permissions the access token can reach.

|                 |             |
|-----------------|-------------|
| Data Type       | [String][]  |
| Is [Advanced][] | `false`     |
| Default Editor  | [Literal][] |
| Default Value   | `""`        |

### ResourceOwnerUsername

The ResourceOwnerUsername is the username used to get the access token. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

|                 |                     |
|-----------------|---------------------|
| Data Type       | [EncryptableText][] |
| Is [Advanced][] | `false`             |
| Default Editor  | [Expression][]      |
| Default Value   | `""`                |

### ResourceOwnerPassword

The ResourceOwnerPassword is the password associated with the [ResourceOwnerUsername][]. This property is an [EncryptedText][] and so it must be encrypted; for more information on how to encrypt the password, see [EncryptedText][].

|                 |                   |
|-----------------|-------------------|
| Data Type       | [EncryptedText][] |
| Is [Advanced][] | `false`           |
| Default Editor  | [Expression][]    |
| Default Value   | `""`              |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpOAuthPasswordCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpOAuthPasswordCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpOAuthPasswordCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [HttpCredentials][]
- [HttpOAuthClientCredentials][]
- [HttpOAuthCredentials][]
- [IHttpCredentials][]

### Related Concepts

None

### External Documentation

None

[ResourceOwnerUsername]: {{< ref "#resourceownerusername">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[IHttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.IHttpCredentials.MainDoc" >}}
[HttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.HttpCredentials.MainDoc" >}}
[HttpOAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthCredentials.MainDoc" >}}
[HttpOAuthClientCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[ClientAuthentication]: {{< url path = "Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
