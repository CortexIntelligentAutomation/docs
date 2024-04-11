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

The [Structure][ConvertStructureToXml Structure Property] provided is invalid.

#### Message Format

The format of the message can be one of the following:

```json
"Invalid 'Structure' provided. The 'Structure' has been provided a document type definition key with an attribute value that could not be converted to valid xml.
Please click the HelpLink for more information on how to fix this."
```

or

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
"Invalid 'Structure' provided. The 'Structure' has been provided an attribute key with a value that could not be converted to valid xml.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Structure' provided. The 'Structure' has been provided an xml declaration key with an attribute value that could not be converted to valid xml.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

* Ensure that the value of the `"!DOCTYPE"` key in the structure provided is valid (e.g. the value for `"!DOCTYPE.@name"` must start with a letter or an underscore).
* Ensure that all keys in the structure provided are not empty (i.e. `""`). The specific key which threw this exception can be seen in the `Key` property (e.g. `"root."`, where the value of `"root"` is a structure containing an empty key `""`). If the root key of the structure is the empty (i.e. `""`) key causing this exception to be thrown, then the `Key` property will also be empty (i.e. `""`).
* Ensure that all keys in the structure provided can be converted to valid XML. The specific key which threw this exception can be seen in the `Key` property.
* Ensure that all keys in the structure provided have values which can be converted to valid XML. The specific key which threw this exception can be seen in the `Key` property.
* Ensure that all XML declaration keys in the structure provided have values which can be converted to a valid XML value for the given key (e.g.for a structure with the declaration key `"?xml"` containing another structure with key `"@version"`, the value paired with the `"@version"` key must be a string like `"1.0"` or `"1.1"`, so a value of `"abc"` is an invalid one).

### Invalid XML {#xml}

The [XML][ConvertXmlToStructure XML Property] provided is invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Xml' provided. The 'Xml' provided is not valid xml.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the [XML][ConvertXmlToStructure XML Property] provided is valid XML.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Structure]: {{<url path = "Cortex.Reference.DataTypes.Collections.Structure.MainDoc">}}

[ConvertStructureToXml Structure Property]: {{<url path = "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertStructureToXml.Structure">}}

[ConvertXmlToStructure XML Property]: {{<url path = "Cortex.Reference.Blocks.Xml.ConvertXml.ConvertXmlToStructure.Xml">}}

[XmlNodes]: {{<url path = "W3.XmlNodes">}}
