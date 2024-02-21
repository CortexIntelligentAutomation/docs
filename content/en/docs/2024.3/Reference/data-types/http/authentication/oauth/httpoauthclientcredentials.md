---
title: "HttpOAuthClientCredentials"
linkTitle: "HttpOAuthClientCredentials"
description: "Used to represent details required for OAuth authentication using client credentials."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthCientCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpOAuthClientCredentials` data type is used to represent details required for OAuth authentication using client credentials when working with HTTP.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `HttpOAuthClientCredentials`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent details required to authenticate with a server. |
| **Default Value:**     | null                                                     |
| **Can be used as:**    | `HttpOAuthClientCredentials`, `HttpOAuthCredentials`, `HttpCredentials`, `IHttpCredentials`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                      |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [ClientAuthType][]
- [HttpOAuthCredentials][]
- [HttpOAuthPasswordCredentials][]
- [IHttpCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[IHttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.IHttpCredentials.MainDoc" >}}
[HttpOAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthCredentials.MainDoc" >}}
[ClientAuthType]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthType.MainDoc" >}}
[HttpOAuthPasswordCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.MainDoc" >}}
