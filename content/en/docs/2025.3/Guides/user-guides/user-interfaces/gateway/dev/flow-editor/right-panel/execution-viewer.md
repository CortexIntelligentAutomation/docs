---
title: "Execution Viewer"
linkTitle: "Execution Viewer"
description: "View the values of variables when debugging a flow."
weight: 30
---

# {{% param title %}}

## Summary

The Execution Viewer displays the values of the [variables][What is a Variable?] when debugging a [flow][What is a Flow?].

## Anatomy

{{< figure src="/images/Flow Editor - Execution Viewer.png" title="Execution Viewer" >}}

The Execution Viewer consists of two sections:

* [Variables Viewer][] - displaying the variables configured for the flow being debugged.
* [Variables Details Viewer][] - displaying the value of the variable selected in the Variables Viewer.

### Variables Viewer

The Variables Viewer, at the top of the Execution Viewer, shows the current values of variables containing basic variable types, and the type and structure of collection and complex data type values.

In addition to developer defined variables, system defined variables will also be displayed.

### Variables Details Viewer

The Variables Details Viewer, at the bottom of the Execution Viewer, shows the name and data type of a variable selected in the [Variables Viewer][] as well as it's value, in JSON format. Any collection or complex data types will be expanded to display their contents.

It is important to note that the Execution Viewer can only display a JSON representation of Objects and that an object's methods are not displayed.

## Actions

### View Variables in Variables Viewer

To view the variables that have been assigned a value, including a NULL value, that are currently in [scope][Variable Scopes], simply select the execution of interest and click on the Variables tab on the [Right Panel][].

Variables that have not been assigned a value or are out of [scope][Variable Scopes] will not be displayed.

See the [Execution Viewer][Execution Viewer tutorial] tutorial for a step-by-step guide.

### View the Detail of the Value in a Variable

Click on a variable in the Variables Viewer to view the detail of a value, displayed in JSON format, contained in a variable. The detail of collection and complex data types will only the expanded in JSON form in the Variables Details Viewer if the execution is paused.

See the [Execution Viewer][Execution Viewer tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The Variables Details Viewer only display the JSON representation of the selected value.
  * Dictionaries with keys of data types other than String will be displayed as a String value.
  * The methods of objects will not be displayed.
* The Variables Details Viewer will only show the expanded contents of collection and complex data types when the execution is paused.

## See Also

### Related Concepts

* [Flows][]
* [Variables][]

### Related Tutorials

* [Execution Viewer][Execution Viewer tutorial]

[Variables Viewer]: {{< ref "#variables-viewer" >}}
[Variables Details Viewer]: {{< ref "#variables-details-viewer" >}}

[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Execution Viewer tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.RightPanel.ExecutionViewer" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
