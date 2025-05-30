---
title: "Variables Viewer"
linkTitle: "Variables Viewer"
description: "View the values of variables when debugging a flow."
weight: 30
---

# {{% param title %}}

## Summary

The Variables Viewer displays the values of the [variables][What is a Variable?] when debugging a [flow][What is a Flow?].

## Anatomy

{{< figure src="/images/Flow Editor - Variables Viewer.png" title="Variables Viewer" >}}

The Variables Viewer consists of two sections:

* [Variables List][] - displaying the variables in [scope][Variable Scopes] for the flow [execution][What is an Execution?] that is being debugged.
* [Variable Details Viewer][] - displaying the name, type and full value of the variable selected in the Variables List.

### Variables List

The Variables List, at the top of the Variables Viewer, shows the current values of variables containing basic data types, and the type and structure of collection and complex data type values.

In addition to developer defined variables, {{% ctx %}} [built-in variables][Execution Context] will also be displayed.

### Variable Details Viewer

The Variable Details Viewer, at the bottom of the Variables Viewer, shows the name and data type of the variable selected in the [Variables List][] as well as it's value, in JSON format. Any collection or complex data types will be expanded to display their contents.

It is important to note that the Variables Viewer can only display a [JSON][] representation of the variable's value.

## Actions

### View Variables in Variables List

To view the variables that have been assigned a value, including a NULL value, that are currently in scope, simply select the execution of interest and click on the Variables tab on the [Right Panel][].

Variables that have not been assigned a value or are out of [scope][Variable Scopes] will not be displayed.

See the [Variables Viewer][Variables Viewer tutorial] tutorial for a step-by-step guide.

### View the Detail of the Value in a Variable

Click on a variable in the Variables List to view the detail of a value, displayed in JSON format, contained in a variable. The detail of collection and complex data types will only the expanded in JSON form in the Variables Details Viewer if the execution is paused.

See the [Variables Viewer][Variables Viewer tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The Variables Details Viewer only display the JSON representation of the selected value.
  * Dictionaries with keys of data types other than String will be displayed as a String value.
  * The methods of objects will not be displayed.
* The Variables Details Viewer will only show the expanded contents of collection and complex data types when the execution is paused.

## See Also

### Related Concepts

* [Executions][]
* [Flows][]
* [Variables][]

### Related Tutorials

* [Variables Viewer][Variables Viewer tutorial]

[Variables List]: {{< ref "#variables-list" >}}
[Variable Details Viewer]: {{< ref "#variable-details-viewer" >}}

[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[Execution Context]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.ExecutionContext" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[JSON]: {{< url path="Cortex.Reference.Glossary.F-J.Json" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Variables Viewer tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.RightPanel.VariablesViewer" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
