---
title: "Overview"
linkTitle: "Overview"
description: "Summary and Anatomy of the Right Panel."
weight: 10
---

# {{% param title %}}

## Summary

The Right Panel consists of multiple tabs to allow the setting of values of [input variables][Flow Input Variable], viewing [block properties][What is a Block Property?] and the values of [variables][What is a Variable?] used when debugging.

## Anatomy

{{< figure src="/images/Flow Editor - Right Panel.png" title="Right Panel" >}}

* In `View`, `Edit` or `Debug Edit` mode, the following tabs are available:

  * Properties (default) - displays the [Property Editor][] showing the [properties][What is a Block Property?] of the currently selected [block][What is a Block?].
  * Settings - displays the [Settings Editor][] to set the values of the [input variables][Flow Input Variable] used when debugging the [flow][What is a Flow?].

* In `Debug` mode, the following tabs are available:

  * Variables (default) - displays the [Execution Viewer][] showing the values of the [variables][What is a Variable?] when debugging the [flow][What is a Flow?].
  * Exceptions - displays the [Exceptions Viewer][] showing details of any [exceptions][What is an Exception?] when debugging the [flow][What is a Flow?].
  * Settings - displays the [Settings Editor][] to set the values of the [input variables][Flow Input Variable] used when debugging the [flow][What is a Flow?].

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
