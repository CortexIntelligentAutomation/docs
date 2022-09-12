---
title: "OdbcConnectionDetails"
linkTitle: "OdbcConnectionDetails"
description: "The data type representing configuration for establishing and maintaining a connection to an ODBC data source."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.OdbcConnectionDetails)</p>

## Summary

The `OdbcConnectionDetails` data type is used to establish and maintain a connection to an ODBC data source.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `OdbcConnectionDetails` |
| **Full Name:**         | `Cortex.DataTypes.Data.OdbcConnectionDetails` |
| **Alias:**             | N/A |
| **Description:**       | The data type representing configuration for establishing and maintaining a connection to an ODBC data source.  |
| **Default Value:**     | `null` |
| **Can be used as:**    | `ConnectionDetails`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Connection String

The Connection String that is used to connect to an ODBC data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Expression][] |
| Default Value | [EncryptableText][] with value `$@"Dsn=DSN Name;Driver=Driver Name;"` |

## Remarks

### Create an OdbcConnectionDetails

The following table shows some of the ways that a `OdbcConnectionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `OdbcConnectionDetails` constructor | `new OdbcConnectionDetails("DSN=LocalHost;Driver={ODBC Driver Version}")` | `{"ConnectionString": "DSN=LocalHost;Driver={ODBC Driver Version}"}` | Expression |  |

A `OdbcConnectionDetails` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Connection String`| `EncryptableText`| `$@"DSN=LocalHost;Driver={ODBC Driver Version}"` | The Connection String that is used to connect to an ODBC data source. |

### Connection Strings

A [Connection String][] must be provided in order to connect to an ODBC data source. The [Connection String][] can be formatted differently depending on the ODBC driver. See [ConnectionStrings.com][] for a list of ODBC connection strings under each specific data source.

Please see [Working with Data Sources][] for a list of other supported data sources (e.g. SQL Server) and how to construct valid connection strings for them.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `OdbcConnectionDetails`.
* The Literal Editor is not available for [Input][] properties where the data type is `OdbcConnectionDetails`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OdbcConnectionDetails`.

### Known limitations

* Currently string values cannot be used as a parameter when connected to an Microsoft Access data source.

## See Also

### Related Data Types

* [ConnectionDetails][]
* [SqlServerConnectionDetails][]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

* [ConnectionStrings.com][]

[Connection String]: {{< ref "#connection-string" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[ConnectionDetails]: {{< url "Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[SqlServerConnectionDetails]: {{< url "Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.MainDoc" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}

[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}

[ConnectionStrings.com]: {{< url "ConnectionStrings.MainDoc" >}}
