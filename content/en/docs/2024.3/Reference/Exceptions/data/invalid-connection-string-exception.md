---
title: "InvalidConnectionStringException"
linkTitle: "InvalidConnectionStringException"
description: "Exception thrown when an invalid connection string is used."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Data.InvalidConnectionStringException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

Exception thrown when an invalid connection string is used.

## Reasons

### Null connection string has been supplied

The connection string provided is `null`.

#### Message Format

The format of the [Message][] is as follows:

```json
"The connection string is null; it must be provided with a non-null value.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the connection string provided is not `null`.

### Empty connection string has been supplied

The connection string provided is empty (i.e.`""`).

#### Message Format

The format of the [Message][] is as follows:

```json
"The connection string is empty; it must be provided a value.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that a non-empty connection string is provided.

### Invalid connection string has been supplied

The connection string provided was invalid and failed

#### Message Format

The format of the [Message][] is as follows:

```json
"The connection string was invalid and failed with error message: <inner-exception-message>.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<inner-exception-message>` is the message of the inner exception caused by the invalid connection string being used.

#### How to fix

Ensure that a valid connection string is provided.

## Properties

TODO: Update with actual properties

### Exception Type

The type of the exception (i.e. `InvalidConnectionStringException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

TODO: Include actual related data types.

* [String][]
* [TimePeriod][]

### Related Concepts

TODO: Include actual related concepts

* [Blocks][]
* [Block Properties][]
* [Exceptions][]

### Related Blocks

TODO: Get list of actually related blocks.

### External Documentation

TODO: Include external documentation if any, otherwise None.
None

[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}

[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}

[Start Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.StartWorkspace.StartWorkspace.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}

[Message]: {{< ref "#message" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
