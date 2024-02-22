---
title: "Microsoft365OAuthCredentials"
linkTitle: "Microsoft365OAuthCredentials"
description: "Used to represent client credentials required to authenticate with a server hosted by Outlook via OAuth."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `Microsoft365OAuthCredentials` data type is used to represent client credentials required to authenticate with a server hosted by Outlook via OAuth.

| | |
|-|-|
| **Category:**          | Microsoft365                                            |
| **Name:**              | `Microsoft365OAuthCredentials`                                      |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent client credentials required to authenticate with a server hosted by Outlook via OAuth. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Microsoft365OAuthCredentials`, `Microsoft365Credentials`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### ClientId

### ClientSecret

### TenantId

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

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[Microsoft365Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365Credentials.MainDoc" >}}
[Microsoft365OAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
