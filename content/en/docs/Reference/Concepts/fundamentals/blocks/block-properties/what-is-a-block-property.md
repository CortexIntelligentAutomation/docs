---
title: "What is a Block Property?"
linkTitle: "What is a Block Property?"
description: "Information regarding the anatomy of block properties, types of property and their appearance, and configuring properties using the available property editors."
weight: 1
---

# {{< param title >}}

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

TODO: Example Image Property Editors (literal, variable, expression)

Input properties can be configured using the following editors:

- [Literal Editor][]
- [Variable Editor][]
- [Expression Editor][]

The icons used for Input properties are dark blue to distinguish them from [Output Properties][] or [InputOutput Properties][].

### Output Properties

Output properties are used to save values from a [block][]. These properties will saved to a variable during the block's execution.

Values from Output properties can be [discarded][Discarding Outputs], this means they will not be saved to any variable.

#### Supported Editors

TODO: Example Image Property Editors (variable)

Output properties can be configured using the following editors:

- [Variable Editor][]

The icon used for Output properties are light blue to distinguish them from [Input Properties][].

#### Discarding Outputs

Output values can be discarded, instead of saving them to a variable.

Common reasons for discarding include:

- Discarding the exception output from [Handle Exception blocks][]
- Discarding unwanted output values from blocks such as the [Execute SSH Command][TODO] block that have multiple Output properties

To discard an output value, the Output property should use the built-in `($)_` variable.

TODO: Example image of discarding an output

### InputOutput Properties

InputOutput properties are used to provide values to a [block][]. These properties are used, updated and saved back to a variable during the block's execution.

#### Supported Editors

TODO: Example Image Property Editors (variable)

InputOutput properties can be configured using the following editors:

- [Variable Editor][]

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
[Discarding Outputs]: {{< ref "#discarding-outputs" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Handle Exception blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.MainDoc" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Property Editors]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.MainDoc" >}}
[Literal Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Fundamentals Data Types]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}

[Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[Collections]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}

[Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
