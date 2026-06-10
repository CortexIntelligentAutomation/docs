---
title: "Generics"
linkTitle: "Generics"
description: "Information regarding generic data types and type parameters such as TItem, TKey, and TValue."
weight: 100
---

# {{% param title %}}

## Summary

A **generic** data type is a type definition that includes one or more **type parameters**—placeholders for actual data types that you supply when you create or use the type. Generics let the same type definition work with many different data types while keeping compile-time type checking.

{{% ctx %}} is built on C# and .NET, so its generic types follow the same rules as C#. You specify type arguments inside angle brackets to create a **constructed type**. For example, `List<Int32>` is a list whose items are [Int32][], and `Dictionary<String, dynamic>` is a dictionary with [String][] keys and [dynamic][] items.

| Term | Meaning | Example |
| --- | --- | --- |
| Generic type definition | A type with type parameters (a template) | `List<TItem>`, `Dictionary<TKey, TItem>` |
| Type parameter | Placeholder in the definition | `TItem`, `TKey`, `TValue` |
| Type argument | Concrete type you supply | `Int32`, `String`, `dynamic` |
| Constructed type | Generic type with type arguments filled in | `List<Int32>`, `Dictionary<String, String>` |

For how data types are classified more broadly, see [What is a Data Type?][]. For how generic collections use type parameters for [items][] and [keys][], see [What is a Collection?][].

## Generic types in {{% ctx %}}

Many {{% ctx %}} data types are generic. Common examples include:

| Data type | Type parameters | Role |
| --- | --- | --- |
| [List&lt;TItem&gt;][] | `TItem` | Data type of each item in the list |
| [Dictionary&lt;TKey, TItem&gt;][] | `TKey`, `TItem` | Data type of each key and each item |
| [QueueWithPriority&lt;TItem, TPriority&gt;][] | `TItem`, `TPriority` | Data type of each queued item and its priority value |
| [IList&lt;TItem&gt;][], [IEnumerable&lt;TItem&gt;][], [IDictionary&lt;TKey, TItem&gt;][] | Same as implementing types | Collection interfaces accepted by block properties |
| [Nullable&lt;T&gt;][] | `T` | Wraps a [value type][] so it can be `null` |
| [IComparer&lt;TPriority&gt;][] | `TPriority` | Compares priority values in a [QueueWithPriority&lt;TItem, TPriority&gt;][] |

Each type parameter must be replaced with a concrete [data type][] before the type can be used. `List<TItem>` by itself is not a complete type; `List<Int32>` or `List<String>` is.

### Type parameters in documentation

Throughout {{% ctx %}} documentation, type parameters appear in data type names, block property tables, and exception messages. The name is a convention that describes the parameter's role—not a separate data type you can reference on its own.

| Name | Typical meaning | Where it appears |
| --- | --- | --- |
| `TItem` | Item stored in a collection | [List][] blocks, [Dictionary][] blocks, [Queue][] blocks |
| `TKey` | Key in a key/item collection | [Dictionary][] blocks, [Dictionary&lt;TKey, TItem&gt;][] |
| `TValue` | Any value passed to a block property | [Set Variable][], [If Null][] blocks, [Format Text][] blocks |
| `TPriority` | Priority value in a priority queue | [QueueWithPriority&lt;TItem, TPriority&gt;][], [Queue][] blocks |
| `TResult` | Result returned from a task | [Wait For Task][], [Cancel Task][] blocks |
| `TTask` | Task type being operated on | Task blocks |
| `TConnectionDetails` | Connection details for a data source | [Execute Data Command][] block |
| `TObject` | Any object being converted or copied | [Convert Object To Text][], [Copy Object][] blocks |

When a block property is shown as `IList<TItem>` or `TValue`, read the type parameter as “the actual data type in your flow at runtime”. For example, a [List][] block whose `List` property is `IList<TItem>` accepts any list whose item type matches the items you pass in.

## Specifying type arguments

### In the Expression Editor

When you create a generic type in an expression, provide type arguments inside angle brackets:

```csharp
new List<Int32>() { 1, 2, 3 }
new Dictionary<String, String>() { { "Key", "Value" } }
new QueueWithPriority<String, Int32>()
```

Literal syntax can **infer** type arguments from the values you write:

| Expression | Constructed type | Notes |
| --- | --- | --- |
| `[1, 2, 3]` | `List<Int32>` | All items are integers |
| `["Some Text", true, 1]` | `List<dynamic>` | Mixed item types |
| `[]` | `List<dynamic>` | Empty list with no type context |
| `new List<String>() { "A", "B" }` | `List<String>` | Explicit type argument |

See [Create a List&lt;TItem&gt;][] and [Create a Dictionary&lt;TKey, TItem&gt;][] on the data type pages for more examples.

### At block properties

Block properties declare the expected constructed type or a compatible generic interface. For example:

* A property typed as [IList&lt;TItem&gt;][] accepts `List<Int32>`, `List<String>`, or any other `List<TItem>` where `TItem` matches the items you supply.
* [Set Variable][] accepts any [TValue][]; the variable holds whatever type you assign.

When you connect a [variable][] to a block property, {{% ctx %}} checks that the variable's current type is compatible with the property's expected type (including generic type arguments). Values stored as [dynamic][] are checked at runtime instead of design time. See [Variable Typing][].

## Homogenous and heterogenous types

Whether a generic collection holds one item type or many depends on the type arguments you choose:

| Type argument | Collection behaviour | Term |
| --- | --- | --- |
| A single specific type (for example `Int32`, `String`) | Every item must be that type | [Homogenous][] |
| [Object][] or [dynamic][] | Items may have different data types | [Heterogenous][] |

Examples:

* `List<Int32>` — [homogenous][]; every item is an [Int32][].
* `List<dynamic>` — [heterogenous][]; items may mix numbers, text, and other types.
* `Dictionary<String, String>` — [homogenous][] keys and items.
* `Dictionary<String, dynamic>` — [homogenous][] [String][] keys; [heterogenous][] items.

For more detail, see [Items][] and the [Generics glossary entry][Generics glossary].

## Generic blocks

Some {{% ctx %}} blocks are themselves generic. Their .NET type name includes a backtick and a number that indicates how many type parameters the block has—for example ``SetVariableBlock`1`` (one type parameter) in the [Set Variable][] namespace line.

Generic blocks use type parameters on properties so one block definition works with any compatible data type. The type parameter name in the documentation (such as [TValue][] on [Set Variable][]) describes that role; at runtime it is always a concrete type such as `String` or `List<Int32>`.

## Covariance and interface compatibility

Some generic interfaces allow a constructed type to be used where a less specific type argument is expected. Data type pages document this under **Can be used as** in the Summary table.

For example, [List&lt;TItem&gt;][] documents that `List<Int32>` can be used as `IEnumerable<Object>` because [Int32][] derives from [Object][]—this is called **covariance**. Similar rules apply to [IEnumerable&lt;TItem&gt;][] and related interfaces.

Always check the **Can be used as** and **Can be cast to** rows on the specific [data type][] page when passing a generic value to a block property or expression.

## Remarks

### Nullable&lt;T&gt; as a generic type

[Nullable&lt;T&gt;][] is a generic [value type][] that wraps another value type so it can hold `null`. For example, `Nullable<Int32>` (written in C# as `Int32?`) can be `null` or an integer. See [Null and Nullable Types][].

### Open generic types

An **open generic type** is a generic definition that still has unfilled type parameters (for example `List<>` or `Dictionary<,>` in some C# contexts). In {{% ctx %}} flows you normally work with **closed** constructed types such as `List<Int32>`—every type parameter has a concrete type argument.

### Known Limitations

* You use generic types provided by .NET and {{% ctx %}}; you cannot define new generic classes or interfaces in a flow.
* Not every data type is valid for every type parameter. For example, [Dictionary&lt;TKey, TItem&gt;][] supports only certain types for `TKey`; see that type's Known Limitations section.
* When `TKey` is not [String][], dictionary keys may display as their `ToString()` representation in Gateway rather than as their native type.
* Generic type parameter names in documentation (`TItem`, `TKey`, and so on) are labels for clarity. They are not data types you can assign to a variable or use in an expression on their own.

## See Also

### Related Concepts

* [What is a Data Type?][]
* [Null and Nullable Types][]
* [What is a Collection?][]
* [Items][]
* [Keys][]
* [Object Casting][]

### Related Data Types

* [List&lt;TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]
* [Structure][]
* [QueueWithPriority&lt;TItem, TPriority&gt;][]
* [IList&lt;TItem&gt;][]
* [IEnumerable&lt;TItem&gt;][]
* [IDictionary&lt;TKey, TItem&gt;][]
* [Nullable&lt;T&gt;][]
* [dynamic][]

### Related Blocks

* [Set Variable][]
* [List][] blocks (for example [Add Item At End][])
* [Dictionary][] blocks (for example [Add Item With Key][])
* [Queue][] blocks (for example [Enqueue Item][])

### External Documentation

* [C# documentation][MS C#]
* [System.Collections.Generic.List&lt;TItem&gt;][MS List]
* [System.Collections.Generic.Dictionary&lt;TKey, TItem&gt;][MS Dictionary]
* [System.Collections.Generic.IEnumerable&lt;TItem&gt;][MS IEnumerable]

[generic type parameter]: {{< ref "#type-parameters-in-documentation" >}}

[data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[What is a Data Type?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[Null and Nullable Types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.NullAndNullableTypes.MainDoc" >}}
[What is a Collection?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[Items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}

[value type]: {{< ref "what-is-a-data-type.md#value-types" >}}
[value types]: {{< ref "what-is-a-data-type.md#value-types" >}}

[homogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Homogenous" >}}
[heterogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Heterogenous" >}}
[Generics glossary]: {{< ref "../../../Glossary/f-j.md#generics" >}}

[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Variable Typing]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Queue]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[QueueWithPriority&lt;TItem, TPriority&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.QueueWithPriority.MainDoc" >}}
[IList&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}
[IDictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[Nullable&lt;T&gt;]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[IComparer&lt;TPriority&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IComparer.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Create a List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Create a Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}

[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}
[If Null]: {{< ref "../../../Blocks/decisions/if/if-null-exit-right-block-1.md" >}}
[Format Text]: {{< url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc" >}}
[Wait For Task]: {{< url path="Cortex.Reference.Blocks.Tasks.WaitForTask.WaitForTask.MainDoc" >}}
[Cancel Task]: {{< url path="Cortex.Reference.Blocks.Tasks.CancelTask.CancelTaskBlock.MainDoc" >}}
[Execute Data Command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Copy Object]: {{< url path="Cortex.Reference.Blocks.Objects.CopyObject.CopyObject.MainDoc" >}}

[TValue]: {{< ref "#type-parameters-in-documentation" >}}
[TPriority]: {{< ref "#type-parameters-in-documentation" >}}

[Add Item At End]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtEnd.MainDoc" >}}
[Add Item With Key]: {{< url path="Cortex.Reference.Blocks.Dictionaries.AddItem.AddItemWithKey.MainDoc" >}}
[Enqueue Item]: {{< url path="Cortex.Reference.Blocks.Queues.EnqueueItem.EnqueueItemBlock.MainDoc" >}}

[MS C#]: {{< url path="MSDocs.CSharp.MainDoc" >}}
[MS List]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[MS Dictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[MS IEnumerable]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IEnumerable_TItem" >}}
