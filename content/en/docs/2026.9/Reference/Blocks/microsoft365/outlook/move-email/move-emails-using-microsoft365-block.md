---
title: "Move Emails Using Microsoft 365"
linkTitle: "Move Emails Using Microsoft 365"
description: "Moves the Outlook emails with the specified message ids into another mail folder."
---

{{< figure src="/blocks/Cortex_Blocks_Microsoft365_Outlook_MoveEmail_MoveEmailsUsingMicrosoft365Block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Microsoft365.Outlook.MoveEmail.MoveEmailsUsingMicrosoft365Block)</p>

## Description

Moves the emails with the specified [Message Ids][MessageIds Property] into [Destination Mail Folder][DestinationMailFolder Property], authenticating with the provided [Credentials][Credentials Property].

The destination is resolved once, before any email is moved. One email failing does not stop the others. When any email fails, the block throws [OperationFailedException][] after it has attempted every id. To move one email, use [Move Email Using Microsoft 365][].

## Examples

### Move several emails into Archive

#### Properties

| Property | Value | Notes |
|--------------------|---------------------------|------------------------------------------|
| [Message Ids][MessageIds Property] | `($)Emails.Keys` | |
| [Destination Mail Folder][DestinationMailFolder Property] | `"archive"` | A well-known folder name. |
| [Credentials][Credentials Property] | `($)Credentials` | |

#### Result

Each email is in Archive. An email that is already there is left where it is. The immutable [Id][] of each email is unchanged.

***

## Properties

### Message Ids

The identifiers of the emails to move. A duplicate is only processed at its first occurrence. A `null` or `""` entry is recorded as a failure and is not sent to Microsoft 365.

| | |
|----------|----------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)MessageIds` with no value |

### Destination Mail Folder

The mail folder to move the emails into.

The folder can be:

- A well-known folder name: `archive`, `clutter`, `conflicts`, `conversationhistory`, `deleteditems`, `drafts`, `inbox`, `junkemail`, `localfailures`, `msgfolderroot`, `outbox`, `recoverableitemsdeletions`, `scheduled`, `searchfolders`, `sentitems`, `serverfailures`, `syncissues`. These names are case-insensitive.
- A display name, or a `/` separated path of display names, such as `Projects/Invoices`. Each segment is the display name of a folder under the previous one.
- A folder id. A segment is used as an id when no folder has that display name and the segment is at least 40 characters, made up of letters, digits, `-`, `_` and `=`.

A destination that cannot be resolved fails the whole block before any email is moved.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Mailbox

The mailbox holding the emails. An empty or `null` value uses the mailbox of the user in [Object Id][ObjectId Client Credentials] on the credentials.

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

## Exceptions

| Name | Description |
|--------------------------------------|-------------|
| [ArgumentException][] | Thrown when [Destination Mail Folder][DestinationMailFolder Property] names a folder that does not exist. |
| | Thrown when [Proxy][Proxy Property] is set and its type is not a named [ProxyType][] value. |
| [CryptographicException][] | Thrown when an incorrect [Certificate Path][] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when an incorrect [Certificate Password][] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| [HttpRequestException][] | Thrown when [Proxy][Proxy Property] is set and the proxy host or port is unreachable, or nothing is listening on the port. |
| | Thrown when [Proxy][Proxy Property] is set and the proxy host cannot be resolved. |
| | Thrown when [Proxy][Proxy Property] is set against a secured proxy and the proxy credentials are omitted, or the username or password is incorrect. |
| | Thrown when [Proxy][Proxy Property] type is HTTPS and the proxy only accepts HTTP, or the type is HTTP and the proxy only accepts HTTPS. |
| | Thrown when [Proxy][Proxy Property] type is HTTPS and the proxy certificate fails validation. |
| [MsalServiceException][] | Thrown when an invalid [Client Id][ClientId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Client Secret][ClientSecret Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Tenant Id][TenantId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Client Id][ClientId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when an invalid [Tenant Id][TenantId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| [ODataError][] | Thrown when [Destination Mail Folder][DestinationMailFolder Property] is a well-known folder name or a folder id that does not exist. |
| | Thrown when [Mailbox][Mailbox Property] does not exist. |
| | Thrown when an invalid [Object Id][ObjectId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Object Id][ObjectId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when the client application does not have rights to read mail on behalf of the user in the credentials, or in [Mailbox][Mailbox Property]. |
| | Thrown when the client application can read mail in the mailbox but does not have rights to modify it. |
| [OperationFailedException][] | Thrown when one or more emails could not be moved. See [Id Exceptions][]. |
| | Thrown when no email with a message id in [Message Ids][MessageIds Property] exists in the mailbox. |
| | Thrown when a message id in [Message Ids][MessageIds Property] is not a valid identifier. |
| | Thrown when a message id in [Message Ids][MessageIds Property] is `null`. |
| | Thrown when a message id in [Message Ids][MessageIds Property] is empty (i.e. `""`). |
| | Thrown when a message id in [Message Ids][MessageIds Property] is duplicated and moving it failed. |
| [PropertyNullException][] | Thrown when [Message Ids][MessageIds Property] is `null`. |
| | Thrown when [Destination Mail Folder][DestinationMailFolder Property] is `null`. |
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
| [PropertyEmptyException][] | Thrown when [Message Ids][MessageIds Property] is empty (i.e. `[]`). |
| | Thrown when [Destination Mail Folder][DestinationMailFolder Property] is empty (i.e. `""`). |
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
| [PropertyValueOutOfRangeException][] | Thrown when [Proxy][Proxy Property] is set and its [port][Port] is below `1` or above `65535`. For more information, see [Property Is Invalid][]. |

## Remarks

### Known Limitations

None

[MessageIds Property]: {{< ref "#message-ids" >}}
[DestinationMailFolder Property]: {{< ref "#destination-mail-folder" >}}
[Mailbox Property]: {{< ref "#mailbox" >}}
[Credentials Property]: {{< ref "#credentials" >}}
[Proxy Property]: {{< ref "#proxy" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Setting up an Outlook account for OAuth authentication using client credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpClientCredentialsOutlook" >}}
[Setting up an Outlook account for OAuth authentication using certificate credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpCertificateCredentialsOutlook" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[Id]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.Id" >}}
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
[MsalServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Identity.Client.MsalServiceException.MainDoc" >}}
[ODataError]: {{< url path="MSDocs.DotNet.Api.Microsoft.Graph.Models.ODataErrors.ODataError.MainDoc" >}}
[OperationFailedException]: {{< url path="Cortex.Reference.Exceptions.Email.OperationFailedException.MainDoc" >}}
[Id Exceptions]: {{< url path="Cortex.Reference.Exceptions.Email.OperationFailedException.IdExceptions" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyIsInvalid" >}}

[Move Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.MoveEmail.MoveEmailUsingMicrosoft365.MainDoc" >}}
