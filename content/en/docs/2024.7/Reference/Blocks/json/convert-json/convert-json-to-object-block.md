---
title: "Convert Json To Object"
linkTitle: "Convert Json To Object"
description: "Converts Json to an Object."
---

{{< figure src="/blocks/json-convert-to-object-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Json.ConvertJson.ConvertJsonToObjectBlock)</p>

## Description

Converts [Json][Json Property] to an [Object][Object Property].

An additional [Settings][Settings Property] option can be specified to control how the conversion should deal with things such as:

* `null` objects
* Date Time formats and offsets
* Number formats
* Text escaping
* Type information

For information about the default [Settings][Settings Property] used if none are specified, as well as all other options that can be configured, please see [JsonSerializerSettings][].

## Examples

### Convert Json to a List (without Type information)

This example will convert `"[[1, 2, 3], [4, 5, 6]]"` into a [List][]&lt;[Object][]&gt;.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Json][Json Property] | `($)Json`, with value `"[[1, 2, 3], [4, 5, 6]]"` | `($)Json` is a variable of type [String][] |
| [Settings][Settings Property] | `($)Settings`, with value `null` | `($)Settings` is a variable of type [JsonSerializerSettings][] |
| [Object][Object Property] | `($)Object`, with no value | `($)Object` is a variable that will be set to a [dynamic][] value (i.e. in this example to a [List][]&lt;[Object][]&gt;). |

#### Result

Converting `"[[1, 2, 3], [4, 5, 6]]"` to an object results in the variable `($)Object` being updated to the following:

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

As the Json does not include any type information, `($)Object` will be a [List][]&lt;[Object][]&gt;, rather than a [List][]&lt;[List][]&lt;[Int32][]&gt;&gt;. This is because when performing the conversion there is no type information to tell the converter that the items in the list are [List][]&lt;[Int32][]&gt; data types.

See [Convert Json to a List (with Type information)][] for an example on how to include type information in the Json.

***

### Convert Json to a List (with Type information)

This example will convert `"[[1, 2, 3], [4, 5, 6]]"` into a [List][]&lt;[List][]&lt;[Int32][]&gt;&gt;, rather than a [List][]&lt;[Object][]&gt; as above.

For this to work, type information needs to be included in the Json representation. This can be seen below:

```json
{
    "$type": "System.Collections.Generic.List`1[[System.Collections.Generic.List`1[[System.Int32, System.Private.CoreLib]], System.Private.CoreLib]], System.Private.CoreLib",
    "$values": [
        {
            "$type": "System.Collections.Generic.List`1[[System.Int32, System.Private.CoreLib]], System.Private.CoreLib",
            "$values": [1,2,3]
        },
        {
            "$type": "System.Collections.Generic.List`1[[System.Int32, System.Private.CoreLib]], System.Private.CoreLib",
            "$values": [4,5,6]
        }
    ]
}
```

Realistically, this example is only useful if you have already produced Json including type information by using the [Convert Object To Json][] block. If this is the case, you can then convert it back with the correct data types.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Json][Json Property] | `($)Json`, with complex value as shown above | `($)Json` is a variable of type [String][] |
| [Settings][Settings Property] | `($)Settings`, with value `new JsonSerializerSettings{TypeNameHandling = TypeNameHandling.All}` | `($)Settings` is a variable of type [JsonSerializerSettings][] |
| [Object][Object Property] | `($)Object`, with no value | `($)Object` is a variable that will be set to a [dynamic][] value (i.e. in this example to a [List][]&lt;[List][]&lt;[Int32][]&gt;&gt;). |

#### Result

Converting:

```json
{
    "$type": "System.Collections.Generic.List`1[[System.Collections.Generic.List`1[[System.Int32, System.Private.CoreLib]], System.Private.CoreLib]], System.Private.CoreLib",
    "$values": [
        {
            "$type": "System.Collections.Generic.List`1[[System.Int32, System.Private.CoreLib]], System.Private.CoreLib",
            "$values": [1,2,3]
        },
        {
            "$type": "System.Collections.Generic.List`1[[System.Int32, System.Private.CoreLib]], System.Private.CoreLib",
            "$values": [4,5,6]
        }
    ]
}
```

to an object results in the variable `($)Object` being updated to the following:

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

As the Json does include type information, `($)Object` will be a [List][]&lt;[List][]&lt;[Int32][]&gt;&gt;, rather than a [List][]&lt;[Object][]&gt;.

***

## Properties

### Json

The [Json][Json Property] to convert into an [Object][Object Property].

During the conversion it will be attempted to convert the [Json][Json Property] to the correct data type where possible. If the correct data type cannot be determined, then collection data types will be converted to a [List][]&lt;[dynamic][]&gt;, and other objects will be converted to a [Structure][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Json` with no value |

### Settings

Optional [Settings][Settings Property] that can be specified to control how the conversion should deal with things such as:

* `null` objects
* Date Time formats and offsets
* Number formats
* Text escaping

For information about the default [Settings][Settings Property] used if none are specified, as well as all other options that can be configured, please see [JsonSerializerSettings][].

| | |
|--------------------|---------------------------|
| Data Type | [JsonSerializerSettings][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Expression][] |
| Default Value | `new JsonSerializerSettings {}` |

### Object

The [Object][Object Property] that has been converted from [Json][Json Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Object` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [JsonReaderException][] | Thrown when an error occurs reading the [Json][Json Property]. |
| [JsonSerializationException][] | Thrown when an error occurs converting the [Json][Json Property] to an [Object][Object Property]. |
| [PropertyEmptyException][] | Thrown when [Json][Json Property] is empty (i.e. `""`). |
| [PropertyNullException][] | Thrown when [Json][Json Property] is `null`. |

## Remarks

### "{}" Json

If [Json][Json Property] is set to the text `"{}"`, [Object][Object Property] will be set to an empty [Structure][].

### "[]" Json

If [Json][Json Property] is set to the text `"[]"`, [Object][Object Property] will be set to an empty [List][]&lt;[dynamic][]&gt;.

### "null" Json

If [Json][Json Property] is set to the text `"null"`, [Object][Object Property] will be set to `null`.

### Round-tripping

For most data types it should be possible to pass the Json created by a [Convert Object To Json][] block to this block, and then pass the [Object][Object Property] created by this block back to a [Convert Object To Json][] block; this is called round-tripping.

It should be noted however, that not all data types will be able to be round-tripped.

An example of a data type that is not able to be round-tripped is [HttpRequestHeaders][]. As it does not contain a public constructor it will not be able to be converted from its Json representation back into an [HttpRequestHeaders][]; instead a [JsonSerializationException][] will be thrown with a message like: `"Cannot create and populate list type System.Net.Http.Headers.HttpRequestHeaders"`.

[Json Property]: {{< ref "#json" >}}
[Settings Property]: {{< ref "#settings" >}}
[Object Property]: {{< ref "#object" >}}

[Convert Json to a List (with Type information)]: {{< ref "#convert-json-to-a-list-with-type-information" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[JsonReaderException]: {{< url path="JsonDotNet.JsonReaderException" >}}
[JsonSerializationException]: {{< url path="JsonDotNet.JsonSerializationException" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[HttpRequestHeaders]: {{< url path="Cortex.Reference.DataTypes.MostCommon.HttpRequestHeaders" >}}
[JsonSerializerSettings]: {{< url path="Cortex.Reference.DataTypes.Json.JsonSerializerSettings.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
