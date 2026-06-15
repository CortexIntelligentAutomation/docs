---
title: "ODBC"
linkTitle: "ODBC"
description: "Information regarding ODBC as a data source, including connection strings, common backends, and known limitations."
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **ODBC** is a data source type for connecting to databases and file-based systems through an ODBC driver on the execution environment. Flows use [OdbcConnectionDetails][] with [Execute Data Command][] to open a connection and run [DataCommand][] statements against the backend.

{{% ctx %}} implements ODBC through ADO.NET's [OdbcConnection][] class (`System.Data.Odbc`). The connection is configured with a single [connection string][] on [OdbcConnectionDetails][]; the driver and DSN in that string determine which backend is reached. [CommandException][] messages for ODBC connections use the category `ODBC`.

Use ODBC when the target system does not have a dedicated [ConnectionDetails][] type in {{% ctx %}}. [SQL Server][] and [Oracle][] have native connection types ([SqlServerConnectionDetails][] and [OracleConnectionDetails][]); prefer those when connecting to SQL Server or Oracle directly. Use [OdbcConnectionDetails][] for other backends—for example Microsoft Access, Excel, PostgreSQL, or MySQL—when a suitable ODBC driver is installed where the flow runs.

For how data sources work in general (commands, connection reuse, and closing connections), see [What is a Data Source?][].

## Connection configuration

### OdbcConnectionDetails

[OdbcConnectionDetails][] (`Cortex.DataTypes.Data.OdbcConnectionDetails`) holds the ODBC [connection string][]. Create it in the [Expression Editor][] or assign a [variable][] that already holds an [OdbcConnectionDetails][] instance:

| Method | Example | Result |
| --- | --- | --- |
| Constructor | `new OdbcConnectionDetails("DSN=LocalHost;Driver={ODBC Driver 17 for SQL Server};")` | `{"ConnectionString": "DSN=LocalHost;Driver={ODBC Driver 17 for SQL Server};"}` |

The [Connection String][] property is [EncryptableText][] and is the only property on [OdbcConnectionDetails][].

Pass the resulting object to [Execute Data Command][] on [Connection Details][]. Connection opening, reuse, and closing follow the same rules as other data source types; see [Opening Connections][] and [Closing Connections][] on [What is a Data Source?][].

### Connection strings

ODBC connection strings are driver-specific. They typically identify a **DSN** (data source name), a **Driver** (registered ODBC driver name), or both, plus backend-specific options such as database name, file path, or credentials.

| Pattern | Example fragment | Notes |
| --- | --- | --- |
| DSN | `DSN=MyDataSource;` | Uses a system or user DSN configured on the execution machine |
| Driver | `Driver={PostgreSQL Unicode};Server=localhost;Database=mydb;` | Driver name must match the installed ODBC driver exactly (often wrapped in `{ }`) |
| File path | `Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\Data\Example.accdb;` | Common for Access and Excel backends |

See [ConnectionStrings.com][] for connection string formats per driver and backend. If a connection fails during open, check [CommandException][] error code [1000][Connection Failed] and the [InnerException][]; an invalid string may also surface as [InvalidConnectionStringException][].

## Common ODBC backends

Which backends are available depends entirely on the ODBC drivers installed on the machine or container where the flow executes. The table below lists backends commonly reached through ODBC in {{% ctx %}} flows. Verify the driver name and string format on your environment before deploying to production.

| Backend | Prefer native type? | Example connection string (illustrative) | Further reading |
| --- | --- | --- | --- |
| Microsoft Access | No | `Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\Data\Example.accdb;` | [ConnectionStrings.com][] — Access |
| Microsoft Excel | No | `Driver={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\Data\Example.xlsx;` | [ConnectionStrings.com][] — Excel |
| PostgreSQL | No | `Driver={PostgreSQL Unicode};Server=localhost;Port=5432;Database=mydb;Uid=user;Pwd=password;` | [ConnectionStrings.com][] — PostgreSQL ODBC |
| MySQL | No | `Driver={MySQL ODBC 8.0 Unicode Driver};Server=localhost;Database=mydb;User=user;Password=password;` | [ConnectionStrings.com][] — MySQL ODBC |
| SQL Server | Yes — [SqlServerConnectionDetails][] | `Driver={ODBC Driver 17 for SQL Server};Server=localhost;Database=mydb;Trusted_Connection=Yes;` | [SQL Server][] |
| Oracle | Yes — [OracleConnectionDetails][] | `Driver={Oracle in OraClient19Home1};Dbq=//host:1521/service;Uid=user;Pwd=password;` | [Oracle][] |

Driver names and optional keywords vary by vendor and version. Use the ODBC Data Source Administrator (or equivalent) on the execution environment to confirm the exact driver string.

## Commands and parameters

Connect with [OdbcConnectionDetails][] and run commands the same way as for [SQL Server][] or [Oracle][]: supply a [QueryCommand][], [NonQueryCommand][], [Command][], or [Commands][] on [Execute Data Command][].

* Use [parameterised commands][Parameterised Commands] with `@ParameterName` placeholders in command text to avoid [SQL Injection][].
* For [OdbcConnectionDetails][], [CommandException][] error code [2003][Incompatible Parameter Type] applies when parameter types are not compatible; compatible parameter values use [Structure][].
* [Query Statements][] and [Non Query Statements][] follow the general rules on [Execute Data Command][] (including behaviour for [Array][] and [IEnumerable][] parameters).

Invalid or unsupported SQL for ODBC is typically reported at **runtime** ([DataCommandErrorCode.Runtime][]) rather than during statement parsing ([DataCommandErrorCode.Statement][]), because the ODBC provider attempts execution instead of failing at parse time. See [DataCommandErrorCode][] for details.

## Remarks

### ODBC drivers on the execution environment

An ODBC connection succeeds only if the correct 32-bit or 64-bit driver is installed for the architecture {{% ctx %}} uses on that machine. DSNs configured on a developer workstation are not automatically available on remote execution targets unless the same DSN or driver-based connection string is configured there.

### Property editor support

* The [Expression Editor][] is available for [Input][] properties where the data type is [OdbcConnectionDetails][].
* The [Literal Editor][] is not available for [Input][] properties where the data type is [OdbcConnectionDetails][].
* The [Variable Editor][] is available for [Input][], [InputOutput][], and [Output][] properties where the data type is [OdbcConnectionDetails][].

### Known limitations

* **Microsoft Access string parameters** — [String][] values cannot be used as command parameters when connected to a Microsoft Access data source through [OdbcConnectionDetails][]. Use other parameter types or avoid parameterised string filters for Access until this limitation is addressed.
* **Stored procedure output parameters** — When using a [parameterised command][] to execute a stored procedure, output parameters cannot be written back ([Execute Data Command][]).
* **Limited native providers** — Only the data source types listed under [Supported Data Sources][] are supported natively; ODBC extends reach via installed drivers but does not guarantee every ODBC driver or backend is tested on all platforms.

## See Also

### Related Concepts

* [What is a Data Source?][]
* [Supported Data Sources][]
* [SQL Server][]
* [Oracle][]

### Related Data Types

* [ConnectionDetails][]
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

* [OdbcConnection Class (System.Data.Odbc)][OdbcConnection]
* [OdbcCommand Class (System.Data.Odbc)][OdbcCommand]
* [DbConnection Class (System.Data.Common)][DbConnection]
* [Connection strings][ConnectionStrings.com]

[What is a Data Source?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}
[Supported Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.MainDoc" >}}
[SQL Server]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.SqlServer.MainDoc" >}}
[Oracle]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.SupportedDataSources.Oracle.MainDoc" >}}

[Execute Data Command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.MainDoc" >}}
[Connection Details]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ConnectionDetailsProperty" >}}
[Parameterised Commands]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[parameterised command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.ParameterisedCommands" >}}
[Query Statements]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.QueryStatements" >}}
[Non Query Statements]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.NonQueryStatements" >}}
[Opening Connections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}#opening-connections
[Closing Connections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}#closing-connections

[ConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[OdbcConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.MainDoc" >}}
[SqlServerConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.MainDoc" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}
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
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[CommandException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}
[InvalidConnectionStringException]: {{< url path="Cortex.Reference.Exceptions.Data.InvalidConnectionStringException.MainDoc" >}}
[Connection Failed]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#1000
[Incompatible Parameter Type]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#2003
[InnerException]: {{< url path="Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}#innerexception

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[connection string]: {{< url path="Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.ConnectionString" >}}

[ConnectionStrings.com]: {{< url path="ConnectionStrings.MainDoc" >}}
[SQL Injection]: {{< url path="W3.SqlInjection" >}}

[OdbcConnection]: https://learn.microsoft.com/en-us/dotnet/api/system.data.odbc.odbcconnection
[OdbcCommand]: https://learn.microsoft.com/en-us/dotnet/api/system.data.odbc.odbccommand
[DbConnection]: https://learn.microsoft.com/en-us/dotnet/api/system.data.common.dbconnection
