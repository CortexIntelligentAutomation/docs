---
title: "NonQueryCommand"
linkTitle: "NonQueryCommand"
description: "Holds the information for running a Non Query command on a data source."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Data.NonQueryCommand)</p>

## Summary

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `NonQueryCommand` |
| **Full Name:**         | `Cortex.DataTypes.Data.NonQueryCommand` |
| **Alias:**             | N/A |
| **Description:**       | Holds the information for running a Non Query command on a data source. |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `DataCommand`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

### Parameters

## Remarks

### Create a NonQueryCommand

The following table shows some of the ways that a `NonQueryCommand` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `NonQueryCommand` constructor | `new NonQueryCommand("select * from Table", null)`    | `{CommandText: "select * from Table", Parameters: null}` | Expression |  |

A `NonQueryCommand` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `CommandText`        | `Int32`   | The command that will be executed or queried against the data source. |
| `Parameters`       | `Int32`   | The parameters that are used within a [Parameterised Command][TODO]. |

### Convert NonQueryCommand to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)NonQueryCommand.ToString()` | `"Cortex.DataTypes.Data.NonQueryCommand"` | Expression | ToString will return the Full Name of the Command Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{CommandText: "select * from Table", Parameters: null}` | `"1/7/2022 1:00:00 PM +00:00"` | Expression | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{CommandText: "select * from Table", Parameters: null}` | `""` | Expression | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `NonQueryCommand`.
* The Literal Editor is available for [Input][] properties where the data type is `NonQueryCommand`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `NonQueryCommand`.

## Known limitations

None

## See Also

### Related Data Types

* [DataCommand][]
* [Command][]
* [Commands][]
* [QueryCommand][]

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
[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
