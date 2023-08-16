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
- [Run As Property][]
- [Block Timeout Property][]

## Description Property

The Description property is available on all [blocks][All Blocks]. It defaults to the name of the block and can be used to describe the action or function the block is performing. Any text entered in the Description property is displayed next to the [block's][block] icon on the [workspace][].

{{< figure src="/images/set-variable/set-variable-description.svg" >}}

## Run As Property

The Run As property is an [advanced property][Advanced Properties] available on most [blocks][All Blocks]. It is used to execute the [block][] as a specified user (using a [UserCredentials][]), honouring the user's permissions and other user settings. This is required if an action needs to be performed as a particular user (e.g. reading/writing files that only that user has access to).

Once the [block][] has finished executing, the next block to execute will run as:

- The user specified in it's Run As property, if set.
- Otherwise, the user specified in it's closest ancestor block with the Run As property set.
- Otherwise, the user the [Execution Service][] is running as; typically this is Network Service.

The default value of `null` also results in the [block][] executing as the user the [Execution Service][] is running as.

If [UserCredentials][] has an invalid domain, username or password, a [RunAsException][] will be thrown when the [block][] is executed.

If [UserCredentials][] has a `null` username or password, a [PropertyNullException][] will be thrown when the [block][] is executed.

{{< figure src="/images/set-variable/set-variable-run-as.svg" >}}

## Block Timeout Property

The Block Timeout property is an [advanced property][Advanced Properties] available on most [blocks][All Blocks]. It is used to set a duration of time (using a [TimePeriod][]) that the [block][] must complete its action within, otherwise a [BlockTimeoutException][] is raised.

The default value of `null`, or a [TimePeriod][] of `0` seconds, indicates that there is no timeout.

Negative [TimePeriod][] values will cause an [InvalidBlockTimeoutException][] to be raised when the block is executed.

{{< figure src="/images/set-variable/set-variable-block-timeout.svg" >}}

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
[Execution Service]: {{< url path="Cortex.Guides.CortexInnovation.ExecutionApplication.Services.ExecutionService.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[TimePeriod]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimePeriod.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}

[BlockTimeoutException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.BlockTimeoutException.MainDoc" >}}
[InvalidBlockTimeoutException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidBlockTimeoutException.MainDoc" >}}

[RunAsException]: {{< url path="Cortex.Reference.Exceptions.Impersonation.RunAsException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
