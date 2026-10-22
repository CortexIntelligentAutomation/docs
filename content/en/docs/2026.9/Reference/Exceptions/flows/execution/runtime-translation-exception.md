---
title: "RuntimeTranslationException"
linkTitle: "RuntimeTranslationException"
description: "The exception thrown when a block is found to have errors within its properties while executing a flow."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Execution.RuntimeTranslationException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a block is found to have errors within its properties while executing a flow.
## Reasons

### Block has errors during flow execution

A block was found to have errors within its properties during a flow execution. These errors would normally appear as a [Message][WhatIsAMessage], but were not caught when the flow execution was started. This can occur when debugging a flow and [setting the next block to execute][SetNextBlockToExecute] to a block that has errors within its properties, and has no path from the [Start Flow][Start Flow block] block.

#### Message Format

```json
"The block could not be executed because there are errors within its properties. Note that this was not caught when the flow was started either because there is no path from the start of the flow to this block, or the property values in the block."
```

#### How to fix

Ensure that the errors in the properties within the block which caused this exception to be thrown, as seen within the `FailedTranslationSummary` property of this exception, are fixed (e.g. ensure that all variables referenced in the block properties are declared and initialised as expected).

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[WhatIsAMessage]: {{<url path = "Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc">}}
[SetNextBlockToExecute]: {{<url path = "Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.SetNextBlockToExecute">}}
[Start Flow block]: {{<url path = "Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc">}}