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
| **Size:**              | Varies |
| **Default Value:**     | `null` |
| **Can be used as:**    | `IConnectionDetails`, `TConnectionDetails`, `Object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Remarks

### Create a SqlServerConnectionDetails

The following table shows some of the ways that a `SqlServerConnectionDetails` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `SqlServerConnectionDetails` expression | `new SqlServerConnectionDetails("Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;")` | `{"ConnectionString": "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | Expression |  |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `SqlServerConnectionDetails`.
* The Literal Editor is not available for [Input][] properties where the data type is `SqlServerConnectionDetails`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `SqlServerConnectionDetails`.

## Known limitations

None
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
