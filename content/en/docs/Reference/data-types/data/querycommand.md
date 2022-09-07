---
title: "QueryCommand"
linkTitle: "QueryCommand"
description: "Holds the information for running a Query command on a data source."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Data.QueryCommand)</p>

## Summary

A `QueryCommand` executes the given [CommandText][] as a [Query Statement][], returning the rows retrieved from the data source. If the [CommandText][] contains multiple select statements, only the results of the first [Query Statement][] will be returned.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `QueryCommand` |
| **Full Name:**         | `Cortex.DataTypes.Data.QueryCommand` |
| **Alias:**             | N/A |
| **Description:**       | Holds the information for running a Query command on a data source. |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `DataCommand`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

For a [Query Statement][] (e.g. select):

| Result will be set to | when |
|-|-|
| [List][]&lt;[Structure][]&gt; with a single item | Single item is returned |
| [List][]&lt;[Structure][]&gt; with many items | Many items are returned |
| [List][]&lt;[Structure][]&gt; with no items | No items are returned |

For a [Non Query Statement][] (e.g. insert, update, delete, etc)

| Result will be set to &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| when |
|-|-|
| `null` | always, as [Non Query Statements][Non Query Statement] do not return data |

Note use a [QueryCommand][] for commands that have dependency between their statements (e.g. Cursors and Variables) and return data from the data source. Please see [Complex Commands][] for more information.

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

### Create a QueryCommand

The following table shows some of the ways that a `QueryCommand` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `QueryCommand` constructor | `new QueryCommand("select * from Table", null)`    | `{CommandText: "select * from Table", Parameters: null}` | Expression |  |

A `QueryCommand` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `CommandText`        | `Int32`   | The command that will be executed or queried against the data source. |
| `Parameters`       | `Int32`   | The parameters that are used within a [Parameterised Command][Parameterised Commands]. |

### Convert QueryCommand to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)QueryCommand.ToString()` | `"Cortex.DataTypes.Data.QueryCommand"` | Expression | ToString will return the Full Name of the Command Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{CommandText: "select * from Table", Parameters: null}` | `"1/7/2022 1:00:00 PM +00:00"` | Expression | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{CommandText: "select * from Table", Parameters: null}` | `""` | Expression | See [Convert Object To Json][] |

### Parameterised Commands

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

The `@` symbol denotes a parameter within the [CommandText][] (e.g. `"SELECT * FROM Table WHERE Name = @Parameter"`). An example of using parameters can be found in [Executing Multiple Commands (Safe)][], whereas, an example of inserting variables into a statement without parameters can be found in [Executing Multiple Commands (Unsafe)][]

For more information see [Parameterised Commands][Block: Parameterised Commands].

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `QueryCommand`.
* The Literal Editor is available for [Input][] properties where the data type is `QueryCommand`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `QueryCommand`.

## Known limitations

None

## See Also

### Related Data Types

* [DataCommand][]
* [Command][]
* [Commands][]
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
[Complex Commands]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[Query Statement]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.QueryStatements" >}}
[Non Query Statement]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.NonQueryStatement" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[DataCommand]: {{< url "Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}

[SQL Injection]: {{< url "W3.SqlInjection" >}}
