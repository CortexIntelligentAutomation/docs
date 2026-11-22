---
title: "CompleteEmailFlag"
linkTitle: "CompleteEmailFlag"
description: "Marks an email's follow-up as complete."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.CompleteEmailFlag)</p>

## Summary

The `CompleteEmailFlag` data type is an [EmailFlag][] that marks an email's follow-up as complete, with an optional date it was completed on.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `CompleteEmailFlag` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.CompleteEmailFlag` |
| **Alias:**             | N/A |
| **Description:**       | Marks an email's follow-up as complete. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `EmailFlag`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Completed Date Time

The date the follow-up was completed. Optional. Microsoft 365 only keeps the date, not the time. Defaults to `DateTimeOffset.UtcNow`.

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [Nullable][]&lt;[DateTimeOffset][]&gt; with value `DateTimeOffset.UtcNow` |

## Remarks

### The date Microsoft 365 keeps

Microsoft 365 converts the completed date to UTC and then drops the time. The Update Email blocks do the same before sending the flag, so the stored date matches what Microsoft 365 keeps.

When [Completed Date Time][CompletedDateTime Property] is `null`, the date is the UTC date of the time the block runs.

### Create a CompleteEmailFlag

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `CompleteEmailFlag` constructor | `new CompleteEmailFlag(completedDateTime: new DateTimeOffset(2026, 11, 17, 12, 0, 0, TimeSpan.Zero))` | `{"CompletedDateTime": "2026-11-17T12:00:00+00:00"}` | Expression | The time of day is dropped when the flag is sent. |
| | `new CompleteEmailFlag(completedDateTime: null)` | `{"CompletedDateTime": null}` | Expression | The block uses the UTC date it runs. |

### Convert CompleteEmailFlag to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `new CompleteEmailFlag(completedDateTime: new DateTimeOffset(2026, 11, 17, 12, 0, 0, TimeSpan.Zero))` | `"{\r\n  \"CompletedDateTime\": \"2026-11-17T12:00:00+00:00\"\r\n}"` | N/A | See [Convert Object To Json][] |
| | where `Object` property has a value of `new CompleteEmailFlag(completedDateTime: null)` | `"{\r\n  \"CompletedDateTime\": null\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `CompleteEmailFlag`.
- The Literal Editor is available for [Input][] properties where the data type is `CompleteEmailFlag`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `CompleteEmailFlag`.

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

[CompletedDateTime Property]: {{< ref "#completed-date-time" >}}

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
