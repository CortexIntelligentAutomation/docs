---
title: "Array"
linkTitle: "Array"
description: "Any data type representing an array of items. The type of items that can be contained in the array depend upon the type of the array. Common examples include arrays of strings and integers (i.e. `String[]` and `Int32[]`)."
---

# {{< param title >}}

<p class="namespace">(System.Array)</p>

## Summary

Any data type representing an array of items.

The type of items that can be contained in the array depend upon the type of the array.

Common examples include arrays of strings and integers (i.e. `String[]` and `Int32[]`); for more see [Most Common Array Data Types][].

Arrays are very similar to Lists, but have some key differences, such as they are a fixed size and cannot be added to, or deleted from. For more information about the differences between Arrays and Lists, and when to use each of them see [Arrays vs Lists][].

| | |
|-|-|
| **Category:**          | Collections                                                   |
| **Name:**              | `Array`                                                       |
| **Full Name:**         | `System.Array`                                                |
| **Alias:**             | N/A                                                           |
| **Description:**       | Any data type representing an array of items. The type of items that can be contained in the array depend upon the type of the array.     |
| **Size:**              | Varies                                                        |
| **Default Value:**     | `null`                                                        |
| **Can be used as:**    | `IEnumerable`, `Object`, `dynamic`                            |
| **Can be cast to:**    | N/A                                                           |

## Remarks

### Most Common Array Data Types

Any of the following data types can be used where an `Array` is required:

* `Object[]` - an array containing [Object][] items
* `String[]` - an array containing [String][] items
* `Boolean[]` - an array containing [Boolean][] items
* `Int16[]` - an array containing [Int16][] items
* `Int32[]` - an array containing [Int32][] items
* `Int64[]` - an array containing [Int64][] items
* `Single[]` - an array containing [Single][] items
* `Double[]` - an array containing [Double][] items

### Create an Array

The following table shows some of the ways that an `Array` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an explicit `Array` expression | `new Object[] {}`                       | `[]`              | Expression | `Object[]` containing zero items |
|                                    | `new String[] { "Some Text" }`          | `["Some Text"]`              | Expression | `String[]` containing one String item |
|                                    | `new Boolean[] { true, false }`         | `[true, false]`   | Expression | `Boolean[]` containing two Boolean items |
|                                    | `new Int32[] { 1, 2, 3 }`               | `[1, 2, 3]`       | Expression | `Int32[]` containing three Int32 items |
|                                    | `new Object[] { "Some Text", true, 1 }`| `["Some Text", true, 1]` | Expression | `Object[]` containing a String item, a Boolean item and an Int32 item |
| Use an implicit `Array` expression | `new [] { "Some Text" }`          | `["Some Text"]`              | Expression | `String[]` containing one String item. Implicit arrays must only contain a single data type |
|                                    | `new [] { true, false }`         | `[true, false]`   | Expression | `Boolean[]` containing two Boolean items |
|                                    | `new [] { 1, 2, 3 }`               | `[1, 2, 3]`       | Expression | `Int32[]` containing three Int32 items |

### Convert Array to Text

The following table shows some of the ways that an `Array` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block    | where `Object` property has an `Object[]` value of `["Some Text", true, 1]` | `"[\r\n  \"Some Text\",\r\n  true,\r\n  1\r\n]"` | N/A | See [Convert Object To Json][] |

### Property Editor Support

* The Expression Editor is available for [Input][] properties where the data type is `Array`.
* The Literal Editor is not available for [Input][] properties where the data type is `Array`.
* The Variable Editor is available for [InputOutput][] and [Output] properties where the data type is `Array`.

### Known Limitations

None

## See Also

### Related Data Types

* [IEnumerable][]

### Related Concepts

* [Working with Collections][]

### External Documentation

* [System.Array][]

[Most Common Array Data Types]: {{< ref "#most-common-array-data-types" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[System.Array]: {{< url "MSDocs.DotNet.Api.System.Array" >}}

[Object]: {{< url "Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Int16]: {{< url "Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url "Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Single]: {{< url "Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Double]: {{< url "Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}

[IEnumerable]: {{< url "Cortex.Reference.DataTypes.Collections.IEnumerable.MainDoc" >}}
[Working with Collections]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.MainDoc" >}}
[Arrays vs Lists]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.ArraysVersusLists" >}}
