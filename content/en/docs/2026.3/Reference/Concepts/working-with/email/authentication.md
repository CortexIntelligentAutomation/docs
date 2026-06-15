---
title: "Authentication"
linkTitle: "Authentication"
description: "How to configure authentication when sending email from flows, including Gmail app passwords, Gmail OAuth, and Microsoft 365 OAuth."
weight: 2
---

# {{% param title %}}

## Summary

Mail servers require authentication before they accept outgoing messages. In {{% ctx %}}, the send-email block you use determines which credentials data type to configure:

| Block | Credentials data type | Authentication |
| --- | --- | --- |
| [Send Email Using SMTP Server][] | [UserCredentials][] in [BasicEmailSessionDetails][] | Username and password ([SASL][] negotiated with the server) |
| [Send Email Using Gmail][] | [UserCredentials][] or [GmailOAuthCertificateCredentials][] in [GmailSessionDetails][] | Basic (app password recommended) or OAuth (two-legged) |
| [Send Email Using Microsoft 365][] | [Microsoft365OAuthCredentials][] or [Microsoft365OAuthCertificateCredentials][] | OAuth only (client credentials or certificate) |

Sensitive values such as [Password][], client secrets, and certificate passwords must be stored as [EncryptedText][]. Some credential properties may optionally use [EncryptableText][].

Unauthenticated [SMTP][] servers are not supported. For an overview of sessions, [SSL][]/[TLS][], and connection reuse, see [What is Email?][].

## Overview

The sections below describe how to prepare provider accounts and map registration details to {{% ctx %}} credential properties. After setup, pass the credentials to the appropriate send-email block as shown in the block reference pages.

### Setting up an app password for a Gmail account {#setting-up-app-password}

Use an app password when [Send Email Using Gmail][] authenticates with [UserCredentials][] inside [GmailSessionDetails][].

{{% alert title="Note" %}}
Gmail does not allow most accounts to send mail with a normal account password. Sending with a username and password currently works only for Google Workspace accounts that still have access enabled for {{< ahref path="Google.Authentication.LessSecureApps.MainDoc" title="less secure apps" >}}. For other accounts, use an **app password** or [OAuth](#setting-up-oauth-gmail).
{{% /alert %}}

#### Prerequisites

* A [Gmail][] or Google Workspace account that will send mail.
* Two-step verification enabled on the Google account (required before Google allows app passwords).

#### Create an app password

1. Sign in to the Google account and open **Google Account** > **Security**.
1. Under **How you sign in to Google**, confirm **2-Step Verification** is turned on.
1. Open **App passwords** (this option appears only after 2-step verification is enabled).
1. Select **Mail** (or the app type your administrator recommends) and the device or custom name for {{% ctx %}}.
1. Click **Create** and copy the generated password. Google shows it only once.

For current Google guidance, see [Sign in with app passwords][].

#### Use the app password in {{% ctx %}}

1. Create [GmailSessionDetails][] with [UserCredentials][]:
   * [Username][] — the full email address of the sending account (for example `sender@gmail.com`). This value may optionally be encrypted.
   * [Password][] — the app password from the steps above, stored as [EncryptedText][].
1. Set [ServerDetails][] for [Gmail][] [SMTP][] (typically host `smtp.gmail.com`, port `465` with [UseSsl][] `true`, or port `587` with [UseSsl][] `false`).
1. Pass the session details to [Send Email Using Gmail][].

Example expression:

```csharp
new GmailSessionDetails(
    serverDetails: new ServerDetails("smtp.gmail.com", 465, true),
    credentials: new UserCredentials("sender@gmail.com", "encryptedAppPassword"))
```

The [Domain][] property on [UserCredentials][] is ignored by [Send Email Using Gmail][].

### Setting up a Gmail account for OAuth authentication {#setting-up-oauth-gmail}

Use OAuth when [Send Email Using Gmail][] authenticates with [GmailOAuthCertificateCredentials][] inside [GmailSessionDetails][]. The flow is often called **two-legged OAuth**: a service account obtains access without an interactive user sign-in.

{{% alert title="Note" %}}
OAuth for {{< ahref path="Cortex.Reference.Glossary.F-J.Gmail" title="Gmail" >}} requires a Google Workspace domain. Consumer `@gmail.com` accounts cannot use this mechanism.
{{% /alert %}}

#### Prerequisites

Before OAuth works in a flow:

* A client application (Google Cloud project) must be set up in the Google Workspace.
* A **service account** must be created for that project.
* A private key (`.p12` file) must be generated for the service account.
* A Google Workspace administrator must grant the client application **domain-wide delegation** for the scope `https://mail.google.com/`.

#### Configure Google Cloud and Workspace

1. In [Google Cloud Console][], create or select a project for mail integration.
1. Enable the **Gmail API** for the project.
1. Create a **service account** ( **IAM & Admin** > **Service Accounts** > **Create service account**).
1. On the service account, open **Keys** > **Add key** > **Create new key**, choose **P12**, and download the key file. Note the key password Google provides.
1. Copy the service account **Client ID** (numeric); domain-wide delegation uses this value.
1. In [Google Workspace Admin console][], open **Security** > **Access and data control** > **API controls** > **Domain-wide delegation** > **Manage Domain Wide Delegation**.
1. Add a new API client with:
   * **Client ID** — the service account client ID from step 5.
   * **OAuth scopes** — `https://mail.google.com/`
1. Save the delegation entry.

Place the `.p12` file on the **server that executes the flow** (or on a UNC path that server can read). See [File & Folder Paths][] and [Certificate Files][] on [Send Email Using Gmail][].

#### Map registration values to GmailOAuthCertificateCredentials

After setup, map Google registration data to [GmailOAuthCertificateCredentials][] properties:

| Property | Source |
| --- | --- |
| [CertificatePath][] | Path to the downloaded `.p12` file on the execution server |
| [CertificatePassword][] | Password for the `.p12` file ([EncryptedText][]) |
| [FromAddress][] | Email address of the mailbox that sends mail (must belong to the Workspace domain) |
| [ClientId][] | Client ID of the service account (may optionally be encrypted) |

Example expression:

```csharp
new GmailSessionDetails(
    serverDetails: new ServerDetails("smtp.gmail.com", 465, true),
    credentials: new GmailOAuthCertificateCredentials(
        certificatePath: @"C:\Certificates\gmail-service-account.p12",
        certificatePassword: "encryptedCertificatePassword",
        fromAddress: "sender@example.com",
        clientId: "123456789012345678901"))
```

For property details and validation errors, see [GmailOAuthCertificateCredentials][] and [EmailSessionException][].

### Setting up an Outlook account for OAuth authentication using client credentials {#setting-up-client-credentials-outlook}

Use client credentials when [Send Email Using Microsoft 365][] receives [Microsoft365OAuthCredentials][] as its [Credentials][] property. The block retrieves OAuth access tokens automatically and connects to the [Outlook][] [SMTP][] server.

{{% alert title="Note" %}}
Register and configure the application in Microsoft Entra ID (Azure AD) before using these credentials in a flow. An account with permission to create app registrations and grant admin consent is required.
{{% /alert %}}

#### Register an application in Microsoft Entra ID

1. Sign in to [Microsoft Entra admin center][] and open **Identity** > **Applications** > **App registrations** > **New registration**.
1. Enter a name for the application and select the supported account type for your tenant.
1. Click **Register** and note:
   * **Application (client) ID** — maps to [ClientId M365][].
   * **Directory (tenant) ID** — maps to [TenantId M365][].
1. Open **Certificates & secrets** > **Client secrets** > **New client secret**. Copy the secret **Value** when shown; it maps to [ClientSecret M365][] ([EncryptedText][]).
1. Open **API permissions** > **Add a permission** > **Microsoft Graph** > **Application permissions**.
1. Add the permissions required for your tenant to send mail as the application (commonly **Mail.Send**). Grant **admin consent** for the tenant.
1. Open **Enterprise applications**, locate the registered app, open **Properties**, and set **Assignment required?** according to your organization's policy if users must be assigned to the app.

#### Identify the sending user Object ID

[ObjectId M365][] is the Microsoft Entra **Object ID** of the user whose mailbox sends mail. To find it:

1. In Microsoft Entra admin center, open **Identity** > **Users** > **All users**.
1. Select the sending user and copy **Object ID**.

The [From][] address on the [EmailMessage][] must be an address the application is permitted to send as. If the application lacks permission, [Send Email Using Microsoft 365][] throws a [ServiceException][].

#### Use Microsoft365OAuthCredentials in {{% ctx %}}

Create [Microsoft365OAuthCredentials][] with the values collected above:

| Property | Source |
| --- | --- |
| [ClientId M365][] | Application (client) ID |
| [ClientSecret M365][] | Client secret value ([EncryptedText][]) |
| [TenantId M365][] | Directory (tenant) ID |
| [ObjectId M365][] | Object ID of the sending user |

Example expression:

```csharp
new Microsoft365OAuthCredentials(
    clientId: "clientId",
    clientSecret: "encryptedClientSecret",
    tenantId: "tenantId",
    objectId: "objectId")
```

Use a [variable][] for [Credentials][] when the same token should be reused across multiple [Send Email Using Microsoft 365][] blocks. See [Microsoft365OAuthCredentials][] for full property documentation.

To send using basic username and password against a non-Microsoft host, use [Send Email Using SMTP Server][] instead.

### Setting up an Outlook account for OAuth authentication using certificate credentials {#setting-up-certificate-credentials-outlook}

Use certificate credentials when [Send Email Using Microsoft 365][] receives [Microsoft365OAuthCertificateCredentials][] as its [Credentials][] property. This replaces the client secret with an X.509 certificate uploaded to the app registration.

#### Register an application and upload a certificate

1. Complete app registration in Microsoft Entra ID as in [client credentials setup][], through API permissions and admin consent.
1. Instead of (or in addition to) a client secret, open **Certificates & secrets** > **Certificates** > **Upload certificate**.
1. Upload a `.cer` or `.pfx` certificate and note any password used when exporting the private key.
1. Record **Application (client) ID**, **Directory (tenant) ID**, and the sending user's **Object ID** as for client credentials.

#### Map registration values to Microsoft365OAuthCertificateCredentials

| Property | Source |
| --- | --- |
| [CertificatePath M365][] | Path to the `.pfx` (or appropriate) certificate file on the execution server |
| [CertificatePassword M365][] | Password for the certificate file ([EncryptedText][]) |
| [ClientId M365 cert][] | Application (client) ID |
| [TenantId M365 cert][] | Directory (tenant) ID |
| [ObjectId M365 cert][] | Object ID of the sending user |

Example expression:

```csharp
new Microsoft365OAuthCertificateCredentials(
    certificatePath: @"C:\Certificates\outlook-app.pfx",
    certificatePassword: "encryptedCertificatePassword",
    clientId: "clientId",
    tenantId: "tenantId",
    objectId: "objectId")
```

The certificate file must be readable from the server executing the flow. Invalid paths or passwords surface as [CryptographicException][] or [MsalServiceException][]; see [Send Email Using Microsoft 365][].

## Remarks

### Encrypting secrets

Store passwords, client secrets, and certificate passwords as [EncryptedText][] before using them in credential constructors or literals. See [EncryptedText][] for how to encrypt values in {{% ctx %}}.

### Reusing credentials across blocks

* [Send Email Using Gmail][] and [Send Email Using SMTP Server][] can reuse open [SMTP][] sessions when session details are supplied through a [variable][] and [Close Session][] is `false`.
* [Send Email Using Microsoft 365][] caches OAuth access tokens on the [Credentials][] object. Using a [variable][] for credentials allows token reuse across multiple blocks in the same flow.

### Known limitations

* **Unauthenticated SMTP** — [BasicEmailSessionDetails][] and [Send Email Using SMTP Server][] require credentials; anonymous SMTP is not supported.
* **Gmail username and password** — Plain account passwords are deprecated by Google; app passwords or OAuth are recommended. See [Less Secure Apps][].
* **Gmail OAuth** — Requires Google Workspace and domain-wide delegation; consumer Gmail accounts are not supported for [GmailOAuthCertificateCredentials][].
* **Microsoft 365 OAuth only** — [Send Email Using Microsoft 365][] does not support [UserCredentials][]; use [Send Email Using SMTP Server][] for basic authentication to other hosts.

## See Also

### Related concepts

* [What is Email?][]
* [File & Folder Paths][]

### Related data types

* [BasicEmailSessionDetails][]
* [GmailSessionDetails][]
* [GmailOAuthCertificateCredentials][]
* [Microsoft365OAuthCredentials][]
* [Microsoft365OAuthCertificateCredentials][]
* [UserCredentials][]
* [EncryptedText][]

### Related blocks

* [Send Email Using SMTP Server][]
* [Send Email Using Gmail][]
* [Send Email Using Microsoft 365][]

### Related exceptions

* [EmailSessionException][]
* [MsalServiceException][]
* [ServiceException][]

### External documentation

* [Less Secure Apps][]
* [Sign in with app passwords][]
* [Google Cloud Console][]
* [Google Workspace Admin console][]
* [Microsoft Entra admin center][]

[client credentials setup]: {{< ref "#setting-up-client-credentials-outlook" >}}
[What is Email?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.WhatIsEmail.MainDoc" >}}

[Send Email Using SMTP Server]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.MainDoc" >}}
[Send Email Using Gmail]: {{< url path="Cortex.Reference.Blocks.GoogleWorkspace.Gmail.SendEmail.SendEmailUsingGmail.MainDoc" >}}
[Send Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.SendEmail.SendEmailUsingMicrosoft365.MainDoc" >}}
[Certificate Files]: {{< url path="Cortex.Reference.Blocks.GoogleWorkspace.Gmail.SendEmail.SendEmailUsingGmail.MainDoc" >}}#certificate-files
[Close Session]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.CloseSessionProperty" >}}

[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[BasicEmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Email.BasicEmailSessionDetails.MainDoc" >}}
[GmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails.MainDoc" >}}
[GmailOAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.MainDoc" >}}
[Microsoft365OAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.MainDoc" >}}
[Microsoft365OAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.MainDoc" >}}

[CertificatePath]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePath" >}}
[CertificatePassword]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePassword" >}}
[FromAddress]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.FromAddress" >}}
[ClientId]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.ClientId" >}}

[ClientId M365]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ClientId" >}}
[ClientSecret M365]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ClientSecret" >}}
[TenantId M365]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.TenantId" >}}
[ObjectId M365]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ObjectId" >}}
[ClientId M365 cert]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.ClientId" >}}
[TenantId M365 cert]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.TenantId" >}}
[ObjectId M365 cert]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.ObjectId" >}}
[CertificatePath M365]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.CertificatePath" >}}
[CertificatePassword M365]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.CertificatePassword" >}}

[EmailMessage]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.MainDoc" >}}
[From]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.From" >}}
[Credentials]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.SendEmail.SendEmailUsingMicrosoft365.MainDoc" >}}#credentials

[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[UseSsl]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}
[Domain]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}

[EmailSessionException]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.MainDoc" >}}
[MsalServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Identity.Client.MsalServiceException.MainDoc" >}}
[ServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Graph.ServiceException.MainDoc" >}}
[CryptographicException]: {{< url path="MSDocs.DotNet.Api.System.Security.Cryptography.CryptographicException.MainDoc" >}}

[SMTP]: {{< url path="Cortex.Reference.Glossary.P-T.SMTP" >}}
[SASL]: {{< url path="Cortex.Reference.Glossary.P-T.SASL" >}}
[SSL]: {{< url path="Cortex.Reference.Glossary.P-T.SSL" >}}
[TLS]: {{< url path="Cortex.Reference.Glossary.P-T.TLS" >}}
[Gmail]: {{< url path="Cortex.Reference.Glossary.F-J.Gmail" >}}
[Outlook]: {{< url path="Cortex.Reference.Glossary.K-O.Outlook" >}}

[Less Secure Apps]: {{< url path="Google.Authentication.LessSecureApps.MainDoc" >}}
[Sign in with app passwords]: https://support.google.com/accounts/answer/185833
[Google Cloud Console]: https://console.cloud.google.com/
[Google Workspace Admin console]: https://admin.google.com/
[Microsoft Entra admin center]: https://entra.microsoft.com/
