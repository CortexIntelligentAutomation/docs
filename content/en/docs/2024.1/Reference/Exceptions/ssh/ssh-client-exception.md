---
title: "SshClientException"
linkTitle: "SshClientException"
description: "The exception thrown when an error occurs from the Sshclient object."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Ssh.SshClientException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

Exception thrown when an error occurs from the Sshclient object.

There are multiple reasons that this exception can be thrown:

* [Invalid Connection][SshSessionDetails]
* [Host Disconnected][SshSessionDetails.Host]
* [Invalid Configuration Settings][ConfigurationSettings]

## Reasons

### Invalid Connection {#sshsessiondetails}

The `SessionDetails` provided is invalid (e.g. an invalid hostname was provided, an invalid port was provided, the connection timed out, etc).

#### Message Format

The format of the exception message is as follows:

```json
"A connection could not be established between the server where the Cortex Execution Service is running (\"<hostname>\") and the host.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [SshSessionDetails][SshSessionDetails DataType] for more information

#### How to fix

Ensure that the `SessionDetails` provided is valid; see [SshSessionDetails][SshSessionDetails DataType] for more information.

### Host Disconnected {#sshsessiondetailshost}

The connection to the host server has been lost, so the session has closed.

#### Message Format

The format of the exception message is as follows:

```json
"The 'Host' \"<hostname>\" has closed the session. Any subsequent commands run on the session will result in a new one being created.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [SshSessionDetails][SshSessionDetails DataType] for more information

#### How to fix

Ensure that the connection to the host server is functional, and that no commands to close the old session have been executed (e.g. `exit`, which closes the session).

### Invalid Configuration Settings {#configurationsettings}

#### Message Format

The format of the exception message is as follows:

```json
"'Configuration Settings' contains one or more invalid settings.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the errors which caused this exception to be thrown, seen in the `InvalidSettings` property of this exception, are fixed.

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

[IPWorksSSHClientErrors]: {{<url path="IPWorks.SshErrors">}}