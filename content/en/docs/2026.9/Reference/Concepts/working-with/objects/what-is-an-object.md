---
title: "What is an Object?"
linkTitle: "What is an Object?"
description: "Information regarding what an object is, how it relates to data types, and how objects are used in flows."
weight: 1
---

# {{% param title %}}

## Summary

In C# and {{% ctx %}}, an **object** is a specific instance of a [data type][] at runtime—the actual value stored in a [variable][] or passed through a [block property][]. A **data type** is the definition that describes what kind of value an object can hold and what members (properties, methods, and so on) it exposes.

Every object in {{% ctx %}} ultimately derives from the [Object][] data type (`System.Object`). That makes `Object` the common base for all other types, from simple scalars such as [Int32][] and [String][] to [collections][collection] and platform types such as [Command][].

| Term | Meaning | Example |
| --- | --- | --- |
| Data type | The definition or blueprint | `String`, `List<Int32>`, `Structure` |
| Object | A runtime instance of a data type | `"Hello"`, a list containing `[1, 2, 3]`, a `Structure` with named fields |

For how data types are classified (basic, complex, value, and reference), see [What is a Data Type?][]. For casting, equality, and text conversion, see the other pages in this section.

## Data types and objects

A data type tells the platform what shape data has. An object is the live data that exists while a [flow][] runs.

* `Int32` is a data type; the number `42` stored in a variable is an `Int32` object.
* `List<Int32>` is a data type; `[1,2,3]` is a `List` object.
* [Structure][] is a data type; `{ "Name": "Ada", "Count": 3 }` is a `Structure` object.

[Variables][] do not have their own data type—they are named containers that hold objects of any supported [data type][]. When a variable is used in a [block property][], {{% ctx %}} checks that the object it currently holds is compatible with the property's expected type. See [Variable Typing][] in [What is a Variable?][].

## The Object data type

The [Object][] data type (`System.Object`, C# alias `object`) is the root type in .NET. Any data type can be used where an `Object` is required, because all types derive from `Object`.

| | |
| --- | --- |
| **Full name** | `System.Object` |
| **Default value** | `null` |
| **Can be used as** | `Object`, [dynamic][] |

You will rarely create a bare `Object`. In practice you create and work with more specific types—`String`, `DateTime`, `Dictionary<String, dynamic>`, and so on—that inherit from `Object`. If needed, an empty object can be created in the [Expression Editor][] with:

```csharp
new Object()
```

For full details, property editor support, and remarks, see the [Object][] data type page.

### Object vs dynamic

[Object][] and [dynamic][] behave the same in most situations. The important difference is how you use the value after it has been stored:

* **`Object`** — if the value must be used as its original type, you must [cast][] it back (for example `(Int32)($)MyObject`).
* **`dynamic`** — member access and operations are resolved at runtime without an explicit cast.

In flows, `dynamic` is more commonly encountered than `Object` when a block accepts or returns any data type, or when a [heterogenous][] collection (for example `[1, "Text", true]`) is saved to a variable. See [Object Casting][] for implicit and explicit casts.

### When Object or dynamic appears in flows

`Object` or `dynamic` is typically used when:

* An [Input][], [InputOutput][], or [Output][] block property can accept or return any data type.
* A [collection][] holds items of different data types and the result is stored in a variable (for example `List<dynamic>` or `Dictionary<String, Object>`).
* A generic block property such as `TObject` is used—for example on [Copy Object][] or [Convert Object To Text][].

Block properties typed as `Object` use the [Expression Editor][] for inputs and the [Variable Editor][] for [InputOutput][] and [Output][] properties. The [Literal Editor][] is not available for `Object` inputs.

## Value types and reference types

Objects are either [value types][] or [reference types][], depending on their data type. This affects assignment, copying, and equality.

| | Value type | Reference type |
| --- | --- | --- |
| Examples | [Int32][], [Boolean][], [DateTime][] | [String][], [List&lt;TItem&gt;][], [Structure][], [Command][] |
| Default | Non-null default (for example `0` for `Int32`) | `null` |
| Assignment via [Set Variable][] | Variables refer to **separate** instances | Variables refer to the **same** instance |
| Equality | Compared by value | Compared by reference (with nuances in blocks; see [Object Equality][]) |

When you assign one variable to another with [Set Variable][], a reference type object is shared: changes through either variable affect the same instance. To work with an independent copy, use [Copy Object][], which performs a deep copy (nested objects are copied too).

Value type objects are always separate instances when assigned; [Copy Object][] can still be used when you need an explicit copy of a value held in a generic or `Object`-typed variable.

## Working with objects in flows

### Viewing objects at runtime

When [debugging a flow][], the [Variables Viewer][] shows variable values. Simple values appear directly in the [Variables List][]; [complex data types][] and [collections][collection] show their type and item count (for example `Dictionary<string, object> with 2 item(s)`). Select a variable to expand its contents in the [Variable Details Viewer][].

Non-collection complex types (for example [Command][] or [FlowException][]) may display as `Instance of Command` in the list until you open the details viewer.

### Converting and serializing objects

Objects are often converted to [String][] for logging, messages, or templates:

* In expressions — `ToString()`, `Convert.ToString()`, [string interpolation][], or `String.Format()`. See [Converting Objects To Text][].
* In blocks — [Convert Object To Text][] (format templates with `{Property}` placeholders) or JSON blocks such as [Convert Object To Json][] and [Convert Json To Object][].

Text conversion behaviour depends on the object's type; some types return a meaningful string, others return the type name unless a format provider or template is used.

### Comparing objects

Whether two objects are considered equal depends on whether they are value or reference types and whether comparison happens in C# expressions or in collection blocks. [List][] and [Dictionary][Dictionary&lt;TKey, TItem&gt;] blocks may compare reference types by reference first, then fall back to value equality. See [Object Equality][].

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

* [Object Casting][]
* [Object Equality][]
* [What is a Data Type?][]
* [What is a Variable?][]
* [Converting Objects To Text][]
* [Collections][]

### Related Data Types

* [Object][]
* [dynamic][]
* [Structure][]
* [List&lt;TItem&gt;][]
* [Dictionary&lt;TKey, TItem&gt;][]

### Related Blocks

* [Copy Object][]
* [Convert Object To Text][]
* [Convert Object To Json][]
* [Convert Json To Object][]
* [Set Variable][]

### External Documentation

* [System.Object][MS Object]
* [Using type dynamic][MS dynamic]
* [Value types][MS Value Types]
* [Reference types][MS Reference Types]
* [Equality comparisons][MS Equality]

[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[Converting Objects To Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.ConvertingObjectsToText.MainDoc" >}}
[Collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[collection]: {{< url path="Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[heterogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Heterogenous" >}}

[What is a Data Type?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[value types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ValueTypes" >}}
[reference types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ReferenceTypes" >}}
[complex data types]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ComplexDataTypes" >}}

[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Variable Typing]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[debugging a flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.MainDoc" >}}

[block property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[string interpolation]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.InterpolatedStrings" >}}
[cast]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Dictionary&lt;TKey, TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Command]: {{< url path="Cortex.Reference.DataTypes.Data.Command.MainDoc" >}}
[FlowException]: {{< url path="Cortex.Reference.Exceptions.Flows.FlowException.MainDoc" >}}

[Copy Object]: {{< url path="Cortex.Reference.Blocks.Objects.CopyObject.CopyObject.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Convert Json To Object]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertJsonToObject.MainDoc" >}}
[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}

[Variables Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer.VariablesViewer" >}}
[Variables List]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer.VariablesList" >}}
[Variable Details Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer.VariableDetailsViewer" >}}

[MS Object]: {{< url path="MSDocs.DotNet.Api.System.Object.MainDoc" >}}
[MS dynamic]: {{< url path="MSDocs.DotNet.Api.System.dynamic.MainDoc" >}}
[MS Value Types]: {{< url path="MSDocs.CSharp.ValueTypes" >}}
[MS Reference Types]: {{< url path="MSDocs.CSharp.ReferenceTypes" >}}
[MS Equality]: {{< url path="MSDocs.CSharp.EqualityOperators" >}}
