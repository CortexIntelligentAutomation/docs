---
title: "Execute Command"
linkTitle: "Execute Command"
description: "Connects to a specific data source and executes a Command, returning any object from the Command's result."
---

![Icon](/blocks/data-execute-command-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Data.ExecuteCommand.ExecuteCommandBlock)</p>

## Description

Connects to a data source and executes a [Command][Command Property], returning any object from the [Command's][Command Property] [Result][Result Property].

The [Connection Details][Connection Details Property] defines what data source the [Command][Command Property] is executed against.

## Examples

### Selecting All Rows

This example will select all rows and columns from a connected SQLServer data source, saving the rows to the [Result][Result Property].

The following [Command Types][] can be used:

- [AnyCommand][Command Types AnyCommand]
- [AnyCommands][Command Types AnyCommands]
- [QueryCommand][Command Types QueryCommand]

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT * FROM Table;", "Parameters": null}` | `($)Command` is a variable of type [AnyCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": null}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)Close Connection`, with value `true` | `($)Close Connection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [Dynamic][] |

#### Result

Selecting all rows and columns from `Table` using an AnyCommand results in the variable `($)Result` being updated to the following:

```json
[
    { 
        "ID": 1, 
        "FirstName": "FirstColumn1", 
        "LastName": "SecondColumn1"
    },
    { 
        "ID": 2, 
        "FirstName": "FirstColumn2", 
        "LastName": "SecondColumn2"
    },
    {
        "ID": 3, 
        "FirstName": "FirstColumn3", 
        "LastName": "SecondColumn3"
    },
]
```

***

### Inserting New Rows

This example will insert a new row into a connected SQLServer data source, saving the number of rows affected to the [Result][Result Property].

The following [Command Types][] can be used:

- [AnyCommand][Command Types AnyCommand]
- [AnyCommands][Command Types AnyCommands]
- [NonQueryCommand][Command Types NonQueryCommand]

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "INSERT INTO Table  (FirstColumn, SecondColumn) VALUES ("FirstColumn4", "SecondColumn4");", "Parameters": null}` | `($)Command` is a variable of type [NonQueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": null}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)Close Connection`, with value `true` | `($)Close Connection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [Dynamic][] |

#### Result

Inserting a new row into `Table` using a NonQueryCommand results in the variable `($)Result` being updated to the following:

```json
1
```

The data source contains a `Table` with which will be updated to the following when the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |
| 4 | FirstColumn4 | SecondColumn4 |

***

### Executing Multiple Commands

This example will insert a new row into a connected SQLServer data source and the retrieve all rows and columns from the data source, saving the number of rows affected and the rows returned to the [Result][Result Property].

The following [Command Types][] can be used:

- [AnyCommands][Command Types AnyCommands]

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "Insert Into Table ("FirstColumn4", "SecondColumn4");; SELECT * FROM Table;", "Parameters": null}` | `($)Command` is a variable of type [AnyCommands][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": null}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)Close Connection`, with value `true` | `($)Close Connection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [Dynamic][] |

#### Result

Inserting a new row into `Table` and then retrieving all rows using an AnyCommands results in the variable `($)Result` being updated to the following:

```json
[
    1,
    [
        { 
            "ID": 1, 
            "FirstName": "FirstColumn1", 
            "LastName": "SecondColumn1"
        },
        { 
            "ID": 2, 
            "FirstName": "FirstColumn2", 
            "LastName": "SecondColumn2"
        },
        {
            "ID": 3, 
            "FirstName": "FirstColumn3", 
            "LastName": "SecondColumn3"
        },
        { 
            "ID": 4, 
            "FirstName": "FirstColumn4", 
            "LastName": "SecondColumn4"
        },
    ]
]
```

The data source contains a `Table` with which will be updated to the following when the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |
| 4 | FirstColumn4 | SecondColumn4 |

***

### Executing a Parameterised Command

This example will insert a new row into a connected SQLServer data source and the retrieve all rows and columns from the data source, saving the number of rows affected and the rows returned to the [Result][Result Property].

The following [Command Types][] can be used:

- [AnyCommand][Command Types AnyCommand]
- [AnyCommands][Command Types AnyCommands]
- [NonQueryCommand][Command Types NonQueryCommand]

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "INSERT INTO Table (FirstColumn, SecondColumn) VALUES (@Prop1, @Prop2);", "Parameters": [ {Prop1 = "FirstColumn4", Prop2 = "SecondColumn4"}, {Prop1 = "FirstColumn5", Prop2 = "SecondColumn5"}, {Prop1 = "FirstColumn6", Prop2 = "SecondColumn6"} ]}` | `($)Command` is a variable of type [NonQueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": null}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)Close Connection`, with value `true` | `($)Close Connection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [Dynamic][] |

#### Result

Inserting a new row into `Table` using a Parameterised NonQueryCommand results in the variable `($)Result` being updated to the following:

```json
3
```

The data source contains a `Table` with which will be updated to the following when the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |
| 4 | FirstColumn4 | SecondColumn4 |
| 5 | FirstColumn5 | SecondColumn5 |
| 6 | FirstColumn6 | SecondColumn6 |

***

### Executing a Scalar Command

This example will select the Maximum Id value from a connected SQLServer data source, saving the rows to the [Result][Result Property].

The following [Command Types][] can be used:

- [AnyCommand][Command Types AnyCommand]
- [AnyCommands][Command Types AnyCommands]
- [QueryCommand][Command Types QueryCommand]

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT Max(Id) FROM Table;", "Parameters": null}` | `($)Command` is a variable of type [AnyCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": null}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)Close Connection`, with value `true` | `($)Close Connection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [Dynamic][] |

#### Result

Selecting the Maximum Id value from `Table` using an AnyCommand results in the variable `($)Result` being updated to the following:

```json
[
    { "": 3},
]
```

***

### Executing Multiple Scalar Commands

This example will select the Maximum Id value as MaxId and the Minimum Id value as MinId from a connected SQLServer data source, saving the rows to the [Result][Result Property].

The following [Command Types][] can be used:

- [AnyCommand][Command Types AnyCommand]
- [AnyCommands][Command Types AnyCommands]
- [QueryCommand][Command Types QueryCommand]

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT Max(Id) AS MaxId, Min(ID) AS MinId FROM Table;", "Parameters": null}` | `($)Command` is a variable of type [AnyCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": null}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
| [Close Connection][Close Connection Property] | `($)Close Connection`, with value `true` | `($)Close Connection` is a variable of type [Boolean][] |
| [Result][Result Property] | `($)Result`, with no value | `($)Result` will be set to the type [Dynamic][] |

#### Result

Selecting the Maximum Id value as MaxId and the Minimum Id value as MinId from `Table` using an AnyCommand results in the variable `($)Result` being updated to the following:

```json
[
    { "MaxId": 3, "MinId": 1},
]
```

***

## Properties

### Command

The [Command][Command Property] executed on the connected data source. 

| | |
|--------------------|---------------------------|
| Data Type | [ICommand][] |
| Property Type | [Input][] |
| Default Value | `($)Command` with no value|

### Connection Details

The [Connection Details][Connection Details Property] object that includes all of the information required to connect to a data source.

| | |
|--------------------|---------------------------|
| Data Type | [ConnectionDetails][] |
| Property Type | [Input][] |
| Default Value | `($)ConnectionDetails` with no value|

### Close Connection

[Close Connection][Close Connection Property] shows whether the connection to the data source should be closed or kept open after the query executes, this defaults to `false` if left blank.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Default Value | `($)CloseConnection` with no value|

### Result

The object returned from the data source.

Depending on the type of [Command][Command Property], the data returned within the [Result][Result Property] will vary. Please see [Command Types][] for more information on what data will be returned by each type.

| | |
|--------------------|---------------------------|
| Data Type | [Dynamic][] |
| Property Type | [Output][] |
| Default Value | `($)Result` with no value|

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | |
| | Thrown when the command is null. |
| | Thrown when the commandText is null. |
| | Thrown when the connectionDetails is null. |
| | Thrown when the connectionString is null. |
| [PropertyEmptyException][] | |
| | Thrown when the commandText is empty. |
| | Thrown when the connectionString is empty. |
| [ArgumentException][] | Thrown when the connectionDetails' connectionType is not one of the specified ConnectionType types, e.g. (ConnectionType)100. |
| [InvalidConnectionStringException][] | Thrown when an invalid connection string has been supplied, e.g. The connection string contains an invalid argument "NotAnArgument = False". |
| | Thrown when a required connection string argument has not been supplied, e.g. The server requires encryption and the connection string contains "Encrypt=False". |
| [CommandException][] | |
| Runtime | |
| | Thrown when there are syntax errors in the given command. |
| | Thrown when the command is invalid for the table specified. |
| | Thrown when the command references a non-existent stored procedure. |
| | Thrown when parameters derives from Array or IEnumerable and a Select Statement is queried. |
| Connection | |
| | Thrown when the data source was not found or was not accessible. |
| | Thrown when a connection is successfully established but an error occurred during the login process. |
| | Thrown when an error occurs whilst trying to open a new connection. |
| Multiple Statements | Thrown when an AnyCommand contains multiple statements. |

## Remarks

### Command Types

The following Command Types can be provided:

#### AnyCommand

A command with a single statement will be executed. The [Result][] is of type [dynamic][], returning the result of the statement, any errors will not be picked up at compile time.

Each type of statement returns the following:

| Query Statement (Select and Execute) | |
|-|-|
| [List][]&lt;[Structure][]&gt; with a single item | Single item returned by the [AnyCommand][] |
| [List][]&lt;[Structure][]&gt; with multiple items | Many items returned by the [AnyCommand][] |
| `null` | No items returned by the [AnyCommand][] |

The result from a Query Statement can be cast to a List&lt;Structure&gt;

| Non Query Statement (Insert, Update, Delete, etc) | |
|-|-|
| 1 | 1 row affected by the [AnyCommand][] |
| n | Many rows affected by the [AnyCommand][] |
| 0 | No rows affected by the [AnyCommand][] |

The result from a Non Query Statement can be cast to a int (Any other Statement Type)

#### AnyCommands

A command with a single, or multiple statements that will be executed in order. The [Result][] is of type [List][]&lt;[dynamic][]&gt;, with the result of each statement being added to the list in order, any errors will not be picked up at compile time.

Each type of statement returns the following:

| Query Statement (Select and Execute) | |
|-|-|
| [List][]&lt;[Structure][]&gt; with a single item | Single item returned by the [AnyCommands][] |
| [List][]&lt;[Structure][]&gt; with multiple items | Many items returned by the [AnyCommands][] |
| `null` | No items returned by the [AnyCommands][] |

| Non Query Statement (Insert, Update, Delete, etc) | |
|-|-|
| 1 | 1 row affected by the [AnyCommands][] |
| n | Many rows affected by the [AnyCommands][] |
| 0 | No rows affected by the [AnyCommands][] |

#### QueryCommand

A command with a single, or multiple statements that will be run as a whole. The [Result][] is of type [List][]&lt;[Structure][]&gt;. If the command contains multiple statements, only the results of the first select statement will be returned.

Each type of statement returns the following:

| Query Statement (Select and Execute) | |
|-|-|
| [List][]&lt;[Structure][]&gt; with a single item | Single item returned by the [QueryCommand][] |
| [List][]&lt;[Structure][]&gt; with multiple items | Many items returned by the [QueryCommand][] |
| `null` | No items returned by the [QueryCommand][] |

| Non Query Statement (Insert, Update, Delete, etc) | |
|-|-|
| null | Non Query Statements do not return data when used in a [QueryCommand][] |

#### NonQueryCommand
A command with a single, or multiple statements that will be run as a whole. The [Result][] is of type [Int32][]. If the command contains multiple statements, each statement's result will be aggregated into a single value.

Each type of statement returns the following:

| Query Statement (Select and Execute) | |
|-|-|
| 1 | Query Statements do not return data when used in a [NonQueryCommand][] |

| Non Query Statement (Insert, Update, Delete, etc) | |
|-|-|
| 1 | 1 row affected by the [NonQueryCommand][] |
| n | Many rows affected by the [NonQueryCommand][] |
| 0 | No rows affected by the [NonQueryCommand][] |

### Scalar Commands

Scalar values are returned as Structures with an empty key, and value equal to the result of the scalar query. Please see the example above, [Executing a Scalar Command][].

Multiple Scalar values can be returned by the same statement if the as keyword is used to define each scalar result (e.g. "select Max(Age) as Age, select Min(Height) as Height from Table"), each scalar has the defined name as the key and its result as the value. Please see the example above, [Executing Multiple Scalar Commands][].

### Parameterised Commands

The parameter object is optional and only required for parameterised commands, e.g. "select * from Table where Name = @Param". Please see the example above, [Executing a Parameterised Command][].

Currently there is a limitation with the Execute Command block, output parameters cannot be written back to when used in a stored procedures.

### SqlException Error Codes

[List of all SqlException Error Codes](https://docs.microsoft.com/en-us/sql/relational-databases/errors-events/database-engine-events-and-errors?view=sql-server-ver15)

[Command Property]: {{< ref "#command" >}}
[Connection Details Property]: {{< ref "#connection-details" >}}
[Close Connection Property]: {{< ref "#close-connection" >}}
[Result Property]: {{< ref "#result" >}}

[Executing a Scalar Command]: {{< ref "#executing-a-scalar-command">}}
[Executing Multiple Scalar Commands]: {{< ref "#executing-multiple-scalar-commands">}}
[Executing a Parameterised Command]: {{< ref "#executing-a-parameterised-command">}}

[Command Types]: {{< ref "#command-types">}}
[Command Types AnyCommand]: {{< ref "#anycommand">}}
[Command Types AnyCommands]: {{< ref "#anycommands">}}
[Command Types QueryCommand]: {{< ref "#querycommand">}}
[Command Types NonQueryCommand]: {{< ref "#nonquerycommand">}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[ICommand]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
[ConnectionDetails]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
[Dynamic]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
