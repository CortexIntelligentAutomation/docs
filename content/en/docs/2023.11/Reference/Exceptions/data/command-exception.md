---
title: "CommandException"
linkTitle: "CommandException"
description: "Exception thrown when any command execution has resulted in an exception being thrown."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Data.CommandException)</p>

## Description

The exception thrown when any command execution has resulted in an exception being thrown.
This exception wraps any [Exception][] that occurred during execution, which are stored in the [StatementExceptions][] property.

## Reasons

### Connection Failed

The connection to the data source failed.

#### Message Format

The format of the [Message][] is as follows:

```json
"Failed to open the Oracle connection."
```

#### How to fix

Make sure that the [Execute Data Command Block][Execute Data Command] ConnectionString property has been given a valid connection string, and that the data source is active and accepting connections.

### Incompatible Datatype (Oracle Only)

The datatype passed in is incompatible.

#### Message Format

The format of the [Message][] is as follows:

```json
"'CommandText' contains a block statement; it must be provided with a non-block statement."
```

#### How to fix

This only occurs when providing an [OracleBlockStatement][] to the [Command][] or [Commands][] datatype, so to fix use a [QueryCommand][] or [NonQueryCommand][] datatype.

### Multiple Statements

Multiple statements have been passed into the [Execute Data Command Block][Execute Data Command] Command property using an incorrect type.

#### Message Format

The format of the [Message][] is as follows:

```json
"'CommandText' contains multiple statements; it must be provided with a single statement."
```

#### How to fix

This only occurs when using the [Command][] datatype for the [Execute Data Command Block][Execute Data Command] Command property. Change the datatype to be [Commands][] instead.

### Runtime

An error has occurred during runtime.

#### Message Format

The format of the [Message][] is as follows:

```json
"An error occurred whilst trying to execute the command provided. Please see the 'StatementExceptions' property for more details."
```

#### How to fix

This occurs when there is an error during either parsing or execution of the statement(s). Try to make sure that the statement(s) are valid.

More information on why the value is invalid, or instruction on how to provide a valid value, may be present in the message(s) of the [StatementExceptions][].

## Properties

### Exception Type

The type of the exception (i.e. `CommandException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception, the message will always be the same. More information on why the value is invalid, or instruction on how to provide a valid value, may be present in the message(s) of the [StatementExceptions][].

| | |
|-----------|------------|
| Data Type | [String][] |

### Category

The category of the exception (i.e. `MultipleStatements`).

| | |
|-----------|------------|
| Data Type | [String][] |

### StatementExceptions

A list of the exception(s) that occurred.

This may contain more information on why the exception has occurred, or instruction on how to fix the issue.

| | |
|-----------|---------------|
| Data Type | [Exception][] |

## Categories

| Category                           | Notes                                       |
|------------------------------------|---------------------------------------------|
| Connection                         | A command exception with this category is thrown when the connection fails. |
| IncompatibleDatatype (Oracle Only) | A command exception with this category is thrown when an [OracleBlockStatement][] is inputted into the Command property  with the [Command][] or [Commands][] datatype. |                                          |
| MultipleStatements   | A command exception with this category is thrown when [Command][] has more than one statement inputted. |                                         |
| Runtime              | A command exception with this category is thrown when an error occurs during either parsing or execution of the statements(s). |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

* [String][]
* [Exception][]
* [Command][]
* [Commands][]
* [QueryCommand][]
* [NonQueryCommand][]

### Related Concepts

* [Blocks][]
* [Block Properties][]
* [Exceptions][]

### Related Blocks

* Data
  * [Execute Data Command][]

### External Documentation

[OracleBlockStatement][]

[Message]: {{< ref "#message" >}}
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
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}

[TConnectionDetails]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

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

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[OracleBlockStatement]: {{< url path="Oracle.PL-SQL.BlockStatement" >}}