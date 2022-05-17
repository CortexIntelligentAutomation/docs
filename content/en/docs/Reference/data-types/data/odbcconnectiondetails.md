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

## Known limitations

- Currently string values cannot be used as a parameter when connected to an Access data source.

## See also

TODO:
