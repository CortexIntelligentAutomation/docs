---
title: "InvalidFolderNameException"
linkTitle: "InvalidFolderNameException"
description: "The exception thrown when a folder name is invalid."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.FilesAndFolders.InvalidFolderNameException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when specifying an invalid folder name.

## Reasons

### Invalid folder name provided

The folder name provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"The '<folder-name-property>' given was '<folder-name-value>'; this is not a valid folder name.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<folder-name-property>` is the name of the property containing the folder name which threw this exception.
* `<folder-name-value>` is the value of the property, i.e. the folder name, which was invalid.

#### How to fix

Ensure that the folder name provided is a valid folder name; please see [Naming Conventions][] for more information.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

* [Naming Files, Paths, and Namespaces][NamingFilesPathsAndNamespaces]

[FolderConcepts]: {{<url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.MainDoc">}}
[WhatIsAPath]: {{<url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc">}}
[Naming Conventions]: {{<url path="MSDocs.Windows.Apps.Win32.DesktopTechnologies.DataAccessAndStorage.LocalFileSystems.NamingFilesPathsAndNamespaces.NamingConventions">}}
[NamingFilesPathsAndNamespaces]: {{<url path="MSDocs.Windows.Apps.Win32.DesktopTechnologies.DataAccessAndStorage.LocalFileSystems.NamingFilesPathsAndNamespaces.MainDoc">}}