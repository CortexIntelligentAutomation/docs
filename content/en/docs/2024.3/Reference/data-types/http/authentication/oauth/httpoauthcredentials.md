---
title: "HttpOAuthCredentials"
linkTitle: "HttpOAuthCredentials"
description: "Used to represent details required for OAuth authentication."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpOAuthCredentials` data type is a base class used to represent details required for OAuth authentication when working with HTTP.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `HttpOAuthCredentials`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthCredentials`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent details required for OAuth authentication when working with HTTP.  |
| **Default Value:**     | null                                                     |
| **Can be used as:**    | `HttpOAuthCredentials`, `HttpCredentials`, `IHttpCredentials`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                      |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpOAuthCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpOAuthCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpOAuthCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [ClientAuthType][]
- [HttpOAuthClientCredentials][]
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
[ClientAuthType]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthType.MainDoc" >}}
[HttpOAuthClientCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc" >}}
[HttpOAuthPasswordCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.MainDoc" >}}