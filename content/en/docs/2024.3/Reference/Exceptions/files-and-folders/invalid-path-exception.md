---
title: "InvalidPathException"
linkTitle: "InvalidPathException"
description: "The exception thrown when a file or folder path is invalid."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.FilesAndFolders.InvalidPathException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when specifying an invalid file or folder path.

## Reasons

### Path must be a folder and that path does not already point to a file

The provided path needs to be a folder, and is not a valid folder path.

#### Message Format

The format of the exception message is as follows:

```json
"The '<property-name>' given was '<path>'; this is not a valid folder path.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property that was an invalid folder path.
* `<path>` is the path that was invalid.

#### How to fix

Ensure that the path provided is a valid folder path.

### Path provided is invalid

The provided path has an incorrect syntax, or has illegal characters, or is too long.

#### Message Format

The format of the exception message is as follows:

```json
"The '<property-name>' given was '<path>'; this is not a valid folder path. Please see the 'InnerException' property for more details.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property that was an invalid folder path.
* `<path>` is the path that was invalid.

#### How to fix

Ensure that the path provided has no incorrect syntax or illegal characters, and that it is not too long.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None
