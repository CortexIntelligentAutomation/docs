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

Each Input variable corresponds to an Expression Editor in the Settings Editor, each of which MUST be set, otherwise an error will be raised by the parser when a flow is attempted to be debugged.

If an input variable has been assigned a default value, the value configured in Settings Editor will overwrite the value assigned to the respective input variable. If an input variable's default value is to be used, the default value must be copied into the relevant Expression Editor. Null and typed null values are allowed in the Settings Editor if required.

When the `Is Input Variable?` property is changed for a variable in the [Variables Grid][], the Settings Editor will show a warning message to update the input variables in the Settings Editor.

## Actions

### Make a variable an Input Variable

To make a variable an Input Variable, open the Variables Grid (Bottom Panel) by selecting on the Variables tab. Double-click on the Is Input Variable? field of the variable that is to be made an Input Variable, and tick the checkbox that appears in the field.

See the [Settings Editor][Settings Editor tutorial] tutorial for a step-by-step guide.

### Update Input Variables in Settings Editor

When a new Input Variable is defined, or an existing Input Variable removed, it is necessary to update the Input Variables in the Settings Editor. To do this, click on the Update Inputs button on the Settings Editor.

See the [Settings Editor][Settings Editor tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* A value must be entered for each Input variable even if that variable has a Default Value assigned.

## See Also

### Related Concepts

* [Flows][]
* [Variables][]

### Related Tutorials

* [Settings Editor][Settings Editor tutorial]

[Variables Viewer]: {{< ref "#variables-viewer" >}}
[Variables Details Viewer]: {{< ref "#variables-details-viewer" >}}

[Flow Input Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[Settings Editor tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.RightPanel.SettingsEditor" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Variables Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.VariablesGrid" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
