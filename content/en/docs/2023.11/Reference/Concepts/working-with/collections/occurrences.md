---
title: "Occurrences"
linkTitle: "Occurrences"
description: "Information related to working with Occurrences."
---

# {{% param title %}}

## Summary

TODO

- Summary
- What is an Occurrence?
- How are they accessed?
  - Positive or Negative int properties on blocks that operate on single items
- Difference between occurrence and indexes
- specified occurrence

## Positive Occurrences

TODO:

- Get First, Second, Third, Nth

## Negative Occurrences

TODO:

- Get Last, Second from Last, Third from Last, Nth from Last

## Remarks

### Occurrence Not Present

TODO:

Blocks will either throw an exception if the occurrence is not present (e.g. OccurrenceNotPresentException), or they will handle the occurrence not being present either by performing no operation or by returning a predetermined value.

For example:

- Get Index Of Item With Value (returns predetermined value)
- Remove Item With Value (no operation performed)
- Get Item With Key (throws OccurrenceNotPresentException)

### Known Limitations

None

## See Also

### Related Concepts

TODO

### Related Data Types

TODO

### Related Blocks

TODO

### External Documentation

TODO
