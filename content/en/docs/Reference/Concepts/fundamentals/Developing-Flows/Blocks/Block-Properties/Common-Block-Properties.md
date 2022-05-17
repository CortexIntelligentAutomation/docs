---
title: "Common Block Properties"
linkTitle: "Common Properties"
description: "Block Properties almost universally found across all blocks."
weight: 30
---

# {{< param title >}}

## Summary

The vast majority of [blocks][What-Is-Block] have [properties][Block-Properties] that are common across these blocks [blocks][What-Is-Block].

## Description Property

The **Description** property accepts [literal text][String-Literal] and is used to describe the action of the [block][What-Is-Block]; it does not have any effect on the function of the [block][What-Is-Block]. The [text][String-Literal] entered in the **Description** property is displayed adjacent to the [block][What-Is-Block] icon on the [workspace][What-Is-Workspace] canvas to provide a visual description on the [workspace][What-Is-Workspace] of the function being undertaken.

## Block Timeout Property

The **Block Timeout** property is advanced property that is normally [hidden][Hidden-Properties], which determines the duration of time that the [block][What-Is-Block] will wait to complete its action before raising a timeout [exception][Block-Exception-Handling].

A default value of `NULL`, or an explicit value of `0`, indicates that there is no timeout.

## Related Concepts

- [Blocks][What-Is-Block]
- [Literal Text][String-Literal]
- [Workspaces][Workspace]
- [Hidden Properties][Hidden-Properties]
- [Block Exception Handling][Block-Exception-Handling]

[Block-Exception-Handling]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Exception-Handling.MainDoc" >}}
[Hidden-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.Hidden-Properties.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.What-Is-A-Block.MainDoc" >}}
[What-Is-Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Workspaces.What-Is-A-Workspace.MainDoc" >}}
[Block-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.MainDoc" >}}
[Workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Workspaces.MainDoc" >}}
[String-Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.Literals-Expressions-Variables.String-Literal" >}}
