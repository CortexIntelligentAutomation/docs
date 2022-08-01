---
title: "Common Properties"
linkTitle: "Common Properties"
description: "Information regarding properties that are common to all or most blocks."
weight: 200
---

# {{< param title >}}

## Summary

There are a number of properties that are common across all or most [blocks][All Blocks].

These properties include:

- [Description Property][]
- [Block Timeout Property][]

## Description Property

The Description property is available on all [blocks][All Blocks]. It defaults to the name of the block and can be used to describe the action or function the block is performing. Any text entered in the Description property is displayed next to the [block's][block] icon on the [workspace][].

TODO: Image of description property and the description shown on the [workspace][]

## Block Timeout Property

The Block Timeout property is an [advanced property][Advanced Properties] available on most [blocks][All Blocks]. It is used to set a duration of time (using a [TimePeriod][]) that the [block][] must complete its action within, otherwise a [BlockTimeoutException][] is raised.

The default value of `null`, or a [TimePeriod][] of `0` seconds, indicates that there is no timeout.

Negative [TimePeriod][] values will cause an [InvalidBlockTimeoutException][] to be raised when the block is executed.

TODO: Image of Set Item block with timeout (Set as literal and from seconds) (have label showing how to toggle advanced)

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

- [Workspaces][]
- [Blocks][]
- [Advanced Properties][]
- [Exceptions][]

### Related Blocks

- [All Blocks][]

### Related Data Types

- [String][]
- [TimePeriod][]

### Related Exceptions

- [BlockTimeoutException][]
- [InvalidBlockTimeoutException][]

### External Documentation

None

[Description Property]: {{< ref "#description-property" >}}
[Block Timeout Property]: {{< ref "#block-timeout-property" >}}

[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Advanced Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url "Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}

[BlockTimeoutException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.BlockTimeoutException.MainDoc" >}}
[InvalidBlockTimeoutException]: {{< url "Cortex.Reference.Exceptions.Flows.Blocks.InvalidBlockTimeoutException.MainDoc" >}}
