---
title: "Convert Structure To Xml"
linkTitle: "Convert Structure To Xml"
description: "Converts a Structure To Xml."
---

{{< figure src="/blocks/xml-convert-to-xml-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Xml.ConvertXml.ConvertStructureToXmlBlock)</p>

## Description

Converts a [Structure][Structure Property] to [Xml][Xml Property].

Each top level [Key][Keys] will be converted using the following rules:

* [Keys][] become [Nodes][Xml Nodes]
* [Items][] become the values of the corresponding node.

Each inner key will be converted using the following rules:

* Inner keys become inner nodes within their parent node.
* Items of inner keys become the values of the corresponding inner nodes.

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

Converting:

``` json
{
    "node1" : "1",
    "node2" : "2",
    "node3" : "3"
}
```

to [Xml][Xml Property] results in the variable `($)Xml` being updated to the following:

``` xml
@"<Cortex_DataTypes_Dictionaries_Structure>
    <node1>1</node1>
    <node2>2</node2>
    <node3>3</node3>
</Cortex_DataTypes_Dictionaries_Structure>"
```

* The `"Cortex_DataTypes_Dictionaries_Structure"` root node is added as there is no single top level key.
* The `"node1"` [Key][Keys] is converted into a child node of `"Cortex_DataTypes_Dictionaries_Structure"` with its corresponding [Item][Items] as the value.
* The `"node2"` [Key][Keys] is converted into a child node of `"Cortex_DataTypes_Dictionaries_Structure"` with its corresponding [Item][Items] as the value.
* The `"node3"` [Key][Keys] is converted into a child node of `"Cortex_DataTypes_Dictionaries_Structure"` with its corresponding [Item][Items] as the value.

***

### Convert a Complex Structure to Xml

This example will convert the [Structure][Structure Property] below to its [Xml][Xml Property] representation. This scenario is unlikely unless [Xml][Xml Property] has been converted to a [Structure][Structure Property] and is being [Round-Tripped][Round Tripping].

``` json
{
    "topLevelKey": {
        "@topLevelAttribute" : "exampleAttribute",
        "innerKey" : {
            "@innerNodeAttribute" : "exampleInnerNodeAttribute",
            "nestedKey": "nested key text",
            "#text": "inner key text"
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
| [Structure][Structure Property] | `($)Structure`, with value`"{"topLevelNode": {"@topLevelAttribute" : "exampleAttribute", "innerNode" : { "@innerNodeAttribute" : "exampleInnerNodeAttribute", "nestedNode": "nested node text", "#text": "inner node text" }, "id": [ 1,  2,  3 ], } }"` | `($)Structure` is a variable of type [Structure][] |
| [Xml][Xml Property] | `($)Xml`, with no value | `($)Xml` is a variable that will be set to a [String][] value. |

#### Result

Converting:

``` json
{
    "topLevelKey": {
        "@topLevelAttribute" : "exampleAttribute",
        "innerKey" : {
            "@innerNodeAttribute" : "exampleInnerNodeAttribute",
            "nestedKey": "nested key text",
            "#text": "inner key text"
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
@"<topLevelKey topLevelAttribute=""exampleAttribute"">
    <innerKey innerNodeAttribute=""exampleInnerNodeAttribute"">
        <nestedKey>nested key text</nestedKey>
        inner key text
    </innerKey>
    <id>1</id>
    <id>2</id>
    <id>3</id>
</topLevelKey>"
```

* The key `"topLevelKey"` is converted into the `"topLevelKey"` node.
* The key `"@topLevelAttribute"` is converted into the `"topLevelAttribute"` attribute with its corresponding item as the value.
* The key `"innerKey"` is converted into the `"innerKey"` node.
* The key `"@innerNodeAttribute"` is converted into the `"innerNodeAttribute"` attribute with its corresponding item as the value.
* The key `"nestedKey"` is converted into the `"nestedKey"` node with its corresponding item as the value.
* The key `"#text"` is converted into the value of the `"innerKey"` key with its corresponding item as the value.
* The key `"id"` is converted into three `"id"` nodes with each corresponding item as their values.

***

## Properties

### Structure

The [Structure][Structure Property] to convert into [Xml][Xml Property].

For more information about Structures, please see [Working with Structures][].

| | |
|--------------------|---------------------------|
| Data Type | [Structure][] |
| Property Type | [Input][] |
| Default Value | `($)Structure` with no value |

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
|| Thrown when the [Structure][Structure Property] includes an xml declaration key (e.g. `"?xml"` can only accept the following attributes: `"@version"`, `"@encoding"` and `"@standalone"`.) or a document type definition key (e.g. `"!DOCTYPE"` can only accept the following attributes: `"@name"`, `"@public"`, `"@system"` and `"@internalSubset"`). |
|| Thrown when the [Structure][Structure Property] includes an xml declaration key (e.g. `"?xml"`) with an attribute that has an invalid [Primitive Value][Primitive Values]. (e.g. `Key: "@version", Value: false`, where `"@version"` must be a numeric value). |
|| Thrown when the [Structure][Structure Property] includes a document type definition key (e.g. `"!DOCTYPE"`) that has an attribute with an invalid [Primitive Value][Primitive Values]. (e.g. `Key: "@name", Value: 22`, where `"@name"` must be a text value). |
|| Thrown when the [Structure][Structure Property] includes an attribute key with a [Complex Type][] as a value. (e.g. `Key: "@name", Value: new UserCredentials{...}`). |

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

### Primitive Values within Attribute Keys

Attribute keys may only have [Primitive Values][] as shown in the example below. An [XmlSerializationException][] will be thrown if a [Complex Value][Complex Type] is used as an attribute key.

``` json
{
    "node": {
        "@validAttribute": "Attribute Value",
        "@invalidAttribute": new ComplexValue("Invalid"),
    }
}
```

### Key Restrictions

An Xml declaration key (e.g. `"?xml"`) can only accept the following attributes: `"@version"`, `"@encoding"` and `"@standalone"`.

A document type definition key (e.g. `"!DOCTYPE"`) can only accept the following attributes: `"@name"`, `"@public"`, `"@system"` and `"@internalSubset"`.

`"$id"`, `"$ref"`, `"$type"`, `"$value"` and `"values"` are reserved words and should not be used as keys.

### Text Nodes

If a key contains a structure as its item, the inner keys are converted into [Nodes][Xml Nodes] with their corresponding items as the values. The key `"#text"` is converted into value of its parent node.

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

The [Structure][Structure Property] example above would be converted to the following [Xml][Xml Property].

``` xml
@"<node>
    <innerNode attribute="attributeValue">
        Inner Node Value
    </innerNode>
    Node Value
</node>"
```

### Duplicate Nodes at the Same Level

If there are multiple duplicate nodes at the same level, they are defined using a [Key][Keys] where the key is the duplicated node name and the [Item][Items] is a list of each of the corresponding duplicate node's values, for example:

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

### Using Non-Alphanumeric Symbols within Node Names

Any non-alphanumeric symbol (i.e. symbols that are not `"0"` to `"9"`, `"a"` to `"z"`, or `"A"` to `"Z"`) will be converted to their respective Unicode values when used within a [Key][Keys]. For example, `"!"` and `"&"` are both non-alphanumeric symbols and would be converted to `"x0021"` and `"x0026"` respectively.

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

[Convert Xml To Structure]: {{< url "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertXmlToStructure.MainDoc" >}}

[Structure Property]: {{< ref "#structure" >}}
[Xml Property]: {{< ref "#xml" >}}
[Round Tripping]: {{< ref "#round-tripping" >}}
[Convert A Structure To Xml Example]: {{< ref "#convert-a-structure-to-xml" >}}

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.PropertyType.Output" >}}

[PropertyEmptyException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[XmlSerializationException]: {{< url "Cortex.Reference.Exceptions.Xml.XmlSerializationException" >}}

[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Keys]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Keys" >}}
[Items]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Items" >}}
[Complex Type]: {{< url "Cortex.Reference.Concepts.Fundamentals.ComplexTypes.MainDoc" >}}
[Primitive Values]: {{< url "Cortex.Reference.Concepts.Fundamentals.PrimitiveTypes.MainDoc" >}}
[Key Value Pair]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.KeyValuePairs" >}}
[Working with Structures]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Structures" >}}

[Character Sets]: {{< url "W3.CharacterSets" >}}
[Xml Nodes]: {{< url "W3.XmlNodes" >}}
