---
title: "HttpOAuthClientCredentials"
linkTitle: "HttpOAuthClientCredentials"
description: "Used to represent details required for the OAuth Client Credentials authentication mechanism."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpOAuthClientCredentials` data type is used to represent details required for the OAuth Client Credentials authentication mechanism.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `HttpOAuthClientCredentials`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent details required for the OAuth Client Credentials authentication mechanism. |
| **Default Value:**     | `null`                                                     |
| **Can be used as:**    | `HttpOAuthClientCredentials`, `HttpOAuthCredentials`, `HttpCredentials`, `IHttpCredentials`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                      |

## Properties

### AccessTokenUri

The AccessTokenUri represents the URI used to get the access token. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

|                 |                     |
|-----------------|---------------------|
| Data Type       | [EncryptableText][] |
| Is [Advanced][] | `false`             |
| Default Editor  | [Expression][]      |
| Default Value   | [EncryptableText][] with value `$@""`              |

### ClientAuthentication

The ClientAuthentication represents the [ClientId][], [ClientSecret][] and [SendAs][].

|                 |                          |
|-----------------|--------------------------|
| Data Type       | [ClientAuthentication][] |
| Is [Advanced][] | `false`                   |
| Default Editor  | [Expression][]           |
| Default Value   | [ClientAuthentication][] with no value                      |

### Scope

The scope of permissions being requested for the access token. For multiple scopes, each scope should be separated by a space (e.g. `"Scope1 Scope2"`).

|                 |             |
|-----------------|-------------|
| Data Type       | [String][]  |
| Is [Advanced][] | `true`     |
| Default Editor  | [Literal][] |
| Default Value   | [String][] with value `""`        |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpOAuthClientCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpOAuthClientCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpOAuthClientCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [ClientAuthentication][]
- [EncryptableText][]
- [HttpCredentials][]
- [HttpOAuthCredentials][]
- [HttpOAuthPasswordCredentials][]
- [IHttpCredentials][]
- [String][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[IHttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.IHttpCredentials.MainDoc" >}}
[HttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.HttpCredentials.MainDoc" >}}
[HttpOAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthCredentials.MainDoc" >}}
[HttpOAuthPasswordCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[ClientAuthentication]: {{< url path = "Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[ClientId]: {{< url path = "Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.ClientId" >}}
[ClientSecret]: {{< url path = "Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.ClientSecret" >}}
[SendAs]: {{< url path = "Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.SendAs" >}}
