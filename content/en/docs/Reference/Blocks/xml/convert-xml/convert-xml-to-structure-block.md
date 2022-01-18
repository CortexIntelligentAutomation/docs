---
title: "Convert Xml To Structure"
linkTitle: "Convert Xml To Structure"
description: "Converts Xml to a Structure."
---

![Icon](/blocks/xml-convert-to-structure-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Xml.ConvertXml.ConvertXmlToStructureBlock)</p>

## Description

Converts [Xml][Xml Property] to a [Structure][Structure Property].

This block will convert [Xml][Xml Property] into a [Structure][Structure Property], with each node being converted into a [Key Value Pair][] with the node name being the Key and the data within the node being the Value.

If a node contains inner nodes, the value of the node will be a [Structure][Structure Property] with each inner node becoming a [Key Value Pair][] with the inner node name being the Key and the data within the inner node being the Value.

## Examples

### Convert Xml to a Structure

This example will convert the [Xml][Xml Property] below to its [Structure][Structure Property] representation. The [Xml][Xml Property] contains a top level node with an attritbute, three duplicated inner nodes, one distinct inner node, and data not within a node, all containing [Primitive Values][].

``` xml
@"<topLevelNode attr="exampleAttribute">
    <id>1</id>
    <id>2</id>
    <id>3</id>
    <action>exampleAction</action>
    text without a node
</topLevelNode>"
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Xml][Xml Property] | `($)Xml`, with value `"<topLevelNode attr="exampleAttribute"><id>1</id><id>2</id><id>3</id><action>exampleAction</action>text without a node</topLevelNode>"` | `($)Xml` is a variable of type [String][] |
| [Structure][Structure Property] | `($)Structure`, with no value | `($)Structure` is a variable that will be set to a [Structure][] value |

#### Result

Converting `"<topLevelNode attr="exampleAttribute"><id>1</id><id>2</id><id>3</id><action>exampleAction</action>text without a node</topLevelNode>"` to a [Structure][Structure Property] results in the variable `($)Structure` being updated to the following:

``` json
{
    "topLevelNode": {
        "@attr" : "exampleAttribute",
        "id" : [
            "1",
            "2",
            "3"
        ],
        "action" : "exampleAction",
        "#text" : "text without a node"
    }
}
```

The top level node becomes a [Key Value Pair][] within the [Structure][Structure Property] with the attribute being assigned to a `"@attr"` key, the duplicated nodes are assigned to the key `"id"` matching their node name with each of their values being added to a list, the distinct node was assigned to a key `"action"` matching their node name, and the data not within a node was assigned to the key `"#text"`.

***

### Convert Nested Xml to a Structure

This example will convert the [Xml][Xml Property] below to its [Structure][Structure Property] representation. Nested nodes are converted into nested [Structures][Structure Property], the example below has a `"topLevelNode"` with an `"innerNode"`, and there is a `"nestedNode"` within the `"innerNode"`. This results in the `"topLevelNode"` value being a [Structure][Structure Property] with an `"innerNode"` key. The `"innerNode"` key has another [Structure][Structure Property] as its value, with the converted `"nestedNode"` inside.

``` xml
@"<topLevelNode attr="exampleAttribute">
    <innerNode>
        <nestedNode>nested node text</nestedNode>
        inner node text
    </innerNode>
    text without a node
</topLevelNode>"
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Xml][Xml Property] | `($)Xml`, with value `"<topLevelNode attr="exampleAttribute"><innerNode><nestedNode>nested node text</nestedNode>inner node text</innerNode>text without a node</topLevelNode>"` | `($)Xml` is a variable of type [String][] |
| [Structure][Structure Property] | `($)Structure`, with no value | `($)Structure` is a variable that will be set to a [Structure][] value |

#### Result

Converting `"<topLevelNode attr="exampleAttribute"><id>1</id><id>2</id><id>3</id><action>exampleAction</action><innerNode><nestedNode>nested node text</nestedNode>inner node text</innerNode>text without a node</topLevelNode>"` to a [Structure][Structure Property] results in the variable `($)Structure` being updated to the following:

``` json
{
    "topLevelNode": {
        "@attr" : "exampleAttribute",
        "innerNode" : {
            "nestedNode": "nested node text",
            "#text": "inner node text"
        },
        "#text" : "text without a node"
    }
}
```

***

### Structure Node Example

This example will convert the [Xml][Xml Property] below to its [Structure][Structure Property] representation. The top level node `"Cortex_DataTypes_Dictionaries_Structure"` means that the resulting [Structure][Structure Property] will not have a top level [Key Value Pair][].

``` xml
@"<Cortex_DataTypes_Dictionaries_Structure>
    <node1>1</node1>
    <node2>2</node2>
    <node3>3</node3>
</Cortex_DataTypes_Dictionaries_Structure>"
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Xml][Xml Property] | `($)Xml`, with value `"<Cortex_DataTypes_Dictionaries_Structure><id>1</id><id2>2</id2><id3>3</id3></Cortex_DataTypes_Dictionaries_Structure>"`  | `($)Xml` is a variable of type [String][] |
| [Structure][Structure Property] | `($)Structure`, with no value | `($)Structure` is a variable that will be set to a [Structure][] value |

#### Result

Converting `"<Cortex_DataTypes_Dictionaries_Structure><node1>1</node1><node2>2</node2><node3>3</node3></Cortex_DataTypes_Dictionaries_Structure>"` to a [Structure][Structure Property] results in the variable `($)Structure` being updated to the following:

``` json
{
    {
        "node1" : "1"
    },
    {
        "node2" : "2"
    },
    {
        "node3" : "3"
    }
}
```

***

## Properties

### Xml

The [Xml][Xml Property] to convert into a [Structure][Structure Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Xml` with value `""` |

### Structure

The [Structure][Structure Property] that has been converted from the [Xml][Xml Property].

For more information about Structures, please see [Working with Structures][].

| | |
|--------------------|---------------------------|
| Data Type | [Structure][] |
| Property Type | [Output][] |
| Default Value | `($)Structure` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Xml][Xml Property] is `null`. |
| [PropertyEmptyException][] | Thrown when [Xml][Xml Property] is empty (i.e. `""`). |
| [XmlSerializationException][] | Thrown when the [Xml][Xml Property] is not valid (i.e the Xml contains an ampersand symbol or is missing a root node). |

## Remarks

### Round-tripping

It should be possible to pass the [Structure][Structure Property] created by this block to the [Convert Structure To Xml][] block, and then pass the [Xml][Xml Property] created by the [Convert Structure To Xml][] block back to this block; this is called round-tripping.

### Attributes

If a node has an attribute, the attribute is converted to a [Key Value Pair][] where the key is the attribute name with an `"@"` before it and the value is the attribute data, for example:

``` xml
@"<node attribute="Attribute Value">
    <innerNode>Inner Node Value</innerNode>
</node>"
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property] be converted to

``` json
{
    "node": {
        "@attribute": "Attribute Value",
        "innernode": "Inner Node Value"
    }
}
```

### Data Not Within a Node

If any data does not have any nodes and is within the same element as other data with nodes, the data is converted to a [Key Value Pair][] where the key is "#text" and the value is the node-less data.

``` xml
@"<node>
    <innerNode>
        Inner Node Value
    </innerNode>
    Node Value
</node>"
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property].

``` json
{
    "node": {
        "innerNode": "Inner Node Value",
        "#text": "Node Value"
    }
}
```

### Duplicate Nodes At The Same Level

If an element contains multiple duplicate nodes at the same level, they are converted into a [Key Value Pair][] where the key is the duplicated node and the value is a list of each duplicate nodes data in order, for example:

``` xml
@"<node>
    <duplicateNode>
        First Duplicate Node
    </duplicateNode>
    
    <duplicateNode>
        Second Duplicate Node
    </duplicateNode>

    <distinctNode>
        Distinct Node
    </distinctNode>
</node>"
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property].

``` json
{
    "node": {
        "duplicateNode": ["First Duplicate Node", "Second Duplicate Node"],
        "distinctNode": "Distinct Node"
    }
}
```

### Using Non-Alphanumeric Symbols Within Node Names

Any non-alphanumeric symbol (i.e. symbols that are not 0 to 9 or a to Z) will be converted to their respective Unicode values when used within a node name. For example, `"!"` and `"&"` are both non-alphanumeric symbols and would be converted to `"x0021"` and `"x0026"` respectively.

For more information on characters and their Unicode values please see [Character Sets][]

### Structure Node

If the root node of the [Xml][Xml Property] is "Cortex_DataTypes_Dictionaries_Structure", the inner [Xml][Xml Property] will be converted into a structure, see [Structure Node Example][]

[Convert Structure To Xml]: {{< url "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertStructureToXmlBlock.MainDoc" >}}
[Structure Property]: {{< ref "#structure" >}}
[Xml Property]: {{< ref "#xml" >}}

[Structure Node Example]: {{< ref "#structure-node-example" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[XmlSerializationException]: {{< url "JsonDotNet.XmlSerializationException" >}}

[Structure]: {{< url "Cortex.Reference.DataTypes.MostCommon.Structure" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}

[Primitive Values]: {{< url "Cortex.Reference.Concepts.Fundamentals.PrimitiveTypes.MainDoc" >}}
[Key Value Pair]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.KeyValuePairs" >}}
[Working with Structures]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Structures" >}}

[Character Sets]: {{< url "W3.CharacterSets" >}}
