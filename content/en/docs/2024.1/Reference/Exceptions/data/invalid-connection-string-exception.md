---
title: "InvalidConnectionStringException"
linkTitle: "InvalidConnectionStringException"
description: "The exception thrown when an invalid connection string is used."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Data.InvalidConnectionStringException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an invalid connection string is used.

## Reasons

### Invalid connection string has been supplied

The connection string provided was invalid.

#### Message Format

The format of the message is as follows:

```json
"The connection string was invalid and failed with error message: <inner-exception-message>.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<inner-exception-message>` is the message of the inner exception caused by the invalid connection string being used.

#### How to fix

Ensure that a valid connection string is provided for the data source being connected to; see [connectionstrings.com][ConnectionStrings] for valid examples.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

* [connectionstrings.com][ConnectionStrings]

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

[ConnectionStrings]: {{<url path="ConnectionStrings.MainDoc">}}