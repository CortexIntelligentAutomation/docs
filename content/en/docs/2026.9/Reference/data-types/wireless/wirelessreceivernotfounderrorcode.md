---
title: "WirelessReceiverNotFoundErrorCode"
linkTitle: "WirelessReceiverNotFoundErrorCode"
description: "Used to represent an error code explaining the reason a `WirelessReceiverBlockNotFoundException` occurred."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Wireless.WirelessReceiverNotFoundErrorCode)</p>

## Summary

The `WirelessReceiverNotFoundErrorCode` data type is used to represent an error code explaining the reason a [WirelessReceiverBlockNotFoundException][] occurred. For more information on the exception itself, see [WirelessReceiverBlockNotFoundException][].

`WirelessReceiverNotFoundErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Wireless                                               |
| **Name:**              | `WirelessReceiverNotFoundErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Wireless.WirelessReceiverNotFoundErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason a [WirelessReceiverBlockNotFoundException][] occurred. |
| **Default Value:**     | `(WirelessReceiverNotFoundErrorCode)0`                             |
| **Can be used as:**    | `WirelessReceiverNotFoundErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(System.Int16)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(short)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`)  |
|                        | `Int32` (e.g. `(Int32)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(System.Int32)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(int)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`)  |
|                        | `Int64` (e.g. `(Int64)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(System.Int64)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(long)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`)  |
|                        | `Single` (e.g. `(Single)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(System.Single)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(float)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`)  |
|                        | `Double` (e.g. `(Double)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(System.Double)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` or `(double)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`)  |

## Values

### WirelessReceiverBlockNotFound

| | |
|-|-|
| **Name:**    | WirelessReceiverBlockNotFound                                     |
| **Value:**   | [Int32][] with value `100`                      |
| **Notes:**   | Used when a [WirelessReceiverBlockNotFoundException][] occurred due to the selected [Wireless Receiver][Wireless Receiver Block] block being deleted or not existing. See [Wireless Receiver Block Not Found][WirelessReceiverExceptionBlockNotFound]. |

### WirelessReceiverPropertyEmpty

| | |
|-|-|
| **Name:**    | WirelessReceiverPropertyEmpty                                     |
| **Value:**   | [Int32][] with value `101`                      |
| **Notes:**   | Used when a [WirelessReceiverBlockNotFoundException][] occurred due to a [Wireless Receiver][Wireless Receiver Block] block not being selected. See [Wireless Receiver Property Empty][WirelessReceiverExceptionPropertyEmpty]. |

## Remarks

### Create a WirelessReceiverNotFoundErrorCode

The following table shows some of the ways that `WirelessReceiverNotFoundErrorCode` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use a `WirelessReceiverNotFoundErrorCode` expression | `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`| Expression | Indicates a [WirelessReceiverBlockNotFoundException][] occurred due to the selected [Wireless Receiver][Wireless Receiver Block] block being deleted or not existing. |
| | `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty`| Expression | Indicates a [WirelessReceiverBlockNotFoundException][] occurred due to a [Wireless Receiver][Wireless Receiver Block] block not being selected. |
| Use [Explicit Casting][] | `(WirelessReceiverNotFoundErrorCode)100` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`| Expression | Indicates a [WirelessReceiverBlockNotFoundException][] occurred due to the selected [Wireless Receiver][Wireless Receiver Block] block being deleted or not existing. |
| | `(WirelessReceiverNotFoundErrorCode)101` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty`| Expression | Indicates a [WirelessReceiverBlockNotFoundException][] occurred due to a [Wireless Receiver][Wireless Receiver Block] block not being selected. |
| Use `Enum.Parse` | `(WirelessReceiverNotFoundErrorCode)Enum.Parse(typeof(WirelessReceiverNotFoundErrorCode), "WirelessReceiverBlockNotFound")` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`| Expression | Parses `"WirelessReceiverBlockNotFound"` and converts it to `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`. See [Enum.Parse][] |
| | `(WirelessReceiverNotFoundErrorCode)Enum.Parse(typeof(WirelessReceiverNotFoundErrorCode), "WirelessReceiverPropertyEmpty")` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty`| Expression | Parses `"WirelessReceiverPropertyEmpty"` and converts it to `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(WirelessReceiverNotFoundErrorCode)Enum.ToObject(typeof(WirelessReceiverNotFoundErrorCode), 100)` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`| Expression | Converts `100` to `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` value. See [Enum.ToObject][] |
| | `(WirelessReceiverNotFoundErrorCode)Enum.ToObject(typeof(WirelessReceiverNotFoundErrorCode), 101)` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty`| Expression | Converts `101` to `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert WirelessReceiverNotFoundErrorCode to Text

The following table shows some of the ways that a `WirelessReceiverNotFoundErrorCode` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound.ToString()` | `"WirelessReceiverBlockNotFound"` | Expression | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` to `"WirelessReceiverBlockNotFound"`. See [Enum.ToString][] |
| | `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty.ToString()` | `"WirelessReceiverPropertyEmpty"` | Expression | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` to `"WirelessReceiverPropertyEmpty"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound)` | `"WirelessReceiverBlockNotFound"` | Expression | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` to `"WirelessReceiverBlockNotFound"`. See [Convert.ToString][] |
| | `Convert.ToString(WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty)` | `"WirelessReceiverPropertyEmpty"` | Expression | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` to `"WirelessReceiverPropertyEmpty"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` | `"WirelessReceiverBlockNotFound"` | N/A  | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` to `"WirelessReceiverBlockNotFound"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` | `"WirelessReceiverPropertyEmpty"` | N/A  | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` to `"WirelessReceiverPropertyEmpty"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` | `"100"` | N/A  | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` to `"100"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` | `"101"` | N/A  | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` to `"101"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert WirelessReceiverNotFoundErrorCode to a Number

The following table shows some of the ways that a `WirelessReceiverNotFoundErrorCode` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound`   | `100` | Expression | [Casts][Explicit Casting] `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` to `100` |
|                                       | `(Int32)WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty`   | `101` | Expression | [Casts][Explicit Casting] `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` to `101` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound)`   | `100` | Expression | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverBlockNotFound` to `100`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty)`   | `101` | Expression | Converts `WirelessReceiverNotFoundErrorCode.WirelessReceiverPropertyEmpty` to `101`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `WirelessReceiverNotFoundErrorCode`.
- The Literal Editor is available for [Input][] properties where the data type is `WirelessReceiverNotFoundErrorCode`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `WirelessReceiverNotFoundErrorCode`.

### Known Limitations

None

## See Also

### Related Data Types

- [WirelessReceiverBlockNotFoundException][]
- [Int32][]
- [String][]

### Related Concepts

- [Explicit Casting][]
- [Working with Enums][]

### External Documentation

- [System.Enum][]

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}

[WirelessReceiverExceptionBlockNotFound]: {{< url path="Cortex.Reference.Exceptions.Wireless.WirelessReceiverBlockNotFoundException.BlockNotFound" >}}
[WirelessReceiverExceptionPropertyEmpty]: {{< url path="Cortex.Reference.Exceptions.Wireless.WirelessReceiverBlockNotFoundException.PropertyEmpty" >}}
[WirelessReceiverBlockNotFoundException]: {{< url path="Cortex.Reference.Exceptions.Wireless.WirelessReceiverBlockNotFoundException.MainDoc" >}}
[Wireless Receiver Block]: {{< url path="Cortex.Reference.Blocks.Wireless.WirelessReceiver.WirelessReceiver.MainDoc" >}}
