---
title: "InvalidPathException"
linkTitle: "InvalidPathException"
description: "The exception thrown when a file or folder path is invalid."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.FilesAndFolders.InvalidPathException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when specifying an invalid file or folder [path][WhatIsAPath].

## Reasons


### Path provided is invalid

The provided [path][WhatIsAPath] has an incorrect syntax, or has illegal characters, or is too long.

#### Message Format

The format of the exception message is as follows:

```json
"The '<path-property>' given was '<path-value>'; this is not a valid folder path. Please see the 'InnerException' property for more details.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<path-property>` is the name of the property containing the path which threw this exception.
* `<path-value>` is the value of the property, i.e. the path, which was invalid.

#### How to fix

Ensure that the [path][WhatIsAPath] provided has no incorrect syntax or illegal characters, and that it is not too long; see [Paths][] for more information.

### Path provided must represent a folder and that path must not point to an existing file

The provided [path][WhatIsAPath] needs to be a folder, and must not point to an existing file.

#### Message Format

The format of the exception message is as follows:

```json
"The '<path-property>' given was '<path-value>'; this is not a valid folder path.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<path-property>` is the name of the property containing the path which threw this exception.
* `<path-value>` is the value of the property, i.e. the path, which was invalid.

#### How to fix

Ensure that the [path][WhatIsAPath] provided is a valid folder path and does not point to an existing file; see [Paths][] for more information.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

* [Naming Files, Paths, and Namespaces][NamingFilesPathsAndNamespaces]

[FolderConcepts]: {{<url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.MainDoc">}}
[WhatIsAPath]: {{<url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc">}}
[NamingFilesPathsAndNamespaces]: {{<url path="MSDocs.Windows.Apps.Win32.DesktopTechnologies.DataAccessAndStorage.LocalFileSystems.NamingFilesPathsAndNamespaces.MainDoc">}}
[Paths]: {{<url path="MSDocs.Windows.Apps.Win32.DesktopTechnologies.DataAccessAndStorage.LocalFileSystems.NamingFilesPathsAndNamespaces.Paths">}}