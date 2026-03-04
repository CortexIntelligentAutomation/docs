---
title: "PSException"
linkTitle: "PSException"
description: "The exception thrown when a terminating error occurs while executing scripts over WinRM."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.PowerShell.PSException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a terminating error occurs while executing scripts over WinRM.

There is a single reason that this exception can be thrown:

* [Invalid Script][]

## Reasons

### Invalid Script {#invalidscript}

The PowerShell script provided is invalid (i.e. it contains unexpected or invalid tokens, or it is missing a necessary token).

#### Message Format

The format of the exception message is as follows:

```json
"Invalid 'Script' provided. See the Data property for details on why the script failed to execute.
Please click the help link below for more information on how to fix this."
```

#### How to fix

Fix the problems that caused the termination of the script during execution, as shown in the `Data` property under the `"Errors"` key.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Invalid Script]: {{<ref "#invalidscript">}}

[MS PowerShell]: {{<url path="MSDocs.PowerShell.WhatIsPowerShell">}}