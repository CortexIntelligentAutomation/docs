---
title: "CultureInfo"
linkTitle: "CultureInfo"
description: "Used to represent information about a specific culture, including the names for the culture, the writing system, the calendar used, the sort order of strings, and formatting for dates and numbers."
weight: 1
---

# {{% param title %}}

<p class="namespace">(System.Globalization.CultureInfo)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Summary

The `CultureInfo` data type is used to represent information about a specific culture, including the names for the culture, the writing system, the calendar used, the sort order of strings, and formatting for dates and numbers.

| | |
|-|-|
| **Category:**          | Text                                                          |
| **Name:**              | `CultureInfo`                                                        |
| **Full Name:**         | `System.Globalization.CultureInfo`                                                 |
| **Alias:**             | N/A |
| **Description:**       | Used to represent information about a specific culture. |
| **Default Value:**     | `null`                                           |
| **Can be used as:**    | `CultureInfo`, `object`, `dynamic`                                          |
| **Can be cast to:**    | N/A |

## Remarks

### Types of CultureInfo

There are four types of CultureInfo:

- [Invariant Culture][]
- [Current Culture][]
- [Neutral Culture][]
- [Specific Culture][]

#### Invariant Culture

The invariant culture is culture-insensitive. It is associated with the English language but not with any country/region, as such the casing conventions, the sort order of strings, and formatting for dates and numbers will remain consistent across systems. This can be useful when persisting data in a culture-independent format.

There are two ways to create an invariant culture:

- `CultureInfo.InvariantCulture`
- `new CultureInfo("")`

#### Current Culture

The current culture is culture-sensitive. It is used to represent the current culture of the server running {{% ctx %}}, and as such the casing conventions, the sort order of strings, and formatting for dates and numbers may change across systems. This can be useful for providing date time in the correct format for a user.

There is one way to get the current culture:

- `CultureInfo.CurrentCulture`

#### Neutral Culture

The neutral culture is culture-sensitive. It is associated with a language, but not with any country/region.

Neutral Culture can be created by specifying the language but not the country (e.g. `new CultureInfo("en")` for english with no associated country).

#### Specific Culture

The culture can be explicitly specified to use a particular format (e.g. `CultureInfo("en-GB")` for the standard UK english culture).
If the resources for a specific culture are not available in the operating system, the resources for the associated neutral culture are used.

For a comprehensive list of cultures please see [Supported Culture Codes][].

### Invalid CultureInfo

If an invalid CultureInfo (e.g. `new CultureInfo(“enaa”)`), is provided to a block property that requires an [IFormatProvider][] data type, (i.e. [Format Text With Values][FormatTextWithValues] block) a [CultureInfoNotFoundException][] will be thrown.

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `CultureInfo`.
- The Literal Editor is available for [Input][] properties where the data type is `CultureInfo`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `CultureInfo`.

### Known Limitations

None

## See Also

### Related Data Types

- [IFormatProvider][]

### Related Concepts

- [Working with Text][]

### External Documentation

- [Supported Culture Codes][]
- [System.Globalization.CultureInfo][]
- [System.Globalization.CultureInfoNotFoundException][CultureInfoNotFoundException]

[CultureInfoNotFoundException]: {{< url path = "MSDocs.CSharp.CultureInfoNotFoundException">}}
[Supported Culture Codes]: {{< url path = "MSDocs.CSharp.SupportedCultureCodes">}}

[Invariant Culture]: {{< ref "#invariant-culture" >}}
[Current Culture]: {{< ref "#current-culture" >}}
[Specific Culture]: {{< ref "#specific-culture" >}}
[Neutral Culture]: {{< ref "#neutral-culture" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}

[System.Globalization.CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
[FormatTextWithValues]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc" >}}
[IFormatProvider]: {{< url path="Cortex.Reference.DataTypes.Text.IFormatProvider.MainDoc" >}}
