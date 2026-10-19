---
title: "IParameter"
linkTitle: "IParameter"
description: "Any data type representing a parameter for use in the parameters property on the DataCommand data types."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.IParameter)</p>

## Summary

Any data type representing a parameter for use in the [Parameters property][ParametersProperty] on the [DataCommand][] data types.

`OracleParameter` is the most common example.

| | |
|-|-|
| **Category:**          | Data                                                   |
| **Name:**              | `IParameter`                                    |
| **Full Name:**         | `Cortex.DataTypes.Data.IParameter`         |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing a parameter for use in the parameters property on the DataCommand data types. |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `Object`, `dynamic`                            |
| **Can be cast to:**    | N/A |

## Remarks

### Most Common IParameter Data Types

Any of the following data types can be used where an `IParameter` is required:

* [OracleParameter][]

### Create an IParameter

For some of the ways that an `IParameter` can be created, please see each of the `IParameter` data types:

* [OracleParameter][CreateOracleParameter]

### Convert IParameter to Text

For some of the ways that an `IParameter` can be converted to text, please see each of the `IParameter` data types:

* [OracleParameter][ConvertOracleParameter]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IParameter`.
* The Literal Editor is not available for [Input][] properties where the data type is `IParameter`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `IParameter`.

### Known Limitations

* None

## See Also

### Related Data Types

* [OracleParameter][]

### Related Concepts

* None

### External Documentation

* None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[StructureCreateNew]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.CreateNew" >}}
[StructureConvertToText]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.ConvertToText" >}}
[ParametersProperty]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.Parameters" >}}
[OracleParameter]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameter.MainDoc" >}}
[CommandProperty]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.CommandProperty" >}}
[DataCommand]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[OracleParameter]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameter.MainDoc" >}}
[CreateOracleParameter]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameter.Create" >}}
[ConvertOracleParameter]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameter.Convert" >}}
[OracleParameters]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameters.MainDoc" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}
