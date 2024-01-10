---
title: "DataCommandErrorCode"
linkTitle: "DataCommandErrorCode"
description: "Used to represent an error code explaining the reason an `CommandException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.DataCommandErrorCode)</p>

## Summary

The `DataCommandErrorCode` data type is used to represent an error code explaining the reason a [CommandException][] occurred. For more information on the exception itself, see [CommandException][].

`DataCommandErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Data                                                  |
| **Name:**              | `DataCommandErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Data.DataCommandErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason a [CommandException][] occurred. |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `(DataCommandErrorCode)0`                             |
| **Can be used as:**    | `DataCommandErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)DataCommandErrorCode.Connection` or `(System.Int16)DataCommandErrorCode.Connection` or `(short)DataCommandErrorCode.Connection`)  |
|                        | `Int32` (e.g. `(Int32)DataCommandErrorCode.Connection` or `(System.Int32)DataCommandErrorCode.Connection` or `(int)DataCommandErrorCode.Connection`)  |
|                        | `Int64` (e.g. `(Int64)DataCommandErrorCode.Connection` or `(System.Int64)DataCommandErrorCode.Connection` or `(long)DataCommandErrorCode.Connection`)  |
|                        | `Single` (e.g. `(Single)DataCommandErrorCode.Connection` or `(System.Single)DataCommandErrorCode.Connection` or `(float)DataCommandErrorCode.Connection`)  |
|                        | `Double` (e.g. `(Double)DataCommandErrorCode.Connection` or `(System.Double)DataCommandErrorCode.Connection` or `(double)DataCommandErrorCode.Connection`)  |

## Values

### Connection {#1000}

| | |
|-|-|
| **Name:**    | Connection                                     |
| **Value:**   | [Int32][] with value `1000`                      |
| **Notes:**   | Used when a [CommandException][] occured when the connection to the data source failed. |

### Statement {#2000}

| | |
|-|-|
| **Name:**    | Statement                                     |
| **Value:**   | [Int32][] with value `2000`                      |
| **Notes:**   | Used when a [CommandException][] occured due to the statement(s) being passed into the [Command Property][CommandProperty] could not be parsed. |

### IncompatibleStatementType {#2001}

| | |
|-|-|
| **Name:**    | IncompatibleStatementType                                     |
| **Value:**   | [Int32][] with value `2001`                      |
| **Notes:**   | Used when a [CommandException][] occured due to an [OracleBlockStatement][] being passed into the [Command Property][CommandProperty] when using a [Command][] or [Commands][] data type. |

### MultipleStatements {#2002}

| | |
|-|-|
| **Name:**    | MultipleStatements                                  |
| **Value:**   | [Int32][] with value `2002`                      |
| **Notes:**   | Used when a [CommandException][] occured due to multiple statements being passed into the [Command Property][CommandProperty] when using a [Command][] data type. |

### Runtime {#3000}

| | |
|-|-|
| **Name:**    | Runtime                          |
| **Value:**   | [Int32][] with value `3000`                      |
| **Notes:**   | Used when a [CommandException][] occured due to an error during the execution of the statement(s). |

## Remarks

### Create an DataCommandErrorCode

The following table shows some of the ways that `DataCommandErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `DataCommandErrorCode` expression | `DataCommandErrorCode.Connection` | `DataCommandErrorCode.Connection`| Expression | Indicates a [CommandException][] occured when the connection to the data source failed |
| | `DataCommandErrorCode.Statement` | `DataCommandErrorCode.Statement`| Expression | Indicates a [CommandException][] occured due to the statement(s) being passed into the [Command Property][CommandProperty] could not be parsed |
| | `DataCommandErrorCode.IncompatibleStatementType` | `DataCommandErrorCode.IncompatibleStatementType`| Expression | Indicates a [CommandException][] occured due to an [OracleBlockStatement][] being passed into the [Command Property][CommandProperty] when using a [Command][] or [Commands][] data type |
| | `DataCommandErrorCode.MultipleStatements` | `DataCommandErrorCode.MultipleStatements`| Expression | Indicates a [CommandException][] occured due to multiple statements being passed into the [Command Property][CommandProperty] when using a [Command][] data type |
| | `DataCommandErrorCode.Runtime` | `DataCommandErrorCode.Runtime`| Expression | Indicates a [CommandException][] occured due to an error during the execution of the statement(s) |
| Use [Explicit Casting][] | `(DataCommandErrorCode)1000` | `DataCommandErrorCode.Connection`| Expression | Indicates a [CommandException][] occured when the connection to the data source failed |
| | `(DataCommandErrorCode)2000` | `DataCommandErrorCode.Statement`| Expression | Indicates a [CommandException][] occured due to the statement(s) being passed into the [Command Property][CommandProperty] could not be parsed |
| | `(DataCommandErrorCode)2001` | `DataCommandErrorCode.IncompatibleStatementType`| Expression | Indicates a [CommandException][] occured due to an [OracleBlockStatement][] being passed into the [Command Property][CommandProperty] when using a [Command][] or [Commands][] data type |
| | `(DataCommandErrorCode)2002` | `DataCommandErrorCode.MultipleStatements`| Expression | Indicates a [CommandException][] occured due to multiple statements being passed into the [Command Property][CommandProperty] when using a [Command][] data type |
| | `(DataCommandErrorCode)3000` | `DataCommandErrorCode.Runtime`| Expression | Indicates a [CommandException][] occured due to an error during the execution of the statement(s) |
| Use `Enum.Parse` | `(DataCommandErrorCode)Enum.Parse(typeof(DataCommandErrorCode), "Connection")` | `DataCommandErrorCode.Connection`| Expression | Parses `"Connection"` and converts it to `DataCommandErrorCode.Connection`. See [Enum.Parse][] |
| | `(DataCommandErrorCode)Enum.Parse(typeof(DataCommandErrorCode), "Statement")` | `DataCommandErrorCode.Statement`| Expression | Parses `"Statement"` and converts it to `DataCommandErrorCode.Statement`. See [Enum.Parse][] |
| | `(DataCommandErrorCode)Enum.Parse(typeof(DataCommandErrorCode), "IncompatibleStatementType")` | `DataCommandErrorCode.IncompatibleStatementType`| Expression | Parses `"IncompatibleStatementType"` and converts it to `DataCommandErrorCode.IncompatibleStatementType`. See [Enum.Parse][] |
| | `(DataCommandErrorCode)Enum.Parse(typeof(DataCommandErrorCode), "MultipleStatements")` | `DataCommandErrorCode.MultipleStatements`| Expression | Parses `"MultipleStatements"` and converts it to `DataCommandErrorCode.MultipleStatements`. See [Enum.Parse][] |
| | `(DataCommandErrorCode)Enum.Parse(typeof(DataCommandErrorCode), "Runtime")` | `DataCommandErrorCode.Runtime`| Expression | Parses `"InvalidUserCredentials"` and converts it to `DataCommandErrorCode.Runtime`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(DataCommandErrorCode)Enum.ToObject(typeof(DataCommandErrorCode), 1000)` | `DataCommandErrorCode.Connection`| Expression | Converts `1000` to `DataCommandErrorCode.Connection` value. See [Enum.ToObject][] |
| | `(DataCommandErrorCode)Enum.ToObject(typeof(DataCommandErrorCode), 2000)` | `DataCommandErrorCode.Statement`| Expression | Converts `2000` to `DataCommandErrorCode.Statement` value. See [Enum.ToObject][] |
| | `(DataCommandErrorCode)Enum.ToObject(typeof(DataCommandErrorCode), 2001)` | `DataCommandErrorCode.IncompatibleStatementType`| Expression | Converts `2001` to `DataCommandErrorCode.IncompatibleStatementType` value. See [Enum.ToObject][] |
| | `(DataCommandErrorCode)Enum.ToObject(typeof(DataCommandErrorCode), 2002)` | `DataCommandErrorCode.MultipleStatements`| Expression | Converts `2002` to `DataCommandErrorCode.MultipleStatements` value. See [Enum.ToObject][] |
| | `(DataCommandErrorCode)Enum.ToObject(typeof(DataCommandErrorCode), 3000)` | `DataCommandErrorCode.Runtime`| Expression | Converts `3000` to `DataCommandErrorCode.Runtime` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert DataCommandErrorCode to Text

The following table shows some of the ways that an `DataCommandErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `DataCommandErrorCode.Connection.ToString()` | `"Connection"` | Expression | Converts `DataCommandErrorCode.Connection` to `"Connection"`. See [Enum.ToString][] |
| | `DataCommandErrorCode.Statement.ToString()` | `"Statement"` | Expression | Converts `DataCommandErrorCode.Statement` to `"Statement"`. See [Enum.ToString][] |
| | `DataCommandErrorCode.IncompatibleStatementType.ToString()` | `"IncompatibleStatementType"` | Expression | Converts `DataCommandErrorCode.IncompatibleStatementType` to `"IncompatibleStatementType"`. See [Enum.ToString][] |
| | `DataCommandErrorCode.MultipleStatements.ToString()` | `"MultipleStatements"` | Expression | Converts `DataCommandErrorCode.MultipleStatements` to `"MultipleStatements"`. See [Enum.ToString][] |
| | `DataCommandErrorCode.Runtime.ToString()` | `"Runtime"` | Expression | Converts `DataCommandErrorCode.Runtime` to `"Runtime"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(DataCommandErrorCode.Connection)` | `"Connection"` | Expression | Converts `DataCommandErrorCode.Connection` to `"Connection"`. See [Convert.ToString][] |
| | `Convert.ToString(DataCommandErrorCode.Statement)` | `"Statement"` | Expression | Converts `DataCommandErrorCode.Statement` to `"Statement"`. See [Convert.ToString][] |
| | `Convert.ToString(DataCommandErrorCode.IncompatibleStatementType)` | `"IncompatibleStatementType"` | Expression | Converts `DataCommandErrorCode.IncompatibleStatementType` to `"IncompatibleStatementType"`. See [Convert.ToString][] |
| | `Convert.ToString(DataCommandErrorCode.MultipleStatements)` | `"MultipleStatements"` | Expression | Converts `DataCommandErrorCode.MultipleStatements` to `"MultipleStatements"`. See [Convert.ToString][] |
| | `Convert.ToString(DataCommandErrorCode.Runtime)` | `"Runtime"` | Expression | Converts `DataCommandErrorCode.Runtime` to `"Runtime"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `DataCommandErrorCode.Connection` | `"Connection"` | N/A  | Converts `DataCommandErrorCode.Connection` to `"Connection"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `DataCommandErrorCode.Statement` | `"Statement"` | N/A  | Converts `DataCommandErrorCode.Statement` to `"Statement"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `DataCommandErrorCode.IncompatibleStatementType` | `"IncompatibleStatementType"` | N/A  | Converts `DataCommandErrorCode.IncompatibleStatementType` to `"IncompatibleStatementType"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `DataCommandErrorCode.MultipleStatements` | `"MultipleStatements"` | N/A  | Converts `DataCommandErrorCode.MultipleStatements` to `"MultipleStatements"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `DataCommandErrorCode.Runtime` | `"Runtime"` | N/A  | Converts `DataCommandErrorCode.Runtime` to `"Runtime"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `DataCommandErrorCode.Connection` | `"1000"` | N/A  | Converts `DataCommandErrorCode.Connection` to `"1000"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `DataCommandErrorCode.Statement` | `"2000"` | N/A  | Converts `DataCommandErrorCode.Statement` to `"2000"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `DataCommandErrorCode.IncompatibleStatementType` | `"2001"` | N/A  | Converts `DataCommandErrorCode.IncompatibleStatementType` to `"2001"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `DataCommandErrorCode.MultipleStatements` | `"2002"` | N/A  | Converts `DataCommandErrorCode.MultipleStatements` to `"2002"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `DataCommandErrorCode.Runtime` | `"3000"` | N/A  | Converts `DataCommandErrorCode.Runtime` to `"3000"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert DataCommandErrorCode to a Number

The following table shows some of the ways that an `DataCommandErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)DataCommandErrorCode.Connection`   | `1000` | Expression | [Casts][Explicit Casting] `DataCommandErrorCode.Connection` to `1000` |
|                                       | `(Int32)DataCommandErrorCode.Statement`   | `2000` | Expression | [Casts][Explicit Casting] `DataCommandErrorCode.Statement` to `2000` |
|                                       | `(Int32)DataCommandErrorCode.IncompatibleStatementType`   | `2001` | Expression | [Casts][Explicit Casting] `DataCommandErrorCode.IncompatibleStatementType` to `2001` |
|                                       | `(Int32)DataCommandErrorCode.MultipleStatements`   | `2002` | Expression | [Casts][Explicit Casting] `DataCommandErrorCode.MultipleStatements` to `2002` |
|                                       | `(Int32)DataCommandErrorCode.Runtime`   | `3000` | Expression | [Casts][Explicit Casting] `DataCommandErrorCode.Runtime` to `3000` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(DataCommandErrorCode.Connection)`   | `1000` | Expression | Converts `DataCommandErrorCode.Connection` to `1000`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DataCommandErrorCode.Statement)`   | `2000` | Expression | Converts `DataCommandErrorCode.Statement` to `2000`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DataCommandErrorCode.IncompatibleStatementType)`   | `2001` | Expression | Converts `DataCommandErrorCode.IncompatibleStatementType` to `2001`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DataCommandErrorCode.MultipleStatements)`   | `2002` | Expression | Converts `DataCommandErrorCode.MultipleStatements` to `2002`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(DataCommandErrorCode.Runtime)`   | `3000` | Expression | Converts `DataCommandErrorCode.Runtime` to `3000`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `DataCommandErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `DataCommandErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `DataCommandErrorCode`.

### Known Limitations

Currently when using either [OdbcConnectionDetails][] or [SqlServerConnectionDetails][], the [CommandException][] will not throw during the parsing process, and only during runtime, so the error code will be [Runtime][] instead of [Statement][]. This is due to the fact that the parsers used for those [ConnectionDetails][] do not throw and will try to execute the statements.

## See Also

### Related Data Types

- [CommandException][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working with Data Sources][]

### External Documentation

- [OracleBlockStatement][]
- [System.Enum][]

[Connection]: {{< ref "#1000">}}
[Statement]: {{< ref "#2000">}}
[IncompatibleStatementType]: {{< ref "#2001">}}
[MultipleStatements]: {{< ref "#2002">}}
[Runtime]: {{< ref "#3000">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Command.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.Command.CommandText" >}}
[Commands]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[Commands.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.CommandText" >}}
[QueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[QueryCommand.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.QueryCommand.CommandText" >}}
[NonQueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
[NonQueryCommand.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.NonQueryCommand.CommandText" >}}
[ConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[SqlServerConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.MainDoc" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}
[OdbcConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[CommandProperty]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.CommandProperty" >}}

[CommandException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}

[Working with Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}

[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[OracleBlockStatement]: {{< url path="Oracle.PL-SQL.BlockStatement" >}}