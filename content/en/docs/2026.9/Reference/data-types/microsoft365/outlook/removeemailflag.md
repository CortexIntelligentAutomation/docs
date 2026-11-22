---
title: "RemoveEmailFlag"
linkTitle: "RemoveEmailFlag"
description: "Removes the follow-up flag, and all of its dates, from an email."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.RemoveEmailFlag)</p>

## Summary

The `RemoveEmailFlag` data type is an [EmailFlag][] that removes the follow-up flag, and all of its dates, from an email.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `RemoveEmailFlag` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.RemoveEmailFlag` |
| **Alias:**             | N/A |
| **Description:**       | Removes the follow-up flag, and all of its dates, from an email. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `EmailFlag`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Remove Flag

`true` removes the follow-up flag and all of its dates from the email. `false` leaves the email's flag unchanged, the same as passing no flag at all. Defaults to `true`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Boolean][] with value `true` |

## Remarks

### Create a RemoveEmailFlag

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `RemoveEmailFlag` constructor | `new RemoveEmailFlag(removeFlag: true)` | `{"RemoveFlag": true}` | Expression | |

### Convert RemoveEmailFlag to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `new RemoveEmailFlag(removeFlag: true)` | `"{\r\n  \"RemoveFlag\": true\r\n}"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `RemoveEmailFlag`.
- The Literal Editor is available for [Input][] properties where the data type is `RemoveEmailFlag`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `RemoveEmailFlag`.

### Known Limitations

None

## See Also

### Related Data Types

- [EmailFlag][]
- [Boolean][]

### Related Blocks

- [Update Email Using Microsoft 365][]
- [Update Emails Using Microsoft 365][]

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[EmailFlag]: {{< url path="Cortex.Reference.DataTypes.Microsoft365.Outlook.EmailFlag.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Update Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailUsingMicrosoft365.MainDoc" >}}
[Update Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.UpdateEmail.UpdateEmailsUsingMicrosoft365.MainDoc" >}}
