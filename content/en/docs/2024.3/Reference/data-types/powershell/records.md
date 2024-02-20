---
title: "Records"
linkTitle: "Records"
description: "Used to represent messages that are returned during a PowerShell execution."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.PowerShell.Records)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `Records` data type is used to represent messages that are returned during a PowerShell execution. Messages are split into categories according to the severity of their log level [Error][ErrorRecords], [Warning][WarningRecords], [Debug][DebugRecords], [Progress][ProgressRecords], [Verbose][VerboseRecords], [Information][InformationRecords],

| | |
|-|-|
| **Category:**          | PowerShell|
| **Name:**              | `Records`                                      |
| **Full Name:**         | `Cortex.DataTypes.PowerShell.Records`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | TODO. |
| **Default Value:**     | null                                                   |
| **Can be used as:**    | `TODO`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Properties

### ErrorRecords

Represents the non-terminating errors that occur from running commands or scripts during PowerShell's execution.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### WarningRecords

Represents the warning messages that occur from running commands or scripts during PowerShell's execution.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### DebugRecords

Represents the debug messages that occur from running commands or scripts during PowerShell's execution.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### ProgressRecords

Represents the status of a running command or script that occurs during PowerShell's execution.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### VerboseRecords

Represents more in depth information about the running of commands or scripts that occurs during PowerShell's execution.

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[String][]&gt; |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | [IList][]&lt;[String][]&gt; with no value |

### InformationRecords

Represents informational context destined for the host or user that occurs during PowerShell's execution.

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

[ErrorRecords]: : {{< ref "#errorrecords" >}}
[WarningRecords]: : {{< ref "#warningrecords" >}}
[DebugRecords]: : {{< ref "#debugrecords" >}}
[ProgressRecords]: : {{< ref "#progressrecords" >}}
[VerboseRecords]: : {{< ref "#verboserecords" >}}
[InformationRecords]: : {{< ref "#informationrecords" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
