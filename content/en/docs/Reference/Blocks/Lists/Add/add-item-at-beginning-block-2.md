---
title: "Add Item At Beginning"
linkTitle: "Add Item At Beginning"
description: "Adds an Item at the beginning of an IList&lt;TItem&gt;, where TItem represents the type of Items that can be added to the List."
---

![Icon](/blocks/lists-add-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Lists.Add.AddItemAtBeginningBlock`2)</p>

Adds an [Item][Item Property] at the beginning of an [IList][]&lt;[TItem][]&gt;, where [TItem][] represents the type of [Item][Item Property]s that can be added to the [List][List Property].

## Examples

### Add an Item at the beginning of an empty List

#### Inputs

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[]` | `($)List` is a variable of type [IList][]&lt;[String][]&gt; |
| [Item][Item Property] | `($)Item`, with value `"New Item"` | `($)Item` is a variable of type [String][] |

#### Outputs

The variable `($)List` will be updated to the following:

```json
[
  "New Item"
]
```

***

### Add an Item at the beginning of a List containing items of different types

#### Inputs

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [List][List Property] | `($)List`, with value `[ "Some Text", 1 ]`[<sup>1<sup/>][List Literal] | `($)List` is a variable of type [IList][]&lt;[Object][]&gt; |
| [Item][Item Property] | `(object)($)Item`, with value `"New Item"` | `($)Item` is a variable of type [String][] |

#### Outputs

The variable `($)List` will be updated to the following:

```json
[
  "New Item",
  "Some Text",
  1
]
```

***

## Input Properties

### List

The [IList][]&lt;[TItem][]&gt; where the [Item][Item Property] is added.  
  
When adding an [Item][Item Property] to an [IList][]&lt;[Object][]&gt;, please be aware of this behavior:

* [Adding an Item at the beginning of a List that contains multiple types][]

| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TItem][]&gt; |
| Property Type | [InputOutput][] |
| Default Value | `($)List` |

### Item

The [Item][Item Property] to be added at the beginning of the [List][List Property].

| | |
|--------------------|---------------------------|
| Data Type | [TItem][] |
| Property Type | [Input][] |
| Default Value | `($)Item` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [CannotModifyReadOnlyListException][] | Thrown when [List][List Property] is read-only. |
| [InvalidPropertyValueException][] | Thrown when [List][List Property] or [Item][Item Property] property has an invalid value. |
| [PropertyNullException][] | Thrown when [List][List Property] property is `null`. |

## Remarks

### Adding an Item at the beginning of a List that contains multiple types

By default, all [Item][Item Property]s in an [IList][]&lt;[TItem][]&gt; are of a specific type, e.g. In an [IList][]&lt;[String][]&gt;, all [Item][Item Property]s are of type [String][].  
  
An [IList][]&lt;[TItem][]&gt; can be created that holds any type, this would be an [IList][]&lt;[Object][]&gt;.  
To add to an [IList][]&lt;[Object][]&gt; using a variable, e.g. `($)StringVar`, an expression must be used to [explicitly cast][] the variable to an [Object][], and can be done by using either of the following:

```csharp
(object)($)StringVar
```

```csharp
(System.Object)($)StringVar
```

[List Property]: {{< ref "#list" >}}
[Item Property]: {{< ref "#item" >}}
[Adding an Item at the beginning of a List that contains multiple types]: {{< ref "#adding-an-item-at-the-beginning-of-a-list-that-contains-multiple-types" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[explicitly cast]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ExplicitlyCastAVariable" >}}
[List Literal]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.AListLiteral" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.Generics.MainDoc" >}}
[CannotModifyReadOnlyListException]: {{< url "Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[InvalidPropertyValueException]: {{< url "Cortex.Reference.Exceptions.Common.Property.InvalidPropertyValueException.MainDoc" >}}

[IList]: {{< url MSDocs.DotNet.Api.System.Collections.Generic.IList >}}
[Object]: {{< url "MSDocs.DotNet.Api.System.Object.MainDoc" >}}
[String]: {{< url "MSDocs.DotNet.Api.System.String" >}}
