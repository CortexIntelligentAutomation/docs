---
title: "What is a Block"
linkTitle: "What is a Block"
description: "Information on what blocks do, and their characteristics."
weight: 10
---

# {{< param title >}}

## Summary

A block is a Cortex object that performs a function when the [flow][What-Is-Flow] is executed, either undertaking an action, e.g., setting a variable with a value, or branching the [flow execution][What-Is-Execution], based on a decision or condition, to a different set of logic.

Blocks are dragged from a palette, and placed on a [workspace][What-Is-Workspace], and connected together using directional connectors to form a sequence of actions and decisions to implement the logic of the [flow][What-Is-Flow].

## Block Properties

Every block has one or more [properties][Block-Properties]. These [properties][Block-Properties] define the details of the action being performed or condition to make a branching decision. For example, when using a block to set a variable to a value, the [block's properties][Block-Properties] would define which variable is being set and to what value.

For further information, see [Block Properties][Block-Properties]

## Block Connection Ports

Each block has one input connection port - the outputs of multiple blocks may be connected to the single input connection port.

The output ports of blocks depend on the block type. For Action type blocks, see [Action Type Blocks][Action-Type-Blocks] and for Decision type blocks, see [Decision Type Blocks][Decision-Type-Blocks].

## Block Types

Blocks typically fall into one of two categories:

- [Action blocks][Action-Type-Blocks]
- [Decision blocks][Decision-Type-Blocks]
- [Exception Handling Blocks][Exception-Handing-Blocks]

### Action Blocks

All action blocks have a single output connection port, which can only be connected to the input connection port of a single block. In addition, every action block also has a red exception connection port on its right edge; this exception connection port can only be connected to the input connection port of a [Handle Block Exception][Handle-Block-Exception] block.

For further information about handling exceptions raised by blocks, see [Block Exception Handling][Block-Exception-Handling].

### Decision Blocks

Decision blocks have multiple outputs, each of which may be connected to the input of a single block. This enables the [flow][What-Is-Flow] to branch to execute different logic dependent on the decision made.

### Exception Handling Blocks

The are many different types of [exception handling blocks][Handling-Exceptions], each with their own unique combination of input and output ports. For more information about exception handling blocks, see [Exceptions][Exceptions].

## Related Concepts

- [Flows][Flow]
- [Workspaces][What-Is-Workspace]
- [Block Properties][Block-Properties]
- [Block Exception Handling][Block-Exception-Handling]

## Related Blocks

- [All blocks][All-Blocks]

[Action-Type-Blocks]: {{< ref "#action-blocks" >}}
[Decision-Type-Blocks]: {{< ref "#decision-blocks" >}}
[Exception-Handing-Blocks]: {{< ref "#exception-handling-blocks" >}}

[All-Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Block-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockExceptionHandling.MainDoc" >}}
[Block-Handle-Block-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[Handle-Block-Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handling-Exceptions]: {{< url "Cortex.Reference.Blocks.Exceptions.MainDoc" >}}
[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[What-Is-Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Block-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
