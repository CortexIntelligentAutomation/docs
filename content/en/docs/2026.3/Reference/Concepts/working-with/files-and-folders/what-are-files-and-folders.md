---
title: "What are Files and Folders?"
linkTitle: "What are Files and Folders?"
description: "How flows work with files and folders, including paths, common operations, encodings, environment variables, and best practices."
weight: 1
---

# {{% param title %}}

## Summary

In {{% ctx %}}, a **file** is a named collection of bytes stored on disk (or a network share), and a **folder** (also called a directory) is a container that holds files and other folders. Files & Folders blocks resolve [paths][] and perform I/O on the **server that executes the flow**.

{{% ctx %}} wraps common tasks in blocks and data types so flows can check, create, copy, move, delete, read, write, and search files and folders consistently.

| Term | Meaning |
| --- | --- |
| File | Named content on disk (for example `report.csv` or `log.txt`) |
| Folder | Container for files and subfolders (for example `C:\Source\Folder`) |
| [Path][paths] | String that locates a file or folder (absolute, relative, or UNC) |
| [FileInformation][] / [FolderInformation][] | Metadata returned by Get Information blocks (attributes, size, timestamps, and path parts) |
| [Attributes][] | Flags such as read-only, hidden, or archive on a file or folder |

For path formats, naming rules, and how {{% ctx %}} distinguishes file paths from folder paths, see [Paths][paths]. For attribute flags, see [Attributes][].

## Working with files and folders in a flow

Flows use Files & Folders blocks. Typical tasks map to the categories below.

| Task | Typical blocks |
| --- | --- |
| Check existence | [Check File Exists][], [Check Folder Exists][] |
| Create folders | [Create Folder][], [Create Folders][] |
| Read content | [Read All Text][], [Read All Lines][] |
| Write content | [Write All Text][], [Write All Lines][] |
| Search within files | [Search File][], [Search Files][] |
| List folder contents | [Get Folder Content][] |
| Inspect metadata | [Get File Information][], [Get Folder Information][] |
| Copy | [Copy File][], [Copy Files][], [Copy Folder][], [Copy Folders][], [Duplicate Folder][] |
| Move / rename | [Move File][], [Move Files][], [Move Folder][], [Move Folders][], [Rename Folder][] |
| Delete | [Delete File][], [Delete Files][], [Delete Folder][], [Delete Folders][] |

Most path properties:

* Are case-insensitive on Windows.
* Must not contain wildcard characters (wildcards belong in search patterns, not in the path itself).
* Have trailing spaces removed automatically.
* Require `\` characters to be escaped in string literals (`"C:\\Source\\File.txt"` or `@"C:\Source\File.txt"`).

[Write All Text][] and [Write All Lines][] create the target file if it does not exist, and create any missing parent folders. [Delete Folder][] requires its Recursive property to be `true` before a folder that still contains files or subfolders can be deleted.

Failed operations often surface as [OperationFailedException][], with per-path details in `PathExceptions`. Invalid syntax or illegal characters typically throw [InvalidPathException][]. Invalid rename or duplicate names throw [InvalidFolderNameException][]. For underlying .NET behaviour when the operating system reports I/O failures, see [Handling I/O errors in .NET][].

## Paths and where files are resolved

Path strings are interpreted on the **execution server** (or on a UNC share that server can reach), not necessarily on the machine where the flow was designed. Absolute, relative, and UNC forms are supported; see [Paths][paths] for formats and examples.

This is the same rule used for email attachments and other features that take file paths: store inputs and outputs where the Execution Service account can read and write them. See [What is Email?][] for attachment path guidance.

## Encoding

Text read, write, and search blocks accept an optional [Encoding][]:

* **Read** and **search** — leave [Encoding][] as `null` to let the block detect encoding from byte order marks when possible; set it explicitly when auto-detection is wrong.
* **Write** — leave [Encoding][] as `null` to write UTF-8 without a byte order mark.

For available encodings and examples, see [Encoding][Working with Text - Encoding].

## Common file extensions

The extension is the suffix after the final `.` in a file name (for example `.txt` on `File.txt`). {{% ctx %}} does not restrict you to a fixed list of extensions; the file system and the application that consumes the file determine meaning. Extensions commonly used in automation and documentation include:

| Extension | Typical content |
| --- | --- |
| `.txt`, `.log` | Plain text or log output |
| `.csv` | Delimited tabular data |
| `.json`, `.xml` | Structured data or configuration |
| `.pdf`, `.docx`, `.xlsx` | Documents and spreadsheets (often as attachments or outputs from other systems) |
| `.zip` | Compressed archives |
| `.exe` | Windows executables (for existence checks or process-related paths) |

[Get File Information][] returns the extension as part of [FileInformation][]. Prefer clear, conventional extensions so downstream tools and operators can identify file types reliably.

## Common environment variables

Windows exposes well-known directories through environment variables. Use them so flows do not hard-code machine-specific roots. Values below are typical defaults; the actual path depends on the execution host and the account running the flow.

| Variable | Typical use |
| --- | --- |
| `%ProgramData%` | Data shared by all users on the machine ({{% ctx %}} install and logging paths often use this root) |
| `%TEMP%` / `%TMP%` | Short-lived working files for the current user or process |
| `%USERPROFILE%` | Profile root for the user the flow runs as |
| `%APPDATA%` | Roaming per-user application data |
| `%LOCALAPPDATA%` | Non-roaming per-user application data |
| `%SystemRoot%` / `%WINDIR%` | Windows installation directory |
| `%ProgramFiles%` / `%ProgramFiles(x86)%` | Installed programs |

Some platform settings (for example the [Log Event][] block default log `path`) accept `%ProgramData%` inline and expand it. Files & Folders block path properties expect a resolved path string. In the [Expression Editor][], expand variables with .NET before passing the path to a block — for example:

```csharp
Environment.ExpandEnvironmentVariables(@"%ProgramData%\\MyOrg\\output.txt")
```

or:

```csharp
System.IO.Path.Combine(Environment.GetEnvironmentVariable("TEMP"), "flow-work", "scratch.txt")
```

For expansion behaviour, see [Environment.ExpandEnvironmentVariables][].

## Best practices

* Resolve paths on the **execution server**. Design-time paths on a workstation will fail at runtime unless the same location exists on the server or you use a UNC share the server can access.
* Prefer absolute or UNC paths for production flows so behaviour does not depend on the process working directory. Use relative paths only when that working directory is intentional and documented.
* Escape backslashes in path literals (`@"C:\Folder\file.txt"` or `"C:\\Folder\\file.txt"`).
* Choose a durable location for outputs. Use `%ProgramData%` (or an agreed share) for shared or retained artefacts; use `%TEMP%` only for disposable intermediate files, and delete them when the flow finishes.
* Avoid writing into system directories such as `%SystemRoot%` or `%ProgramFiles%` unless the process identity is meant to manage software there.
* Check before destructive work. Use [Check File Exists][] / [Check Folder Exists][], and set overwrite or recursive options deliberately on copy, move, and delete blocks.
* Handle failures. Catch or handle [OperationFailedException][] and related path exceptions when I/O may fail because of permissions, locks, missing paths, or invalid names.
* Set encoding when needed. Specify [Encoding][] for non-UTF-8 files or when auto-detection is unreliable.
* Attributes: use [Get File Information][] / [Get Folder Information][] to read attributes. There are no dedicated blocks today for setting attributes; change them with C# or PowerShell when required. See [Attributes][].

## Remarks

### Known Limitations

#### Setting attributes

There are currently no dedicated blocks for setting file or folder attributes. Reading attributes is supported through [Get File Information][] and [Get Folder Information][]. To change attributes, use C# or PowerShell.

## See Also

### Related Concepts

* [Files and Folders][]
* [Paths][paths]
* [Attributes][]
* [Encoding][Working with Text - Encoding]
* [What is a Flow?][]
* [What is Email?][]

### Related Data Types

* [FileSystemInformation][]
* [FileInformation][]
* [FolderInformation][]
* [FileMatch][]
* [ContentOptions][]
* [Encoding][]
* [String][]

### Related Blocks

* [Check File Exists][]
* [Check Folder Exists][]
* [Create Folder][] / [Create Folders][]
* [Read All Text][] / [Read All Lines][]
* [Write All Text][] / [Write All Lines][]
* [Search File][] / [Search Files][]
* [Get Folder Content][]
* [Get File Information][] / [Get Folder Information][]
* [Copy File][] / [Copy Files][]
* [Copy Folder][] / [Copy Folders][] / [Duplicate Folder][]
* [Move File][] / [Move Files][]
* [Move Folder][] / [Move Folders][]
* [Rename Folder][]
* [Delete File][] / [Delete Files][]
* [Delete Folder][] / [Delete Folders][]

### Related Exceptions

* [InvalidPathException][]
* [InvalidFolderNameException][]
* [OperationFailedException][]

### External Documentation

* [File and Stream I/O][System.IO]
* [File path formats on Windows systems][]
* [Handling I/O errors in .NET][]
* [Common I/O Tasks][]
* [Naming Files, Paths, and Namespaces][]
* [Environment.ExpandEnvironmentVariables][]
* [FileNotFoundException][]
* [IOException][]
* [PathTooLongException][]
* [UnauthorizedAccessException][]

[paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}
[Attributes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Attributes.MainDoc" >}}
[Files and Folders]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is Email?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.WhatIsEmail.MainDoc" >}}
[Working with Text - Encoding]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Encoding.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[FileSystemInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileSystemInformation.MainDoc" >}}
[FileInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileInformation.MainDoc" >}}
[FolderInformation]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FolderInformation.MainDoc" >}}
[FileMatch]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.FileMatch.MainDoc" >}}
[ContentOptions]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.ContentOptions.MainDoc" >}}
[Encoding]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Check File Exists]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CheckFile.CheckFileExists.MainDoc" >}}
[Check Folder Exists]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CheckFolder.CheckFolderExists.MainDoc" >}}
[Create Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CreateFolder.CreateFolder.MainDoc" >}}
[Create Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.CreateFolder.CreateFolders.MainDoc" >}}
[Read All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllText.MainDoc" >}}
[Read All Lines]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.ReadFile.ReadAllLines.MainDoc" >}}
[Write All Text]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllText.MainDoc" >}}
[Write All Lines]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.WriteFile.WriteAllLines.MainDoc" >}}
[Search File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFile.MainDoc" >}}
[Search Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.SearchFile.SearchFiles.MainDoc" >}}
[Get Folder Content]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.GetFolderContent.GetFolderContent.MainDoc" >}}
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
[Delete File]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFile.DeleteFile.MainDoc" >}}
[Delete Files]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFile.DeleteFiles.MainDoc" >}}
[Delete Folder]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFolder.DeleteFolder.MainDoc" >}}
[Delete Folders]: {{< url path="Cortex.Reference.Blocks.FilesAndFolders.DeleteFolder.DeleteFolders.MainDoc" >}}
[Log Event]: {{< url path="Cortex.Reference.Blocks.Logs.LogEvent.LogEvent.MainDoc" >}}

[InvalidPathException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.InvalidPathException.MainDoc" >}}
[InvalidFolderNameException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.InvalidFolderNameException.MainDoc" >}}
[OperationFailedException]: {{< url path="Cortex.Reference.Exceptions.FilesAndFolders.OperationFailedException.MainDoc" >}}

[Naming Files, Paths, and Namespaces]: {{< url path="MSDocs.Windows.Apps.Win32.DesktopTechnologies.DataAccessAndStorage.LocalFileSystems.NamingFilesPathsAndNamespaces.MainDoc" >}}
[FileNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.IO.FileNotFoundException" >}}
[IOException]: {{< url path="MSDocs.DotNet.Api.System.IO.IOException" >}}
[PathTooLongException]: {{< url path="MSDocs.DotNet.Api.System.IO.PathTooLongException" >}}
[UnauthorizedAccessException]: {{< url path="MSDocs.DotNet.Api.System.UnauthorizedAccessException" >}}

[System.IO]: https://learn.microsoft.com/en-us/dotnet/standard/io/
[File path formats on Windows systems]: https://learn.microsoft.com/en-us/dotnet/standard/io/file-path-formats
[Handling I/O errors in .NET]: https://learn.microsoft.com/en-us/dotnet/standard/io/handling-io-errors
[Common I/O Tasks]: https://learn.microsoft.com/en-us/dotnet/standard/io/common-i-o-tasks
[Environment.ExpandEnvironmentVariables]: https://learn.microsoft.com/en-us/dotnet/api/system.environment.expandenvironmentvariables
