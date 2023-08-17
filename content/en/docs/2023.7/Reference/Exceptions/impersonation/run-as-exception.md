---
title: "RunAsException"
linkTitle: "RunAsException"
description: "Exception thrown when the provided UserCredentials has an invalid domain, username or password."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Impersonation.RunAsException)</p>

## Description

Exception thrown when the provided [UserCredentials][] is invalid.

## Reasons

### Invalid Domain, Username Or Password

This exception is thrown when RunAs property has been provided a [UserCredentials][] object that has an invalid domain, username or password.

#### Message Format

The format of the [Message][] is as follows:

```json
"Impersonation failed with Win32 error code: 1326, see the inner exception for more information.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Make sure the correct domain (if applicable), username and password are provided in the [UserCredentials][].

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

### Inner Exception

The Inner Exception property can be used to include another [Exception][] within the thrown exception (e.g. If the [RunAsException][] has been thrown as a result of handling another [Exception][], then the handled [Exception][] can be included within the [RunAsException][] to add traceability).

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

### Related Concepts

* [Exceptions][]
* [Scopes][]
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

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[FlowException]: {{< url path="Cortex.Reference.Exceptions.Flows.FlowException.MainDoc" >}}
[RunAsException]: {{< url path="Cortex.Reference.Exceptions.Impersonation.RunAsException.MainDoc" >}}
[Win32Exception]: {{< url path="MSDocs.DotNet.Api.System.ComponentModel.Win32Exception" >}}
[Common Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}

[Scopes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.MainDoc" >}}

[End Flow]: {{< url path="Cortex.Reference.Blocks.Flows.EndFlow.EndFlow.MainDoc" >}}
[End Workspace]: {{< url path="Cortex.Reference.Blocks.Workspaces.EndWorkspace.EndWorkspace.MainDoc" >}}
[Handle Flow Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleFlow.HandleFlowException.MainDoc" >}}
[Start Flow]: {{< url path="Cortex.Reference.Blocks.Flows.StartFlow.StartFlow.MainDoc" >}}
[Wait For Duration]: {{< url path="Cortex.Reference.Blocks.Schedules.WaitFor.WaitForDuration.MainDoc" >}}
