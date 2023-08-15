---
title: "Common Properties"
linkTitle: "Common Properties"
description: "Information regarding properties that are common to all or most blocks."
weight: 200
---

# {{% param title %}}

## Summary

There are a number of properties that are common across all or most [blocks][All Blocks].

These properties include:

- [Description Property][]
- [Block Timeout Property][]
- [Run As Property][]

## Description Property

The Description property is available on all [blocks][All Blocks]. It defaults to the name of the block and can be used to describe the action or function the block is performing. Any text entered in the Description property is displayed next to the [block's][block] icon on the [workspace][].

{{< figure src="/images/set-variable/set-variable-description.svg" >}}

## Block Timeout Property

The Block Timeout property is an [advanced property][Advanced Properties] available on most [blocks][All Blocks]. It is used to set a duration of time (using a [TimePeriod][]) that the [block][] must complete its action within, otherwise a [BlockTimeoutException][] is raised.

The default value of `null`, or a [TimePeriod][] of `0` seconds, indicates that there is no timeout.

Negative [TimePeriod][] values will cause an [InvalidBlockTimeoutException][] to be raised when the block is executed.

{{< figure src="/images/set-variable/set-variable-block-timeout.svg" >}}

## Run As Property

The Run As property is an [advanced property][Advanced Properties] available on most [blocks][All Blocks]. It is used to impersonate a user (using a [UserCredentials][]) for the execution of that [block][]. This will replicate the impersonated user's permissions and other user settings.

The default value of `null`, indicates that no user is impersonated.

When the Run As property is set on a [block][] that has a parent [block][] (e.g. Workspace or Run Flow blocks) with the Run As property set too, then the child [block][] Run As property will be used instead of the parents. If no impersonation is set on a [block][], then it will use the next parent in the stack with impersonation present.

When using an invalid domain, username or password, this will cause a [RunAsException][] to be raised when the [block][] is executed.
If the username or password provided is `null`, this will cause a [PropertyNullException][] to be raised when the [block][] is executed.

{{< figure src="/images/set-variable/set-variable-run-as.svg" >}}

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

- [Workspaces][]
- [Blocks][]
- [Advanced Properties][]
- [Exceptions][]

### Related Blocks

- [All Blocks][]

### Related Data Types

- [String][]
- [TimePeriod][]

### Related Exceptions

- [BlockTimeoutException][]
- [InvalidBlockTimeoutException][]
- [RunAsException][]
- [PropertyNullException][]

### External Documentation

None

[Description Property]: {{< ref "#description-property" >}}
[Block Timeout Property]: {{< ref "#block-timeout-property" >}}
[Run As Property]: {{< ref "#run-as-property" >}}

[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Advanced Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}

[BlockTimeoutException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.BlockTimeoutException.MainDoc" >}}
[InvalidBlockTimeoutException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidBlockTimeoutException.MainDoc" >}}

[RunAsException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidBlockTimeoutException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidBlockTimeoutException.MainDoc" >}}
