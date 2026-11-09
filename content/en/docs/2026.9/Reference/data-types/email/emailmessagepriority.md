---
title: "EmailMessagePriority"
linkTitle: "EmailMessagePriority"
description: "Used to represent the priority of an email message."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Email.EmailMessagePriority)</p>

## Summary

The `EmailMessagePriority` data type is used to represent the priority of an email message.

`EmailMessagePriority` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Email                                                  |
| **Name:**              | `EmailMessagePriority`                                 |
| **Full Name:**         | `Cortex.DataTypes.Email.EmailMessagePriority`          |
| **Alias:**             | N/A                                                    |
| **Description:**       | Priority of an email message.                          |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `EmailMessagePriority.Normal`                          |
| **Can be used as:**    | `EmailMessagePriority`, `Object`, `dynamic`            |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)EmailMessagePriority.Normal` or `(System.Int16)EmailMessagePriority.Normal` or `(short)EmailMessagePriority.Normal`)  |
|                        | `Int32` (e.g. `(Int32)EmailMessagePriority.Normal` or `(System.Int32)EmailMessagePriority.Normal` or `(int)EmailMessagePriority.Normal`)  |
|                        | `Int64` (e.g. `(Int64)EmailMessagePriority.Normal` or `(System.Int64)EmailMessagePriority.Normal` or `(long)EmailMessagePriority.Normal`)  |
|                        | `Single` (e.g. `(Single)EmailMessagePriority.Normal` or `(System.Single)EmailMessagePriority.Normal` or `(float)EmailMessagePriority.Normal`)  |
|                        | `Double` (e.g. `(Double)EmailMessagePriority.Normal` or `(System.Double)EmailMessagePriority.Normal` or `(double)EmailMessagePriority.Normal`)  |

## Values

### Normal

| | |
|-|-|
| **Name:**    | Normal                                                |
| **Value:**   | [Int32][] with value `0`                              |
| **Notes:**   | Used when an email is marked with normal priority.     |

### NonUrgent

| | |
|-|-|
| **Name:**    | NonUrgent                                             |
| **Value:**   | [Int32][] with value `1`                              |
| **Notes:**   | Used when an email is marked with non-urgent priority. |

### Urgent

| | |
|-|-|
| **Name:**    | Urgent                                                |
| **Value:**   | [Int32][] with value `2`                              |
| **Notes:**   | Used when an email is marked with urgent priority.     |

## Remarks

### Create an EmailMessagePriority

The following table shows some of the ways that `EmailMessagePriority` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare an `EmailMessagePriority` literal | `Normal` | `EmailMessagePriority.Normal`| Literal | Indicates Normal |
| | `NonUrgent` | `EmailMessagePriority.NonUrgent`| Literal | Indicates NonUrgent |
| | `Urgent` | `EmailMessagePriority.Urgent`| Literal | Indicates Urgent |
| Use an `EmailMessagePriority` expression | `EmailMessagePriority.Normal` | `EmailMessagePriority.Normal`| Expression | Indicates Normal |
| | `EmailMessagePriority.NonUrgent` | `EmailMessagePriority.NonUrgent`| Expression | Indicates NonUrgent |
| | `EmailMessagePriority.Urgent` | `EmailMessagePriority.Urgent`| Expression | Indicates Urgent |
| Use [Explicit Casting][] | `(EmailMessagePriority)0`  | `EmailMessagePriority.Normal` | Expression | Indicates Normal |
| | `(EmailMessagePriority)1`  | `EmailMessagePriority.NonUrgent` | Expression | Indicates NonUrgent |
| | `(EmailMessagePriority)2`  | `EmailMessagePriority.Urgent` | Expression | Indicates Urgent |
| Use `Enum.Parse` | `(EmailMessagePriority)Enum.Parse(typeof(EmailMessagePriority), "Normal")` | `EmailMessagePriority.Normal` | Expression | Parses `"Normal"` and converts it to `EmailMessagePriority.Normal`. See [Enum.Parse][] |
| | `(EmailMessagePriority)Enum.Parse(typeof(EmailMessagePriority), "NonUrgent")` | `EmailMessagePriority.NonUrgent` | Expression | Parses `"NonUrgent"` and converts it to `EmailMessagePriority.NonUrgent`. See [Enum.Parse][] |
| | `(EmailMessagePriority)Enum.Parse(typeof(EmailMessagePriority), "Urgent")` | `EmailMessagePriority.Urgent` | Expression | Parses `"Urgent"` and converts it to `EmailMessagePriority.Urgent`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(EmailMessagePriority)Enum.ToObject(typeof(EmailMessagePriority), 0)` | `EmailMessagePriority.Normal` | Expression | Converts `0` to `EmailMessagePriority.Normal` value. See [Enum.ToObject][] |
| | `(EmailMessagePriority)Enum.ToObject(typeof(EmailMessagePriority), 1)` | `EmailMessagePriority.NonUrgent` | Expression | Converts `1` to `EmailMessagePriority.NonUrgent` value. See [Enum.ToObject][] |
| | `(EmailMessagePriority)Enum.ToObject(typeof(EmailMessagePriority), 2)` | `EmailMessagePriority.Urgent` | Expression | Converts `2` to `EmailMessagePriority.Urgent` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert EmailMessagePriority to Text

The following table shows some of the ways that a `EmailMessagePriority` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `EmailMessagePriority.Normal.ToString()` | `"Normal"` | Expression | Converts `EmailMessagePriority.Normal` to `"Normal"`. See [Enum.ToString][] |
| | `EmailMessagePriority.NonUrgent.ToString()` | `"NonUrgent"` | Expression | Converts `EmailMessagePriority.NonUrgent` to `"NonUrgent"`. See [Enum.ToString][] |
| | `EmailMessagePriority.Urgent.ToString()` | `"Urgent"` | Expression | Converts `EmailMessagePriority.Urgent` to `"Urgent"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(EmailMessagePriority.Normal)` | `"Normal"` | Expression | Converts `EmailMessagePriority.Normal` to `"Normal"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailMessagePriority.NonUrgent)` | `"NonUrgent"` | Expression | Converts `EmailMessagePriority.NonUrgent` to `"NonUrgent"`. See [Convert.ToString][] |
| | `Convert.ToString(EmailMessagePriority.Urgent)` | `"Urgent"` | Expression | Converts `EmailMessagePriority.Urgent` to `"Urgent"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `EmailMessagePriority.Normal` | `"Normal"` | N/A  | Converts `EmailMessagePriority.Normal` to `"Normal"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailMessagePriority.NonUrgent` | `"NonUrgent"` | N/A  | Converts `EmailMessagePriority.NonUrgent` to `"NonUrgent"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `EmailMessagePriority.Urgent` | `"Urgent"` | N/A  | Converts `EmailMessagePriority.Urgent` to `"Urgent"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `EmailMessagePriority.Normal` | `"0"` | N/A  | Converts `EmailMessagePriority.Normal` to `"0"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailMessagePriority.NonUrgent` | `"1"` | N/A  | Converts `EmailMessagePriority.NonUrgent` to `"1"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `EmailMessagePriority.Urgent` | `"2"` | N/A  | Converts `EmailMessagePriority.Urgent` to `"2"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert EmailMessagePriority to a Number

The following table shows some of the ways that a `EmailMessagePriority` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)EmailMessagePriority.Normal`   | `0` | Expression | [Casts][Explicit Casting] `EmailMessagePriority.Normal` to `0` |
|                                       | `(Int32)EmailMessagePriority.NonUrgent`   | `1` | Expression | [Casts][Explicit Casting] `EmailMessagePriority.NonUrgent` to `1` |
|                                       | `(Int32)EmailMessagePriority.Urgent`  | `2` | Expression | [Casts][Explicit Casting] `EmailMessagePriority.Urgent` to `2` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(EmailMessagePriority.Normal)`   | `0` | Expression | Converts `EmailMessagePriority.Normal` to `0`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailMessagePriority.NonUrgent)`   | `1` | Expression | Converts `EmailMessagePriority.NonUrgent` to `1`.  See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(EmailMessagePriority.Urgent)`  | `2` | Expression | Converts `EmailMessagePriority.Urgent` to `2`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `EmailMessagePriority`.
- The Literal Editor is available for [Input][] properties where the data type is `EmailMessagePriority`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `EmailMessagePriority`.
  
### Known Limitations

None

## See Also

### Related Data Types

- [EmailMessage][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Email][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[EmailMessage]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.MainDoc" >}}
[Working with Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
