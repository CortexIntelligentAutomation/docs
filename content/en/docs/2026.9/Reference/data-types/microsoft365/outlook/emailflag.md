---
title: "EmailFlag"
linkTitle: "EmailFlag"
description: "The follow-up flag that can be set on an Outlook email."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.EmailFlag)</p>

## Summary

The `EmailFlag` data type is the follow-up flag that [Update Email Using Microsoft 365][] and [Update Emails Using Microsoft 365][] can set on an email.

`EmailFlag` is abstract. Create one of the types that extend it, each of which only takes the dates that apply to it:

- [AddOrUpdateEmailFlag][] flags an email, or replaces the flag it already has
- [CompleteEmailFlag][] marks the follow-up as complete
- [RemoveEmailFlag][] removes the flag and all of its dates

A `null` flag leaves the email's flag unchanged.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `EmailFlag` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.EmailFlag` |
| **Alias:**             | N/A |
| **Description:**       | The follow-up flag that can be set on an Outlook email. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Remarks

### Create or convert an EmailFlag

`EmailFlag` cannot be created or converted to text. Create and convert [AddOrUpdateEmailFlag][], [CompleteEmailFlag][] or [RemoveEmailFlag][].

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailFlag`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailFlag`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailFlag`.

### Known Limitations

- Microsoft 365 stores flag dates in UTC. The Update Email blocks convert the dates on the flag to that form before sending them.
- Microsoft 365 does not allow a start date without a due date, or a due date without a start date. [AddOrUpdateEmailFlag][] fills in the date that was left unset. See [AddOrUpdateEmailFlag][] for the rules.
- A completed flag keeps the date and drops the time. See [CompleteEmailFlag][].

## See Also

### Related Data Types

- [AddOrUpdateEmailFlag][]
- [CompleteEmailFlag][]
- [RemoveEmailFlag][]

### Related Blocks

- [Update Email Using Microsoft 365][]
- [Update Emails Using Microsoft 365][]

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[AddOrUpdateEmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.AddOrUpdateEmailFlag.MainDoc" >}}
[CompleteEmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.CompleteEmailFlag.MainDoc" >}}
[RemoveEmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.RemoveEmailFlag.MainDoc" >}}

[Update Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailUsingMicrosoft365.MainDoc" >}}
[Update Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailsUsingMicrosoft365.MainDoc" >}}
