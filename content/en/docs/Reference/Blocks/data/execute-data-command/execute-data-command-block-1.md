---
title: "Execute Data Command"
linkTitle: "Execute Data Command"
description: "Connects to a specific data source and executes a Command, returning any object from the Command's result."
---

![Icon](/blocks/data-execute-command-block-icon.png)

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Data.ExecuteDataCommand.ExecuteDataCommandBlock`1)</p>

## Description

Connects to a data source (e.g. SQL Server) using the specified [Connection Details][Connection Details Property], and executes a [Command][Command Property] (e.g. `SELECT * FROM Table`), returning the [Result][Result Property].

[Close Connection][Close Connection Property] can be specified to choose whether the connection to the data source is closed or is kept open for use on subsequent Execute Command blocks.

## Examples

### Selecting Rows

This example will select all rows and columns from a connected SQL Server data source which have an Id less than 3, saving the rows to the [Result][Result Property].

A [QueryCommand][Command Types QueryCommand] is used throughout this example to select data from the data source, however, both an [Command][Command Types Command] or [Commands][Command Types Commands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT * FROM Table WHERE Id < @SelectParameter", "Parameters": {"SelectParameter": 3}}`<br><br>In this example `($)Command` has been set using the following [Expression][]:<br><br> `new QueryCommand("SELECT * FROM Table WHERE Id < @SelectParameter", new {SelectParameter = 3})` | `($)Command` is a variable of type [QueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [SqlServerConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)CloseConnection`, with value `true` | `($)CloseConnection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [dynamic][] |

#### Result

Selecting all rows and columns that have an Id less than 3 from `Table` using a [QueryCommand][Command Types QueryCommand] results in the variable `($)Result` being updated to the following:

```json
[
    { 
        "Id": 1, 
        "FirstColumn": "FirstColumn1", 
        "SecondColumn": "SecondColumn1"
    },
    { 
        "Id": 2, 
        "FirstColumn": "FirstColumn2", 
        "SecondColumn": "SecondColumn2"
    }
]
```

Note that using a [Parameterised Command][Parameterised Commands] helps prevent against [SQL Injection][], for more information please see [Parameterised Commands][]. For an example of a non parameterised command please see [Executing Multiple Commands (Unsafe)][]

***

### Inserting Rows

This example will insert a new row into a connected SQL Server data source, saving the number of rows inserted to the [Result][Result Property].

A [NonQueryCommand][Command Types NonQueryCommand] is used throughout this example to insert data into the data source, however, both an [Command][Command Types Command] or [Commands][Command Types Commands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2)", "Parameters": { "InsertParameter1": \"FirstColumn4\", "InsertParameter2": \"SecondColumn4\" } }`<br><br>In this example `($)Command` has been set using the following [Expression][]:<br><br> `new NonQueryCommand("INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2)", new { InsertParameter1 = "FirstColumn4", InsertParameter2 = "SecondColumn4" })` | `($)Command` is a variable of type [NonQueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [SqlServerConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)CloseConnection`, with value `true` | `($)CloseConnection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [dynamic][] |

#### Result

Inserting a new row into `Table` using a parameterised [NonQueryCommand][Command Types NonQueryCommand] results in the variable `($)Result` being updated to the following:

```json
1
```

This indicates that 1 row has been inserted into `Table`, with `Table` being updated to:

| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |
| `4` | `"FirstColumn4"` | `"SecondColumn4"` |

Note that using a [Parameterised Command][Parameterised Commands] helps prevent against [SQL Injection][], for more information please see [Parameterised Commands][]. For an example of a non parameterised command please see [Executing Multiple Commands (Unsafe)][]

***

### Updating Rows

This example will update all rows on a connected SQL Server data source which have an Id less than `3`, saving the number of rows updated to the [Result][Result Property].

A [NonQueryCommand][Command Types NonQueryCommand] is used throughout this example to update data in the data source, however, both an [Command][Command Types Command] or [Commands][Command Types Commands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "UPDATE Table SET FirstColumn = \"Updated\" WHERE Id < @UpdateParameter", "Parameters": { "UpdateParameter": 3 } }`<br><br>In this example `($)Command` has been set using the following [Expression][]:<br><br> `new NonQueryCommand("UPDATE Table SET FirstColumn = \"Updated\" WHERE Id < @UpdateParameter", new {UpdateParameter = 3})` | `($)Command` is a variable of type [NonQueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [SqlServerConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)CloseConnection`, with value `true` | `($)CloseConnection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [dynamic][] |

#### Result

Updating all rows that have an Id less than `3` in `Table` using a [NonQueryCommand][Command Types NonQueryCommand] results in the variable `($)Result` being updated to the following:

```json
2
```

This indicates that 2 rows have been updated in `Table`, with `Table` being updated to:

| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"Updated"` | `"SecondColumn1"` |
| `2` | `"Updated"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

Note that using a [Parameterised Command][Parameterised Commands] helps prevent against [SQL Injection][], for more information please see [Parameterised Commands][]. For an example of a non parameterised command please see [Executing Multiple Commands (Unsafe)][]

***

### Deleting Rows

This example will delete all rows on a connected SQL Server data source which have an Id less than `3`, saving the number of rows deleted to the [Result][Result Property].

A [NonQueryCommand][Command Types NonQueryCommand] is used throughout this example to delete data in the data source, however, both an [Command][Command Types Command] or [Commands][Command Types Commands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "DELETE FROM Table WHERE Id < @DeleteParameter", "Parameters": { "DeleteParameter": 3 } }`<br><br>In this example `($)Command` has been set using the following [Expression][]:<br><br> `new NonQueryCommand("DELETE FROM Table WHERE Id < @DeleteParameter", new {DeleteParameter = 3})` | `($)Command` is a variable of type [NonQueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [SqlServerConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)CloseConnection`, with value `true` | `($)CloseConnection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [dynamic][] |

#### Result

Deleting all rows that have an Id less than `3` in `Table` using a [NonQueryCommand][Command Types NonQueryCommand] results in the variable `($)Result` being updated to the following:

```json
2
```

This indicates that 2 rows have been deleted in `Table`, with `Table` being updated to:

| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

Note that using a [Parameterised Command][Parameterised Commands] helps prevent against [SQL Injection][], for more information please see [Parameterised Commands][]. For an example of a non parameterised command please see [Executing Multiple Commands (Unsafe)][]

***

### Using Functions

This example will select the maximum Id value from a connected SQL Server data source, saving the value of the function to the [Result][Result Property].

A [QueryCommand][Command Types QueryCommand] is used throughout this example to select the maximum Id value from the data source, however, both an [Command][Command Types Command] or [Commands][Command Types Commands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:

| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT Max(Id) FROM Table", "Parameters": null}`<br><br>In this example `($)Command` has been set using the following [Expression][]:<br><br> `new QueryCommand("SELECT Max(Id) FROM Table", null)` | `($)Command` is a variable of type [QueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [SqlServerConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)CloseConnection`, with value `true` | `($)CloseConnection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [dynamic][] |

#### Result

Selecting the maximum Id value from `Table` using a [QueryCommand][Command Types QueryCommand] results in the variable `($)Result` being updated to the following:

```json
[
    { 
        "": 3
    }
]
```

Note that the `AS` keyword can be used to give aliases to results, for example the CommandText `"SELECT Max(Id) AS MaxId FROM Table;"` would have resulted in the variable `($)Result` being updated to `[ { "MaxId": 3 } ]`; the `AS` keyword also allows for [Using Multiple Functions][].

***

### Using Multiple Functions

This example will select the maximum Id value as MaxId and the minimum Id value as MinId from a connected SQL Server data source, saving the values of the functions to the [Result][Result Property].

A [QueryCommand][Command Types QueryCommand] is used throughout this example to select the maximum Id value as MaxId and the minimum Id value as MinId from the data source, however, both an [Command][Command Types Command] or [Commands][Command Types Commands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:

| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT Max(Id) AS MaxId, Min(Id) AS MinId FROM Table", "Parameters": null}`<br><br>In this example `($)Command` has been set using the following [Expression][]:<br><br> `new QueryCommand("SELECT Max(Id) AS MaxId, Min(Id) AS MinId FROM Table", null)` | `($)Command` is a variable of type [QueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [SqlServerConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)CloseConnection`, with value `true` | `($)CloseConnection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [dynamic][] |

#### Result

Selecting the maximum Id value as MaxId and the minimum Id value as MinId from `Table` using a [QueryCommand][Command Types QueryCommand] results in the variable `($)Result` being updated to the following:

```json
[
    { 
        "MaxId": 3,
        "MinId": 1 
    }
]
```

***

### Executing Multiple Commands (Safe)

This example will select, insert, update and delete from a connected SQL Server data source, using a parameterised command. The result of each command will be saved to the result.

An [Commands][Command Types Commands] is used throughout this example, as it is the only type of [Command][Command Property] that allows you to execute and return the results of multiple commands.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT * FROM Table WHERE Id < @SelectParameter; INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2); UPDATE Table SET FirstColumn = \"Updated\" WHERE Id < @UpdateParameter; DELETE FROM Table WHERE Id < @DeleteParameter; SELECT * FROM Table", "Parameters": { "SelectParameter": 3, InsertParameter1 = \"FirstColumn4\", InsertParameter2 = \"SecondColumn4\", "UpdateParameter": 3, "DeleteParameter": 3 }}`<br><br>In this example `($)Command` has been set using the following [Expression][]:<br><br> `new Commands("SELECT * FROM Table WHERE Id < @SelectParameter; INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2); UPDATE Table SET FirstColumn = \"Updated\" WHERE Id < @UpdateParameter; DELETE FROM Table WHERE Id < @DeleteParameter; SELECT * FROM Table", new {SelectParameter = 3, InsertParameter1 = "FirstColumn4", InsertParameter2 = "SecondColumn4", UpdateParameter = 3, DeleteParameter = 3})` | `($)Command` is a variable of type [Commands][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [SqlServerConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)CloseConnection`, with value `true` | `($)CloseConnection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [dynamic][] |

#### Result

Running the [Commands][Command Types Commands] results in the variable `($)Result` being updated to the following:

```json
[
    [
        { 
            "Id": 1, 
            "FirstColumn": "FirstColumn1", 
            "SecondColumn": "SecondColumn1"
        },
        { 
            "Id": 2, 
            "FirstColumn": "FirstColumn2", 
            "SecondColumn": "SecondColumn2"
        }
    ],
    1,
    2,
    2,
    [
        { 
            "Id": 3, 
            "FirstColumn": "FirstColumn3", 
            "SecondColumn": "SecondColumn3"
        },
        { 
            "Id": 4, 
            "FirstColumn": "FirstColumn4", 
            "SecondColumn": "SecondColumn4"
        }
    ]
]
```

- The first item of `($)Result` represents the rows selected by the first select statement (`SELECT * FROM Table WHERE Id < @SelectParameter`).
- The second item of `($)Result` indicates that 1 row has been inserted into `Table` (`INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2)`).
- The third item of `($)Result` indicates that 2 rows have been updated in `Table` (`UPDATE Table SET FirstColumn = \"Updated\" WHERE Id < @UpdateParameter`).
- The fourth item of `($)Result` indicates that 2 rows have been deleted in `Table` (`DELETE FROM Table WHERE Id < @DeleteParameter`).
- The fifth item of `($)Result` represents the rows selected by the second select statement (`SELECT * FROM Table`).

`Table` has been updated to:

| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |
| `4` | `"FirstColumn4"` | `"SecondColumn4"` |

Note that using a [Parameterised Command][Parameterised Commands] helps prevent against [SQL Injection][], for more information please see [Parameterised Commands][]. For an example of a non parameterised command please see [Executing Multiple Commands (Unsafe)][]

***

### Executing Multiple Commands (Unsafe)

This example will select, insert, update and delete from a connected SQL Server data source, using [String Interpolation][] instead of parameters. The result of each command will be saved to the result.

{{% alert title="Warning" color="warning"  %}}
This example inserts data directly into the [Command](#command) instead of using parameters. This means the SQL in this example is susceptible to [SQL Injection](https://www.w3schools.com/sql/sql_injection.asp) and it is advised to use parameters to insert data into a command instead.

Please see [Executing Multiple Commands (Safe)](#executing-multiple-commands-safe) for an example of a [Parameterised Command](#parameterised-commands).
{{% /alert %}}

An [Commands][Command Types Commands] is used throughout this example, as it is the only type of [Command][Command Property] that allows you to execute and return the results of multiple commands.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `1` | `"FirstColumn1"` | `"SecondColumn1"` |
| `2` | `"FirstColumn2"` | `"SecondColumn2"` |
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |

In this example assume the following variables have been set before the command has been executed:

- `($)SelectParameter` with the value `3`
- `($)InsertParameter1` with the value `"FirstColumn4"`
- `($)InsertParameter2` with the value `"SecondColumn4"`
- `($)UpdateParameter` with the value `3`
- `($)DeleteParameter` with the value `3`

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT * FROM Table WHERE Id < 3; INSERT INTO Table (FirstColumn, SecondColumn) VALUES (\"FirstColumn1\", \"SecondColumn2\"); UPDATE Table SET FirstColumn = \"Updated\" WHERE Id < 3; DELETE FROM Table WHERE Id < 3; SELECT * FROM Table", "Parameters": null}`<br><br>In this example `($)Command` has been set using the following [Expression][]:<br><br> `new Commands($"SELECT * FROM Table WHERE Id < {($)SelectParameter}; INSERT INTO Table (FirstColumn, SecondColumn) VALUES ({($)InsertParameter1}, {($)InsertParameter2}); UPDATE Table SET FirstColumn = \"Updated\" WHERE Id < {($)UpdateParameter}; DELETE FROM Table WHERE Id < {($)DeleteParameter}; SELECT * FROM Table", null)` | `($)Command` is a variable of type [Commands][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [SqlServerConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)CloseConnection`, with value `true` | `($)CloseConnection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [dynamic][] |

#### Result

Running the [Commands][Command Types Commands] results in the variable `($)Result` being updated to the following:

```json
[
    [
        { 
            "Id": 1, 
            "FirstColumn": "FirstColumn1", 
            "SecondColumn": "SecondColumn1"
        },
        { 
            "Id": 2, 
            "FirstColumn": "FirstColumn2", 
            "SecondColumn": "SecondColumn2"
        }
    ],
    1,
    2,
    2,
    [
        { 
            "Id": 3, 
            "FirstColumn": "FirstColumn3", 
            "SecondColumn": "SecondColumn3"
        },
        { 
            "Id": 4, 
            "FirstColumn": "FirstColumn4", 
            "SecondColumn": "SecondColumn4"
        }
    ]
]
```

- The first item of `($)Result` represents the rows selected by the first select statement (`SELECT * FROM Table WHERE Id < @SelectParameter`).
- The second item of `($)Result` indicates that 1 row has been inserted into `Table` (`INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@InsertParameter1, @InsertParameter2)`).
- The third item of `($)Result` indicates that 2 rows have been updated in `Table` (`UPDATE Table SET FirstColumn = \"Updated\" WHERE Id < @UpdateParameter`).
- The fourth item of `($)Result` indicates that 2 rows have been deleted in `Table` (`DELETE FROM Table WHERE Id < @DeleteParameter`).
- The fifth item of `($)Result` represents the rows selected by the second select statement (`SELECT * FROM Table`).

`Table` has been updated to:

| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| `3` | `"FirstColumn3"` | `"SecondColumn3"` |
| `4` | `"FirstColumn4"` | `"SecondColumn4"` |

Note that using a [Parameterised Command][Parameterised Commands] helps prevent against [SQL Injection][], for more information please see [Parameterised Commands][].

***

## Properties

### Command

The [Command][Command Property] executed on the connected data source. There are multiple [Command Types][] that can be used, each with a different purpose:

- [Command][Command Types Command]: Parses a single statement provided in the commandText, determining how the statement should be executed against the data source. If the commandText is a [Query Statement][Query Statements] the rows retrieved from the data source will be returned, otherwise if the commandText is a [Non Query Statement][Non Query Statements] the number of rows affected will be returned.
- [Commands][Command Types Commands]: Parses single or multiple statements provided in the commandText, determining how each statement should be executed against the data source. If a [Query Statement][Query Statements] is executed rows retrieved from the data source are added as an entry of the result, If a [Non Query Statement][Non Query Statements] is executed the number of rows affected is added as an entry of the result.
- [QueryCommand][Command Types QueryCommand]: Executes the given commandText as a [Query Statement][Query Statements], returning the rows retrieved from the data source.
- [NonQueryCommand][Command Types NonQueryCommand]: Executes the given commandText as a [Non Query Statement][Non Query Statements], returning the number of rows affected from the data source.

| | |
|--------------------|---------------------------|
| Data Type | [DataCommand][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][] |
| Default Value | [Command][Command Types Command] with value `{"CommandText": "", "Parameters": null}` |

### Connection Details

The [Connection Details][Connection Details Property] object that includes all of the information required to connect to a data source, including:

- [Connection String][Connection Strings] - must be provided in order to connect to a data source. The [Connection String][Connection Strings] is formatted differently depending on the type of data source that is being connected to, please see [Working with Data Sources][] for more information.

For a list of currently supported connection details, please see [ConnectionDetails][]

Note it is recommended to use a [Variable][] for [Connection Details][Connection Details Property] when it will be used across multiple Execute Command blocks, as using a variable will allow for reuse of the same connection. Using a [Literal][] to set the Connection Details will cause the connection to only be used once.

| | |
|--------------------|---------------------------|
| Data Type | [ConnectionDetails][]|
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][] |
| Default Value | [SqlServerConnectionDetails][] with value `{"ConnectionString": "Server=localhost;Database=YourDatabase;Trusted_Connection=true;"}` |

### Close Connection

[Close Connection][Close Connection Property] can be specified to choose whether the connection to the data source is closed or is kept open for use on subsequent Execute Command blocks, this defaults to `false` if left blank, please see [Closing Connections][] for more information.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Literal][] |
| Default Value | [Boolean][] with value `true` |

### Result

The object returned from the data source.

Depending on the type of [Command][Command Property], the data returned within the [Result][Result Property] will vary. Please see [Command Types][] for more information on what data will be returned by each type.

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][Variable Editor] |
| Default Value | `($)Result` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when the [Command][Command Property] is null. |
| | Thrown when the commandText within the [Command][Command Property] is null. |
| | Thrown when the [Connection Details][Connection Details Property] is null. |
| | Thrown when the connectionString within the [Connection Details][Connection Details Property] is null. |
| [PropertyEmptyException][] | Thrown when the commandText within the [Command][Command Property] is empty. |
| | Thrown when the connectionString within the [Connection Details][Connection Details Property] is empty. |
| [InvalidConnectionStringException][] | Thrown when an invalid connection string has been supplied (e.g. The connection string contains an invalid argument `"NotAnArgument = False"`). |
| | Thrown when a required connection string argument has not been supplied (e.g. The server requires encryption and the connection string contains `"Encrypt=False"`). |
| [CommandException][] | Thrown when the data source was not found or was not accessible. |
| | Thrown when an error occurs whilst trying to open a new connection. |
| | Thrown when a connection is successfully established but an error occurred during the login process. |
| | Thrown when the [Command][Command Property] contains syntax errors. The error will contain a nested [SqlException][] with a corresponding [SqlException Error Code][SqlException Error Codes]. |
| | Thrown when the [Command][Command Property] is invalid for the table specified. |
| | Thrown when the [Command][Command Property] references a non-existent stored procedure. |
| | Thrown when parameters derives from [Array][] or [IEnumerable][] when a [Query Statement][Query Statements] is executed. |
| | Thrown when an [Command][] contains multiple statements. |

## Remarks

### Command Types

There are multiple types of [Command][Command Property] that can be used, each with a different purpose:

#### Command

A [Command][] parses a single statement provided in the [commandText][Command.CommandText], determining how the statement should be executed against the data source. If the [commandText][Command.CommandText] is a [Query Statement][Query Statements] the rows retrieved from the data source will be returned, otherwise if the [commandText][Command.CommandText] is a [Non Query Statement][Non Query Statements] the number of rows affected will be returned.

For a [Query Statement][Query Statements] (e.g. select and execute):

| [Result][Result Property] will be set to | when |
|-|-|
| [List][]&lt;[Structure][]&gt; with a single item | Single item is returned |
| [List][]&lt;[Structure][]&gt; with many items | Many items are returned |
| [List][]&lt;[Structure][]&gt; with no items | No items are returned |

For a [Non Query Statement][Non Query Statements] (e.g. insert, update, delete, etc)

| [Result][Result Property] will be set to | when &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|-|-|
| [Int32][] with a value of `1` | Single row is affected |
| [Int32][] with a value greater than `1` | Many rows are affected |
| [Int32][] with a value of `0` | No rows are affected |

If multiple statements are provided in [CommandText][Command.CommandText], the block will throw a [CommandException][] as this type can only run single statements.

If performance is a key consideration it is recommended to use a [QueryCommand][Command Types QueryCommand] or [NonQueryCommand][Command Types NonQueryCommand] instead of [Command][] as they do not parse the [commandText][Command.CommandText].

#### Commands

A [Commands][] parses single or multiple statements provided in the [commandText][Commands.CommandText], determining how each statement should be executed against the data source. If a [Query Statement][Query Statements] is executed rows retrieved from the data source are added as an entry of the result, If a [Non Query Statement][Non Query Statements] is executed the number of rows affected is added as an entry of the result.

For each [Query Statement][Query Statements] (e.g. select and execute):

| [Result][Result Property] will have the following entry added | when |
|-|-|
| [List][]&lt;[Structure][]&gt; with a single item | Single item is returned |
| [List][]&lt;[Structure][]&gt; with many items | Many items are returned |
| [List][]&lt;[Structure][]&gt; with no items | No items are returned |

For each [Non Query Statement][Non Query Statements] (e.g. insert, update, delete, etc)

| [Result][Result Property] will have the following entry added | when &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|-|-|
| [Int32][] with a value of `1` | Single row is affected |
| [Int32][] with a value greater than `1` | Many rows are affected |
| [Int32][] with a value of `0` | No rows are affected |

If performance is a key consideration it is recommended to use a [QueryCommand][Command Types QueryCommand] or [NonQueryCommand][Command Types NonQueryCommand] instead of [Commands][] as they do not parse the [commandText][Commands.CommandText].

Note that the [Commands][] should not be used for commands that have dependency between their statements (e.g. Cursors and Variables). Please see [Complex Commands][] for more information on how to deal with these.

#### QueryCommand

A [QueryCommand][] executes the given [commandText][QueryCommand.CommandText] as a [Query Statement][Query Statements], returning the rows retrieved from the data source. If the [commandText][QueryCommand.CommandText] contains multiple select statements, only the results of the first [Query Statement][Query Statements] will be returned.

For a [Query Statement][Query Statements] (e.g. select):

| [Result][Result Property] will be set to | when |
|-|-|
| [List][]&lt;[Structure][]&gt; with a single item | Single item is returned |
| [List][]&lt;[Structure][]&gt; with many items | Many items are returned |
| [List][]&lt;[Structure][]&gt; with no items | No items are returned |

For a [Non Query Statement][Non Query Statements] (e.g. insert, update, delete, etc)

| [Result][Result Property] will be set to &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| when |
|-|-|
| `null` | always, as [Non Query Statements][] do not return data |

Note use a [QueryCommand][] for commands that have dependency between their statements (e.g. Cursors and Variables) and return data from the data source. Please see [Complex Commands][] for more information.

#### NonQueryCommand

A [NonQueryCommand][] executes the given [commandText][NonQueryCommand.CommandText] as a [Non Query Statement][Non Query Statements], returning the number of rows affected from the data source. If the command contains multiple statements, the sum of all the results will be returned.

For a [Query Statement][Query Statements] (e.g. select):

| [Result][Result Property] will be set to &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; | when |
|-|-|
| [Int32][] with a value of `-1` | always, as [Query Statements][] do not return data  |

For a [Non Query Statement][Non Query Statements] (e.g. insert, update, delete, etc)

| [Result][Result Property] will be set to | when |
|-|-|
| [Int32][] with a value of `1` | Single row is affected |
| [Int32][] with a value greater than `1` | Many rows are affected |
| [Int32][] with a value of `0` | No rows are affected |

Note use a [NonQueryCommand][] for commands that have dependency between their statements (e.g. Cursors and Variables) and return the number of rows affected. Please see [Complex Commands][] for more information.

### Statement Types

There are two categories of statements [Query][Query Statements] and [Non Query][Non Query Statements].

#### Query Statements

Query Statements are used to retrieve data from a data source, for example selecting all rows from a table in a database, Query Statements return the data selected by the Statement as a [List][]&lt;[Structure][]&gt; when used in an [Command][Command Types Command], an [Commands][Command Types Commands], or a [QueryCommand][Command Types QueryCommand]. If a Query Statement is used in a [NonQueryCommand][Command Types NonQueryCommand] `-1` will be returned as Query Statements do not affect rows.

Examples of Query Statements can be found here:

- [Selecting Rows][]
- [Using Functions][]
- [Using Multiple Functions][]
- [Executing Multiple Commands (Safe)][]
- [Executing Multiple Commands (Unsafe)][]

A Query Statement can use any object as a parameter. Objects that derive from [Array][] or [IEnumerable][] can only be used for clauses that accept list values (e.g. `IN`, `ANY`, `ALL`), if they are used in other clauses the block will throw a [CommandException][].

#### Non Query Statements

Non Query Statements are used to manipulate the data within a data source, for example deleting all rows from a table in a database, Non Query Statements return the number of rows affected by the Statement as an [Int32][] value when used in an [Command][Command Types Command], an [Commands][Command Types Commands], or a [NonQueryCommand][Command Types NonQueryCommand]. If a Non Query Statement is used in a [QueryCommand][Command Types QueryCommand] `null` will be returned as Non Query Statements do not return data.

Examples of Non Query Statements can be found here:

- [Inserting Rows][]
- [Updating Rows][]
- [Deleting Rows][]
- [Executing Multiple Commands (Safe)][]
- [Executing Multiple Commands (Unsafe)][]

A Non Query Statement can use any object as a parameter. If an object that derives from [Array][] or [IEnumerable][] is used, the Non Query Statement will be executed for each item in the [Array][] or [IEnumerable][] and the sum of all the results will be returned.

### Parameterised Commands

It is recommended to always use parameterised commands as they prevent [SQL Injection][] attacks by ensuring the parameters are sanitised before the [Command][Command Property] is executed.

The `@` symbol denotes a parameter within the [CommandText][DataCommand.CommandText] (e.g. `"SELECT * FROM Table WHERE Name = @Parameter"`). An example of using parameters can be found in [Executing Multiple Commands (Safe)][], whereas, an example of inserting variables into a statement without parameters can be found in [Executing Multiple Commands (Unsafe)][]

[Query Statements][] can use any object as a parameter. Objects that derive from [Array][] or [IEnumerable][] can only be used for clauses that accept list values (e.g. `IN`, `ANY`, `ALL`), if they are used in other clauses the block will throw a [CommandException][].

[Non Query Statements][] can use any object as a parameter. If an object that derives from [Array][] or [IEnumerable][] is used, the Non Query Statement will be executed for each item in the [Array][] or [IEnumerable][] and the sum of all the results will be returned.

For both [Query Statements][] and [Non Query Statements][], an SqlException is thrown if a parameter is missing from the [Command][Command Property] and the [CommandText][DataCommand.CommandText] contains a parameter  (e.g. `{"CommandText": "SELECT * FROM Table WHERE Name = @Parameter", "Parameters": {"IncorrectParameter": 0}}`).

### Complex Commands

Complex commands (e.g. Cursors and Variables) that contain dependency between their statements cannot be used with [Commands][Command Types Commands], as the parsing performed by the block will cause each statement of [CommandText][DataCommand.CommandText] to be run individually instead of running the [CommandText][DataCommand.CommandText] as a whole.

For statements with this type of dependency use either [QueryCommand][Command Types QueryCommand] or [NonQueryCommand][Command Types NonQueryCommand], depending on whether data from the data source or the number of rows affected is returned.

### Connection Strings

A connection string must be provided within the [Connection Details][Connection Details Property] in order to connect to a data source. The connection string is formatted differently depending on the type of data source, please see [Working with Data Sources][] for more information.

Please see [Working with Data Sources][] for a list of supported data sources and how to construct valid connection strings for them.

### Opening Connections

The Execute Command block automatically handles creating and opening connections for the specified [Connection Details][Connection Details Property] using the following rules:

- If a connection does not exist, a new connection will be created, opened and used when the block runs.
- If a connection already exists but is closed, the connection will be opened and used when the block runs.
- If a connection already exists and is open, the connection will used the block runs.

If a [Variable][] is used to pass in the [Connection Details][Connection Details Property] it can be used to keep the connection alive across multiple Execute Command blocks as long as [Close Connection][Close Connection Property] is set to `false`. Keeping the connection open helps increase the performance of the block due to the subsequent blocks not having to spend resources creating and opening connections for each execution.

If a [Literal][] or an [Expression][] is used to create the [Connection Details][Connection Details Property] a new connection will always be made when the Execute Command block runs and if [Close Connection][Close Connection Property] is set to `false` the connection will be closed automatically at some point after the block finishes and before the flow ends.

For information on how to explicitly close a connection, please see [Closing Connections][].

### Closing Connections

Connections can be explicitly closed by setting [Close Connection][Close Connection Property] to `true`. This causes the connection to be closed after the [Command][Command Property] has been executed.

If a [Variable][] is used to pass in the [Connection Details][Connection Details Property] and [Close Connection][Close Connection Property] is set to `false` the connection will be closed when the [Variable][] goes out of scope or the flow ends, whichever happens first. For more information about variables and scope, please see [Working with Variables][].

If a [Literal][] or an [Expression][] is used to create the [Connection Details][Connection Details Property] and [Close Connection][Close Connection Property] is set to `false` the connection will be closed automatically at some point after the Execute Command block finishes and before the flow ends.

For information on how to open a connection, please see [Opening Connections][].

### Why does the Result property return a dynamic data type?

The decision for the [Result][Result Property] to return a [dynamic data type][dynamic] rather than a specific type, was to avoid users having to [cast][Object Casting] the [Result][Result Property] to its correct type to be able to use all of its properties.

As a result, any issues with using the [Result][Result Property] (i.e. trying to access a property it does not have) will not be reported as messages when trying to debug the flow; they will only be discovered when the flow execution reaches the part of the flow with the issue.

If it is desirable to have any issues reported as messages when trying to debug the flow, the user can [cast][Object Casting] the [Result][Result Property] to its correct type.

### Known Limitations

When using a [Parameterised Command][Parameterised Commands] to execute a stored procedure, it is not possible to write back to output parameters.

[Command Property]: {{< ref "#command" >}}
[Connection Details Property]: {{< ref "#connection-details" >}}
[Close Connection Property]: {{< ref "#close-connection" >}}
[Result Property]: {{< ref "#result-8" >}}

[Selecting Rows]: {{< ref "#selecting-rows">}}
[Inserting Rows]: {{< ref "#inserting-rows">}}
[Updating Rows]: {{< ref "#updating-rows">}}
[Deleting Rows]: {{< ref "#deleting-rows">}}
[Executing Multiple Commands (Safe)]: {{< ref "#executing-multiple-commands-safe">}}
[Executing Multiple Commands (Unsafe)]: {{< ref "#executing-multiple-commands-unsafe">}}
[Using Functions]: {{< ref "#using-functions">}}
[Using Multiple Functions]: {{< ref "#using-multiple-functions">}}
[Executing a Parameterised Command]: {{< ref "#executing-a-parameterised-command">}}

[Command Types]: {{< ref "#command-types">}}
[Command Types Command]: {{< ref "#command-1">}}
[Command Types Commands]: {{< ref "#commands">}}
[Command Types QueryCommand]: {{< ref "#querycommand">}}
[Command Types NonQueryCommand]: {{< ref "#nonquerycommand">}}

[Query Statements]: {{< ref "#query-statements">}}
[Non Query Statements]: {{< ref "#non-query-statements">}}

[Connection Strings]: {{< ref "#connection-strings">}}
[Parameterised Commands]: {{< ref "#parameterised-commands">}}
[Complex Commands]: {{< ref "#complex-commands">}}
[Opening Connections]: {{< ref "#keeping-connections-open">}}
[Closing Connections]: {{< ref "#closing-connections">}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
[InvalidConnectionStringException]: {{< url "Cortex.Reference.Exceptions.Data.InvalidConnectionStringException.MainDoc" >}}
[CommandException]: {{< url "Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}

[ConnectionDetails]: {{< url "Cortex.Reference.DataTypes.Data.ConnectionDetails.MainDoc" >}}
[SqlServerConnectionDetails]: {{< url "Cortex.Reference.DataTypes.Data.SqlServerConnectionDetails.MainDoc" >}}
[OdbcConnectionDetails]: {{< url "Cortex.Reference.DataTypes.Data.OdbcConnectionDetails.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[TConnectionDetails]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Array]: {{< url "Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}

[DataCommand]: {{< url "Cortex.Reference.DataTypes.Data.DataCommand.MainDoc" >}}
[DataCommand.CommandText]: {{< url "Cortex.Reference.DataTypes.Data.DataCommand.CommandText" >}}

[Command]: {{< url "Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[Command.CommandText]: {{< url "Cortex.Reference.DataTypes.Data.Command.CommandText" >}}

[Commands]: {{< url "Cortex.Reference.DataTypes.Data.Commands.MainDoc" >}}
[Commands.CommandText]: {{< url "Cortex.Reference.DataTypes.Data.Commands.CommandText" >}}

[QueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.MainDoc" >}}
[QueryCommand.CommandText]: {{< url "Cortex.Reference.DataTypes.Data.QueryCommand.CommandText" >}}

[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.MainDoc" >}}
[NonQueryCommand.CommandText]: {{< url "Cortex.Reference.DataTypes.Data.NonQueryCommand.CommandText" >}}

[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.UsingVariables.MainDoc" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[String Interpolation]: {{< url "Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.StringInterpolation" >}}
[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataSources.MainDoc" >}}
[Connection String Formats]: {{< url "ConnectionStrings.MainDoc" >}}
[SqlException Error Codes]: {{< url "MSDocs.SqlServer.ErrorCodes" >}}
[SqlException]: {{< url "MSDocs.SqlServer.SqlException" >}}
[Working with Variables]: {{< url "Cortex.Reference.Concepts.WorkingWith.Variables.MainDoc" >}}
[Object Casting]: {{< url "Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}

[SQL Injection]: {{< url "W3.SqlInjection" >}}
