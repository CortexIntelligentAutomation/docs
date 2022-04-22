---
title: "Convert Object To Json"
linkTitle: "Convert Object To Json"
description: "Converts an Object To Json."
---

{{< figure src="/blocks/json-convert-to-json-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Json.ConvertJson.ConvertObjectToJsonBlock)</p>

## Description

Converts an [Object][Object Property] to [Json][Json Property].

An additional [Settings][Settings Property] option can be specified to control how the conversion should deal with things such as:

* `null` objects
* Date Time formats and offsets
* Number formats
* Text escaping
* Type information

For information about the default [Settings][Settings Property] used if none are specified, as well as all other options that can be configured, please see [JsonSerializerSettings][].

## Examples

### Convert a List to Json (without Type information)

This example will convert `[[1, 2, 3], [4, 5, 6]]` to its Json representation, without including type information.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Object][Object Property] | `($)Object`, with value `[[1, 2, 3], [4, 5, 6]]` | `($)Object` is a variable of type [List][]&lt;[List][]&lt;[Int32][]&gt;&gt; |
| [Settings][Settings Property] | `($)Settings`, with value `null` | `($)Settings` is a variable of type [JsonSerializerSettings][] |
| [Json][Json Property] | `($)Json`, with no value | `($)Json` is a variable that will be set to a [String][] value. |

#### Result

Converting `[[1, 2, 3], [4, 5, 6]]` to Json results in the variable `($)Json` being updated to the following:

```json
"[[1, 2, 3],[4, 5, 6]]"
```

As the resultant Json does not include any type information, if this Json was then used as input to the [Convert Json To Object][] block, the resultant object would be a [List][]&lt;[Object][]&gt;, rather than a [List][]&lt;[List][]&lt;[Int32][]&gt;&gt;.

See [Convert a List To Json (with Type information)][] for an example on how to include type information in the Json.

***

### Convert a List to Json (with Type information)

This example will convert `[[1, 2, 3], [4, 5, 6]]` to its Json representation, including type information.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Object][Object Property] | `($)Object`, with value `[[1, 2, 3], [4, 5, 6]]` | `($)Object` is a variable of type [List][]&lt;[List][]&lt;[Int32][]&gt;&gt; |
| [Settings][Settings Property] | `($)Settings`, with value `new JsonSerializerSettings{TypeNameHandling = TypeNameHandling.All}` | `($)Settings` is a variable of type [JsonSerializerSettings][] |
| [Json][Json Property] | `($)Json`, with no value | `($)Json` is a variable that will be set to a [String][] value. |

#### Result

Converting `[[1, 2, 3], [4, 5, 6]]` to its Json representation (including type information) results in the variable `($)Json` being updated to the following:

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

***

## Properties

### Object

The [Object][Object Property] to convert to [Json][Json Property].

[Object][Object Property] can be any data type.

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Input][] |
| Default Value | `($)Object` with value `null` |

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
| Default Value | `($)Settings` with value `null` |

### Json

The [Json][Json Property] that has been converted from [Object][Object Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Default Value | `($)Json` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [JsonSerializationException][] | Thrown when an error occurs converting the [Object][Object Property] to [Json][Json Property]. |

## Remarks

### Object is empty Structure or Object

If [Object][Object Property] is set to an empty [Structure][] or [Object][], [Json][Json Property] is set to the text `"{}"`.

### Object is empty List

If [Object][Object Property] is set to an empty [List][], [Json][Json Property] is set to the text `"[]"`.

### Null Object

If [Object][Object Property] is set to `null`,  [Json][Json Property] will be set to the text `"null"`.

### Round-tripping

For most data types it should be possible to pass the Json created by this block to the [Convert Json To Object][] block, and then pass the [Object][Object Property] created by the [Convert Json To Object][] block back to this block; this is called round-tripping.

It should be noted however, that not all data types will be able to be round-tripped.

An example of a data type that is not able to be round-tripped is [HttpRequestHeaders][]. As it does not contain a public constructor it will not be able to be converted from its Json representation back into an [HttpRequestHeaders][]; instead a [JsonSerializationException][] will be thrown with a message like: `"Cannot create and populate list type System.Net.Http.Headers.HttpRequestHeaders"`.

[Object Property]: {{< ref "#object" >}}
[Json Property]: {{< ref "#json" >}}
[Settings Property]: {{< ref "#settings" >}}

[Convert a List to Json (with Type information)]: {{< ref "#convert-a-list-to-json-with-type-information" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[JsonSerializationException]: {{< url "JsonDotNet.JsonSerializationException" >}}

[Convert Json To Object]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertJsonToObject.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Object]: {{< url "Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[HttpRequestHeaders]: {{< url "Cortex.Reference.DataTypes.MostCommon.HttpRequestHeaders" >}}
[JsonSerializerSettings]: {{< url "Cortex.Reference.DataTypes.MostCommon.JsonSerializerSettings" >}}
