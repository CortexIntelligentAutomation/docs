---
title: "ContentOptions"
linkTitle: "ContentOptions"
description: "Used to define whether the Get Folder Content block should get file or folder paths."
description: "Used to represent the set of options for the Get Folder Content block."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.FilesAndFolders.ContentOptions)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `ContentOptions` data type is used to represent the set of options for the [Get Folder Content][] block.

`ContentOptions` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Files & Folders                                                |
| **Name:**              | `ContentOptions`                                |
| **Full Name:**         | `Cortex.DataTypes.FilesAndFolders.ContentOptions`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Used to represent the set of options for the Get Folder Content block. |
| **Default Value:**     | `(ContentOptions)0`                             |
| **Can be used as:**    | `ContentOptions`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)ContentOptions.Files` or `(System.Int16)ContentOptions.Files` or `(short)ContentOptions.Files`)  |
|                        | `Int32` (e.g. `(Int32)ContentOptions.Files` or `(System.Int32)ContentOptions.Files` or `(int)ContentOptions.Files`)  |
|                        | `Int64` (e.g. `(Int64)ContentOptions.Files` or `(System.Int64)ContentOptions.Files` or `(long)ContentOptions.Files`)  |
|                        | `Single` (e.g. `(Single)ContentOptions.Files` or `(System.Single)ContentOptions.Files` or `(float)ContentOptions.Files`)  |
|                        | `Double` (e.g. `(Double)ContentOptions.Files` or `(System.Double)ContentOptions.Files` or `(double)ContentOptions.Files`)  |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ContentOptions`.
- The Literal Editor is available for [Input][] properties where the data type is `ContentOptions`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ContentOptions`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]
- [Working With Files & Folders][]

### External Documentation

- [System.Enum][]

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Get Folder Content]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFolderContent.GetFolderContent.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[Working With Files & Folders]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.MainDoc" >}}
