---
title: "SshCertificateCredentials"
linkTitle: "SshCertificateCredentials"
description: "Used to represent public key credentials required to authenticate with an SSH server."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.Authentication.SshCertificateCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `SshCertificateCredentials` data type is used to represent public key credentials required to authenticate with an SSH server.

| | |
|-|-|
| **Category:**          | Ssh                                            |
| **Name:**              | `SshCertificateCredentials`                                      |
| **Full Name:**         | `Cortex.DataTypes.Ssh.Authentication.SshCertificateCredentials`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent public key credentials required to authenticate with an SSH server. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `SshCertificateCredentials`, `SshCredentials`, `ISshCredentials`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SshCertificateCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `SshCertificateCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SshCertificateCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [EncryptedText][]
- [ISshCredentials][]
- [SshCredentials][]
- [SshUserCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[ISshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.ISshCredentials.MainDoc" >}}
[SshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCredentials.MainDoc" >}}
[SshUserCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshUserCredentials.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
