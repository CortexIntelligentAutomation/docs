---
title: "Records"
linkTitle: "Records"
description: "TODO."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.PowerShell.Records)</p>

## Summary

<img src="/images/work-in-progress.jpg">

The `Records` data type is used to represent TODO.

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

## Exceptions

TODO

## Remarks

### Create a Records

The following table shows some of the ways that `Records` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `Records` constructor |  |  | Expression |  |

A `Records` can also be created using the Literal Editor by filling in the necessary values for the following properties:

TODO:

| Property | Data Type | Example | Notes |
|-|-|-|-|

### Convert Records to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of  |  | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Records`.
- The Literal Editor is available for [Input][] properties where the data type is `Records`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Records`.

### Known Limitations

None

## See Also

### Related Data Types

None

### Related Concepts

TODO

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}

[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
