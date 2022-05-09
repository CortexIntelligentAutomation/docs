---
title: "Expression Editor"
linkTitle: "Expression Editor"
description: "This page provides a guide on referencing variables in the Expression Editor."
---

# {{< param title >}}

## Overview

The [Expression Editor][ExpressionEditor] is an advanced block input. The editor allows for advanced variable input and manipulation in a block property.

## Referencing Variables

### Direct Reference

[Variables][] can be directly referenced by using `($)VariableName`

Variables can be added by:

- Typing the name manually
- Using the [Snippet][Snippets] menu

Variables can also be referenced in expressions by inserting the reference in place of values in the expression.

#### Expression Examples

`($)Int1 + ($)Int2`

`($)Int1 == 12`

`($)Timestamp1 > ($)TimeStamp2`

### String Concatenation

Strings can be created with variables in [String Concatenation][]. To use variables in [String Concatenation][], prefix each variable or literal string with a +.

`"This would create a string with the contents of " + ($)Variable + "in the middle."`

### String Interpolation

Strings can also be created with variables using String Interpolation. This technique coerces a variable into a literal string. To reference a variable within a string, the string must start with `$` or `$@`. Each variable to be referenced should be enclosed with `{}`.

`$"This string would use a {($)Variable} within the string."`

## Remarks

### Known Limitations

#### Case Sensitivity

When referencing variables in the Expression Editor, the names are **Case Insensitive**. For example:

`($)var1` is the same as `($)Var1`.

When referencing items of a [Complex data type][ComplexDataType] in a variable (e.g. [Lists][], [Dictionaries][Dictionary], etc.), the names of items are **Case Sensitive**. For example:

`($)Dictionary1["Item1"]` is not the same as `($)Dictionary1["item1"]`.

## See Also

### Related Concepts

- [Expressions][]

- [Variables Scopes][scope]

- [Blocks][BlocksConcepts]

[scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[BlocksConcepts]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.MainDoc" >}}
[Expressions]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.Expressions" >}}
[Snippets]: {{< url "Cortex.Reference.Glossary.P-T.Snippets" >}}
[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[ComplexDataType]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.ComplexDataTypes.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[String Concatenation]: {{< url "MSDocs.DotNet.Api.System.String.ConcatOperator" >}}
