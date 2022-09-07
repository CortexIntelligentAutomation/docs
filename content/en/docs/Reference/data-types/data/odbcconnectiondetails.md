---
title: "OdbcConnectionDetails"
linkTitle: "OdbcConnectionDetails"
description: "Holds the information used to establish and maintain a connection to an Odbc data source."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Data.OdbcConnectionDetails)</p>

## Summary

The `OdbcConnectionDetails` data type is to establish and maintain a connection to an Odbc data source.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `OdbcConnectionDetails` |
| **Full Name:**         | `Cortex.DataTypes.Data.OdbcConnectionDetails` |
| **Alias:**             | N/A |
| **Description:**       | Holds the information used to establish and maintain a connection to an Odbc data source.  |
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `ConnectionDetails`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Properties

### Connection String

The Connection String is used to connect to the data source.

| | |
|--------------------|---------------------------|
| Data Type | [EncryptableText][] |
| Is Advanced | `false` |
| Default Editor | [Expression][TODO] |
| Default Value | [EncryptableText][] with value `$@"Dsn=DSN Name;Driver=Driver Name;"` |

## Remarks

### Create an OdbcConnectionDetails

The following table shows some of the ways that a `OdbcConnectionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `OdbcConnectionDetails` expression | `new OdbcConnectionDetails("DSN=LocalHost;Driver={ODBC Driver Version}")` | `{"ConnectionString": "DSN=LocalHost;Driver={ODBC Driver Version}"}` | Expression |  |

A `OdbcConnectionDetails` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `ConnectionString`        | `Int32`   | The command that will be executed or queried against the data source. |

### Connection Strings

A [Connection String][] must be provided in order to connect to a data source. The [Connection String][] is formatted differently depending on the type of data source, please see [Working with Data Sources][] for more information.

Please see [Working with Data Sources][] for a list of supported data sources and how to construct valid connection strings for them.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `OdbcConnectionDetails`.
* The Literal Editor is not available for [Input][] properties where the data type is `OdbcConnectionDetails`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `OdbcConnectionDetails`.

## Known limitations

* Currently string values cannot be used as a parameter when connected to an Access data source.

## See Also

### Related Data Types

* [ConnectionDetails][]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

None

[Connection String]: {{< ref "#connection-string" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[ConnectionDetails]: {{< url "Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}

[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
