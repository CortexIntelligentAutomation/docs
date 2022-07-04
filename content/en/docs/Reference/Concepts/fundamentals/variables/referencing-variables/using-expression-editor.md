---
title: "Expression Editor"
linkTitle: "Expression Editor"
description: "This page provides a guide on referencing variables in the Expression Editor."
---

# {{< param title >}}

## Overview

The [Expression Editor][] is a text editor that allows flow developers to use simple [Expressions][] or complex code as the value of a block property, including referencing variables.

## Referencing Variables Directly

[Variables][] can be directly referenced by using `($)VariableName`

Variables can be referenced by:

- Typing the name manually
- Using the [Snippet][Snippets] menu

## Referencing Variables within Expressions

Variables can be used in more complex expressions by inserting the reference in place of values in the expression.

For examples on referencing variables in different expressions, see [Expressions][]

## Remarks

### Case Sensitivity

When referencing variables in the [Expression Editor][], the names are **Case Insensitive**. For example:

`($)var1` is the same as `($)Var1`.

When referencing properties or methods of any [data type][], or items in [Collections][] (e.g. [Dictionaries][Dictionary], [Structures][] etc.), their names are **Case Sensitive**.

Examples:

- Property - `($)FlowException.Message` is not the same as `($)FlowException.message`
- Method - `($)Integer.ToString()` is not the same `($)Integer.tostring()`
- Item - `($)Dictionary1["Item1"]` is not the same as `($)Dictionary1["item1"]`

### Known Limitations

None

## See Also

### Related Concepts

- [Expressions][]
- [Variable Scopes][scope]
- [Blocks][BlocksConcepts]

[scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[data type]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[BlocksConcepts]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Expressions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[Snippets]: {{< url "Cortex.Reference.Glossary.P-T.Snippets" >}}
[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Collections]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[ComplexDataType]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.ComplexDataTypes.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structures]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[String Concatenation]: {{< url "MSDocs.DotNet.Api.System.String.ConcatOperator" >}}
[Expression Editor]: {{< url "Cortex.Guides.Studio.ExpressionEditor.MainDoc" >}}
