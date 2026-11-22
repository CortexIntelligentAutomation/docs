---
title: "Update Emails Using Microsoft 365"
linkTitle: "Update Emails Using Microsoft 365"
description: "Updates the properties of the Outlook emails with the specified message ids."
---

{{< figure src="/blocks/Cortex_Blocks_Microsoft365_Outlook_UpdateEmail_UpdateEmailsUsingMicrosoft365Block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailsUsingMicrosoft365Block)</p>

## Description

Updates the properties of the emails with the specified [Message Ids][MessageIds Property], authenticating with the provided [Credentials][Credentials Property].

The same values are applied to every email. Only the properties that are set are changed. The flag is checked, and any dates it has to have filled in are chosen, once before any email is updated, so every email receives the same dates.

One email failing does not stop the others. When any email fails, the block throws [OperationFailedException][] after it has attempted every id. To update one email, use [Update Email Using Microsoft 365][].

## Examples

### Mark several emails as read

#### Properties

| Property | Value | Notes |
|--------------------|---------------------------|------------------------------------------|
| [Message Ids][MessageIds Property] | `($)Emails.Keys` | |
| [Is Read][IsRead Property] | `true` | |
| [Importance][Importance Property] | `EmailMessagePriority.Urgent` | Sent as high importance. |
| [Flag][Flag Property] | `null` | This property will not be changed due to the null value. |
| [Focus][Focus Property] | `null` | This property will not be changed due to the null value. |
| [Categories][Categories Property] | `new List<string>() { "Invoices" }` | Replaces the categories on each email. |
| [Credentials][Credentials Property] | `($)Credentials` | |

#### Result

Each email is marked read, set to high importance, and given the category `Invoices` in place of any categories it already had. Flag and focus are unchanged. Emails that could not be updated are listed on [OperationFailedException][].

***

## Properties

### Message Ids

The identifiers of the emails to update. A duplicate is only processed at its first occurrence. A `null` or `""` entry is recorded as a failure and is not sent to Microsoft 365.

| | |
|----------|----------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)MessageIds` with no value |

### Is Read

Whether each email is marked as read or unread. `null` leaves the read state unchanged.

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[Boolean][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Importance

The importance to set on each email. `null` leaves it unchanged. See [EmailMessagePriority][].

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[EmailMessagePriority][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Flag

The follow-up flag to set on each email. `null` leaves each flag unchanged. See [EmailFlag][], [AddOrUpdateEmailFlag][], [CompleteEmailFlag][] and [RemoveEmailFlag][].

A flag can be set up using the [Literal Editor][Literal] by choosing [AddOrUpdateEmailFlag][], [CompleteEmailFlag][] or [RemoveEmailFlag][] and filling in its properties. See [Switching Type][].

| | |
|----------|----------|
| Data Type | [EmailFlag][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Focus

The tab of the Focused Inbox to show each email in. `null` leaves it unchanged. See [EmailFocus][].

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[EmailFocus][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Categories

The categories to set on each email. `null` leaves them unchanged.

| | |
|----------|----------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Append Categories

`true` adds [Categories][Categories Property] to the ones each email already has. `false` replaces them. An empty list with `true` changes nothing. An empty list with `false` removes every category.

| | |
|----------|----------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `false` |

### Mailbox

The mailbox holding the emails. An empty or `null` value uses the mailbox of the user in [Object Id][ObjectId Client Credentials] on the credentials. The mailbox is read once before any email is updated.

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
| [ArgumentException][] | Thrown when [Importance][Importance Property] is not one of the [EmailMessagePriority][] values. This is checked before any email is updated. |
| | Thrown when [Flag][Flag Property] has a start date later than its due date. This is checked before any email is updated. |
| | Thrown when [Focus][Focus Property] is not one of the [EmailFocus][] values. This is checked before any email is updated. |
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
| [ODataError][] | Thrown when [Mailbox][Mailbox Property] does not exist. |
| | Thrown when an invalid [Object Id][ObjectId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Object Id][ObjectId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when the client application does not have rights to read mail on behalf of the user in the credentials, or in [Mailbox][Mailbox Property]. |
| | Thrown when the client application can read mail in the mailbox but does not have rights to modify it. |
| [OperationFailedException][] | Thrown when one or more emails could not be updated. See [Id Exceptions][]. |
| | Thrown when no email with a message id in [Message Ids][MessageIds Property] exists in the mailbox. |
| | Thrown when a message id in [Message Ids][MessageIds Property] is not a valid identifier. |
| | Thrown when a message id in [Message Ids][MessageIds Property] is `null`. |
| | Thrown when a message id in [Message Ids][MessageIds Property] is empty (i.e. `""`). |
| | Thrown when a message id in [Message Ids][MessageIds Property] is duplicated and updating it failed. |
| [PropertyContainsNullOrEmptyItemException][] | Thrown when [Categories][Categories Property] contains a `null` item. This is checked before any email is updated. |
| | Thrown when [Categories][Categories Property] contains an empty item (i.e. `""`). This is checked before any email is updated. |
| [PropertyNullException][] | Thrown when [Message Ids][MessageIds Property] is `null`. |
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
[IsRead Property]: {{< ref "#is-read" >}}
[Importance Property]: {{< ref "#importance" >}}
[Flag Property]: {{< ref "#flag" >}}
[Focus Property]: {{< ref "#focus" >}}
[Categories Property]: {{< ref "#categories" >}}
[Mailbox Property]: {{< ref "#mailbox" >}}
[Credentials Property]: {{< ref "#credentials" >}}
[Proxy Property]: {{< ref "#proxy" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Switching Type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.SwitchingType" >}}
[Setting up an Outlook account for OAuth authentication using client credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpClientCredentialsOutlook" >}}
[Setting up an Outlook account for OAuth authentication using certificate credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpCertificateCredentialsOutlook" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Nullable]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[EmailMessagePriority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.MainDoc" >}}
[EmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailFlag.MainDoc" >}}
[AddOrUpdateEmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.AddOrUpdateEmailFlag.MainDoc" >}}
[CompleteEmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.CompleteEmailFlag.MainDoc" >}}
[RemoveEmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.RemoveEmailFlag.MainDoc" >}}
[EmailFocus]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailFocus.MainDoc" >}}
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
[PropertyContainsNullOrEmptyItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullOrEmptyItemException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyIsInvalid" >}}

[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
[Update Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailUsingMicrosoft365.MainDoc" >}}
