---
title: "Commands"
linkTitle: "Commands"
description: "Holds the information for parsing a command, running multiple query and non query commands on a data source."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Data.Commands)</p>

## Summary

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `Commands` |
| **Full Name:**         | `Cortex.DataTypes.Data.Commands` |
| **Alias:**             | N/A |
| **Description:**       | Holds the information for parsing a command, running multiple query and non query commands on a data source. |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `DataCommand`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

The Command Text is used to create the command that will be run against the data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Literal][TODO] |
| Default Value | [EncryptableText][] with no value |

### Parameters

Parameters are used to pass information top the command that will be run against the data source.

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

For more information see [Parameterised Commands][]

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is Advanced | `true` |
| Default Editor | [Expression][TODO] |
| Default Value | [EncryptableText][] with no value |

## Remarks

### Create a Commands

The following table shows some of the ways that a `Commands` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `Commands` constructor | `new Commands("select * from Table", null)`    | `{CommandText: "select * from Table", Parameters: null}` | Expression |  |

A `Commands` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `CommandText`        | `Int32`   | The command that will be executed or queried against the data source. |
| `Parameters`       | `Int32`   | The parameters that are used within a [Parameterised Command][TODO]. |

### Convert Commands to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)Commands.ToString()` | `"Cortex.DataTypes.Data.Commands"` | Expression | ToString will return the Full Name of the Command Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{CommandText: "select * from Table", Parameters: null}` | `"1/7/2022 1:00:00 PM +00:00"` | Expression | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{CommandText: "select * from Table", Parameters: null}` | `""` | Expression | See [Convert Object To Json][] |

### Parameterised Commands

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

The `@` symbol denotes a parameter within the [CommandText][] (e.g. `"SELECT * FROM Table WHERE Name = @Parameter"`). An example of using parameters can be found in [Executing Multiple Commands (Safe)][], whereas, an example of inserting variables into a statement without parameters can be found in [Executing Multiple Commands (Unsafe)][]

For more information see [Parameterised Commands][Block: Parameterised Commands].

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Commands`.
* The Literal Editor is available for [Input][] properties where the data type is `Commands`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Commands`.

## Known limitations

None

## See Also

### Related Data Types

* [DataCommand][]
* [Command][]
* [QueryCommand][]
* [NonQueryCommand][]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

* [SQL Injection][]

[CommandText]: {{< ref "#command-text" >}}
[Parameterised Commands]: {{< ref "#parameterised-commands" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Executing Multiple Commands (Safe)]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ExecutingMultipleCommandsSafe" >}}
[Executing Multiple Commands (Unsafe)]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ExecutingMultipleCommandsUnsafe" >}}
[Block: Parameterised Commands]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}

[DataCommand]: {{< url "Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}

[SQL Injection]: {{< url "W3.SqlInjection" >}}
