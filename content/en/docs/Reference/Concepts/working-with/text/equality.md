---
title: "Equality"
linkTitle: "Equality"
description: "Information regarding text equality."
---

# {{% param title %}}

<img src="/images/work-in-progress.jpg">

## Summary

TODO:

- Best Practices
  - Use Ordinal to remove ambiguity and increase performance
  - Comparing strings - do not lower or upper pick a relevant culture or ignore case

Links:

- https://docs.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings
- https://docs.microsoft.com/en-us/dotnet/standard/base-types/changing-case#compare-strings-of-mixed-case

## Comparison Types

Comparison Types specify the rules used to determine whether two pieces of text match.

The table below lists the supported comparison types:

| Name     | Text&nbsp;Value | Numeric&nbsp;Value | Description |
|----------|------------|---------------|-------------|
| [Ordinal][] | StringComparison.Ordinal | 4 | Used to compare text using ordinal sort rules. Case of the texts is considered when comparing. |
| [Ordinal Ignore Case][] | StringComparison.OrdinalIgnoreCase | 5 | Used to compare text using ordinal sort rules. Case of the texts is ignored when comparing. |
| [Invariant Culture][] | StringComparison.InvariantCulture | 2 | Used to compare text using culture-sensitive sort rules and the invariant culture. Case of the texts is considered when comparing. |
| [Invariant Culture Ignore Case][] | StringComparison.InvariantCultureIgnoreCase | 3 | Used to compare text using culture-sensitive sort rules and the invariant culture. Case of the texts is ignored when comparing. |
| [Current Culture][] | StringComparison.CurrentCulture | 0 | Used to compare text using culture-sensitive sort rules and the current culture. Case of the texts is considered when comparing. |
| [Current Culture Ignore Case][] | StringComparison.CurrentCultureIgnoreCase | 1 | Used to compare text using culture-sensitive sort rules and the current culture. Case of the texts is ignored when comparing. |

For more information about comparison types, please see [StringComparison][].

TODO: Consider moving sections below into the StringComparison Data Type documentation and removed from this page

### Ordinal

TODO:

- When to use? If not sure what to choose?
- Ordinal sort rules
- notes about ordinal and a worked through example

### Ordinal Ignore Case

TODO:

- When to use? If not sure what to choose?
- Link to Ordinal sort rules, only difference is that it doesn't consider casing when comparing characters
- notes about ordinal ignore case and a worked through example

### Invariant Culture

TODO:

- When to use? If not sure what to choose?
- Link to Culture -> Invariant Culture
- Invariant Culture rules
- notes about invariant culture and a worked through example

### Invariant Culture Ignore Case

TODO:

- When to use? If not sure what to choose?
- Link to Culture -> Invariant Culture
- Link to Invariant Culture sort rules, only difference is that it doesn't consider casing when comparing characters
- notes about invariant culture ignore case and a worked through example

### Current Culture

TODO:

- When to use? If not sure what to choose?
- Link to Culture -> Current Culture
- Current Culture rules
- notes about current culture and a worked through example

### Current Culture Ignore Case

TODO:

- When to use? If not sure what to choose?
- Link to Culture -> Current Culture
- Link to Current Culture sort rules, only difference is that it doesn't consider casing when comparing characters
- notes about current culture ignore case and a worked through example

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

[Current Culture]: {{< ref "#current-culture" >}}
[Current Culture Ignore Case]: {{< ref "#current-culture-ignore-case" >}}
[Invariant Culture]: {{< ref "#invariant-culture" >}}
[Invariant Culture Ignore Case]: {{< ref "#invariant-culture-ignore-case" >}}
[Ordinal]: {{< ref "#ordinal" >}}
[Ordinal Ignore Case]: {{< ref "#ordinal-ignore-case" >}}

[StringComparison]: {{< url "MSDocs.DotNet.Api.System.StringComparison" >}}
