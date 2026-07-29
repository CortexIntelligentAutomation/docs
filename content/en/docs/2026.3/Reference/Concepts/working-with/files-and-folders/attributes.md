---
title: "Attributes"
linkTitle: "Attributes"
description: "File and folder attribute flags (read-only, hidden, archive, and related), how Get Information blocks expose them, and how they behave on copy, move, and rename."
weight: 3
---

# {{% param title %}}

## Summary

**Attributes** are flags the file system stores on a file or folder — for example read-only, hidden, or archive. In {{% ctx %}}, they map to the .NET [FileAttributes][] enumeration used by [System.IO][] on the **server that executes the flow**.

[Get File Information][] and [Get Folder Information][] read attributes into boolean properties on [FileInformation][] and [FolderInformation][] (for example `IsReadOnly`, `IsHidden`, `IsArchive`). There are no dedicated blocks for **setting** attributes; change them with C# or PowerShell when required.

Copy, move, and rename blocks document how attributes are preserved, copied, or left unchanged for existing destinations. For path formats and naming rules, see [Paths][].

## Attributes exposed by Get Information blocks

[FileInformation][] and [FolderInformation][] expose the following attribute flags as [Boolean][] properties. Each corresponds to a [FileAttributes][] value:

| Property | [FileAttributes][] value | Meaning |
| --- | --- | --- |
| `IsReadOnly` | `ReadOnly` | The file or folder is read-only. |
| `IsHidden` | `Hidden` | The item is hidden and is typically omitted from ordinary directory listings. |
| `IsSystem` | `System` | The item is marked as a system file (part of, or used exclusively by, the operating system). |
| `IsArchive` | `Archive` | The item is marked for inclusion in an incremental backup. Windows often sets this when the item is modified. |
| `IsNormal` | `Normal` | The item has no other special attributes. In .NET, `Normal` is valid only when used alone. |
| `IsTemporary` | `Temporary` | The item is temporary. Temporary files are often kept in memory when possible and should be deleted when no longer needed. |
| `IsCompressed` | `Compressed` | The item is compressed. |
| `IsEncrypted` | `Encrypted` | The file’s data is encrypted, or encryption is the default for new items created under the folder. |

These are the same flags shown in the result examples for [Get File Information][] and [Get Folder Information][]. Other [FileAttributes][] values (for example `Directory`, `SparseFile`, `ReparsePoint`, `Offline`) exist in .NET but are **not** returned as separate properties on [FileInformation][] / [FolderInformation][]. File versus folder is indicated by which data type and block you use, not by an `IsDirectory` property.

{{% alert title="Note" %}}
**FileAttributes** is a flags enumeration: more than one attribute can apply at once (for example read-only and archive). `IsNormal` is `true` only when the item has no other special attributes.
{{% /alert %}}

## How attributes behave with copy, move, and rename

Files & Folders blocks that copy or move content apply these rules (see each block’s remarks for full detail):

| Operation | Behaviour |
| --- | --- |
| [Copy File][] / [Copy Files][] | Attributes of each copied file are copied to the destination. |
| [Move File][] / [Move Files][] | Attributes move with the file. If the destination already exists and is not overwritten, existing destination attributes are left unchanged. |
| [Copy Folder][] / [Copy Folders][] / [Duplicate Folder][] | File attributes under the folder are copied. For folders: if the destination folder already exists, its attributes remain unchanged; otherwise they are copied. |
| [Move Folder][] / [Move Folders][] | File attributes move with files. For folders that already exist at the destination, folder attributes remain unchanged; otherwise they move with the folder. |
| [Rename Folder][] | Folder attributes are left unchanged. |

When multiple source paths contribute conflicting content to the same destination (for example [Copy Folders][] or [Move Folders][] with overwrite), the **attributes** of the item that remains typically come from the **first** path processed, while file **content** may come from the **last** — see those blocks’ *Conflicting Content* remarks.

## Reading attributes in a flow

1. Call [Get File Information][] or [Get Folder Information][] with the path of the item.
2. Use the output [FileInformation][] or [FolderInformation][] variable. Attribute flags are booleans such as `IsReadOnly`, `IsHidden`, and `IsArchive`.

In the [Expression Editor][], test a flag after getting information — for example:

```csharp
($)FileInformation.IsReadOnly
```

or combine checks:

```csharp
($)FileInformation.IsHidden || ($)FileInformation.IsSystem
```

## Setting attributes

There are currently no dedicated {{% ctx %}} blocks for setting file or folder attributes. To change attributes, use C# (for example in the [Expression Editor][]) or [Execute PowerShell Script][] on a host that can reach the path.

### C# examples

Read attributes with [File.GetAttributes][], then write them with [File.SetAttributes][]. Paths are resolved on the execution server (or a share that server can access), the same as other Files & Folders operations.

Check whether a file is read-only:

```csharp
(System.IO.File.GetAttributes(@"C:\Source\File.txt") & System.IO.FileAttributes.ReadOnly) == System.IO.FileAttributes.ReadOnly;
```

Add the read-only flag (preserve other flags):

```csharp
new System.Func<Exception>(() => {
    try {
        var path = @"C:\Source\File.txt";
        var attributes = System.IO.File.GetAttributes(path);
        System.IO.File.SetAttributes(path, attributes | System.IO.FileAttributes.ReadOnly);
        return null;
    }
    catch (Exception ex) {
        return ex;
    }
}).Invoke()
```

Clear the read-only flag:

```csharp
new System.Func<Exception>(() => {
    try {
        var path = @"C:\Source\File.txt";
        var attributes = System.IO.File.GetAttributes(path);
        System.IO.File.SetAttributes(path, attributes & ~System.IO.FileAttributes.ReadOnly);
        return null;
    }
    catch (Exception ex) {
        return ex;
    }
}).Invoke()
```

Hide a file (add the hidden flag):

```csharp
new System.Func<Exception>(() => {
    try {
        var path = @"C:\Source\File.txt";
        var attributes = System.IO.File.GetAttributes(path);
        System.IO.File.SetAttributes(path, attributes | System.IO.FileAttributes.Hidden);
        return null;
    }
    catch (Exception ex) {
        return ex;
    }
}).Invoke()
```

Clear the hidden flag:

```csharp
new System.Func<Exception>(() => {
    try {
        var path = @"C:\Source\File.txt";
        var attributes = System.IO.File.GetAttributes(path);
        System.IO.File.SetAttributes(path, attributes & ~System.IO.FileAttributes.Hidden);
        return null;
    }
    catch (Exception ex) {
        return ex;
    }
}).Invoke()
```

The same [File.GetAttributes][] / [File.SetAttributes][] APIs apply to folders when you pass a folder path.

### PowerShell examples

With [Execute PowerShell Script][], common patterns include:

```powershell
# Make a file read-only (replaces the Attributes value)
Set-ItemProperty -Path 'C:\Source\File.txt' -Name Attributes -Value 'ReadOnly'

# Combine flags
Set-ItemProperty -Path 'C:\Source\File.txt' -Name Attributes -Value 'ReadOnly,Hidden'

# Clear special attributes (Normal means no other flags)
Set-ItemProperty -Path 'C:\Source\File.txt' -Name Attributes -Value 'Normal'
```

or:

```powershell
(Get-Item 'C:\Source\File.txt').IsReadOnly = $true
```

Ensure the account that runs the script has permission to change attributes on that path.

## Remarks

### Known Limitations

#### No dedicated set-attribute blocks

Reading attributes is supported through [Get File Information][] and [Get Folder Information][]. Changing attributes requires C# or PowerShell (see [Setting attributes](#setting-attributes)).

#### Compression cannot be toggled with SetAttributes

Per .NET guidance, you cannot change compression status with [File.SetAttributes][] alone. Compress or decompress the item with a compression tool or APIs in `System.IO.Compression` (or equivalent tooling), not by setting the `Compressed` flag in isolation. See [FileAttributes][].

#### Normal is only valid alone

`FileAttributes.Normal` / `IsNormal` means the item has no other special attributes. Do not combine `Normal` with other flags when calling [File.SetAttributes][].

#### Permissions and locks

Setting or reading attributes can fail with access-denied or sharing violations if the execution identity lacks rights or another process locks the item. Failed Files & Folders operations often surface as [OperationFailedException][]; .NET may report [UnauthorizedAccessException][] or [IOException][] for the underlying failure.

## See Also

### Related Concepts

* [What are Files and Folders?][]
* [Paths][]
* [What is a Flow?][]

### Related Data Types

* [FileSystemInformation][]
* [FileInformation][]
* [FolderInformation][]
* [Boolean][]
* [String][]

### Related Blocks

* [Get File Information][] / [Get Folder Information][]
* [Copy File][] / [Copy Files][]
* [Copy Folder][] / [Copy Folders][] / [Duplicate Folder][]
* [Move File][] / [Move Files][]
* [Move Folder][] / [Move Folders][]
* [Rename Folder][]
* [Execute PowerShell Script][]

### Related Exceptions

* [OperationFailedException][]

### External Documentation

* [FileAttributes][]
* [File.GetAttributes][]
* [File.SetAttributes][]
* [File and Stream I/O][System.IO]
* [Common I/O Tasks][]
* [Handling I/O errors in .NET][]
* [UnauthorizedAccessException][]
* [IOException][]

[What are Files and Folders?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.WhatAreFilesAndFolders.MainDoc" >}}
[Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[FileSystemInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileSystemInformation.MainDoc" >}}
[FileInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileInformation.MainDoc" >}}
[FolderInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FolderInformation.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Get File Information]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFileInformation.GetFileInformation.MainDoc" >}}
[Get Folder Information]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFolderInformation.GetFolderInformation.MainDoc" >}}
[Copy File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFile.CopyFile.MainDoc" >}}
[Copy Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFile.CopyFiles.MainDoc" >}}
[Copy Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.CopyFolder.MainDoc" >}}
[Copy Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.CopyFolders.MainDoc" >}}
[Duplicate Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CopyFolder.DuplicateFolder.MainDoc" >}}
[Move File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFile.MoveFile.MainDoc" >}}
[Move Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFile.MoveFiles.MainDoc" >}}
[Move Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolder.MainDoc" >}}
[Move Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.MoveFolder.MoveFolders.MainDoc" >}}
[Rename Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.RenameFolder.RenameFolder.MainDoc" >}}
[Execute PowerShell Script]: {{< url path="Cortex.Reference.Blocks.PowerShell.ExecutePowerShellScript.ExecutePowerShellScript.MainDoc" >}}

[OperationFailedException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}

[System.IO]: https://learn.microsoft.com/en-us/dotnet/standard/io/
[FileAttributes]: https://learn.microsoft.com/en-us/dotnet/api/system.io.fileattributes
[File.GetAttributes]: https://learn.microsoft.com/en-us/dotnet/api/system.io.file.getattributes
[File.SetAttributes]: https://learn.microsoft.com/en-us/dotnet/api/system.io.file.setattributes
[Common I/O Tasks]: https://learn.microsoft.com/en-us/dotnet/standard/io/common-i-o-tasks
[Handling I/O errors in .NET]: https://learn.microsoft.com/en-us/dotnet/standard/io/handling-io-errors
[UnauthorizedAccessException]: https://learn.microsoft.com/en-us/dotnet/api/system.unauthorizedaccessexception
[IOException]: https://learn.microsoft.com/en-us/dotnet/api/system.io.ioexception
