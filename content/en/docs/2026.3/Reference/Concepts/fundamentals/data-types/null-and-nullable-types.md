---
title: "Null and Nullable Types"
linkTitle: "Null and Nullable Types"
description: "Information regarding null and nullable data types."
weight: 200
---

# {{% param title %}}

## Summary

In C# and {{% ctx %}}, **`null`** means that a variable or property does not refer to an object instance, or that a nullable value type has no value. Whether a value can be `null` depends on its [data type][]:

| Category | Can be `null`? | Default when unset | Examples |
| --- | --- | --- | --- |
| [Reference type][reference type] | Yes | `null` | [String][], [List&lt;TItem&gt;][], [Object][], [dynamic][] |
| [Value type][value type] | No (unless wrapped) | A non-null default (for example `0`, `false`) | [Int32][], [Boolean][], [DateTime][] |
| [Nullable&lt;T&gt;][] | Yes (when `T` is a value type) | `null` | `Nullable<Int32>` (written in C# as `Int32?`) |

{{% ctx %}} follows standard C# and .NET rules for assignment, defaults, and null checks. For how value and reference types differ more broadly, see [What is a Data Type?][]. For how [Nullable&lt;T&gt;][] fits into generic types, see [Generics][].

## Null

**`null`** is a literal that represents the absence of a value. It is not an empty string, zero, or `false` — it means no instance exists.

### Which types can be null?

[Reference types][reference type] can always be assigned `null`. That includes [String][] (even though it is a [basic data type][]), [collections][], [Object][], [dynamic][], and platform types such as [Command][].

[Value types][value type] cannot be `null` on their own. An [Int32][] variable always holds a number; if you never assign one, it holds the default `0`, not `null`. To represent "no value" for a value type, wrap it in [Nullable&lt;T&gt;][].

| Value | Data type | Is `null`? | Notes |
| --- | --- | --- | --- |
| `null` | [String][] | Yes | No text instance |
| `""` | [String][] | No | Empty string is a valid instance |
| `0` | [Int32][] | No | Default numeric value |
| `null` | [Nullable&lt;Int32&gt;][] / `Int32?` | Yes | Nullable value type with no value |
| `null` | [List&lt;TItem&gt;][] | Yes | No list instance |
| `null` | [Object][] / [dynamic][] | Yes | No object instance |

For the difference between `null` and empty text (`""`), see [Empty Text and Whitespace][] and the [Is Text Null][] block. Empty text is not `null`.

### Setting a variable to null

A [Set Variable][] block sets the target [variable][] to `null` when:

* The [Value][] property is left empty (no value), or
* The [Value][] is explicitly `null`.

This applies to any [TValue][] the block accepts. See the [Null Value][] remark on the [Set Variable][] block page.

```csharp
($)Name = null          // reference type set to null
($)OptionalCount = null // Nullable<Int32> set to null
```

### Checking for null

You can test whether a value is `null` in several ways:

| Approach | When to use |
| --- | --- |
| [If Null Exit Right][] / [If Null Exit Bottom][] | Branch the flow when a [TValue][] is or is not `null` |
| [Is Text Null][] | Test whether a [String][] is `null` (not empty or whitespace) |
| [Is Text Null Or Empty][] | Test whether text is `null` or `""` |
| Expression: `($)Value == null` or `($)Value != null` | General null check in the [Expression Editor][] |

In C# expressions, `== null` on a reference type tests whether the reference is missing. On [Nullable&lt;T&gt;][], it tests whether the nullable value has no value (`HasValue` is `false`). See [Object Equality][] for how null interacts with equality comparisons.

The [If Null][] blocks require a **nullable** [TValue][] — a type that allows `null`. If you pass a non-nullable [value type][] (for example a literal `42` of type [Int32][]), the block throws [PropertyNotNullableException][] at run time.

### When null is not allowed

Many block properties require a non-null value. If you pass `null` where it is not permitted, {{% ctx %}} throws [PropertyNullException][].

Examples include:

* [List][] properties when the list instance itself must exist (for example [Add Item At End][])
* Path or connection properties on file, data, or HTTP blocks
* Required object references such as a [Command][] on [Execute Data Command][]

Some properties accept collections but reject `null` **items** inside them. In that case, [PropertyContainsNullItemException][] or [InvalidPropertyValueException][] may be thrown instead. See [Null items in collections][].

## Nullable Types

A **nullable type** is a type that allows `null`. In {{% ctx %}} documentation, "nullable" usually means one of the following:

* Any [reference type][] (for example [String][], [List&lt;TItem&gt;][])
* A [Nullable&lt;T&gt;][] constructed type where `T` is a [value type][] (for example `Nullable<Int32>`)

Plain [value types][] such as [Int32][] and [Boolean][] are **non-nullable** — they cannot hold `null`.

### Nullable&lt;T&gt;

[Nullable&lt;T&gt;][] (`System.Nullable<T>`) is a generic [value type][] that wraps another value type so it can represent either a value or `null`. It is documented as a [generic type][] with type parameter `T`.

In C# you can write the shorthand form with `?`:

| Long form | Shorthand | Meaning |
| --- | --- | --- |
| `Nullable<Int32>` | `Int32?` | Optional integer |
| `Nullable<Boolean>` | `Boolean?` | Optional true/false |
| `Nullable<DateTime>` | `DateTime?` | Optional date and time |

When a nullable value type holds a value, it behaves like the underlying type for most operations. When it is `null`:

* Comparing to `null` with `==` returns `true`.
* Accessing `.Value` throws an exception in C# (there is no underlying value).
* The `HasValue` property is `false`.

```csharp
($)Count = (Int32?)null     // no value
($)Count = (Int32?)42        // has value 42
($)Count == null             // true when no value is set
($)Count.HasValue            // false when null, true when 42
($)Count.Value               // 42 when HasValue is true
```

[Nullable&lt;T&gt;][] only wraps [value types][]. You cannot create `Nullable<String>` — [String][] is already a [reference type][] and can be `null` without a wrapper.

For more on type parameters and constructed types, see [Generics][] and the [Nullable&lt;T&gt;][] data type page.

### Null items in collections

Whether a collection item can be `null` depends on the item type (`TItem`):

* `List<String>` and `List<dynamic>` can contain `null` entries in many contexts.
* `List<Int32>` stores non-nullable [Int32][] values; adding `null` as an item is not valid and may throw [InvalidPropertyValueException][].
* [Keys][] in [Dictionary][] and [Structure][] cannot be `null`.

See [Items][] for how null items interact with collection blocks.

## Remarks

### Nullable block properties

Some block properties are declared to accept only nullable types. The [If Null][] blocks are the main example: the [Value][] must be a type that allows `null` (a [reference type][] or [Nullable&lt;T&gt;][]). Supplying a non-nullable [value type][] literal or variable causes [PropertyNotNullableException][].

[PropertyNotNullableException][] message text refers to types "that do not allow null values (e.g. Int32, Boolean, Char, etc.)". Use a [reference type][] or wrap the value in [Nullable&lt;T&gt;][] when a property requires a nullable type.

### Default values vs null

Do not confuse `null` with a type's default value:

| Data type | Default | Same as `null`? |
| --- | --- | --- |
| [String][] | `null` | Yes |
| [Int32][] | `0` | No |
| [Boolean][] | `false` | No |
| [DateTime][] | `0001-01-01T00:00:00` | No |
| [List&lt;TItem&gt;][] | `null` (no list created) | Yes — until you assign or create an instance |
| [Nullable&lt;Int32&gt;][] | `null` | Yes |

See [Default values of C# types][MS Default Values] for the full C# rules.

### Known Limitations

* The [Nullable&lt;T&gt;][] data type page is not yet complete; behaviour follows standard C# nullable value type rules.
* {{% ctx %}} documentation uses **nullable** to mean "can hold `null`" ([reference types][] and [Nullable&lt;T&gt;][]). This is separate from C# **nullable reference types** (`string?` annotations), which are not described separately in {{% ctx %}} flows.
* [Variables][] do not have a fixed data type. Whether `null` is valid is checked when the variable is used in a [block property][]; [dynamic][] values are checked at run time. See [Variable Typing][].

## See Also

### Related Concepts

* [What is a Data Type?][]
* [Generics][]
* [What is an Object?][]
* [Object Equality][]
* [Items][]
* [Empty Text and Whitespace][]

### Related Data Types

* [Nullable&lt;T&gt;][]
* [String][]
* [Object][]
* [dynamic][]
* [Int32][]
* [Boolean][]

### Related Blocks

* [Set Variable][]
* [If Null Exit Right][]
* [If Null Exit Bottom][]
* [Is Text Null][]
* [Is Text Null Or Empty][]

### Related Exceptions

* [PropertyNullException][]
* [PropertyNotNullableException][]
* [PropertyContainsNullItemException][]
* [InvalidPropertyValueException][]

### External Documentation

* [Value types (C#)][MS Value Types]
* [Reference types (C#)][MS Reference Types]
* [Default values of C# types (C#)][MS Default Values]
* [Equality comparisons (C#)][MS Equality]

[Null Value]: {{< ref "../../../Blocks/variables/set-variable/set-variable-block-1.md#null-value" >}}
[Null items in collections]: {{< ref "#null-items-in-collections" >}}

[data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[What is a Data Type?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[Generics]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[generic type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[value type]: {{< ref "what-is-a-data-type.md#value-types" >}}
[value types]: {{< ref "what-is-a-data-type.md#value-types" >}}
[reference type]: {{< ref "what-is-a-data-type.md#reference-types" >}}
[reference types]: {{< ref "what-is-a-data-type.md#reference-types" >}}
[basic data type]: {{< ref "what-is-a-data-type.md#basic-data-types" >}}

[What is an Object?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.WhatIsAnObject.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[Empty Text and Whitespace]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.EmptyTextAndWhitespace.MainDoc" >}}
[Items]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Items.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}

[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Variable Typing]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[block property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}

[collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}

[Nullable&lt;T&gt;]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[Nullable&lt;Int32&gt;]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[TValue]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[Value]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}
[If Null]: {{< ref "../../../Blocks/decisions/if/if-null-exit-right-block-1.md" >}}
[If Null Exit Right]: {{< ref "../../../Blocks/decisions/if/if-null-exit-right-block-1.md" >}}
[If Null Exit Bottom]: {{< ref "../../../Blocks/decisions/if/if-null-exit-bottom-block-1.md" >}}
[Is Text Null]: {{< ref "../../../Blocks/Text/is-text/is-text-null-block.md" >}}
[Is Text Null Or Empty]: {{< ref "../../../Blocks/Text/is-text/is-text-null-or-empty-block.md" >}}
[Add Item At End]: {{< url path="Cortex.Reference.Blocks.Lists.AddItem.AddItemAtEnd.MainDoc" >}}
[Execute Data Command]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyNotNullableException]: {{< url path="Cortex.Reference.Exceptions.Decisions.PropertyNotNullableException.MainDoc" >}}
[PropertyContainsNullItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullItemException.MainDoc" >}}
[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}

[MS Value Types]: {{< url path="MSDocs.CSharp.ValueTypes" >}}
[MS Reference Types]: {{< url path="MSDocs.CSharp.ReferenceTypes" >}}
[MS Default Values]: {{< url path="MSDocs.CSharp.DefaultValues" >}}
[MS Equality]: {{< url path="MSDocs.CSharp.EqualityOperators" >}}
