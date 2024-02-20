---
title: "SshUserCredentials"
linkTitle: "SshUserCredentials"
description: "Used to represent password authentication credentials required to authenticate with a server."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.Authentication.SshUserCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `SshUserCredentials` data type is used to represent password authentication credentials required to authenticate with a server when working with SSH.

| | |
|-|-|
| **Category:**          | Ssh                                                          |
| **Name:**              | `SshUserCredentials`                                         |
| **Full Name:**         | `Cortex.DataTypes.SSH.Authentication.SshUserCredentials`     |
| **Alias:**             | N/A                                                          |
| **Description:**       | Used to represent password authentication credentials required to authenticate with a server. |
| **Default Value:**     | null                                                         |
| **Can be used as:**    | `SshUserCredentials`, `SshCredentials`, `ISshCredentials`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                          |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SshUserCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `SshUserCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SshUserCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [EncryptedText][]
- [ISshCredentials][]
- [SshCertificateCredentials][]
- [SshCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[ISshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.ISshCredentials.MainDoc" >}}

[SshCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCertificateCredentials.MainDoc" >}}
[SshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCredentials.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
