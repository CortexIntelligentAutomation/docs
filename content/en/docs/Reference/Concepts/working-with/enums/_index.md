---
title: "Enums"
linkTitle: "Enums"
description: "Information related to working with enum data types such as DayOfWeek, DateTimeComponentType and SearchOptions."
---

TODO:

* Anatomy of an Enum
* Enum literal editor
* Display in studio variable viewer
  * Default
  * Overridden types
  * Out of range ints cast (DayOfWeek)1000
* Casting - dayofweek<->Int and unable to cast string - use parse
  * Need to cast int to enum or enum to int if comparing
* Enum Types
  * DateTimeComponentType
  * SearchOptions
  * Etc.
* Flagged enums
* Enums names are not localised - e.g. DayOfWeek.Sunday cannot display Dimanche for french
* Links to microsoft docs
  * https://docs.microsoft.com/en-us/dotnet/api/system.enum
  * https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum
  * probably not:
    * https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/enums
    * https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/enum