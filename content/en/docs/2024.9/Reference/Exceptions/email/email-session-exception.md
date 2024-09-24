---
title: "EmailSessionException"
linkTitle: "EmailSessionException"
description: "The exception thrown when an issue occurs while opening a session with a mail server."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Email.EmailSessionException)</p>

## Description

The exception thrown when an issue occurs while opening a session with a mail server.

There are multiple reasons that this exception can be thrown:

- [Invalid Port][InvalidPortProvided]
- [Invalid Host][InvalidHostProvided]
- [SSL Required][SslWrappedConnectionRequired]
- [SSL Unsupported][SslWrappedConnectionNotSupported]
- [Invalid User Credentials][InvalidUsernameAndPassword]
- [Invalid SSL Certificate][InvalidSslCertificate]
- [Invalid Gmail Client Credentials][InvalidClientCredentials]

## Reasons

### Invalid Port {#100}

A [Category][] of `Socket` and an [Error Code][] of `100` indicates that the [Port][] provided in the [ServerDetails][] is invalid.

#### Message Format

The format of the [Message][] is as follows:

```json
"The connection attempt to 'Host' ('<host>') on 'Port' (<port>) failed. The 'Server Details' in 'Email Session Details' has been provided a port that does not exist or the connection timed out.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<host>` is the address of the mail server that a session is being opened with
- `<port>` is the port on the mail server that a session is being opened with

#### How to Fix

Provide a valid [Port][] between the [Int32][] values 1 and 65535 in the [ServerDetails][] and ensure that the mail server is up and running without issues.

***

### Invalid Host {#101}

A [Category][] of `Socket` and an [Error Code][] of `101` indicates that the [Host][] provided in the [ServerDetails][] is invalid.

#### Message Format

```json
"Invalid 'Host' ('<host>') provided. The 'Server Details' in 'Email Session Details' has been provided a host that does not exist.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<host>` is the address of the mail server that a session is being opened with

#### How to Fix

Provide a valid [Host][] in the [ServerDetails][].

***

### SSL Required {#200}

A [Category][] of `SSL` and an [Error Code][] of `200` indicates that [SSL][] is required. More specifically, the mail server is expecting that [SSL][] is used as soon as the connection is established.

#### Message Format

```json
"The connection could not be established or disconnected unexpectedly. Check if the 'Port' (<port>) provided requires that 'Use SSL' be set to true.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<port>` is the port on the mail server that a session is being opened with

#### How to Fix

Change [UseSsl][] in the [ServerDetails][] to `true`, or make a connection on a [Port][] which does not require [SSL][].

***

### SSL Unsupported {#201}

A [Category][] of `SSL` and an [Error Code][] of `201` indicates that one of the following issues occurred:

- An [SSL][] connection is not supported. More specifically, the mail server either does not support [SSL][] connections or only supports [SSL][] connections via the STARTTLS command.
- Certificate on the [Host][] is expired, untrusted or invalid
- Certificate replaced by anti-virus software in order to scan web traffic resulting in failed certificate validation
- [CRL][] server is down

#### Message Format

```json
"The connection could not be established or disconnected unexpectedly. Check if the 'Port' (<port>) provided requires that 'Use SSL' be set to false. If this is not the case, check the inner exception.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<port>` is the port on the mail server that a session is being opened with

#### How to Fix

Change [UseSsl][] in the [ServerDetails][] to `false`, or make a connection on a port which supports [SSL][].

If the above suggestion does not fix the problem, check if the anti-virus software on the server executing the flow is replacing the [SSL][] certificate in order to scan the web traffic, and change the settings appropriately if needed.

If the issue persists, please check the inner exception as instructed by the [Message][].

***

### Invalid User Credentials {#300}

A [Category][] of `UserCredentials` and an [Error Code][] of `300` indicates that the [Username][] and [Password][] combination provided in the [UserCredentials][] is invalid.

#### Message Format

```json
"The provided 'Username' and 'Password' is incorrect. The 'User Credentials' in 'Email Session Details' has been provided an incorrect username and password combination.
Please click the HelpLink for more information on how to fix this."
```

#### How to Fix

Provide a valid [Username][] and [Password][] combination in the [UserCredentials][].

***

### Invalid SSL Certificate {#400}

A [Category][] of `OAuthCredentials` and an [Error Code][] of `400` indicates that one of the following issues occurred:

- An invalid [CertificatePath][] and [CertificatePassword][] combination has been provided in the [GmailOAuthCertificateCredentials][]
- The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] points to an invalid [SSL][] certificate
- The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] points to a non-existant file
- The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] points to a folder
- The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] is longer than the system defined maximum length (typically 32,767)
- The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] contains only whitespace (i.e. `" "`) or contains the NUL character (i.e. `\0`)
- The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] contains leading spaces
- The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] contains invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`)
- Access is denied to the file at the [CertificatePath][] in the [GmailOAuthCertificateCredentials][]

#### Message Format

```json
"The 'Certificate Path' ('<certificate-path>') or 'Certificate Password' is invalid. The 'Gmail OAuth Certificate Credentials' in 'Email Session Details' has been provided an incorrect certificate path or certificate password.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<certificate-path>` is the path pointing to the [SSL][] certificate

#### How to Fix

Provide a [CertificatePath][] which is a valid file path pointing to a valid [SSL][] certificate and ensure that the [CertificatePassword][] is correct in the [GmailOAuthCertificateCredentials][].

***

### Invalid Gmail Client Credentials {#401}

A [Category][] of `OAuthCredentials` and an [Error Code][] of `401` indicates that an invalid [FromAddress][] and [ClientId][] combination has been provided in the [GmailOAuthCertificateCredentials][].

#### Message Format

```json
"The 'From Address' ('<from-address>}') or 'Client Id' ('<client-id>') is invalid. The 'Gmail OAuth Certificate Credentials' in 'Email Session Details' has been provided an incorrect email address or Client ID.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<from-address>` is the email address to send the email from
- `<client-id>` is the client ID for the client application

#### How to Fix

Provide a valid [FromAddress][] and ensure that the [ClientId][] is correct in the [GmailOAuthCertificateCredentials][].

***

## Properties

### Exception Type

The type of the exception (i.e. `EmailSessionException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Category

The category of the exception, which is used to categorise an exception if there are multiple reasons that the exception can occur.

For `EmailSessionException` there are the following categories:

- `Socket`
- `SSL`
- `UserCredentials`
- `OAuthCredentials`

| | |
|-----------|------------|
| Data Type | [String][] |

### Error Code

The error code for the exception, which is used to indicate the reason that the exception occurred, if there are multiple reasons that the exception can occur.

For `EmailSessionException` there are the following error codes:

- [100][InvalidPortProvided] - indicates that the [Port][] provided in the [ServerDetails][] is invalid
- [101][InvalidHostProvided] - indicates that the [Host][] provided in the [ServerDetails][] is invalid
- [200][SslWrappedConnectionRequired] - indicates that [SSL][] is required
- [201][SslWrappedConnectionNotSupported] - indicates that an [SSL][] connection is not supported
- [300][InvalidUsernameAndPassword] - indicates that the [Username][] and [Password][] combination provided in in the [UserCredentials][] is invalid
- [400][InvalidSslCertificate] - indicates that the [CertificatePath][] or [CertificatePassword][] provided in the [GmailOAuthCertificateCredentials][] is invalid
- [401][InvalidClientCredentials] - indicates that the [FromAddress][] or [ClientId][] provided in the [GmailOAuthCertificateCredentials][] is invalid

| | |
|-----------|---------------------------|
| Data Type | [EmailSessionErrorCode][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

- [BasicEmailSessionDetails][]
- [EmailSessionErrorCode][]
- [GmailOAuthCertificateCredentials][]
- [GmailSessionDetails][]
- [Int32][]
- [ServerDetails][]
- [String][]
- [UserCredentials][]

### Related Concepts

- [Exceptions][]
- [Working with Email][]

### Related Blocks

- [Send Email Using SMTP Server Block][]
- [Send Email Using Gmail Block][]
- [Send Email Using Microsoft 365 Block][]

### External Documentation

None

[InvalidPortProvided]: {{< ref "#100">}}
[InvalidHostProvided]: {{< ref "#101">}}
[SslWrappedConnectionRequired]: {{< ref "#200">}}
[SslWrappedConnectionNotSupported]: {{< ref "#201">}}
[InvalidUsernameAndPassword]: {{< ref "#300">}}
[InvalidSslCertificate]: {{< ref "#400">}}
[InvalidClientCredentials]: {{< ref "#401">}}
[Message]: {{< ref "#message" >}}
[Category]: {{< ref "#category" >}}
[Error Code]: {{< ref "#error-code" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[GmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails.MainDoc" >}}
[GmailOAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.MainDoc" >}}
[CertificatePath]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePath" >}}
[CertificatePassword]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePassword" >}}
[FromAddress]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.FromAddress" >}}
[ClientId]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.ClientId" >}}
[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}
[BasicEmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Email.BasicEmailSessionDetails.MainDoc" >}}
[EmailSessionErrorCode]: {{< url path="Cortex.Reference.DataTypes.Email.EmailSessionErrorCode.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Send Email Using SMTP Server Block]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.MainDoc" >}}
[Send Email Using Gmail Block]: {{< url path="Cortex.Reference.Blocks.GoogleWorkspace.Gmail.SendEmail.SendEmailUsingGmail.MainDoc" >}}
[Send Email Using Microsoft 365 Block]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.SendEmail.SendEmailUsingMicrosoft365.MainDoc" >}}

[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[CRL]: {{< url path="Cortex.Reference.Glossary.A-E.CRL" >}}
[SSL]: {{< url path="Cortex.Reference.Glossary.P-T.SSL" >}}
