---
title: "Expression Editor"
linkTitle: "Expression Editor"
description: "This page provides a guide on referencing variable in the Expression Editor."
---

# {{< param title >}}

## Overview

The Expression Editor is an advanced block input, allowing for C# style expressions to be created. See [Expression Editor][ExpressionEditor] for more information on the Expression Editor.

## Referencing Variables

### Direct Reference

Variables can be directly referenced by typing `($)VariableName` or by using the Snippet menu accessed by pressing Ctrl + Space and selecting the appropriate variable. The block would then read the value of the variable when executed and use the value as required.

Variables can also be referenced in expressions by inserting the reference in place of values in the expression.

`($)Int1 + ($)Int`
`($)Int1 == 12`

### String Concatenation

Strings can be created with variables in String Concatention. To use variables in String Concatenation, prefix each variable (or literal string) with a +.

`"This would create a string with the contents of " + ($)Variable + "in the middle."`

### String Interpolation

Strings can also be created with variables using String Interpolation. This technique coerces a variable into a literal string. To reference a variable within a string, the string must start with `$` or `$@`. Then each variable to be referenced should be contained within `{}`.

`$"This string would use a {($)Variable} within the string."`

## Remarks

### Known Limitations

#### Case Sensitivity

When referencing variables in the Expression Editor, the names are Case Insensitive. For example:

`($)var1` is the same as `($)Var1`.

When referencing items of a [Complex DataType][] in a variable (e.g. Lists)

## See Also

### Related Concepts

- [Expression Editor][ExpressionEditor]

[ExpressionEditor]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.Expressions" >}}
