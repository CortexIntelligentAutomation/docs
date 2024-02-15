---
title: "SshCredentials"
linkTitle: "SshCredentials"
description: "Used to represent details required to authenticate with a server."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.Authentication.SshCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `SshCredentials` data type is a base class used to represent details required to authenticate with a server when working with SSH.

| | |
|-|-|
| **Category:**          | SSH                                                      |
| **Name:**              | `SshCredentials`                                         |
| **Full Name:**         | `Cortex.DataTypes.SSH.Authentication.SshCredentials`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent details required to authenticate with a server. |
| **Default Value:**     | null                                                     |
| **Can be used as:**    | `SshCredentials`, `ISshCredentials`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                      |

## Properties

### Domain

### Username

## Remarks

### Create an SshCredentials

### Convert SshCredentials to Text

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `SshCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `SshCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SshCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [EncryptableText][]
- [ISshCredentials][]
- [SshCertificateCredentials][]
- [SshUserCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[ISshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.ISshCredentials.MainDoc" >}}

[SshCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCertificateCredentials.MainDoc" >}}
[SshUserCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshUserCredentials.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
