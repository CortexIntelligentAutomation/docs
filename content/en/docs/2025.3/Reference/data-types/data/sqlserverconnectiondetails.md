---
title: "SqlServerConnectionDetails"
linkTitle: "SqlServerConnectionDetails"
description: "The data type representing configuration for establishing and maintaining a connection to an SQL Server data source."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.SqlServerConnectionDetails)</p>

## Summary

The `SqlServerConnectionDetails` data type is used to establish and maintain a connection to a SQL Server data source.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `SqlServerConnectionDetails` |
| **Full Name:**         | `Cortex.DataTypes.Data.SqlServerConnectionDetails` |
| **Alias:**             | N/A |
| **Description:**       | The data type representing configuration for establishing and maintaining a connection to an SQL Server data source. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `ConnectionDetails`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Connection String

The Connection String that is used to connect to the data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@"Server=localhost;Database=YourDatabase;Trusted_Connection=true;"` |

## Remarks

### Create a SqlServerConnectionDetails

The following table shows some of the ways that a `SqlServerConnectionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `SqlServerConnectionDetails` constructor | `new SqlServerConnectionDetails("Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;")` | `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | Expression |  |

A `SqlServerConnectionDetails` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Connection String`| `EncryptableText`| `$@"Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"` | The Connection String that is used to connect to the data source. |

### Connection Strings

A [Connection String][] must be provided in order to connect to a SQL Server data source. The [Connection String][] can be formatted differently depending either on the version of SQL Server or the way the connection will be created and maintained (e.g. Trusted connection vs explicit user). See [ConnectionStrings.com][] for a list of connection strings for SQL Server.

Please see [Working with Data Sources][] for a list of other supported data sources (e.g. ODBC) and how to construct valid connection strings for them.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `SqlServerConnectionDetails`.
* The Literal Editor is not available for [Input][] properties where the data type is `SqlServerConnectionDetails`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `SqlServerConnectionDetails`.

### Known limitations

None

## See Also

### Related Data Types

* [ConnectionDetails][]
* [OdbcConnectionDetails][]
* [OracleConnectionDetails][]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

* [ConnectionStrings.com][]

[Connection String]: {{< ref "#connection-string" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[ConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[OdbcConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.MainDoc" >}}
[OracleConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.OracleConnectionDetails.MainDoc" >}}

[Working with Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}

[ConnectionStrings.com]: {{< url path="ConnectionStrings.SqlConnection" >}}
