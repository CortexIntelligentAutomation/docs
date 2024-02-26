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

### Path must be a folder and that path does not already point to a file

The provided [path][WhatIsAPath] needs to be a folder, and is not a valid folder path.

#### Message Format

The format of the exception message is as follows:

```json
"The '<path-property>' given was '<path>'; this is not a valid folder path.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<path-property>` is the name of the property that was an invalid folder path.
* `<path>` is the [path][WhatIsAPath] that was invalid.

#### How to fix

Ensure that the [path][WhatIsAPath] provided is a valid folder path.

### Path provided is invalid

The provided [path][WhatIsAPath] has an incorrect syntax, or has illegal characters, or is too long.

#### Message Format

The format of the exception message is as follows:

```json
"The '<path-property>' given was '<path>'; this is not a valid folder path. Please see the 'InnerException' property for more details.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<path-property>` is the name of the property that was an invalid folder path.
* `<path>` is the [path][WhatIsAPath] that was invalid.

#### How to fix

Ensure that the [path][WhatIsAPath] provided has no incorrect syntax or illegal characters, and that it is not too long.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[FolderConcepts]: {{<url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.MainDoc">}}
[WhatIsAPath]: {{<url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc">}}
