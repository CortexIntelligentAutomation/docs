---
title: "Casing"
linkTitle: "Casing"
description: "Information regarding text casing."
---

# {{% param title %}}

{{< workinprogress >}}

## Summary

TODO:

- Best Practices
  - Comparing strings - do not lower or upper pick a relevant culture or ignore case

Links:

- https://learn.microsoft.com/en-us/dotnet/core/extensions/performing-culture-insensitive-string-operations
- https://learn.microsoft.com/en-us/dotnet/standard/base-types/changing-case#compare-strings-of-mixed-case

## Common types of text casing

There are many different types of text casing.

The table below lists some of the most common types of text casing:

| Name      | Example                    | Notes       |
|-----------|----------------------------|-------------|
| lowercase | `"this is lowercase"` | All letters in all words are lower cased. |
| UPPERCASE | `"THIS IS UPPERCASE"` | All letters in all words are capitalized. |
| Title Case | `"This Is Title Case"` | First letter in all words is capitalized, all other letters are lower cased; except for words that are entirely upper cased, such as acronyms, which remain upper cased; spaces and punctuation are preserved. |
| camelCase | `"thisIsCamelCase"` | First letter in all words (except the first) is capitalized, all other letters are lower cased, and all spaces and punctuation are removed. |
| PascalCase | `"ThisIsCamelCase"` | First letter in all words is capitalized, all other letters are lower cased, and all spaces and punctuation are removed. |

## Culture Info

Culture Info specifies the culture-specific casing rules used to determine how the case of text is changed.

The table below lists the most common supported culture info:

| Name     | Text&nbsp;Value | Description |
|----------|-----------------|-------------|
| Invariant&nbsp;Culture | CultureInfo.InvariantCulture | Used to compare text using culture-sensitive sort rules and the [Invariant Culture][]. Case of the texts is considered when comparing. |
| Current&nbsp;Culture | CultureInfo.CurrentCulture | Used to compare text using culture-sensitive sort rules and the [Current Culture][]. Case of the texts is considered when comparing. |

In addition to [Invariant][Invariant Culture] and [Current Culture][], there are two other types of culture that can be used:

- [Specific Cultures][]
- [Custom Cultures][]

For more information about culture info, please see [CultureInfo][].

### Invariant Culture

For Invariant Culture, the casing rules used to determine how the case of text is changed are not culture-sensitive.

TODO:

- Link to Working with Culture -> Invariant Culture
- When to use? If not sure what to choose?
- notes about invariant culture and a worked through example
- From https://learn.microsoft.com/en-us/dotnet/api/system.globalization.textinfo.toupper?view=net-6.0

If a security decision depends on a string comparison or a case-change operation, the application should use the InvariantCulture to ensure that the behavior is consistent regardless of the culture settings of the system. However, the invariant culture must be used only by processes that require culture-independent results, such as system services. Otherwise, it produces results that might be linguistically incorrect or culturally inappropriate.

### Current Culture

For Current Culture, the casing rules used to determine how the case of text is changed are culture-sensitive and based on the culture of the operating system the flow execution is running on.

TODO:

- Link to Working with Culture -> Current Culture
- When to use? If not sure what to choose?
- Best practices - all OSes in cluster should be installed with same OS culture and settings etc. - should also be time sync'd
- Notes about current culture and a worked through example

### Specific Cultures

TODO:

- Talk about how there are a number of specific cultures, each with their own casing rules
- When to use? If not sure what to choose?
- Link to Working with Culture -> Specific Cultures
- For a list of cultures that can be returned on Windows systems see https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c under The Language table (`Language tag` defines the code required to create the culture)

### Custom Cultures

TODO:

- Talk about how there can be custom cultures installed, each with their own casing rules
- When to use? If not sure what to choose?
- Link to Working with Culture -> Custom Cultures

## Remarks

### Known Limitations

TODO

## See Also

### Related Concepts

TODO

### Related Data Types

TODO

### Related Blocks

TODO:

- Convert to Uppercase
- etc

### External Documentation

TODO

[Current Culture]: {{< ref "#current-culture" >}}
[Invariant Culture]: {{< ref "#invariant-culture" >}}
[Specific Cultures]: {{< ref "#specific-cultures" >}}
[Custom Cultures]: {{< ref "#custom-cultures" >}}

[CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
