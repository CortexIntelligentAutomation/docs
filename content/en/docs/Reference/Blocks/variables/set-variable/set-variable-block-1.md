---
title: "Set Variable"
linkTitle: "Set Variable"
description: "Sets a Variable to a given Value."
---

{{< figure src="/blocks/variables-set-variable-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Variables.SetVariable.SetVariableBlock)</p>

## Description

Sets a [Variable][Variable Property] to a given [Value][Value Property].

Any type of [Value][Value Property] can be set, including Lists, Dictionaries, Structures etc.

If a [Variable][Variable Property] is set to the [Value][Value Property] of another [Variable][Variable Property] then they will have the same reference. This means that if either [Variable][Variable Property] has new items added to it, items updated in it, or items removed from it, then both will be affected, please see [Working with References][] for more information.

## Examples

### Setting a Variable

This example will set a [Variable][Variable Property] to a list of `[[1, 2, 3], [4, 5, 6]]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | [Value][Value Property], with value `[[1, 2, 3], [4, 5, 6]]` | The [Value][Value Property] is of type [List][]&lt;[List][]&lt;[Int32][]&gt;&gt; |
| [Variable][Variable Property] | `($)Variable`, with no value | `($)Variable` is a variable that will be set to the type of the value (i.e. [List][]&lt;[List][]&lt;[Int32][]&gt;&gt;) |

#### Result

Setting `($)Variable` to `[[1, 2, 3], [4, 5, 6]]` results in the variable `($)Variable` being updated to the following:

```json
[
    [
        1, 
        2, 
        3
    ], 
    [
        4, 
        5, 
        6
    ]
]
```

***

### Overwriting a Variable

This example will overwrite an existing [Variable][Variable Property] that has the text value `"A text value"`, to a list value of `[1, 2, 3]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | [Value][Value Property], with value `[1, 2, 3]` | The [Value][Value Property] is of type [List][]&lt;[Int32]&gt; |
| [Variable][Variable Property] | `($)Variable`, with value `"A text value"` | `($)Variable` is a variable that will be set to the type of the value (i.e. [List][]&lt;[Int32][]&gt;) |

#### Result

Setting `($)Variable` to `[1, 2, 3]` results in the variable `($)Variable` being updated to the following:

```json
[
    1, 
    2, 
    3
]
```

***

Note that `($)Variable` is overwritten, any data previously stored within the variable will be lost.

### Overwriting a Variable Property

This example will update the `Items` property within an existing [Variable][Variable Property] that has the text value `"A text value"`, to a list of `[1, 2, 3]`.

`($)Variable` has an initial value of:

```json
{
    "Items": "A text value",
}
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Value][Value Property] | [Value][Value Property], with value `[1, 2, 3]` | The [Value][Value Property] is of type [List][]&lt;[Int32][]&gt; |
| [Variable][Variable Property] | `($)Variable.Items`, with value `"A text value"` | `($)Variable.Items` is a property within variable that will be set to the type of the value (i.e. [List][]&lt;[Int32][]&gt;) |

#### Result

Setting the `($)Variable.Items` property to `[1, 2, 3]` results in the `($)Variable` being updated to the following:

```json
{
    "Items": [ 
        1,
        2, 
        3 
    ]
}
```

Note that `($)Variable.Items` is overwritten, any data previously stored within the property will be lost.

***

## Properties

### Value

The [Value][Value Property] to set the [Variable][Variable Property] to.

A [Variable][Variable Property] can be set to any type of object, including Lists, Dictionaries, Structures etc.
  
| | |
|--------------------|---------------------------|
| Data Type | [TValue][] |
| Property Type | [Input][] |
| Default Value | `($)Value` with value `null` |

### Variable

The [Variable][Variable Property] that will be set to the [Value][Value Property].  

If a [Variable][Variable Property] is set to the [Value][Value Property] of another [Variable][Variable Property] then they will have the same reference, for more information see [Working with References][].
  
| | |
|--------------------|---------------------------|
| Data Type | [TValue][] |
| Property Type | [Output][] |
| Default Value | `($)Variable` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Initialising Variables

If the Set Variable block is used to set a [Variable][Variable Property] that is not initialised, the [Variable][Variable Property] will be initialised with the given [Value][Value Property] when the block is run.

### Overwriting Variables

If the Set Variable block is used to set a [Variable][Variable Property] that is already initialised and has a [Value][Value Property], the [Variable][Variable Property] will be overwritten with the new [Value][Value Property] when the block is run.

A property of a [Variable][Variable Property] can also be overwritten, instead of the whole object. This is shown in the example above, [Overwriting a Variable Property][]

### Variable Scope

Each workspace has its own scope; as a result, variables can be defined that only exist and are accessible in this workspace and any of its sub-workspaces. On exiting a workspace any variables defined for the workspace's scope are deleted.

The Set Variable block can only set a [Variable][Variable Property] that is accessible from its scope.

For information about variables and scope, please see [Working with Variables][].

### Null Value

If [Value][Value Property] is not provided or is set to null, [Variable][Variable Property] will be set to null.

[Variable Property]: {{< ref "#variable" >}}
[Value Property]: {{< ref "#value" >}}
[Overwriting a Variable Property]: {{< ref "#overwriting-a-variable-property" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[TValue]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}

[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Working with References]: {{< url "Cortex.Reference.Concepts.WorkingWithReferences.MainDoc" >}}
[Working with Variables]: {{< url "Cortex.Reference.Concepts.WorkingWithVariables.MainDoc" >}}
