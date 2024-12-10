---
title: "PowerShellWinRmSessionDetails"
linkTitle: "PowerShellWinRmSessionDetails"
description: "Used to represent configuration for executing PowerShell commands or scripts on a specified host, via WinRm."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.PowerShell.PowerShellWinRmSessionDetails)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The `PowerShellWinRmSessionDetails` data type is used to represent configuration for executing PowerShell commands or scripts on a specified host, via WinRm.

| | |
|-|-|
| **Category:**          | PowerShell |
| **Name:**              | `PowerShellWinRmSessionDetails` |
| **Full Name:**         | `Cortex.DataTypes.PowerShell.PowerShellWinRmSessionDetails` |
| **Alias:**             | N/A |
| **Description:**       | Used to represent configuration for executing PowerShell commands or scripts on a specified host, via WinRm. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `PowerShellWinRmSessionDetails`, `PowerShellSessionDetails`, `Object`, `dynamic` |
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
    "Host": "",
    "Port": 465,
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

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `PowerShellWinRmSessionDetails`.
* The Literal Editor is available for [Input][] properties where the data type is `PowerShellWinRmSessionDetails`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `PowerShellWinRmSessionDetails`.

### Known limitations

None

## See Also

### Related Data Types

* [PowerShellSessionDetails][]
* [ServerDetails][]
* [String][]
* [UserCredentials][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Domain]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[PowerShellSessionDetails]: {{< url path="Cortex.Reference.DataTypes.PowerShell.PowerShellSessionDetails.MainDoc" >}}
