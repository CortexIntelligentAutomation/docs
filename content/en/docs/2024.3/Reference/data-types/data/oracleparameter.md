---
title: "OracleParameter"
linkTitle: "OracleParameter"
description: "Defines a type of parameter that can be run as part of a Command."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.OracleParameter)</p>

## Summary

An `OracleParameter` data type is used for the [Parameters property][ParametersProperty] on the [DataCommand][] data type.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `OracleParameter` |
| **Full Name:**         | `Cortex.DataTypes.Data.OracleParameter` |
| **Alias:**             | N/A |
| **Description:**       | Defines a type of parameter that can be run as part of a Command. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `OracleParameter`, `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### Name

The name of the parameter that is being defined.

| | |
|--------------------|---------------------------|
| Data Type | [string][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [string][] with value `$@""` |

### Value

The value of the parameter that is being defined.

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Is Advanced | `true` |
| Default Editor | [Expression][] |
| Default Value | [dynamic][] with no value |

### Type

The type of the parameter that is being defined.

| | |
|--------------------|---------------------------|
| Data Type | [OracleMappingType][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [OracleMappingType][] with value `0` |

All Mapping Types:

* BFile = 101,
* Blob = 102,
* Byte = 103,
* Char = 104,
* Clob = 105,
* Date = 106,
* Decimal = 107,
* Double = 108,
* Long = 109,
* LongRaw = 110,
* Int16 = 111,
* Int32 = 112,
* Int64 = 113,
* IntervalDS = 114,
* IntervalYM = 115,
* NClob = 116,
* NChar = 117,
* NVarchar2 = 119,
* Raw = 120,
* RefCursor = 121,
* Single = 122,
* TimeStamp = 123,
* TimeStampLTZ = 124,
* TimeStampTZ = 125,
* Varchar2 = 126,
* XmlType = 127,
* BinaryDouble = 132,
* BinaryFloat = 133

### ParameterDirection

The direction of the parameter that is being defined.

| | |
|--------------------|---------------------------|
| Data Type | [ParameterDirection][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [ParameterDirection][] with value `0` |

All Parameter Directions:

* Input = 1
* Output = 2
* InputOutput = 3
* ReturnValue = 6

### Size

The size of the parameter that is being defined.

| | |
|--------------------|---------------------------|
| Data Type | [int][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [int][] with value `0` |

## Remarks

### Create an OracleParameter

The following table shows some of the ways that a `OracleParameter` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `OracleParameter` constructor | `new OracleParameter("name", $@"", OracleMappingType.Clob, ParameterDirection.Input, 0)` | `{name: "name", value: $@"value", type: OracleMappingType.Clob, direction: ParameterDirection.Input, size: 0}` | Expression | |

### Convert OracleParameter to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `($)OracleParameter.ToString()` | `"Cortex.DataTypes.Data.OracleParameter"` | Expression | ToString will return the Full Name of the OracleParameter Data Type |
| Use `Convert Object To Text` block | where `Object` property has a value of `{name: "name", value: $@"value", type: OracleMappingType.Clob, direction: ParameterDirection.Input, size: 0}` | `"Cortex.DataTypes.Data.OracleParameter"` | N/A  | See [Convert Object To Text][] |
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
[ParametersProperty]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.Parameters" >}}
