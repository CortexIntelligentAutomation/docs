---
title: "What is a Message?"
linkTitle: "What is a Message?"
description: "Information regarding the anatomy of a message, when a message will occur, and using messages to navigate to issues within a flow."
weight: 1
---

# {{% param title %}}

## Summary

When [Starting an Execution in Development][] using the [Start an execution][] button, the [flow][] will be [validated][]; if there are issues with the flow, [messages][] explaining the issues will be displayed in the [Messages Grid][].

Some examples of issues that can be raised are:

- [Blocks][block] using undefined [variables][variable]
- [Blocks][block] using [variables][variable] with mismatched [data types][data type]
- [Input variables][] that have not been initialised

For a complete list see [Validation][] messages.

## Anatomy of a Message

{{< figure src="/images/messages-grid.PNG" >}}

Related messages are grouped by the component affected (e.g. A [block][], or the [Settings Editor][])

Each message row contains the following:

| Property | Notes |
|----------|-------|
| Location | Path to the specific part of the component that has caused the issue |
| Summary | Short description of the issue |
| Details | Further information about the issue. This may also contain help for resolving the issue |

## Navigating to the Location of an issue from a message

Double clicking on a message within the [Messages Grid][] will navigate the browser to the affected location.

## Remarks

### Known Limitations

#### It is not possible to navigate to a nested literal property from a message

It is not possible to navigate to a nested literal property from a message, clicking the message will cause the browser to navigate to the last [property][] of the top-level [literal editor][] that contains the issue.

In future this limitation may be removed.

#### It is not possible to navigate to the Settings Editor from a message

It is not possible to navigate to the [Settings Editor][] from a message, clicking the message will do nothing.

In future this limitation may be removed.

## See Also

### Related Concepts

- [Flows][]
- [Blocks][]
- [Variables][]
- [Data Types][]
- [Executions][]

### Related Blocks

- [All Blocks][]

### Related Data Types

- [All Data Types][]

### External Documentation

None

[messages]: {{< ref "#anatomy-of-a-message" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[literal editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Input variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}

[Data Types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}
[data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}

[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Starting an Execution in Development]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.MainDoc" >}}
[validated]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.ValidatingAFlow" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[All Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}

[Validation]: {{< url path="Cortex.Reference.Messages.Validation.MainDoc" >}}

[Start an execution]: {{< url path="Cortex.Guides.Studio.MainDisplayArea.StartAnExecution" >}}
[Messages Grid]: {{< url path="Cortex.Guides.Studio.SouthPanel.MessagesGrid" >}}
[Settings Editor]: {{< url path="Cortex.Guides.Studio.EastPanel.SettingsEditor" >}}
