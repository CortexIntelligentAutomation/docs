---
title: "XmlSerializationException"
linkTitle: "XmlSerializationException"
description: "The exception thrown when an error occurs when serializing or deserializing XML."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Xml.XmlSerializationException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an error occurs when serializing or deserializing XML.

## Reasons

### Invalid Structure {#structure}

The [Structure][ConvertStructureToXml Structure Property] provided to the [Convert Structure To Xml][ConvertStructureToXml] block is invalid.

#### Message Format

The format of the message can be one of the following:

```json
"Invalid 'Structure' provided. The 'Structure' has been provided an empty key that could not be converted to valid xml.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Structure' provided. The 'Structure' has been provided a key that could not be converted to valid xml.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Structure' provided. The 'Structure' has been provided an xml declaration key with an attribute value that could not be converted to valid xml.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Structure' provided. The 'Structure' has been provided a document type definition key with an attribute value that could not be converted to valid xml.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Structure' provided. The 'Structure' has been provided an attribute key with a value that could not be converted to valid xml.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

* Ensure that all keys in the structure provided are not empty (i.e. `""`). The path to the specific key which threw this exception can be seen in the `Key` property (e.g. `"firstItem."` indicates that the empty key is a child of a top level item that has the key `"firstItem"`). If a top level item has an empty key (i.e. `""`), then the `Key` property will also be empty (i.e. `""`).
* Ensure that the XML declaration key (i.e. `"?xml"`) and document type definition key (i.e. `"!DOCTYPE"`) in the structure provided only have valid attributes:  
  * XML declaration key: `"@version"`, `"@encoding"` and `"@standalone"`
  * Document type definition key:  `"@name"`, `"@public"`, `"@system"` and `"@internalSubset"`

  The path to the specific key which threw this exception can be seen in the `Key` property.
* Ensure that all child attribute keys of the XML declaration item, in the structure provided, have values with a valid [Basic Data Type][BasicDataTypes] (e.g. the child attribute key `"@version"`, requires a numeric value like `1.0` or `1.1`, so a value of `false` is invalid).
* Ensure that all child attribute keys of the document type definition item, in the structure provided, have values with a valid [Basic Data Type][BasicDataTypes] (e.g. the child attribute key `"@name"`, requires a text value like `"exampleName"`, so a value of `22` is invalid).
* Ensure that all attribute keys in the structure provided have values which are not a [Complex Data Type][ComplexDataTypes]. The path to the specific key which threw this exception can be seen in the `Key` property.

### Invalid XML {#xml}

The [XML][ConvertXmlToStructure XML Property] provided to the [Convert Xml to Structure][ConvertXmlToStructure] block is invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Xml' provided. The 'Xml' provided is not valid xml.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the [XML][ConvertXmlToStructure XML Property] provided is [valid XML][XmlValidator]. See the `Message` of the `InnerException` property for more information.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

* [XML Validator][XmlValidator]

[Structure]: {{<url path = "Cortex.Reference.DataTypes.Collections.Structure.MainDoc">}}

[ConvertStructureToXml]: {{<url path = "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertStructureToXml.MainDoc">}}
[ConvertStructureToXml Structure Property]: {{<url path = "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertStructureToXml.Structure">}}

[ConvertXmlToStructure]: {{<url path = "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertXmlToStructure.MainDoc">}}
[ConvertXmlToStructure XML Property]: {{<url path = "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertXmlToStructure.Xml">}}

[XmlNodes]: {{<url path = "W3.XmlNodes">}}

[BasicDataTypes]: {{<url path = "Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.BasicDataTypes">}}
[ComplexDataTypes]: {{<url path = "Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ComplexDataTypes">}}

[XmlValidator]: {{<url path = "JsonFormatter.XmlValidator">}}
