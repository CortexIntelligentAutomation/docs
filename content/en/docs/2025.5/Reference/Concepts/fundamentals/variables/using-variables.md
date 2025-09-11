---
title: "Using Variables"
linkTitle: "Using Variables"
description: "Information regarding using variables in the Variable and Expression editors."
weight: 200
---

# {{% param title %}}

## Summary

There are a number of ways to use variables:

- The [Variable Editor][Using Variables: Variable Editor] can be used to create and select variables
- The [Expression Editor][Using Variables: Expression Editor] can be used to include variables within expressions

## Variable Editor

The Variable Editor allows the developer to [create][] and [use][] variables whilst configuring a [block][].

### Creating a Variable

If a variable does not already exist, the [Variable Editor][]  can be used to [create][Creating Variables] a new one at the [scope][] of the selected [block][].

If the variable name is invalid (does not conform with the [C# identifier naming rules][]) then there will be no option to create a new variable.

### Using a Variable

The [Variable Editor][] provides a list of variables that are available at the [scope][] of the selected [block][].

Typing any text in the [Variable Editor][] will filter the available variables, showing any variable whose name or scope contains the text.

The Variable Editor also allows for:

- [Using Items in Collections][]
- [Using Properties of Data Types][]
- [Using Methods of Data Types][]

#### Using Items in Collections

Variables that contain a [Collection][] or [String][] data type can have their respective items or characters accessed using index notation:

- `[0]` gets the first item
- `[1]` gets the second item
- `["key"]` gets the item with the key `"key"`.

Ranges can also be used within index notation:

- `[0..3]` gets three items from the first item (inclusively) (i.e. the first, second, and third item)
- `[^1]` gets the last item
- `[^2]` gets the second to last item
- `[..]` gets all items
- `[..3]` gets three items from the first item (inclusively) (i.e. the first, second, and third item)
- `[3..]` gets all items from the fourth item (inclusively) (i.e. the fourth to the last item)

In the examples below assume:

- `($)List` has been set to `[1, 2, 3, 4, 5]`
- `($)Dictionary` of type `Dictionary<string, Int32>` has been set to `{"FirstKey": 1, "SecondKey": 2}`
- `($)Structure` has been set to `{"FirstKey": 1, "SecondKey": [1, 2, 3]}`
- `($)String` has been set to `"Some Text"`.

| Text                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `List[2]` | `3` | The third item in the list is returned |
| `List[0..2]` | `[1, 2]` | The first and second item in the list are returned |
| `List[^2]` | `4` | The second to last item in the list is returned |
| `List[^2..^0]` | `[4, 5]` | The second to last and the last item in the list are returned |
| `List[1..^1]` | `[2, 3, 4]` | The second item to the second to last item in the list are returned |
| `List[..]` | `[1, 2, 3, 4, 5]` | All items in the list are returned |
| `List[..2]` | `[1, 2]` | The first item and the second item in the list are returned |
| `List[2..]` | `[3, 4, 5]` | The third item to the last item in the list are returned |
| `Dictionary["FirstKey"]` | `1` | The item with the key `"FirstKey"` is returned |
| `Structure["SecondKey"]` | `[1, 2, 3]` | The item with the key `"SecondKey"` is returned |
| `Structure["SecondKey"][0]` | `1` |  The first item within the item with key `"SecondKey"` is returned |
| `String[0]` | `'S'` | The first character in the string is returned |

#### Using Properties of Data Types

[Properties][] can be used to read data from and/or write data to a variable. The properties accessible are defined by the [Data Type][], and information regarding properties can be found in the relevant documentation for that [Data Type][].

[Properties][] can be read-write, read-only, or write-only (extremely rare) depending on the access specified by the [Data Type][].

Whilst [Structures][Structure] are [Collections][Collection], they also allow for their keys to be accessed as [properties][Properties].

In the examples below assume:

- `($)List` has been set to `[1, 2, 3]`
- `($)TimePeriod` has been set to `{"Years": 1, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 0, "Milliseconds": 0}`
- `($)Structure` has been set to `{"FirstKey": 1, "SecondKey": 2}`

| Text                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `List.Count` | `3` | Read-only property, this only works in [Input Properties][] |
| `TimePeriod.Years` | `1` | Read-write property, this can be used in [Input][Input Properties], [Output][Output Properties], and [InputOutput Properties][]. The result column shows reading the property; writing to the property can be achieved by using any [Output Property][Output Properties]. |
| `Structure.FirstKey` | `1` | Read-write property, this can be used in [Input][Input Properties], [Output][Output Properties], and [InputOutput Properties][]. The result column shows reading the property; writing to the property can be achieved by using any [Output Property][Output Properties].  |

#### Using Methods of Data Types

[Methods][] can be used to execute specific functionality. The methods accessible are defined by the [Data Type][], and information regarding methods can be found in the relevant documentation for that [Data Type][].

[Methods][] can have parameters passed into them that are then used to execute the functionality, not all methods have parameters. The same method can be defined multiple times, each with different sets of parameters.

In the examples below assume the variable `($)Int` has been set to `1`.

| Text                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `Int.ToString()` | `"1"` | Method without parameters |
| `Int.ToString("P0")` | `"100%"` | The `ToString()` method can take parameters in order to format the result. In this case `1` was converted into a percent with zero decimal places |

## Expression Editor

Variables are named containers for storing values of any [data type][Data Type]; a variable can be included within [expressions][] created using the [Expression Editor][]. A variable is used by prefixing the variable's name with `($)` (e.g. `($)VariableName`).

## Remarks

### Case Sensitivity

When using variables in the [Variable][Variable Editor] or [Expression Editor][], the names are case insensitive. For example, `List` is the same as `list`.

When using [properties][Properties] or [methods][Methods] of any variable, or items in [Collections][Collection] (e.g. [Dictionaries][Dictionary], [Structures][Structure] etc.), their names are case sensitive.

For Example:

| Text                     | Notes                              |
|--------------------------------|------------------------------------|
| `FlowException.Message` | `Message` property cannot be accessed using `FlowException.message` |
| `Int.ToString()` | `ToString()` method cannot be accessed using `Int.toString()` |
| `Dictionary["Item1"]` | `"Item1"` item cannot be accessed using the key `Dictionary["item1"]` |

### Known Limitations

#### When using variables of the same name the closest scoped is used

It is possible to create multiple variables with the same name in the [Variables Grid][]. When using the same name in different [workspaces][workspace], the variable with the closest scope will be used.

For example:

- `Top-Level` workspace has the variable `($)Variable`
- `Child-Level` workspace also has the variable `($)Variable`

When executing a block in `Child-Level` that uses `($)Variable`, the variable that is used is the variable defined in `Child-Level`.

This may change in future to allow developers to specifically select which of the variables with the same name is used in this scenario.

## See Also

### Related Concepts

- [Flows][]
- [Workspaces][]
- [Blocks][]
- [Block Properties][]

### Related Data Types

- [All Data Types][Data Type]

### Related Blocks

- [All Blocks][]

### External Documentation

None

[Using Variables: Variable Editor]: {{< ref "#variable-editor" >}}
[Using Variables: Expression Editor]: {{< ref "#expression-editor" >}}
[create]: {{< ref "#creating-a-variable" >}}
[use]: {{< ref "#using-a-variable" >}}

[Using Items in Collections]: {{< ref "#using-items-in-collections" >}}
[Using Properties of Data Types]: {{< ref "#using-properties-of-data-types" >}}
[Using Methods of Data Types]: {{< ref "#using-methods-of-data-types" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Input Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Property Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[Creating Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.CreatingVariables" >}}

[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}

[Workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[scope]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}

[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}
[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}

[Data Type]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}
[Collection]: {{< url path="Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Variables Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.VariablesGrid.MainDoc" >}}

[Properties]: {{< url path="Cortex.Reference.Glossary.P-T.PropertyCSharp" >}}
[Methods]: {{< url path="Cortex.Reference.Glossary.K-O.Method" >}}
[programming language]: {{< url path="Cortex.Reference.Glossary.P-T.ProgrammingLanguage" >}}

[C# identifier naming rules]: {{< url path="MSDocs.CSharp.IdentifierNamingRules" >}}
