---
title: "StringComparer"
linkTitle: "StringComparer"
description: "Used to compare two pieces of text against each other."
weight: 1
---

# {{% param title %}}

<p class="namespace">(System.StringComparer)</p>

## Summary

The `StringComparer` data type is used to compare two pieces of text against each other.

| | |
|-|-|
| **Category:**          | Text                                                          |
| **Name:**              | `StringComparer`                                                      |
| **Full Name:**         | `System.StringComparer`                                               |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to compare two pieces of text against each other. |
| **Default Value:**     | `null`                                                           |
| **Can be used as:**    | `Object`, `dynamic`                                                         |
| **Can be cast to:**    | `IComparer`, `IComparer<T>`, `IEqualityComparer`, `IEqualityComparer<T>`                                                             |

## Properties

### CurrentCulture

| | |
|-|-|
| **Name:**    | CurrentCulture                                         |
| **Value:**   | `StringComparer.CurrentCulture`                       |
| **Notes:**   | Gets a `StringComparer` that performs a case-sensitive text comparison using [Current Culture][CurrentCulture] rules. |

### CurrentCultureIgnoreCase

| | |
|-|-|
| **Name:**    | CurrentCultureIgnoreCase                                         |
| **Value:**   | `StringComparer.CurrentCultureIgnoreCase`                       |
| **Notes:**   | Gets a `StringComparer` that performs a case-insensitive text comparison using [Current Culture Ignore Case][CurrentCultureIgnoreCase] rules. |

### InvariantCulture

| | |
|-|-|
| **Name:**    | InvariantCulture                                         |
| **Value:**   | `StringComparer.InvariantCulture`                       |
| **Notes:**   | Gets a `StringComparer` that performs a case-sensitive text comparison using [Invariant Culture][InvariantCulture] rules. |

### InvariantCultureIgnoreCase

| | |
|-|-|
| **Name:**    | InvariantCultureIgnoreCase                    |
| **Value:**   | `StringComparer.InvariantCultureIgnoreCase`   |
| **Notes:**   | Gets a `StringComparer` that performs a case-insensitive text comparison using [Invariant Culture Ignore Case][InvariantCultureIgnoreCase] rules. |

### Ordinal

| | |
|-|-|
| **Name:**    | Ordinal                                         |
| **Value:**   | `StringComparer.Ordinal`                       |
| **Notes:**   | Gets a `StringComparer` that performs a case-sensitive text comparison using [Ordinal][] rules. |

### OrdinalIgnoreCase

| | |
|-|-|
| **Name:**    | OrdinalIgnoreCase                                         |
| **Value:**   | `StringComparer.OrdinalIgnoreCase`                       |
| **Notes:**   | Gets a `StringComparer` that performs a case-insensitive text comparison using [Ordinal Ignore Case][OrdinalIgnoreCase] rules. |

## Remarks

### Create a StringComparer

The following table shows some of the ways that `StringComparer` can be created using the expression editor.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `StringComparer` literal  |  `StringComparer.CurrentCulture`      | `StringComparer.CurrentCulture` | Expression | Gets a `StringComparer` that performs a case-sensitive text comparison using [Current Culture][CurrentCulture] rules.  |
||  `StringComparer.CurrentCultureIgnoreCase`      | `StringComparer.CurrentCultureIgnoreCase` | Expression | Gets a `StringComparer` that performs a case-insensitive text comparison using [Current Culture Ignore Case][CurrentCultureIgnoreCase] rules.  |
||  `StringComparer.InvariantCulture`      | `StringComparer.InvariantCulture` | Expression | Gets a `StringComparer` that performs a case-sensitive text comparison using [Invariant Culture][InvariantCulture] rules.  |
||  `StringComparer.InvariantCultureIgnoreCase`      | `StringComparer.InvariantCultureIgnoreCase` | Expression | Gets a `StringComparer` that performs a case-insensitive text comparison using [Invariant Culture Ignore Case][InvariantCultureIgnoreCase] rules.  |
||  `StringComparer.Ordinal`      | `StringComparer.Ordinal` | Expression | Gets a `StringComparer` that performs a case-sensitive text comparison using [Ordinal][] rules.  |
||  `StringComparer.OrdinalIgnoreCase`      | `StringComparer.OrdinalIgnoreCase` | Expression | Gets a `StringComparer` that performs a case-insensitive text comparison using [Ordinal Ignore Case][OrdinalIgnoreCase] rules.  |

### Convert StringComparer to Text

The following table shows some of the ways that a `StringComparer` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString`   |  `StringComparer.CurrentCulture.ToString()`      | `"System.CultureAwareComparer"` | Expression | See [Object.ToString][] |
||  `StringComparer.CurrentCultureIgnoreCase.ToString()`      | `"System.CultureAwareComparer"` | Expression | See [Object.ToString][] |
||  `StringComparer.InvariantCulture.ToString()`      | `"System.CultureAwareComparer"` | Expression | See [Object.ToString][] |
||  `StringComparer.InvariantCultureIgnoreCase.ToString()`      | `"System.CultureAwareComparer"` | Expression | See [Object.ToString][] |
||  `StringComparer.Ordinal.ToString()`      | `"System.OrdinalCaseSensitiveComparer"` | Expression | See [Object.ToString][] |
||  `StringComparer.OrdinalIgnoreCase.ToString()`      | `"System.OrdinalIgnoreCaseComparer"` | Expression | See [Object.ToString][] |
| Use `Convert Object To Text` block   |  where `Object` property has a value of `StringComparer.CurrentCulture`      | `"System.CultureAwareComparer"` | Expression | See [Convert Object To Text][] |
||  where `Object` property has a value of `StringComparer.CurrentCultureIgnoreCase`      | `"System.CultureAwareComparer"` | Expression | See [Convert Object To Text][] |
||  where `Object` property has a value of `StringComparer.InvariantCulture`      | `"System.CultureAwareComparer"` | Expression | See [Convert Object To Text][] |
||  where `Object` property has a value of `StringComparer.InvariantCultureIgnoreCase`      | `"System.CultureAwareComparer"` | Expression | See [Convert Object To Text][] |
||  where `Object` property has a value of `StringComparer.Ordinal`      | `"System.OrdinalCaseSensitiveComparer"` | Expression | See [Convert Object To Text][] |
||  where `Object` property has a value of `StringComparer.OrdinalIgnoreCase`      | `"System.OrdinalIgnoreCaseComparer"` | Expression | See [Convert Object To Text][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `StringComparer`.
- The Literal Editor is not available for [Input][] properties where the data type is `StringComparer`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `StringComparer`.

### Known Limitations

None

## See Also

### Related Data Types

- [IComparer&lt;TPriority&gt;][IComparer]

### Related Concepts

- [Working With Text][Working With Text]

### External Documentation

- [StringComparer][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[IComparer]: {{< url path="Cortex.Reference.DataTypes.Collections.IComparer.MainDoc" >}}
[StringComparer]: {{< url path="MSDocs.DotNet.Api.System.StringComparer" >}}

[Working With Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}

[CurrentCulture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.CurrentCulture" >}}
[CurrentCultureIgnoreCase]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.CurrentCultureIgnoreCase" >}}
[InvariantCulture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.InvariantCulture" >}}
[InvariantCultureIgnoreCase]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.InvariantCultureIgnoreCase" >}}
[Ordinal]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.Ordinal">}}
[OrdinalIgnoreCase]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.OrdinalIgnoreCase">}}

[Object.ToString]: {{< url path="MSDocs.DotNet.Api.System.Object.ToString" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}