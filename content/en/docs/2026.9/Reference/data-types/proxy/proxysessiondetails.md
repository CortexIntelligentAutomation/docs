---
title: "ProxySessionDetails"
linkTitle: "ProxySessionDetails"
description: "Used to route Microsoft 365 authentication and Graph API traffic through an HTTP forward proxy."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Proxy.ProxySessionDetails)</p>

## Summary

The `ProxySessionDetails` data type configures an optional HTTP forward proxy. Microsoft 365 blocks use it to route traffic to Microsoft Entra ID (`login.microsoftonline.com`) and Microsoft Graph (`graph.microsoft.com`) when outbound access must go through a corporate proxy.

When `ProxySessionDetails` is `null` or not configured, no proxy is used.

| | |
|-|-|
| **Category:**          | Proxy                                                   |
| **Name:**              | `ProxySessionDetails`                                   |
| **Full Name:**         | `Cortex.DataTypes.Proxy.ProxySessionDetails`              |
| **Alias:**             | N/A                                                     |
| **Description:**       | Session details for an HTTP forward proxy, including optional credentials. |
| **Default Value:**     | `null`                                                  |
| **Can be used as:**    | `ProxySessionDetails`, `Object`, `dynamic`              |
| **Can be cast to:**    | N/A                                                     |

## Properties

### ServerDetails {#serverdetails}

The [ServerDetails][ServerDetails Property] identify the proxy host, port, and whether the proxy endpoint is reached over HTTP or HTTPS (`ProxyType`). [Port][Port Property] must be between `1` and `65535` when the proxy is validated.

| | |
|--------------------|---------------------------|
| Data Type | `ProxyServerDetails` |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `ProxyServerDetails` with value shown below: |

```json
{
  "Host": "",
  "Port": 8080,
  "Type": "ProxyType.Https"
}
```

#### Host {#host}

The proxy host name or IP address (for example `"proxy.example.com"` or `"127.0.0.1"`). The value may optionally be encrypted; see [EncryptableText][].

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

#### Port {#port}

The port on the proxy to connect to.

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Int32][] with value `0` |

#### Type {#type}

Whether the client connects to the proxy over HTTP or HTTPS (`ProxyType`). If `Type` is unset in an expression, it defaults to [Https][] (`ProxyType.Https`, numeric value `0`).

| | |
|--------------------|---------------------------|
| Data Type | `ProxyType` |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `ProxyType.Https` |

### Https {#https}

| | |
|-|-|
| **Name** | Https |
| **Value** | [Int32][] with value `0` |
| **Notes** | Connect to the proxy using the HTTPS scheme (for example `https://proxy.example.com:8080`). Used when `Type` is unset (`default`). |

### Http {#http}

| | |
|-|-|
| **Name** | Http |
| **Value** | [Int32][] with value `1` |
| **Notes** | Connect to the proxy using the HTTP scheme (for example `http://proxy.example.com:8080`). |

### Credentials {#credentials}

Optional credentials used to authenticate with a secured proxy. The supported implementation is [ProxyUserCredentials][] (`IProxyCredentials`).

When [Credentials][Credentials Property] are `null`, the proxy is used without authentication. Credentials supplied to an unsecured proxy are ignored and do not cause an exception.

When [Credentials][Credentials Property] are [ProxyUserCredentials][], [Username][Username Property] and [Password][Password Property] must not be `null` or empty when the containing `ProxySessionDetails` is validated (for example by a Microsoft 365 block). [Password][Password Property] must be [EncryptedText][]; [Username][Username Property] may optionally be encrypted.

| | |
|--------------------|---------------------------|
| Data Type | `IProxyCredentials` |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `null` |

#### Username {#username}

The username for proxy authentication.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `""` |

#### Password {#password}

The password for proxy authentication.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptedText][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptedText][] with value `""` |

## Remarks

### Create a ProxySessionDetails

The following table shows some of the ways that `ProxySessionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `ProxySessionDetails` constructor (no credentials) | `new ProxySessionDetails(serverDetails: new ProxyServerDetails("proxy.example.com", 8080, ProxyType.Https))` | `{"ServerDetails": {"Host": "proxy.example.com", "Port": 8080, "Type": "ProxyType.Https"}, "Credentials": null}` | Expression | Typical when the proxy does not require authentication. |
| Use a `ProxySessionDetails` constructor (with credentials) | `new ProxySessionDetails(serverDetails: new ProxyServerDetails("proxy.example.com", 8080, ProxyType.Https), credentials: new ProxyUserCredentials("proxyUser", "encryptedProxyPassword"))` | `{"ServerDetails": {"Host": "proxy.example.com", "Port": 8080, "Type": "ProxyType.Https"}, "Credentials": {"Username": "proxyUser", "Password": "encryptedProxyPassword"}}` | Expression | [Password][Password Property] must be encrypted; see [EncryptedText][]. |

A `ProxySessionDetails` can also be created using the Literal Editor by filling in [ServerDetails][ServerDetails Property] and, when needed, [ProxyUserCredentials][] for [Credentials][Credentials Property].

### Using ProxySessionDetails with Microsoft 365 blocks

Several Microsoft 365 Outlook blocks expose an advanced **Proxy** property of type `ProxySessionDetails`. When the property is left unset (`null`), authentication and Graph requests connect directly. When it is set, both Microsoft Entra token acquisition and Microsoft Graph calls use the configured proxy.

Example block: [Send Email Using Microsoft 365][].

Validation and runtime errors for misconfigured proxies (invalid port, unreachable host, tunnel or certificate failures) are documented on each block's **Exceptions** section.

### Convert ProxySessionDetails to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` has a value of `{"ServerDetails": {"Host": "proxy.example.com", "Port": 8080, "Type": "ProxyType.Https"}, "Credentials": {"Username": "proxyUser", "Password": "encryptedProxyPassword"}}` | JSON representation of the object | N/A | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ProxySessionDetails`.
- The Literal Editor is available for [Input][] properties where the data type is `ProxySessionDetails`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ProxySessionDetails`.

### Known Limitations

- Only HTTP forward proxies are supported (`ProxyType.Http` and `ProxyType.Https`). SOCKS proxies are not supported.
- `ProxyUserCredentials` is the only credential type used for proxy authentication today.

## See Also

### Related Data Types

- [EncryptableText][]
- [EncryptedText][]
- [Int32][]

### Related Blocks

- [Send Email Using Microsoft 365][]

### External Documentation

None

[ServerDetails Property]: {{< ref "#serverdetails" >}}
[Credentials Property]: {{< ref "#credentials" >}}
[Username Property]: {{< ref "#username" >}}
[Password Property]: {{< ref "#password" >}}
[Port Property]: {{< ref "#port" >}}
[ProxyUserCredentials]: {{< url path="Cortex.Reference.DataTypes.Proxy.Authentication.ProxyUserCredentials.MainDoc" >}}
[Https]: {{< ref "#https" >}}
[Http]: {{< ref "#http" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Send Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.SendEmail.SendEmailUsingMicrosoft365.MainDoc" >}}
