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

To view the variables that have been assigned a value, including a NULL value, that are currently in scope, select the execution in the [Executions Grid][] and click on the Variables tab.

Variables that have not been assigned a value or are out of [scope][Variable Scopes] will not be displayed.

See the [Variables Viewer][Variables Viewer tutorial] tutorial for a step-by-step guide.

### View the Detail of a Variable

Click on a variable in the Variables List to view the variable's name, it's data type, and value displayed in JSON format. The detail of collection and complex data types will only be expanded in JSON format in the Variable Details Viewer if the execution is paused.

See the [Variables Viewer][Variables Viewer tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* Variables with a [Dictionary<TKey, TValue>][Dictionary Tkey] data type where TKey is not the [String][] data type will have their keys displayed as the [ToString()][ToString] value for the data type.

## See Also

### Related Concepts

* [Executions][]
* [Flows][]
* [Variables][]

### Related Tutorials

* [Variables Viewer][Variables Viewer tutorial]

[Variables List]: {{< ref "#variables-list" >}}
[Variable Details Viewer]: {{< ref "#variable-details-viewer" >}}

[Dictionary TKey]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Execution Context]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.ExecutionContext" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Executions Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.ExecutionsGrid" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[JSON]: {{< url path="Cortex.Reference.Glossary.F-J.Json" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[ToString]: {{< url path="MSDocs.DotNet.Api.System.Object.ToString" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Variables Viewer tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.RightPanel.VariablesViewer" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
