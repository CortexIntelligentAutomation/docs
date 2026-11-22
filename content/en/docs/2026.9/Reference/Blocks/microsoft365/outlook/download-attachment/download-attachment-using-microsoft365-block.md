---
title: "Download Attachment Using Microsoft 365"
linkTitle: "Download Attachment Using Microsoft 365"
description: "Downloads one Outlook attachment into a folder."
---

{{< figure src="/blocks/Cortex_Blocks_Microsoft365_Outlook_DownloadAttachment_DownloadAttachmentUsingMicrosoft365Block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentUsingMicrosoft365Block)</p>

## Description

Downloads the attachment with the specified [Attachment Id][AttachmentId Property] from the email with the specified [Message Id][MessageId Property], saving it into [Destination Folder Path][DestinationFolderPath Property] and authenticating with the provided [Credentials][Credentials Property].

[Message Id][MessageId Property] and [Attachment Id][AttachmentId Property] come from an [OutlookEmail][] and its [OutlookAttachment][] metadata. The block sets [File Path][FilePath Property] to the path the file was saved to. To download several attachments, use [Download Attachments Using Microsoft 365][].

A [File][] attachment is saved under its file name. An [Item][] attachment is saved as an `.eml`, `.ics` or `.vcf` file, chosen from the content. A [Reference][] attachment is a link to a file held elsewhere and cannot be downloaded.

## Examples

### Save one attachment

#### Properties

| Property | Value | Notes |
|--------------------|---------------------------|------------------------------------------|
| [Message Id][MessageId Property] | `($)MessageId` | The [Id][] of the email. |
| [Attachment Id][AttachmentId Property] | `($)AttachmentId` | The [Id][Attachment Id] of an [OutlookAttachment][] whose [Is Downloadable][] is `true`. |
| [Destination Folder Path][DestinationFolderPath Property] | `@"C:\Attachments"` | The folder is created when it does not exist. See [File & Folder Paths][]. |
| [Overwrite][Overwrite Property] | `null` | A file that already has the attachment's name is kept, and the attachment is saved as `name (1).ext`. |
| [Credentials][Credentials Property] | `($)Credentials` | |
| [File Path][FilePath Property] | `($)FilePath`, with no value | Set to the path of the saved file. |

#### Result

The attachment `invoice.pdf` is saved under `C:\Attachments`. `($)FilePath` is set to:

```
C:\Attachments\invoice.pdf
```

***

## Properties

### Message Id

The identifier of the email holding the attachment.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)MessageId` with no value |

### Attachment Id

The identifier of the attachment to download.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)AttachmentId` with no value |

### Destination Folder Path

The path of the folder to save the attachment into. The folder is created when it does not exist. For the supported path formats, see [File & Folder Paths][].

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `""`) |

### Overwrite

What happens when a file with the attachment's name already exists.

- `null` keeps the existing file and saves the attachment as `name (1).ext`, then `name (2).ext`, and so on. A folder with that name counts as taken too.
- `true` replaces the existing file. A read-only or hidden file is not replaced. A folder with the attachment's name is not replaced.
- `false` throws when the file already exists.

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[Boolean][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Mailbox

The mailbox holding the email. An empty or `null` value uses the mailbox of the user in [Object Id][ObjectId Client Credentials] on the credentials.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Credentials

The credentials used to authenticate with Microsoft 365. Either [Microsoft365OAuthCredentials][] or [Microsoft365OAuthCertificateCredentials][].

The block retrieves an access token when one does not exist or has expired, and reuses a valid token already held by the credentials object. Store the credentials in a [Variable][] when several Microsoft 365 blocks should share a token. A [Literal][] is evaluated again for every block, so each block requests its own token.

For how to set up the application registration, see [Setting up an Outlook account for OAuth authentication using client credentials][] or [Setting up an Outlook account for OAuth authentication using certificate credentials][].

| | |
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

Optional HTTP forward proxy for Microsoft 365 authentication and Graph API traffic. `null` sends the traffic directly.

| | |
|----------|----------|
| Data Type | [ProxySessionDetails][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### File Path

The path of the file the attachment was saved to.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FilePath` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when the attachment cannot be downloaded because its [Attachment Type][] is [Reference][]. |
| | Thrown when the attachment cannot be downloaded because its [Attachment Type][] is [Unknown][]. |
| | Thrown when [Proxy][Proxy Property] is set and its type is not a named [ProxyType][] value. |
| [CryptographicException][] | Thrown when an incorrect [Certificate Path][] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when an incorrect [Certificate Password][] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| [HttpRequestException][] | Thrown when [Proxy][Proxy Property] is set and the proxy host or port is unreachable, or nothing is listening on the port. |
| | Thrown when [Proxy][Proxy Property] is set and the proxy host cannot be resolved. |
| | Thrown when [Proxy][Proxy Property] is set against a secured proxy and the proxy credentials are omitted, or the username or password is incorrect. |
| | Thrown when [Proxy][Proxy Property] type is HTTPS and the proxy only accepts HTTP, or the type is HTTP and the proxy only accepts HTTPS. |
| | Thrown when [Proxy][Proxy Property] type is HTTPS and the proxy certificate fails validation. |
| [InvalidPathException][] | The [Destination Folder Path][DestinationFolderPath Property] points to a file. |
|                              | The [Destination Folder Path][DestinationFolderPath Property] contains leading spaces. |
|                              | The [Destination Folder Path][DestinationFolderPath Property] contains only whitespace, or the NUL character (i.e. `\0`), or contains one or more invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`) in any file or folder names. |
|                              | The [Destination Folder Path][DestinationFolderPath Property] exceeds the system-defined maximum length (typically 32,767 characters). |
| [MsalServiceException][] | Thrown when an invalid [Client Id][ClientId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Client Secret][ClientSecret Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Tenant Id][TenantId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Client Id][ClientId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when an invalid [Tenant Id][TenantId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| [ODataError][] | Thrown when no email with [Message Id][MessageId Property] exists in the mailbox. |
| | Thrown when the email has no attachment with [Attachment Id][AttachmentId Property]. |
| | Thrown when [Message Id][MessageId Property] is not a valid identifier. |
| | Thrown when [Attachment Id][AttachmentId Property] is not a valid identifier. |
| | Thrown when [Mailbox][Mailbox Property] does not exist. |
| | Thrown when an invalid [Object Id][ObjectId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Object Id][ObjectId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when the client application does not have rights to read mail on behalf of the user in the credentials, or in [Mailbox][Mailbox Property]. |
| [OperationFailedException][] | The [Destination Folder Path][DestinationFolderPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The network name in the [Destination Folder Path][DestinationFolderPath Property] is unknown. |
|                              | There is not enough space to save the attachment. |
|                              | The file the attachment would be saved to is in use by another application. |
|                              | A file with the attachment's name already exists and [Overwrite][Overwrite Property] is `false`. |
|                              | The attachment's file name is longer than 255 characters. |
|                              | An unexpected error occurs when saving the attachment. |
|                              | The user the flow is executing as does not have the required permissions to create the [Destination Folder Path][DestinationFolderPath Property]. |
|                              | The user the flow is executing as does not have the required permissions to write the attachment into the [Destination Folder Path][DestinationFolderPath Property]. |
|                              | A file with the attachment's name already exists, is read-only, and [Overwrite][Overwrite Property] is `true`. |
|                              | A file with the attachment's name already exists, is hidden, and [Overwrite][Overwrite Property] is `true`. |
|                              | A folder with the attachment's name already exists in the [Destination Folder Path][DestinationFolderPath Property]. |
| [PropertyEmptyException][] | Thrown when [Message Id][MessageId Property] is empty (i.e. `""`). |
| | Thrown when [Attachment Id][AttachmentId Property] is empty (i.e. `""`). |
| | Thrown when [Destination Folder Path][DestinationFolderPath Property] is empty (i.e. `""`). |
| | Thrown when the [Client Id][ClientId Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
| | Thrown when the [Client Secret][ClientSecret Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
| | Thrown when the [Tenant Id][TenantId Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
| | Thrown when the [Object Id][ObjectId Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
| | Thrown when the [Certificate Path][] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| | Thrown when the [Certificate Password][] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| | Thrown when the [Client Id][ClientId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| | Thrown when the [Tenant Id][TenantId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| | Thrown when the [Object Id][ObjectId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is empty (i.e. `""`). |
| | Thrown when [Proxy][Proxy Property] is set and its [host][Host] is empty (i.e. `""`). |
| | Thrown when [Proxy][Proxy Property] is set and its credentials are [ProxyUserCredentials][] and the [username][Username] is empty (i.e. `""`). |
| | Thrown when [Proxy][Proxy Property] is set and its credentials are [ProxyUserCredentials][] and the [password][Password] is empty (i.e. `""`). |
| [PropertyNullException][] | Thrown when [Message Id][MessageId Property] is `null`. |
| | Thrown when [Attachment Id][AttachmentId Property] is `null`. |
| | Thrown when [Destination Folder Path][DestinationFolderPath Property] is `null`. |
| | Thrown when [Credentials][Credentials Property] is `null`. |
| | Thrown when the [Client Id][ClientId Client Credentials] within [Microsoft365OAuthCredentials][] is `null`. |
| | Thrown when the [Client Secret][ClientSecret Client Credentials] within [Microsoft365OAuthCredentials][] is `null`. |
| | Thrown when the [Tenant Id][TenantId Client Credentials] within [Microsoft365OAuthCredentials][] is `null`. |
| | Thrown when the [Object Id][ObjectId Client Credentials] within [Microsoft365OAuthCredentials][] is `null`. |
| | Thrown when the [Certificate Path][] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| | Thrown when the [Certificate Password][] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| | Thrown when the [Client Id][ClientId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| | Thrown when the [Tenant Id][TenantId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| | Thrown when the [Object Id][ObjectId Certificate Credentials] within [Microsoft365OAuthCertificateCredentials][] is `null`. |
| | Thrown when [Proxy][Proxy Property] is set and its [server details][ProxyServerDetails] are `null`. |
| | Thrown when [Proxy][Proxy Property] is set and its [host][Host] is `null`. |
| | Thrown when [Proxy][Proxy Property] is set and its credentials are [ProxyUserCredentials][] and the [username][Username] is `null`. |
| | Thrown when [Proxy][Proxy Property] is set and its credentials are [ProxyUserCredentials][] and the [password][Password] is `null`. |
| [PropertyValueOutOfRangeException][] | Thrown when [Proxy][Proxy Property] is set and its [port][Port] is below `1` or above `65535`. For more information, see [Property Is Invalid][]. |

## Remarks

### Handling of Exceptions

If the attachment cannot be saved, the exception is recorded against the attachment id and thrown within an [OperationFailedException][].

### File names

The file is named after the attachment. Microsoft 365 returns that name as the sender's system gave it, so it can contain characters Windows does not allow in a file name. This is most common for an attached email, whose name is its subject, for example `RE: Budget?`.

Each of `"`, `<`, `>`, `|`, `:`, `*`, `?`, `\`, `/` and the characters `0`–`31` is replaced with `_`. `RE: Budget?` is saved as `RE_ Budget_.eml`. A colon is replaced because Windows saves the file under only the part of the name before the colon, so that attachment would be saved as `RE`.

Trailing spaces and periods are removed, because Windows drops them from a file name. A name that is empty once those characters are removed is saved as `attachment`.

A file name Windows reserves, such as `con.pdf`, is saved with `_` inserted before the extension, for example `con_.pdf`. The reserved names are `CON`, `PRN`, `AUX`, `NUL`, `COM0`–`COM9` and `LPT0`–`LPT9`, in any case, with or without an extension.

The characters are replaced before the name is compared with the files already in the folder, so `a:b.pdf` and `a?b.pdf` are both saved as `a_b.pdf`. [Overwrite][Overwrite Property] decides that clash the same way as any other. An attached item has no extension of its own, so `.eml`, `.ics` or `.vcf` is added after the characters are replaced.

### Known Limitations

- A reference attachment (eg. OneDrive or SharePoint file) has no content stored in the email, so it cannot be downloaded.

[MessageId Property]: {{< ref "#message-id" >}}
[AttachmentId Property]: {{< ref "#attachment-id" >}}
[DestinationFolderPath Property]: {{< ref "#destination-folder-path" >}}
[Overwrite Property]: {{< ref "#overwrite" >}}
[Mailbox Property]: {{< ref "#mailbox" >}}
[Credentials Property]: {{< ref "#credentials" >}}
[Proxy Property]: {{< ref "#proxy" >}}
[FilePath Property]: {{< ref "#file-path" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Setting up an Outlook account for OAuth authentication using client credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpClientCredentialsOutlook" >}}
[Setting up an Outlook account for OAuth authentication using certificate credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpCertificateCredentialsOutlook" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Nullable]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[OutlookEmail]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.MainDoc" >}}
[OutlookAttachment]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachment.MainDoc" >}}
[Id]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.Id" >}}
[Attachment Id]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachment.Id" >}}
[Is Downloadable]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachment.IsDownloadable" >}}
[Attachment Type]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachment.AttachmentType" >}}
[File]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.File" >}}
[Item]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.Item" >}}
[Reference]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.Reference" >}}
[Unknown]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.Unknown" >}}
[Microsoft365Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365Credentials.MainDoc" >}}
[ProxySessionDetails]: {{< url path="Cortex.Reference.DataTypes.Proxy.ProxySessionDetails.MainDoc" >}}
[ProxyServerDetails]: {{< url path="Cortex.Reference.DataTypes.Proxy.ProxySessionDetails.ServerDetails" >}}
[ProxyType]: {{< url path="Cortex.Reference.DataTypes.Proxy.ProxyServerDetails.Type" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.Proxy.ProxyServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.Proxy.ProxyServerDetails.Port" >}}
[ProxyUserCredentials]: {{< url path="Cortex.Reference.DataTypes.Proxy.ProxySessionDetails.Credentials" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Proxy.Authentication.ProxyUserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Proxy.Authentication.ProxyUserCredentials.Password" >}}
[Microsoft365OAuthCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.MainDoc" >}}
[Microsoft365OAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.MainDoc" >}}
[ObjectId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ObjectId" >}}
[Certificate Path]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.CertificatePath" >}}
[Certificate Password]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.CertificatePassword" >}}
[ClientId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ClientId" >}}
[ClientSecret Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ClientSecret" >}}
[TenantId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.TenantId" >}}
[ClientId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.ClientId" >}}
[TenantId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.TenantId" >}}
[ObjectId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.ObjectId" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[CryptographicException]: {{< url path="MSDocs.DotNet.Api.System.Security.Cryptography.CryptographicException.MainDoc" >}}
[HttpRequestException]: {{< url path="MSDocs.DotNet.Api.System.Net.Http.HttpRequestException" >}}
[InvalidPathException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[MsalServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Identity.Client.MsalServiceException.MainDoc" >}}
[ODataError]: {{< url path="MSDocs.DotNet.Api.Microsoft.Graph.Models.ODataErrors.ODataError.MainDoc" >}}
[OperationFailedException]: {{< url path="Cortex.Reference.Exceptions.Email.OperationFailedException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyIsInvalid" >}}

[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}
[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
[Download Attachments Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentsUsingMicrosoft365.MainDoc" >}}
