---
title: "SshClientException"
linkTitle: "SshClientException"
description: "The exception thrown when an SSH Client (e.g. Execute Ssh Command Block) is incorrectly configured."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Ssh.SshClientException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an SSH Client (e.g. [Execute Ssh Command Block][]) is incorrectly configured.

There are multiple reasons that this exception can be thrown:

* [Host Disconnected][SshSessionDetails.Host]
* [Invalid Configuration Settings][ConfigurationSettings]
* [Invalid Connection][SshSessionDetails]

## Reasons

### Host Disconnected {#sshsessiondetailshost}

The connection to the host server has been lost, so the session has closed.

#### Message Format

The format of the exception message is as follows:

```json
"The 'Host' \"<hostname-value>\" has closed the session. Any subsequent commands run on the session will result in a new one being created.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][SshSessionDetails Host] property provided in the session details; see [SshSessionDetails][SshSessionDetails DataType] for more information

#### How to fix

Ensure that the connection to the host server is functional, and that no commands to close the old session have been executed (e.g. `exit`).

### Invalid Configuration Settings {#configurationsettings}

The [Configuration Settings][SshSessionDetailsConfigurationSettings] provided were invalid (e.g. an invalid setting key was provided, a setting was provided an invalid value, etc).

#### Message Format

The format of the exception message is as follows:

```json
"'Configuration Settings' contains one or more invalid settings.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Fix the errors which caused this exception to be thrown, which are seen in the `InvalidSettings` property of this exception.

### Invalid Connection {#sshsessiondetails}

The [Ssh Session Details][SshSessionDetailsSshSessionDetails] provided is invalid (e.g. an invalid hostname was provided, an invalid port was provided, the connection timed out, etc).

#### Message Format

The format of the exception message is as follows:

```json
"A connection could not be established between the server where the Cortex Execution Service is running (\"<hostname-value>\") and the host.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][SshSessionDetails Host] property provided in the session details; see [SshSessionDetails][SshSessionDetails DataType] for more information

#### How to fix

Ensure that the [Ssh Session Details][SshSessionDetailsSshSessionDetails] provided are valid; see [SshSessionDetails][SshSessionDetails DataType] for more information.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[SshSessionDetails]: {{<ref "#sshsessiondetails">}}
[SshSessionDetails.Host]: {{<ref "#sshsessiondetailshost">}}
[ConfigurationSettings]: {{<ref "#configurationsettings">}}

[SshSessionDetails DataType]: {{<url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.MainDoc">}}
[SshSessionDetails Host]: {{<url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.Host">}}

[IPWorksSSHClientErrors]: {{<url path="IPWorks.SshErrors">}}

[Execute Ssh Command Block]: {{<url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock.MainDoc">}}
[SshSessionDetailsConfigurationSettings]: {{<url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock.ConfigurationSettings">}}
[SshSessionDetailsSshSessionDetails]: {{<url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock.SshSessionDetails">}}