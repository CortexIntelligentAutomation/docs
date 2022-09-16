---
title: "Copy Object"
linkTitle: "Copy Object"
description: "Copies an Object."
---

{{< figure src="/blocks/objects-copy-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Objects.CopyObject.CopyObjectBlock`1)</p>

## Description

Makes a [Copy][Copy Property] of an [Object][Object Property].

Any type of object can be copied, including Lists, Dictionaries, Structures etc.

A deep copy will be performed, which means if the [Object][Object Property] contains other objects, they are also copied. This is as opposed to a shallow copy, which only makes a copy of the [Object][Object Property]; in a shallow copy contained objects are not copied, they are left as the original.

## Examples

### Copy a List

This example will make a copy of `[[1, 2, 3], [4, 5, 6]]`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Object][Object Property] | `($)Object`, with value `[[1, 2, 3], [4, 5, 6]]` | `($)Object` is a variable of type [List][]&lt;[List][]&lt;[Int32][]&gt;&gt; |
| [Copy][Copy Property] | `($)Copy`, with no value | `($)Copy` is a variable that will be set to the type of the item (i.e. [List][]&lt;[List][]&lt;[Int32][]&gt;&gt;) |

#### Result

Making a copy of `[[1, 2, 3], [4, 5, 6]]` results in the variable `($)Copy` being updated to the following:

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

Note that `($)Copy` is an exact copy. If `($)Copy` has new items added to it, items updated in it, or items removed from it, the original that `($)Copy` was copied from will not be affected.

***

## Properties

### Object

The [Object][Object Property] to make the [Copy][Copy Property] of.

Any type of object can be copied, including Lists, Dictionaries, Structures etc.

A deep copy will be performed, which means if the [Object][Object Property] contains other objects, they are also copied. This is as opposed to a shallow copy, which only makes a copy of the [Object][Object Property]; in a shallow copy contained objects are not copied, they are left as the original.
  
| | |
|--------------------|---------------------------|
| Data Type | [TObject][] |
| Property Type | [Input][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Object` with no value |

### Copy

The [Copy][Copy Property] of the [Object][Object Property].  
  
| | |
|--------------------|---------------------------|
| Data Type | [TObject][] |
| Property Type | [Output][] |
| Is Advanced | `false` |
| Default Editor | [Variable][TODO] |
| Default Value | `($)Copy` with no value |

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Null Object

If [Object][Object Property] is not provided or is set to `null`, [Copy][Copy Property] will be set to `null`.

[Object Property]: {{< ref "#object" >}}
[Copy Property]: {{< ref "#copy" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TObject]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
