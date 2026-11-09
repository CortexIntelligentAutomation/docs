---
title: "What is a Data Source?"
linkTitle: "What is a Data Source?"
description: "Information regarding what a data source is, which data sources are supported, and how flows connect to them and run commands."
weight: 1
---

# {{% param title %}}

## Summary

In {{% ctx %}}, a **data source** is an external database or ODBC-backed system that a [flow][] connects to so it can read or change data. Flows do not talk to data sources directly; they use Data blocks—primarily [Execute Data Command][]—with two pieces of configuration:

| Piece | Data type | Purpose |
| --- | --- | --- |
| Connection | [ConnectionDetails][] | How to connect (connection string and provider-specific options) |
| Command | [DataCommand][] | What to run (SQL or PL/SQL text and parameters) |

This model is similar to ADO.NET in C#, where a [DbConnection][] opens a session to a database and a [DataCommand][] runs statements against it. {{% ctx %}} wraps that pattern in platform data types and blocks so connection handling, parameter binding, and result mapping work consistently across supported providers.

| Term | Meaning |
| --- | --- |
| [Data source][Supported Data Sources] | The external database or ODBC-backed system |
| [ConnectionDetails][] | Configuration for establishing and maintaining a connection |
| [DataCommand][] | Configuration for a command to run against the data source |
| [Query Statement][] | Retrieves data (returns rows as a [List][]&lt;[Structure][]&gt;) |
| [Non Query Statement][] | Changes data (returns the number of rows affected as [Int32][]) |

For how to construct connection strings and provider-specific behaviour, see [Supported Data Sources][] and the [ConnectionDetails][] data type pages listed below.

## Supported Data Sources

{{% ctx %}} currently supports a fixed set of data source types. Each type maps to a [ConnectionDetails][] implementation and is identified in [CommandException][] messages by category (`SQL`, `Oracle`, or `ODBC`).

| Data source | [ConnectionDetails][] type | Concept page |
| --- | --- | --- |
| SQL Server | [SqlServerConnectionDetails][] | [SQL Server][] |
| Oracle | [OracleConnectionDetails][] | [Oracle][] |
| ODBC | [OdbcConnectionDetails][] | [ODBC][] |

[ODBC][] can reach many drivers and backends (for example Microsoft Access, Excel, PostgreSQL, or MySQL) depending on the ODBC driver installed on the execution environment. Native SQL Server and Oracle connections use their dedicated connection-details types instead of ODBC when possible.

Connection strings use provider-specific formats. See each [ConnectionDetails][] type page and [ConnectionStrings.com][] for examples. For verified versions and setup notes, see the pages under [Supported Data Sources][].

## Commands and statements

Commands are defined with [DataCommand][] types and passed to [Execute Data Command][] on the [Command][] property.

| [DataCommand][] type | Use when |
| --- | --- |
| [QueryCommand][] | Running [Query Statements][] (SELECT and similar); returns rows |
| [NonQueryCommand][] | Running [Non Query Statements][] (INSERT, UPDATE, DELETE, and similar); returns rows affected |
| [Command][] | A single statement that may be query or non-query; the block parses the statement type |
| [Commands][] | Multiple statements in one command; results are collected per statement |

It is recommended to use [parameterised commands][] so values are bound safely and [SQL Injection][] is avoided. The `@` prefix marks parameters in command text (for example `"SELECT * FROM Table WHERE Id = @Id"`). See [Parameterised Commands][] on the [Execute Data Command][] block for examples and provider-specific parameter rules.

[QueryCommand][] or [NonQueryCommand][] are preferred over [Command][] or [Commands][] when performance matters, because they skip statement parsing. For PL/SQL blocks and other statements with dependencies between parts of the script, use [QueryCommand][] or [NonQueryCommand][] rather than [Commands][]; see [Complex Commands][] on the [Execute Data Command][] block.

## Managing connections to a data source

Connections are managed by [Execute Data Command][]. The block creates, opens, reuses, and closes connections based on the [Connection Details][] property, the [Close Connection][] property, and how connection details are supplied.

### Connection details

[ConnectionDetails][] holds the information required to connect, chiefly the [connection string][]. The connection-details type must match the data source (for example [SqlServerConnectionDetails][] for SQL Server).

Create connection details in the [Expression Editor][] (for example `new SqlServerConnectionDetails("Server=...;Database=...;Trusted_Connection=True;")`) or pass a [variable][] that already holds a [ConnectionDetails][] object.

### Opening connections {#opening-connections}

[Execute Data Command][] applies these rules when it runs:

* If no connection exists for the supplied [Connection Details][], a new connection is created and opened.
* If a connection exists but is closed, it is opened and used.
* If a connection exists and is already open, it is reused.

When [Connection Details][] are supplied through a [variable][], the same connection can stay open across multiple [Execute Data Command][] blocks if [Close Connection][] is `false`. Reusing a connection avoids the cost of opening a new connection on every block execution.

When [Connection Details][] are supplied through a [literal][] or [expression][], a new connection is created each time the block runs. If [Close Connection][] is `false`, that connection is still closed automatically after the block finishes and before the flow ends—it cannot be shared with later blocks the way a variable-backed connection can.

To connect as a Windows user instead of a SQL or Oracle user, set an appropriate trusted or integrated-security connection string and use the block's [Run As][] property with [UserCredentials][]; see [Execute Data Command][] for local versus remote [LogonType][] requirements.

### Closing connections {#closing-connections}

Set [Close Connection][] to `true` to close the connection immediately after the command runs.

When [Close Connection][] is `false`:

* If [Connection Details][] were supplied through a [variable][], the connection stays open until the variable goes out of [scope][] or the flow ends, whichever comes first.
* If [Connection Details][] were supplied through a [literal][] or [expression][], the connection is closed automatically after the block finishes and before the flow ends.

For full property defaults, exceptions, and examples, see [Execute Data Command][].

## Remarks

### Known limitations

#### Limited set of supported data sources

Only the data source types listed in [Supported Data Sources][] are supported natively today. Additional providers may be added in future releases.

#### Provider-specific limitations

Some limitations apply to particular connection types:

* [OracleConnectionDetails][] — [Integrated Security][] connection string format is not supported. When running multiple statements with [QueryCommand][] or [NonQueryCommand][], Oracle PL/SQL requires [block statement][] syntax.
* [OdbcConnectionDetails][] — string values cannot be used as parameters when connected to a Microsoft Access data source.
* [Execute Data Command][] — when using a [parameterised command][] to execute a stored procedure, output parameters cannot be written back.

#### Statement parsing and errors

For [OdbcConnectionDetails][] and [SqlServerConnectionDetails][], invalid SQL is typically reported at runtime (`DataCommandErrorCode.Runtime`) rather than during parsing (`DataCommandErrorCode.Statement`), because those providers attempt execution instead of throwing during parse. Oracle uses a parser and may surface `DataCommandErrorCode.Statement` errors earlier. See [DataCommandErrorCode][] for error code details.

## See Also

### Related Concepts

* [Supported Data Sources][]
* [SQL Server][]
* [Oracle][]
* [ODBC][]
* [What is a Variable?][]
* [What is a Scope?][]

### Related Data Types

* [ConnectionDetails][]
* [SqlServerConnectionDetails][]
* [OracleConnectionDetails][]
* [OdbcConnectionDetails][]
* [DataCommand][]
* [QueryCommand][]
* [NonQueryCommand][]
* [Command][]
* [Commands][]
* [DataCommandErrorCode][]

### Related Blocks

* [Execute Data Command][]

### Related Exceptions

* [CommandException][]
* [InvalidConnectionStringException][]

### External Documentation

* [DbConnection Class (System.Data.Common)][DbConnection]
* [SqlConnection Class (Microsoft.Data.SqlClient)][SqlConnection]
* [OdbcConnection Class (System.Data.Odbc)][OdbcConnection]
* [Connection strings][ConnectionStrings.com]

[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Execute Data Command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.MainDoc" >}}
[Supported Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.MainDoc" >}}
[SQL Server]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.SqlServer.MainDoc" >}}
[Oracle]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.Oracle.MainDoc" >}}
[ODBC]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.Odbc.MainDoc" >}}

[ConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[SqlServerConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.MainDoc" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}
[OdbcConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.MainDoc" >}}
[DataCommand]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[QueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[DataCommandErrorCode]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommandErrorCode.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Connection Details]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ConnectionDetailsProperty" >}}
[Close Connection]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.CloseConnectionProperty" >}}
[Parameterised Commands]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[parameterised command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[Complex Commands]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ComplexCommands" >}}
[Query Statement]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.QueryStatements" >}}
[Query Statements]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.QueryStatements" >}}
[Non Query Statement]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.NonQueryStatements" >}}
[Non Query Statements]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.NonQueryStatements" >}}
[Run As]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.RunAsProperty" >}}

[CommandException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}
[InvalidConnectionStringException]: {{< url path="Cortex.Reference.Exceptions.Data.InvalidConnectionStringException.MainDoc" >}}

[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is a Scope?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.WhatIsAScope.MainDoc" >}}
[scope]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.WhatIsAScope.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[LogonType]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.LogonType" >}}
[connection string]: {{< url path="Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}

[Integrated Security]: {{< url path="ConnectionStrings.OracleConnectionIntegratedSecurity" >}}
[block statement]: {{< url path="Oracle.PL-SQL.BlockStatement" >}}
[ConnectionStrings.com]: {{< url path="ConnectionStrings.MainDoc" >}}
[SQL Injection]: {{< url path="W3.SqlInjection" >}}

[DbConnection]: https://learn.microsoft.com/en-us/dotnet/api/system.data.common.dbconnection
[SqlConnection]: https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection
[OdbcConnection]: https://learn.microsoft.com/en-us/dotnet/api/system.data.odbc.odbcconnection
