---
title: "OracleParameters"
linkTitle: "OracleParameters"
description: "Defines a type of parameter that can be run as part of a Command."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.OracleParameters)</p>

## Summary

The `OracleParameters` data type is used to define multiple parameters for the [OracleConnectionDetails][] within the [Parameters property][ParametersProperty] on the [DataCommand][] data types.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `OracleParameters` |
| **Full Name:**         | `Cortex.DataTypes.Data.OracleParameters` |
| **Alias:**             | N/A |
| **Description:**       | Defines a type of parameter that can be run as part of a Command. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `OracleParameters`, `IParameters<OracleParameter>`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Basic

Parameters that will be processed with only a name and value.

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [dynamic][] with no value |

### Advanced

Parameters that will be processed with a name, value, type, direction and size.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumberable][]&lt;[OracleParameter][]&gt; |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [IEnumberable][]&lt;[OracleParameter][]&gt; with no value |

## Remarks

### Create an OracleParameters

The following table shows some of the ways that an `OracleParameters` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `OracleParameters` constructor | `new OracleParameters(new {parameterName = "parameterValue",}, new List<OracleParameter>(){ new OracleParameter("name", $@"", OracleMappingType.Clob, ParameterDirection.Input, 0), })` | `{"Basic": {"parameterName": "parameterValue"},"Advanced": [{"Name": "name","Value": "","Type": "OracleMappingType.Clob","Direction": "ParameterDirection.Input","Size": 0}]}` | Expression | |

### Convert OracleParameters to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)OracleParameters.ToString()` | `"Cortex.DataTypes.Data.OracleParameters"` | Expression | ToString will return the Full Name of the OracleParameters Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{"Basic": {"parameterName": "parameterValue"},"Advanced": [{"Name": "name","Value": "","Type": "OracleMappingType.Clob","Direction": "ParameterDirection.Input","Size": 0}]}` | `"Cortex.DataTypes.Data.OracleParameters"` | N/A  | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{"Basic": {"parameterName": "parameterValue"},"Advanced": [{"Name": "name","Value": "","Type": "OracleMappingType.Clob","Direction": "ParameterDirection.Input","Size": 0}]}` | `"{"Basic": {"parameterName": "parameterValue"},"Advanced": [{"Name": "name","Value": "","Type": 105,"Direction": 1,"Size": 0}]}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `OracleParameters`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OracleParameters`.

### Known limitations

#### ToString Method always returns the Full Name

Currently, if the `ToString()` method is used on a `OracleParameters`, then its Full Name will be returned; instead of a representation of the data within the `Command`.

In future this limitation may be removed.

## See Also

### Related Data Types

* [DataCommand][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]
* [OracleParameter][]
* [OracleConnectionDetails][]
* [IParameters&lt;T&gt;][IParameters]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

* None

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
[IEnumberable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[ParametersProperty]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.Parameters" >}}
[OracleParameter]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameter.MainDoc" >}}
[IParameters]: {{< url path="Cortex.Reference.DataTypes.Data.IParameters.MainDoc" >}}
