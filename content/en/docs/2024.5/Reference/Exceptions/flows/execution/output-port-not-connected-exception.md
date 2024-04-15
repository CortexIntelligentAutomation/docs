---
title: "OutputPortNotConnectedException"
linkTitle: "OutputPortNotConnectedException"
description: "The exception thrown when an execution tries to go through an output port which is not connected."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Execution.OutputPortNotConnectedException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an execution tries to go through an [output port][Block Connections] which is not connected.

## Reasons

### Output port not connected

The [output port][Block Connections] of a block in a flow is not connected to another block.

#### Message Format

The format of the message is as follows:

```json
"Block output port isn't connected."
```

#### How to fix

Ensure that the block that threw this exception has its output port connected to another block; see [Block Connections][] for more information.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Block Connections]: {{<url path = "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.BlockConnections">}}