---
title: "SqlServerConnectionDetails"
linkTitle: "SqlServerConnectionDetails"
description: "Holds the information used to establish and maintain a connection to a SqlServer data source."
---

# {{< param title >}}

<p class="namespace">(Cortex.DataTypes.Data.SqlServerConnectionDetails)</p>

## Summary

The `SqlServerConnectionDetails` data type is to establish and maintain a connection to a SqlServer data source.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `SqlServerConnectionDetails` |
| **Full Name:**         | `Cortex.DataTypes.Data.SqlServerConnectionDetails` |
| **Alias:**             | N/A |
| **Description:**       | Holds the information used to establish and maintain a connection to a SqlServer data source. |
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
| Default Editor | [Expression][TODO] |
| Default Value | [EncryptableText][] with value `$@"Server=localhost;Database=YourDatabase;Trusted_Connection=true;"` |

## Remarks

### Create a SqlServerConnectionDetails

The following table shows some of the ways that a `SqlServerConnectionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `SqlServerConnectionDetails` expression | `new SqlServerConnectionDetails("Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;")` | `{"ConnectionString": "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | Expression |  |

A `SqlServerConnectionDetails` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Connection String`| `EncryptableText`| `$@"Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"` | The Connection String that is used to connect to the data source. |

### Connection Strings

A [Connection String][] must be provided in order to connect to a data source. The [Connection String][] is formatted differently depending on the type of data source, please see [Working with Data Sources][] for more information.

Please see [Working with Data Sources][] for a list of supported data sources and how to construct valid connection strings for them.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `SqlServerConnectionDetails`.
* The Literal Editor is not available for [Input][] properties where the data type is `SqlServerConnectionDetails`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `SqlServerConnectionDetails`.

## Known limitations

None

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
