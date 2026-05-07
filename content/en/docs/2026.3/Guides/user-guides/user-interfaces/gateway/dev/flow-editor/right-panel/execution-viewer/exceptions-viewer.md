---
title: "Exceptions Viewer"
linkTitle: "Exceptions Viewer"
description: "View details of any exceptions that occur when debugging a flow."
weight: 40
---

# {{% param title %}}

## Summary

The Exceptions Viewer shows details of any [exceptions][What is an Exception?] when debugging the [flow][What is a Flow?].

## Anatomy

{{< figure src="/images/Flow Editor - Exceptions Viewer.png" title="Exceptions Viewer" >}}

In addition to a detailed description of the exception, the exception may include an Inner Exception, which details a previous exception that led to this exception being raised. Some exceptions may contain multiple, nested Inner Exceptions.

The exact format of the Exception Object depends on the exception raised. All Exception Objects have:

* Exception Type – The type of the exception.
* Message – The description of the exception.
* HelpLink - A hyperlink to further information relating to the exception.

## Actions

### View Exception

Select the Exception tab on the Right Panel to view all the exceptions raised while debugging the flow. If the [execution][What is an Execution?] is stopped, all the exception messages will be discarded.

See the [Exceptions Viewer][Exceptions Viewer tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The text displayed in the Exceptions Viewer cannot be copied to the clipboard.

## See Also

### Related Concepts

* [Exceptions][]
* [Executions][]
* [Flows][]

### Related Tutorials

* [Exceptions Viewer][Exceptions Viewer tutorial]

[Variables Viewer]: {{< ref "#variables-viewer" >}}
[Variables Details Viewer]: {{< ref "#variables-details-viewer" >}}

[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Exceptions Viewer tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.RightPanel.ExceptionsViewer" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
[What is an Execution?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
