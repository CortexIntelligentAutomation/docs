---
title: "CommandException"
linkTitle: "CommandException"
description: "Exception thrown when any command execution has resulted in an exception being thrown."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Data.CommandException)</p>

## Description

Exception thrown when any command execution has resulted in an exception being thrown.

## Reasons

### Connection Failed {#connection}

The connection to the data source failed.

#### Message Format

The format of the [Message][] is as follows:

```json
"Failed to open the '<database-type>' connection.
Please click the HelpLink for more information on how to fix this."
```

where:

- `<database-type>` is the type of the database (e.g. SqlServer, Oracle).

#### How to fix

Make sure that the [Connection Details Property][ConnectionDetailsProperty] has been given a valid connection string, and that the data source is active.

More information on why the value is invalid, or instruction on how to provide a valid value, may be present in the [InnerException][].

### Incompatible Statement Type (Oracle Only) {#incompatiblestatementtype}

An [OracleBlockStatement][] has been used in the [Command Property][CommandProperty] when using a [Command][] or [Commands][] data type.

#### Message Format

The format of the [Message][] is as follows:

```json
"'CommandText' contains a block statement; it must be provided with a non-block statement.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Use a [QueryCommand][] or [NonQueryCommand][] data type.

### Multiple Statements {#multiplestatements}

Multiple statements have been passed into the [Command Property][CommandProperty] when using a [Command][] data type.

#### Message Format

The format of the [Message][] is as follows:

```json
"'CommandText' contains multiple statements; it must be provided with a single statement.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Use a [Commands][] data type.

### Runtime {#runtime}

An error has occurred during either parsing or execution of the statement(s).

#### Message Format

The format of the [Message][] is as follows:

```json
"An error occurred whilst trying to execute the command provided. Please see the 'StatementExceptions' property for more details.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Try to make sure that the statement(s) are valid.

More information on why the value is invalid, or instruction on how to provide a valid value, may be present in the [StatementExceptions][].

## Properties

### Exception Type

The type of the exception (i.e. `CommandException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Category

The category of the exception, which is used to categorise an exception if there are multiple reasons that the exception can occur.

For `CommandException` there are the following categories:

- `Connection`
- `IncompatibleStatementType`
- `MultipleStatements`
- `Runtime`

| | |
|-----------|------------|
| Data Type | [String][] |

### InnerException

An optional property that may contain the exception that caused the current exception.

| | |
|-----------|---------------|
| Data Type | [Exception][] |

### StatementExceptions

An optional property that may contain a list of exception(s) relating to the execution of one or more of the statements specified in the [Command Property][CommandProperty].

| | |
|-----------|---------------|
| Data Type | [List][]&lt;[Exception][]&gt; |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

- [Command][]
- [Commands][]
- [ConnectionDetails][]
- [Exception][]
- [NonQueryCommand][]
- [OdbcConnectionDetails][]
- [OracleConnectionDetails][]
- [QueryCommand][]
- [SqlServerConnectionDetails][]
- [String][]

### Related Concepts

- [Exceptions][]
- [Working With Data Sources][]

### Related Blocks

- Data
  - [Execute Data Command][]

### External Documentation

[OracleBlockStatement][]

[Message]: {{< ref "#message" >}}
[InnerException]: {{< ref "#innerexception" >}}
[StatementExceptions]: {{< ref "#statementexceptions" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[InvalidConnectionStringException]: {{< url path="Cortex.Reference.Exceptions.Data.InvalidConnectionStringException.MainDoc" >}}
[CommandException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}

[ConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[SqlServerConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.MainDoc" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}
[OdbcConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[Execute Data Command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.MainDoc" >}}

[TConnectionDetails]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[CommandProperty]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.CommandProperty" >}}
[ConnectionDetailsProperty]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ConnectionDetailsProperty" >}}
[DataCommand]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[DataCommand.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.CommandText" >}}

[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Command.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.Command.CommandText" >}}

[Commands]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[Commands.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.CommandText" >}}

[QueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[QueryCommand.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.QueryCommand.CommandText" >}}

[NonQueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
[NonQueryCommand.CommandText]: {{< url path="Cortex.Reference.DataTypes.Data.NonQueryCommand.CommandText" >}}

[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[String Interpolation]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.StringInterpolation" >}}
[Working with Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}
[Connection String Formats]: {{< url path="ConnectionStrings.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[OracleBlockStatement]: {{< url path="Oracle.PL-SQL.BlockStatement" >}}
