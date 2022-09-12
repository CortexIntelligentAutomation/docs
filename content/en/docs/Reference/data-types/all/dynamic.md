---
title: "dynamic"
linkTitle: "dynamic"
description: "Any data type can be used where a `dynamic` data type is required. `dynamic` data type is identical to the `Object` data type, except for one difference; `dynamic` data types do not need to be explicitly cast to other data types to be used, whereas `Object` data types do."
---

# {{% param title %}}

## Summary

Any data type can be used where a `dynamic` data type is required.

`dynamic` data type is identical to the [Object][] data type, except for one difference; `dynamic` data types do not need to be explicitly cast to other data types to be used, whereas [Object][] data types do.

| | |
|-|-|
| **Category:**          | All                                                           |
| **Name:**              | `dynamic`                                                     |
| **Full Name:**         | N/A                                                           |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type can be used where a `dynamic` data type is required. `dynamic` data type is identical to the [Object][] data type, except for one difference; `dynamic` data types do not need to be explicitly cast to other data types to be used, whereas [Object][] data types do.  |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `Object`, `dynamic`                                           |
| **Can be cast to:**    | N/A                                                           |

## Remarks

### When is the dynamic Data Type Used?

The `dynamic` data type is only likely to be encountered in the following circumstances:

* An [Input][] or [InputOutput][] property of a Block can accept any data type
* An [Output][] property of a Block can return any data type
* A [Collection][] that contains different data types (e.g. `[1, "Text", true]`) is saved to a [Variable][]

Also note, in these circumstances it is more likely to encounter the `dynamic` data type, rather than [Object][]. See [Object vs dynamic][] for more information.

### Object vs dynamic

[Object][] and `dynamic` data types are identical, except for one difference:

* Once a variable contains an [Object][] data type, if it needs to be used as its original data type it must be cast back to that data type (e.g. `(Int32)($)ObjectVariableContainingAnInteger`); a `dynamic` data type does not.

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `dynamic`.
* The Literal Editor is not available for [Input][] properties where the data type is `dynamic`.
* The Variable Editor is available for [InputOutput][] and [Output][] properties where the data type is `dynamic`.

### Known Limitations

None

## See Also

### Related Data Types

* [Object][]

### Related Concepts

None

### External Documentation

* [Using dynamic][]

[Object vs dynamic]: {{< ref "#object-vs-dynamic" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Collection]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[System.Object]: {{< url "MSDocs.DotNet.Api.System.Object.MainDoc" >}}
[Using dynamic]: {{< url "MSDocs.DotNet.Api.System.dynamic.MainDoc" >}}

[Object]: {{< url "Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
