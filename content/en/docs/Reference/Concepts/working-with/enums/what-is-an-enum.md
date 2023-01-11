---
title: "What is an Enum?"
linkTitle: "What is an Enum?"
description: "Information regarding what an Enum is."
weight: 1
---

# {{% param title %}}

<img src="/images/work-in-progress.jpg">

## Summary

TODO:

- Anatomy of an Enum
- Enum literal editor
- Display in studio variable details viewer
  - Default
  - Overridden types
  - Out of range ints cast (DayOfWeek)1000
- Casting - dayofweek<->Int and unable to cast string - use parse
  - Need to cast int to enum or enum to int if comparing
- Enum Types
  - DateTimeComponentType
  - SearchOptions
  - Etc.
- Flagged enums
  - Currently not possible to have combined values in the literal editor (is possible in expression)
- Enums names are not localised - e.g. DayOfWeek.Sunday cannot display Dimanche for french
- Links to microsoft docs
  - https://learn.microsoft.com/en-us/dotnet/api/system.enum
  - https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum
  - probably not:
    - https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/enums
    - https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/enum

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
