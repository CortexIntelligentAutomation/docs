---
title: "Check Folder Exists"
linkTitle: "Check Folder Exists"
description: "Checks if a folder exists at the specified folder path."
---

{{< figure src="/blocks/Cortex_Blocks_FilesAndFolders_CheckFolder_CheckFolderExistsBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.CheckFolder.CheckFolderExistsBlock)</p>

## Description

Checks if a [Folder Exists][FolderExists Property] at the specified [Folder Path][FolderPath Property].

## Examples

### Folder exists at the specified Folder Path

This example will check if `"C:\Windows\System32"` exists on the Windows server executing the flow.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `@"C:\Windows\System32"` | `($)FolderPath` is a variable of type [String][] |
| [Folder Exists][FolderExists Property] | `($)FolderExists`, with no value | `($)FolderExists` is a variable that will be set to a [Boolean][] value |

#### Result

`"C:\Windows\System32"` is the folder on Windows machines that contains files critical to the functioning of the operating system. Checking this on the Windows server executing the flow will result in the variable `($)FolderExists` being updated to the following:

```json
true
```

***

### Folder does not exist at the specified Folder Path

This example will check if `"/etc"` exists on the Windows server executing the flow.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Folder Path][FolderPath Property] | `($)FolderPath`, with value `"/etc"` | `($)FolderPath` is a variable of type [String][] |
| [Folder Exists][FolderExists Property] | `($)FolderExists`, with no value | `($)FolderExists` is a variable that will be set to a [Boolean][] value |

#### Result

`"/etc"` is the folder on Linux machines containing system configuration files. Checking this on the Windows server executing the flow will result in the variable `($)FolderExists` being updated to the following:

```json
false
```

***

## Properties

### Folder Path

The [Folder Path][FolderPath Property] to check a folder exists at.

The [Folder Path][FolderPath Property] is case-insensitive, any trailing spaces will be automatically removed, and can end with or without a trailing `\` (e.g. `@"C:\Windows\System32"` or `@"C:\Windows\System32\"`).

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FolderPath` with no value |

### Folder Exists

The result of the folder exists check.

If the folder exists at the specified [Folder Path][FolderPath Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FolderExists` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Folder Paths

For information about the supported folder path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

### Folder Path needs escaping

[Folder Path][FolderPath Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Windows\\System32"`), or
* Prepending an `@` character before the start of the [Folder Path][FolderPath Property] (e.g. `@"C:\Windows\System32"`)

### Null Folder Path

If [Folder Path][FolderPath Property] is `null` the variable specified in the [Folder Exists][FolderExists Property] property will be set to `false`.

### Empty Folder Path

If [Folder Path][FolderPath Property] is empty (i.e. `""`) the variable specified in the [Folder Exists][FolderExists Property] property will be set to `false`.

### Invalid Folder Path

If [Folder Path][FolderPath Property] is invalid (i.e. contains any of the following characters: `"`, `*`, `?`, `|`, `<`, `>`, `:`, `\`, `/`) the variable specified in the [Folder Exists][FolderExists Property] property will be set to `false`.

### Folder Path points to a file

If [Folder Path][FolderPath Property] points to a file, the variable specified in the [Folder Exists][FolderExists Property] property will be set to `false`.

To check if a file exists, use the [Check File Exists block][].

### Folder Path contains leading spaces

If [Folder Path][FolderPath Property] contains leading spaces they are not removed; however, trailing spaces are removed.

### Error occurs whilst checking if the folder exists

If any error occurs whilst checking if a folder exists at the specified [Folder Path][FolderPath Property], the variable specified in the [Folder Exists][FolderExists Property] property will be set to `false`.

### User does not have necessary permissions to check if the folder exists

If the user the flow is executing as does not have permissions to check if a folder exists at the specified [Folder Path][FolderPath Property], the variable specified in the [Folder Exists][FolderExists Property] property will be set to `false`.

[FolderPath Property]: {{< ref "#folder-path" >}}
[FolderExists Property]: {{< ref "#folder-exists" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[Check File Exists block]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CheckFile.CheckFileExists.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
