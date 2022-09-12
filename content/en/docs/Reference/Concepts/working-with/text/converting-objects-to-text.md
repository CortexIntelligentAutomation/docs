---
title: "Converting Objects To Text"
linkTitle: "Converting Objects To Text"
description: "This page describes how to convert objects to their text representation."
---

# {{% param title %}}

## Overview

TODO: Overview/summary

### ToString()

TODO:

- .ToString() - talk about that some objects will just return their name, text formatting format providers etc.
- Convert.ToString()
- Examples and where to find in Data Types documentation

### String interpolation

See [Interpolated Strings][].

### String.Format()

TODO: String.Format

## Blocks that automatically convert Objects to Text

TODO:

- Format Text With Value
- Format Text With Values
- Join Text
- Convert Date Time To Text
- Convert Object To Text - need to make it clear how this works - does tostring and if tostring returns class name does json serialisation
- Convert Object To Json - need to make it clear how this works - does json serialisation

## Remarks

### Known Limitations

#### Support for {{}} is Missing

Using `{{VariableName}}` expression syntax to convert a [variable][] to its [String][] representation is currently not supported.

It is possible to convert a [variable][] to its string representation within an [expression][] by using the `ToString()` [method][] (e.g. `($)VariableName.ToString()`)

In future this limitation may be removed.

[variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[method]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MethodExpressions" >}}
[Interpolated Strings]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.InterpolatedStrings" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
