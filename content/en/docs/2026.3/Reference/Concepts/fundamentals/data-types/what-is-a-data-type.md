---
title: "What is a Data Type?"
linkTitle: "What is a Data Type?"
description: "Information regarding what a data type is, basic and complex data types and their differences."
weight: 1
---

# {{% param title %}}

## Summary

A **data type** defines what kind of value a [block property][] can accept and what members (properties, methods, and so on) an [object][] of that type exposes. {{% ctx %}} is built on C# and .NET, so its data types follow the same rules as C# for assignment, defaults, nullability, and equality.

Data types in {{% ctx %}} are commonly described in two ways:

| Classification | Question answered | Examples |
| --- | --- | --- |
| [Value type][value type] or [reference type][] | How is the value stored and copied? | [Int32][] (value), [String][] (reference) |
| [Basic data type][basic data type] or [complex data type][] | How is the value shown in the UI and how complex is its structure? | [Boolean][] (basic), [List&lt;TItem&gt;][] (complex) |

These classifications are independent. For example, [String][] is a [basic data type][] but also a [reference type][].

For how a data type relates to a live value at runtime, see [What is an Object?][]. For how variables hold data without having their own type, see [What is a Variable?][].

## Value Types

A **value type** stores its data directly. When you assign a value type from one [variable][] to another, each variable holds its own copy of the value.

In C# and {{% ctx %}}:

* Value types **cannot** be `null` unless they are wrapped in [Nullable&lt;T&gt;][].
* Each value type has a **default value** that is not `null` (for example `0` for [Int32][], `false` for [Boolean][], `0001-01-01T00:00:00` for [DateTime][]).
* Equality compares the stored values, not memory addresses. See [Object Equality][].

### Using value types in flows

When a [Set Variable][] block sets one variable to the value of another variable that holds a value type, the variables refer to **separate instances**. Updating one variable does not change the other.

```csharp
($)CountA = 10
($)CountB = ($)CountA   // ($)CountB is a separate copy
```

If `($)CountB` is later set to `20`, `($)CountA` remains `10`.

[Copy Object][] can also be used to copy a value type. For value types, assignment already produces a separate instance; [Copy Object][] is more useful when the value is held in an [Object][object]- or [dynamic][]-typed variable or inside a [collection][].

For general C# guidance, see [Value types (C#)][MS Value Types] and [Default values of C# types][MS Default Values].

## Reference Types

A **reference type** stores a reference (pointer) to an object in memory, not the object's data itself. Multiple variables can refer to the **same** instance.

In C# and {{% ctx %}}:

* Reference types **can** be `null` (no instance).
* The default value for a reference type is `null`.
* Equality usually compares references unless the type overrides `==` or `Equals` (for example [String][] compares by character content). See [Object Equality][].

### Using reference types in flows

When a [Set Variable][] block sets one variable to another variable that holds a reference type, both variables refer to the **same instance**. Changes made through either variable affect the shared object.

For example, if `($)List1` contains `[1, 2, 3]` and [Set Variable][] sets `($)List2` to `($)List1`:

* Adding an item to `($)List1` also changes `($)List2`.
* Setting `($)List1[0]` updates the item seen through `($)List2`.

The same sharing applies when adding a reference to a [List][] — the list stores the actual reference, not a copy of the object.

To work with an independent copy of a reference type, use [Copy Object][]. It performs a **deep copy**: nested objects inside the copy are also duplicated, so changes to the copy do not affect the original.

For general C# guidance, see [Reference types (C#)][MS Reference Types].

## Basic Data Types

A **basic data type** is a simple scalar type whose value can be shown directly in the [Variables List][] when [debugging a flow][]. For example, an [Int32][] shows as `42` and a [String][] shows surrounded by double quotes (for example `"MyString"`).

Basic data types are typically used for single values such as numbers, text, dates, and logical flags. They do not contain nested items or platform-specific behaviour on their own.

The following table lists common basic data types and whether each is a [value type][] or [reference type][] in C#. For full details on any type, see [All Data Types][Data Types].

| Data type | Value or reference | Default value | Notes |
| --- | --- | --- | --- |
| [Boolean][] | Value | `false` | |
| [Char][] | Value | `'\0'` | |
| [Int16][] | Value | `0` | |
| [Int32][] | Value | `0` | Often referred to as Integer in examples |
| [Int64][] | Value | `0` | |
| [Single][] | Value | `0` | |
| [Double][] | Value | `0` | |
| [DateTime][] | Value | `0001-01-01T00:00:00` | |
| [DateTimeOffset][] | Value | `0001-01-01T00:00:00+00:00` | |
| [TimeSpan][] | Value | Zero interval | |
| [Guid][] | Value | `00000000-0000-0000-0000-000000000000` | |
| [String][] | Reference | `null` | Basic type, but stored as a reference type in .NET |
| [Nullable&lt;T&gt;][] | Value | `null` when `T` is a value type | Wraps a value type so it can be `null` |

Other built-in C# value types (such as enums and structs) follow the same value-type rules. See [Built-in types (C#)][MS Builtin Types].

## Complex Data Types

A **complex data type** is a type whose structure is not a single scalar value. In {{% ctx %}}, complex data types include [collections][Collections], platform and domain types, and the general-purpose [Object][object] and [dynamic][] types.

When a variable holds a complex data type that is not a [collection][], the [Variables List][] may show a summary such as `Instance of Command` until you open the [Variable Details Viewer][]. [Collections][Collections] show their type and item count (for example `Dictionary<string, object> with 2 item(s)`).

### Collections

[Collections][] group multiple items. Common collection data types include:

* [List&lt;TItem&gt;][] — ordered items
* [Dictionary&lt;TKey, TItem&gt;][] — key/item pairs
* [Structure][] — key/item pairs with [String][] keys (a {{% ctx %}}-specific type)
* [Array][], [IList&lt;TItem&gt;][], [IEnumerable&lt;TItem&gt;][] — other collection interfaces and types

Collections are [reference types][]. Assigning one collection variable to another with [Set Variable][] shares the same instance unless you use [Copy Object][].

For how to work with items and keys, see [Collections][] in Working with Collections.

### Platform and domain types

Complex data types also include types that represent platform concepts or integrations, for example:

* [Command][] — database commands
* [FlowException][] — flow exceptions
* HTTP, email, file, and session types under [All Data Types][Data Types]

These types are [reference types][] and usually display as `Instance of <TypeName>` in the [Variables List][].

### Object and dynamic

[Object][object] (`System.Object`) is the root type in .NET; every other data type derives from it. [dynamic][] behaves like [Object][object] but does not require an explicit [cast][] when you use the stored value as its original type.

| | [Object][object] | [dynamic][] |
| --- | --- | --- |
| Default value | `null` | `null` |
| Category | Complex (general-purpose) | Complex (general-purpose) |
| Typical use | Block properties that accept any type | Heterogeneous [collections][Collections] (for example `[1, "Text", true]`) |
| Casting required | Yes, to use as a specific type | No |

`dynamic` is more commonly encountered than bare `Object` in flows. See [Object vs dynamic][] in [What is an Object?][] and the [Object][object] and [dynamic][] data type pages.

## Remarks

### Value types, reference types, and null

[Value types][value types] cannot be `null` unless wrapped in [Nullable&lt;T&gt;][]. [Reference types][reference types] can be `null`. A [Set Variable][] block with no [Value][] sets the target variable to `null`.

For more detail, see [Null and Nullable Types][].

### Known Limitations

* [Variables][] do not have their own data type. Compatibility is checked when a variable is used in a [block property][]; [dynamic][] values are checked at runtime instead of design time. See [Variable Typing][].
* Whether two complex objects are equal depends on context (expressions versus [collection blocks][]). See [Object Equality][].

## See Also

### Related Concepts

* [What is an Object?][]
* [What is a Variable?][]
* [Null and Nullable Types][]
* [Generics][]
* [Object Equality][]
* [Object Casting][]
* [Collections][]

### Related Data Types

* [All Data Types][Data Types]
* [Object][object]
* [dynamic][]
* [String][]
* [Int32][]
* [List&lt;TItem&gt;][]
* [Structure][]

### Related Blocks

* [Set Variable][]
* [Copy Object][]
* [All Blocks][]

### External Documentation

* [Value types (C#)][MS Value Types]
* [Reference types (C#)][MS Reference Types]
* [Built-in types (C#)][MS Builtin Types]
* [Default values of C# types (C#)][MS Default Values]

[Object vs dynamic]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}

[value type]: {{< ref "#value-types" >}}
[value types]: {{< ref "#value-types" >}}

[reference type]: {{< ref "#reference-types" >}}
[reference types]: {{< ref "#reference-types" >}}

[basic data type]: {{< ref "#basic-data-types" >}}

[complex data type]: {{< ref "#complex-data-types" >}}

[What is an Object?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}
[object]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}
[cast]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[collection blocks]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[collection]: {{< url path="Cortex.Reference.DataTypes.Collections.MainDoc" >}}

[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Variable Typing]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[Null and Nullable Types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.NullAndNullableTypes.MainDoc" >}}
[Generics]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[block property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[Value]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}

[debugging a flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.MainDoc" >}}
[Variables List]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer.VariablesList" >}}
[Variable Details Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer.VariableDetailsViewer" >}}

[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}
[Copy Object]: {{< url path="Cortex.Reference.Blocks.Objects.CopyObject.CopyObject.MainDoc" >}}
[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Char]: {{< url path="Cortex.Reference.DataTypes.Text.Char.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}

[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[TimeSpan]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimeSpan.MainDoc" >}}
[Guid]: {{< url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc" >}}
[Nullable&lt;T&gt;]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Array]: {{< url path="Cortex.Reference.DataTypes.Collections.Array.MainDoc" >}}
[IList&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}
[IEnumerable&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.IEnumerable_TItem.MainDoc" >}}

[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[FlowException]: {{< url path="Cortex.Reference.Exceptions.Flows.FlowException.MainDoc" >}}

[MS Value Types]: {{< url path="MSDocs.CSharp.ValueTypes" >}}
[MS Reference Types]: {{< url path="MSDocs.CSharp.ReferenceTypes" >}}
[MS Builtin Types]: {{< url path="MSDocs.CSharp.BuiltinTypes" >}}
[MS Default Values]: {{< url path="MSDocs.CSharp.DefaultValues" >}}
