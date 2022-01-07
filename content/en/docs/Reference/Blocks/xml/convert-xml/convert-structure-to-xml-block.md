---
title: "Convert Structure To Xml"
linkTitle: "Convert Structure To Xml"
description: "Converts a Structure To Xml."
---

![Icon](/blocks/xml-convert-to-xml-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Xml.ConvertXml.ConvertStructureToXmlBlock)</p>

## Description

Converts a [Structure][Structure Property] to [Xml][Json Property].

## Examples

### Convert a Structure to Xml

This example will convert `TODO` to its Xml representation.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Structure][Structure Property] | `($)Structure`, with value `{TODO}` | `($)Structure` is a variable of type [Structure][] |
| [Xml][Xml Property] | `($)Xml`, with no value | `($)Xml` is a variable that will be set to a [String][] value. |

#### Result

Converting `{TODO}` to Xml results in the variable `($)Xml` being updated to the following:

```json
"TODO"
```

Explain how conversion works?

***

### TODO Different examples

TODO

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Structure][Structure Property] | `($)Structure`, with value `{TODO}` | `($)Structure` is a variable of type [Structure][] |
| [Xml][Xml Property] | `($)Xml`, with no value | `($)Xml` is a variable that will be set to a [String][] value. |

#### Result

TODO

```json
TODO
```

***

## Properties

### Structure

The [Structure][Structure Property] to convert to [Xml][Xml Property].

TODO

| | |
|--------------------|---------------------------|
| Data Type | [Structure][] |
| Property Type | [Input][] |
| Default Value | `($)Structure` with value `null` |

### Xml

The [Xml][Xml Property] that has been converted from the [Structure][Structure Property].

TODO
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Default Value | `($)Xml` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyEmptyException][] | Thrown when [Structure][Structure Property] does not contain any items. |
| [PropertyNullException][] | Thrown when [Structure][Structure Property] is `null`. |
| [XmlSerializationException][] | Thrown when [Structure][Structure Property] has a key that is an empty string. |

## Remarks

### Round-tripping

It should be possible to pass the Xml created by this block to the [Convert Xml To Structure][] block, and then pass the [Structure][Structure Property] created by the [Convert Xml To Structure][] block back to this block; this is called round-tripping.

[Structure Property]: {{< ref "#structure" >}}
[Xml Property]: {{< ref "#xml" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[XmlSerializationException]: {{< url "JsonDotNet.XmlSerializationException" >}}



[Structure]: {{< url "Cortex.Reference.DataTypes.MostCommon.Structure" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}

            
            /// If there are multiple items in the specified structure, a root node is automatically added to make it valid xml (added root node: "Cortex_FlowEngine_Core_Types_Structure")
            
            /// If a node requires an attribute, use a key value pair where the key is the attribute name with an "@" before it and the value is the attribute data.
            
            /// If data does not require nodes and is within the same element as data that does require nodes, use a key value pair where the key is "#text" and the value is the node-less data.
            
            /// If multiple of the same nodes are required are within the same element, use a key value pair where the key is the node and the value is a list with the nodes data.
            
            /// If the specified structure includes an ampersand symbol in a node's name, the xml will return with "_x0026_" in place of the ampersand symbol.
            
            /// If the specified structure includes an ampersand symbol in a node's data, the xml will return with "&amp;" in place of the ampersand symbol.
            
            
            /// </remarks>
            
            /// <example>
            /// structure:  {
            ///                 "msg&amp;": {
            ///                     "@attr" : "exampleAttribute"
            ///                     "id" :
            ///                     [
            ///                         "1",
            ///                         "2",
            ///                         "3"
            ///                     ],
            ///                     "action" : "stop&amp;"
            ///                     "#text" : "hello"
            ///                 }
            ///             }
            ///
            /// xml:        "<msg_x0026_ attr="exampleAttribute"><id>1</id><id>2</id><id>3</id><action>stop&amp;</action>hello</msg_x0026_>"
            /// </example>
            /// <example>
            /// structure:  {
            ///                 {
            ///                     "id" : "1"
            ///                 },
            ///                 {
            ///                     "id2" : "2"
            ///                 },
            ///                 {
            ///                     "id3" : "3"
            ///                 }
            ///             }
            ///
            /// xml:        "<Cortex_FlowEngine_Core_Types_Structure><id>1</id><id2>2</id2><id3>3</id3></Cortex_FlowEngine_Core_Types_Structure>"
            /// </example>
            void ConvertStructureToXml(Structure structure, out string xml);