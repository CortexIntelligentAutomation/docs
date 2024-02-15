---
title: "Microsoft365OAuthCertificateCredentials"
linkTitle: "Microsoft365OAuthCertificateCredentials"
description: "Used to represent details for authentication via OAuth using a certificate when establishing a connection with a mail server hosted by Outlook."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `Microsoft365OAuthCertificateCredentials` data type is used to represent details for authentication via OAuth using a certificate when establishing a connection with a mail server hosted by Outlook.

| | |
|-|-|
| **Category:**          | Microsoft365                                            |
| **Name:**              | `Microsoft365OAuthCertificateCredentials`                                      |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent public key credentials required to authenticate with Microsoft 365. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Microsoft365OAuthCertificateCredentials`, `Microsoft365Credentials`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |


## Properties

### CertificatePath

### CertificatePassword

### ClientId

### TenantId

### ObjectId

## Remarks

### Create a Microsoft365OAuthCertificateCredentials

### Convert Microsoft365OAuthCertificateCredentials to Text

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

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[Microsoft365Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365Credentials.MainDoc" >}}
[Microsoft365OAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
