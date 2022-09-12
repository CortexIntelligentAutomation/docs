---
title: "QueryCommand"
linkTitle: "QueryCommand"
description: "Holds the information for running a Query command against a data source."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.QueryCommand)</p>

## Summary

A `QueryCommand` data type is used to define single or multiple [Query Statements][Query Statement] that can be run against a data source. Statements can be [parameterised][Parameterised Commands], which is recommended to prevent [SQL Injection][].

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `QueryCommand` |
| **Full Name:**         | `Cortex.DataTypes.Data.QueryCommand` |
| **Alias:**             | N/A |
| **Description:**       | Defines single or multiple Query Statements that can be run against a data source. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `DataCommand`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

The Command Text is used to define single or multiple [Query Statements][Query Statement] that will be run against the data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Expression][TODO] |
| Default Value | [EncryptableText][] with value `$@""` |

### Parameters

Parameters are used to pass information to the [Query Statements][Query Statement] that will be run against the data source.

It is recommended to always use [Parameterised Commands][] as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

For more information see [Parameterised Commands][].

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is Advanced | `true` |
| Default Editor | [Expression][] |
| Default Value | [dynamic][] with no value |

## Remarks

### Create a QueryCommand

The following table shows some of the ways that a `QueryCommand` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `QueryCommand` constructor | `new QueryCommand("SELECT * FROM Table", null)`    | `{CommandText: "SELECT * FROM Table", Parameters: null}` | Expression |  |
|  | `new QueryCommand("SELECT * FROM Table WHERE Id < @SelectParameter", new {SelectParameter = 3})`    | `{"CommandText": "SELECT * FROM Table WHERE Id < @SelectParameter", "Parameters": {"SelectParameter": 3}}` | Expression | It is recommended to always use [Parameterised Commands][] as they prevent [SQL Injection][] |

A `QueryCommand` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `CommandText`| `EncryptableText`| `$@"SELECT * FROM Table WHERE Id < @SelectParameter"` | The command that will be queried against the data source. |
| `Parameters`| `dynamic`| `new { SelectParameter = 3 })` | The parameters that are used within a [Parameterised Command][Parameterised Commands]. |

### Convert QueryCommand to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)QueryCommand.ToString()` | `"Cortex.DataTypes.Data.QueryCommand"` | Expression | ToString will return the Full Name of the QueryCommand Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{CommandText: "SELECT * FROM Table", Parameters: null}` | `"Cortex.DataTypes.Data.QueryCommand"` | N/A  | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{CommandText: "SELECT * FROM Table", Parameters: null}` | `"{\r\n  \"CommandText\": \"SELECT * FROM Table\",\r\n  \"Parameters\": null\r\n}"` | N/A  | See [Convert Object To Json][] |

### Parameterised Commands

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

The `@` symbol denotes a parameter within the [CommandText][] (e.g. `"SELECT * FROM Table WHERE Name = @Parameter"`). An example of using parameters can be found in [Executing Multiple Commands (Safe)][], whereas, an example of inserting variables into a statement without parameters can be found in [Executing Multiple Commands (Unsafe)][]

For more information see [Parameterised Commands][Block: Parameterised Commands].

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `QueryCommand`.
* The Literal Editor is available for [Input][] properties where the data type is `QueryCommand`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `QueryCommand`.

### Known limitations

#### ToString Method always returns the Full Name

Currently, if the `ToString()` method is used on a `QueryCommand`, then its Full Name will be returned; instead of a representation of the data within the `QueryCommand`.

In future this limitation may be removed.

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
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Executing Multiple Commands (Safe)]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ExecutingMultipleCommandsSafe" >}}
[Executing Multiple Commands (Unsafe)]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ExecutingMultipleCommandsUnsafe" >}}
[Block: Parameterised Commands]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[Query Statement]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.QueryStatements" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[DataCommand]: {{< url "Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}

[SQL Injection]: {{< url "W3.SqlInjection" >}}
