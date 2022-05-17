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
| **Can be used as:**    | `IConnectionDetails`, `TConnectionDetails`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Remarks

### Create an OdbcConnectionDetails

The following table shows some of the ways that a `OdbcConnectionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `OdbcConnectionDetails` expression | `new OdbcConnectionDetails("DSN=LocalHost;Driver={ODBC Driver Version}")` | `{"ConnectionString": "DSN=LocalHost;Driver={ODBC Driver Version}"}` | Expression |  |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `OdbcConnectionDetails`.
* The Literal Editor is not available for [Input][] properties where the data type is `OdbcConnectionDetails`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `OdbcConnectionDetails`.

## Known limitations

* Currently string values cannot be used as a parameter when connected to an Access data source.

## See Also

### Related Data Types

* [IConnectionDetails][]
* [TConnectionDetails][]

### Related Concepts

* [Working with Data Sources][]

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[IConnectionDetails]: {{< url "Cortex.Reference.DataTypes.Data.IConnectionDetails.MainDoc" >}}
[TConnectionDetails]: {{< url "Cortex.Reference.DataTypes.Data.TConnectionDetails.MainDoc" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}
