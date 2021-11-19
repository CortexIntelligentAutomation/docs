---
title: "Text Equality"
linkTitle: "Text Equality"
description: "This page describes the concept of Text Equality."
---

# {{< param title >}}

## Overview

TODO: Overview/summary

## Comparison Types

Comparison Types specify the rules used to determine whether two pieces of text match.

The table below lists the supported comparison types:

| Name     | Text&nbsp;Value | Numeric&nbsp;Value | Description |
|----------|------------|---------------|-------------|
| Current Culture | StringComparison.CurrentCulture | 0 | Used to compare text using culture-sensitive sort rules and the [current culture][]. Case of the texts is considered when comparing. |
| Current Culture Ignore Case | StringComparison.CurrentCultureIgnoreCase | 1 | Used to compare text using culture-sensitive sort rules and the [current culture][]. Case of the texts is ignored when comparing. |
| Invariant Culture | StringComparison.InvariantCulture | 2 | Used to compare text using culture-sensitive sort rules and the [invariant culture][]. Case of the texts is considered when comparing. |
| Invariant Culture Ignore Case | StringComparison.InvariantCultureIgnoreCase | 3 | Used to compare text using culture-sensitive sort rules and the [invariant culture][]. Case of the texts is ignored when comparing. |
| Ordinal | StringComparison.Ordinal | 4 | Used to compare text using [ordinal][] sort rules. Case of the texts is considered when comparing. |
| Ordinal Ignore Case | StringComparison.OrdinalIgnoreCase | 5 | Used to compare text using [ordinal][] sort rules. Case of the texts is ignored when comparing. |

For more information about comparison types, please see [StringComparison][].

### Current Culture

TODO: notes about current culture and a worked through example

### Invariant Culture

TODO: notes about invariant culture and a worked through example

### Ordinal

TODO: notes about ordinal and a worked through example
#### Ordinal Ignore Case

[Current Culture]: {{< ref "#current-culture" >}}
[Invariant Culture]: {{< ref "#invariant-culture" >}}
[Ordinal]: {{< ref "#ordinal" >}}

[StringComparison]: {{< url "MSDocs.DotNet.Api.System.StringComparison" >}}


TODO: https://docs.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings 

## Blocks that use Comparison Types

TODO:
