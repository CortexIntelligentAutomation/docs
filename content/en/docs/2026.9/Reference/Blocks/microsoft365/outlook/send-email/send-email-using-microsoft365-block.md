---
title: "Send Email Using Microsoft 365"
linkTitle: "Send Email Using Microsoft 365"
description: "Sends an email through Microsoft 365 using OAuth and the Microsoft Graph sendMail API."
---

{{< figure src="/blocks/Cortex_Blocks_Microsoft365_Outlook_SendEmail_SendEmailUsingMicrosoft365Block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Microsoft365.Outlook.SendEmail.SendEmailUsingMicrosoft365Block)</p>

## Description

Authenticates with Microsoft 365 using the specified [Credentials][Credentials Property], and sends the [Email Message][Email Message Property] through the Microsoft Graph `sendMail` API for the mailbox identified by [ObjectId][ObjectId Client Credentials] in the credentials.

This block only supports authentication via OAuth (using [Microsoft365OAuthCredentials][] or [Microsoft365OAuthCertificateCredentials][]). To send an email using basic authentication, see [Send Email Using SMTP Server][].

For Entra ID app registration, API permissions, and mapping registration values to credential properties, see [Authentication][].

## Examples

### Sending an email using client credentials

This example will send an email from `sender@outlook.com` to `recipient@outlook.com` using [Microsoft365OAuthCredentials][].

For more information on:

- What each of the properties in the [Microsoft365OAuthCredentials][] needs to be, see [Microsoft365OAuthCredentials][]
- How to set up an [Outlook][] account so that this authentication mechanism can be used, see [Setting up an Outlook account for OAuth authentication using client credentials][]

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br>`new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Credentials][Credentials Property] | `($)Credentials` with value `{"ClientId": "clientId", "ClientSecret": "encryptedClientSecret", "TenantId": "tenantId", ObjectId: "objectId"}`<br><br>In this example `($)Credentials` has been set up using the following [Expression][]:<br><br> `new Microsoft365OAuthCredentials(clientId: "clientId", clientSecret: "encryptedClientSecret", tenantId: "tenantId", objectId: "objectId")` | `($)Credentials` is a variable of type [Microsoft365OAuthCredentials][]<br><br>The [ClientSecret][ClientSecret Client Credentials] property in the [Microsoft365OAuthCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |

#### Result

An email with [Normal][] priority is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`.

***

### Sending an email using certificate credentials

This example will send an email from `sender@outlook.com` to `recipient@outlook.com` using [Microsoft365OAuthCertificateCredentials][].

For this example to work correctly:

- [Credentials][Credentials Property] provided must be a [Microsoft365OAuthCertificateCredentials][]
- [CertificatePath][] must be a path pointing to a certificate accessible from the server executing the flow

For more information on:

- What each of the properties in the [Microsoft365OAuthCertificateCredentials][] needs to be, see [Microsoft365OAuthCertificateCredentials][]
- How to set up an [Outlook][] account so that this authentication mechanism can be used, see [Setting up an Outlook account for OAuth authentication using certificate credentials][]

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br>`new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Credentials][Credentials Property] | `($)Credentials` with value `{"CertificatePath": "C:\\certificate.pfx", "CertificatePassword": "encryptedPassword", "ClientId": "clientId", "TenantId": "tenantId", "ObjectId": "objectId"}`<br><br>In this example `($)Credentials` has been set up using the following [Expression][]:<br><br> `new Microsoft365OAuthCertificateCredentials(certificatePath: @"C:\certificate.pfx", certificatePassword: "encryptedPassword", clientId: "clientId", tenantId: "tenantId", objectId: "objectId")` | `($)Credentials` is a variable of type [Microsoft365OAuthCertificateCredentials][]<br><br>The [CertificatePassword][] property in the [Microsoft365OAuthCertificateCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |

#### Result

An email with [Normal][] priority is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`.

***

### Sending an email to multiple recipients

This example will send an email from `sender@outlook.com` to `recipient1@outlook.com`, `recipient2@outlook.com`, and `recipient3@outlook.com`. The [Credentials][Credentials Property] must be [Microsoft365OAuthCredentials][] configured as in [Sending an email using client credentials][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient1@outlook.com"},  {"Name":  null,  "Address":  "recipient2@outlook.com"}, {"Name": null, "Address": "recipient3@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient1@outlook.com"), new EmailAddress("recipient2@outlook.com"), new EmailAddress("recipient3@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Credentials][Credentials Property] | `($)Credentials` with the same [Microsoft365OAuthCredentials][] values as in [Sending an email using client credentials][] | `($)Credentials` is a variable of type [Microsoft365OAuthCredentials][] |

#### Result

An email with [Normal][] priority is sent from `sender@outlook.com` to `recipient1@outlook.com`, `recipient2@outlook.com`, and `recipient3@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`.

***

### Sending an email with a CC or BCC recipient

This example will send an email from `sender@outlook.com` to `recipient@outlook.com` with `cc@outlook.com` and `bcc@outlook.com` as the [CC][CC Glossary] and [BCC][BCC Glossary] recipients respectively. The [Credentials][Credentials Property] must be [Microsoft365OAuthCredentials][] configured as in [Sending an email using client credentials][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [{"Name": null, "Address": "cc@outlook.com"}], "Bcc": [{"Name": null, "Address": "bcc@outlook.com"}], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: new List<EmailAddress>(){ new EmailAddress("cc@outlook.com") }, bcc: new List<EmailAddress>(){ new EmailAddress("bcc@outlook.com") }, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority. |
| [Credentials][Credentials Property] | `($)Credentials` with the same [Microsoft365OAuthCredentials][] values as in [Sending an email using client credentials][] | `($)Credentials` is a variable of type [Microsoft365OAuthCredentials][] |

#### Result

An email with [Normal][] priority is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`. Both `cc@outlook.com` and `bcc@outlook.com` also receive copies of the email.

***

### Sending an email with a different priority

This example will send an email with [Urgent][] priority from `sender@outlook.com` to `recipient@outlook.com`. The [Credentials][Credentials Property] must be [Microsoft365OAuthCredentials][] configured as in [Sending an email using client credentials][].

For more information on:

- What priorities an email can be sent as, see [EmailMessagePriority][]
- The effect of changing the [Priority][] of the [Email Message][Email Message Property], see [How does Priority affect sending an email?][]

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": "EmailMessagePriority.Urgent", "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: EmailMessagePriority.Urgent, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [BodyFormat][] is `null`, the email will be sent with a [Text][] body. |
| [Credentials][Credentials Property] | `($)Credentials` with the same [Microsoft365OAuthCredentials][] values as in [Sending an email using client credentials][] | `($)Credentials` is a variable of type [Microsoft365OAuthCredentials][] |

#### Result

An email with [Urgent][] priority is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`.

***

### Sending an email with an HTML body

This example will send an email with an [HTML][] body from `sender@outlook.com` to `recipient@outlook.com`. The [Credentials][Credentials Property] must be [Microsoft365OAuthCredentials][] configured as in [Sending an email using client credentials][].

For more information on:

- What other body formats an email can be sent with, see [EmailMessageBodyFormat][]
- The effect of changing the [BodyFormat][] of the [Email Message][Email Message Property], see [How does BodyFormat affect sending an email?][]

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": "EmailMessageBodyFormat.Html", "Body": "<h1>Example email body</h1>", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: EmailMessageBodyFormat.Html, body: "<h1>Example email body</h1>", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] is `null`, the email will be sent with [Normal][] priority. |
| [Credentials][Credentials Property] | `($)Credentials` with the same [Microsoft365OAuthCredentials][] values as in [Sending an email using client credentials][] | `($)Credentials` is a variable of type [Microsoft365OAuthCredentials][] |

#### Result

An email with [Normal][] priority is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and an [HTML][] body of `"<h1>Example email body</h1>"`.

***

### Sending an email with a single attachment

This example will send an email with a single attachment, `attachment.txt`, from `sender@outlook.com` to `recipient@outlook.com`. The attachment is located at `C:\attachment.txt` on the server executing the flow. The [Credentials][Credentials Property] must be [Microsoft365OAuthCredentials][] configured as in [Sending an email using client credentials][].

For more information on email attachments, see [Attachments][Attachments Remarks].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": ["C:\\attachment.txt"]}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: new List<string>(){ @"C:\attachment.txt" })` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.<br><br>The [Attachments][Attachments Remarks] are added to the email by providing file paths pointing to the files to be attached to the email. |
| [Credentials][Credentials Property] | `($)Credentials` with the same [Microsoft365OAuthCredentials][] values as in [Sending an email using client credentials][] | `($)Credentials` is a variable of type [Microsoft365OAuthCredentials][] |

#### Result

An email with [Normal][] priority containing a text file attachment, `attachment.txt`, is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`.

***

### Sending an email using a forward proxy

This example will send an email from `sender@outlook.com` to `recipient@outlook.com` when outbound traffic to Microsoft Entra ID and Microsoft Graph must go through an HTTP forward proxy. The [Credentials][Credentials Property] must be [Microsoft365OAuthCredentials][] configured as in [Sending an email using client credentials][].

When [Proxy][Proxy Property] is set, both authentication (`login.microsoftonline.com`) and Graph API (`graph.microsoft.com`) traffic is routed through the proxy. Leave [Proxy][Proxy Property] unset (`null`) when no proxy is required.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | Same as in [Sending an email using client credentials][] | `($)EmailMessage` is a variable of type [EmailMessage][] |
| [Credentials][Credentials Property] | Same as in [Sending an email using client credentials][] | `($)Credentials` is a variable of type [Microsoft365OAuthCredentials][] |
| [Proxy][Proxy Property] | `($)Proxy` with value `{"ServerDetails": {"Host": "proxy.example.com", "Port": 8080, "Type": "ProxyType.Https"}, "Credentials": {"Username": "proxyUser", "Password": "encryptedProxyPassword"}}`<br><br>In this example `($)Proxy` has been set up using the following [Expression][]:<br><br>`new ProxySessionDetails(serverDetails: new ProxyServerDetails("proxy.example.com", 8080, ProxyType.Https), credentials: new ProxyUserCredentials("proxyUser", "encryptedProxyPassword"))` | `($)Proxy` is a variable of type [ProxySessionDetails][]. The [Password][] on `ProxyUserCredentials` must be [EncryptedText][]. Credentials on an unsecured proxy are ignored. See [Proxy][Proxy Property] for validation rules. |

#### Result

An email is sent from `sender@outlook.com` to `recipient@outlook.com` through the configured proxy.

***

## Properties

### Email Message

The [Email Message][Email Message Property] to send through Microsoft 365. This property contains all of the information in relation to the email to be sent, these are:

- [To][]
- [From][]
- [Cc][]
- [Bcc][]
- [Priority][]
- [Subject][]
- [BodyFormat][]
- [Body][]
- [Attachments][]

Note that if the properties [Priority][] and [BodyFormat][] are set to `null` when [creating an EmailMessage using a constructor][], the email will be sent with [Normal][] priority and with a [Text][] body.

For more detailed information on each of the properties, see [EmailMessage][].

|||
|----------|----------|
| Data Type | [EmailMessage][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [EmailMessage][] with value shown below: |

```json
{
  "To": [
    {
      "Name": null,
      "Address": ""
    }
  ],
  "From": {
    "Name": "",
    "Address": ""
  },
  "Cc": [],
  "Bcc": [],
  "Priority": "EmailMessagePriority.Normal",
  "Subject": "",
  "BodyFormat": "EmailMessageBodyFormat.Text",
  "Body": "",
  "Attachments": []
}
```

### Credentials

The [Credentials][Credentials Property] object that includes all of the information required to authenticate with Microsoft 365 and send mail on behalf of the user identified by [ObjectId][ObjectId Client Credentials]. There are two data types that can be used, which depends on the desired OAuth mechanism:

- [Microsoft365OAuthCredentials][]: Using client credentials. For information on:
  - What each of the properties in the [Microsoft365OAuthCredentials][] needs to be, see [Microsoft365OAuthCredentials][]
  - How to set up an [Outlook][] account so that this authentication mechanism can be used, see [Setting up an Outlook account for OAuth authentication using client credentials][]
- [Microsoft365OAuthCertificateCredentials][]: Using certificate credentials. For information on:
  - What each of the properties in the [Microsoft365OAuthCertificateCredentials][], see [Microsoft365OAuthCertificateCredentials][]
  - How to set up an [Outlook][] account so that this authentication mechanism can be used, see [Setting up an Outlook account for OAuth authentication using certificate credentials][]

Note that the Send Email Using Microsoft 365 block automatically handles retrieval of OAuth access tokens using the following rules:

- If an access token does not exist, a new access token will be retrieved and used when the block runs.
- If an access token already exists but is expired, a new access token will be retrieved and used when the block runs.
- If an access token already exists and is valid, it will be used when the block runs.

The [From][] address on the [Email Message][Email Message Property] must be an address the registered application is permitted to send as. The mailbox used for the Graph `sendMail` call is the user identified by [ObjectId][ObjectId Client Credentials] (decrypted when the block runs).

It is recommended to use a [Variable][] for [Credentials][Credentials Property] when it will be used across multiple Send Email Using Microsoft 365 blocks, as using a variable allows reuse of the same access token. Using a [Literal][] to set the [Credentials][Credentials Property] causes a new access token to be requested for every block execution.

The [ClientSecret][ClientSecret Client Credentials] and [CertificatePassword][] properties must be encrypted. [ClientId][ClientId Client Credentials], [TenantId][TenantId Client Credentials], and [ObjectId][ObjectId Client Credentials] may optionally be encrypted; see [EncryptedText][].

|||
|----------|----------|
| Data Type | [Microsoft365Credentials][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Microsoft365OAuthCredentials][] with value shown below: |

```json
{
  "ClientId": "",
  "ClientSecret": "",
  "TenantId": "",
  "ObjectId": "",
}
```

### Proxy

Optional HTTP forward proxy for Microsoft Entra authentication and Microsoft Graph traffic. When [Proxy][Proxy Property] is `null` or not set, no proxy is used.

When [Proxy][Proxy Property] is provided:

- `ServerDetails` (`ProxyServerDetails`) must include [Host][], [Port][], and `Type` (`ProxyType`). [Port][] must be between `1` and `65535`. The default `Type` is HTTPS when empty. SOCKS proxies are not supported.
- Optional `Credentials` (`IProxyCredentials`) authenticate to a secured proxy. When credentials are `ProxyUserCredentials`, `Username` and `Password` must not be `null` or empty; the password must be [EncryptedText][]. Credentials supplied to an unsecured proxy are ignored.
- Traffic to `login.microsoftonline.com` and `graph.microsoft.com` is routed through the proxy.

|||
|----------|----------|
| Data Type | [ProxySessionDetails][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | `null` (no proxy) |

## Exceptions

The exceptions thrown by the block can be found below:

| Name                                 | Description |
|--------------------------------------|-------------|
| [ArgumentException][]                |Thrown when [BodyFormat][] within the [Email Message][Email Message Property] is not one of the specified [EmailMessageBodyFormat][] values (e.g. `(EmailMessageBodyFormat)10`).|
| |Thrown when [Priority][] within the [Email Message][Email Message Property] is not one of the specified [EmailMessagePriority][] values (e.g. `(EmailMessagePriority)10`).|
| |Thrown when [Proxy][Proxy Property] is configured and `Type` is not a named `ProxyType` value.|
| [CryptographicException][] | Thrown when an incorrect [CertificatePath][] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when an incorrect [CertificatePassword][] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when access is denied to the file at [CertificatePath][] within [Microsoft365OAuthCertificateCredentials][]. |
| [FileNotFoundException][]            |Thrown when a non-existent file path is provided in [Attachments][] within [Email Message][Email Message Property]. |
| [HttpRequestException][] | Thrown when [Proxy][Proxy Property] is configured and the proxy host or port is unreachable, or nothing is listening on the port. |
| | Thrown when [Proxy][Proxy Property] is configured and the proxy host cannot be resolved. |
| | Thrown when [Proxy][Proxy Property] is configured against a secured proxy and proxy credentials are omitted, or the username or password is incorrect. |
| | Thrown when [Proxy][Proxy Property] `Type` is HTTPS and the proxy only accepts HTTP, or HTTP when the proxy only accepts HTTPS. |
| | Thrown when [Proxy][Proxy Property] `Type` is HTTPS and the proxy certificate fails validation. |
| [IOException][]                      |Thrown when the desired socket is held by another process; re-running the flow typically solves this. |
| [MsalException][] | Thrown when an invalid [ClientId][ClientId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| [MsalServiceException][] | Thrown when an invalid [ClientSecret][ClientSecret Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [TenantId][TenantId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [ClientId][ClientId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when an invalid [TenantId][TenantId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| [ODataError][] | Thrown when an invalid [ObjectId][ObjectId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [ObjectId][ObjectId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when trying to send an email as a user that the client application does not have rights to send as. |
| | Thrown when a recipient [Address][] in the [Email Message][Email Message Property] is not of the correct format ([RFC 5321][]). |
| [PropertyNullException][] |Thrown when the [Email Message][Email Message Property] is `null`. |
| |Thrown when the [To][] within [Email Message][Email Message Property] is `null`. |
| |Thrown when the [From][] within [Email Message][Email Message Property] is `null`. |
| |Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is `null`. |
| |Thrown when the [Credentials][Credentials Property] is `null`. |
| |Thrown when the [ClientId][ClientId Client Credentials] within [Microsoft365OAuthCredentials][] is `null`. |
| |Thrown when the [ClientSecret][ClientSecret Client Credentials] within [Microsoft365OAuthCredentials][] is `null`. |
| |Thrown when the [TenantId][TenantId Client Credentials] within [Microsoft365OAuthCredentials][] is `null`. |
| |Thrown when the [ObjectId][ObjectId Client Credentials] within [Microsoft365OAuthCredentials][] is `null`. |
| |Thrown when the [CertificatePath][] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| |Thrown when the [CertificatePassword][] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| |Thrown when the [ClientId][ClientId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| |Thrown when the [TenantId][TenantId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| |Thrown when the [ObjectId][ObjectId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| |Thrown when [Proxy][Proxy Property] is configured and `ServerDetails`, `Host`, or proxy credential properties are `null`. |
| [PropertyEmptyException][] |Thrown when the [To][] within [Email Message][Email Message Property] is empty (i.e. `[]`). |
| |Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is empty (i.e. `""`). |
| |Thrown when the [ClientId][ClientId Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
| |Thrown when the [ClientSecret][ClientSecret Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
| |Thrown when the [TenantId][TenantId Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
| |Thrown when the [ObjectId][ObjectId Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
| |Thrown when the [CertificatePath][] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| |Thrown when the [CertificatePassword][] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| |Thrown when the [ClientId][ClientId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| |Thrown when the [TenantId][TenantId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| |Thrown when the [ObjectId][ObjectId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| |Thrown when [Proxy][Proxy Property] is configured and `Host` or proxy credential string properties are empty (i.e. `""`). |
| [PropertyValueOutOfRangeException][] | Thrown when [Proxy][Proxy Property] is configured and [Port][] is below `1` or above `65535`. For more information, see [Property Is Invalid][]. |
| [UnauthorizedAccessException][]      |Thrown when access is denied to a file provided in [Attachments][] within [Email Message][Email Message Property]. |

## Remarks

### How does Priority affect sending an email?

An email sent with [Urgent][] or [NonUrgent][] priority will have its priority displayed differently depending on the email client. For example, [Outlook][] displays an email that has an [Urgent][] priority with a red exclamation mark like so:

{{< figure src="/images/send-email-using-smtp-server-important-email.png" >}}

For more information on how the priority of an email will be displayed, see the help provided by the respective email client.

### How does BodyFormat affect sending an email?

An email sent with an [HTML][] body will have its body displayed as an HTML page instead of as plain text. How the email looks in the email client may differ depending on the email client in use. For example, if the [Email Message][Email Message Property] has its [BodyFormat][] set to [HTML][] and the [Body][] has a value of:

```json
"<h1>Example header text</h1><p>Example paragraph text</p>"
```

[Outlook][] will display the email body as follows:

{{< figure src="/images/send-email-using-smtp-server-html-email.png" >}}

For more information on how the body of an email will be displayed, see the help provided by the respective email client.

### Attachments

Attachments can be sent in an email by providing a list of file paths in the [Attachments][] property of the [Email Message][Email Message Property]. Each path must point to a file accessible from the server executing the flow.

#### Supported file path formats

Each file path in the [Attachments][] within the [Email Message][Email Message Property] can be an:

- Absolute file path
- Relative file path
- UNC file path

For more information about each of these supported file path formats, see [File & Folder Paths][].

#### File paths need escaping

Each file path in the [Attachments][] within the [Email Message][Email Message Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an Invalid property value message when trying to debug the flow.

Escaping can be done in two ways:

- Escaping the `\` character with another `\` character (e.g. `"C:\\Attachments\\attachment.txt"`), or
- Prepending an `@` character before the start of the file path (e.g. `@"C:\Attachments\attachment.txt"`)

#### Attachment size limit

The combined size of all [Attachments][] within the [Email Message][Email Message Property] must be less than the limit specified by the email service provider. For [Outlook][] / Microsoft 365 mailboxes this is typically `20 MB`.

### Certificate files

[Microsoft365OAuthCertificateCredentials][] requires a [CertificatePath][] pointing to a certificate file (for example a `.pfx` file) accessible from the server executing the flow. The certificate must match the application registration in Microsoft Entra ID.

#### Supported CertificatePath formats

The [CertificatePath][] can be an absolute file path, relative file path, or UNC file path. See [File & Folder Paths][].

#### CertificatePath needs escaping

The [CertificatePath][] requires `\` characters to be escaped the same way as attachment paths.

### Recipient addresses

Every [To][], [Cc][], and [Bcc][] recipient must use an address in a valid email format ([RFC 5321][]). Microsoft 365 returns an [ODataError][] when any recipient address is invalid. A syntactically valid address that is not registered with a mail service may not cause an exception.

### OAuth access tokens

OAuth access tokens are stored on the [Credentials][Credentials Property] object. A new token is requested only when no token exists or the existing token is expired. Reuse credentials through a [Variable][] across multiple block executions to avoid unnecessary token requests.

Unlike [Send Email Using SMTP Server][] and [Send Email Using Gmail][], this block does not expose a reusable mail-server session; each execution sends mail through Microsoft Graph.

### Known Limitations

- SOCKS proxies are not supported for [Proxy][Proxy Property].
- This block supports OAuth only; use [Send Email Using SMTP Server][] for basic authentication to non-Microsoft hosts.

[Email Message Property]: {{< ref "#email-message" >}}
[Credentials Property]: {{< ref "#credentials" >}}
[Proxy Property]: {{< ref "#proxy" >}}
[Sending an email using client credentials]: {{< ref "#sending-an-email-using-client-credentials" >}}
[How does Priority affect sending an email?]: {{< ref "#how-does-priority-affect-sending-an-email" >}}
[How does BodyFormat affect sending an email?]: {{< ref "#how-does-bodyformat-affect-sending-an-email" >}}
[Attachments Remarks]: {{< ref "#attachments" >}}

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
[creating an EmailMessage using a constructor]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.CreateAnEmailMessage" >}}

[EmailAddress]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.MainDoc" >}}
[Address]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.Address" >}}

[EmailMessagePriority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.MainDoc" >}}
[Normal]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Normal" >}}
[Urgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Urgent" >}}
[NonUrgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.NonUrgent" >}}

[EmailMessageBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}
[Text]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.Text" >}}
[HTML]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.HTML" >}}

[Host]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[Microsoft365Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365Credentials.MainDoc" >}}

[Microsoft365OAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.MainDoc" >}}
[ClientId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ClientId" >}}
[ClientSecret Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ClientSecret" >}}
[TenantId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.TenantId" >}}
[ObjectId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ObjectId" >}}

[Microsoft365OAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.MainDoc" >}}
[CertificatePath]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.CertificatePath" >}}
[CertificatePassword]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.CertificatePassword" >}}
[ClientId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.ClientId" >}}
[TenantId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.TenantId" >}}
[ObjectId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.ObjectId" >}}

[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[CryptographicException]: {{< url path="MSDocs.DotNet.Api.System.Security.Cryptography.CryptographicException.MainDoc" >}}
[FileNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.IO.FileNotFoundException" >}}
[HttpRequestException]: {{< url path="MSDocs.DotNet.Api.System.Net.HttpRequestException" >}}
[IOException]: {{< url path="MSDocs.DotNet.Api.System.IO.IOException" >}}
[MsalException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Identity.Client.MsalException" >}}
[MsalServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Identity.Client.MsalServiceException.MainDoc" >}}
[ODataError]: {{< url path="MSDocs.DotNet.Api.Microsoft.Graph.Models.ODataErrors.ODataError" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyIsInvalid" >}}
[UnauthorizedAccessException]: {{< url path="MSDocs.DotNet.Api.System.UnauthorizedAccessException" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[Authentication]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.MainDoc" >}}
[Send Email Using SMTP Server]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.MainDoc" >}}
[Send Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.SendEmail.SendEmailUsingMicrosoft365.MainDoc" >}}
[ProxySessionDetails]: {{< url path="Cortex.Reference.DataTypes.Proxy.ProxySessionDetails.MainDoc" >}}
[Send Email Using Gmail]: {{< url path="Cortex.Reference.Blocks.GoogleWorkspace.Gmail.SendEmail.SendEmailUsingGmail.MainDoc" >}}

[Setting up an Outlook account for OAuth authentication using client credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpClientCredentialsOutlook" >}}
[Setting up an Outlook account for OAuth authentication using certificate credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpCertificateCredentialsOutlook" >}}

[Outlook]: {{< url path="Cortex.Reference.Glossary.K-O.Outlook" >}}
[RFC 5321]: {{< url path="IETF.Email.RFC5321" >}}
[CC Glossary]: {{< url path="Cortex.Reference.Glossary.A-E.CC" >}}
[BCC Glossary]: {{< url path="Cortex.Reference.Glossary.A-E.BCC" >}}
