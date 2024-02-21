---
title: "FlowException"
linkTitle: "FlowException"
description: "The exception thrown by the Throw New Flow Exception block."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.FlowException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown by the [Throw New Flow Exception block][ThrowNewFlowException Block].

## Reasons

### Thrown by block

An instance of the [Throw New Flow Exception block][ThrowNewFlowException Block] has been executed in a flow.

#### Message Format

The format of the exception message is as follows:

```json
"<message>"
```

where:

* `<message>` is the user-defined message from the [Throw New Flow Exception block][ThrowNewFlowException Block] properties.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[ThrowNewFlowException Block]: {{<url path="Cortex.Reference.Blocks.Exceptions.ThrowException.ThrowNewFlowException.MainDoc">}}