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

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `CultureInfo`.
- The Literal Editor is available for [Input][] properties where the data type is `CultureInfo`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `CultureInfo`.

### Types of CultureInfo

There are 3 types of CultureInfo:

- [InvariantCulture][]
- [CurrentCulture][]
- [NeutralCulture][]
- [SpecificCulture][]

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

Neutral Culture can be created by specifying the language but not the country, e.g. new CultureInfo("en") for english with no associated country.

#### Specific Culture

The culture can be explicitly specified to use a particular format, e.g. CultureInfo("en-GB") for the standard UK english culture.
If the resources for a specific culture are not available in the operating system, the resources for the associated neutral culture are used.

For a comprehensive list of cultures please see [Supported Culture Codes][]

### Known Limitations

#### Invalid CultureInfo provided

If an invalid CultureInfo is provided, a [CultureInfoNotFoundException][] will be thrown

## See Also

### Related Data Types

None

### Related Concepts

- [Working with Text][]

### External Documentation

- [CultureInfoNotFoundException][]
- [Supported Culture Codes][]
- [System.Globalization.CultureInfo][]

TODO:

- If the culture identifier is empty e.g (new CultureInfo("")), cultureInfo is set to InvariantCulture.
- If the culture does not exist, the operating system will create a custom culture using the culture identifier.
- As well as the default InvariantCulture you can also use the culture of the system (CultureInfo.CurrentCulture) or provide a new culture info (new CultureInfo("en-GB")).
- Note about formatProvider and CultureInfo: If an invalid CultureInfo is provided (e.g. new CultureInfo("enaa")), a CultureNotFoundException will be thrown.
- Talk about CultureInfo.InvariantCulture
- Talk about CultureInfo.CurrentCulture

[CultureInfoNotFoundException]: {{< url path = "MSDocs.CSharp.CultureInfoNotFoundException">}}
[Supported Culture Codes]: {{< url path = "MSDocs.CSharp.SupportedCultureCodes">}}

[InvariantCulture]: {{< ref "#invariantculture" >}}
[CurrentCulture]: {{< ref "#currentculture" >}}
[SpecificCulture]: {{< ref "#specificculture" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}

[System.Globalization.CultureInfo]: {{< url path="MSDocs.DotNet.Api.System.Globalization.CultureInfo" >}}
