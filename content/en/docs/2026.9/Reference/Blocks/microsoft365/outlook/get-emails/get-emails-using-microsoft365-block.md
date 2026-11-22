---
title: "Get Emails Using Microsoft 365"
linkTitle: "Get Emails Using Microsoft 365"
description: "Gets the emails in a mail folder that match the given search and filters."
---

{{< figure src="/blocks/Cortex_Blocks_Microsoft365_Outlook_GetEmails_GetEmailsUsingMicrosoft365Block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Microsoft365.Outlook.GetEmails.GetEmailsUsingMicrosoft365Block)</p>

## Description

Gets the emails in the specified [Mail Folder][MailFolder Property] that match the given [Search][Search Property] and filters, authenticating with the provided [Credentials][Credentials Property].

Each returned email is an [OutlookEmail][]. The block returns them in [Emails][Emails Property], an [IDictionary][]&lt;[String][], [OutlookEmail][]&gt; keyed by the email's immutable [Id][]. That id does not change when the email is moved, and it is the id the [Delete Email Using Microsoft 365][], [Move Email Using Microsoft 365][], [Update Email Using Microsoft 365][] and [Download Attachment Using Microsoft 365][] blocks use.

The block reads the mailbox through Microsoft Graph. This block only supports authentication via OAuth (using [Microsoft365OAuthCredentials][] or [Microsoft365OAuthCertificateCredentials][]).

## Examples

### Get unread emails whose subject contains "invoice"

This example reads up to 10 unread emails from `Inbox`, newest first, whose subject contains the literal text `invoice`. Each email includes its body as plain text.

#### Properties

| Property | Value | Notes |
|--------------------|---------------------------|------------------------------------------|
| [Mail Folder][MailFolder Property] | `($)MailFolder` with value `"Inbox"` | A well-known folder name. An empty folder uses `Inbox`. |
| [Search][Search Property] | `($)Search` with value `new EmailSearchSettings(to: null, from: null, cc: null, bcc: null, subject: new TextToFindAdvanced(null, "invoice", null, SearchOptions.LiteralText), body: null, attachmentName: null, comparisonType: StringComparison.OrdinalIgnoreCase)` | `($)Search` is a variable of type [EmailSearchSettings][]. |
| [Read State][ReadState Property] | `($)ReadState` with value `EmailReadState.Unread` | |
| [Max Results][MaxResults Property] | `($)MaxResults` with value `10` | |
| [Sort Order][SortOrder Property] | `($)SortOrder` with value `EmailSortOrder.NewestFirst` | |
| [Include Body][IncludeBody Property] | `($)IncludeBody` with value `true` | |
| [Body Format][BodyFormat Property] | `($)BodyFormat` with value `OutlookBodyFormat.Text` | |
| [Credentials][Credentials Property] | `($)Credentials` | A [Microsoft365OAuthCredentials][] or [Microsoft365OAuthCertificateCredentials][] variable. Reuse the same variable across blocks so the access token can be reused. |
| [Emails][Emails Property] | `($)Emails`, with no value | Set to the matching emails, keyed by immutable id. |

#### Result

`($)Emails` contains 10 or fewer [OutlookEmail][] values. When 10 or fewer emails match, [Next Page Bookmark][NextPageBookmark Property] is `null`. When more emails match, pass that bookmark back in as [Page Bookmark][PageBookmark Property] on a later run, with the same mailbox, mail folder, search, read state and sort order, to read the next page.

***

## Properties

### Mail Folder

The mail folder to get the emails from.

An empty or `null` value reads `Inbox`.

The folder can be:

- A well-known folder name: `archive`, `clutter`, `conflicts`, `conversationhistory`, `deleteditems`, `drafts`, `inbox`, `junkemail`, `localfailures`, `msgfolderroot`, `outbox`, `recoverableitemsdeletions`, `scheduled`, `searchfolders`, `sentitems`, `serverfailures`, `syncissues`. These names are case-insensitive.
- A display name, or a `/` separated path of display names, such as `Projects/Invoices`. Each segment is the display name of a folder under the previous one.
- A folder id. A segment is used as an id when no folder has that display name and the segment is at least 40 characters, made up of letters, digits, `-`, `_` and `=`.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `"Inbox"` |

### Search

The per-part search applied to each email. See [EmailSearchSettings][].

A `null` search, or a search whose parts are all null or empty, matches every email that passes the other filters. An email matches when every specified part satisfies its query.

| | |
|----------|----------|
| Data Type | [EmailSearchSettings][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [EmailSearchSettings][] with value shown below: |

```json
{
  "To": {
    "StartsWith": "",
    "Contains": "",
    "EndsWith": "",
    "SearchOptions": "SearchOptions.LiteralText"
  },
  "From": {
    "StartsWith": "",
    "Contains": "",
    "EndsWith": "",
    "SearchOptions": "SearchOptions.LiteralText"
  },
  "Cc": {
    "StartsWith": "",
    "Contains": "",
    "EndsWith": "",
    "SearchOptions": "SearchOptions.LiteralText"
  },
  "Bcc": {
    "StartsWith": "",
    "Contains": "",
    "EndsWith": "",
    "SearchOptions": "SearchOptions.LiteralText"
  },
  "Subject": {
    "StartsWith": "",
    "Contains": "",
    "EndsWith": "",
    "SearchOptions": "SearchOptions.LiteralText"
  },
  "Body": {
    "StartsWith": "",
    "Contains": "",
    "EndsWith": "",
    "SearchOptions": "SearchOptions.LiteralText"
  },
  "AttachmentName": {
    "StartsWith": "",
    "Contains": "",
    "EndsWith": "",
    "SearchOptions": "SearchOptions.LiteralText"
  },
  "ComparisonType": "StringComparison.Ordinal"
}
```

### Read State

Filters the emails by their read state. See [EmailReadState][].

| | |
|----------|----------|
| Data Type | [EmailReadState][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `All` |

### Received After

Only emails received on or after this date and time are returned. `null` applies no lower bound.

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Received Before

Only emails received on or before this date and time are returned. `null` applies no upper bound. The same instant as [Received After][ReceivedAfter Property] is a valid range.

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### Max Results

The maximum number of matching emails to return per page. Defaults to `50`. `null` returns every match in one page. A value, when set, must be greater than zero.

| | |
|----------|----------|
| Data Type | [Nullable][]&lt;[Int32][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `50` |

### Page Bookmark

A bookmark returned as the [Next Page Bookmark][NextPageBookmark Property] of a previous call, used to retrieve the next page of results. The default variable is [Next Page Bookmark][NextPageBookmark Property]. `null` or `""` starts from the first page.

A bookmark can only be used with the mailbox, mail folder, search, read state and sort order it was returned for. Page size, whether the body and attachment details are included, body format, the received date range, credentials and proxy can change between pages.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Variable][] |
| Default Value | `($)NextPageBookmark` with no value |

### Next Page Bookmark

A bookmark that can be passed as [Page Bookmark][PageBookmark Property] on a subsequent call to retrieve the next page of results. `null` when this page holds the last matching emails.

| | |
|----------|----------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Is [Advanced][] | `true` |
| Default Editor | [Variable][] |
| Default Value | `($)NextPageBookmark` with no value |

### Sort Order

The order in which the emails are returned. See [EmailSortOrder][].

| | |
|----------|----------|
| Data Type | [EmailSortOrder][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `NewestFirst` |

### Include Body

`true` populates [Body][] and [Body Format][OutlookEmail Body Format] on each email. `false` leaves the body `null`. The body is still read when [Search][Search Property] matches on it, so the search can be applied, and is only copied onto the email when this property is `true`.

| | |
|----------|----------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | [Boolean][] with value `true` |

### Body Format

The format the body of each email is requested in. See [OutlookBodyFormat][]. Used when the body is read, either because [Include Body][IncludeBody Property] is `true` or because the search matches on the body.

| | |
|----------|----------|
| Data Type | [OutlookBodyFormat][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `AsStored` |

### Include Attachment Details

`true` populates [Attachments][] on each email with [OutlookAttachment][] metadata. `false` leaves that list empty. [Has Attachments][] is set either way. Attachment content is not included; use [Download Attachment Using Microsoft 365][] to save it.

| | |
|----------|----------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | [Boolean][] with value `true` |

### Mailbox

The mailbox to search. An empty or `null` value searches the mailbox of the user in [Object Id][ObjectId Client Credentials] on the credentials.

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

### Emails

The emails that match the mail folder, search and filters, keyed by their immutable id.

| | |
|----------|----------|
| Data Type | [IDictionary][]&lt;[String][], [OutlookEmail][]&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Emails` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|--------------------------------------|-------------|
| [ArgumentException][] | Thrown when [Read State][ReadState Property] is not one of the [EmailReadState][] values (for example `(EmailReadState)99`). |
| | Thrown when [Sort Order][SortOrder Property] is not one of the [EmailSortOrder][] values. |
| | Thrown when [Body Format][BodyFormat Property] is not one of the [OutlookBodyFormat][] values. |
| | Thrown when [Max Results][MaxResults Property] is set and is less than `1`. |
| | Thrown when [Received After][ReceivedAfter Property] is later than [Received Before][ReceivedBefore Property]. |
| | Thrown when [Comparison Type][] on [Search][Search Property] is not a [StringComparison][] value. |
| | Thrown when a query's [Search Options][] on [Search][Search Property] is not a [SearchOptions][] value. |
| | Thrown when [Mail Folder][MailFolder Property] names a folder that does not exist. |
| | Thrown when [Page Bookmark][PageBookmark Property] was not returned by this block. |
| | Thrown when [Page Bookmark][PageBookmark Property] was returned for a different mailbox, mail folder, search, read state or sort order. |
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
| [ODataError][] | Thrown when [Mail Folder][MailFolder Property] is a well-known folder name or a folder id that does not exist. |
| | Thrown when [Mailbox][Mailbox Property] does not exist. |
| | Thrown when an invalid [Object Id][ObjectId Client Credentials] is provided within [Microsoft365OAuthCredentials][]. |
| | Thrown when an invalid [Object Id][ObjectId Certificate Credentials] is provided within [Microsoft365OAuthCertificateCredentials][]. |
| | Thrown when the client application does not have rights to read mail on behalf of the user in the credentials, or in [Mailbox][Mailbox Property]. |
| [PropertyNullException][] | Thrown when [Credentials][Credentials Property] is `null`. |
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
| [PropertyEmptyException][] | Thrown when the [Client Id][ClientId Client Credentials] within [Microsoft365OAuthCredentials][] is empty (i.e. `""`). |
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
| [RegexMatchTimeoutException][] | Thrown when matching a part of [Search][Search Property] against an email takes longer than `30` seconds. |
| [RegexParsingFailedException][] | Thrown when a part of [Search][Search Property] has [Search Options][] of `Regex` and its [Starts With][] is not a valid regular expression (e.g. `(`). |
| | Thrown when a part of [Search][Search Property] has [Search Options][] of `Regex` and its [Contains][] is not a valid regular expression (e.g. `(`). |
| | Thrown when a part of [Search][Search Property] has [Search Options][] of `Regex` and its [Ends With][] is not a valid regular expression (e.g. `(`). |

## Remarks

### Paging

[Max Results][MaxResults Property] is the number of matching emails on one page, not the number of emails read from Microsoft 365 in one request. The block keeps reading until the page is full or the folder runs out of candidates. Pass [Next Page Bookmark][NextPageBookmark Property] back in as [Page Bookmark][PageBookmark Property] to continue. The folder is resolved again on every page, so a bookmark cannot choose a different folder.

### Known Limitations

- A Bcc search only matches in a folder that still holds the Bcc, such as Sent Items or Drafts. In a folder of received mail, a Bcc query matches nothing.

[MailFolder Property]: {{< ref "#mail-folder" >}}
[Search Property]: {{< ref "#search" >}}
[ReadState Property]: {{< ref "#read-state" >}}
[ReceivedAfter Property]: {{< ref "#received-after" >}}
[ReceivedBefore Property]: {{< ref "#received-before" >}}
[MaxResults Property]: {{< ref "#max-results" >}}
[PageBookmark Property]: {{< ref "#page-bookmark" >}}
[NextPageBookmark Property]: {{< ref "#next-page-bookmark" >}}
[SortOrder Property]: {{< ref "#sort-order" >}}
[IncludeBody Property]: {{< ref "#include-body" >}}
[BodyFormat Property]: {{< ref "#body-format" >}}
[IncludeAttachmentDetails Property]: {{< ref "#include-attachment-details" >}}
[Mailbox Property]: {{< ref "#mailbox" >}}
[Credentials Property]: {{< ref "#credentials" >}}
[Proxy Property]: {{< ref "#proxy" >}}
[Emails Property]: {{< ref "#emails" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Nullable]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[SearchOptions]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}
[Search Options]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFindAdvanced.SearchOptions" >}}

[OutlookEmail]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.MainDoc" >}}
[Id]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.Id" >}}
[Body]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.Body" >}}
[OutlookEmail Body Format]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.BodyFormat" >}}
[Has Attachments]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.HasAttachments" >}}
[Attachments]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookEmail.Attachments" >}}
[OutlookAttachment]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookAttachment.MainDoc" >}}
[EmailSearchSettings]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailSearchSettings.MainDoc" >}}
[Comparison Type]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailSearchSettings.ComparisonType" >}}
[EmailReadState]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailReadState.MainDoc" >}}
[EmailSortOrder]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailSortOrder.MainDoc" >}}
[OutlookBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.OutlookBodyFormat.MainDoc" >}}

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
[ClientId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ClientId" >}}
[ClientSecret Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ClientSecret" >}}
[TenantId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.TenantId" >}}
[ObjectId Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCredentials.ObjectId" >}}
[Microsoft365OAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.MainDoc" >}}
[Certificate Path]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.CertificatePath" >}}
[Certificate Password]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.CertificatePassword" >}}
[ClientId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.ClientId" >}}
[TenantId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.TenantId" >}}
[ObjectId Certificate Credentials]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Authentication.OAuth.Microsoft365OAuthCertificateCredentials.ObjectId" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[CryptographicException]: {{< url path="MSDocs.DotNet.Api.System.Security.Cryptography.CryptographicException.MainDoc" >}}
[HttpRequestException]: {{< url path="MSDocs.DotNet.Api.System.Net.Http.HttpRequestException" >}}
[MsalServiceException]: {{< url path="MSDocs.DotNet.Api.Microsoft.Identity.Client.MsalServiceException.MainDoc" >}}
[ODataError]: {{< url path="MSDocs.DotNet.Api.Microsoft.Graph.Models.ODataErrors.ODataError.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyIsInvalid" >}}
[RegexMatchTimeoutException]: {{< url path="MSDocs.DotNet.Api.System.Text.RegularExpressions.RegexMatchTimeoutException" >}}
[RegexParsingFailedException]: {{< url path="Cortex.Reference.Exceptions.Text.Regex.RegexParsingFailedException.MainDoc" >}}
[Starts With]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFindAdvanced.StartsWith" >}}
[Contains]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFindAdvanced.Contains" >}}
[Ends With]: {{< url path="Cortex.Reference.DataTypes.Text.TextToFindAdvanced.EndsWith" >}}

[Delete Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DeleteEmail.DeleteEmailUsingMicrosoft365.MainDoc" >}}
[Move Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.MoveEmail.MoveEmailUsingMicrosoft365.MainDoc" >}}
[Update Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailUsingMicrosoft365.MainDoc" >}}
[Download Attachment Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentUsingMicrosoft365.MainDoc" >}}
[Setting up an Outlook account for OAuth authentication using client credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpClientCredentialsOutlook" >}}
[Setting up an Outlook account for OAuth authentication using certificate credentials]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpCertificateCredentialsOutlook" >}}
