---
title: "ClientAuthType"
linkTitle: "ClientAuthType"
description: "Used to represent the client authentication type for OAuth."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.ClientAuthType)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `ClientAuthType` data type is used to represent the client authentication type for OAuth.

`ClientAuthType` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Http                                                  |
| **Name:**              | `ClientAuthType`                                |
| **Full Name:**         | `Cortex.DataTypes.Http.Authentication.OAuth.ClientAuthType`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent the type of an HTTP request. |
| **Default Value:**     | `(ClientAuthType)0`                             |
| **Can be used as:**    | `ClientAuthType`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)ClientAuthType.GET` or `(System.Int16)ClientAuthType.GET` or `(short)ClientAuthType.GET`)  |
|                        | `Int32` (e.g. `(Int32)ClientAuthType.GET` or `(System.Int32)ClientAuthType.GET` or `(int)ClientAuthType.GET`)  |
|                        | `Int64` (e.g. `(Int64)ClientAuthType.GET` or `(System.Int64)ClientAuthType.GET` or `(long)ClientAuthType.GET`)  |
|                        | `Single` (e.g. `(Single)ClientAuthType.GET` or `(System.Single)ClientAuthType.GET` or `(float)ClientAuthType.GET`)  |
|                        | `Double` (e.g. `(Double)ClientAuthType.GET` or `(System.Double)ClientAuthType.GET` or `(double)ClientAuthType.GET`)  |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ClientAuthType`.
- The Literal Editor is available for [Input][] properties where the data type is `ClientAuthType`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ClientAuthType`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]
- [HttpOAuthCredentials][]
- [HttpOAuthClientCredentials][]
- [HttpOAuthPasswordCredentials][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working with Text][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[HttpOAuthClientCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc" >}}
[HttpOAuthPasswordCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.MainDoc" >}}
[HttpOAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthCredentials.MainDoc" >}}
