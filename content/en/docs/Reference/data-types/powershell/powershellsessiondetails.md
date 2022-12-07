---
title: "PowerShellSessionDetails"
linkTitle: "PowerShellSessionDetails"
description: "Any data type representing configuration for executing powershell scripts on a specified host."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.PowerShell.PowerShellSessionDetails)</p>

<img src="/images/work-in-progress.jpg">

## Summary

Any data type representing configuration for executing powershell scripts on a specified host.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `PowerShellSessionDetails` |
| **Full Name:**         | `Cortex.DataTypes.PowerShell.PowerShellSessionDetails` |
| **Alias:**             | N/A |
| **Description:**       | Any data type representing configuration for executing powershell scripts on a specified host. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `Object`, `dynamic` |
| **Can be cast to:**    |  N/A |

## Properties

### ServerDetails

The ServerDetails are used to configure the [Host][] and [Port][] to connect to and whether or not to [UseSsl][].

| | |
|--------------------|---------------------------|
| Data Type | [ServerDetails][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [ServerDetails][] with value shown below: |

```json
{ 
    "Host": "localhost",
    "Port": 5986,
    "UseSsl": true
}
```

### Credentials

The Credentials are used to configure the [Domain][], [Username][] and [Password][] used to connect to the host.

| | |
|--------------------|---------------------------|
| Data Type | [UserCredentials][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [UserCredentials][] with value shown below: |

```json
{ 
    "Domain": "",
    "Username": "",
    "Password": ""
}
```

### PsConfiguration

The PsConfiguration controls the PowerShell configuration that will be used by the host.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `"Microsoft.PowerShell"`: |

## Remarks

### Create a PowerShellSessionDetails

TODO

### Convert PowerShellSessionDetails to Text

TODO

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `PowerShellSessionDetails`.
* The Literal Editor is available for [Input][] properties where the data type is `PowerShellSessionDetails`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `PowerShellSessionDetails`.

### Known limitations

None

## See Also

### Related Data Types

* [ServerDetails][]
* [UserCredentials][]
* [PowerShellWinRMSessionDetails][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[ServerDetails]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}

[UserCredentials]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Domain]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[Username]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[PowerShellWinRMSessionDetails]: {{< url "Cortex.Reference.DataTypes.PowerShell.PowerShellWinRMSessionDetails.MainDoc" >}}
