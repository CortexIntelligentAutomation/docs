---
title: "TelnetServerErrorCode"
linkTitle: "TelnetServerErrorCode"
description: "Used to represent an error code explaining the reason an `TelnetServerException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Email.TelnetServerErrorCode)</p>

## Summary

The `TelnetServerErrorCode` data type is used to represent an error code explaining the reason an [TelnetServerException][] occurred. For more information on the exception itself, see [TelnetServerException][].

`TelnetServerErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Email                                                  |
| **Name:**              | `TelnetServerErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Email.TelnetServerErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason an [TelnetServerException][] occurred. |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `(TelnetServerErrorCode)0`                             |
| **Can be used as:**    | `TelnetServerErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)TelnetServerErrorCode.InvalidPort` or `(System.Int16)TelnetServerErrorCode.InvalidPort` or `(short)TelnetServerErrorCode.InvalidPort`)  |
|                        | `Int32` (e.g. `(Int32)TelnetServerErrorCode.InvalidPort` or `(System.Int32)TelnetServerErrorCode.InvalidPort` or `(int)TelnetServerErrorCode.InvalidPort`)  |
|                        | `Int64` (e.g. `(Int64)TelnetServerErrorCode.InvalidPort` or `(System.Int64)TelnetServerErrorCode.InvalidPort` or `(long)TelnetServerErrorCode.InvalidPort`)  |
|                        | `Single` (e.g. `(Single)TelnetServerErrorCode.InvalidPort` or `(System.Single)TelnetServerErrorCode.InvalidPort` or `(float)TelnetServerErrorCode.InvalidPort`)  |
|                        | `Double` (e.g. `(Double)TelnetServerErrorCode.InvalidPort` or `(System.Double)TelnetServerErrorCode.InvalidPort` or `(double)TelnetServerErrorCode.InvalidPort`)  |