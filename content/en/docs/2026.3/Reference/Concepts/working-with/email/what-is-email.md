---
title: "What is Email?"
linkTitle: "What is Email?"
description: "How flows send email over SMTP, which data types and blocks to use, and how mail-server sessions, authentication, and attachments work."
weight: 1
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **email** support focuses on **sending** messages from a [flow][] to a mail server over [SMTP][]. Flows do not talk to mail servers directly; they use send-email blocks with two pieces of configuration:

| Piece | Data type | Purpose |
| --- | --- | --- |
| Session | [BasicEmailSessionDetails][], [GmailSessionDetails][], or provider-specific credentials | How to connect and authenticate to the mail server |
| Message | [EmailMessage][] | What to send (recipients, subject, body, attachments, and related options) |

This model is similar to using [MailKit][] in C#, where an [SmtpClient][] opens a session to a mail server and sends a [MimeMessage][] built from addresses, headers, and content. {{% ctx %}} wraps that pattern in platform data types and blocks so connection handling, authentication, and message construction work consistently across supported providers.

| Term | Meaning |
| --- | --- |
| [SMTP][] | Internet protocol used to **send** email between mail servers and clients |
| [IMAP][] | Internet protocol used by email clients to **retrieve** email from a mail server |
| [EmailMessage][] | The message to send (recipients, subject, body, attachments, and so on) |
| Session details | Configuration for opening and maintaining a connection to a mail server |
| [Close Session][] | Whether the block closes the mail-server session after sending |

{{% ctx %}} currently provides blocks for sending email. Retrieving email over [IMAP][] is not supported in this release.

## Sending email

Mail servers use [SMTP][] to accept outgoing messages. In {{% ctx %}}, a [flow][] sends email by passing an [EmailMessage][] and session configuration to one of the send-email blocks below.

| Block | Session / credentials | Typical use |
| --- | --- | --- |
| [Send Email Using SMTP Server][] | [BasicEmailSessionDetails][] with [UserCredentials][] | Any [SMTP][] server that supports username and password authentication |
| [Send Email Using Gmail][] | [GmailSessionDetails][] with [UserCredentials][] or [GmailOAuthCertificateCredentials][] | [Gmail][] and Google Workspace accounts |
| [Send Email Using Microsoft 365][] | [Microsoft365OAuthCredentials][] or [Microsoft365OAuthCertificateCredentials][] | [Outlook][] / Microsoft 365 accounts (OAuth only) |

For step-by-step examples, property defaults, and block-specific exceptions, see the block pages listed above.

### Email messages

An [EmailMessage][] holds everything the block needs to construct and send a message:

| Property | Data type | Purpose |
| --- | --- | --- |
| [To][] | [IList][]&lt;[EmailAddress][]&gt; | Primary recipients (required) |
| [From][] | [EmailAddress][] | Sender (required) |
| [Cc][] | [IList][]&lt;[EmailAddress][]&gt; | [CC][Cc] recipients |
| [Bcc][] | [IList][]&lt;[EmailAddress][]&gt; | [BCC][Bcc] recipients |
| [Priority][] | [EmailMessagePriority][] | [Normal][], [NonUrgent][], or [Urgent][] |
| [Subject][] | [String][] | Message subject |
| [BodyFormat][] | [EmailMessageBodyFormat][] | [Text][] or [HTML][] body |
| [Body][] | [String][] | Message body |
| [Attachments][] | [IList][]&lt;[String][]&gt; | File paths to attach |

Each [EmailAddress][] has an [Address][] (required, must follow [RFC 5321][]) and an optional display [Name][].

When [Priority][] or [BodyFormat][] is `null` on an [EmailMessage][] created with a constructor, send blocks treat the message as [Normal][] priority with a [Text][] body. How priority and HTML display in the recipient's client depends on that client; see the remarks on [Send Email Using SMTP Server][] for examples.

### Attachments

Attachments are file paths in the [Attachments][] property. Each path must point to a file that the **server executing the flow** can read. Supported path formats include absolute, relative, and UNC paths; see [File & Folder Paths][].

Best practices:

* Store attachment files on the execution server (or on a UNC share it can access), not only on a designer machine.
* Escape backslashes in paths (for example `@"C:\Attachments\file.pdf"` or `"C:\\Attachments\\file.pdf"`).
* Keep the combined attachment size within the provider limit (for example `25 MB` for [Gmail][] and `20 MB` for [Outlook][]).

Invalid, missing, or inaccessible paths throw exceptions at runtime. For the full list of attachment validation rules, see [Send Email Using SMTP Server][].

## SSL and TLS

Session configuration includes [ServerDetails][] with [Host][], [Port][], and [UseSsl][]. The [UseSsl][] value must match how the target server expects [SSL][]/[TLS][] to be negotiated:

| Connection style | [UseSsl][] | Typical ports |
| --- | --- | --- |
| [SSL][]/[TLS][] from the start of the connection | `true` | `465` |
| [TLS][] via STARTTLS after connecting in plain text | `false` | `25`, `587` |

If [UseSsl][] does not match the server and port, the block throws an [EmailSessionException][] with error code [SslRequired][] or [SslUnsupported][]. Certificate trust, expiry, and anti-virus TLS interception can also cause connection failures; see [EmailSessionException][].

Supported [Host][] formats include fully qualified domain names, machine names, IP addresses, and `localhost`. See [Send Email Using SMTP Server][] for details.

## Authentication

Mail servers require authentication before they accept messages. {{% ctx %}} supports the mechanisms below; the exact option depends on the block and provider.

| Mechanism | Used with | Notes |
| --- | --- | --- |
| Username and password ([UserCredentials][]) | [Send Email Using SMTP Server][], [Send Email Using Gmail][] | [Password][] must be [EncryptedText][]. [Username][] may optionally be encrypted. |
| App password | [Send Email Using Gmail][] | Recommended over a plain account password; see [Setting up an app password for a Gmail account][] |
| OAuth (certificate) | [Send Email Using Gmail][] | [GmailOAuthCertificateCredentials][]; see [Setting up a Gmail account for OAuth authentication][] |
| OAuth (client credentials) | [Send Email Using Microsoft 365][] | [Microsoft365OAuthCredentials][]; see [Setting up an Outlook account for OAuth authentication using client credentials][] |
| OAuth (certificate) | [Send Email Using Microsoft 365][] | [Microsoft365OAuthCertificateCredentials][]; see [Setting up an Outlook account for OAuth authentication using certificate credentials][] |

For [Send Email Using SMTP Server][] and [Send Email Using Gmail][], the [SASL][] mechanism is negotiated with the server based on what the server supports. [Send Email Using Microsoft 365][] supports OAuth only; use [Send Email Using SMTP Server][] for basic authentication to other hosts.

Unauthenticated [SMTP][] servers are **not** supported. [BasicEmailSessionDetails][] and the SMTP send blocks require credentials today.

For setup procedures and provider-specific guidance, see [Authentication][].

## Managing connections to a mail server

Send-email blocks create, open, reuse, and close mail-server sessions based on session details, the [Close Session][] property, and how session details are supplied.

### Session details

Session details hold the [ServerDetails][] and credentials required to connect. The type must match the block:

* [BasicEmailSessionDetails][] — generic [SMTP][] servers
* [GmailSessionDetails][] — [Gmail][] [SMTP][]
* [Microsoft365OAuthCredentials][] or [Microsoft365OAuthCertificateCredentials][] — passed directly to [Send Email Using Microsoft 365][]

Create session details in the [Expression Editor][] (for example `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))`) or pass a [variable][] that already holds the session object.

### Opening sessions {#opening-sessions}

[Send Email Using SMTP Server][] and [Send Email Using Gmail][] apply these rules when they run:

* If no session exists for the supplied session details, a new session is created, opened, and used.
* If a session exists but is closed, it is opened and used.
* If a session exists and is already open, it is reused.

When session details are supplied through a [variable][], the same session can stay open across multiple send blocks if [Close Session][] is `false`. Reusing a session avoids the cost of opening a new connection on every block execution.

When session details are supplied through a [literal][] or [expression][], a new session is created each time the block runs. If [Close Session][] is `false`, that session is still closed automatically after the block finishes and before the flow ends—it cannot be shared with later blocks the way a variable-backed session can.

[Send Email Using Microsoft 365][] opens a connection per execution and does not expose a reusable session object in the same way.

For [SSL][] connections, the protocol version is negotiated with the server. For [SASL][], the authentication mechanism is negotiated with the server.

### Closing sessions {#closing-sessions}

Set [Close Session][] to `true` to close the session immediately after the message is sent.

When [Close Session][] is `false`:

* If session details were supplied through a [variable][], the session stays open until the variable goes out of [scope][] or the flow ends, whichever comes first.
* If session details were supplied through a [literal][] or [expression][], the session is closed automatically after the block finishes and before the flow ends.

For full property defaults, exceptions, and examples, see [Send Email Using SMTP Server][] and [Send Email Using Gmail][].

## Remarks

### Known limitations

#### Sending only

{{% ctx %}} supports **sending** email over [SMTP][] in this release. There are no blocks or data types for retrieving email over [IMAP][] (mailboxes, folders, read/unread status, or downloaded attachments).

#### Unauthenticated mail servers

Unauthenticated [SMTP][] servers are not supported. [BasicEmailSessionDetails][] and [Send Email Using SMTP Server][] require credentials. This limitation may be removed in a future release.

#### Provider and certificate errors

Some [EmailSessionException][] conditions (expired or untrusted certificates, anti-virus TLS interception, unavailable certificate revocation lists) share the same error code as [SslUnsupported][]. See [EmailSessionErrorCode Limitations][].

#### Attachment and address validation

Send blocks validate attachment paths and [EmailAddress][] values at runtime. Invalid addresses, oversize attachments, and file access errors surface as .NET or [MimeKit][MimeKit SmtpCommandException] exceptions; see each block's **Exceptions** section.

## See Also

### Related concepts

* [Authentication][]
* [What is a Variable?][]
* [What is a Scope?][]
* [File & Folder Paths][]

### Related data types

* [EmailMessage][]
* [EmailAddress][]
* [EmailMessagePriority][]
* [EmailMessageBodyFormat][]
* [BasicEmailSessionDetails][]
* [GmailSessionDetails][]
* [GmailOAuthCertificateCredentials][]
* [Microsoft365OAuthCredentials][]
* [Microsoft365OAuthCertificateCredentials][]
* [ServerDetails][]
* [UserCredentials][]
* [EncryptedText][]
* [EmailSessionErrorCode][]

### Related blocks

* [Send Email Using SMTP Server][]
* [Send Email Using Gmail][]
* [Send Email Using Microsoft 365][]

### Related exceptions

* [EmailSessionException][]

### External documentation

* [RFC 5321 — Simple Mail Transfer Protocol][RFC 5321]
* [MailKit documentation][MailKit]
* [MimeKit SmtpCommandException][MimeKit SmtpCommandException]
* [SmtpClient Class (MailKit)][SmtpClient]
* [MimeMessage Class (MimeKit)][MimeMessage]

[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Send Email Using SMTP Server]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.MainDoc" >}}
[Send Email Using Gmail]: {{< url path="Cortex.Reference.Blocks.GoogleWorkspace.Gmail.SendEmail.SendEmailUsingGmail.MainDoc" >}}
[Send Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.SendEmail.SendEmailUsingMicrosoft365.MainDoc" >}}

[Authentication]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.MainDoc" >}}
[Setting up an app password for a Gmail account]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpAppPassword" >}}
[Setting up a Gmail account for OAuth authentication]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpOAuthGmail" >}}
[Setting up an Outlook account for OAuth authentication using client credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpClientCredentialsOutlook" >}}
[Setting up an Outlook account for OAuth authentication using certificate credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpCertificateCredentialsOutlook" >}}

[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is a Scope?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.WhatIsAScope.MainDoc" >}}
[scope]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.WhatIsAScope.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[EmailMessage]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.MainDoc" >}}
[To]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.To" >}}
[From]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.From" >}}
[Cc]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Cc" >}}
[Bcc]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Bcc" >}}
[Priority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Priority" >}}
[Subject]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Subject" >}}
[BodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.BodyFormat" >}}
[Body]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Body" >}}
[Attachments]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Attachments" >}}

[EmailAddress]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.MainDoc" >}}
[Address]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.Address" >}}
[Name]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.Name" >}}

[EmailMessagePriority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.MainDoc" >}}
[Normal]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Normal" >}}
[NonUrgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.NonUrgent" >}}
[Urgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Urgent" >}}

[EmailMessageBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}
[Text]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.Text" >}}
[HTML]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.HTML" >}}

[BasicEmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Email.BasicEmailSessionDetails.MainDoc" >}}
[GmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails.MainDoc" >}}
[GmailOAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.MainDoc" >}}
[Microsoft365OAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.MainDoc" >}}
[Microsoft365OAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.MainDoc" >}}

[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}

[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[EmailSessionException]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.MainDoc" >}}
[SslRequired]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.SslRequired" >}}
[SslUnsupported]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.SslUnsupported" >}}
[EmailSessionErrorCode]: {{< url path="Cortex.Reference.DataTypes.Email.EmailSessionErrorCode.MainDoc" >}}
[EmailSessionErrorCode Limitations]: {{< url path="Cortex.Reference.DataTypes.Email.EmailSessionErrorCode.Limitations" >}}

[Close Session]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.CloseSessionProperty" >}}

[SMTP]: {{< url path="Cortex.Reference.Glossary.P-T.SMTP" >}}
[IMAP]: {{< url path="Cortex.Reference.Glossary.F-J.IMAP" >}}
[SASL]: {{< url path="Cortex.Reference.Glossary.P-T.SASL" >}}
[SSL]: {{< url path="Cortex.Reference.Glossary.P-T.SSL" >}}
[TLS]: {{< url path="Cortex.Reference.Glossary.P-T.TLS" >}}
[Gmail]: {{< url path="Cortex.Reference.Glossary.F-J.Gmail" >}}
[Outlook]: {{< url path="Cortex.Reference.Glossary.K-O.Outlook" >}}
[RFC 5321]: {{< url path="IETF.Email.RFC5321" >}}

[MailKit]: http://www.mimekit.net/docs/html/N_MailKit.htm
[SmtpClient]: http://www.mimekit.net/docs/html/T_MailKit_Net_Smtp_SmtpClient.htm
[MimeMessage]: http://www.mimekit.net/docs/html/T_MimeKit_MimeMessage.htm
[MimeKit SmtpCommandException]: {{< url path="MimeKit.Docs.SmtpCommandException" >}}
