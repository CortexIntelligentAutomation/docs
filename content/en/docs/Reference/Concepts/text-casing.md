---
title: "Text Casing"
linkTitle: "Text Casing"
description: "This page describes the concept of Text Casing."
---

# {{% param title %}}

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
| Current&nbsp;Culture | CultureInfo.CurrentCulture | Used to compare text using culture-sensitive sort rules and the [current culture][]. Case of the texts is considered when comparing. |
| Invariant&nbsp;Culture | CultureInfo.InvariantCulture | Used to compare text using culture-sensitive sort rules and the [invariant culture][]. Case of the texts is considered when comparing. |

TODO: See XYZ for a full list - link to microsoft full list

For more information about culture info, please see [CultureInfo].

TODO: Probably should link to fundamentals->culture

TODO: When to use? If not sure what to choose?

### Current Culture

For Current Culture, the casing rules used to determine how the case of text is changed are culture-sensitive and based on the culture that the flow execution is currently running as. The Current Culture will be the culture of the operating system the flow execution is running on.

TODO: Best practices - all OSes in cluster should be installed with same OS culture and settings etc. - should also be time sync'd

TODO: notes about current culture and a worked through example

### Invariant Culture

For Invariant Culture, the casing rules used to determine how the case of text is changed are not culture-sensitive.

TODO: notes about invariant culture and a worked through example

[Current Culture]: {{< ref "#current-culture" >}}
[Invariant Culture]: {{< ref "#invariant-culture" >}}

[CultureInfo]: {{< url "MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}


TODO: From https://docs.microsoft.com/en-us/dotnet/api/system.globalization.textinfo.toupper?view=net-6.0

If a security decision depends on a string comparison or a case-change operation, the application should use the InvariantCulture to ensure that the behavior is consistent regardless of the culture settings of the system. However, the invariant culture must be used only by processes that require culture-independent results, such as system services. Otherwise, it produces results that might be linguistically incorrect or culturally inappropriate.

For more information on cultures, see CultureInfo.
