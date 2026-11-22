---
title: "Update Email Using Microsoft 365"
linkTitle: "Update Email Using Microsoft 365"
description: "Updates the properties of one Outlook email."
---

{{< figure src="/blocks/Cortex_Blocks_Microsoft365_Outlook_UpdateEmail_UpdateEmailUsingMicrosoft365Block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailUsingMicrosoft365Block)</p>

## Description

Updates the properties of the email with the specified [Message Id][MessageId Property], authenticating with the provided [Credentials][Credentials Property].

Only the properties that are set are changed. A `null` [Is Read][IsRead Property], [Importance][Importance Property], [Flag][Flag Property], [Focus][Focus Property] or [Categories][Categories Property] leaves that part of the email as it is. When nothing is set, the block completes without calling Microsoft 365.

To update several emails with the same values, use [Update Emails Using Microsoft 365][].

## Examples

### Mark an email as read and flag it

#### Properties

| Property | Value | Notes |
|--------------------|---------------------------|------------------------------------------|
| [Message Id][MessageId Property] | `($)MessageId` | The [Id][] of an [OutlookEmail][]. |
| [Is Read][IsRead Property] | `true` | |
| [Importance][Importance Property] | `null` | This property will not be changed due to the null value. |
| [Flag][Flag Property] | `new AddOrUpdateEmailFlag(startDateTime: DateTimeOffset.UtcNow, dueDateTime: DateTimeOffset.UtcNow.AddDays(2))` | An [AddOrUpdateEmailFlag][]. |
| [Focus][Focus Property] | `null` | This property will not be changed due to the null value. |
| [Categories][Categories Property] | `null` | This property will not be changed due to the null value. |
| [Credentials][Credentials Property] | `($)Credentials` | |

#### Result

The email is marked read and flagged, with a follow-up that starts now and is due in two days. Importance, focus and categories are unchanged.

***

## Properties

### Message Id

The identifier of the email to update.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)MessageId` with no value |

### Is Read

Whether the email is marked as read or unread. `null` leaves the read state unchanged. `true` marks it read. `false` marks it unread.

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[Boolean][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Importance

The importance to set on the email. `null` leaves it unchanged. See [EmailMessagePriority][]. `NonUrgent` is sent as low importance, `Normal` as normal, and `Urgent` as high.

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[EmailMessagePriority][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Flag

The follow-up flag to set on the email. `null` leaves the flag unchanged. See [EmailFlag][], [AddOrUpdateEmailFlag][], [CompleteEmailFlag][] and [RemoveEmailFlag][].

A flag can be set up using the [Literal Editor][Literal] by choosing [AddOrUpdateEmailFlag][], [CompleteEmailFlag][] or [RemoveEmailFlag][] and filling in its properties. See [Switching Type][].

| | |
|----------|----------|
| Data Type | [EmailFlag][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Focus

The tab of the Focused Inbox to show the email in. `null` leaves it unchanged. See [EmailFocus][].

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[EmailFocus][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Categories

The categories to set on the email. `null` leaves the categories unchanged. Category names are matched without regard to case.

| | |
|----------|----------|
| Data Type | [IEnumerable][]&lt;[String][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Append Categories

`true` adds [Categories][Categories Property] to the ones the email already has. A category the email already has, ignoring case, is not added again. An empty list adds nothing.

`false` replaces the email's categories. An empty list removes every category.

| | |
|----------|----------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `false` |

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

## Exceptions

| Name | Description |
|--------------------------------------|-------------|
| [ArgumentException][] | Thrown when [Importance][Importance Property] is not one of the [EmailMessagePriority][] values. |
| | Thrown when [Flag][Flag Property] is an [AddOrUpdateEmailFlag][] whose start date is later than its due date. |
| | Thrown when [Focus][Focus Property] is not one of the [EmailFocus][] values. |
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
| [ODataError][] | Thrown when no email with [Message Id][MessageId Property] exists in the mailbox. |
| | Thrown when [Message Id][MessageId Property] is not a valid identifier. |
| | Thrown when [Mailbox][Mailbox Property] does not exist. |
| | Thrown when an invalid [Object Id][ObjectId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Object Id][ObjectId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when the client application does not have rights to modify mail on behalf of the user in the credentials, or in [Mailbox][Mailbox Property]. |
| [PropertyContainsNullOrEmptyItemException][] | Thrown when [Categories][Categories Property] contains a `null` item. |
| | Thrown when [Categories][Categories Property] contains an empty item (i.e. `""`). |
| [PropertyNullException][] | Thrown when [Message Id][MessageId Property] is `null`. |
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
| [PropertyEmptyException][] | Thrown when [Message Id][MessageId Property] is empty (i.e. `""`). |
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

[MessageId Property]: {{< ref "#message-id" >}}
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
[OutlookEmail]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.MainDoc" >}}
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
[PropertyContainsNullOrEmptyItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullOrEmptyItemException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyIsInvalid" >}}

[Get Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365.MainDoc" >}}
[Update Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailsUsingMicrosoft365.MainDoc" >}}
