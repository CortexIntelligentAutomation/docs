---
title: "Overview"
linkTitle: "Overview"
description: "Summary and anatomy of the Right Panel."
weight: 10
---

# {{% param title %}}

## Summary

The Right Panel consists of multiple tabs to allow viewing and editing of [block properties][What is a Block Property?], as well as viewing [variable][What is a Variable?] values, details of any [exceptions][What is an Exception?], and setting [input variables][Flow Input Variable] used when debugging a [flow][What is a Flow?].

## Anatomy

{{< figure src="/images/Flow Editor - Right Panel.png" title="Right Panel" >}}

* In `View`, `Edit` or `Debug Edit` mode, the following tabs are available:

  * Properties (default) - displays the [Property Editor][] showing the properties of the currently selected [block][What is a Block?].
  * Settings - displays the [Settings Editor][] to set the values of the input variables used when debugging the flow.

* In `Debug` mode, the following tabs are available:

  * Variables (default) - displays the [Execution Viewer][] showing the values of the [variables][What is a Variable?] when debugging the flow.
  * Exceptions - displays the [Exceptions Viewer][] showing details of any exceptions when debugging the flow.
  * Settings - displays the [Settings Editor][] to set the values of the input variables used when debugging the flow.

## See Also

### Related Concepts

* [Blocks][]
* [Exceptions][]
* [Executions][]
* [Flows][]
* [Variables][]

### Related Tutorials

* [Right Panel][Right Panel tutorial]

[Right Panel tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.RightPanel.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Exceptions Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExceptionsViewer" >}}
[Execution Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Flow Input Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Property Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.PropertyEditor" >}}
[Settings Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.SettingsEditor" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Block Property?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
