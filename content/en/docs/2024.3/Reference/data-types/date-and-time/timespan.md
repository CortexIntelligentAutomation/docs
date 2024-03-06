---
title: "TimeSpan"
linkTitle: "TimeSpan"
description: "Used to represent a time interval (duration of time or elapsed time) that is measured as a positive or negative number of `days`, `hours`, `minutes`, `seconds`, and `milliseconds`. It can be used wherever a `TimePeriod` is expected, and wll be converted to a `TimePeriod` automatically."
---

# {{% param title %}}

<p class="namespace">(System.TimeSpan)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

Used to represent a time interval (duration of time or elapsed time) that is measured as a positive or negative number of `days`, `hours`, `minutes`, `seconds`, and `milliseconds`. It can be used wherever a `TimePeriod` is expected, and wll be converted to a `TimePeriod` automatically.

| | |
|-|-|
| **Category:**          | Date & Time                                                         |
| **Name:**              | `TimeSpan`                                                        |
| **Full Name:**         | `System.TimeSpan`                                                 |
| **Alias:**             | N/A |
| **Description:**       | Used to represent a time interval (duration of time or elapsed time) that is measured as a positive or negative number of `days`, `hours`, `minutes`, `seconds`, and `milliseconds`. It can be used wherever a `TimePeriod` is expected, and wll be converted to a `TimePeriod` automatically. |
| **Default Value:**     | `new TimeSpan(0, 0, 0, 0, 0)` |
| **Can be used as:**    | `TimeSpan`, `TimePeriod`, `object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `TimeSpan`.
- The Literal Editor is available for [Input][] properties where the data type is `TimeSpan`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `TimeSpan`.

### Known Limitations

None

## See Also

### Related Data Types

- [TimePeriod][]

### Related Concepts

- [Working with Date and Time][]

### External Documentation

- [System.TimeSpan][]

[Working with Date and Time]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[System.TimeSpan]: {{< url path="MSDocs.DotNet.Api.System.TimeSpan.MainDoc" >}}
