---
title: "Messages Grid"
linkTitle: "Messages Grid"
description: "Identify issues preventing a flow from being debugged."
weight: 30
---

# {{% param title %}}

## Summary

The Messages Grid lists any [issues][What is a Message?] preventing a [flow][What is a Flow?] from being debugged.

## Anatomy

{{< figure src="/images/Flow Editor - Messages Grid.png" title="Messages Grid" >}}

The Messages Grid is automatically displayed if there are any issues when attempting to debug a flow; however, it may be manually opened, or closed any time by clicking the Open/Close handle or resized by dragging the handle up or down.

Each message identifies the location of the issue, a summary of the issue, and a detailed explanation.

## Actions

### Navigate to Issue

If the issue in the flow is related to a misconfigured block [property][What is a Block Property?], double-clicking on the message will automatically navigate to, and select, the [block][What is a Block?] with the issue, open the [Property Editor][] and select the property causing the issue.

See the [Messages Grid][Messages Grid tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* Issues with misconfigured input variables in the [Settings Editor][] cannot be navigated to.

## See Also

### Related Concepts

* [Blocks][]
* [Flows][]
* [Messages][]

### Related Tutorials

* [Messages Grid][Messages Grid tutorial]

[Messages Grid tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.MessagesGrid" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Messages]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.MainDoc" >}}
[Property Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.PropertyEditor" >}}
[Settings Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.SettingsEditor" >}}
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Block Property?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Message?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc" >}}
