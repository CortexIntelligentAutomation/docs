---
title: "What is an Execution"
linkTitle: "What is an Execution"
description: "What is a flow execution."
weight: 10
---

# {{< param title >}}

## Summary

A [flow][What-Is-Flow] execution is a single, self-contained process that executes the logic associated with a Cortex [Flow][What-Is-Flow].

### Execution State

There may be several, simultaneous executions of the same [flow][What-Is-Flow]; however, each [flow][What-Is-Flow] execution maintains its own state, e.g., values of variables, independent of any other [flow][What-Is-Flow] executions.

When a [flow][What-Is-Flow] execution terminates, any run-time variables and values associated with that execution are destroyed.

## Related Concepts

* [Flow][Flow]

[Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[What-Is-Flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
