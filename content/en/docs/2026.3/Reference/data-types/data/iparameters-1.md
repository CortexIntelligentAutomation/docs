---
title: "IParameters<T>"
linkTitle: "IParameters<T>"
description: "Any data type representing a parameter for use in the parameters property on the DataCommand data types."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.IParameters)</p>

## Summary

Any data type representing a parameter for use in the [Parameters property][ParametersProperty] on the [DataCommand][] data types.

`T` indicates the type of [IParameter][] that will be used for the advanced property.

`OracleParameters` is the most common example.

| | |
|-|-|
| **Category:**          | Data                                                   |
| **Name:**              | `IParameters<T>`                                    |
| **Full Name:**         | `Cortex.DataTypes.Data.IParameters<T>`         |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing a parameter for use in the Parameters property on the DataCommand data types.                                       |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `OracleParameters`, `Object`, `dynamic`                            |
|                        | `OracleParameters` (e.g. where `IParameters<T>` is `IParameters<OracleParameter>`) |
| **Can be cast to:**    | N/A |

## Remarks

### Most Common IParameters&lt;T&gt; Data Types

Any of the following data types can be used where an `IParameters<T>` is required:

* [OracleParameters][]

### Create an IParameters&lt;T&gt;

For some of the ways that an `IParameters<T>` can be created, please see each of the `IParameters<T>` data types:

* [OracleParameters][CreateOracleParameters]

### Convert IParameters&lt;T&gt; to Text

For some of the ways that an `IParameters<T>` can be converted to text, please see each of the `IParameters<T>` data types:

* [OracleParameters][ConvertOracleParameters]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `IParameters<T>`.
* The Literal Editor is not available for [Input][] properties where the data type is `IParameters<T>`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `IParameters<T>`.

### Known Limitations

* None

## See Also

### Related Data Types

* [IParameter][]
* [OracleParameters][]

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
[OracleParameters]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameters.MainDoc" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}
[CreateOracleParameters]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameters.Create" >}}
[ConvertOracleParameters]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameters.Convert" >}}
[IParameter]: {{< url path="Cortex.Reference.DataTypes.Data.IParameter.MainDoc" >}}
