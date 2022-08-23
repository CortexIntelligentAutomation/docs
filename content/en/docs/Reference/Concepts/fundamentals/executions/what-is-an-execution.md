---
title: "What is an Execution?"
linkTitle: "What is an Execution?"
description: "Information regarding the anatomy of an execution."
weight: 1
---

# {{< param title >}}

## Summary

An execution represents a running instance of a [flow][], the execution moves through the flow sequentially executing each [block][] saving any outputs to [variables][variable]. A flow can have one or more executions running at any time, each with their own variables.

- See [Executions in Development][] for mor information regarding working with executions in [Cortex Studio][].
- See [Executions in Production][] for more information regarding running executions in the [Cortex Flow Execution Service][].

## Anatomy of an Execution

TODO:

- Example image of execution in the executions grid
  - Image including both grid and a token, single block flow
- Finish Table
- After Table, add line about multiple executions (when run from run flow block), link to executions grid e.g. child execution tokens or alternative name

| Property | Notes | Example |
|----------|-------|---------|
| Status Icon | The Icon representing the current Status of the execution | TODO: add list of statuses link |
| Started At | The date and time that the execution was started | '19 Aug 2022 12:00:00' |
| Updated At || '19 Aug 2022 12:00:01' |
| Status || TODO: add list of statuses link |
| Block Type |||
| Block Description |||
| Workspace Name |||
| Flow Name |||

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

- [Flows][]
- [Blocks][]
- [Variables][]

### Related Data Types

- [All Data Types][]

### Related Blocks

- [All Blocks][]

### External Documentation

None

[Executions in Development]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.MainDoc" >}}
[Executions in Production]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInProduction.MainDoc" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}

[All Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}

[Cortex Studio]: {{< url "Cortex.Guides.Studio.MainDoc" >}}
