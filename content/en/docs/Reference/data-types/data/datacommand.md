---
title: "DataCommand"
linkTitle: "DataCommand"
description: "The abstract class defining data source commands."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Data.DataCommand)</p>

## Summary

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `DataCommand` |
| **Full Name:**         | `Cortex.DataTypes.Data.DataCommand` |
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

### Most Common DataCommand Data Types

Any of the following data types can be used where an `DataCommand` is required:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Create an DataCommand

For some of the ways that an `DataCommand` can be created, please see each of the `DataCommand` data types:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Convert DataCommand to Text

For some of the ways that an `DataCommand` can be converted to text, please see each of the `DataCommand` data types:

* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `DataCommand`.
* The Literal Editor is available for [Input][] properties where the data type is `DataCommand`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `DataCommand`.

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
