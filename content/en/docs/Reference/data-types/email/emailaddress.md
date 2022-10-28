---
title: "EmailAddress"
linkTitle: "EmailAddress"
description: "Used to represent an email address."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Email.EmailAddress)</p>

## Summary

The `EmailAddress` data type is used to represent an email address.

| | |
|-|-|
| **Category:**          | Email                                                  |
| **Name:**              | `EmailAddress`                                         |
| **Full Name:**         | `Cortex.DataTypes.Email.EmailAddress`                  |
| **Alias:**             | N/A                                                    |
| **Description:**       | An email address.                              |
| **Default Value:**     | `null`                                                 |
| **Can be used as:**    | `EmailAddress`, `Object`, `dynamic`                    |
| **Can be cast to:**    | N/A                                                    |

## Properties

### Name

Name is used to define the display name associated with the email address.

This property is not required.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `""` |

### Address

Address is used to define the email address. This must be a valid email address as outlined in [RFC 5321][].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [String][] with value `""` |

## Remarks

### Create an EmailAddress

The following table shows some of the ways that an `EmailAddress` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use an `EmailAddress` constructor | `new EmailAddress(name: "Sender", address: "sender@outlook.com")`| `{"Name": "Sender", "Address": "sender@outlook.com"}` | Expression | Name specified |
| | `new EmailAddress(address: "sender@outlook.com")`| `{"Name": null, "Address": "sender@outlook.com"}` | Expression | Name not specified |

An `EmailAddress` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Name` | `String` | `"Sender"` | [Name][Name Property] defines the display name associated with the email address. |
| `Address` | `String` | `"sender@outlook.com"` | [Address][Address Property] defines the email address. |

### Convert EmailAddress to Text

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `{"Name": "Sender", "Address": "sender@outlook.com"}` | `"{\r\n  \"Name\": \"Sender\",\r\n  \"Address\": \"sender@outlook.com\"\r\n}"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailAddress`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailAddress`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailAddress`.
  
### Known Limitations

None

## See Also

### Related Data Types

- [EmailMessage][]
- [String][]

### Related Concepts

- [Working with Email][]

### External Documentation

- [RFC 5321][]

[Name Property]: {{< ref "#name" >}}
[Address Property]: {{< ref "#address" >}}

[Input]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}

[EmailMessage]: {{< url "Cortex.Reference.DataTypes.Email.EmailMessage.MainDoc" >}}

[Working with Email]: {{< url "Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}

[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Convert Object To Json]: {{< url "Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[RFC 5321]: {{< url "IETF.Email.RFC5321" >}}
