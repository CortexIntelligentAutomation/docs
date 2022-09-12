---
title: "Object"
linkTitle: "Object"
description: "Any data type can be used where an `Object` data type is required, as all data types derive from `Object`."
---

# {{% param title %}}

<p class="namespace">(System.Object)</p>

## Summary

Any data type can be used where an `Object` data type is required, as all data types derive from `Object`.

`Object` data type is identical to the [dynamic][] data type, except for one difference; [dynamic][] data types do not need to be explicitly cast to other data types to be used, whereas `Object` data types do.

| | |
|-|-|
| **Category:**          | All                                                           |
| **Name:**              | `Object`                                                      |
| **Full Name:**         | `System.Object`                                               |
| **Alias:**             | `object`                                                      |
| **Description:**       | Any data type can be used where an `Object` data type is required, as all data types derive from `Object`. `Object` data type is identical to the [dynamic][] data type, except for one difference; [dynamic][] data types do not need to be explicitly cast to other data types to be used, whereas `Object` data types do.                                                                  |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `Object`, `dynamic`                                           |
| **Can be cast to:**    | N/A                                                           |

## Remarks

### When is the Object Data Type Used?

The `Object` data type is only likely to be encountered in the following circumstances:

* An [Input][] or [InputOutput][] property of a Block can accept any data type
* An [Output][] property of a Block can return any data type
* A [Collection][] that contains different data types (e.g. `[1, "Text", true]`) is saved to a [Variable][]

Also note, in these circumstances it is more likely to encounter the [dynamic][] data type, rather than `Object`. See [Object vs dynamic][] for more information.

It is also highly unlikely that you will need to create an `Object`; typically you will create and work with other data types such as [String][] or [Int32][] that derive from `Object`. However, if ever required you can create a new object using the following expression:

```csharp
new Object()
```

### Object vs dynamic

`Object` and [dynamic][] data types are identical, except for one difference:

* Once a variable contains an `Object` data type, if it needs to be used as its original data type it must be cast back to that data type (e.g. `(Int32)($)ObjectVariableContainingAnInteger`); a [dynamic][] data type does not.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Object`.
* The Literal Editor is not available for [Input][] properties where the data type is `Object`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `Object`.

### Known Limitations

None

## See Also

### Related Data Types

* [dynamic][]

### Related Concepts

None

### External Documentation

* [System.Object][]
* [Using dynamic][]

[Object vs dynamic]: {{< ref "#object-vs-dynamic" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Collection]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[System.Object]: {{< url "MSDocs.DotNet.Api.System.Object.MainDoc" >}}
[Using dynamic]: {{< url "MSDocs.DotNet.Api.System.dynamic.MainDoc" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
