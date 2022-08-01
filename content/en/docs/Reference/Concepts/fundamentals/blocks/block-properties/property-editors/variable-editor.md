---
title: "Variable Editor"
linkTitle: "Variable Editor"
description: "Using the Variable Editor."
weight: 100
---

# {{< param title >}}

<img src="/images/work-in-progress.jpg">

## Summary

TODO

## Referencing Variables

TODO:

- You can reference any available variable.
- Available variables are restricted by the scope of the currently selected block
- All available variables will be shown when the variable editor is empty; typing in the editor will filter the available variables with those that match (contains text) on either the variable name or scope

TODO: Image of referenced variable

TODO: Image of selecting available variables

### Scoped Variables

TODO:

- Available variables are scoped by the workspace of the block selected
- Can see variables of the same name that are on accessible scopes
- Link to known limitation. If there are two or more variables with the same name, the variable with the closest scope will be always used even if another is selected

TODO: Image of scoped variables (different names and same names)

### Accessing Variable Properties or Indexes

TODO:

- Properties and indexes can be accessed from the Variable editor
- Translation error shown in messages viewer when using properties or indexes incorrectly for variable that is not dynamic

TODO: Image of accessing referenced variable property and index

## Missing Variables

TODO:

- If a referenced variable does not exist, then a orange border will be shown around the Variable editor
- It is possible to create a new variable from a missing one using the variable editor

TODO: Image of orange border for missing variables

## Creating New Variables

TODO:

- If a variable does not already exist, the variable editor can be used to create a new one at the current scope
- If the variable name is invalid ([C# identifier naming rules][]) then there will be no option to create a new variable

TODO: Image of option to create a new variable

## Remarks

### Known Limitations

TODO:

- If there are two or more variables with the same name, the variable with the closest scope will be always used even if another is selected
- Currently, available variables are not restricted based on the type of the variable and if that is valid for the selected property

## See Also

### Related Concepts

TODO

### Related Blocks

TODO

### Related Data Types

TODO

### External Documentation

TODO

[C# identifier naming rules]: {{< url "MSDocs.CSharp.IdentifierNamingRules" >}}
