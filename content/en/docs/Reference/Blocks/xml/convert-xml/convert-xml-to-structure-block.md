---
title: "Convert Xml To Structure"
linkTitle: "Convert Xml To Structure"
description: "Converts Xml to a Structure."
---

{{< figure src="/blocks/xml-convert-to-structure-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Xml.ConvertXml.ConvertXmlToStructureBlock)</p>

## Description

Converts [Xml][Xml Property] to a [Structure][Structure Property].

Each top-level [Node][Xml Nodes] will be converted using the following rules:

* Node names become [Keys][]
* Node values become [Items][]

Each inner [Node][Xml Nodes] will be converted using the following rules:

* Inner node names become [Keys][] within the top-level node's [Item][Items]
* Inner node values become the corresponding [Item][Items] for their [Key][Keys]

For example:

``` xml
@"<topLevelNode>
    <innerNode>innerNodeValue</innerNode>
</topLevelNode>"
```

will be converted into:

``` json
"topLevelNode": { 
    "innerNode" : "innerNodeValue" 
}
```

## Examples

### Convert Xml to a Structure

This example will convert the [Xml][Xml Property] below to its [Structure][Structure Property] representation.

``` xml
@"<topLevelNode topLevelAttribute=""exampleAttribute"">
    <innerNode innerNodeAttribute=""exampleInnerNodeAttribute"">
        <nestedNode>nested node text</nestedNode>
        inner node text
    </innerNode>
    <id>1</id>
    <id>2</id>
    <id>3</id>
</topLevelNode>"
```

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Xml][Xml Property] | `($)Xml`, with value `"<topLevelNode topLevelAttribute=""exampleAttribute""><innerNode innerNodeAttribute=""exampleInnerNodeAttribute""><nestedNode>nested node text</nestedNode>inner node text</innerNode><id>1</id><id>2</id><id>3</id></topLevelNode>"` | `($)Xml` is a variable of type [String][] |
| [Structure][Structure Property] | `($)Structure`, with no value | `($)Structure` is a variable that will be set to a [Structure][] value |

#### Result

Converting:

``` xml
@"<topLevelNode topLevelAttribute=""exampleAttribute"">
    <innerNode innerNodeAttribute=""exampleInnerNodeAttribute"">
        <nestedNode>nested node text</nestedNode>
        inner node text
    </innerNode>
    <id>1</id>
    <id>2</id>
    <id>3</id>
</topLevelNode>"
```

 to a [Structure][Structure Property] results in the variable `($)Structure` being updated to the following:

``` json
{
    "topLevelNode": {
        "@topLevelAttribute" : "exampleAttribute",
        "innerNode" : {
            "@innerNodeAttribute" : "exampleInnerNodeAttribute",
            "nestedNode": "nested node text",
            "#text": "inner node text"
        },
        "id": [
            1, 
            2, 
            3
        ],
    }
}
```

* The node `"topLevelNode"` is converted into the `"topLevelNode"` key.
* The attribute `"topLevelAttribute"` is converted into the `"@topLevelAttribute"` key with its corresponding value as the item.
* The node `"innerNode"` is converted into the `"innerNode"` key.
* The attribute `"innerNodeAttribute"` is converted into the `"@innerNodeAttribute"` key with its corresponding value as the item.
* The node `"nestedNode"` is converted into the `"nestedNode"` key with its corresponding value as the item.
* The value of `"innerNode"` is converted into the `"#text"` key with its corresponding value as the item.
* The three `"id"` nodes are converted into a single `"id"` key with each corresponding value being an entry of the item list.

***

### Convert Round-tripped Xml to a Structure

This example will convert the [Xml][Xml Property] below to its [Structure][Structure Property] representation.
This example will only occur when a [Structure][Structure Property] is Converted to [Xml][Xml Property] using the [Convert Structure To Xml][] block and is then converted again using this block. This is called [Round-Tripping][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Xml][Xml Property] | `($)Xml`, with value `"<Cortex_DataTypes_Dictionaries_Structure><node1>1</node1><node2>2</node2><node3>3</node3></Cortex_DataTypes_Dictionaries_Structure>"`  | `($)Xml` is a variable of type [String][] |
| [Structure][Structure Property] | `($)Structure`, with no value | `($)Structure` is a variable that will be set to a [Structure][] value |

#### Result

Converting:

``` xml
@"<Cortex_DataTypes_Dictionaries_Structure>
    <node1>1</node1>
    <node2>2</node2>
    <node3>3</node3>
</Cortex_DataTypes_Dictionaries_Structure>"
```

to a [Structure][Structure Property] results in the variable `($)Structure` being updated to the following:

``` json
{
    "node1" : "1",
    "node2" : "2",
    "node3" : "3"
}
```

* The `"Cortex_DataTypes_Dictionaries_Structure"` root node is removed and the child nodes are all at the root level.
* The `"node1"` [Node][Xml Nodes] is converted into a [Key][Keys] of `"node1"` with its corresponding value as the [Item][Items].
* The `"node2"` [Node][Xml Nodes] is converted into a [Key][Keys] of `"node2"` with its corresponding value as the [Item][Items].
* The `"node3"` [Node][Xml Nodes] is converted into a [Key][Keys] of `"node3"` with its corresponding value as the [Item][Items].

***

## Properties

### Xml

The [Xml][Xml Property] to convert into a [Structure][Structure Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)Xml` with no value |

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

### Attributes

If a [Node][Xml Nodes] has an attribute, the attribute is converted to a [Key][Keys] where the key is the attribute name with an `"@"` before it and the value is the attribute data, for example:

``` xml
@"<node attribute="Attribute Value">
    <innerNode>Inner Node Value</innerNode>
</node>"
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property]

``` json
{
    "node": {
        "@attribute": "Attribute Value",
        "innernode": "Inner Node Value"
    }
}
```

### Text Nodes

If a node contains a value and inner nodes or attributes, the inner nodes and attributes are converted into [Keys][] with their corresponding values as the [Items][]. The value of the node is converted into the `"#text"` key with its value as the item.

``` xml
@"<node>
    <innerNode attribute="attributeValue">
        Inner Node Value
    </innerNode>
    Node Value
</node>"
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property].

``` json
{
    "node": {
        "innerNode": {
            "@attrubute": "attributeValue",
            "#text": "Inner Node Value"
        },
        "#text": "Node Value"
    }
}
```

### Duplicate Nodes at the Same Level

If a node contains duplicate nodes at the same level, they are converted into a [Key][Keys] where the key is the duplicated node name and the [Item][Items] is a list of each of the corresponding duplicate node's values, for example:

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

### Using Non-Alphanumeric Symbols within Node Names

Any non-alphanumeric symbol (i.e. symbols that are not `"0"` to `"9"`, `"a"` to `"z"`, or `"A"` to `"Z"`) will be converted to their respective Unicode values when used within a node name. For example, `"!"` and `"&"` are both non-alphanumeric symbols and would be converted to `"x0021"` and `"x0026"` respectively.

For more information on characters and their Unicode values please see [Character Sets][]

### Round-tripping

It should be possible to pass the [Structure][Structure Property] created by this block to the [Convert Structure To Xml][] block, and then pass the [Xml][Xml Property] created by the [Convert Structure To Xml][] block back to this block, as long all values within the [Xml][Xml Property] are [Strings][String]; this is called round-tripping.

### <Cortex_DataTypes_Dictionaries_Structure> Node

The [Convert Structure To Xml][] adds `"<Cortex_DataTypes_Dictionaries_Structure>"` as a root node when the structure has more than one top-level key to ensure that valid [Xml][Xml Property] is produced.

When the `"<Cortex_DataTypes_Dictionaries_Structure>"` root node is converted from [Xml][Xml Property] to a [Structure][Structure Property] the root node is removed and any inner nodes become the top-level keys.

``` xml
@"<Cortex_DataTypes_Dictionaries_Structure>
    <node1>1</node1>
    <node2>2</node2>
    <node3>3</node3>
</Cortex_DataTypes_Dictionaries_Structure>"
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property].

``` json
{
    "node1" : "1",
    "node2" : "2",
    "node3" : "3"
}
```

This example will only occur when a [Structure][Structure Property] is Converted to [Xml][Xml Property] and is then converted again using this block. This is called [Round-Tripping][].

[Convert Structure To Xml]: {{< url "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertStructureToXml.MainDoc" >}}

[Structure Property]: {{< ref "#structure" >}}
[Xml Property]: {{< ref "#xml" >}}
[Convert Xml To Structure Example]: {{< ref "#convert-xml-to-structure" >}}
[Round-Tripping]: {{< ref "#round-tripping" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[XmlSerializationException]: {{< url "Cortex.Reference.Exceptions.Xml.XmlSerializationException" >}}

[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Keys" >}}
[Items]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Items" >}}
[Primitive Values]: {{< url "Cortex.Reference.Concepts.Fundamentals.PrimitiveTypes.MainDoc" >}}
[Key Value Pair]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.KeyValuePairs" >}}
[Working with Structures]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Structures" >}}

[Character Sets]: {{< url "W3.CharacterSets" >}}
[Xml Nodes]: {{< url "W3.XmlNodes" >}}
