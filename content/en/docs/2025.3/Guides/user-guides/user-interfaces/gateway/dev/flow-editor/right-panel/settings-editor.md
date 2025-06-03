---
title: "Settings Editor"
linkTitle: "Settings Editor"
description: "Set the values of input variables used when debugging a flow."
weight: 40
---

# {{% param title %}}

## Summary

The Settings Editor enables the developer to set the values of the [input variables][Flow Input Variable] used when debugging a [flow][What is a Flow?].

## Anatomy

{{< figure src="/images/Flow Editor - Settings Editor.png" title="Settings Editor" >}}

Every input variable has a corresponding [Expression Editor][], each of which MUST be set, otherwise an [error][Messages Grid] will be raised when a flow is attempted to be debugged.

If an input variable has been assigned a default value, the value configured in the Settings Editor will overwrite the value. If an input variable's default value is to be used, the default value must be copied into the relevant Expression Editor. Null and typed null values (e.g. `null` and `(Structure)null`) are permitted.

When any of the `Name`, `Is Input Variable?` or `Scope` properties are changed for a variable in the [Variables Grid][], the Settings Editor will show a warning message to update the input variables.

## Actions

### Make a variable an Input Variable

To make a variable an input variable, open the [Variables Grid][] by selecting on the Variables tab. Double-click on the `Is Input Variable?` property of the variable that is to be made an input variable, and tick the checkbox that appears in the field.

See the [Settings Editor][Settings Editor tutorial] tutorial for a step-by-step guide.

### Update Input Variables in Settings Editor

When a new input variable is [defined][], or an existing input variable is renamed, deleted, has  it's `Is Input Variable?` changed to false or has it's [scope][Variable Scopes] changed, it is necessary to update the Input Variables in the Settings Editor. To do this, click on the `Update Inputs` button on the Settings Editor.

See the [Settings Editor][Settings Editor tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* A value must be entered for each input variable even if that variable has a default value assigned.

## See Also

### Related Concepts

* [Flows][]
* [Messages][]
* [Variables][]

### Related Tutorials

* [Settings Editor][Settings Editor tutorial]

[defined]: {{< ref "#make-a-variable-an-input-variable" >}}
[Variables Viewer]: {{< ref "#variables-viewer" >}}
[Variables Details Viewer]: {{< ref "#variables-details-viewer" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Flow Input Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Messages]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Messages.MainDoc" >}}
[Messages Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.MessagesGrid" >}}
[Settings Editor tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.RightPanel.SettingsEditor" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Variables Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.VariablesGrid" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
