---
title: "Int32"
linkTitle: "Int32"
description: "Used to represent a whole number from `-2,147,483,648` through `2,147,483,647`."
---

# {{< param title >}}

<p class="namespace">(System.Int32)</p>

## Summary

The `Int32` data type is used to represent a whole number from `-2,147,483,648` through `2,147,483,647`.

| | |
|-|-|
| **Category:**          | Numbers                                                       |
| **Name:**              | `Int32`                                                       |
| **Full Name:**         | `System.Int32`                                   |
| **Alias:**             | `int`                                            |
| **Description:**       | A whole number from `-2,147,483,648` through `2,147,483,647`  |
| **Size:**              | `4` bytes                                        |
| **Default Value:**     | `0`                                              |
| **Can be used as:**    | `Int32`, `Int64`, `Object`, `Dynamic`                         |
| **Can be cast to:**    | `Int16`, as long as value is from `-32768` through `32767` (e.g. `(Int16)32767` or `(System.Int16)32767` or `(short)32767`)  |

## Create an Int32

Please see [Instantiating an Int32 Value][] for full information.

https://docs.microsoft.com/en-us/dotnet/api/system.int32?view=net-6.0#instantiating-an-int32-value

| Method | Example | Notes |
|-|-|-|
| Declare an `Int32` literal   | `0`                                    | Zero |
|                              | `1`                                    | Positive |
|                              | `-1`                                   | Negative |
| Use an `Int32` expression    | `1 + 1`                                | Add |
|                              | `1 - 1`                                | Subtract |
|                              | `1 * 1`                                | Multiply |
|                              | `1 / 1`                                | Divide |
|                              | `Int32.MaxValue`                       | Maximum value of an `Int32` (e.g. `2,147,483,647`) |
|                              | `Int32.MinValue`                       | Minimum value of an `Int32` (e.g. `-2,147,483,648`) |
|                              | `Int32.Parse("1")`                     | Attempts to parse text and convert it to an `Int32` value. If parse fails this throws an exception TODO: link to exception type |
|                              | `Convert.ToInt32("1")`                 |Attempts to convert text to an `Int32` value. If conversion fails this throws an exception TODO: link to exception type |

TODO: Int32.Parse overload
TODO: Convert.ToInt32 overloads

## Convert Int32 to Text

Please see [Instantiating an Int32 Value][] for full information.

https://docs.microsoft.com/en-us/dotnet/api/system.int32?view=net-6.0#instantiating-an-int32-value

| Method | Example |
|-|-|
| Use `ToString`                           | `1.ToString()`                         |
|                                          | `($)Int32Variable).ToString()`         |
| Use `Convert.ToString`                   | `Convert.ToString(1)`                  |
|                                          | `Convert.ToString(($)Int32Variable)`   |
| Use `Convert Object To Text` block       | See [Convert Object To Text][]         |
| Use `Convert Object To Json` block       | See [Convert Object To Json][]         |

## Known limitations

None

## See also

TODO:

* [Int16][]
* [Int64][]
* [Double][]