---
title: "Check File Exists"
linkTitle: "Check File Exists"
description: "Checks if a file exists at the specified file path."
---

{{< figure src="/blocks/files-check-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.FilesAndFolders.CheckFile.CheckFileExistsBlock)</p>

## Description

Checks if a [File Exists][FileExists Property] at the specified [File Path][FilePath Property].

## Examples

### File exists at the specified File Path

This example will check if `"C:\Windows\System32\cmd.exe"` exists on the Windows server executing the flow.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `@"C:\Windows\System32\cmd.exe"` | `($)FilePath` is a variable of type [String][] |
| [File Exists][FileExists Property] | `($)FileExists`, with no value | `($)FileExists` is a variable that will be set to a [Boolean][] value |

#### Result

`"C:\Windows\System32\cmd.exe"` is the command prompt application on Windows machines. Checking this on the Windows server executing the flow will result in the variable `($)FileExists` being updated to the following:

```json
true
```

***

### File does not exist at the specified File Path

This example will check if `"/etc/passwd"` exists on the Windows server executing the flow.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [File Path][FilePath Property] | `($)FilePath`, with value `"/etc/passwd"` | `($)FilePath` is a variable of type [String][] |
| [File Exists][FileExists Property] | `($)FileExists`, with no value | `($)FileExists` is a variable that will be set to a [Boolean][] value |

#### Result

`"/etc/passwd"` is a file that exists on Linux machines containing the list of system accounts. Checking this on the Windows server executing the flow will result in the variable `($)FileExists` being updated to the following:

```json
false
```

***

## Properties

### File Path

The [File Path][FilePath Property] to check a file exists at.

The [File Path][FilePath Property] is case-insensitive, and any trailing spaces will be automatically removed.

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FilePath` with no value |

### File Exists

The result of the file exists check.

If the file exists at the specified [File Path][FilePath Property], the specified variable will be set to `true`, otherwise it will be set to `false`.

| | |
|--------------------|---------------------------|
| Data Type | [Boolean][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)FileExists` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### File Paths

For information about the supported file path formats (i.e. absolute, relative, UNC etc.) and examples of each, please see [File & Folder Paths][].

### File Path needs escaping

[File Path][FilePath Property] requires `\` characters to be escaped, otherwise each unescaped `\` will be reported as an `Invalid property value` message when trying to debug the flow.

Escaping can be done in two ways:

* Escaping the `\` character with another `\` character (e.g. `"C:\\Windows\\System32\\cmd.exe"`), or
* Prepending an `@` character before the start of the [File Path][FilePath Property] (e.g. `@"C:\Windows\System32\cmd.exe"`)

### Null File Path

If [File Path][FilePath Property] is `null` the variable specified in the [File Exists][FileExists Property] property will be set to `false`.

### Empty File Path

If [File Path][FilePath Property] is empty (i.e. `""`) the variable specified in the [File Exists][FileExists Property] property will be set to `false`.

### Invalid File Path

If [File Path][FilePath Property] is invalid (i.e. contains any of the following characters: `"`, `*`, `?`, `|`, `<`, `>`, `:`, `\`, `/`) the variable specified in the [File Exists][FileExists Property] property will be set to `false`.

### File Path points to a folder

If [File Path][FilePath Property] points to a folder, the variable specified in the [File Exists][FileExists Property] property will be set to `false`.

To check if a folder exists, use the [Check Folder Exists block][].

### File Path contains leading spaces

If [File Path][FilePath Property] contains leading spaces they are not removed; however, trailing spaces are removed.

### Error occurs whilst checking if the file exists

If any error occurs whilst checking if a file exists at the specified [File Path][FilePath Property], the variable specified in the [File Exists][FileExists Property] property will be set to `false`.

### User does not have necessary permissions to check if the file exists

If the user the flow is executing as does not have permissions to check if a file exists at the specified [File Path][FilePath Property], the variable specified in the [File Exists][FileExists Property] property will be set to `false`.

[FilePath Property]: {{< ref "#file-path" >}}
[FileExists Property]: {{< ref "#file-exists" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[File & Folder Paths]: {{< url "Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[Check Folder Exists block]: {{< url "Cortex.Reference.Blocks.FilesAndFolders.CheckFolder.CheckFolderExists.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}

[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
