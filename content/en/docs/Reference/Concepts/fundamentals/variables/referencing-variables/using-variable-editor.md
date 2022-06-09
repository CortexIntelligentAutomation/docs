---
title: "Variable Editor"
linkTitle: "Variable Editor"
description: "This page provides a guide on referencing variables in the Variable Editor."
---

# {{< param title >}}

## Overview

The Variable Editor enables variables to be created, selected, and updated whilst configuring a [block][BlocksConcepts].

## Selecting a Variable

The Variable Editor presents a list of available variables. The available variables depends on the current [scope][].

To filter the selection, start typing the name of the variable. Variables matching the partial string will be returned.

### Referencing Items in Complex Data Types

Items in [complex data types][ComplexDataType] can be referenced in the Variable Editor using the appropriate notation:

- Referencing the second item in a [List][]: `MyList[1]`
- Referencing the item "Brand" in a [Dictionary][]: `MyDictionary["Brand"]`
- Referencing the item "name" in a [Structure][]: `MyStructure.name`
- Referencing the "Message" property of an [Exception][Exceptions]: `Exception.Message`

## Creating a Variable

Block properties using the Variable Editor that reference non-existent variables are outlined in <span style="color:orange">orange</span>. Clicking **+** at the top of the [Property Viewer][] will create all non-existent variables for that block.

Individual variables that do not exist can be created in the Variable Editor. If entered text does not match an existing variable, the option to create that variable is available at the bottom of the dropdown list.

## Remarks

### Case Sensitivity

When referencing variables in the Variable Editor, the names are **Case Insensitive**. For example:

`var1` is the same as `Var1`.

When referencing items of a [complex data type][ComplexDataType] in a variable (e.g. [Lists][list], [Dictionaries][Dictionary], etc.), the names of items are **Case Sensitive**. For example:

`Dictionary1["Item1"]` is not the same as `Dictionary1["item1"]`.

### Known Limitations

None

## See Also

### Related Concepts

- [Blocks][BlocksConcepts]
- [Variables][]
- [Variable Scopes][scope]

### Related Guides

- [Variable Editor][]

[scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[BlocksConcepts]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[CollectionDataType]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[ComplexDataType]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.ComplexDataTypes.MainDoc" >}}
[Property Viewer]: {{< url "Cortex.Guides.Gateway.Studio.EastPanel.PropertyViewer" >}}
[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Guides.Studio.Gateway.Studio.VariableEditor.MainDoc" >}}
[Exceptions]: {{< url "Cortex.Reference.Exceptions.MainDoc" >}}
