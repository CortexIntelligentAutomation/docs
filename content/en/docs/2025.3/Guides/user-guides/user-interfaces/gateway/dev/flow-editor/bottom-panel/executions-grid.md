---
title: "Executions Grid"
linkTitle: "Executions Grid"
description: "View the executions that are being debugged"
weight: 20
---

# {{% param title %}}

## Summary

The Executions Grid displays information about all the [flows][What is a Flow?] that are currently [executing][What is an Execution?], paused, or errored in the Flow Editor.

## Anatomy

{{< figure src="/images/Flow Editor - Executions Grid.png" title="Executions Grid" >}}

The Executions Grid is automatically displayed when in Debug Mode and a flow is executing or paused from executing; however, it may be manually opened, or closed any time by clicking the Open/Close handle or resized by dragging the handle up or down.

Flows that are Running or Paused are shown with a green background; flows that have raised an [exception][What is an Exception?] are shown with a red background.

An execution may be selected by clicking on its row in the Executions Grid and can be controlled by a set of icons on the top right of the Executions Grid. Selected executions are indicated with a darker background and the actions available are dependent on the state of the selected execution; greyed-out action icons not applicable to the selected executions’ state.

## Actions

### Continue the Execution

Clicking the {{< image src="/images/Flow Editor - Continue Execution.png" >}} icon causes the selected execution to continue until the flow ends, a breakpoint is reached, or an exception has occurred causing the flow to pause. This action is only available for paused executions.

See the [Continue and Stop the Execution][Continue and Stop the Execution tutorial] tutorial for a step-by-step guide.

### Pause the Execution

Clicking the {{< image src="/images/Flow Editor - Pause Execution.png" >}} icon pauses the selected execution. This action is only available for running executions.

### Step the Execution

Clicking the {{< image src="/images/Flow Editor - Step Execution.png" >}} icon causes the selected execution to execute the next [block][What is a Block?] and pause again. This action is only available for paused executions.

See the [Step the Execution][Step the Execution tutorial] tutorial for a step-by-step guide.

### Stop the Execution

Clicking the {{< image src="/images/Flow Editor - Stop Execution.png" >}} icon terminates the execution of the selected execution, and after a few seconds, removes them from Executions Grid. This action is available for all executions, regardless of their state.

See the [Continue and Stop the Execution][Continue and Stop the Execution tutorial] tutorial for a step-by-step guide.

### Go To

Clicking the {{< image src="/images/Flow Editor - Go To.png" >}} icon causes the Flow Editor to open the [workspace][What is a Workspace?] which the selected execution is executing and focus on the location of the execution. It is typically used to locate the selected execution when the execution is not automatically tracked. This action is available for all executions, regardless of their state.

See the [Stop Tracking and Go To][Stop Tracking and Go To tutorial] tutorial for a step-by-step guide.

### Start tracking

Clicking the {{< image src="/images/Flow Editor - Start Tracking.png" >}} icon causes the Flow Editor to follow the flow execution, opening any necessary workspaces. The execution is not dynamically tracked if the Show execution on workspace Execution option is not selected, or a second execution is started concurrently in the Flow Editor. This action is available for any execution not being tracked.

See the [Start Tracking][Start Tracking tutorial] tutorial for a step-by-step guide.

### Stop tracking

Clicking the {{< image src="/images/Flow Editor - Stop Tracking.png" >}} icon causes the tracking of the execution to stop, and the Flow Editor will not maintain focus on the execution. This action is available for any execution being tracked.

See the [Stop Tracking and Go To][Stop Tracking and Go To tutorial] tutorial for a step-by-step guide.

### Show Initial Flow First / Show Initial Flow Last

Clicking the {{< image src="/images/Flow Editor - Show First.png" >}} (Show Initial Flow First) or {{< image src="/images/Flow Editor - Show Last.png" >}} (Show Initial Flow Last) icon changes the order of the hierarchy of parent and child flow executions, placing the parent execution uppermost and its children below, or the child execution uppermost and it's parent below. When {{< image src="/images/Flow Editor - Show First.png" >}} is clicked the icon changes to {{< image src="/images/Flow Editor - Show Last.png" >}} and vice versa. This action applies to all executions in the Executions Grid.

See the [Show Initial Flow First or Last][Show Initial Flow First or Last tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

* [Blocks][]
* [Exceptions][]
* [Executions][]
* [Flows][]
* [Workspaces][]

### Related Tutorials

* [Continue and Stop the Execution][Continue and Stop the Execution tutorial]
* [Step the Execution][Step the Execution tutorial]
* [Stop Tracking and Go To][Stop Tracking and Go To tutorial]
* [Start Tracking][Start Tracking tutorial]
* [Show Initial Flow First or Last][Show Initial Flow First or Last tutorial]

[Continue and Stop the Execution tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.ContinueStopExecution" >}}
[Show Initial Flow First or Last tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.ShowFirstLast" >}}
[Step the Execution tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.StepExecution" >}}
[Stop Tracking and Go To tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.StopTrackingGoTo" >}}
[Start Tracking tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.BottomPanel.StartTracking" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Workspace?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
