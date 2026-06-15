---
title: "Oracle"
linkTitle: "Oracle"
description: "Information regarding Oracle as a data source, including connection strings, PL/SQL commands, parameters, and known limitations."
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **Oracle** is a native data source type for connecting directly to Oracle Database. Flows use [OracleConnectionDetails][] with [Execute Data Command][] to open a connection and run [DataCommand][] statements against the database.

{{% ctx %}} connects to Oracle through ADO.NET using the [OracleConnection][] class (`Oracle.ManagedDataAccess.Client`). The connection is configured with a single [connection string][] on [OracleConnectionDetails][]. Parameter binding for advanced scenarios uses [Dapper.Oracle][] types such as [OracleMappingType][]. [CommandException][] messages for Oracle connections use the category `Oracle`.

Prefer [OracleConnectionDetails][] over [OdbcConnectionDetails][] when connecting to Oracle directly. Use [ODBC][] only when a native Oracle connection is not suitable for your environment.

For how data sources work in general (commands, connection reuse, and closing connections), see [What is a Data Source?][].

## Connection configuration

### OracleConnectionDetails

[OracleConnectionDetails][] (`Cortex.DataTypes.Data.OracleConnectionDetails`) holds the Oracle [connection string][]. Create it in the [Expression Editor][] or assign a [variable][] that already holds an [OracleConnectionDetails][] instance:

| Method | Example | Result |
| --- | --- | --- |
| Constructor | `new OracleConnectionDetails("Data Source=host:1521/orclpdb;User Id=user;Password=password;")` | `{"ConnectionString": "Data Source=host:1521/orclpdb;User Id=user;Password=password;"}` |

The [Connection String][] property is [EncryptableText][] and is the only property on [OracleConnectionDetails][].

Pass the resulting object to [Execute Data Command][] on [Connection Details][]. Connection opening, reuse, and closing follow the same rules as other data source types; see [Opening Connections][] and [Closing Connections][] on [What is a Data Source?][].

### Connection strings

Oracle connection strings are provider-specific. They typically identify how to reach the database (for example Easy Connect host and service name, or a TNS descriptor) and how to authenticate (user ID and password).

| Pattern | Example fragment | Notes |
| --- | --- | --- |
| Easy Connect | `Data Source=host:1521/service_name;User Id=user;Password=password;` | Common for direct TCP connections to a service |
| TNS descriptor | `Data Source=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=host)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=service)));User Id=user;Password=password;` | Full TNS connect descriptor in the connection string |
| User credentials | `User Id=user;Password=password;` | Combine with a `Data Source=` value that identifies the target database |

See [ConnectionStrings.com][] for Oracle connection string formats. If a connection fails during open, check [CommandException][] error code [1000][Connection Failed] and the [InnerException][]; an invalid string may also surface as [InvalidConnectionStringException][].

The [Integrated Security][] connection string format is **not** supported for [OracleConnectionDetails][].

## Commands and parameters

Connect with [OracleConnectionDetails][] and run commands through [Execute Data Command][] using [QueryCommand][], [NonQueryCommand][], [Command][], or [Commands][] on the [Command][] property.

* Use [parameterised commands][Parameterised Commands] with `@ParameterName` placeholders in command text to avoid [SQL Injection][].
* For simple parameters, pass a [Structure][] or anonymous object in the [Parameters][] property (for example `new { Id = 3 }`).
* For advanced Oracle parameters—specifying [OracleMappingType][], [ParameterDirection][], or size (for example CLOB values for stored procedures)—use [OracleParameter][], [OracleParameters][], or `IEnumerable<OracleParameter>`.
* [Query Statements][] and [Non Query Statements][] follow the general rules on [Execute Data Command][] (including behaviour for [Array][] and [IEnumerable][] parameters).

### PL/SQL and multiple statements

Oracle uses PL/SQL. Behaviour differs from SQL Server in several ways:

| Scenario | Required approach |
| --- | --- |
| Multiple statements in one script (for example cursors or variables with dependencies) | Use [QueryCommand][] or [NonQueryCommand][] with [block statement][] syntax—not [Commands][] |
| [OracleBlockStatement][block statement] in [Command][] or [Commands][] | Not supported; use [QueryCommand][] or [NonQueryCommand][] instead ([error code 2001][Incompatible Statement Type]) |
| Multiple statements in [QueryCommand][] or [NonQueryCommand][] | Wrap statements in a PL/SQL [block statement][] |

[Command][] and [Commands][] parse statement text before execution. [QueryCommand][] and [NonQueryCommand][] send the command text as a whole, which is required for PL/SQL blocks and other scripts where statements depend on each other. See [Complex Commands][] on [Execute Data Command][].

### Statement parsing and errors

{{% ctx %}} parses Oracle command text before execution. Invalid SQL or PL/SQL may surface as [DataCommandErrorCode.Statement][] during parsing ([error code 2000][Statement]) rather than only at runtime. Syntax errors may include a nested `ParserException` in the [CommandException][] [InnerException][].

For incompatible parameter types, [CommandException][] error code [2003][Incompatible Parameter Type] applies when parameter values are not compatible with [OracleConnectionDetails][]. Compatible parameter types are [Structure][], [OracleParameters][], [OracleParameter][], and `IEnumerable<OracleParameter>`. Mismatched [OracleMappingType][] and parameter values may surface as [error code 3001][Invalid Parameter Binding].

## Remarks

### Native connection vs ODBC

[OracleConnectionDetails][] is the recommended connection type for Oracle Database. [OdbcConnectionDetails][] can reach Oracle when an ODBC driver is installed, but native connections avoid driver-name and DSN differences and support Oracle-specific parameter types. See [ODBC][] for when ODBC is appropriate.

### Property editor support

* The [Expression Editor][] is available for [Input][] properties where the data type is [OracleConnectionDetails][].
* The [Literal Editor][] is not available for [Input][] properties where the data type is [OracleConnectionDetails][].
* The [Variable Editor][] is available for [Input][], [InputOutput][], and [Output][] properties where the data type is [OracleConnectionDetails][].

### Known limitations

* **Integrated Security connection strings** — The [Integrated Security][] connection string format is not supported for [OracleConnectionDetails][].
* **PL/SQL block statements** — [Command][] and [Commands][] cannot execute [OracleBlockStatement][block statement] text; use [QueryCommand][] or [NonQueryCommand][] with [block statement][] syntax instead.
* **Multiple statements** — When running multiple statements with [QueryCommand][] or [NonQueryCommand][], use PL/SQL [block statement][] syntax.
* **Stored procedure output parameters** — When using a [parameterised command][] to execute a stored procedure, output parameters cannot be written back ([Execute Data Command][]).
* **ODBC alternative** — If you connect through [OdbcConnectionDetails][] instead of [OracleConnectionDetails][], Oracle-specific parameter types ([OracleParameter][], [OracleParameters][]) are not available; use [Structure][] parameters only.

## See Also

### Related Concepts

* [What is a Data Source?][]
* [Supported Data Sources][]
* [ODBC][]
* [SQL Server][]

### Related Data Types

* [ConnectionDetails][]
* [OracleConnectionDetails][]
* [OracleParameter][]
* [OracleParameters][]
* [OracleMappingType][]
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

* [OracleConnection Class (Oracle.ManagedDataAccess.Client)][OracleConnection]
* [DbConnection Class (System.Data.Common)][DbConnection]
* [Oracle connection strings][ConnectionStrings.com]
* [PL/SQL block statement][block statement]

[What is a Data Source?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}
[Supported Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.MainDoc" >}}
[SQL Server]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.SqlServer.MainDoc" >}}
[ODBC]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.Odbc.MainDoc" >}}

[Execute Data Command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.MainDoc" >}}
[Connection Details]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ConnectionDetailsProperty" >}}
[Parameterised Commands]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[parameterised command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[Query Statements]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.QueryStatements" >}}
[Non Query Statements]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.NonQueryStatements" >}}
[Complex Commands]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ComplexCommands" >}}
[Opening Connections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}#opening-connections
[Closing Connections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}#closing-connections

[ConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}
[OdbcConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.MainDoc" >}}
[OracleParameter]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameter.MainDoc" >}}
[OracleParameters]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameters.MainDoc" >}}
[OracleMappingType]: {{< url path="Cortex.Reference.DataTypes.Data.OracleMappingType.MainDoc" >}}
[DataCommand]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[QueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[DataCommandErrorCode]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommandErrorCode.MainDoc" >}}
[DataCommandErrorCode.Statement]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommandErrorCode.MainDoc" >}}#2000
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[Parameters]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.Parameters" >}}

[CommandException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}
[InvalidConnectionStringException]: {{< url path="Cortex.Reference.Exceptions.Data.InvalidConnectionStringException.MainDoc" >}}
[Connection Failed]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#1000
[Statement]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#2000
[Incompatible Statement Type]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#2001
[Incompatible Parameter Type]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#2003
[Invalid Parameter Binding]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#3001
[InnerException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#innerexception

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[connection string]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.ConnectionString" >}}

[Integrated Security]: {{< url path="ConnectionStrings.OracleConnectionIntegratedSecurity" >}}
[ConnectionStrings.com]: {{< url path="ConnectionStrings.OracleConnection" >}}
[block statement]: {{< url path="Oracle.PL-SQL.BlockStatement" >}}
[SQL Injection]: {{< url path="W3.SqlInjection" >}}
[ParameterDirection]: {{< url path="OracleParameter.ParameterDirection" >}}

[OracleConnection]: https://learn.microsoft.com/en-us/dotnet/api/oracle.manageddataaccess.client.oracleconnection
[DbConnection]: https://learn.microsoft.com/en-us/dotnet/api/system.data.common.dbconnection
[Dapper.Oracle]: https://github.com/DapperLib/Dapper.Oracle
