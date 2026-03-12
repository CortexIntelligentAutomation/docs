---
title: "Variable Editor"
linkTitle: "Variable Editor"
description: "Information regarding using the Variable Editor."
weight: 100
---

# {{% param title %}}

## Summary

The Variable Editor is used to reference any available [variable][What is a Variable?] that is in scope of the [block][What is a Block?] and can be used with most [block properties][What is a Block Property?].

{{< figure src="/images/Variable Editor.png" >}}

## Using Variables

The variables available to the Variable Editor are restricted by the [scope][Variable Scopes] of the currently selected block, which in turn is determined by the [workspace][What is a Workspace?] containing the selected block.

The variable is referenced by either entering the variable name (without the prefix of `($)`) into the Variable Editor, or by selecting an available variable from the dropdown, which is revealed when the Variable Editor is selected.

If the editor’s field is empty, all available variables will be displayed in the dropdown.

{{< figure src="/images/Variable Editor - Select Variable.png" >}}

Typing characters into the Variable Editor will filter the available variables displayed to those with their name or scope containing a case-insensitive match of the text entered.

{{< figure src="/images/Variable Editor - Filter Variables.png" >}}

### Scoped Variables

Variables are scoped by the workspace that contains the selected block. {{% ctx %}} uses the principle of inherited scope in that variables available for use in the Variable Editor are those created in the current workspace and those inherited from variables scoped to the parent workspace.

If two or more different variables have the same case-insensitive variable name but belong to different scopes, only the variable with the closest scope to the scope of the selected block will be used or displayed in the Variable Editor dropdown.

{{< figure src="/images/Variable Editor - Scoped Variables.png" >}}

### Accessing Variable Properties or Indexes

[Properties][Variable Properties] and [indexes][Variable Indexes] of the data type contained in a variable for both Input and Output properties may be expressed in the Variable Editor.

However, if an index is used with a variable in an output property, the variable must have already been created and instantiated to a suitable data type, otherwise a translation error will be displayed when an attempt to execute the flow is made.

In addition, for input or output property types, if the data type contained in the variable is not dynamic and the property or index used does not exist, a translation error will be displayed when an attempt to execute the flow is made.

Conversely, If the data type contained in the variable is dynamic and the property or index does not exist, translation error will not be displayed but a runtime exception will be raised when the flow is executed.

{{< figure src="/images/Variable Editor - Variable Properties.png">}}

## Missing Variables

If the text entered in the Variable Editor does not match that of a created variable, i.e., the variable does not exist, then a red border with be shown around the Variable Editor. However, it is possible to create a new variable of that name using the Variable Editor.

{{< figure src="/images/Variable Editor - Missing Variable.png" >}}

## Creating Variables

If a variable does not already exist, the Variable Editor can be used to create a new variable, scoped to the current workspace.

To create a new variable, enter the new variable’s name in the Variable Editor. The dropdown will reveal a filtered list of available variables, where the name or scope of variable contains the case-insensitive text entered, plus the option to create a new variable.

If the text entered does not conform to the variable naming rules ([C# identifier naming rules][]), then the option to create a new variable will not be displayed.

{{< figure src="/images/Variable Editor - Create Variable.png" >}}

## Renaming Variables

If the Variable Editor already contains a reference to an existing variable, entering the name for a variable that does not exist will not only offer the option to create a new variable in the dropdown, but it will also display the option to rename the existing variable to that of the name entered.

If an existing variable is renamed in the Variable Editor, then all other references to the existing variable will also be changed to the new variable name throughout the flow.

If the text entered does not conform to the variable naming rules ([C# identifier naming rules][]), then the option to rename the variable will not be displayed.

Renaming a variable will keep intact any indexes or property references to the object contained in the variable; any changes made to the indexes or property references will not affect the indexes or property references elsewhere in the flow.

{{< figure src="/images/Variable Editor - Rename Variable.png" >}}

## Remarks

### Known Limitations

* When two or more characters are entered into the Variable Editor, causing the dropdown to display a list of available variables, the variable name of the first closest match is sometimes displayed in the Variable Editor, e.g., entering My will cause MyVar to be displayed in the Variable Editor, however, pressing the Tab key will not automatically enter the full variable name. The variable name must either be entered in full, or an option on the dropdown must be selected.

* Variable references used elsewhere in the flow as the index to other variables, e.g. the variable Var2 used in the reference Var1[($)Var2], will remain referencing Var2 even when the variable Var2 is renamed in the Variable Editor or Variables Grid.

## See Also

### Related Concepts

* [Blocks][What is a Block?]
* [Block Properties][What is a Block Property?]
* [Variable Scopes][]
* [Variables][What is a Variable?]
* [Workspaces][What is a Workspace?]

### Related Blocks

* [All Blocks][Blocks]

### Related Data Types

* [All Data Types][Reference Data Types]

### External Documentation

* [C# identifier naming rules][]

[Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}
[Reference Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}
[Variable Indexes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.UsingVariables.Indexes" >}}
[Variable Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.UsingVariables.Properties" >}}
[Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[What is a Block?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[What is a Block Property?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[What is a Workspace?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[C# identifier naming rules]: {{< url path="MSDocs.CSharp.IdentifierNamingRules" >}}
