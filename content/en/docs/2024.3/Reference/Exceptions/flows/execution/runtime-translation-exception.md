---
title: "RuntimeTranslationException"
linkTitle: "RuntimeTranslationException"
description: "The exception thrown when a block is found to have errors during the flow execution."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Execution.RuntimeTranslationException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a block is found to have errors during the flow execution.

## Reasons

### Block has errors during flow execution

A block was found to have errors within its properties during a flow execution.

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
