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
| **Full Name:**         | `System.Collections.Generic.Command` |
| **Alias:**             | N/A |
| **Description:**       | The interface defining data source commands. |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `ICommand`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

### Parameters

## Remarks

### Create a Command

### Convert ICommand to Text

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Command`.
* The Literal Editor is not available for [Input][] properties where the data type is `Command`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Command`.

## Known limitations

None

## See Also

### Related Data Types

* [ICommand][]
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

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}

[ICommand]: {{< url "Cortex.Reference.DataTypes.Data.ICommand.MainDoc" >}}
[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
