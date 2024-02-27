---
title: "Microsoft365OAuthCertificateCredentials"
linkTitle: "Microsoft365OAuthCertificateCredentials"
description: "Used to represent public key credentials required to authenticate with a server hosted by Outlook via OAuth."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `Microsoft365OAuthCertificateCredentials` data type is used to represent public key credentials required to authenticate with a server hosted by Outlook via OAuth.

| | |
|-|-|
| **Category:**          | Microsoft365                                            |
| **Name:**              | `Microsoft365OAuthCertificateCredentials`                                      |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent public key credentials required to authenticate with a server hosted by Outlook via OAuth. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Microsoft365OAuthCertificateCredentials`, `Microsoft365Credentials`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### CertificatePath

The CertificatePath is used to define the location of the Certificate on the machine. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].
| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@""` |

### CertificatePassword

The CertificatePassword is used to define the password of the certificate located at [CertificatePath][]. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].
| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

### ClientId

The ClientId is used to define the public identification value for the client application. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].
| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

### TenantId

The TenantId is used to refer to a specific Microsoft365 tenant. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

### ObjectId

The ObjectId of the sender who is sending the email. The value of this property may optionally be encrypted; for more information on how to encrypt this property, see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Microsoft365OAuthCertificateCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `Microsoft365OAuthCertificateCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Microsoft365OAuthCertificateCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [EncryptedText][]
- [Microsoft365Credentials][]
- [Microsoft365OAuthCredentials][]

### Related Concepts

- [Working with Email][]

### External Documentation

None

[CertificatePath]: {{< ref "#certificatepath">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[Microsoft365Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365Credentials.MainDoc" >}}
[Microsoft365OAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
