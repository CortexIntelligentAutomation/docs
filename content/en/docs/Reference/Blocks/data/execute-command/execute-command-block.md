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

An [QueryCommand][Command Types AnyCommand] is used throughout this example to select data from the data source, however both an [AnyCommand][Command Types AnyCommand] or [AnyCommands][Command Types AnyCommands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT * FROM Table;", "Parameters": null}` | `($)Command` is a variable of type [QueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
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

A [NonQueryCommand][Command Types NonQueryCommand] is used throughout this example to insert data into the data source, however both an [AnyCommand][Command Types AnyCommand] or [AnyCommands][Command Types AnyCommands] could also be used to the same effect.

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
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
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

An [AnyCommands][Command Types AnyCommands] is used throughout this example to both insert into and select data from the data source.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "Insert Into Table ("FirstColumn4", "SecondColumn4"); SELECT * FROM Table;", "Parameters": null}` | `($)Command` is a variable of type [AnyCommands][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
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

This example will insert a number of new rows using a parameterised statement into a connected SQLServer data source, saving the number of rows affected to the [Result][Result Property].

A [NonQueryCommand][Command Types NonQueryCommand] is used throughout this example to insert data into the data source, however both an [AnyCommand][Command Types AnyCommand] or [AnyCommands][Command Types AnyCommands] could also be used to the same effect.

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
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
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

A [QueryCommand][Command Types QueryCommand] is used throughout this example to select the Maximum Id value from the data source, however both an [AnyCommand][Command Types AnyCommand] or [AnyCommands][Command Types AnyCommands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT Max(Id) FROM Table;", "Parameters": null}` | `($)Command` is a variable of type [QueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
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

A [QueryCommand][Command Types QueryCommand] is used throughout this example to select the Maximum Id value as MaxId and the Minimum Id value as MinId from the data source, however both an [AnyCommand][Command Types AnyCommand] or [AnyCommands][Command Types AnyCommands] could also be used to the same effect.

The data source contains a `Table` with the following rows and columns before the command is executed:
| Id | FirstColumn | SecondColumn |
|----|-------------|--------------|
| 1 | FirstColumn1 | SecondColumn1 |
| 2 | FirstColumn2 | SecondColumn2 |
| 3 | FirstColumn3 | SecondColumn3 |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Command][Command Property] | `($)Command`, with value `{"CommandText": "SELECT Max(Id) AS MaxId, Min(ID) AS MinId FROM Table;", "Parameters": null}` | `($)Command` is a variable of type [QueryCommand][] |
| [Connection Details][Connection Details Property] | `($)ConnectionDetails`, with value `{"ConnectionType": ConnectionType.SQLServer, "ConnectionString": "Server=myServerAddress;Database=myDataBase;Trusted_Connection=True;"}` | `($)ConnectionDetails` is a variable of type [ConnectionDetails][] |
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

The [Command][Command Property] executed on the connected data source. There are multiple [Command Types][] that can be used, each with a different functionality:

- [AnyCommand][Command Types AnyCommand]: Parses a single statement provided in the commandText, determining how the statement should be executed against the data source. returning the rows retrieved from the data source
- [AnyCommands][Command Types AnyCommands] Parses a single or multiple statements provided in the commandText, determining how each statement should be executed against the data source, returning a list of responses for each statement in order.
- [QueryCommand][Command Types QueryCommand]: Executes the given commandText as a [Query Statement][Statement Types], returning the rows retrieved from the data source.
- [NonQueryCommand][Command Types NonQueryCommand]: Executes the given commandText as a [Non Query Statement][Statement Types], returning the number of rows affected from the data source.

| | |
|--------------------|---------------------------|
| Data Type | [ICommand][] |
| Property Type | [Input][] |
| Default Value | `($)Command` with no value|

### Connection Details

The [Connection Details][Connection Details Property] object that includes all of the information required to connect to a data source.

The [Connection Type][] shows a selection of supported data sources to pick from, please see [Working with Data Sources][] for more information.

A Connection String must be provided in order to connect to a data source. The Connection String is formatted differently depending on the type of data source, please see [Working with Data Sources][].

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

All Command Types are derived [ICommand][], the following can be provided each providing a slightly different functionality when used:

#### AnyCommand

Derived from [ICommand][] an [AnyCommand][] is a command with a single statement that will be executed. The [Result][Result Property] is of type [Dynamic][], returning the result of the statement, any errors will not be picked up at compile time.

The [AnyCommand][] will parse the statement provided, determining if it is a [Query][Statement Types] or [Non Query][Statement Types] Statement and executing the statement against the data source appropriately. It is more efficient to use a [QueryCommand][Command Types QueryCommand] or [NonQueryCommand][Command Types NonQueryCommand] as they do not have to parse the command text provided.

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

Derived from [ICommand][] an [AnyCommands][] is a command with a single, or multiple statements that will be executed in order. The [Result][Result Property] is of type [List][]&lt;[Dynamic][]&gt;, with the result of each statement being added to the list in order, any errors will not be picked up at compile time.

The [AnyCommands][] will parse each statement provided, determining if it is a [Query][Statement Types] or [Non Query][Statement Types] Statement and executing the statement against the data source appropriately, adding their result to the List in order. It is more efficient to use a [QueryCommand][Command Types QueryCommand] or [NonQueryCommand][Command Types NonQueryCommand] as they do not have to parse the command text provided.

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

Derived from [ICommand][] a NonQueryCommand is a command with a single, or multiple statements [Query Statements][Statement Types] that will be run as a whole. The [Result][Result Property] is of type [List][]&lt;[Structure][]&gt;. If the command contains multiple statements, only the results of the first select statement will be returned.

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

Derived from [ICommand][] a NonQueryCommand is a command with a single, or multiple [Non Query Statements][Statement Types] that will be run as a whole. The [Result][Result Property] is of type [Int32][]. If the command contains multiple statements, each statement's result will be aggregated into a single value.

Each type of statement returns the following:

| Query Statement (Select and Execute) | |
|-|-|
| 1 | Query Statements do not return data when used in a [NonQueryCommand][] |

| Non Query Statement (Insert, Update, Delete, etc) | |
|-|-|
| 1 | 1 row affected by the [NonQueryCommand][] |
| n | Many rows affected by the [NonQueryCommand][] |
| 0 | No rows affected by the [NonQueryCommand][] |

### Statement Types

There are two categories of statements Query and Non Query.

Query Statements are used to retrieve data from a data source, for example selecting all rows from a table in a database, Query Statements return the data selected by the Statement as a [List][]&lt;[Structure][]&gt; when used in an [AnyCommand][Command Types AnyCommand], an [AnyCommands][Command Types AnyCommands], or a [QueryCommand][Command Types NonQueryCommand].

Non Query Statements are used to manipulate the data within a data source, for example deleting all rows from a table in a database, Non Query Statements return the number of rows affected by the Statement as an [Int32][] when used in an [AnyCommand][Command Types AnyCommand], an [AnyCommands][Command Types AnyCommands], or a [NonQueryCommand][Command Types NonQueryCommand].

### Connection Strings

A Connection String must be provided in order to connect to a data source. The Connection String is formatted differently depending on the type of data source, please see [Working with Data Sources][] for more information.

Please see [Working with Data Sources][] for a list of supported data sources.

### SqlException Error Codes

If there is an issue with the [Command][Command Property] or [Connection Details][Connection Details Property] that cannot be picked up before a connection is established an SqlException can occur, a list of all error codes can be found here: [SqlException Error Codes][].

Any SqlException thrown by the block will be wrapped in a [CommandException][].

### Parameterised Commands

The parameter object is optional and only required for parameterised commands, e.g. "select * from Table where Name = @Param". Please see the example above, [Executing a Parameterised Command][]. Parameterised Commands help mitigate a data source connection from being susceptible to Sql Injection attacks, due the the parameters being added to the statement and sanitised by the data source before it is Executed, for this reason it is advised to use Parameterised Commands to pass variables into your statements.

[Query Statements][Statement Types] (e.g. Select and Execute) do not allow lists as a parameter. It does allow [Structures][Structure] and [Dictionaries][], which can have multiple parameters in them.

[Non Query Statements][Statement Types] (e.g. Insert, Update, Delete, etc) allow lists as a parameter, each item in the list will be executed as the parameter for the statement aggregating their results into a single value.

For both [Query][Statement Types] and [Non Query][Statement Types] Statements, an SqlException is thrown if a parameter is missing from the given object.

Currently there is a limitation with the Execute Command block, output parameters cannot be written back to when used in a stored procedures.

### Scalar Commands

Scalar values are returned as Structures with an empty key, and value equal to the result of the scalar query. Please see the example above, [Executing a Scalar Command][].

Multiple Scalar values can be returned by the same statement if the as keyword is used to define each scalar result (e.g. `"select Max(Age) as Age, select Min(Height) as Height from Table"`), each scalar has the defined name as the key and its result as the value. Please see the example above, [Executing Multiple Scalar Commands][].

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

[Statement Types]: {{< ref "#statement-types">}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
[InvalidConnectionStringException]: {{< url "Cortex.Reference.Exceptions.Data.InvalidConnectionStringException.MainDoc" >}}
[CommandException]: {{< url "Cortex.Reference.Exceptions.Data.CommandException.MainDoc" >}}

[ICommand]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}
[ConnectionDetails]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}
[Dynamic]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}

[List]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}
[Connection Type]: {{< url "Cortex.Reference.DataTypes.MostCommon.MainDoc" >}}

[AnyCommand]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
[AnyCommands]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
[QueryCommand]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}
[NonQueryCommand]: {{< url "Cortex.Reference.DataTypes.MostCommon.DateTimeOffset" >}}

[Working with Data Sources]: {{< url "Cortex.Reference.Concepts.WorkingWithDataSources.MainDoc" >}}
[Connection String Formats]: {{< url "ConnectionStrings.MainDoc" >}}
[SqlException Error Codes]: {{< url "MSDocs.SqlServer.ErrorCodes" >}}
