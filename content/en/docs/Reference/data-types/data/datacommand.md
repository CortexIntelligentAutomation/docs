---
title: "DataCommand"
linkTitle: "DataCommand"
description: "Any data type representing configuration for data source commands."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.DataCommand)</p>

## Summary

Any data type representing configuration for data source commands.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `DataCommand` |
| **Full Name:**         | `Cortex.DataTypes.Data.DataCommand` |
| **Alias:**             | N/A |
| **Description:**       | Any data type representing configuration for data source commands. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

The Command Text is used to create the command that will be run against the data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@""` |

### Parameters

Parameters are used to pass information to the command that will be run against the data source.

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

For more information see [Parameterised Commands][Parameterised Commands]

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is Advanced | `true` |
| Default Editor | [Expression][] |
| Default Value | [dynamic][] with no value |

## Remarks

### Most Common DataCommand Data Types

Any of the following data types can be used where a `DataCommand` is required:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Create a DataCommand

For some of the ways that a `DataCommand` can be created, please see each of the `DataCommand` data types:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Convert DataCommand to Text

For some of the ways that a `DataCommand` can be converted to text, please see each of the `DataCommand` data types:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Parameterised Commands

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

The `@` symbol denotes a parameter within the [CommandText][] (e.g. `"SELECT * FROM Table WHERE Name = @Parameter"`). An example of using parameters can be found in [Executing Multiple Commands (Safe)][], whereas, an example of inserting variables into a statement without parameters can be found in [Executing Multiple Commands (Unsafe)][]

For more information see [Parameterised Commands][Block: Parameterised Commands].

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `DataCommand`.
* The Literal Editor is available for [Input][] properties where the data type is `DataCommand`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `DataCommand`.

### Known limitations

None

## See Also

### Related Data Types

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

* [SQL Injection][]

[CommandText]: {{< ref "#command-text" >}}
[Parameterised Commands]: {{< ref "#parameterised-commands" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}

[Executing Multiple Commands (Safe)]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ExecutingMultipleCommandsSafe" >}}
[Executing Multiple Commands (Unsafe)]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ExecutingMultipleCommandsUnsafe" >}}
[Block: Parameterised Commands]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}

[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}

[SQL Injection]: {{< url "W3.SqlInjection" >}}
