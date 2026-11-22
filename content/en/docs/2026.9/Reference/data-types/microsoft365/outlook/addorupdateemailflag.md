---
title: "AddOrUpdateEmailFlag"
linkTitle: "AddOrUpdateEmailFlag"
description: "Flags an email, or replaces the flag it already has."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.AddOrUpdateEmailFlag)</p>

## Summary

The `AddOrUpdateEmailFlag` data type is an [EmailFlag][] that flags an email, or replaces the flag it already has, with an optional date and time to start the follow-up and to finish it by.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `AddOrUpdateEmailFlag` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.AddOrUpdateEmailFlag` |
| **Alias:**             | N/A |
| **Description:**       | Flags an email, or replaces the flag it already has. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `EmailFlag`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Start Date Time

The date and time the follow-up is due to start. Optional. Defaults to `DateTimeOffset.UtcNow`.

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Nullable][]&lt;[DateTimeOffset][]&gt; with value `DateTimeOffset.UtcNow` |

### Due Date Time

The date and time the follow-up is due to be finished by. Optional. Defaults to `DateTimeOffset.UtcNow.AddDays(0)`.

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Nullable][]&lt;[DateTimeOffset][]&gt; with value `DateTimeOffset.UtcNow.AddDays(0)` |

## Remarks

### How missing dates are filled in

Microsoft 365 does not allow an email to have a start date without a due date, or a due date without a start date. When one of the dates is set and the other is `null`, the Update Email blocks fill in the missing date before sending the flag:

- A missing due date is set to the start date.
- A missing start date is set to the due date when the due date is earlier than the time the block runs, and to the time the block runs otherwise.

When both dates are `null`, the email is flagged and no dates are sent.

Both dates are sent in UTC.

### Create an AddOrUpdateEmailFlag

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `AddOrUpdateEmailFlag` constructor | `new AddOrUpdateEmailFlag(startDateTime: new DateTimeOffset(2026, 11, 17, 12, 0, 0, TimeSpan.Zero), dueDateTime: new DateTimeOffset(2026, 11, 19, 12, 0, 0, TimeSpan.Zero))` | `{"StartDateTime": "2026-11-17T12:00:00+00:00", "DueDateTime": "2026-11-19T12:00:00+00:00"}` | Expression | [Start Date Time][StartDateTime Property] must be earlier than or equal to [Due Date Time][DueDateTime Property]. |

### Convert AddOrUpdateEmailFlag to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `new AddOrUpdateEmailFlag(startDateTime: new DateTimeOffset(2026, 11, 17, 12, 0, 0, TimeSpan.Zero), dueDateTime: new DateTimeOffset(2026, 11, 19, 12, 0, 0, TimeSpan.Zero))` | `"{\r\n  \"StartDateTime\": \"2026-11-17T12:00:00+00:00\",\r\n  \"DueDateTime\": \"2026-11-19T12:00:00+00:00\"\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `AddOrUpdateEmailFlag`.
- The Literal Editor is available for [Input][] properties where the data type is `AddOrUpdateEmailFlag`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `AddOrUpdateEmailFlag`.

### Known Limitations

None

## See Also

### Related Data Types

- [EmailFlag][]
- [DateTimeOffset][]

### Related Blocks

- [Update Email Using Microsoft 365][]
- [Update Emails Using Microsoft 365][]

### External Documentation

None

[StartDateTime Property]: {{< ref "#start-date-time" >}}
[DueDateTime Property]: {{< ref "#due-date-time" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Nullable]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[EmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailFlag.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Update Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailUsingMicrosoft365.MainDoc" >}}
[Update Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailsUsingMicrosoft365.MainDoc" >}}
