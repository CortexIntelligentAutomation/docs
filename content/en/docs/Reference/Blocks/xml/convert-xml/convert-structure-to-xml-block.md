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

Each top level [Key][Keys] will be converted using the following rules:

* [Keys][] become [Nodes][Xml Nodes]
* [Items][] become the values of the corresponding node.

Each inner key will be converted using the following rules:

* Inner keys become inner nodes within the their top level node.
* Items of inner keys become the values become the corresponding inner nodes.

For example:

``` json
"topLevelNode": { 
    "innerNode" : "innerNodeValue" 
}
```

will be converted into:

``` xml
@"<topLevelNode>
    <innerNode>innerNodeValue</innerNode>
</topLevelNode>"

```

## Examples

TODO: link examples to remarks sections where appropriate.

### Convert a Structure To Xml

This example will convert the [Structure][Structure Property] below to its [Xml][Xml Property] representation.

``` json
{
    "node1" : "1",
    "node2" : "2",
    "node3" : "3"
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
$@"<Cortex_DataTypes_Dictionaries_Structure>
    <node1>1</node1>
    <node2>2</node2>
    <node3>3</node3>
</Cortex_DataTypes_Dictionaries_Structure>"
```

* The `"Cortex_DataTypes_Dictionaries_Structure"` root node is added as there is no single top level key.
* The "`node1`" [Key][Keys] is converted into a child node of `"Cortex_DataTypes_Dictionaries_Structure"` with its corresponding [Item][Items].
* The "`node2`" [Key][Keys] is converted into a child node of `"Cortex_DataTypes_Dictionaries_Structure"` with its corresponding [Item][Items].
* The "`node3`" [Key][Keys] is converted into a child node of `"Cortex_DataTypes_Dictionaries_Structure"` with its corresponding [Item][Items].

***

### Convert a Complex Structure to Xml

This example will convert the [Structure][Structure Property] below to its [Xml][Xml Property] representation. This scenario is unlikely unless [Xml][Xml Property] has been converted to a [Structure][Structure Property] and is being [Round Tripped][Round Tripping].

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

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Structure][Structure Property] | `($)Structure`, with value`"{"topLevelNode": {"@topLevelAttribute" : "exampleAttribute", "innerNode" : { "@innerNodeAttribute" : "exampleInnerNodeAttribute", "nestedNode": "nested node text", "#text": "inner node text" }, "id": [ 1,  2,  3 ], } }"` is a variable of type [Structure][] |
| [Xml][Xml Property] | `($)Xml`, with no value | `($)Xml` is a variable that will be set to a [String][] value. |

#### Result

Converting:

``` json
{
    "topLevelKey": {
        "@topLevelAttribute" : "exampleAttribute",
        "innerKey" : {
            "@innerNodeAttribute" : "exampleInnerNodeAttribute",
            "nestedKey": "nested node text",
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

to [Xml][Xml Property] results in the variable `($)Xml` being updated to the following:

``` xml
$@"<topLevelKey topLevelAttribute=""exampleAttribute"">
    <innerKey innerNodeAttribute=""exampleInnerNodeAttribute"">
        <nestedKey>nested node text</nestedKey>
        inner node text
    </innerKey>
    <id>1</id>
    <id>2</id>
    <id>3</id>
</topLevelKey>"
```

* The key `"topLevelKey"` is converted into the `"topLevelKey"` node.
* The key `"@topLevelAttribute"` is converted into the `"@topLevelAttribute"` attribute with its corresponding item as the value.
* The key `"innerKey"` is converted into the `"innerKey"` node.
* The key `"@innerNodeAttribute"` is converted into the `"@innerNodeAttribute"` attribute with its corresponding item as the value.
* The key `"nestedKey"` is converted into the `"nestedKey"` node with its corresponding value as the item as the value.
* The value of `"innerNode"` is converted into the `"#text"` key with its corresponding value as the item as the value.
* The `"id"` key is converted into three `"id"` nodes with each corresponding item as is value.

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

### Attributes

If a [Node][Xml Nodes] requires an attribute, the attribute is defined by a [Key][Keys] where the key is the attribute name with an `"@"` before it and the [Item][Items] is the attribute data, for example:

``` json
{
    "node": {
        "@attribute": "Attribute Value",
        "innernode": "Inner Node Value"
    }
}
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property]

``` xml
@"<node attribute="Attribute Value">
    <innerNode>Inner Node Value</innerNode>
</node>"
```

### Primitive Values Within Attribute Keys

Attribute keys may only have [Primitive Values][], an [XmlSerializationException][] will be thrown if a [Complex Value][Complex Type] is used as an attribute key.

``` json
{
    "node": {
        "@validAttribute": "Attribute Value",
        "@invalidAttribute": new ComplexValue("Invalid"),
    }
}
```

### Key Restrictions

If provided, a xml declaration [Key][Keys] (e.g. `"?xml"`) can only accept following attributes: `"@version"`, `"@encoding"` and `"@standalone"`.

If provided, a document type definition [Key][Keys] (e.g. !DOCTYPE) can only accept following attributes: `"@name"`, `"@public"`, `"@system"` and `"@internalSubset"`.

The [Keys][] `"$id"`, `"$ref"`, `"$type"` and `"$value"` are reserved words within the XMLConverter. Using them can cause odd behaviour as they are treated like attributes within the conversion.

The [Key][Keys] `"values"` is also reserved, however it is treated as its own [Node][Xml Nodes] within the conversion.

### Text Nodes

If a key contains a structure as its item, the inner keys are converted into [Nodes][Xml Nodes] with their corresponding items as the values. The key `"#text"` of the top level key is converted into value of the node.

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

If a there are multiple duplicate nodes at the same level, they are defined using a [Key][Keys] where the key is the duplicated node name and the [Item][Items] is a list of each of the corresponding duplicate node's data, for example:

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

Any non-alphanumeric symbol (i.e. symbols that are not 0 to 9 or a to Z) will be converted to their respective Unicode values when used within a [Key][Keys]. For example, `"!"` and `"&"` are both non-alphanumeric symbols and would be converted to `"x0021"` and `"x0026"` respectively.

For more information on characters and their Unicode values please see [Character Sets][]

### Round-tripping

It should be possible to pass the [Xml][Xml Property]  created by this block to the [Convert Xml To Structure][] block, and then pass the [Structure][Structure Property] created by the [Convert Xml To Structure][] block back to this block, as long all values within the [Xml][Xml Property] are [Strings][String]; this is called round-tripping.

### <Cortex_DataTypes_Dictionaries_Structure> Node

`"<Cortex_DataTypes_Dictionaries_Structure>"` is added as a root node when the [Structure][Structure Property] has more than one top level key to ensure that valid [Xml][Xml Property] is produced.

``` json
{
    "node1" : "1",
    "node2" : "2",
    "node3" : "3"
}
```

The [Xml][Xml Property] example above would be converted to the following [Structure][Structure Property].

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
[Round Tripping]: {{< ref "#round-tripping" >}}
[Convert A Structure To Xml Example]: {{< ref "#convert-a-structure-to-xml" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[XmlSerializationException]: {{< url "JsonDotNet.XmlSerializationException" >}}

[Structure]: {{< url "Cortex.Reference.DataTypes.MostCommon.Structure" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Keys" >}}
[Items]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Items" >}}
[Complex Type]: {{< url "Cortex.Reference.Concepts.Fundamentals.ComplexTypes.MainDoc" >}}
[Primitive Values]: {{< url "Cortex.Reference.Concepts.Fundamentals.PrimitiveTypes.MainDoc" >}}
[Key Value Pair]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.KeyValuePairs" >}}
[Working with Structures]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Structures" >}}

[Character Sets]: {{< url "W3.CharacterSets" >}}
[Xml Nodes]: {{< url "W3.XmlNodes" >}}
