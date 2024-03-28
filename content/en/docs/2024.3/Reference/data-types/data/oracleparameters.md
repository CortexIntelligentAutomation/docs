---
title: "OracleParameters"
linkTitle: "OracleParameters"
description: "Defines a type of parameter that can be run as part of a Command."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.OracleParameters)</p>

## Summary

An `OracleParameters` data type is used for the [Parameters property][ParametersProperty] on the [DataCommand][] data type.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `OracleParameters` |
| **Full Name:**         | `Cortex.DataTypes.Data.OracleParameters` |
| **Alias:**             | N/A |
| **Description:**       | Defines a type of parameter that can be run as part of a Command. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `OracleParameters`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Basic

The name of the parameter that is being defined.

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [dynamic][] with no value |

### Advanced

The value of the parameter that is being defined.

| | |
|--------------------|---------------------------|
| Data Type | [IEnumberable][]&lt;[OracleParameter][]&gt; |
| Is Advanced | `true` |
| Default Editor | [Expression][] |
| Default Value | [IEnumberable][]&lt;[OracleParameter][]&gt; with no value |

## Remarks

### Create a OracleParameters

The following table shows some of the ways that a `OracleParameters` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `OracleParameters` constructor | `new OracleParameters(new {parameterName = "parameterValue",}, new List<OracleParameter>(){ new OracleParameter("name", $@"", OracleMappingType.Clob, ParameterDirection.Input, 0), })` | `{ new OracleParameters(basic: new {parameterName = "parameterValue",}, advanced: new List<OracleParameter>(){ new OracleParameter(name: "name", value: $@"", type: OracleMappingType.Clob, direction: ParameterDirection.Input, size: 0), })}` | Expression | |

### Convert OracleParameters to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)OracleParameters.ToString()` | `"Cortex.DataTypes.Data.OracleParameters"` | Expression | ToString will return the Full Name of the OracleParameters Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{name: "name", value: $@"value", type: OracleMappingType.Clob, direction: ParameterDirection.Input, size: 0}` | `"Cortex.DataTypes.Data.OracleParameters"` | N/A  | See [Convert Object To Text][] |
| Use `Convert Object To Json` block    | where `Object` property has a value of `{name: "name", value: $@"value", type: OracleMappingType.Clob, direction: ParameterDirection.Input, size: 0}` | `"{\r\n  \"name\": \"name\",\r\n  \"value\": \"value\",\r\n  \"type\": 105,\r\n  \"direction\": 1,\r\n  \"size\": 0}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `OracleParameter`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OracleParameter`.

### Known limitations

#### ToString Method always returns the Full Name

Currently, if the `ToString()` method is used on a `OracleParameter`, then its Full Name will be returned; instead of a representation of the data within the `Command`.

In future this limitation may be removed.

## See Also

### Related Data Types

* [DataCommand][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

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
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[ParametersProperty]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.Parameters" >}}
