---
title: "HttpOAuthPasswordCredentials"
linkTitle: "HttpOAuthPasswordCredentials"
description: "Used to represent details required for the OAuth Resource Owner Password Credentials authentication mechanism."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `HttpOAuthPasswordCredentials` data type is used to represent details required for the OAuth Resource Owner Password Credentials authentication mechanism.

| | |
|-|-|
| **Category:**          | Http                                                      |
| **Name:**              | `HttpOAuthPasswordCredentials`                                         |
| **Full Name:**         | `Cortex.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials`     |
| **Alias:**             | N/A                                                      |
| **Description:**       | Used to represent details required for the OAuth Resource Owner Password Credentials authentication mechanism.  |
| **Default Value:**     | null                                                     |
| **Can be used as:**    | `HttpOAuthPasswordCredentials`, `HttpCredentials`, `IHttpCredentials`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A                                                      |

## Properties

### ResourceOwnerUsername

### ResourceOwnerPassword

### AccessTokenUri

### ClientAuthentication

### Scope

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `HttpOAuthPasswordCredentials`.
- The Literal Editor is available for [Input][] properties where the data type is `HttpOAuthPasswordCredentials`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `HttpOAuthPasswordCredentials`.

### Known Limitations

None

## See Also

### Related Data Types

- [HttpCredentials][]
- [HttpOAuthClientCredentials][]
- [HttpOAuthCredentials][]
- [IHttpCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[IHttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.IHttpCredentials.MainDoc" >}}
[HttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.HttpCredentials.MainDoc" >}}
[HttpOAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthCredentials.MainDoc" >}}
[HttpOAuthClientCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc" >}}
