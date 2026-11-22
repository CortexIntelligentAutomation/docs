---
title: "EmailDeletionType"
linkTitle: "EmailDeletionType"
description: "The way in which an email is deleted."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Microsoft365.Outlook.EmailDeletionType)</p>

## Summary

The `EmailDeletionType` data type sets how [Delete Email Using Microsoft 365][] and [Delete Emails Using Microsoft 365][] delete an email.

`EmailDeletionType` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Microsoft 365 |
| **Name:**              | `EmailDeletionType` |
| **Full Name:**         | `Cortex.DataTypes.Microsoft365.Outlook.EmailDeletionType` |
| **Alias:**             | N/A |
| **Description:**       | The way in which an email is deleted. |
| **Size:**              | `4` bytes |
| **Default Value:**     | `EmailDeletionType.MoveToDeletedItems` |
| **Can be used as:**    | `EmailDeletionType`, `Object`, `dynamic` |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)EmailDeletionType.MoveToDeletedItems` or `(System.Int16)EmailDeletionType.MoveToDeletedItems` or `(short)EmailDeletionType.MoveToDeletedItems`)  |
|                        | `Int32` (e.g. `(Int32)EmailDeletionType.MoveToDeletedItems` or `(System.Int32)EmailDeletionType.MoveToDeletedItems` or `(int)EmailDeletionType.MoveToDeletedItems`)  |
|                        | `Int64` (e.g. `(Int64)EmailDeletionType.MoveToDeletedItems` or `(System.Int64)EmailDeletionType.MoveToDeletedItems` or `(long)EmailDeletionType.MoveToDeletedItems`)  |
|                        | `Single` (e.g. `(Single)EmailDeletionType.MoveToDeletedItems` or `(System.Single)EmailDeletionType.MoveToDeletedItems` or `(float)EmailDeletionType.MoveToDeletedItems`)  |
|                        | `Double` (e.g. `(Double)EmailDeletionType.MoveToDeletedItems` or `(System.Double)EmailDeletionType.MoveToDeletedItems` or `(double)EmailDeletionType.MoveToDeletedItems`)  |

## Values

### MoveToDeletedItems

| | |
|-|-|
| **Name:**    | MoveToDeletedItems |
| **Value:**   | [Int32][] with value `0` |
| **Notes:**   | Moves the email to the Deleted Items folder, from where it can be recovered. |

### Permanent

| | |
|-|-|
| **Name:**    | Permanent |
| **Value:**   | [Int32][] with value `1` |
| **Notes:**   | Permanently deletes the email so that it can no longer be recovered in Outlook. |

## Remarks

### Create an EmailDeletionType

The following table shows some of the ways that `EmailDeletionType` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `EmailDeletionType` literal | `MoveToDeletedItems` | `EmailDeletionType.MoveToDeletedItems` | Literal | Moves the email to the Deleted Items folder, from where it can be recovered. |
|  | `Permanent` | `EmailDeletionType.Permanent` | Literal | Permanently deletes the email so that it can no longer be recovered in Outlook. |
| Use an `EmailDeletionType` expression | `EmailDeletionType.MoveToDeletedItems` | `EmailDeletionType.MoveToDeletedItems` | Expression | Moves the email to the Deleted Items folder, from where it can be recovered. |
|  | `EmailDeletionType.Permanent` | `EmailDeletionType.Permanent` | Expression | Permanently deletes the email so that it can no longer be recovered in Outlook. |
| Use [Explicit Casting][] | `(EmailDeletionType)0` | `EmailDeletionType.MoveToDeletedItems` | Expression | Moves the email to the Deleted Items folder, from where it can be recovered. |
|  | `(EmailDeletionType)1` | `EmailDeletionType.Permanent` | Expression | Permanently deletes the email so that it can no longer be recovered in Outlook. |
| Use `Enum.Parse` | `(EmailDeletionType)Enum.Parse(typeof(EmailDeletionType), "MoveToDeletedItems")` | `EmailDeletionType.MoveToDeletedItems` | Expression | Parses `"MoveToDeletedItems"` and converts it to `EmailDeletionType.MoveToDeletedItems`. See [Enum.Parse][] |
|  | `(EmailDeletionType)Enum.Parse(typeof(EmailDeletionType), "Permanent")` | `EmailDeletionType.Permanent` | Expression | Parses `"Permanent"` and converts it to `EmailDeletionType.Permanent`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(EmailDeletionType)Enum.ToObject(typeof(EmailDeletionType), 0)` | `EmailDeletionType.MoveToDeletedItems` | Expression | Converts `0` to `EmailDeletionType.MoveToDeletedItems`. See [Enum.ToObject][] |
|  | `(EmailDeletionType)Enum.ToObject(typeof(EmailDeletionType), 1)` | `EmailDeletionType.Permanent` | Expression | Converts `1` to `EmailDeletionType.Permanent`. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert EmailDeletionType to Text

The following table shows some of the ways that an `EmailDeletionType` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `EmailDeletionType.MoveToDeletedItems.ToString()` | `"MoveToDeletedItems"` | Expression | Converts `EmailDeletionType.MoveToDeletedItems` to `"MoveToDeletedItems"`. See [Enum.ToString][] |
|  | `EmailDeletionType.Permanent.ToString()` | `"Permanent"` | Expression | Converts `EmailDeletionType.Permanent` to `"Permanent"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(EmailDeletionType.MoveToDeletedItems)` | `"MoveToDeletedItems"` | Expression | Converts `EmailDeletionType.MoveToDeletedItems` to `"MoveToDeletedItems"`. See [Convert.ToString][] |
|  | `Convert.ToString(EmailDeletionType.Permanent)` | `"Permanent"` | Expression | Converts `EmailDeletionType.Permanent` to `"Permanent"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `EmailDeletionType.MoveToDeletedItems` | `"MoveToDeletedItems"` | N/A | Converts `EmailDeletionType.MoveToDeletedItems` to `"MoveToDeletedItems"`. See [Convert Object To Text][] |
|  | where `Object` property has a value of `EmailDeletionType.Permanent` | `"Permanent"` | N/A | Converts `EmailDeletionType.Permanent` to `"Permanent"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `EmailDeletionType.MoveToDeletedItems` | `"0"` | N/A | Converts `EmailDeletionType.MoveToDeletedItems` to `"0"`. See [Convert Object To Json][] |
|  | where `Object` property has a value of `EmailDeletionType.Permanent` | `"1"` | N/A | Converts `EmailDeletionType.Permanent` to `"1"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert EmailDeletionType to a Number

The following table shows some of the ways that an `EmailDeletionType` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][] | `(Int32)EmailDeletionType.MoveToDeletedItems` | `0` | Expression | [Casts][Explicit Casting] `EmailDeletionType.MoveToDeletedItems` to `0` |
|  | `(Int32)EmailDeletionType.Permanent` | `1` | Expression | [Casts][Explicit Casting] `EmailDeletionType.Permanent` to `1` |
| Use `Convert.ToInt32` | `Convert.ToInt32(EmailDeletionType.MoveToDeletedItems)` | `0` | Expression | Converts `EmailDeletionType.MoveToDeletedItems` to `0`. See [Convert.ToInt32][] |
|  | `Convert.ToInt32(EmailDeletionType.Permanent)` | `1` | Expression | Converts `EmailDeletionType.Permanent` to `1`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailDeletionType`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailDeletionType`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailDeletionType`.

### Known Limitations

None

## See Also

### Related Data Types

- [Int32][]
- [String][]

### Related Blocks

- [Delete Email Using Microsoft 365][]
- [Delete Emails Using Microsoft 365][]

### Related Concepts

- [Working with Enums][]
- [Explicit Casting][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Delete Email Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DeleteEmail.DeleteEmailUsingMicrosoft365.MainDoc" >}}
[Delete Emails Using Microsoft 365]: {{< url path="Cortex.Reference.Blocks.Microsoft365.Outlook.DeleteEmail.DeleteEmailsUsingMicrosoft365.MainDoc" >}}
