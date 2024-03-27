---
title: "ClientAuthType"
linkTitle: "ClientAuthType"
description: "Used to represent whether the `ClientId` and `ClientSecret` specified in ClientAuthentication are sent as part of the HTTP headers or HTTP body."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.ClientAuthType)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `ClientAuthType` data type is used to represent whether the `ClientId` and `ClientSecret` specified in [ClientAuthentication][] are sent as part of the HTTP headers or HTTP body.

`ClientAuthType` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Http                                                  |
| **Name:**              | `ClientAuthType`                                |
| **Full Name:**         | `Cortex.DataTypes.Http.Authentication.OAuth.ClientAuthType`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent whether the `ClientId` and `ClientSecret` specified in [ClientAuthentication][] are sent as part of the HTTP headers or HTTP body. |
| **Default Value:**     | `(ClientAuthType)0`                             |
| **Can be used as:**    | `ClientAuthType`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)ClientAuthType.Header` or `(System.Int16)ClientAuthType.Header` or `(short)ClientAuthType.Header`)  |
|                        | `Int32` (e.g. `(Int32)ClientAuthType.Header` or `(System.Int32)ClientAuthType.Header` or `(int)ClientAuthType.Header`)  |
|                        | `Int64` (e.g. `(Int64)ClientAuthType.Header` or `(System.Int64)ClientAuthType.Header` or `(long)ClientAuthType.Header`)  |
|                        | `Single` (e.g. `(Single)ClientAuthType.Header` or `(System.Single)ClientAuthType.Header` or `(float)ClientAuthType.Header`)  |
|                        | `Double` (e.g. `(Double)ClientAuthType.Header` or `(System.Double)ClientAuthType.Header` or `(double)ClientAuthType.Header`)  |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ClientAuthType`.
- The Literal Editor is available for [Input][] properties where the data type is `ClientAuthType`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ClientAuthType`.

### Known Limitations

None

## See Also

### Related Data Types

- [ClientAuthentication][]
- [HttpOAuthClientCredentials][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[HttpOAuthClientCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc" >}}
[ClientAuthentication]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.MainDoc" >}}
