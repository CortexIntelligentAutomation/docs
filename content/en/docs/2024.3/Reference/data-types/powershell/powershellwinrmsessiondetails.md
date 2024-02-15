---
title: "PowerShellWinRmSessionDetails"
linkTitle: "PowerShellWinRmSessionDetails"
description: "The data type representing configuration for executing powershell scripts on a specified host, via WinRm."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.PowerShell.PowerShellWinRmSessionDetails)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

The data type representing configuration for executing powershell scripts on a specified host, via WinRm.

| | |
|-|-|
| **Category:**          | Data |
| **Name:**              | `PowerShellWinRmSessionDetails` |
| **Full Name:**         | `Cortex.DataTypes.PowerShell.PowerShellWinRmSessionDetails` |
| **Alias:**             | N/A |
| **Description:**       | The data type representing configuration for executing powershell scripts on a specified host, via WinRm. |
| **Default Value:**     | `null` |
| **Can be used as:**    | `PowerShellSessionDetails`, `Object`, `dynamic` |
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

### Most Common PowerShellWinRmSessionDetails Data Types

Any of the following data types can be used where a `PowerShellWinRmSessionDetails` is required:

* [PowerShellWinRmSessionDetails][]

### Create a PowerShellWinRmSessionDetails

For some of the ways that a `PowerShellWinRmSessionDetails` can be created, please see each of the `PowerShellWinRmSessionDetails` data types:

* [PowerShellWinRmSessionDetails][]

### Convert PowerShellWinRmSessionDetails to Text

For some of the ways that a `PowerShellWinRmSessionDetails` can be converted to text, please see each of the `PowerShellWinRmSessionDetails` data types:

* [PowerShellWinRmSessionDetails][]

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `PowerShellWinRmSessionDetails`.
* The Literal Editor is available for [Input][] properties where the data type is `PowerShellWinRmSessionDetails`.
* The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `PowerShellWinRmSessionDetails`.

### Known limitations

None

## See Also

### Related Data Types

* [ServerDetails][]
* [UserCredentials][]
* [PowerShellSessionDetails][]

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
