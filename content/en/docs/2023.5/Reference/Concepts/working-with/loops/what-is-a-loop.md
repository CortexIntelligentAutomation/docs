---
title: "What is a Loop?"
linkTitle: "What is a Loop?"
description: "Information regarding what a loop is."
weight: 1
---

# {{% param title %}}

{{< workinprogress >}}

## Summary

TODO:

- Introduce concept of loop
  - Why are they used
- Types of Loops (pros and cons)
  - For loop
    - Can move forwards or backwards
    - Can move by single or multiple increments
    - Can modify a collection while iterating over it
    - Have to manually manage the bounds of the loop
    - Index can be adjusted to break a loop
    - Decision blocks can be used to break a loop
  - For each
    - Cannot modify the collection during a for each loop (use a for loop if the collection needs to be modified during the loop)
    - Decision blocks can be used to break a loop
  - While
    - No blocks, can be done using decision blocks looping back into the flow (order of decision block determines while or do while loop)
    - Condition can be adjusted to break a loop early
    - Decision blocks can be used to break a loop early
  - Do while
    - No blocks, can be done using decision blocks looping back into the flow (order of decision block determines while or do while loop)
    - Condition can be adjusted to break a loop early
    - Decision blocks can be used to break a loop early
- Nested loops
  - Why they are used
  - How nested loops affect performance
- Infinite loops
  - Why they are bad, how to avoid
  - for loop block protects against infinite loops
  - for each loop block cannot have infinite loops as the collection cannot be modified
  - while/ do while does not have any protection against infinite loops (must be managed within the flow)

Links:

- https://kodify.net/csharp/loop/overview-loops/#:~:text=%20Overview%3A%20the%20four%20different%20loops%20of%20the,code%20for%20as%20long%20as%20some...%20More%20

## Remarks

### Known Limitations

TODO

## See Also

### Related Concepts

TODO

### Related Data Types

TODO

### Related Blocks

TODO

### External Documentation

TODO
