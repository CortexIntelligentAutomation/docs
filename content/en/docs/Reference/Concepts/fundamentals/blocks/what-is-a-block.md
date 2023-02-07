---
title: "What is a Block?"
linkTitle: "What is a Block?"
description: "Information regarding the anatomy of a block, types of blocks and their appearance, connecting blocks, and block properties."
weight: 1
---

# {{% param title %}}

## Summary

A block is used to perform an action, or branch based on a condition within a [flow][].

Blocks are organised into palettes based on the type of object they operate on or the system they interact with (e.g. Blocks that operate on Lists can be found in the Lists palette). Blocks can be dragged from a palette on to a [workspace][], and connected to one another to create the logic of the [flow][].

## Anatomy of a Block

There are five types of block, each type has its own image, connection ports and properties:

- [Flow Control Blocks][]
- [Action Blocks][]
- [Decision Blocks][]
- [Exception Handling Blocks][]
- [Workspace Blocks][]

### Flow Control Blocks

Flow Control blocks are used to start or end a [flow][] or [workspace][].

#### Block Image

![Flow Control Blocks](/images/flow-control-blocks.svg)

- Flow Control blocks are square shaped
- Flow Control blocks are smaller than [Action Blocks][]
- Flow Control blocks have a pale blue background

#### Connection Ports

Flow Control Blocks that start a [flow][] or [workspace][] have the following connection ports:

- One output port located on the bottom of the block

An [execution][] moves to the input port of the block connected to the output port.

Flow Control Blocks that end a [flow][] or [workspace][] have the following connection ports:

- One input port located on the top of the block

An [execution][] passes through the input port, and ends the [flow][] or [workspace][] depending on the logic of the block.

### Action Blocks

Action blocks are used to perform an action within a [flow][]. They can operate on an object or interact with a system.

Exceptions thrown by Action blocks can be handled by connecting a [Handle Block Exception block][Handle Block Exception blocks] to the red output port.

#### Block Image

![Action Blocks](/images/action-blocks.svg)

- The icon of the Action block shows what object or system it interacts with
- The icon in the bottom right of the Action block provides further information into what type of action or interaction it will take
- Action blocks are square shaped
- Action blocks have a pale blue background

#### Connection Ports

Action blocks have the following connection ports:

- One input port located on the top of the block
- One output port located on the bottom of the block
- One red exception output port located on the right of the block

An [execution][] passes through the input port, executes the block, and if no [exception][] occurs, moves to the input port of the block connected to the output port; if an exception occurs the execution moves to the exception input port of the [exception handling block][Exception Handling Blocks] connected to the exception output port.

### Decision Blocks

Decision blocks are used to branch within a [flow][] based on a condition.

#### Block Image

![Decision Blocks](/images/decision-blocks.svg)

- The icon of the Decision block shows what object or system it interacts with
- Decision blocks are diamond shaped
- Decision blocks have a pale blue background

#### Connection Ports

Decision blocks have the following connection ports:

- One input port located on the top of the block
- One output port located on the right the block
- One output port located on the bottom of the block

An [execution][] passes through the input port, executes the block, and based on the result of the execution moves to the input port of the block connected to the correct output port.

### Exception Handling Blocks

Exception Handling blocks are used to handle exceptions thrown within a [flow][].

Exceptions can be handled at different levels within a [flow][]; at the block level, the workspace level, and the flow level. For more information see [Handling Exceptions][].

#### Block Image

![Exception Handling Blocks](/images/editable/exception-handling-blocks.png)

- Exception Handling blocks have a pink background

#### Connection Ports

[Handle Block Exception blocks][] have the following connection ports:

- One red exception input port located on the left of the block
- One red exception output port located on the right of the block if they can be [chained][]
- One output port located on the bottom of the block

An [execution][] passes through the exception input port, executes the block, and if the [exception][] can be handled, moves to the input port of the block connected to the output port; if an exception cannot be handled the execution moves to the exception input port of the [exception handling block][Exception Handling Blocks] connected to the exception output port, for more information see [Chaining Block Exception Handling Blocks][chained].

[Handle Workspace Exception blocks][] have the following connection ports:

- One output port located on the bottom of the block

[Handle Flow Exception blocks][] have no connection ports.

### Workspace Blocks

Workspace blocks are used to group logic and actions within a [flow][] in order to reduce the complexity and make the flow easier to maintain. For more information see [Workspaces][].

Unhandled exceptions thrown within a workspace can be handled by connecting a [Handle Block Exception block][Handle Block Exception blocks] to the red output port of the Workspace block.

#### Block Image

![Workspace Blocks](/images/workspace-blocks.svg)

- Workspace blocks are rectangle shaped
- Workspace blocks are larger than [Action Blocks][]
- Workspace blocks have a pale blue background

#### Connection Ports

Workspace Blocks have the following connection ports:

- One input port located on the top of the block
- One output port located on the bottom of the block
- One red exception output port located on the right of the block

An [execution][] passes through the input port and executes the workspace block, and if no unhandled [exception][] occurs, moves to the input port of the block connected to the output port; if an unhandled exception occurs the execution moves to the exception input port of the [exception handling block][Exception Handling Blocks] connected to the exception output port.

### Block Properties

Blocks are configured using [Block Properties][]. Properties pass data to the block which is then used to perform an action, or branch based on a condition within a [flow][].

There are three types of block properties:

- [Input][]
- [Output][]
- [InputOutput][]

Most blocks share [Common Properties][] such as a description for the block. Some blocks have [Advanced Properties][] that do not normally need to be configured but allow for more advanced scenarios.

For further information, see [Block Properties][].

### Block Connections

Block connections help determine the order blocks will be executed in a flow, an execution moves through the flow sequentially  

An execution moves from one connected block to another, depending on the logic of the block. Blocks can be connected to each other through the use of connection ports.

There are four types of connections ports

- Input Ports - act as the entry point of a block, output ports from one or more other blocks can be connected to an input port
- Output Ports - act as the exit point of a block, output ports can only be connected to an input port of one other block
- Exception Input Ports - act as the entry point of an exception handling block, exception output ports from one or more other blocks can be connected to an exception input port
- Exception Output Ports - act as the exit point of a block when an exception is thrown, exception output ports can only be connected to an exception input port of one exception handling block

## Exceptions within a Block

Exceptions thrown within the execution of a block can be handled by connecting a [Handle Block Exception block][Handle Block Exception blocks] to the red output port. If there is no [Handle Block Exception block][Handle Block Exception blocks] that can handle the exception then it will be passed to the workspace level to be handled.

For further information, see [Handling Exceptions within a Block][].

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

- [Flows][]
- [Workspaces][]
- [Block Properties][]
- [Executions][]
- [Exceptions][]

### Related Blocks

- [All Blocks][Blocks]

### External Documentation

None

[Flow Control Blocks]: {{< ref "#flow-control-blocks" >}}
[Action Blocks]: {{< ref "#action-blocks" >}}
[Decision Blocks]: {{< ref "#decision-blocks" >}}
[Exception Handling Blocks]: {{< ref "#exception-handling-blocks" >}}
[Workspace Blocks]: {{< ref "#workspace-blocks" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[exception]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[Handling Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[chained]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.ChainingExceptions" >}}

[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Block Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Advanced Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Common Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Handling Exceptions within a Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.HandlingExceptionsWithinABlock.MainDoc" >}}

[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Handle Flow Exception]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Handle Block Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleBlock.MainDoc" >}}
[Handle Flow Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleFlow.MainDoc" >}}
[Handle Workspace Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.HandleWorkspace.MainDoc" >}}
