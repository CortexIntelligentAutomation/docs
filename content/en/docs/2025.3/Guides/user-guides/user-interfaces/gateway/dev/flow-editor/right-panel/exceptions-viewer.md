---
title: "Exceptions Viewer"
linkTitle: "Exceptions Viewer"
description: "View details of any exceptions during flow debugging."
weight: 50
---

# {{% param title %}}

## Summary

The Exceptions Viewer shows details of any [exceptions][What is an Exception?] when debugging the [flow][What is a Flow?].

## Anatomy

{{< figure src="/images/Flow Editor - Exceptions Viewer.png" title="Exceptions Viewer" >}}

In addition to the detailed description of the exception, the exception message may include an `Inner Exception`, which details the exception associated with a previous exception that led to this exception to be raised. Some exceptions may contain multiple, nested layers of `Inner Exception` messages.

The exact format of the Exception Object depends on the exception raised. All Exception Objects have:

* Exception Type – Machine readable exception type
* Message – Human readable exception message.

The exception message may also contain a help hyperlink, which links to further information relating to this exception.

## Actions

### View Exception

Select the Exception tab on the Right Panel to view all the exceptions raised while debugging the flow. If the execution is stopped, all the exception messages will be discarded.

See the [Exceptions Viewer][Exceptions Viewer tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The text displayed in the Exceptions Viewer cannot be copied to the clipboard to then insert into a text editor.

## See Also

### Related Concepts

* [Exceptions][]
* [Flows][]

### Related Tutorials

* [Exceptions Viewer][Exceptions Viewer tutorial]

[Variables Viewer]: {{< ref "#variables-viewer" >}}
[Variables Details Viewer]: {{< ref "#variables-details-viewer" >}}

[Right Panel]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Exceptions Viewer tutorial]: {{< url path="Cortex.Tutorials.Development.FlowEditor.RightPanel.ExceptionsViewer" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[What is a Flow?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[What is an Exception?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.WhatIsAnException.MainDoc" >}}
