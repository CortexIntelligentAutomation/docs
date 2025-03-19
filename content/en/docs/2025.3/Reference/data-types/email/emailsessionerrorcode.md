---
title: "EmailSessionErrorCode"
linkTitle: "EmailSessionErrorCode"
description: "Used to represent an error code explaining the reason an `EmailSessionException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Email.EmailSessionErrorCode)</p>

## Summary

The `EmailSessionErrorCode` data type is used to represent an error code explaining the reason an [EmailSessionException][] occurred. For more information on the exception itself, see [EmailSessionException][].

`EmailSessionErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Email                                                  |
| **Name:**              | `EmailSessionErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Email.EmailSessionErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason an [EmailSessionException][] occurred. |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `(EmailSessionErrorCode)0`                             |
| **Can be used as:**    | `EmailSessionErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)EmailSessionErrorCode.InvalidPort` or `(System.Int16)EmailSessionErrorCode.InvalidPort` or `(short)EmailSessionErrorCode.InvalidPort`)  |
|                        | `Int32` (e.g. `(Int32)EmailSessionErrorCode.InvalidPort` or `(System.Int32)EmailSessionErrorCode.InvalidPort` or `(int)EmailSessionErrorCode.InvalidPort`)  |
|                        | `Int64` (e.g. `(Int64)EmailSessionErrorCode.InvalidPort` or `(System.Int64)EmailSessionErrorCode.InvalidPort` or `(long)EmailSessionErrorCode.InvalidPort`)  |
|                        | `Single` (e.g. `(Single)EmailSessionErrorCode.InvalidPort` or `(System.Single)EmailSessionErrorCode.InvalidPort` or `(float)EmailSessionErrorCode.InvalidPort`)  |
|                        | `Double` (e.g. `(Double)EmailSessionErrorCode.InvalidPort` or `(System.Double)EmailSessionErrorCode.InvalidPort` or `(double)EmailSessionErrorCode.InvalidPort`)  |

## Values

### InvalidPort

| | |
|-|-|
| **Name:**    | InvalidPort                                     |
| **Value:**   | [Int32][] with value `100`                      |
| **Notes:**   | Used when an [EmailSessionException][] occured due to an invalid [Port][] being provided in [ServerDetails][]. See [Invalid Port][InvalidPort]. |

### InvalidHost

| | |
|-|-|
| **Name:**    | InvalidHost                                     |
| **Value:**   | [Int32][] with value `101`                      |
| **Notes:**   | Used when an [EmailSessionException][] occured due to an invalid [Host][] being provided in [ServerDetails][]. See [Invalid Host][InvalidHost]. |

### SslRequired

| | |
|-|-|
| **Name:**    | SslRequired                                     |
| **Value:**   | [Int32][] with value `200`                      |
| **Notes:**   | Used when an [EmailSessionException][] occured due to [UseSsl][] being set to `false` in [ServerDetails][] when trying to establish a connection on a [Port][] which requires [SSL][]. See [SSL Required][SslRequired]. |

### SslUnsupported

| | |
|-|-|
| **Name:**    | SslUnsupported                                  |
| **Value:**   | [Int32][] with value `201`                      |
| **Notes:**   | Used when an [EmailSessionException][] occured due to [UseSsl][] being set to `true` in [ServerDetails][] when trying to establish a connection on a [Port][] which does not support [SSL][].  See [SSL Unsupported][SslUnsupported Exception].|

### InvalidUserCredentials

| | |
|-|-|
| **Name:**    | InvalidUserCredentials                          |
| **Value:**   | [Int32][] with value `300`                      |
| **Notes:**   | Used when an [EmailSessionException][] occured due to an invalid [Username][] and [Password][] combination being provided in [UserCredentials][]. See [Invalid User Credentials][InvalidUserCredentials]. |

### InvalidCertificate

| | |
|-|-|
| **Name:**    | InvalidCertificate                              |
| **Value:**   | [Int32][] with value `400`                      |
| **Notes:**   | Used when an [EmailSessionException][] occured due to an invalid [CertificatePath][] and [CertificatePassword][] combination being provided in [GmailOAuthCertificateCredentials][]. See [Invalid SSL Certificate][InvalidSslCertificate]. |

### InvalidGmailClientCredentials

| | |
|-|-|
| **Name:**    | InvalidGmailClientCredentials                   |
| **Value:**   | [Int32][] with value `401`                      |
| **Notes:**   | Used when an [EmailSessionException][] occured due to an invalid [FromAddress][] and [ClientId][] combination being provided in [GmailOAuthCertificateCredentials][]. See [Invalid Gmail Client Credentials][InvalidClientCredentials]. |

## Remarks

### Create an EmailSessionErrorCode

The following table shows some of the ways that `EmailSessionErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `EmailSessionErrorCode` expression | `EmailSessionErrorCode.InvalidPort` | `EmailSessionErrorCode.InvalidPort`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [Port][] being provided in [ServerDetails][] |
| | `EmailSessionErrorCode.InvalidHost` | `EmailSessionErrorCode.InvalidHost`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [Host][] being provided in [ServerDetails][] |
| | `EmailSessionErrorCode.SslRequired` | `EmailSessionErrorCode.SslRequired`| Expression | Indicates an [EmailSessionException][] occured due to [UseSsl][] being set to `false` in [ServerDetails][] when trying to establish a connection on a [Port][] which requires [SSL][] |
| | `EmailSessionErrorCode.SslUnsupported` | `EmailSessionErrorCode.SslUnsupported`| Expression | Indicates an [EmailSessionException][] occured due to [UseSsl][] being set to `true` in [ServerDetails][] when trying to establish a connection on a [Port][] which does not support [SSL][] |
| | `EmailSessionErrorCode.InvalidUserCredentials` | `EmailSessionErrorCode.InvalidUserCredentials`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [Username][] and [Password][] combination being provided in [UserCredentials][] |
| | `EmailSessionErrorCode.InvalidCertificate` | `EmailSessionErrorCode.InvalidCertificate`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [CertificatePath][] and [CertificatePassword][] combination being provided in [GmailOAuthCertificateCredentials][] |
| | `EmailSessionErrorCode.InvalidGmailClientCredentials` | `EmailSessionErrorCode.InvalidGmailClientCredentials`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [FromAddress][] and [ClientId][] combination being provided in [GmailOAuthCertificateCredentials][] |
| Use [Explicit Casting][] | `(EmailSessionErrorCode)100` | `EmailSessionErrorCode.InvalidPort`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [Port][] being provided in [ServerDetails][] |
| | `(EmailSessionErrorCode)101` | `EmailSessionErrorCode.InvalidHost`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [Host][] being provided in [ServerDetails][] |
| | `(EmailSessionErrorCode)200` | `EmailSessionErrorCode.SslRequired`| Expression | Indicates an [EmailSessionException][] occured due to [UseSsl][] being set to `false` in [ServerDetails][] when trying to establish a connection on a [Port][] which requires [SSL][] |
| | `(EmailSessionErrorCode)201` | `EmailSessionErrorCode.SslUnsupported`| Expression | Indicates an [EmailSessionException][] occured due to [UseSsl][] being set to `true` in [ServerDetails][] when trying to establish a connection on a [Port][] which does not support [SSL][] |
| | `(EmailSessionErrorCode)300` | `EmailSessionErrorCode.InvalidUserCredentials`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [Username][] and [Password][] combination being provided in [UserCredentials][] |
| | `(EmailSessionErrorCode)400` | `EmailSessionErrorCode.InvalidCertificate`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [CertificatePath][] and [CertificatePassword][] combination being provided in [GmailOAuthCertificateCredentials][] |
| | `(EmailSessionErrorCode)401` | `EmailSessionErrorCode.InvalidGmailClientCredentials`| Expression | Indicates an [EmailSessionException][] occured due to an invalid [FromAddress][] and [ClientId][] combination being provided in [GmailOAuthCertificateCredentials][] |
| Use `Enum.Parse` | `(EmailSessionErrorCode)Enum.Parse(typeof(EmailSessionErrorCode), "InvalidPort")` | `EmailSessionErrorCode.InvalidPort`| Expression | Parses `"InvalidPort"` and converts it to `EmailSessionErrorCode.InvalidPort`. See [Enum.Parse][] |
| | `(EmailSessionErrorCode)Enum.Parse(typeof(EmailSessionErrorCode), "InvalidHost")` | `EmailSessionErrorCode.InvalidHost`| Expression | Parses `"InvalidHost"` and converts it to `EmailSessionErrorCode.InvalidHost`. See [Enum.Parse][] |
| | `(EmailSessionErrorCode)Enum.Parse(typeof(EmailSessionErrorCode), "SslRequired")` | `EmailSessionErrorCode.SslRequired`| Expression | Parses `"SslRequired"` and converts it to `EmailSessionErrorCode.SslRequired`. See [Enum.Parse][] |
| | `(EmailSessionErrorCode)Enum.Parse(typeof(EmailSessionErrorCode), "SslUnsupported")` | `EmailSessionErrorCode.SslUnsupported`| Expression | Parses `"SslUnsupported"` and converts it to `EmailSessionErrorCode.SslUnsupported`. See [Enum.Parse][] |
| | `(EmailSessionErrorCode)Enum.Parse(typeof(EmailSessionErrorCode), "InvalidUserCredentials")` | `EmailSessionErrorCode.InvalidUserCredentials`| Expression | Parses `"InvalidUserCredentials"` and converts it to `EmailSessionErrorCode.InvalidUserCredentials`. See [Enum.Parse][] |
| | `(EmailSessionErrorCode)Enum.Parse(typeof(EmailSessionErrorCode), "InvalidCertificate")` | `EmailSessionErrorCode.InvalidCertificate`| Expression | Parses `"InvalidCertificate"` and converts it to `EmailSessionErrorCode.InvalidCertificate`. See [Enum.Parse][] |
| | `(EmailSessionErrorCode)Enum.Parse(typeof(EmailSessionErrorCode), "InvalidGmailClientCredentials")` | `EmailSessionErrorCode.InvalidGmailClientCredentials`| Expression | Parses `"InvalidGmailClientCredentials"` and converts it to `EmailSessionErrorCode.InvalidGmailClientCredentials`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(EmailSessionErrorCode)Enum.ToObject(typeof(EmailSessionErrorCode), 100)` | `EmailSessionErrorCode.InvalidPort`| Expression | Converts `100` to `EmailSessionErrorCode.InvalidPort` value. See [Enum.ToObject][] |
| | `(EmailSessionErrorCode)Enum.ToObject(typeof(EmailSessionErrorCode), 101)` | `EmailSessionErrorCode.InvalidHost`| Expression | Converts `101` to `EmailSessionErrorCode.InvalidHost` value. See [Enum.ToObject][] |
| | `(EmailSessionErrorCode)Enum.ToObject(typeof(EmailSessionErrorCode), 200)` | `EmailSessionErrorCode.SslRequired`| Expression | Converts `200` to `EmailSessionErrorCode.SslRequired` value. See [Enum.ToObject][] |
| | `(EmailSessionErrorCode)Enum.ToObject(typeof(EmailSessionErrorCode), 201)` | `EmailSessionErrorCode.SslUnsupported`| Expression | Converts `201` to `EmailSessionErrorCode.SslUnsupported` value. See [Enum.ToObject][] |
| | `(EmailSessionErrorCode)Enum.ToObject(typeof(EmailSessionErrorCode), 300)` | `EmailSessionErrorCode.InvalidUserCredentials`| Expression | Converts `300` to `EmailSessionErrorCode.InvalidUserCredentials` value. See [Enum.ToObject][] |
| | `(EmailSessionErrorCode)Enum.ToObject(typeof(EmailSessionErrorCode), 400)` | `EmailSessionErrorCode.InvalidCertificate`| Expression | Converts `400` to `EmailSessionErrorCode.InvalidCertificate` value. See [Enum.ToObject][] |
| | `(EmailSessionErrorCode)Enum.ToObject(typeof(EmailSessionErrorCode), 401)` | `EmailSessionErrorCode.InvalidGmailClientCredentials`| Expression | Converts `401` to `EmailSessionErrorCode.InvalidGmailClientCredentials` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert EmailSessionErrorCode to Text

The following table shows some of the ways that an `EmailSessionErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `EmailSessionErrorCode.InvalidPort.ToString()` | `"InvalidPort"` | Expression | Converts `EmailSessionErrorCode.InvalidPort` to `"InvalidPort"`. See [Enum.ToString][] |
| | `EmailSessionErrorCode.InvalidHost.ToString()` | `"InvalidHost"` | Expression | Converts `EmailSessionErrorCode.InvalidHost` to `"InvalidHost"`. See [Enum.ToString][] |
| | `EmailSessionErrorCode.SslRequired.ToString()` | `"SslRequired"` | Expression | Converts `EmailSessionErrorCode.SslRequired` to `"SslRequired"`. See [Enum.ToString][] |
| | `EmailSessionErrorCode.SslUnsupported.ToString()` | `"SslUnsupported"` | Expression | Converts `EmailSessionErrorCode.SslUnsupported` to `"SslUnsupported"`. See [Enum.ToString][] |
| | `EmailSessionErrorCode.InvalidUserCredentials.ToString()` | `"InvalidUserCredentials"` | Expression | Converts `EmailSessionErrorCode.InvalidUserCredentials` to `"InvalidUserCredentials"`. See [Enum.ToString][] |
| | `EmailSessionErrorCode.InvalidCertificate.ToString()` | `"InvalidCertificate"` | Expression | Converts `EmailSessionErrorCode.InvalidCertificate` to `"InvalidCertificate"`. See [Enum.ToString][] |
| | `EmailSessionErrorCode.InvalidGmailClientCredentials.ToString()` | `"InvalidGmailClientCredentials"` | Expression | Converts `EmailSessionErrorCode.InvalidGmailClientCredentials` to `"InvalidGmailClientCredentials"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(EmailSessionErrorCode.InvalidPort)` | `"InvalidPort"` | Expression | Converts `EmailSessionErrorCode.InvalidPort` to `"InvalidPort"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailSessionErrorCode.InvalidHost)` | `"InvalidHost"` | Expression | Converts `EmailSessionErrorCode.InvalidHost` to `"InvalidHost"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailSessionErrorCode.SslRequired)` | `"SslRequired"` | Expression | Converts `EmailSessionErrorCode.SslRequired` to `"SslRequired"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailSessionErrorCode.SslUnsupported)` | `"SslUnsupported"` | Expression | Converts `EmailSessionErrorCode.SslUnsupported` to `"SslUnsupported"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailSessionErrorCode.InvalidUserCredentials)` | `"InvalidUserCredentials"` | Expression | Converts `EmailSessionErrorCode.InvalidUserCredentials` to `"InvalidUserCredentials"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailSessionErrorCode.InvalidCertificate)` | `"InvalidCertificate"` | Expression | Converts `EmailSessionErrorCode.InvalidCertificate` to `"InvalidCertificate"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailSessionErrorCode.InvalidGmailClientCredentials)` | `"InvalidGmailClientCredentials"` | Expression | Converts `EmailSessionErrorCode.InvalidGmailClientCredentials` to `"InvalidGmailClientCredentials"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `EmailSessionErrorCode.InvalidPort` | `"InvalidPort"` | N/A  | Converts `EmailSessionErrorCode.InvalidPort` to `"InvalidPort"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailSessionErrorCode.InvalidHost` | `"InvalidHost"` | N/A  | Converts `EmailSessionErrorCode.InvalidHost` to `"InvalidHost"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailSessionErrorCode.SslRequired` | `"SslRequired"` | N/A  | Converts `EmailSessionErrorCode.SslRequired` to `"SslRequired"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailSessionErrorCode.SslUnsupported` | `"SslUnsupported"` | N/A  | Converts `EmailSessionErrorCode.SslUnsupported` to `"SslUnsupported"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailSessionErrorCode.InvalidUserCredentials` | `"InvalidUserCredentials"` | N/A  | Converts `EmailSessionErrorCode.InvalidUserCredentials` to `"InvalidUserCredentials"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailSessionErrorCode.InvalidCertificate` | `"InvalidCertificate"` | N/A  | Converts `EmailSessionErrorCode.InvalidCertificate` to `"InvalidCertificate"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailSessionErrorCode.InvalidGmailClientCredentials` | `"InvalidGmailClientCredentials"` | N/A  | Converts `EmailSessionErrorCode.InvalidGmailClientCredentials` to `"InvalidGmailClientCredentials"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `EmailSessionErrorCode.InvalidPort` | `"100"` | N/A  | Converts `EmailSessionErrorCode.InvalidPort` to `"100"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailSessionErrorCode.InvalidHost` | `"101"` | N/A  | Converts `EmailSessionErrorCode.InvalidHost` to `"101"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailSessionErrorCode.SslRequired` | `"200"` | N/A  | Converts `EmailSessionErrorCode.SslRequired` to `"200"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailSessionErrorCode.SslUnsupported` | `"201"` | N/A  | Converts `EmailSessionErrorCode.SslUnsupported` to `"201"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailSessionErrorCode.InvalidUserCredentials` | `"300"` | N/A  | Converts `EmailSessionErrorCode.InvalidUserCredentials` to `"300"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailSessionErrorCode.InvalidCertificate` | `"400"` | N/A  | Converts `EmailSessionErrorCode.InvalidCertificate` to `"400"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailSessionErrorCode.InvalidGmailClientCredentials` | `"401"` | N/A  | Converts `EmailSessionErrorCode.InvalidGmailClientCredentials` to `"401"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert EmailSessionErrorCode to a Number

The following table shows some of the ways that an `EmailSessionErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)EmailSessionErrorCode.InvalidPort`   | `100` | Expression | [Casts][Explicit Casting] `EmailSessionErrorCode.InvalidPort` to `100` |
|                                       | `(Int32)EmailSessionErrorCode.InvalidHost`   | `101` | Expression | [Casts][Explicit Casting] `EmailSessionErrorCode.InvalidHost` to `101` |
|                                       | `(Int32)EmailSessionErrorCode.SslRequired`   | `200` | Expression | [Casts][Explicit Casting] `EmailSessionErrorCode.SslRequired` to `200` |
|                                       | `(Int32)EmailSessionErrorCode.SslUnsupported`   | `201` | Expression | [Casts][Explicit Casting] `EmailSessionErrorCode.SslUnsupported` to `201` |
|                                       | `(Int32)EmailSessionErrorCode.InvalidUserCredentials`   | `300` | Expression | [Casts][Explicit Casting] `EmailSessionErrorCode.InvalidUserCredentials` to `300` |
|                                       | `(Int32)EmailSessionErrorCode.InvalidCertificate`   | `400` | Expression | [Casts][Explicit Casting] `EmailSessionErrorCode.InvalidCertificate` to `400` |
|                                       | `(Int32)EmailSessionErrorCode.InvalidGmailClientCredentials`   | `401` | Expression | [Casts][Explicit Casting] `EmailSessionErrorCode.InvalidGmailClientCredentials` to `401` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(EmailSessionErrorCode.InvalidPort)`   | `100` | Expression | Converts `EmailSessionErrorCode.InvalidPort` to `100`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailSessionErrorCode.InvalidHost)`   | `101` | Expression | Converts `EmailSessionErrorCode.InvalidHost` to `101`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailSessionErrorCode.SslRequired)`   | `200` | Expression | Converts `EmailSessionErrorCode.SslRequired` to `200`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailSessionErrorCode.SslUnsupported)`   | `201` | Expression | Converts `EmailSessionErrorCode.SslUnsupported` to `201`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailSessionErrorCode.InvalidUserCredentials)`   | `300` | Expression | Converts `EmailSessionErrorCode.InvalidUserCredentials` to `300`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailSessionErrorCode.InvalidCertificate)`   | `400` | Expression | Converts `EmailSessionErrorCode.InvalidCertificate` to `400`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailSessionErrorCode.InvalidGmailClientCredentials)`   | `401` | Expression | Converts `EmailSessionErrorCode.InvalidGmailClientCredentials` to `401`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailSessionErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailSessionErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailSessionErrorCode`.

### Known Limitations

Currently for the [SslUnsupported][] error code, there are numerous reasons for why the exception may have occurred. For more information, see [SSL Unsupported][SslUnsupported Exception].

In the future this may change.

## See Also

### Related Data Types

- [EmailSessionException][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Email][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[SslUnsupported]: {{< ref "#sslunsupported">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[EmailSessionException]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.MainDoc" >}}
[InvalidPort]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidPort" >}}
[InvalidHost]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidHost" >}}
[SslRequired]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.SslRequired" >}}
[SslUnsupported Exception]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.SslUnsupported" >}}
[InvalidUserCredentials]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidUserCredentials" >}}
[InvalidSslCertificate]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidSslCertificate" >}}
[InvalidClientCredentials]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidClientCredentials" >}}

[GmailOAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.MainDoc" >}}
[CertificatePath]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePath" >}}
[CertificatePassword]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePassword" >}}
[FromAddress]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.FromAddress" >}}
[ClientId]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.ClientId" >}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[SSL]: {{< url path="Cortex.Reference.Glossary.P-T.SSL" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
