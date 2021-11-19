---
title: "Text Casing"
linkTitle: "Text Casing"
description: "This page describes the concept of Text Casing."
---

# {{< param title >}}

## Overview

TODO: Overview/summary

## Culture Info

Culture Info specifies the culture-specific casing rules used to determine how the case of text is changed.

The table below lists the supported culture info:

TODO: Full list

| Name     | Text&nbsp;Value | Description |
|----------|-----------------|-------------|
| Current&nbsp;Culture | CultureInfo.CurrentCulture | Used to compare text using culture-sensitive sort rules and the [current culture][]. Case of the texts is considered when comparing. |
| Invariant&nbsp;Culture | CultureInfo.InvariantCulture | Used to compare text using culture-sensitive sort rules and the [invariant culture][]. Case of the texts is considered when comparing. |

For more information about culture info, please see [CultureInfo].

### Current Culture

TODO: notes about current culture and a worked through example

### Invariant Culture

TODO: notes about invariant culture and a worked through example

[Current Culture]: {{< ref "#current-culture" >}}
[Invariant Culture]: {{< ref "#invariant-culture" >}}

[CultureInfo]: {{< url "MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}


TODO: Working with Text - https://docs.microsoft.com/en-us/dotnet/standard/base-types/basic-string-operations    

TODO: Working with Numbers - https://docs.microsoft.com/en-us/dotnet/standard/base-types/parsing-numeric

TODO: WOrking with Files and Folders:

* https://docs.microsoft.com/en-us/dotnet/standard/io/
* https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats
* https://docs.microsoft.com/en-us/dotnet/standard/io/handling-io-errors
* https://docs.microsoft.com/en-us/dotnet/standard/io/common-i-o-tasks

TODO: Security https://docs.microsoft.com/en-us/dotnet/standard/security/