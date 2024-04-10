---
title: "Microsoft365OAuthCredentials"
linkTitle: "Microsoft365OAuthCredentials"
description: "Used to represent client credentials required to authenticate, via OAuth, with a server hosted by Outlook."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `Microsoft365OAuthCredentials` data type is used to represent client credentials required to authenticate, via OAuth, with a server hosted by Outlook.

| | |
|-|-|
| **Category:**          | Microsoft365                                            |
| **Name:**              | `Microsoft365OAuthCredentials`                                      |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent client credentials required to authenticate, via OAuth, with a server hosted by Outlook. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Microsoft365OAuthCredentials`, `Microsoft365Credentials`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

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

### TenantId

The TenantId is used to define the Microsoft365 tenant in which the client application is registered. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

### ObjectId

The ObjectId of the user who is authenticating. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Microsoft365OAuthCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `Microsoft365OAuthCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Microsoft365OAuthCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [EncryptedText][]
- [Microsoft365Credentials][]
- [Microsoft365OAuthCertificateCredentials][]

### Related Concepts

- [Working with Email][]

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[Microsoft365Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365Credentials.MainDoc" >}}
[Microsoft365OAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
