---
title: "Command"
linkTitle: "Command"
description: "Holds the information for parsing a command, running a single query or non query command on a data source."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Data.Command)</p>

## Summary

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `Command` |
| **Full Name:**         | `Cortex.DataTypes.Data.Command` |
| **Alias:**             | N/A |
| **Description:**       | Holds the information for parsing a command, running a single query or non query command on a data source. |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `DataCommand`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

### Parameters

## Remarks

### Create a Command

The following table shows some of the ways that a `Command` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `Command` constructor | `new Command("select * from Table", null)`    | `{CommandText: "select * from Table", Parameters: null}` | Expression |  |

A `Command` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `CommandText`        | `Int32`   | The command that will be executed or queried against the data source. |
| `Parameters`       | `Int32`   | The parameters that are used within a [Parameterised Command][TODO]. |

### Convert Command to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)Command.ToString()` | `"Cortex.DataTypes.Data.Command"` | Expression | ToString will return the Full Name of the Command Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{CommandText: "select * from Table", Parameters: null}` | `"1/7/2022 1:00:00 PM +00:00"` | Expression | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{CommandText: "select * from Table", Parameters: null}` | `""` | Expression | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Command`.
* The Literal Editor is not available for [Input][] properties where the data type is `Command`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Command`.

## Known limitations

None

## See Also

### Related Data Types

* [DataCommand][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert Object To Text]: {{< url "Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}

[DataCommand]: {{< url "Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
