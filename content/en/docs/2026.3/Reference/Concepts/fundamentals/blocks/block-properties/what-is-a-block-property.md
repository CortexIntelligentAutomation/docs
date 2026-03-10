---
title: "What is a Block Property?"
linkTitle: "What is a Block Property?"
description: "Information regarding the anatomy of block properties, types of property and their appearance, and configuring properties using the available property editors."
weight: 1
---

# {{% param title %}}

## Summary

[Blocks][block] are configured using Block Properties. Properties pass data to the block which is then used to perform an action, or branch based on a condition within a [flow][].

## Anatomy of a Block Property

There are three types of block property, each type can be configured using one of its supported editors:

- [Input Properties][]
- [Output Properties][]
- [InputOutput Properties][]

### Input Properties

Input properties are used to provide values to a [block][]. These properties are used in the block's execution (e.g. a block to send emails would have input properties for specifying things like the sender, recipients, summary, body, attachments etc.).

#### Supported Editors

Input properties can be configured using the following editors:

- [Literal Editor][]
- [Variable Editor][]
- [Expression Editor][]

{{< figure src="/images/editable/editor-types.png" >}}

### Output Properties

Output properties are used to save values from a [block][]. These properties can be saved to a variable or [decomposed][Decomposing Output Properties] to be saved into multiple variables during the block's execution.

Values from Output properties can be [discarded][Discarding Outputs], this means they will not be saved to any variable.

#### Supported Editors

Output properties can be configured using the following editors:

- [Variable Editor][]

{{< figure src="/images/editable/variable-editor.png" >}}

- [Expression Editor][] using [decomposition][Decomposing Output Properties]

{{< figure src="/images/editable/expression-editor.png" >}}

#### Decomposing Output Properties

Output values can be [decomposed][Decomposition expressions] to allow the saving of different parts of the value to different variables.  

To [decompose][Decomposition expressions] an output value, the output property will need to be set to an expression.

#### Discarding Outputs

Output values can be discarded, instead of saving them to a variable.

Common reasons for discarding include:

- Discarding the exception output from [Handle Exception blocks][]
- Discarding unwanted output values from blocks such as the [Execute SSH Command][] block that have multiple Output properties

To discard an output value, the Output property should use the built-in `($)_` variable.

{{< figure src="/images/discarded-variable.PNG" >}}

### InputOutput Properties

InputOutput properties are used to provide values to a [block][]. These properties are used, updated and saved back to a variable during the block's execution.

#### Supported Editors

InputOutput properties can be configured using the following editors:

- [Variable Editor][]

{{< figure src="/images/editable/variable-editor.png" >}}

The icons used for InputOutput properties are light blue to distinguish them from [Input Properties][].

## Remarks

### Known Limitations

#### The Literal Editor is not Supported for all Input Properties

Currently, not all [Data Types][] support the use of the [Literal Editor][], such as:

- [Collections][]
- [Data Types][] without a constructor that contains parameters

Information regarding which editors are supported for a [Data Type][Data Types] can be found in the "Remarks" section under "Property Editor Support" in the relevant documentation for that [Data Type][Data Types].

In future this limitation may be removed.

## See Also

### Related Concepts

- [Flows][]
- [Blocks][]
- [Property Editors][]
- [Variables][]
- [Data Types][Fundamentals Data Types]
- [Executions][]
- [Exceptions][]

### Related Blocks

- [All Blocks][]

### External Documentation

None

[Input Properties]: {{< ref "#input-properties" >}}
[Output Properties]: {{< ref "#output-properties" >}}
[InputOutput Properties]: {{< ref "#inputoutput-properties" >}}
[Decomposing Output Properties]: {{< ref "#decomposing-output-properties" >}}
[Discarding Outputs]: {{< ref "#discarding-outputs" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}
[Handle Exception blocks]: {{< url path="Cortex.Reference.Blocks.Exceptions.MainDoc" >}}
[Execute SSH Command]: {{< url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Property Editors]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.MainDoc" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Decomposition expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DecompositionExpressions" >}}

[Fundamentals Data Types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}

[Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}
[Collections]: {{< url path="Cortex.Reference.DataTypes.Collections.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Executions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
