---
title: "ISshCredentials"
linkTitle: "ISshCredentials"
description: "Any data type used to represent details required for authentication when working with SSH."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Ssh.Authentication.ISshCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

Any data type used to represent details required for authentication when working with SSH.

| | |
|-|-|
| **Category:**          | Ssh                                            |
| **Name:**              | `ISshCredentials`                                      |
| **Full Name:**         | `Cortex.DataTypes.Ssh.Authentication.ISshCredentials`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Any data type used to represent details required for authentication when working with SSH. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `ISshCredentials`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ISshCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `ISshCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ISshCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [SshCertificateCredentials][]
- [SshCredentials][]
- [SshSessionDetails][]
- [SshUserCredentials][]
- [UserCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[SshUserCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshUserCredentials.MainDoc" >}}

[SshSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.MainDoc" >}}
[SshCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCredentials.MainDoc" >}}
[SshCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Ssh.Authentication.SshCertificateCredentials.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
