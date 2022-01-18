---
title: "Convert Structure To Xml"
linkTitle: "Convert Structure To Xml"
description: "Converts a Structure To Xml."
---

![Icon](/blocks/xml-convert-to-xml-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Xml.ConvertXml.ConvertStructureToXmlBlock)</p>

## Description

Converts a [Structure][Structure Property] to [Xml][Xml Property].

This block will convert a [Structure][Structure Property] into [Xml][Xml Property], with each [Key Value Pair][] being converted into a node with the node name being the Key and the data within the node being the Value.

If a [Key Value Pair][] contains a Structure as its value, a node will be added to the converted value for each [Key Value Pair][] with the inner node name being the Key and the data within the inner node being the Value.

## Examples

### Convert a Structure to Xml

This example will convert the [Structure][Structure Property] below to its [Xml][Xml Property] representation. The [Structure][Structure Property] contains a top level [Key Value Pair][] with an attritbute defined by the `"#attr"` key, three duplicated inner nodes represented as a list within the `"id"` key, one distinct inner node within the `"action"` key, and data not within a node defined by the `"#text"` key, all containing [Primitive Values][].

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

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Structure][Structure Property] | `($)Structure`, with value `{"topLevelNode": {"@attr" : "exampleAttribute", "id" : ["1","2","3"], "action" : "exampleAction", "#text" : "text without a node"}}` | `($)Structure` is a variable of type [Structure][] |
| [Xml][Xml Property] | `($)Xml`, with no value | `($)Xml` is a variable that will be set to a [String][] value. |

#### Result

Converting `{"topLevelNode": {"@attr" : "exampleAttribute", "id" : ["1","2","3"], "action" : "exampleAction", "#text" : "text without a node"}}` to Xml results in the variable `($)Xml` being updated to the following:

``` xml
@"<topLevelNode attr="exampleAttribute">
    <id>1</id>
    <id>2</id>
    <id>3</id>
    <action>exampleAction</action
    >text without a node
</topLevelNode>"
```

The top level  [Key Value Pair][] is converted into a node the attribute being assigned to `"attr"` within the node's tag, the duplicated nodes are converted into separate nodes all with the `"id"` as their name and their corresponding values from the list, the distinct node was converted to a node named `"action"`, and the data not within a node was added to the top level node.

***

### Convert Nested Structure to Xml

This example will convert the [Structure][Structure Property] below to its [Xml][Xml Property] representation. Nested nodes are represted by using a [Structure][Structure Property] as a value within a [Key Value Pair][], the example below has a `"topLevelNode"` with an `"innerNode"`, and there is a `"nestedNode"` within the `"innerNode"`. This results in the `"topLevelNode"` value being a [Structure][Structure Property] with an `"innerNode"` key. The `"innerNode"` key has another [Structure][Structure Property] as its value, with the converted `"nestedNode"` inside.

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

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Structure][Structure Property] | `($)Structure`, with value `{ "topLevelNode": {"@attr" : "exampleAttribute", "innerNode" : { "nestedNode": "nested node text", "#text": "inner node text" }, #text" : "text without a node" }}` | `($)Structure` is a variable of type [Structure][] |
| [Xml][Xml Property] | `($)Xml`, with no value | `($)Xml` is a variable that will be set to a [String][] value. |

#### Result

``` xml
@"<topLevelNode attr="exampleAttribute">
    <innerNode>
        <nestedNode>nested node text</nestedNode>
        inner node text
    </innerNode>
    text without a node
</topLevelNode>"
```

***

### Structure Node Example

This example will convert the [Structure][Structure Property] below to its [Xml][Xml Property] representation. There is no top level [Key Value Pair][] which means `"Cortex_DataTypes_Dictionaries_Structure"` will be added as a top level node during the conversion to ensure that the resulting [Xml][Xml Property] will be valid.

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

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Structure][Structure Property] | `($)Structure`, with value `{{ "node1" : "1"}, {"node2" : "2"}, {"node3" : "3"}}` | `($)Structure` is a variable of type [Structure][] |
| [Xml][Xml Property] | `($)Xml`, with no value | `($)Xml` is a variable that will be set to a [String][] value. |

#### Result

Converting `{{ "node1" : "1"}, {"node2" : "2"}, {"node3" : "3"}}` to [Xml][Xml Property] results in the variable `($)Xml` being updated to the following:

``` xml
@"<Cortex_DataTypes_Dictionaries_Structure>
    <node1>1</node1>
    <node2>2</node2>
    <node3>3</node3>
</Cortex_DataTypes_Dictionaries_Structure>"
```

***

## Properties

### Structure

The [Structure][Structure Property] to convert into [Xml][Xml Property].

For more information about Structures, please see [Working with Structures][].

| | |
|--------------------|---------------------------|
| Data Type | [Structure][] |
| Property Type | [Input][] |
| Default Value | `($)Structure` with value `null` |

### Xml

The [Xml][Xml Property] that has been converted from the [Structure][Structure Property].
  
| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Output][] |
| Default Value | `($)Xml` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Structure][Structure Property] is `null`. |
| [PropertyEmptyException][] | Thrown when [Structure][Structure Property] does not contain any items. |
| [XmlSerializationException][] | Thrown when [Structure][Structure Property] has a key that is an empty string. |
|| Thrown when the [Structure][Structure Property] includes an xml declaration key (e.g. ?xml) or a document type definition key (e.g. !DOCTYPE) that has an invalid attribute key. (e.g. Key: "@test", Value: "testValue"). |
|| Thrown when the [Structure][Structure Property] includes an attribute key with a [Complex Type][] as a value. (e.g. Key: "@name", Value: new UserCredentials{...}). |
|| Thrown when the [Structure][Structure Property] includes an xml declaration key (e.g. ?xml) with an attribute that has an invalid [Primitive Values][]. (e.g. Key: "@version", Value: false). |
|| Thrown when the [Structure][Structure Property] includes a document type definition key (e.g. !DOCTYPE) that has an attribute with an invalid [Primitive Values][]. (e.g. Key: "@name", Value: 22). |

## Remarks

### Round-tripping

It should be possible to pass the Xml created by this block to the [Convert Xml To Structure][] block, and then pass the [Structure][Structure Property] created by the [Convert Xml To Structure][] block back to this block; this is called round-tripping.

### Attributes

If a node requires an attribute, the attribute is defined to a [Key Value Pair][] where the key is the attribute name with an `"@"` before it and the value is the attribute data, for example:

``` json
{
    "node": {
        "@attribute": "Attribute Value",
        "innernode": "Inner Node Value"
    }
}
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property] be converted to

``` xml
@"<node attribute="Attribute Value">
    <innerNode>Inner Node Value</innerNode>
</node>"
```

### Primitive Values Within Attribute Keys

Attribute keys may only have [Primitive Values][], an [XmlSerializationException][] will be thrown if a [Complex Value][Complex Type] is used as an attribute key.

### Key Restrictions

If provided, the xml declaration key (e.g. ?xml) can only accept following attributes: @version, @encoding and @standalone.

If provided, the document type definition key (e.g. !DOCTYPE) can only accept following attributes: @name, @public, @system and @internalSubset.

The keys `"$id"`, `"$ref"`, `"$type"` and `"$value"` are reserved words within the XMLConverter. Using them can cause odd behaviour as they are treated like attributes within the conversion.

The key `"values"` is also reserved, however it is treated as its own node within the conversion.

### Data Not Within a Node

If any data does not have any nodes and is within the same element as other data with nodes, the data is converted to a [Key Value Pair][] where the key is "#text" and the value is the node-less data.

If data does not require a node and is withiin the same element as other data with nodes, the nodeless data requires a [Key Value Pair][] where the 

``` json
{
    "node": {
        "innerNode": "Inner Node Value",
        "#text": "Node Value"
    }
}
```

The [Structure][Structure Property] example above would be converted to the following [Xml][Xml Property].

``` xml
@"<node>
    <innerNode>
        Inner Node Value
    </innerNode>
    Node Value
</node>"
```

### Duplicate Nodes At The Same Level

If an  multiple duplicate nodes are required at the same level, they are defined using a [Key Value Pair][] where the key is the duplicated node and the value is a list of each duplicate nodes data in order, for example:

``` json
{
    "node": {
        "duplicateNode": ["First Duplicate Node", "Second Duplicate Node"],
        "distinctNode": "Distinct Node"
    }
}
```

The [Structure][Structure Property] example above would be converted to the following [Xml][Xml Property].

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

### Using Non-Alphanumeric Symbols Within Node Names

Any non-alphanumeric symbol (i.e. symbols that are not 0 to 9 or a to Z) will be converted to their respective Unicode values when used within a node name. For example, `"!"` and `"&"` are both non-alphanumeric symbols and would be converted to `"x0021"` and `"x0026"` respectively.

For more information on characters and their Unicode values please see [Character Sets][]

### Structure Node

If a root node is not defined, then the root node `""Cortex_DataTypes_Dictionaries_Structure""` will be added during the conversion to ensure that the resulting [Xml][Xml Property] is valid.

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

The [Structure][Structure Property] example above would be converted to the following [Xml][Xml Property].

``` xml
@"<Cortex_DataTypes_Dictionaries_Structure>
    <node1>1</node1>
    <node2>2</node2>
    <node3>3</node3>
</Cortex_DataTypes_Dictionaries_Structure>"
```

[Convert Xml To Structure]: {{< url "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertXmlToStructureBlock.MainDoc" >}}
[Structure Property]: {{< ref "#structure" >}}
[Xml Property]: {{< ref "#xml" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[XmlSerializationException]: {{< url "JsonDotNet.XmlSerializationException" >}}

[Structure]: {{< url "Cortex.Reference.DataTypes.MostCommon.Structure" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}

[Complex Type]: {{< url "Cortex.Reference.Concepts.Fundamentals.ComplexTypes.MainDoc" >}}
[Primitive Values]: {{< url "Cortex.Reference.Concepts.Fundamentals.PrimitiveTypes.MainDoc" >}}
[Key Value Pair]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.KeyValuePairs" >}}
[Working with Structures]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Structures" >}}

[Character Sets]: {{< url "W3.CharacterSets" >}}
