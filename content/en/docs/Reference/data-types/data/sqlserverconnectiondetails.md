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
| Use a `SqlServerConnectionDetails` expression | `new SqlServerConnectionDetails("ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;")` | `{"ConnectionString": "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | Expression |  |

## Known limitations

None

## See also

TODO:
