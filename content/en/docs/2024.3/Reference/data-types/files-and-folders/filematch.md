---
title: "FileMatch"
linkTitle: "FileMatch"
description: "Used to represent a regex match of a line within the file. It contains all of the groups found in the regex pattern."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.FilesAndFolders.FileMatch)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `FileMatch` datatype is used to represent a regex match of a line within the file. It contains all of the [Groups][Group] found in the regex pattern.

| | |
|-|-|
| **Category:**          | Files & Folders                                                      |
| **Name:**              | `FileMatch`                                                        |
| **Full Name:**         | `Cortex.DataTypes.FilesAndFolders.FileMatch`                                                 |
| **Alias:**             | N/A |
| **Description:**       | Used to represent a regex match of a line within the file. It contains all of the [Groups][Group] found in the regex pattern. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `FileMatch`, `Match`, `object`, `dynamic` |
| **Can be cast to:**    | N/A |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `FileInformation`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `FileInformation`.

### Known Limitations

## See Also

### Related Data Types

- [Group][]
- [Match][]
- [Int32][]
- [String][]

### Related Concepts

- [Working With Files & Folders][]

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Group]: {{<url path="Cortex.Reference.DataTypes.Text.Regex.Group.MainDoc">}}
[Match]: {{<url path="Cortex.Reference.DataTypes.Text.Regex.Match.MainDoc">}}

[Int32]: {{<url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc">}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Working With Files & Folders]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.MainDoc" >}}
