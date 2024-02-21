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
"The '<property-name>' given was '<property-value>'; this is not a valid folder name.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property containing the folder name which threw this exception.
* `<property-value>` is the value of the property, i.e. the folder name, which was invalid.

#### How to fix

Ensure that the folder name provided is a valid folder.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None
