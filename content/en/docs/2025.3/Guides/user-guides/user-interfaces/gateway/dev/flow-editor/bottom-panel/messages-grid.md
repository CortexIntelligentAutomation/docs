---
title: "Messages Grid"
linkTitle: "Messages Grid"
description: "TODO"
weight: 40
---

# {{% param title %}}

## Summary

The Messages Grid lists any [issues][What is a Message?] preventing a [flow][What is a Flow?] from being debugged.

## Anatomy

{{< figure src="/images/Flow Editor - Messages Grid.png" title="Messages Grid" >}}

The Messages Grid is automatically displayed if there are any issues when attempting to debug a flow; however, it may be manually opened, or closed any time by clicking the Open/Close handle or resized by dragging the handle up or down.

Each error message identifies the location of the error, a summary of the error, and a detailed explanation.

## Actions

### Navigate to Property with Error

To locate the error in the flow, double-click on the error. This will automatically navigate to, and select, the [block][What is a Block?] containing the error. The [Property Editor][] will be opened and the [property][What is a Block Property?] containing the error will be selected.

See the [Messages Grid][Messages Grid tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The parser is only run when flows are executed. If the flow is not debugged in the Flow Editor before the flow is packaged and published, when an attempt is made to execute the published flow, the parser on the application node will run the parser and any errors raised will result in the flow execution failing and an error message returned in the REST response.

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
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Block Property?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Message?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.WhatIsAMessage.MainDoc" >}}
