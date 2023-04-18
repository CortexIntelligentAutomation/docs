---
title: "TelnetServerErrorCode"
linkTitle: "TelnetServerErrorCode"
description: "Used to represent an error code explaining the reason an `TelnetServerException` occurred."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Telnet.TelnetServerErrorCode)</p>

## Summary

The `TelnetServerErrorCode` data type is used to represent an error code explaining the reason an [TelnetServerException][] occurred. For more information on the exception itself, see [TelnetServerException][].

`TelnetServerErrorCode` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

| | |
|-|-|
| **Category:**          | Telnet                                                  |
| **Name:**              | `TelnetServerErrorCode`                                |
| **Full Name:**         | `Cortex.DataTypes.Telnet.TelnetServerErrorCode`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Error code explaining the reason an [TelnetServerException][] occurred. |
| **Size:**              | `4` bytes                                              |
| **Default Value:**     | `(TelnetServerErrorCode)0`                             |
| **Can be used as:**    | `TelnetServerErrorCode`, `Object`, `dynamic`           |
| **Can be cast to:**    | `Int16` (e.g. `(Int16)TelnetServerErrorCode.HostDisconnect` or `(System.Int16)TelnetServerErrorCode.HostDisconnect` or `(short)TelnetServerErrorCode.HostDisconnect`)  |
|                        | `Int32` (e.g. `(Int32)TelnetServerErrorCode.HostDisconnect` or `(System.Int32)TelnetServerErrorCode.HostDisconnect` or `(int)TelnetServerErrorCode.HostDisconnect`)  |
|                        | `Int64` (e.g. `(Int64)TelnetServerErrorCode.HostDisconnect` or `(System.Int64)TelnetServerErrorCode.HostDisconnect` or `(long)TelnetServerErrorCode.HostDisconnect`)  |
|                        | `Single` (e.g. `(Single)TelnetServerErrorCode.HostDisconnect` or `(System.Single)TelnetServerErrorCode.HostDisconnect` or `(float)TelnetServerErrorCode.HostDisconnect`)  |
|                        | `Double` (e.g. `(Double)TelnetServerErrorCode.HostDisconnect` or `(System.Double)TelnetServerErrorCode.HostDisconnect` or `(double)TelnetServerErrorCode.HostDisconnect`)  |

## Values

### HostDisconnect

| | |
|-|-|
| **Name:**    | HostDisconnect                                     |
| **Value:**   | [Int32][] with value `100`                      |
| **Notes:**   | Used when an [TelnetServerException][] occurred due to the [Host][] provided has closed the session without using [CloseSession]|


[Host]: {{< url path="Cortex.Reference.DataTypes.Telnet.TelnetSessionDetails.Host" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[TelnetServerException]: {{< url path="Cortex.Reference.Exceptions.Telnet.TelnetServerException" >}}
[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}