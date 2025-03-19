---
title: "SshResponseException"
linkTitle: "SshResponseException"
description: "The exception thrown when an error occurs from the SSH response."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Ssh.SshResponseException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an error occurs from the SSH response.

There is a single reason that this exception can be thrown:

* [Invalid TerminalPrompt or Short Timeout][SshSessionDetails.TerminalPrompt]

## Reasons

### Invalid TerminalPrompt or Short Timeout {#sshsessiondetailsterminalprompt}

The [TerminalPrompt][SshSessionDetails TerminalPrompt] was not found in the response, or the timeout provided was too short to allow for the response to be returned.

#### Message Format

The format of the exception message is as follows:

```json
"The execution has timed-out because either the 'TerminalPrompt' was not found in the response or the timeout was too short to allow for the response to be returned.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the [TerminalPrompt][SshSessionDetails TerminalPrompt] in the [Ssh Session Details][SshSessionDetails] provided matches the terminal prompt on the host and that the `Timeout` in the [Configuration Settings][SshSessionDetailsConfigurationSettings] provided is long enough for a response to be returned.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[SshSessionDetails.TerminalPrompt]: {{<ref "#sshsessiondetailsterminalprompt">}}

[SshSessionDetails]: {{<url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock.SshSessionDetails">}}
[SshSessionDetailsConfigurationSettings]: {{<url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock.ConfigurationSettings">}}
[SshSessionDetails TerminalPrompt]: {{<url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.TerminalPrompt">}}