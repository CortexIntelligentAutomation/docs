---
title: "Command"
linkTitle: "Command"
description: "Defines a single statement that can be run against a data source."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.Command)</p>

## Summary

A `Command` data type is used to define a single [statement][Statements] that can be run against a data source. The statement can be [parameterised][Parameterised Commands], which is recommended to prevent [SQL Injection][].

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `Command` |
| **Full Name:**         | `Cortex.DataTypes.Data.Command` |
| **Alias:**             | N/A |
| **Description:**       | Defines a single statement that can be run against a data source. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `DataCommand`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

The Command Text is used to define a single [statement][Statements] that will be run against the data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@""` |

### Parameters

Parameters are used to pass information to the [statement][Statements] that will be run against the data source.

It is recommended to always use [Parameterised Commands][] as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

For more information see [Parameterised Commands][].

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is Advanced | `true` |
| Default Editor | [Expression][] |
| Default Value | [dynamic][] with no value |

## Remarks

### Create a Command

The following table shows some of the ways that a `Command` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `Command` constructor | `new Command("SELECT * FROM Table", null)`    | `{CommandText: "SELECT * FROM Table", Parameters: null}` | Expression |  |
|  | `new Command("SELECT * FROM Table WHERE Id < @SelectParameter", new {SelectParameter = 3})`    | `{"CommandText": "SELECT * FROM Table WHERE Id < @SelectParameter", "Parameters": {"SelectParameter": 3}}` | Expression | It is recommended to always use [Parameterised Commands][] as they prevent [SQL Injection][] |

A `Command` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `CommandText`| `EncryptableText`| `$@"SELECT * FROM Table WHERE Id < @SelectParameter"` | The command that will be executed or queried against the data source. |
| `Parameters`| `dynamic`| `new {SelectParameter = 3}` | The parameters that are used within a [Parameterised Command][Parameterised Commands]. |

### Convert Command to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)Command.ToString()` | `"Cortex.DataTypes.Data.Command"` | Expression | ToString will return the Full Name of the Command Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{CommandText: "SELECT * FROM Table", Parameters: null}` | `"Cortex.DataTypes.Data.Command"` | N/A  | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{CommandText: "SELECT * FROM Table", Parameters: null}` | `"{\r\n  \"CommandText\": \"SELECT * FROM Table\",\r\n  \"Parameters\": null\r\n}"` | N/A  | See [Convert Object To Json][] |

### Parameterised Commands

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

The `@` symbol denotes a parameter within the [CommandText][] (e.g. `"SELECT * FROM Table WHERE Name = @Parameter"`). An example of using parameters can be found in [Executing Multiple Commands (Safe)][], whereas, an example of inserting variables into a statement without parameters can be found in [Executing Multiple Commands (Unsafe)][]

For more information see [Parameterised Commands][Block: Parameterised Commands].

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Command`.
* The Literal Editor is not available for [Input][] properties where the data type is `Command`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Command`.

### Known limitations

#### ToString Method always returns the Full Name

Currently, if the `ToString()` method is used on a `Command`, then its Full Name will be returned; instead of a representation of the data within the `Command`.

In future this limitation may be removed.

#### Block Statements Incompatible (Oracle Only)

Using an [OracleBlockStatement][] in the [CommandText][] will throw a [Command Exception][CommandExceptionIncompatibleStatementType]. You must use either a [QueryCommand][] or [NonQueryCommand][] instead.

## See Also

### Related Data Types

* [DataCommand][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

* [OracleBlockStatement][]
* [SQL Injection][]

[CommandText]: {{< ref "#command-text" >}}
[Parameterised Commands]: {{< ref "#parameterised-commands" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Executing Multiple Commands (Safe)]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ExecutingMultipleCommandsSafe" >}}
[Executing Multiple Commands (Unsafe)]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ExecutingMultipleCommandsUnsafe" >}}
[Block: Parameterised Commands]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[Statements]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.Statements" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}

[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[DataCommand]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[Commands]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[QueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
[CommandException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}
[CommandExceptionIncompatibleStatementType]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.IncompatibleStatementType" >}}
[ConnectionDetailsProperty]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ConnectionDetailsProperty" >}}
[CommandProperty]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.CommandProperty" >}}
[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}

[OracleBlockStatement]: {{< url path="Oracle.PL-SQL.BlockStatement" >}}
[SQL Injection]: {{< url path="W3.SqlInjection" >}}
