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

There are multiple reasons that this exception can be thrown:

* [Invalid Script][]

## Reasons

### Invalid Script

The PowerShell script provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Invalid 'Script' provided. See the Data property for details on why the script failed to execute.
Please click the help link below for more information on how to fix this."
```

#### How to fix

Ensure that the PowerShell script provided is valid.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Invalid Script]: {{<ref "#invalid-script">}}

[MS PowerShell]: {{<url path="MSDocs.PowerShell.WhatIsPowerShell">}}
