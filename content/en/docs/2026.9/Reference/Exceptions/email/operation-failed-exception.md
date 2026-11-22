---
title: "OperationFailedException"
linkTitle: "OperationFailedException"
description: "The exception thrown when one or more Outlook operations in a batch failed."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Email.OperationFailedException)</p>

## Description

The exception thrown when an Outlook operation failed and the block reports that failure in [Id Exceptions][IdExceptions Property].

This exception is thrown by:

- [Delete Emails Using Microsoft 365][], when one or more emails could not be deleted
- [Move Emails Using Microsoft 365][], when one or more emails could not be moved
- [Update Emails Using Microsoft 365][], when one or more emails could not be updated
- [Download Attachment Using Microsoft 365][], when the attachment could not be saved
- [Download Attachments Using Microsoft 365][], when one or more emails' attachments could not be downloaded

The single-email Delete, Move and Update blocks throw the exception that stopped that one email directly. They do not wrap it in `OperationFailedException`.

A batch continues after an individual failure. The block throws `OperationFailedException` once every identifier has been attempted. [Download Attachments Using Microsoft 365][] still sets [File Paths][] to the files that were saved before the failure.

## Reasons

### A single operation failed

One operation failed, for example saving one attachment.

#### Message Format

```json
"Failed to <action> the <item>. Please see the 'IdExceptions' property for details on why the operation failed.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<action>` is the action that failed, such as `download`
- `<item>` is the item the action was taking place on, such as `attachment`

#### How to Fix

The exception that caused the operation to fail is in [Id Exceptions][IdExceptions Property]. Use that exception's message, and its HelpLink when it has one, to correct the identifier, path or mailbox.

***

### More than one operation failed

More than one identifier in a batch failed, including null or empty identifiers and duplicates of an identifier that failed.

#### Message Format

```json
"Failed to <action> <failed-count> of <total-count> <items>. Please see the 'IdExceptions' property for details on why each operation failed.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<action>` is the action that failed (`delete`, `move`, `update`, or `download the attachments of`)
- `<failed-count>` is the number of operations that failed
- `<total-count>` is the number of operations that were attempted
- `<items>` is `emails` or `attachments`

#### How to Fix

Read [Id Exceptions][IdExceptions Property] for the exception of each identifier. Read [Indexes Of Null Or Empty Ids][NullOrEmpty Property] for identifiers that were missing, and [Indexes Of Duplicate Ids][Duplicate Property] for repeated identifiers whose first attempt failed.

## Properties

### Id Exceptions

The exception thrown for each identifier that failed.

For the email blocks the identifier is the message id. For [Download Attachment Using Microsoft 365][] it is the attachment id. For [Download Attachments Using Microsoft 365][] it is the message id, and the value may itself be an `OperationFailedException` whose [Id Exceptions][IdExceptions Property] are keyed by attachment id.

| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[String][], [Exception][]&gt; |
| Notes | `null` when no identifier had an exception of its own. |

### Indexes Of Duplicate Ids

Later occurrences of an identifier that already failed, keyed by the index of each later occurrence. Identifiers are matched exactly and are case-sensitive. A duplicate is only processed at its first occurrence, and a later occurrence is counted as a failure only when that first occurrence failed.

| | |
|--------------------|---------------------------|
| Data Type | [IDictionary][]&lt;[Int32][], [String][]&gt; |
| Notes | `null` when there are no duplicate failures. [Download Attachments Using Microsoft 365][] records duplicates inside the exception of the email they belong to, because a dictionary of emails can hold each message id only once. |

### Indexes Of Null Or Empty Ids

The indexes of identifiers that were `null` or `""`. Those identifiers are not sent to Microsoft 365.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[Int32][]&gt; |
| Notes | `null` when every identifier had a value. |

## Remarks

### Known Limitations

None

## See Also

### Related Blocks

- [Delete Emails Using Microsoft 365][]
- [Move Emails Using Microsoft 365][]
- [Update Emails Using Microsoft 365][]
- [Download Attachment Using Microsoft 365][]
- [Download Attachments Using Microsoft 365][]

[IdExceptions Property]: {{< ref "#id-exceptions" >}}
[Duplicate Property]: {{< ref "#indexes-of-duplicate-ids" >}}
[NullOrEmpty Property]: {{< ref "#indexes-of-null-or-empty-ids" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Exception]: {{< url path="MSDocs.DotNet.Api.System.Exception" >}}

[File Paths]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentsUsingMicrosoft365.FilePaths" >}}

[Delete Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DeleteEmail.DeleteEmailsUsingMicrosoft365.MainDoc" >}}
[Move Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.MoveEmail.MoveEmailsUsingMicrosoft365.MainDoc" >}}
[Update Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailsUsingMicrosoft365.MainDoc" >}}
[Download Attachment Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentUsingMicrosoft365.MainDoc" >}}
[Download Attachments Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DownloadAttachment.DownloadAttachmentsUsingMicrosoft365.MainDoc" >}}
