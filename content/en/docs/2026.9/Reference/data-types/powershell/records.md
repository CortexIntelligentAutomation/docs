---
title: "Records"
linkTitle: "Records"
description: "Used to represent messages that are returned while executing a PowerShell command or script."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.PowerShell.Records)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `Records` data type is used to represent messages that are returned while executing a PowerShell command or script.

Messages are categorised as:

- [ErrorRecords][ErrorRecords]
- [WarningRecords][WarningRecords]
- [DebugRecords][DebugRecords]
- [ProgressRecords][ProgressRecords]
- [VerboseRecords][VerboseRecords]
- [InformationRecords][InformationRecords]

| | |
|-|-|
| **Category:**          | PowerShell|
| **Name:**              | `Records`                                      |
| **Full Name:**         | `Cortex.DataTypes.PowerShell.Records`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent messages that are returned while executing a PowerShell command or script. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `Records`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### ErrorRecords

Represents the non-terminating errors that occurred when running a PowerShell command or script.
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### WarningRecords

Represents warning messages output when running a PowerShell command or script.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### DebugRecords

Represents debug messages output when running a PowerShell command or script.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### ProgressRecords

Represents the status of a PowerShell command or script at a point in time.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### VerboseRecords

Represents detailed or diagnostic information, output when running a PowerShell command or script.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### InformationRecords

Represents general information output when running a PowerShell command or script.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Records`.
- The Literal Editor is available for [Input][] properties where the data type is `Records`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Records`.

### Known Limitations

None

## See Also

### Related Data Types

- [String][]
- [IList][]

### Related Concepts

None

### External Documentation

None

[ErrorRecords]: {{< ref "#errorrecords" >}}
[WarningRecords]: {{< ref "#warningrecords" >}}
[DebugRecords]: {{< ref "#debugrecords" >}}
[ProgressRecords]: {{< ref "#progressrecords" >}}
[VerboseRecords]: {{< ref "#verboserecords" >}}
[InformationRecords]: {{< ref "#informationrecords" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
