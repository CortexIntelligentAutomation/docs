---
title: "SshResponseException"
linkTitle: "SshResponseException"
description: "The exception thrown when an error occurs from the Ssh response."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Ssh.SshResponseException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an error occurs from the Ssh response.

There are multiple reasons that this exception can be thrown:

* [SshSessionDetails.TerminalPrompt][]

## Reasons

### SshSessionDetails.TerminalPrompt

The `TerminalPrompt` was not found in the response, or the timeout provided was too short to allow for the response to be returned.

#### Message Format

The format of the exception message is as follows:

```json
"The execution has timed-out because either the 'TerminalPrompt' was not found in the response or the timeout was too short to allow for the response to be returned.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the `TerminalPrompt` in the [SshSessionDetails][] provided is valid regex and that the `Timeout` in the `ConfigurationSettings` provided is long enough for a response to be returned.

## Remarks

### Known Limitations

None

## See Also

### ExternalDocumentation

None

[SshSessionDetails.TerminalPrompt]: {{<ref "#sshsessiondetailsterminalprompt">}}

[SshSessionDetails]: {{<url path="Cortex.Reference.DataTypes.Ssh.SshSessionDetails.MainDoc">}}
