---
title: "Send Email Using Microsoft 365"
linkTitle: "Send Email Using Microsoft 365"
description: "Sends an email using the SMTP server hosted by Outlook."
---

{{< figure src="/blocks/microsoft365-send-email-using-microsoft365-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Microsoft365.Outlook.SendEmail.SendEmailUsingMicrosoft365Block)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future; this will include further examples and remarks.{{% /alert %}}

## Description

Connects to the [SMTP][] server hosted by [Outlook][] using the specified [Credentials][Credentials Property], and sends an [Email Message][Email Message Property].

This block only supports authentication via OAuth (using [Microsoft365OAuthCredentials][] or [Microsoft365OAuthCertificateCredentials][]), to send an email using basic authentication, see [Send Email Using SMTP Server][].

## Examples

### Sending an email using client credentials

This example will send an email from `sender@outlook.com` to `recipient@outlook.com` using the [SMTP][] server hosted by [Outlook][].

The OAuth mechanism in this example uses client credentials. Therefore, for this example to work correctly, the [Credentials][Credentials Property] provided must be a [Microsoft365OAuthCredentials][].

For more information on:

- What each of the properties in the [Microsoft365OAuthCredentials][] needs to be, see [Microsoft365OAuthCredentials][]
- How to set up an [Outlook][] account so that this authentication mechanism can be used, see [Setting up an Outlook account for OAuth authentication using client credentials][]

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br>`new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Credentials][Credentials Property] | `($)Credentials` with value `{"ClientId": "clientId", "ClientSecret": "encryptedClientSecret", "TenantId": "tenantId", ObjectId: "objectId"}`<br><br>In this example `($)Credentials` has been set up using the following [Expression][]:<br><br> `new Microsoft365OAuthCredentials(clientId: "clientId", clientSecret: "encryptedClientSecret", tenantId: "tenantId", objectId: "objectId")` | `($)Credentials` is a variable of type [Microsoft365OAuthCredentials][]<br><br>The [ClientSecret][ClientSecret Client Credentials] property in the [Microsoft365OAuthCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |

#### Result

An email with [Normal][] priority is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the connection is closed.

***

### Sending an email using certificate credentials

This example will send an email from `sender@outlook.com` to `recipient@outlook.com` using the [SMTP][] server hosted by [Outlook][].

The OAuth mechanism in this example uses certificate credentials. Therefore, for this example to work correctly:

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

An email with [Normal][] priority is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the connection is closed.

***

## Properties

### Email Message

The [Email Message][Email Message Property] to send via the [SMTP][] server hosted by [Outlook][]. This property contains all of the information in relation to the email to be sent, these are:

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

The [Credentials][Credentials Property] object that includes all of the information required to connect to an [SMTP][] server hosted by [Outlook][]. There are two data types that can be used, which depends on the desired OAuth mechanism:

- [Microsoft365OAuthCredentials][]: Using client credentials. For information on:
  - What each of the properties in the [Microsoft365OAuthCredentials][] needs to be, see [Microsoft365OAuthCredentials][]
  - How to set up an [Outlook][] account so that this authentication mechanism can be used, see [Setting up an Outlook account for OAuth authentication using client credentials][]
- [Microsoft365OAuthCertificateCredentials][]: Using certificate credentials. For information on:
  - What each of the properties in the [Microsoft365OAuthCertificateCredentials][], see [Microsoft365OAuthCertificateCredentials][]
  - How to set up an [Outlook][] account so that this authentication mechanism can be used, see [Setting up an Outlook account for OAuth authentication using certificate credentials][]

Note that the Send Email Using Microsoft 365 block automatically handles retrieval of access tokens using the following rules:

- If an access token does not exist, a new access token will be retrieved and used when the block runs.
- If an access token already exists but is expired, a new access token will be retrieved and used when the block runs.
- If an access token already exists and is valid, it will be used when the block runs.

It is recommended to use a [Variable][] for [Credentials][Credentials Property] when it will be used across multiple Send Email Using Microsoft 365 blocks, as using a variable will allow for reuse of the same access token. Using a [Literal][] to set the [Credentials][Credentials Property] will cause the access token to only be used once and a new acccess token will be requested for every Send Email Using Microsoft 365 block.

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

## Exceptions

The exceptions thrown by the block can be found below:

| Name                                 | Description |
|--------------------------------------|-------------|
| [ArgumentException][]                |Thrown when [BodyFormat][] within the [Email Message][Email Message Property] is not one of the specified [EmailMessageBodyFormat][] values (e.g. `(EmailMessageBodyFormat)10`).|
| |Thrown when [Priority][] within the [Email Message][Email Message Property] is not one of the specified [EmailMessagePriority][] values (e.g. `(EmailMessagePriority)10`).|
| [CryptographicException][] | Thrown when an incorrect [CertificatePath][] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when an incorrect [CertificatePassword][] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| [FileNotFoundException][]            |Thrown when a non-existent file path is provided in [Attachments][] within [Email Message][Email Message Property]. |
| [IOException][]                      |Thrown when the desired socket is held by another process; re-running the flow typically solves this. |
| [MsalServiceException][] | Thrown when an invalid [ClientId][ClientId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [ClientSecret][ClientSecret Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [TenantId][TenantId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [ClientId][ClientId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when an invalid [TenantId][TenantId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| [PropertyNullException][] |Thrown when the [Email Message][Email Message Property]  is `null`. |
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
| [ServiceException][] | Thrown when an invalid [ObjectId][ObjectId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [ObjectId][ObjectId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when trying to send an email as a user that the client application does not have rights to send as. |
| | Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is not of the correct format ([RFC 5321][]). |
| [UnauthorizedAccessException][]      |Thrown when access is denied to a file provided in [Attachments][] within [Email Message][Email Message Property]. |

## Remarks

### Known Limitations

None

[Email Message Property]: {{< ref "#email-message" >}}
[Credentials Property]: {{< ref "#credentials" >}}

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

[EmailMessageBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}
[Text]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.Text" >}}

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
[IOException]: {{< url path="MSDocs.DotNet.Api.System.IO.IOException" >}}
[MsalServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Identity.Client.MsalServiceException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Graph.ServiceException.MainDoc" >}}
[UnauthorizedAccessException]: {{< url path="MSDocs.DotNet.Api.System.UnauthorizedAccessException" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.UsingVariables.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[Send Email Using SMTP Server]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.MainDoc" >}}

[Setting up an Outlook account for OAuth authentication using client credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpClientCredentialsOutlook" >}}
[Setting up an Outlook account for OAuth authentication using certificate credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpCertificateCredentialsOutlook" >}}

[SMTP]: {{< url path="Cortex.Reference.Glossary.P-T.SMTP" >}}
[Outlook]: {{< url path="Cortex.Reference.Glossary.K-O.Outlook" >}}
[RFC 5321]: {{< url path="IETF.Email.RFC5321" >}}
