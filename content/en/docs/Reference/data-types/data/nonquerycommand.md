---
title: "NonQueryCommand"
linkTitle: "NonQueryCommand"
description: "Holds the information for running a Non Query command against a data source."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.NonQueryCommand)</p>

## Summary

A `NonQueryCommand` data type is used to define single or multiple [Non Query Statements][Non Query Statement] that can be run against a data source. Statements can be [parameterised][Parameterised Commands], which is recommended to prevent [SQL Injection][].

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `NonQueryCommand` |
| **Full Name:**         | `Cortex.DataTypes.Data.NonQueryCommand` |
| **Alias:**             | N/A |
| **Description:**       | Defines single or multiple Non Query Statements that can be run against a data source. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `DataCommand`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

The Command Text is used to define single or multiple [Non Query Statements][Non Query Statement] that will be run against the data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Expression][TODO] |
| Default Value | [EncryptableText][] with value `$@""` |

### Parameters

Parameters are used to pass information to the [Non Query Statements][Non Query Statement] that will be run against the data source.

It is recommended to always use [Parameterised Commands][] as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

For more information see [Parameterised Commands][].

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is Advanced | `true` |
| Default Editor | [Expression][TODO] |
| Default Value | [dynamic][] with no value |

## Remarks

### Create a NonQueryCommand

The following table shows some of the ways that a `NonQueryCommand` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `NonQueryCommand` constructor | `new NonQueryCommand("INSERT INTO Table (FirstColumn, SecondColumn) VALUES (\"Value1\", \"Value2\")", null)`    | `{CommandText: "INSERT INTO Table (FirstColumn, SecondColumn) VALUES (\"Value1\", \"Value2\")", Parameters: null}` | Expression |  |
|  | `new NonQueryCommand("INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2)", new { InsertParameter1 = "Value1", InsertParameter2 = "Value2" })`    | `{"CommandText": "INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2)", "Parameters": { "InsertParameter1": \"Value1\", "InsertParameter2": \"Value2\" } }` | Expression | It is recommended to always use [Parameterised Commands][] as they prevent [SQL Injection][] |

A `NonQueryCommand` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `CommandText`| `EncryptableText`| `$@"INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2)"` | The command that will be executed against the data source. |
| `Parameters`| `dynamic`| `new { InsertParameter1 = "Value1", InsertParameter2 = "Value2" })` | The parameters that are used within a [Parameterised Command][Parameterised Commands]. |

### Convert NonQueryCommand to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)NonQueryCommand.ToString()` | `"Cortex.DataTypes.Data.NonQueryCommand"` | Expression | ToString will return the Full Name of the NonQueryCommand Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{CommandText: "INSERT INTO Table (FirstColumn, SecondColumn) VALUES (\"Value1\", \"Value2\")", Parameters: null}` | `"Cortex.DataTypes.Data.NonQueryCommand"` | N/A  | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{CommandText: "INSERT INTO Table (FirstColumn, SecondColumn) VALUES (\"Value1\", \"Value2\")", Parameters: null}` | `"{\r\n  \"CommandText\": \"INSERT INTO Table (FirstColumn, SecondColumn) VALUES (\\\"Value1\\\", \\\"Value2\\\")\",\r\n  \"Parameters\": null\r\n}"` | N/A  | See [Convert Object To Json][] |

### Parameterised Commands

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the command is executed.

The `@` symbol denotes a parameter within the [CommandText][] (e.g. `"INSERT INTO Table (FirstColumn) VALUES (@Parameter)"`). An example of using parameters can be found in [Executing Multiple Commands (Safe)][], whereas, an example of inserting variables into a statement without parameters can be found in [Executing Multiple Commands (Unsafe)][]

For more information see [Parameterised Commands][Block: Parameterised Commands].

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `NonQueryCommand`.
* The Literal Editor is available for [Input][] properties where the data type is `NonQueryCommand`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is 

### Known limitations

#### ToString Method always returns the Full Name

Currently, if the `ToString()` method is used on a `NonQueryCommand`, then its Full Name will be returned; instead of a representation of the data within the `NonQueryCommand`.

In future this limitation may be removed.

## See Also

### Related Data Types

* [DataCommand][]
* [Command][]
* [Commands][]
* [QueryCommand][]

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
[Non Query Statement]: {{< url "Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.NonQueryStatements" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[DataCommand]: {{< url "Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}

[SQL Injection]: {{< url "W3.SqlInjection" >}}
