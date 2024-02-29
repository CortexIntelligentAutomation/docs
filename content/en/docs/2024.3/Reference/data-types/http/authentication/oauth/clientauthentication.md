---
title: "ClientAuthentication"
linkTitle: "ClientAuthentication"
description: "Used to represent the `ClientId` and `ClientSecret` required for OAuth authentication mechanisms that use Client Secrets."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.ClientAuthentication)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `ClientAuthentication` data type is used to represent the `ClientId` and `ClientSecret` required for OAuth authentication mechanisms that use Client Secrets.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `ClientAuthentication`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Authentication.OAuth.ClientAuthentication`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent the `ClientId` and `ClientSecret` required for OAuth authentication mechanisms that use Client Secrets. |
| **Default Value:**     | `null`                                                     |
| **Can be used as:**    | `ClientAuthentication`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                      |

## Properties

### ClientId

### ClientSecret

### SendAs

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ClientAuthentication`.
- The Literal Editor is available for [Input][] properties where the data type is `ClientAuthentication`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ClientAuthentication`.

### Known Limitations

None

## See Also

### Related Data Types

- [HttpOAuthClientCredentials][]
- [HttpOAuthPasswordCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[HttpOAuthClientCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc" >}}
[HttpOAuthPasswordCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.MainDoc" >}}
