---
title: "Download Attachments Using Microsoft 365"
linkTitle: "Download Attachments Using Microsoft 365"
description: "Downloads the attachments of one or more Outlook emails into a folder."
---

{{< figure src="/blocks/Cortex_Blocks_Microsoft365_Outlook_DownloadAttachment_DownloadAttachmentsUsingMicrosoft365Block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentsUsingMicrosoft365Block)</p>

## Description

Downloads the attachments of each email in [Attachment Ids][AttachmentIds Property] into [Destination Folder Path][DestinationFolderPath Property], authenticating with the provided [Credentials][Credentials Property].

[Attachment Ids][AttachmentIds Property] is an [IDictionary][]&lt;[String][], [IEnumerable][]&lt;[String][]&gt;&gt;. Each key is a message id. The value is the attachment ids to download from that email, or `null` to download every attachment on that email that can be downloaded.

The block sets [File Paths][FilePaths Property] to the paths of the files that were saved, keyed by message id and then by attachment id. Files saved before a failure are still output. One email failing does not stop the others. When any email fails, the block throws [OperationFailedException][] after it has attempted every email. To download one attachment, use [Download Attachment Using Microsoft 365][].

## Examples

### Download every attachment from the emails just read

#### Properties

| Property | Value | Notes |
|--------------------|---------------------------|------------------------------------------|
| [Attachment Ids][AttachmentIds Property] | `($)Emails.ToDictionary(email => email.Key, email => (IEnumerable<string>)null)` | A `null` value downloads every downloadable attachment on that email. |
| [Destination Folder Path][DestinationFolderPath Property] | `@"C:\Attachments"` | Created when it does not exist. |
| [Include Inline Attachments][IncludeInlineAttachments Property] | `false` | Inline images embedded in the body are skipped when the value for an email is `null`. An attachment asked for by id is downloaded whether or not it is inline. |
| [Overwrite][Overwrite Property] | `null` | A name that is already taken is saved as `name (1).ext`. |
| [Credentials][Credentials Property] | `($)Credentials` | |
| [File Paths][FilePaths Property] | `($)FilePaths`, with no value | Keyed by message id, then by attachment id. |

#### Result

Each downloadable attachment is saved under `C:\Attachments`. When two emails are downloaded, the first with two attachments and the second with one, `($)FilePaths` is updated to the following. The outer key is the message id, and each inner key is the attachment id:

```json
{
  "AAMkAGEmail1": {
    "AAMkAGAttachment1": "C:\\Attachments\\invoice.pdf",
    "AAMkAGAttachment2": "C:\\Attachments\\receipt.pdf"
  },
  "AAMkAGEmail2": {
    "AAMkAGAttachment3": "C:\\Attachments\\agenda.ics"
  }
}
```

***

## Properties

### Attachment Ids

The attachments to download, keyed by the email holding them. A `null` value for a specific key downloads every attachment on that email that can be downloaded, in the order they are on the email, and skips inline attachments unless [Include Inline Attachments][IncludeInlineAttachments Property] is `true`. An attachment asked for by its id is downloaded whether or not it is inline. A [Reference][] attachment asked for by id fails. For examples of how to build this value from a `($)Emails` output from a [Get Emails Using Microsoft 365][] block, see [Setting up Attachment Ids][].

| | |
|----------|----------|
| Data Type | [IDictionary][]&lt;[String][], [IEnumerable][]&lt;[String][]&gt;&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IDictionary][]&lt;[String][], [IEnumerable][]&lt;[String][]&gt;&gt; with value shown below: |

```csharp
new Dictionary<string, IEnumerable<string>>()
{
    {
        ($)MessageId,
        null
    }
}
```

### Destination Folder Path

The path of the folder to save the attachments into. The folder is created before any attachment is downloaded. A problem creating it fails every email and nothing is downloaded. See [File & Folder Paths][].

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `""`) |

### Include Inline Attachments

`true` also downloads attachments embedded in the body when the list of attachment ids for an email is `null`. `false` skips those inline attachments. An attachment requested by id is downloaded either way.

| | |
|----------|----------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `false` |

### Overwrite

What happens when a file with an attachment's name already exists. The same rules as [Download Attachment Using Microsoft 365][]: `null` chooses the next free name, `true` replaces a file that is not read-only or hidden, and `false` fails when the file exists.

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[Boolean][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Mailbox

The mailbox holding the emails. An empty or `null` value uses the mailbox of the user in [Object Id][ObjectId Client Credentials] on the credentials. The mailbox is read once before any attachment is downloaded.

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

### File Paths

The paths of the files the attachments were saved to, keyed by the email and then by the attachment. When the block throws, this is still set to the files saved before the failure, unless the block was stopped.

| | |
|----------|----------|
| Data Type | [IDictionary][]&lt;[String][], [IDictionary][]&lt;[String][], [String][]&gt;&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FilePaths` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Proxy][Proxy Property] is set and its type is not a named [ProxyType][] value. |
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
| [ODataError][] | Thrown when [Mailbox][Mailbox Property] does not exist. |
| | Thrown when an invalid [Object Id][ObjectId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Object Id][ObjectId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when the client application does not have rights to read mail on behalf of the user in the credentials, or in [Mailbox][Mailbox Property]. |
| [OperationFailedException][] | An email in [Attachment Ids][AttachmentIds Property] cannot be read. |
|                              | A message id in [Attachment Ids][AttachmentIds Property] is not a valid identifier. |
|                              | A message id in [Attachment Ids][AttachmentIds Property] is `""`. |
|                              | An attachment id is `null`. |
|                              | An attachment id is empty (i.e. `""`). |
|                              | An attachment id is duplicated and downloading the first occurrence failed. |
|                              | An attachment id is not an attachment of that email. |
|                              | An attachment id is not a valid identifier. |
|                              | An attachment asked for by its id has an [Attachment Type][] of [Reference][]. |
|                              | An attachment asked for by its id has an [Attachment Type][] of [Unknown][]. |
|                              | The [Destination Folder Path][DestinationFolderPath Property] is invalid (for example, it is on an unmapped drive). |
|                              | The network name in the [Destination Folder Path][DestinationFolderPath Property] is unknown. |
|                              | The user the flow is executing as does not have the required permissions to create the [Destination Folder Path][DestinationFolderPath Property]. |
|                              | There is not enough space to save an attachment. |
|                              | The file an attachment would be saved to is in use by another application. |
|                              | A file with an attachment's name already exists and [Overwrite][Overwrite Property] is `false`. |
|                              | An attachment's file name is longer than 255 characters. |
|                              | An unexpected error occurs when saving an attachment. |
|                              | The user the flow is executing as does not have the required permissions to write an attachment into the [Destination Folder Path][DestinationFolderPath Property]. |
|                              | A file with an attachment's name already exists, is read-only, and [Overwrite][Overwrite Property] is `true`. |
|                              | A file with an attachment's name already exists, is hidden, and [Overwrite][Overwrite Property] is `true`. |
|                              | A folder with an attachment's name already exists in the [Destination Folder Path][DestinationFolderPath Property]. |
| [PropertyEmptyException][] | Thrown when [Attachment Ids][AttachmentIds Property] is empty. |
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
| [PropertyNullException][] | Thrown when [Attachment Ids][AttachmentIds Property] is `null`. |
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

If downloading an attachment fails, the exception is recorded and the block continues with the remaining attachments and emails. Once all of them have been processed, the recorded exceptions are thrown within an [OperationFailedException][]. [Id Exceptions][] is keyed by message id. When an email's attachments failed, that value is an `OperationFailedException` whose [Id Exceptions][] are keyed by attachment id. [File Paths][FilePaths Property] still contains the files that were saved.

A problem creating the [Destination Folder Path][DestinationFolderPath Property] is recorded against every email, and nothing is downloaded.

### Setting up Attachment Ids

[Get Emails Using Microsoft 365][] returns `($)Emails` as a dictionary keyed by each email's id. Run it with [Include Attachment Details][] turned on, otherwise each email's [Attachments][] list is empty.

[Attachment Ids][AttachmentIds Property] uses those ids as its keys. A `null` value downloads every downloadable attachment on that email. A list of ids downloads those attachments, including an inline attachment. An empty list downloads nothing for that email. A [Reference][] attachment included by id fails.

#### Every attachment on every email

```csharp
($)Emails.ToDictionary(
    email => email.Key,
    email => (IEnumerable<string>)null)
```

A `null` value skips inline attachments unless [Include Inline Attachments][IncludeInlineAttachments Property] is `true`.

#### Every downloadable attachment on one email

```csharp
($)Emails
    .Where(email => email.Key == ($)MessageId)
    .ToDictionary(
        email => email.Key,
        email => email.Value.Attachments
            .Where(attachment => attachment.IsDownloadable)
            .Select(attachment => attachment.Id))
```

#### Attachments of one type

This keeps [File][Attachment Type File] attachments. The same expression with `OutlookAttachmentType.Item` keeps attached emails, events and contacts.

```csharp
($)Emails
    .Where(email => email.Value.Attachments.Any(attachment => attachment.IsDownloadable && attachment.AttachmentType == OutlookAttachmentType.File))
    .ToDictionary(
        email => email.Key,
        email => email.Value.Attachments
            .Where(attachment => attachment.IsDownloadable && attachment.AttachmentType == OutlookAttachmentType.File)
            .Select(attachment => attachment.Id))
```

#### Attachments with a specific name

```csharp
($)Emails
    .Where(email => email.Value.Attachments.Any(attachment => attachment.IsDownloadable && string.Equals(attachment.Name, "invoice.pdf", StringComparison.OrdinalIgnoreCase)))
    .ToDictionary(
        email => email.Key,
        email => email.Value.Attachments
            .Where(attachment => attachment.IsDownloadable && string.Equals(attachment.Name, "invoice.pdf", StringComparison.OrdinalIgnoreCase))
            .Select(attachment => attachment.Id))
```

#### Attachments with a specific extension

```csharp
($)Emails
    .Where(email => email.Value.Attachments.Any(attachment => attachment.IsDownloadable && attachment.Name != null && attachment.Name.EndsWith(".pdf", StringComparison.OrdinalIgnoreCase)))
    .ToDictionary(
        email => email.Key,
        email => email.Value.Attachments
            .Where(attachment => attachment.IsDownloadable && attachment.Name != null && attachment.Name.EndsWith(".pdf", StringComparison.OrdinalIgnoreCase))
            .Select(attachment => attachment.Id))
```

### File names

The file is named after the attachment. Microsoft 365 returns that name as the sender's system gave it, so it can contain characters Windows does not allow in a file name. This is most common for an attached email, whose name is its subject, for example `RE: Budget?`.

Each of `"`, `<`, `>`, `|`, `:`, `*`, `?`, `\`, `/` and the characters `0`–`31` is replaced with `_`. `RE: Budget?` is saved as `RE_ Budget_.eml`. A colon is replaced because Windows saves the file under only the part of the name before the colon, so that attachment would be saved as `RE`.

Trailing spaces and periods are removed, because Windows drops them from a file name. A name that is empty once those characters are removed is saved as `attachment`.

A file name Windows reserves, such as `con.pdf`, is saved with `_` inserted before the extension, for example `con_.pdf`. The reserved names are `CON`, `PRN`, `AUX`, `NUL`, `COM0`–`COM9` and `LPT0`–`LPT9`, in any case, with or without an extension.

The characters are replaced before the name is compared with the files already in the folder, so `a:b.pdf` and `a?b.pdf` are both saved as `a_b.pdf`. [Overwrite][Overwrite Property] decides that clash the same way as any other. An attached item has no extension of its own, so `.eml`, `.ics` or `.vcf` is added after the characters are replaced.

### Known Limitations

- A reference attachment (eg. OneDrive or SharePoint file) has no content stored in the email, so it cannot be downloaded.

[AttachmentIds Property]: {{< ref "#attachment-ids" >}}
[Setting up Attachment Ids]: {{< ref "#setting-up-attachment-ids" >}}
[DestinationFolderPath Property]: {{< ref "#destination-folder-path" >}}
[Overwrite Property]: {{< ref "#overwrite" >}}
[IncludeInlineAttachments Property]: {{< ref "#include-inline-attachments" >}}
[Mailbox Property]: {{< ref "#mailbox" >}}
[Credentials Property]: {{< ref "#credentials" >}}
[Proxy Property]: {{< ref "#proxy" >}}
[FilePaths Property]: {{< ref "#file-paths" >}}

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
[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[Reference]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.Reference" >}}
[Unknown]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.Unknown" >}}
[Attachment Type]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachment.AttachmentType" >}}
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

[CryptographicException]: {{< url path="MSDocs.DotNet.Api.System.Security.Cryptography.CryptographicException.MainDoc" >}}
[HttpRequestException]: {{< url path="MSDocs.DotNet.Api.System.Net.Http.HttpRequestException" >}}
[InvalidPathException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[MsalServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Identity.Client.MsalServiceException.MainDoc" >}}
[ODataError]: {{< url path="MSDocs.DotNet.Api.Microsoft.Graph.Models.ODataErrors.ODataError.MainDoc" >}}
[OperationFailedException]: {{< url path="Cortex.Reference.Exceptions.Email.OperationFailedException.MainDoc" >}}
[Id Exceptions]: {{< url path="Cortex.Reference.Exceptions.Email.OperationFailedException.IdExceptions" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyIsInvalid" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}

[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}
[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
[Include Attachment Details]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.IncludeAttachmentDetails" >}}
[Attachments]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.Attachments" >}}
[Attachment Type File]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachmentType.File" >}}
[Download Attachment Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentUsingMicrosoft365.MainDoc" >}}
