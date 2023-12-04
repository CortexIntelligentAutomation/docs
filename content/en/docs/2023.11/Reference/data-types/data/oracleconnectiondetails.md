---
title: "OracleConnectionDetails"
linkTitle: "OracleConnectionDetails"
description: "The data type representing configuration for establishing and maintaining a connection to an Oracle data source."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.OracleConnectionDetails)</p>

## Summary

The `OracleConnectionDetails` data type is used to establish and maintain a connection to an Oracle data source.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `OracleConnectionDetails` |
| **Full Name:**         | `Cortex.DataTypes.Data.OracleConnectionDetails` |
| **Alias:**             | N/A |
| **Description:**       | The data type representing configuration for establishing and maintaining a connection to an Oracle data source.  |
| **Default Value:**     | `null` |
| **Can be used as:**    | `ConnectionDetails`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Connection String

The Connection String that is used to connect to an Oracle data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@"Data Source=Connection String;"` |

## Remarks

### Create an OracleConnectionDetails

The following table shows some of the ways that a `OracleConnectionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `OracleConnectionDetails` constructor | `new OracleConnectionDetails("Data Source=Connection String;")` | `{connectionString: $@"Data Source=Connection String;"}` | Expression |  |

A `OracleConnectionDetails` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Connection String`| `EncryptableText`| `$@"Data Source=Connection String;"` | The Connection String that is used to connect to an Oracle database. |

### Connection Strings

A [Connection String][] must be provided in order to connect to an Oracle data source. The [Connection String][] can be formatted differently. See [ConnectionStrings.com][] for a list of Oracle connection strings.

Please see [Working with Data Sources][] for a list of other supported data sources (e.g. SQL Server) and how to construct valid connection strings for them.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `OracleConnectionDetails`.
* The Literal Editor is not available for [Input][] properties where the data type is `OracleConnectionDetails`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OracleConnectionDetails`.

### Known limitations

* To execute multiple commands in the Commands property (using the QueryCommand Or NonQueryCommand datatype), as Oracle uses PL/SQL, you must use the block statement syntax. See [OracleBlockStatement][] for more.

## See Also

### Related Data Types

* [ConnectionDetails][]
* [OdbcConnectionDetails][]
* [SqlServerConnectionDetails][]

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
[SqlServerConnectionDetails]: {{< url path="Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.MainDoc" >}}

[Working with Data Sources]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}

[ConnectionStrings.com]: {{< url path="ConnectionStrings.OracleConnection" >}}
[OracleBlockStatement]: {{< url path="Oracle.PL-SQL.BlockStatement" >}}
