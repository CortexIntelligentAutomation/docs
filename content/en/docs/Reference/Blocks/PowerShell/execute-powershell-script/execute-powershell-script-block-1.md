---
title: "Execute PowerShell Script"
linkTitle: "Execute PowerShell Script"
description: "Executes a PowerShell script on the specified host."
---

{{< figure src="/blocks/powershell-execute-powershell-script-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.PowerShell.ExecutePowerShellScript.ExecutePowerShellScriptBlock`1)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future; this will include further examples and remarks.{{% /alert %}}

## Description

Connects to a host (e.g. SQL Server) using the specified [PowerShell Session Details][PowerShell Session Details Property], and executes a [Script][Script Property], returning the [Outputs][Outputs Property] and [Records][Records Property].

[Close Session][Close Session Property] can be specified to choose whether the session on the host is closed or is kept open for use on subsequent Execute PowerShell Script blocks.

## Examples

### Execute a Script using PowerShellWinRMSessionDetails

This example will execute a script on the server with the following details:

- Host -  `"host.domain.com"`
- Port -  `5986`
- UseSsl - `true`

The host can be connected to with the following credentials:

- Domain - `"domain.com"`
- Username - `"username"`
- Password - `"password"`

The server that the script will be executed on contains a text file in the following location `C:\Folder\Example.txt`, the file contains the following text before the script is executed:

`"This is the content of the file located on the host the script is running on."`

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Script][Script Property] | `($)Script` with value `"Get-Content \"C:\\Folder\\Example.txt\""` | `($)Script` is a variable of type [String][] |
| [Parameters][Parameters Property] | `($)Parameters` with no value |  `($)Parameters` is a variable of type [Dictionary][]&lt;[String][], [dynamic][]&gt; |
| [PowerShell Session Details][PowerShell Session Details Property] | `($)PowerShellSessionDetails` with value `{"ServerDetails": {"Host": "host.domain.com", "Port": 5986, "UseSsl": "true"}, "Credentials": {"Domain": "domain.com", "Username": "username", "Password": "encryptedPassword"}}`<br><br>In this example `($)PowerShellSessionDetails` has been set up using the following [Expression][]:<br><br> `new PowerShellWinRMSessionDetails(serverDetails: new ServerDetails("host.domain.com", 5986, true), credentials: new UserCredentials("domain.com", "username", "encryptedPassword"))` | `($)Credentials` is a variable of type [PowerShellWinRMSessionDetails][]<br><br>The [Password][UserCredentials Password] property within [UserCredentials][] of the [PowerShellWinRMSessionDetails][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession`, with value `true` | `($)CloseSession` is a variable of type [Boolean][] |
| [Outputs][Outputs Property] | `($)Outputs`, with no value | `($)Outputs` will be set to the type [IList][]&lt;[dynamic][]&gt; |
| [Records][Records Property] | `($)Records`, with no value | `($)Records` will be set to the type [Records][] |

#### Result

Running the [Script][Script Property] results in the variable `($)Outputs` being updated to the following:

```json
[
    "This is the content of the file located on the host the script is running on."
]
```

It also results in the variable `($)Records` being updated to the following:

```json
{
    "ErrorRecords": [],
    "WarningRecords": [],
    "DebugRecords": [],
    "ProgressRecords": [],
    "VerboseRecords": [],
    "InformationRecords": []
}
```

After the [Script][Script Property] has been executed, the session will be closed, for more information see [Closing Sessions][].

***

### Execute a Script with Parameters using PowerShellWinRMSessionDetails

This example will execute a script on the server with the following details:

- Host -  `"host.domain.com"`
- Port -  `5986`
- UseSsl - `true`

The host can be connected to with the following credentials:

- Domain - `"domain.com"`
- Username - `"username"`
- Password - `"password"`

The server that the script will be executed on contains a text file in the following location `C:\Folder\Example.txt`, the file contains the following text before the script is executed:

`"This is the content of the file located on the host the script is running on."`

In this example assume the following variables have been set before the script has been executed:

- `($)FilePath` with the value `"Get-Content \"C:\\Folder\\Example.txt\""`

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Script][Script Property] | `($)Script` with value `"Get-Content $FilePath"` | `($)Script` is a variable of type [String][] |
| [Parameters][Parameters Property] | `($)Parameters` with value `{"FilePath": ($)FilePath"}` |  `($)Parameters` is a variable of type [Dictionary][]&lt;[String][], [dynamic][]&gt; |
| [PowerShell Session Details][PowerShell Session Details Property] | `($)PowerShellSessionDetails` with value `{"ServerDetails": {"Host": "host.domain.com", "Port": 5986, "UseSsl": "true"}, "Credentials": {"Domain": "domain.com", "Username": "username", "Password": "encryptedPassword"}}`<br><br>In this example `($)PowerShellSessionDetails` has been set up using the following [Expression][]:<br><br> `new PowerShellWinRMSessionDetails(serverDetails: new ServerDetails("host.domain.com", 5986, true), credentials: new UserCredentials("domain.com", "username", "encryptedPassword"))` | `($)Credentials` is a variable of type [PowerShellWinRMSessionDetails][]<br><br>The [Password][UserCredentials Password] property within [UserCredentials][] of the [PowerShellWinRMSessionDetails][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession`, with value `true` | `($)CloseSession` is a variable of type [Boolean][] |
| [Outputs][Outputs Property] | `($)Outputs`, with no value | `($)Outputs` will be set to the type [IList][]&lt;[dynamic][]&gt; |
| [Records][Records Property] | `($)Records`, with no value | `($)Records` will be set to the type [Records][] |

#### Result

Running the [Script][Script Property] results in the variable `($)Outputs` being updated to the following:

```json
[
    "This is the content of the file located on the host the script is running on."
]
```

It also results in the variable `($)Records` being updated to the following:

```json
{
    "ErrorRecords": [],
    "WarningRecords": [],
    "DebugRecords": [],
    "ProgressRecords": [],
    "VerboseRecords": [],
    "InformationRecords": []
}
```

After the [Script][Script Property] has been executed, the session will be closed, for more information see [Closing Sessions][].

***

### Execute a Script that returns Records using PowerShellWinRMSessionDetails

This example will execute a script on the server with the following details:

- Host -  `"host.domain.com"`
- Port -  `5986`
- UseSsl - `true`

The host can be connected to with the following credentials:

- Domain - `"domain.com"`
- Username - `"username"`
- Password - `"password"`

The server that the script will be executed on contains a text file in the following location `C:\Folder\Example.txt`, the file contains the following text before the script is executed:

`"This is the content of the file located on the host the script is running on."`

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Script][Script Property] | `($)Script` with value `$@"Get-Content \"C:\\Folder\\Example.txt\"; $DebugPreference = 'Continue'; Write-Warning 'Warning'; Write-Debug 'Debug'; Write-Information 'Information'; Write-Verbose 'Verbose' -Verbose; Get-Error"` | `($)Script` is a variable of type [String][] |
| [Parameters][Parameters Property] | `($)Parameters` with no value |  `($)Parameters` is a variable of type [Dictionary][]&lt;[String][], [dynamic][]&gt; |
| [PowerShell Session Details][PowerShell Session Details Property] | `($)PowerShellSessionDetails` with value `{"ServerDetails": {"Host": "host.domain.com", "Port": 5986, "UseSsl": "true"}, "Credentials": {"Domain": "domain.com", "Username": "username", "Password": "encryptedPassword"}}`<br><br>In this example `($)PowerShellSessionDetails` has been set up using the following [Expression][]:<br><br> `new PowerShellWinRMSessionDetails(serverDetails: new ServerDetails("host.domain.com", 5986, true), credentials: new UserCredentials("domain.com", "username", "encryptedPassword"))` | `($)Credentials` is a variable of type [PowerShellWinRMSessionDetails][]<br><br>The [Password][UserCredentials Password] property within [UserCredentials][] of the [PowerShellWinRMSessionDetails][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession`, with value `true` | `($)CloseSession` is a variable of type [Boolean][] |
| [Outputs][Outputs Property] | `($)Outputs`, with no value | `($)Outputs` will be set to the type [IList][]&lt;[dynamic][]&gt; |
| [Records][Records Property] | `($)Records`, with no value | `($)Records` will be set to the type [Records][] |

#### Result

Running the [Script][Script Property] results in the variable `($)Outputs` being updated to the following:

```json
[
    "This is the content of the file located on the host the script is running on."
]
```

It also results in the variable `($)Records` being updated to the following:

```json
{
    "ErrorRecords": [
        "The term 'Get-Error' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again."
    ],
    "WarningRecords": [
        "Warning"
    ],
    "DebugRecords": [
        "Debug"
    ],
    "ProgressRecords": [
        "parent = -1 id = 0 act = Preparing modules for first use. stat =   cur =  pct = -1 sec = -1 type = Completed"
    ],
    "VerboseRecords": [
        "Verbose"
    ],
    "InformationRecords": [
        "Information"
    ]
}
```

After the [Script][Script Property] has been executed, the session will be closed, for more information see [Closing Sessions][].

***

## Properties

### Script

The [Script][Script Property] which will be executed on the [Host][ServerDetails Host] provided within the [PowerShell Session Details][PowerShell Session Details Property], this can be a script, a file path of a script on the host, or a cmdlet.

Note that to execute a script using its file path, the file path must accessible to the [Host][ServerDetails Host].

|||
|----------|----------|
| Data Type | [EncryptableText][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `$@""` |

### Parameters

The parameters to be passed into the [Script][Script Property].

|||
|----------|----------|
| Data Type | [IDictionary][]&lt;[String][], [dynamic][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | No value (defaults to `null`) |

### PowerShell Session Details

The [PowerShell Session Details][PowerShell Session Details Property] object that includes all of the information required to connect and maintain a PowerShell Session. This property contains all of the information in relation to the server the script will be executed on, these are:

- [ServerDetails][PowerShellSessionDetails Server Details]
- [Credentials][]
- [PsConfiguration][]

|||
|----------|----------|
| Data Type | [PowerShellSessionDetails][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)PowerShellSessionDetails` with no value |

### Close Session

[Close Session][Close Session Property] can be specified to choose whether the session on the [Host][ServerDetails Host] is closed or is kept open for use on subsequent Execute PowerShell Script blocks, this defaults to `false` if left blank, please see [Closing Sessions][] for more information.

|||
|----------|----------|
| Data Type | [Boolean][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value   | [Boolean][] with value `true` |

### Outputs

IList&lt;dynamic&gt; of outputs from the execution of the [Script][Script Property].

|||
|----------|----------|
| Data Type | [IList][]&lt;[dynamic][]&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Outputs` with no value |

### Records

The Records object that includes the error, warning, debug, progress, verbose, and information records from the execution of the script or cmdlet.

|||
|----------|----------|
| Data Type | [Records][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Records` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name                                 | Description |
|--------------------------------------|-------------|
| [PSRemotingException][] | Thrown when the [Host][ServerDetails Host] within the [PowerShell Session Details][PowerShell Session Details Property] is invalid (e.g. host does not exist or invalid characters/whitespace). |
| | Thrown when the [Host][ServerDetails Host] within the [PowerShell Session Details][PowerShell Session Details Property] does not have PSRemoting configured correctly. |
| | Thrown when the [Host][ServerDetails Host] within the [PowerShell Session Details][PowerShell Session Details Property] is a host name; is being accessed through a private or domain network, and Kerberos authentication is disabled on the host's WinRM service or the server's WinRM client. |
| | Thrown when the [Host][ServerDetails Host] within the [PowerShell Session Details][PowerShell Session Details Property] is a host name; is being accessed through a public network, and its name is not on the server's WinRM TrustedHosts list. |
| | Thrown when the [Host][ServerDetails Host] within the [PowerShell Session Details][PowerShell Session Details Property] is an IP Address; is being accessed through any network (i.e. public, private or domain), and is not on the server's WinRM TrustedHosts list. |
| | Thrown when the [Host][ServerDetails Host] within the [PowerShell Session Details][PowerShell Session Details Property] is an IP Address being accessed through any network (i.e. public, private or domain) or a host name being accessed through a public network, and Negotiate authentication is disabled on the host's WinRM service. |
| | Thrown when the [Port][ServerDetails Port] within the [PowerShell Session Details][PowerShell Session Details Property] is invalid. |
| | Thrown when the [UseSsl][ServerDetails UseSsl] is `false` and the specified [Port][ServerDetails Port] within the [PowerShell Session Details][PowerShell Session Details Property] is not configured for HTTP protocols. |
| | Thrown when the [UseSsl][ServerDetails UseSsl] is `true` and the specified [Port][ServerDetails Port] within the [PowerShell Session Details][PowerShell Session Details Property] is not configured for HTTPS protocols. |
| | Thrown when the [UseSsl][ServerDetails UseSsl] is `true` and the host does not have a valid certificate configured. |
| | Thrown when the [Domain][UserCredentials Domain], [Username][UserCredentials Username], or [Password][UserCredentials Password] in the [Credentials][] within the [PowerShell Session Details][PowerShell Session Details Property] is invalid. |
| | Thrown when the [Domain][UserCredentials Domain] in the [Credentials][] within the [PowerShell Session Details][PowerShell Session Details Property] is `null` or empty and is required. |
| | Thrown when the user does not have the correct user permissions to execute PowerShell scripts or cmdlets on the [Host][ServerDetails Host]. |
| | Thrown when the [PsConfiguration][] within the [PowerShell Session Details][PowerShell Session Details Property] is invalid or is not configured on the [Host][ServerDetails Host]. |
| [PSException][] | Thrown when the [Script][Script Property] contains any unexpected or invalid tokens. |
| | Thrown when the [Script][Script Property] is missing any necessary tokens. |
| [PropertyNullException][] | Thrown when the [Script][Script Property] is `null`. |
| | Thrown when [PowerShell Session Details][PowerShell Session Details Property] is `null`. |
| | Thrown when the [ServerDetails][] within the [PowerShell Session Details][PowerShell Session Details Property] is `null`. |
| | Thrown when the [Host][ServerDetails Host] within the [ServerDetails][] within the [PowerShell Session Details][PowerShell Session Details Property] is `null`. |
| | Thrown when the [Credentials][] within the [PowerShell Session Details][PowerShell Session Details Property] is `null`. |
| | Thrown when the [Username][UserCredentials Username] in the [Credentials][] within the [PowerShell Session Details][PowerShell Session Details Property] is `null`. |
| | Thrown when the [Password][UserCredentials Password] in the [Credentials][] within the [PowerShell Session Details][PowerShell Session Details Property] is `null`. |
| [PropertyEmptyException][] | Thrown when [Script][Script Property] is empty. |
| | Thrown when the [Host][ServerDetails Host] within the [ServerDetails][] within the [PowerShell Session Details][PowerShell Session Details Property] is empty. |
| | Thrown when the [Username][UserCredentials Username] in the [Credentials][] within the [PowerShell Session Details][PowerShell Session Details Property] is empty. |
| | Thrown when the [Password][UserCredentials Password] in the [Credentials][] within the [PowerShell Session Details][PowerShell Session Details Property] is empty. |
| [PropertyEmptyException][] | Thrown when the [Port][ServerDetails Port] within the [ServerDetails][] within the [PowerShell Session Details][PowerShell Session Details Property] is below `1` or above `65535`. |

## Remarks

### Opening Sessions

The Execute PowerShell Script block automatically handles creating and opening session for the specified [PowerShell Session Details][PowerShell Session Details Property] using the following rules:

- If a session does not exist, a new session will be created, opened and used when the block runs.
- If a session already exists but is closed, the session will be opened and used when the block runs.
- If a session already exists and is open, the session will used the block runs.

For information on how to explicitly close a session, please see [Closing Sessions][].

### Closing Sessions

Sessions can be explicitly closed by setting [Close Session][Close Session Property] to `true`. This causes the session to be closed after the [Script][Script Property] has been executed.

For information on how to open a session, please see [Opening Sessions][].

### Known Limitations

None

[Script Property]: {{< ref "#script" >}}
[PowerShell Session Details Property]: {{< ref "#powershell-session-details" >}}
[Parameters Property]: {{< ref "#parameters" >}}
[Close Session Property]: {{< ref "#close-session" >}}
[Outputs Property]: {{< ref "#outputs" >}}
[Records Property]: {{< ref "#records" >}}

[Opening Sessions]: {{< ref "#opening-sessions" >}}
[Closing Sessions]: {{< ref "#closing-sessions" >}}

[IList]: {{< url "Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IDictionary]: {{< url "Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[EncryptableText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url "Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[ServerDetails]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[ServerDetails Host]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[ServerDetails Port]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[ServerDetails UseSsl]: {{< url "Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}

[UserCredentials]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[UserCredentials Domain]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[UserCredentials Username]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[UserCredentials Password]: {{< url "Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[PowerShellWinRMSessionDetails]: {{< url "Cortex.Reference.DataTypes.PowerShell.PowerShellWinRMSessionDetails.MainDoc" >}}
[Records]: {{< url "Cortex.Reference.DataTypes.PowerShell.Records.MainDoc" >}}

[PowerShellSessionDetails]: {{< url "Cortex.Reference.DataTypes.PowerShell.PowerShellSessionDetails.MainDoc" >}}
[PowerShellSessionDetails Server Details]: {{< url "Cortex.Reference.DataTypes.PowerShell.PowerShellSessionDetails.ServerDetails" >}}
[Credentials]: {{< url "Cortex.Reference.DataTypes.PowerShell.PowerShellSessionDetails.Credentials" >}}
[PsConfiguration]: {{< url "Cortex.Reference.DataTypes.PowerShell.PowerShellSessionDetails.PsConfiguration" >}}

[PSException]: {{< url "Cortex.Reference.Exceptions.PowerShell.PSException.MainDoc" >}}
[PSRemotingException]: {{< url "Cortex.Reference.Exceptions.PowerShell.PSRemotingException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}

[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.UsingVariables.MainDoc" >}}
[Expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
