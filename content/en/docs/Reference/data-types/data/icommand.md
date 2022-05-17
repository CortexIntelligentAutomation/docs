---
title: "ICommand"
linkTitle: "ICommand"
description: "The interface defining data source commands."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Data.ICommand)</p>

## Summary

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `ICommand` |
| **Full Name:**         | `System.Collections.Generic.ICommand` |
| **Alias:**             | N/A |
| **Description:**       | The interface defining data source commands. |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Command Text

### Parameters

## Remarks

### Most Common ICommand Data Types

Any of the following data types can be used where an `ICommand` is required:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Create an ICommand

For some of the ways that an `ICommand` can be created, please see each of the `ICommand` data types:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Convert ICommand to Text

For some of the ways that an `ICommand` can be converted to text, please see each of the `ICommand` data types:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `ICommand`.
* The Literal Editor is not available for [Input][] properties where the data type is `ICommand`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `ICommand`.

## Known limitations

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

None

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}

[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
