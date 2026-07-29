---
title: "What is a Loop?"
linkTitle: "What is a Loop?"
description: "Overview of loops in CORTEX, including for and for each blocks, while and do-while patterns with decision blocks, nested loops, and infinite-loop protection."
weight: 1
---

# {{% param title %}}

## Summary

A **loop** repeats a set of blocks until a stopping condition is met. In {{% ctx %}}, loops are used to process each item in a [collection][], run logic a fixed number of times, or keep running until a condition becomes false — without duplicating the same blocks on the canvas.

{{% ctx %}} provides two dedicated loop blocks — [For Loop][] and [For Each Loop][] — that expose a right port (blue loop icon) for the body of the loop and a bottom port (green tick) when looping finishes. Condition-driven loops equivalent to C# `while` and `do`/`while` are built with [Decision][Decision Blocks] blocks and links that return into earlier steps of the flow.

These patterns mirror the four C# iteration statements (`for`, `foreach`, `while`, and `do`): see [Overview: the four different loops of the C# programming language][Kodify What is a loop] and the [C# language documentation][MS CSharp Main].

| Loop type | How it is implemented | Typical use | Bounded automatically? |
| --- | --- | --- | --- |
| [For][For Loop] | [For Loop][] block | Known range of [indexes][]; step size or direction matters | Yes — invalid ranges throw [InfiniteLoopException][] |
| [For each][For Each Loop] | [For Each Loop][] block | Every item in a [collection][] | Yes — iteration count follows the collection size |
| [While][While and do while] | [Decision][Decision Blocks] blocks + flow links | Repeat while a condition is true (may run zero times) | No — you must ensure the condition eventually fails |
| [Do while][While and do while] | [Decision][Decision Blocks] blocks + flow links | Run the body at least once, then continue while a condition is true | No — you must ensure the condition eventually fails |

## Types of Loops

### For Loop

The [For Loop][] block repeats its body based on a [Start Index][], [End Index][], and [Increment][]. [Start Index][] and [End Index][] are inclusive. [Current Index][] is set to [Start Index][] on the first iteration and then changed by [Increment][] on each subsequent iteration. While looping continues, the flow exits via the block's right port (blue loop icon); when finished, it exits via the bottom port (green tick) and [Current Index][] is reset to `0`.

Compared with the other loop types:

* **Forward or backward** — Use a positive [Increment][] when [Start Index][] is less than or equal to [End Index][], and a negative [Increment][] when looping from a higher start to a lower end.
* **Step size** — [Increment][] can be `1`, `-1`, or any other non-zero step (for example `5` or `-5`).
* **Index control** — You manage the start, end, and step yourself. You can also change [Current Index][] inside the loop body to skip iterations or end the loop early (for example by moving the index past the end of the range).
* **Collection changes** — Because the loop is driven by indexes rather than an enumerator, you can change a [collection][] while iterating over it by index (prefer this when items must be added or removed during the loop).
* **Early exit** — Use a [Decision][Decision Blocks] block inside the loop body to route the execution out of the loop path when a condition is met.

If [Increment][] is `0`, or its sign cannot reach [End Index][] from [Start Index][], the block throws [InfiniteLoopException][] the first time it runs. See [InfiniteLoopException][] for [error codes][InfiniteLoopErrorCode] and how to fix them.

[Current Index][] must already hold an [Int32][] value before the block runs; otherwise [InvalidPropertyValueException][] is thrown. See the [For Loop][] known limitations.

### For Each Loop

The [For Each Loop][] block enumerates every item in a [Collection][collection] ([List][], [Dictionary][], [Structure][], or any [IEnumerable][]). On each iteration, [Current Iteration][] is a [Structure][] with `"Index"` (zero-based) and `"Value"` (the item; for dictionaries and structures, `"Value"` is itself a key/value pair). The flow exits via the right port while items remain, then via the bottom port when finished; [Current Iteration][] is then cleared.

Compared with the other loop types:

* **No manual bounds** — You do not set start, end, or increment; the number of iterations matches the number of items.
* **Empty collections** — If [Collection][collection] is empty, the body does not run.
* **Index is restored** — If you change `"Index"` on [Current Iteration][] during an iteration, it is set back before the next iteration, so you cannot end the loop early by editing the index.
* **Do not modify the collection** — Do not add, remove, or replace items in the [collection][] while a for each loop is running over it. If the collection must change during iteration, use a [For Loop][] over indexes instead (the same guidance applies to C# `foreach`).
* **Early exit** — Use a [Decision][Decision Blocks] block in the loop body to leave the loop path when needed.

If [Collection][collection] is `null`, the block throws [PropertyNullException][].

### While and do while

{{% ctx %}} has no dedicated while or do-while blocks. Build these patterns with [Decision][Decision Blocks] blocks (for example [If True Exit Right][] or [If True Exit Bottom][]) and links that return to earlier blocks:

* **While** — Evaluate the condition **before** the body. If the condition is false on the first check, the body never runs (zero or more iterations), matching C# `while`.
* **Do while** — Run the body **first**, then evaluate the condition and link back only when it is still true (one or more iterations), matching C# `do`.

Which pattern you get depends on where the decision sits relative to the repeated blocks. You can change the condition (or route with another decision) to stop early. Unlike [For Loop][], there is no built-in protection against a condition that never becomes false — see [Infinite loops][].

## Nested Loops

A **nested loop** is a loop whose body contains another loop. Use nesting when each iteration of an outer loop must run an inner loop — for example pairing every item in one [list][List] with every item in another, or walking rows and columns of structured data.

Nesting multiplies work: if the outer loop runs *m* times and the inner loop runs *n* times per outer iteration, the inner body runs roughly *m* × *n* times. Deep nesting or large collections can slow [flow executions][] significantly; keep nesting shallow when possible, or filter collections before looping.

You can nest [For Loop][] and [For Each Loop][] blocks with each other, and nest either inside while/do-while patterns built with [Decision][Decision Blocks] blocks.

## Infinite Loops

An **infinite loop** repeats without ever satisfying its stop condition. That can hang a [flow execution][], consume CPU, and block other work. Avoid them by ensuring every loop has a reachable exit.

| Pattern | Infinite-loop behaviour |
| --- | --- |
| [For Loop][] | Protected — mismatched or zero [Increment][] throws [InfiniteLoopException][] before unbounded spinning |
| [For Each Loop][] | Bounded by the [collection][] size. Changing `"Index"` does not extend the loop; do not grow the collection during iteration |
| While / do while | **Not** protected — you must update variables so the decision condition eventually fails, or provide another exit path |

## Remarks

### Choosing a loop type

| Goal | Prefer |
| --- | --- |
| Fixed numeric range, custom step, or reverse order | [For Loop][] |
| Process every item in a [collection][] without changing it | [For Each Loop][] |
| Change a [collection][] while iterating | [For Loop][] over [indexes][] |
| Repeat until an external or calculated condition flips | While or do while with [Decision][Decision Blocks] blocks |
| Guarantee the body runs at least once | Do while arrangement of decision after the body |

### Known Limitations

* [For Loop][] — The variable used for [Current Index][] must have an [Int32][] value assigned before the block executes.
* [For Each Loop][] — Modifications to [Current Iteration][] `"Index"` are discarded before the next iteration.
* While and do while — There are no dedicated blocks and no automatic infinite-loop detection; you must design a terminating condition in the flow.

## See Also

### Related Concepts

* [What is a Collection?][]
* [Indexes][indexes]
* [Items][]
* [What is a Flow?][]
* [What is an Exception?][]

### Related Data Types

* [Int32][]
* [IEnumerable][]
* [List][]
* [Dictionary][]
* [Structure][]
* [InfiniteLoopErrorCode][]

### Related Blocks

* [For Loop][]
* [For Each Loop][]
* [Decision][Decision Blocks] blocks (for example [If True Exit Right][], [If True Exit Bottom][])

### Related Exceptions

* [InfiniteLoopException][]
* [InvalidPropertyValueException][]
* [PropertyNullException][]

### External Documentation

* [Overview: the four different loops of the C# programming language][Kodify What is a loop]
* [C# documentation][MS CSharp Main]

[Infinite loops]: {{< ref "#infinite-loops" >}}
[While and do while]: {{< ref "#while-and-do-while" >}}

[For Loop]: {{< url path="Cortex.Reference.Blocks.Loops.For.ForLoop.MainDoc" >}}
[For Each Loop]: {{< ref "../../../Blocks/loops/for-each/for-each-loop-block.md" >}}
[Decision Blocks]: {{< url path="Cortex.Reference.Blocks.Decisions.MainDoc" >}}
[If True Exit Right]: {{< ref "../../../Blocks/decisions/if/if-true-exit-right-block.md" >}}
[If True Exit Bottom]: {{< ref "../../../Blocks/decisions/if/if-true-exit-bottom-block.md" >}}

[Start Index]: {{< ref "../../../Blocks/loops/for/for-loop-block.md#start-index" >}}
[End Index]: {{< ref "../../../Blocks/loops/for/for-loop-block.md#end-index" >}}
[Increment]: {{< ref "../../../Blocks/loops/for/for-loop-block.md#increment" >}}
[Current Index]: {{< ref "../../../Blocks/loops/for/for-loop-block.md#current-index" >}}
[collection]: {{< ref "../../../Blocks/loops/for-each/for-each-loop-block.md#collection" >}}
[Current Iteration]: {{< ref "../../../Blocks/loops/for-each/for-each-loop-block.md#current-iteration" >}}

[InfiniteLoopException]: {{< url path="Cortex.Reference.Exceptions.Loops.InfiniteLoopException.MainDoc" >}}
[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[InfiniteLoopErrorCode]: {{< url path="Cortex.Reference.DataTypes.Loops.InfiniteLoopErrorCode.MainDoc" >}}

[What is a Collection?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[flow executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[IEnumerable]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Kodify What is a loop]: {{< url path="Kodify.WhatIsALoop" >}}
[MS CSharp Main]: {{< url path="MSDocs.CSharp.MainDoc" >}}
