---
title: "SQL Server"
linkTitle: "SQL Server"
description: "Information regarding SQL Server as a data source, including connection strings, T-SQL commands, parameters, and known limitations."
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **SQL Server** is a native data source type for connecting directly to Microsoft SQL Server and compatible databases (including Azure SQL). Flows use [SqlServerConnectionDetails][] with [Execute Data Command][] to open a connection and run [DataCommand][] statements against the database.

{{% ctx %}} connects to SQL Server through ADO.NET using the [SqlConnection][] class (`Microsoft.Data.SqlClient`). The connection is configured with a single [connection string][] on [SqlServerConnectionDetails][]. Parameter binding uses [Structure][] values with `@ParameterName` placeholders in command text. [CommandException][] messages for SQL Server connections use the category `SQL`.

Prefer [SqlServerConnectionDetails][] over [OdbcConnectionDetails][] when connecting to SQL Server directly. Use [ODBC][] only when a native SQL Server connection is not suitable for your environment.

For how data sources work in general (commands, connection reuse, and closing connections), see [What is a Data Source?][].

## Connection configuration

### SqlServerConnectionDetails

[SqlServerConnectionDetails][] (`Cortex.DataTypes.Data.SqlServerConnectionDetails`) holds the SQL Server [connection string][]. Create it in the [Expression Editor][] or assign a [variable][] that already holds a [SqlServerConnectionDetails][] instance:

| Method | Example | Result |
| --- | --- | --- |
| Constructor | `new SqlServerConnectionDetails("Server=localhost;Database=mydb;Trusted_Connection=True;")` | `{"ConnectionString": "Server=localhost;Database=mydb;Trusted_Connection=True;"}` |

The [Connection String][] property is [EncryptableText][] and is the only property on [SqlServerConnectionDetails][].

Pass the resulting object to [Execute Data Command][] on [Connection Details][]. Connection opening, reuse, and closing follow the same rules as other data source types; see [Opening Connections][] and [Closing Connections][] on [What is a Data Source?][].

### Connection strings

SQL Server connection strings are provider-specific. They typically identify the server and database and how to authenticate (Windows integrated security or SQL Server user credentials).

| Pattern | Example fragment | Notes |
| --- | --- | --- |
| Windows authentication | `Server=localhost;Database=mydb;Trusted_Connection=True;` | Connects as the Windows identity of the flow execution context; see [Authentication][] |
| SQL authentication | `Server=localhost;Database=mydb;User Id=user;Password=password;` | Connects with a SQL Server login |
| Named instance | `Server=host\INSTANCE;Database=mydb;Trusted_Connection=True;` | Use `Server=` with the instance name |
| Azure SQL | `Server=tcp:myserver.database.windows.net,1433;Database=mydb;User Id=user;Password=password;Encrypt=True;` | Follow [Microsoft][] guidance for encryption and firewall rules |

See [ConnectionStrings.com][] for SQL Server connection string formats. If a connection fails during open, check [CommandException][] error code [1000][Connection Failed] and the [InnerException][]; an invalid string may also surface as [InvalidConnectionStringException][].

## Commands and parameters

Connect with [SqlServerConnectionDetails][] and run commands through [Execute Data Command][] using [QueryCommand][], [NonQueryCommand][], [Command][], or [Commands][] on the [Command][] property.

* Use [parameterised commands][Parameterised Commands] with `@ParameterName` placeholders in command text to avoid [SQL Injection][].
* For [SqlServerConnectionDetails][], pass parameter values as a [Structure][] or anonymous object in the [Parameters][] property (for example `new { Id = 3 }`). [CommandException][] error code [2003][Incompatible Parameter Type] applies when parameter types are not compatible; compatible parameter values use [Structure][].
* [Query Statements][] and [Non Query Statements][] follow the general rules on [Execute Data Command][] (including behaviour for [Array][] and [IEnumerable][] parameters).
* Missing or mismatched parameters may surface as a [SqlException][] at runtime; see [SqlException error codes][SqlException Error Codes].

Invalid or unsupported T-SQL for [SqlServerConnectionDetails][] is typically reported at **runtime** ([DataCommandErrorCode.Runtime][]) rather than during statement parsing ([DataCommandErrorCode.Statement][]), because the SQL Server provider attempts execution instead of failing at parse time. See [DataCommandErrorCode][] for details.

### T-SQL and multiple statements

SQL Server uses T-SQL. Choose the [DataCommand][] type based on how statements relate to each other:

| Scenario | Recommended approach |
| --- | --- |
| Single statement | [Command][], [QueryCommand][], or [NonQueryCommand][] |
| Multiple independent statements (for example several `SELECT` or `INSERT` commands) | [Commands][] |
| Statements with dependencies (for example variables, temp tables, or cursors in one batch) | [QueryCommand][] or [NonQueryCommand][]—not [Commands][] |
| Multiple statements in [Command][] | Not supported; use [Commands][] instead ([error code 2002][Multiple Statements]) |

[Command][] and [Commands][] parse statement text before execution. [QueryCommand][] and [NonQueryCommand][] send the command text as a whole, which is required when statements depend on each other. See [Complex Commands][] on [Execute Data Command][].

Batch separators such as `GO` (used in SQL Server Management Studio and `sqlcmd`) are **not** part of T-SQL and are not supported in ADO.NET command text. Include only the T-SQL that should run in a single batch.

## Remarks

### Authentication {#authentication}

How SQL Server authenticates the connection depends on the [connection string][] and, for Windows authentication, who runs the flow:

| Goal | Configuration |
| --- | --- |
| Connect as the service account | Use a [trusted connection][Trusted Connection] string (`Trusted_Connection=True`) without [Run As][]. If the [Global RunAs User][] is configured it will run as this rather than the service account.  |
| Connect as a specific Windows user | Use a [trusted connection][Trusted Connection] string and set [Run As][] on [Execute Data Command][] to [UserCredentials][] for that user |
| Connect with a SQL login | Use `User Id=` and `Password=` in the [connection string][] |

When using [Run As][] with a [trusted connection][Trusted Connection] string:

* For a **local** database, set [LogonType][] to `LogonType.Network` on the [UserCredentials][].
* For a **remote** database, set [LogonType][] to `LogonType.NewCredentials` on the [UserCredentials][].

See [Execute Data Command][] for full [Run As][] requirements.

### Native connection vs ODBC

[SqlServerConnectionDetails][] is the recommended connection type for SQL Server. [OdbcConnectionDetails][] can reach SQL Server when an ODBC driver (for example ODBC Driver 17 for SQL Server) is installed, but native connections avoid driver-name and DSN differences. See [ODBC][] for when ODBC is appropriate.

### Property editor support

* The [Expression Editor][] is available for [Input][] properties where the data type is [SqlServerConnectionDetails][].
* The [Literal Editor][] is not available for [Input][] properties where the data type is [SqlServerConnectionDetails][].
* The [Variable Editor][] is available for [Input][], [InputOutput][], and [Output][] properties where the data type is [SqlServerConnectionDetails][].

### Known limitations

* **Stored procedure output parameters** — When using a [parameterised command][] to execute a stored procedure, output parameters cannot be written back ([Execute Data Command][]).
* **Runtime SQL errors** — Invalid T-SQL is typically reported at runtime ([DataCommandErrorCode.Runtime][]) rather than during parsing ([DataCommandErrorCode.Statement][]).
* **Dependent statements in [Commands][]** — [Commands][] runs each parsed statement separately; use [QueryCommand][] or [NonQueryCommand][] when statements depend on each other.
* **`GO` batch separators** — Not supported in command text sent through ADO.NET.
* **ODBC alternative** — If you connect through [OdbcConnectionDetails][] instead of [SqlServerConnectionDetails][], behaviour and driver requirements depend on the installed ODBC driver; see [ODBC][].

## See Also

### Related Concepts

* [What is a Data Source?][]
* [Supported Data Sources][]
* [ODBC][]
* [Oracle][]

### Related Data Types

* [ConnectionDetails][]
* [SqlServerConnectionDetails][]
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

* [SqlConnection Class (Microsoft.Data.SqlClient)][SqlConnection]
* [DbConnection Class (System.Data.Common)][DbConnection]
* [SqlException Class (Microsoft.Data.SqlClient)][SqlException]
* [SQL Server connection strings][ConnectionStrings.com]
* [SqlException error codes][SqlException Error Codes]

[Authentication]: {{< ref "#authentication" >}}
[What is a Data Source?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}
[Supported Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.MainDoc" >}}
[Oracle]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.Oracle.MainDoc" >}}
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
[Run As]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.RunAsProperty" >}}
[Global RunAs User]: {{< url path="Cortex.Faqs.ConfigureGlobalRunAs.MainDoc" >}}

[ConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[SqlServerConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.MainDoc" >}}
[OdbcConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.MainDoc" >}}
[DataCommand]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[QueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[NonQueryCommand]: {{< url path="Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Commands]: {{< url path="Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[DataCommandErrorCode]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommandErrorCode.MainDoc" >}}
[DataCommandErrorCode.Runtime]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommandErrorCode.MainDoc" >}}#3000
[DataCommandErrorCode.Statement]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommandErrorCode.MainDoc" >}}#2000
[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[Parameters]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.Parameters" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[LogonType]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.LogonType" >}}

[CommandException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}
[InvalidConnectionStringException]: {{< url path="Cortex.Reference.Exceptions.Data.InvalidConnectionStringException.MainDoc" >}}
[Connection Failed]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#1000
[Incompatible Parameter Type]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#2003
[Multiple Statements]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#2002
[InnerException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#innerexception

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[connection string]: {{< url path="Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.ConnectionString" >}}
[Trusted Connection]: {{< url path="ConnectionStrings.SqlConnectionTrustedConnection" >}}

[ConnectionStrings.com]: {{< url path="ConnectionStrings.SqlConnection" >}}
[SQL Injection]: {{< url path="W3.SqlInjection" >}}
[SqlException Error Codes]: {{< url path="MSDocs.SqlServer.ErrorCodes" >}}

[SqlConnection]: https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlconnection
[DbConnection]: https://learn.microsoft.com/en-us/dotnet/api/system.data.common.dbconnection
[SqlException]: https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlexception
[Microsoft]: https://learn.microsoft.com/en-us/sql/connect/ado-net/sql/sqlclient-support-lifecycle
