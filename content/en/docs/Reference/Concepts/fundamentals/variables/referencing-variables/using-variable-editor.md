---
title: "Variable Editor"
linkTitle: "Variable Editor"
description: "This page provides a guide on referencing variables in the Variable Editor."
---

# {{< param title >}}

## Overview

The Variable Editor enables variables to be created, selected, and updated whilst configuring a [block][BlocksConcepts].

## Selecting a Variable

Selecting a property in the Variable Editor mode presents a list of available variables for selection. The available variables depends on the current [scope][].

To filter the selection, start typing the name of the variable. Variables matching the partial string will be returned.

### Collection Variable Referencing

Variables with a [Collection data type][CollectionDataType] can be referenced in the Variable Editor using the appropriate notation.

Examples:

- Referencing the second item in a [List][]: `($)MyList[1]`

- Referencing the item "Brand" in a [Dictionary][]: `($)MyDictionary["Brand"]`

- Referencing the element "name" in a [Structure][]: `($)MyStructure.name`

## Creating a Variable

The variable editor allows for the creation of variables that do not exist. If entered text does not match an existing variable, the option to create that variable is available at the bottom of the dropdown list.

Block properties in the Variable Editor mode that reference non-existent variables are highlighted. Clicking **+** at the top of the [Property Viewer][] will create all non-existent variables for that block.

## Remarks

### Known Limitations

#### Case Sensitivity

When referencing variables in the Variable Editor, the names are **Case Insensitive**. For example:

`var1` is the same as `Var1`.

When referencing items of a [Complex data type][ComplexDataType] in a variable (e.g. [Lists][], [Dictionaries][Dictionary], etc.), the names of items are **Case Sensitive**. For example:

`Dictionary1["Item1"]` is not the same as `Dictionary1["item1"]`.

## See Also

### Related Concepts

- [Variables Scopes][scope]

- [Blocks][BlocksConcepts]

- [Variables][]

[scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[BlocksConcepts]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[CollectionDataType]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[ComplexDataType]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.ComplexDataTypes.MainDoc" >}}
[Property Viewer]: {{< url "Cortex.Guides.Gateway.Studio.EastPanel.PropertyViewer" >}}
[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
