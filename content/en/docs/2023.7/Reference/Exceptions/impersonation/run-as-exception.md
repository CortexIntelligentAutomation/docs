---
title: "RunAsException"
linkTitle: "RunAsException"
description: "The exception thrown when the provided UserCredentials has an invalid domain, username or password."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Impersonation.RunAsException)</p>

## Description

The exception thrown when the provided [UserCredentials][] is invalid.

## Reasons

### Invalid Domain, Username Or Password {#1326}

The [Run As Property][] has been provided a [UserCredentials][] object that has an invalid domain, username or password.

#### Message Format

The format of the [Message][] is as follows:

```json
"Impersonation failed with Win32 error code: <error-code>, see the inner exception for more information.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<error-code>` is the native error code present in the [Win32Exception][] inner-exception.

#### How to fix

Make sure that the provided domain, username and password in the [UserCredentials][] are correct.

## Properties

### Exception Type

The type of the exception (i.e. `RunAsException`).

|           |            |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

|           |            |
|-----------|------------|
| Data Type | [String][] |

### Error Code

The error code for the exception, which is used to indicate the reason that the exception occurred.

For `RunAsException` there are the following error codes:

- [1326][InvalidCredentialsProvided] - indicates that the domain, user name or password is incorrect.

| | |
|-----------|---------------------------|
| Data Type | [Int32][] |

### Inner Exception

The Inner Exception is the [Exception][] instance that caused the current [Exception][], and contains specific details about the problem.

|           |            |
|-----------|------------|
| Data Type | [Win32Exception][] |

### Help Link

The URL for the relevant section of this exception's help page.

|           |            |
|-----------|------------|
| Data Type | [String][] |

## See Also

### Related Data Types

* [UserCredentials][]
* [String][]
* [Int32][]

### Related Concepts

* [Exceptions][]
* [Common Properties][]

### Related Blocks

* [All Blocks][]

Except:

* [End Flow][]
* [End Workspace][]
* [Handle Flow Exception][]
* [Start Flow][]
* [Wait For Duration][]

### External Documentation

* [Win32Exception][]

[Message]: {{< ref "#message" >}}
[InvalidCredentialsProvided]: {{< ref "#1326">}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[FlowException]: {{< url path="Cortex.Reference.Exceptions.Flows.FlowException.MainDoc" >}}
[RunAsException]: {{< url path="Cortex.Reference.Exceptions.Impersonation.RunAsException.MainDoc" >}}
[Win32Exception]: {{< url path="MSDocs.DotNet.Api.System.ComponentModel.Win32Exception" >}}
[Common Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.MainDoc" >}}
[Run As Property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.RunAsProperty" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}

[Scopes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.MainDoc" >}}

[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}
