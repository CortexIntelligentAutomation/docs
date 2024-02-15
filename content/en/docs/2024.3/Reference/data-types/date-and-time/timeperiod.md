---
title: "TimePeriod"
linkTitle: "TimePeriod"
description: "Used to represent a time interval (duration of time or elapsed time) that is measured as a positive or negative number of `years`, `months`, `days`, `hours`, `minutes`, `seconds`, and `milliseconds`."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.DateAndTime.TimePeriod)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}
## Summary
The `TimePeriod` datatype is used to represent a time interval (duration of time or elapsed time) that is measured as a positive or negative number of `years`, `months`, `days`, `hours`, `minutes`, `seconds`, and `milliseconds`.

| | |
|-|-|
| **Category:**          | Text                                                          |
| **Name:**              | `TimePeriod`                                                        |
| **Full Name:**         | `Cortex.DataTypes.DateAndTime.TimePeriod`                                                 |
| **Alias:**             | N/A |
| **Description:**       | Used to represent a time interval. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `TimePeriod`, `object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Years

### Months

### Days

### Hours

### Minutes

### Seconds

### Milliseconds

## Remarks

### Create a TimePeriod

### Convert TimePeriod to Text

### Property Editor Support
- The Expression Editor is available for [Input][] properties where the data type is `TimePeriod`.
- The Literal Editor is available for [Input][] properties where the data type is `TimePeriod`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TimePeriod`.

### Known Limitations
None

## See Also

### Related Data Types
 - [DateTime]
 - [TimeSpan]
### Related Concepts
 - [Working with Date and Time][]
### External Documentation

[Working with Date and Time]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[TimeSpan]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimeSpan.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}