---
title: "OracleMappingType"
linkTitle: "OracleMappingType"
description: "Used to represent the type of the parameter."
weight: 1
---

# {{% param title %}}

<p class="namespace">(Dapper.Oracle.OracleMappingType)</p>

## Summary

The `OracleMappingType` data type is used to represent the type of the parameter.

`OracleMappingType` is an [enum][Working with Enums] data type, which means it has a defined set of values, where each value has an associated [String][] name and [Int32][] value.

|                     |                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Category:**       | Data                                                                                                                               |
| **Name:**           | `OracleMappingType`                                                                                                                   |
| **Full Name:**      | `Dapper.Oracle.OracleMappingType`                                                                                                        |
| **Alias:**          | N/A                                                                                                                                |
| **Description:**    | Used to represent the status code returned by an HTTP request.                                                                     |
| **Default Value:**  | `(OracleMappingType)0`                                                                                                                |
| **Can be used as:** | `OracleMappingType`, `Object`, `dynamic`                                                                                              |
| **Can be cast to:** | `Int16` (e.g. `(Int16)OracleMappingType.Clob` or `(System.Int16)OracleMappingType.Clob` or `(short)OracleMappingType.Clob`)     |
|                     | `Int32` (e.g. `(Int32)OracleMappingType.Clob` or `(System.Int32)OracleMappingType.Clob` or `(int)OracleMappingType.Clob`)       |
|                     | `Int64` (e.g. `(Int64)OracleMappingType.Clob` or `(System.Int64)OracleMappingType.Clob` or `(long)OracleMappingType.Clob`)      |
|                     | `Single` (e.g. `(Single)OracleMappingType.Clob` or `(System.Single)OracleMappingType.Clob` or `(float)OracleMappingType.Clob`)  |
|                     | `Double` (e.g. `(Double)OracleMappingType.Clob` or `(System.Double)OracleMappingType.Clob` or `(double)OracleMappingType.Clob`) |

## Values

### BFile

| | |
|-|-|
| **Name:**    | BFile                                           |
| **Value:**   | [Int32][] with value `101`                       |
| **Notes:**   | Empty entries and trailing or leading whitespaces (at the start or end of text) are not removed.                 |

### Blob

| | |
|-|-|
| **Name:**    | Blob                                         |
| **Value:**   | [Int32][] with value `102`                                   |
| **Notes:**   | Empty entries are removed but trailing or leading whitespaces (at the start or end of text) are not removed.                                 |

### Byte

| | |
|-|-|
| **Name:**    | Byte                                                                                |
| **Value:**   | [Int32][] with value `103`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Char

| | |
|-|-|
| **Name:**    | Char                                                                                |
| **Value:**   | [Int32][] with value `104`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Clob

| | |
|-|-|
| **Name:**    | Clob                                                                                |
| **Value:**   | [Int32][] with value `105`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Date

| | |
|-|-|
| **Name:**    | Date                                                                                |
| **Value:**   | [Int32][] with value `106`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Decimal

| | |
|-|-|
| **Name:**    | Decimal                                                                                |
| **Value:**   | [Int32][] with value `107`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Double

| | |
|-|-|
| **Name:**    | Double                                                                                |
| **Value:**   | [Int32][] with value `108`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Long

| | |
|-|-|
| **Name:**    | Long                                                                                |
| **Value:**   | [Int32][] with value `109`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### LongRaw

| | |
|-|-|
| **Name:**    | LongRaw                                                                                |
| **Value:**   | [Int32][] with value `110`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Int16

| | |
|-|-|
| **Name:**    | Int16                                                                                |
| **Value:**   | [Int32][] with value `111`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Int32

| | |
|-|-|
| **Name:**    | Int32                                                                                |
| **Value:**   | [Int32][] with value `112`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Int64

| | |
|-|-|
| **Name:**    | Int64                                                                                |
| **Value:**   | [Int32][] with value `113`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### IntervalDS

| | |
|-|-|
| **Name:**    | IntervalDS                                                                                |
| **Value:**   | [Int32][] with value `114`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### IntervalYM

| | |
|-|-|
| **Name:**    | IntervalYM                                                                                |
| **Value:**   | [Int32][] with value `115`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### NClob

| | |
|-|-|
| **Name:**    | NClob                                                                                |
| **Value:**   | [Int32][] with value `116`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### NChar

| | |
|-|-|
| **Name:**    | NChar                                                                                |
| **Value:**   | [Int32][] with value `117`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### NVarchar2

| | |
|-|-|
| **Name:**    | NVarchar2                                                                                |
| **Value:**   | [Int32][] with value `119`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Raw

| | |
|-|-|
| **Name:**    | Raw                                                                                |
| **Value:**   | [Int32][] with value `120`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### RefCursor

| | |
|-|-|
| **Name:**    | RefCursor                                                                                |
| **Value:**   | [Int32][] with value `121`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Single

| | |
|-|-|
| **Name:**    | Single                                                                                |
| **Value:**   | [Int32][] with value `122`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### TimeStamp

| | |
|-|-|
| **Name:**    | TimeStamp                                                                                |
| **Value:**   | [Int32][] with value `123`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### TimeStampLTZ

| | |
|-|-|
| **Name:**    | TimeStampLTZ                                                                                |
| **Value:**   | [Int32][] with value `124`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### TimeStampTZ

| | |
|-|-|
| **Name:**    | TimeStampLZ                                                                                |
| **Value:**   | [Int32][] with value `125`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### Varchar2

| | |
|-|-|
| **Name:**    | Varchar2                                                                                |
| **Value:**   | [Int32][] with value `126`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### XmlType

| | |
|-|-|
| **Name:**    | XmlType                                                                                |
| **Value:**   | [Int32][] with value `127`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### BinaryDouble

| | |
|-|-|
| **Name:**    | BinaryDouble                                                                                |
| **Value:**   | [Int32][] with value `132`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

### BinaryFloat

| | |
|-|-|
| **Name:**    | BinaryFloat                                                                                |
| **Value:**   | [Int32][] with value `133`                                                                   |
| **Notes:**   | Empty entries are not removed but trailing or leading whitespaces (at the start or end of text) are removed.  |

## Remarks

### Create OracleMappingType

The following table shows some of the ways that `OracleMappingType` can be created using the expression editor.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Declare a `OracleMappingType` literal | `BFile` | `OracleMappingType.BFile` | Literal | Empty entries are not removed. |
| | `Blob` | `OracleMappingType.Blob` | Literal | Empty entries are removed. |
| | `Byte` | `OracleMappingType.Byte` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Char` | `OracleMappingType.Char` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Clob` | `OracleMappingType.Clob` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Date` | `OracleMappingType.Date` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Decimal` | `OracleMappingType.Decimal` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Double` | `OracleMappingType.Double` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Long` | `OracleMappingType.Long` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `LongRaw` | `OracleMappingType.LongRaw` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Int16` | `OracleMappingType.Int16` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Int32` | `OracleMappingType.Int32` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Int64` | `OracleMappingType.Int64` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `IntervalDS` | `OracleMappingType.IntervalDS` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `IntervalYM` | `OracleMappingType.IntervalYM` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `NClob` | `OracleMappingType.NClob` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `NChar` | `OracleMappingType.NChar` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `NVarchar2` | `OracleMappingType.NVarchar2` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Raw` | `OracleMappingType.Raw` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `RefCursor` | `OracleMappingType.RefCursor` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Single` | `OracleMappingType.Single` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `TimeStamp` | `OracleMappingType.TimeStamp` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `TimeStampLTZ` | `OracleMappingType.TimeStampLTZ` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `TimeStampLZ` | `OracleMappingType.TimeStampLZ` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `Varchar2` | `OracleMappingType.Varchar2` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `XmlType` | `OracleMappingType.XmlType` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `BinaryDouble` | `OracleMappingType.BinaryDouble` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `BinaryFloat` | `OracleMappingType.BinaryFloat` | Literal | Empty entries are not removed but trailing and leading whitespaces are removed. |
| Use a `OracleMappingType` expression | `OracleMappingType.BFile` | `OracleMappingType.BFile`| Expression | Empty entries are not removed.|
| | `OracleMappingType.Blob` | `OracleMappingType.Blob`| Expression | Empty entries are removed. |
| | `OracleMappingType.Byte` | `OracleMappingType.Byte`| Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Char` | `OracleMappingType.Char`| Expression | Empty entries are removed and trailing and leading whitespaces are removed. |
| | `OracleMappingType.Clob` | `OracleMappingType.Clob` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Date` | `OracleMappingType.Date` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Decimal` | `OracleMappingType.Decimal` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Double` | `OracleMappingType.Double` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Long` | `OracleMappingType.Long` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.LongRaw` | `OracleMappingType.LongRaw` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Int16` | `OracleMappingType.Int16` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Int32` | `OracleMappingType.Int32` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Int64` | `OracleMappingType.Int64` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.IntervalDS` | `OracleMappingType.IntervalDS` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.IntervalYM` | `OracleMappingType.IntervalYM` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.NClob` | `OracleMappingType.NClob` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.NChar` | `OracleMappingType.NChar` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.NVarchar2` | `OracleMappingType.NVarchar2` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Raw` | `OracleMappingType.Raw` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.RefCursor` | `OracleMappingType.RefCursor` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Single` | `OracleMappingType.Single` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.TimeStamp` | `OracleMappingType.TimeStamp` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.TimeStampLTZ` | `OracleMappingType.TimeStampLTZ` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.TimeStampLZ` | `OracleMappingType.TimeStampLZ` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.Varchar2` | `OracleMappingType.Varchar2` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.XmlType` | `OracleMappingType.XmlType` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.BinaryDouble` | `OracleMappingType.BinaryDouble` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `OracleMappingType.BinaryFloat` | `OracleMappingType.BinaryFloat` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| Use [Explicit Casting][] | `(OracleMappingType)101` | `OracleMappingType.BFile`| Expression | Empty entries are not removed. |
| | `(OracleMappingType)102` | `OracleMappingType.Blob`| Expression | Empty entries are removed. |
| | `(OracleMappingType)103` | `OracleMappingType.Byte`| Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)104` | `OracleMappingType.Char`| Expression | Empty entries are removed and trailing and leading whitespaces are removed. |
| | `(OracleMappingType)105` | `OracleMappingType.Clob` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)106` | `OracleMappingType.Date` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)107` | `OracleMappingType.Decimal` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)108` | `OracleMappingType.Double` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)109` | `OracleMappingType.Long` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)110` | `OracleMappingType.LongRaw` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)111` | `OracleMappingType.Int16` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)112` | `OracleMappingType.Int32` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)113` | `OracleMappingType.Int64` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)114` | `OracleMappingType.IntervalDS` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)115` | `OracleMappingType.IntervalYM` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)116` | `OracleMappingType.NClob` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)117` | `OracleMappingType.NChar` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)119` | `OracleMappingType.NVarchar2` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)120` | `OracleMappingType.Raw` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)121` | `OracleMappingType.RefCursor` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)122` | `OracleMappingType.Single` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)123` | `OracleMappingType.TimeStamp` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)124` | `OracleMappingType.TimeStampLTZ` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)125` | `OracleMappingType.TimeStampLZ` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)126` | `OracleMappingType.Varchar2` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)127` | `OracleMappingType.XmlType` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)132` | `OracleMappingType.BinaryDouble` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| | `(OracleMappingType)133` | `OracleMappingType.BinaryFloat` | Expression | Empty entries are not removed but trailing and leading whitespaces are removed. |
| Use `Enum.Parse` | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "BFile")` | `OracleMappingType.BFile`| Expression | Parses `"BFile"` and converts it to `OracleMappingType.BFile`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Blob")` | `OracleMappingType.Blob`| Expression | Parses `"Blob"` and converts it to `OracleMappingType.Blob`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Byte")` | `OracleMappingType.Byte`| Expression | Parses `"Byte"` and converts it to `OracleMappingType.Byte`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Char")` | `OracleMappingType.Char`| Expression | Parses `"Char"` and converts it to `OracleMappingType.Char`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Clob")` | `OracleMappingType.Clob`| Expression | Parses `"Clob"` and converts it to `OracleMappingType.Clob`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Date")` | `OracleMappingType.Date`| Expression | Parses `"Date"` and converts it to `OracleMappingType.Date`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Decimal")` | `OracleMappingType.Decimal`| Expression | Parses `"Decimal"` and converts it to `OracleMappingType.Decimal`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Double")` | `OracleMappingType.Double`| Expression | Parses `"Double"` and converts it to `OracleMappingType.Double`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Long")` | `OracleMappingType.Long`| Expression | Parses `"Long"` and converts it to `OracleMappingType.Long`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "LongRaw")` | `OracleMappingType.LongRaw`| Expression | Parses `"LongRaw"` and converts it to `OracleMappingType.LongRaw`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Int16")` | `OracleMappingType.Int16`| Expression | Parses `"Int16"` and converts it to `OracleMappingType.Int16`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Int32")` | `OracleMappingType.Int32`| Expression | Parses `"Int32"` and converts it to `OracleMappingType.Int32`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Int64")` | `OracleMappingType.Int64`| Expression | Parses `"Int64"` and converts it to `OracleMappingType.Int64`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "IntervalDS")` | `OracleMappingType.IntervalDS`| Expression | Parses `"IntervalDS"` and converts it to `OracleMappingType.IntervalDS`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "IntervalYM")` | `OracleMappingType.IntervalYM`| Expression | Parses `"IntervalYM"` and converts it to `OracleMappingType.IntervalYM`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "NClob")` | `OracleMappingType.NClob`| Expression | Parses `"NClob"` and converts it to `OracleMappingType.NClob`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "NChar")` | `OracleMappingType.NChar`| Expression | Parses `"NChar"` and converts it to `OracleMappingType.NChar`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "NVarchar2")` | `OracleMappingType.NVarchar2`| Expression | Parses `"NVarchar2"` and converts it to `OracleMappingType.NVarchar2`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Raw")` | `OracleMappingType.Raw`| Expression | Parses `"Raw"` and converts it to `OracleMappingType.Raw`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "RefCursor")` | `OracleMappingType.RefCursor`| Expression | Parses `"RefCursor"` and converts it to `OracleMappingType.RefCursor`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Single")` | `OracleMappingType.Single`| Expression | Parses `"Single"` and converts it to `OracleMappingType.Single`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "TimeStamp")` | `OracleMappingType.TimeStamp`| Expression | Parses `"TimeStamp"` and converts it to `OracleMappingType.TimeStamp`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "TimeStampLTZ")` | `OracleMappingType.TimeStampLTZ`| Expression | Parses `"TimeStampLTZ"` and converts it to `OracleMappingType.TimeStampLTZ`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "TimeStampLZ")` | `OracleMappingType.TimeStampLZ`| Expression | Parses `"TimeStampLZ"` and converts it to `OracleMappingType.TimeStampLZ`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "Varchar2")` | `OracleMappingType.Varchar2`| Expression | Parses `"Varchar2"` and converts it to `OracleMappingType.Varchar2`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "XmlType")` | `OracleMappingType.XmlType`| Expression | Parses `"XmlType"` and converts it to `OracleMappingType.XmlType`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "BinaryDouble")` | `OracleMappingType.BinaryDouble`| Expression | Parses `"BinaryDouble"` and converts it to `OracleMappingType.BinaryDouble`. See [Enum.Parse][] |
| | `(OracleMappingType)Enum.Parse(typeof(OracleMappingType), "BinaryFloat")` | `OracleMappingType.BinaryFloat`| Expression | Parses `"BinaryFloat"` and converts it to `OracleMappingType.BinaryFloat`. See [Enum.Parse][] |
| Use `Enum.ToObject` | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 101)` | `OracleMappingType.BFile`| Expression | Converts `101` to `OracleMappingType.BFile` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 102)` | `OracleMappingType.Blob`| Expression | Converts `102` to `OracleMappingType.Blob` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 103)` | `OracleMappingType.Byte`| Expression | Converts `103` to `OracleMappingType.Byte` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 104)` | `OracleMappingType.Char`| Expression | Converts `104` to `OracleMappingType.Char` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 105)` | `OracleMappingType.Clob` | Expression | Converts `105` to `OracleMappingType.Clob` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 106)` | `OracleMappingType.Date` | Expression | Converts `106` to `OracleMappingType.Date` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 107)` | `OracleMappingType.Decimal` | Expression | Converts `107` to `OracleMappingType.Decimal` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 108)` | `OracleMappingType.Double` | Expression | Converts `108` to `OracleMappingType.Double` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 109)` | `OracleMappingType.Long` | Expression | Converts `109` to `OracleMappingType.Long` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 110)` | `OracleMappingType.LongRaw` | Expression | Converts `110` to `OracleMappingType.LongRaw` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 111)` | `OracleMappingType.Int16` | Expression | Converts `111` to `OracleMappingType.Int16` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 112)` | `OracleMappingType.Int32` | Expression | Converts `112` to `OracleMappingType.Int32` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 113)` | `OracleMappingType.Int64` | Expression | Converts `113` to `OracleMappingType.Int64` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 114)` | `OracleMappingType.IntervalDS` | Expression | Converts `114` to `OracleMappingType.IntervalDS` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 115)` | `OracleMappingType.IntervalYM` | Expression | Converts `115` to `OracleMappingType.IntervalYM` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 116)` | `OracleMappingType.NClob` | Expression | Converts `116` to `OracleMappingType.NClob` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 117)` | `OracleMappingType.NChar` | Expression | Converts `117` to `OracleMappingType.NChar` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 119)` | `OracleMappingType.NVarchar2` | Expression | Converts `119` to `OracleMappingType.NVarchar2` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 120)` | `OracleMappingType.Raw` | Expression | Converts `120` to `OracleMappingType.Raw` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 121)` | `OracleMappingType.RefCursor` | Expression | Converts `121` to `OracleMappingType.RefCursor` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 122)` | `OracleMappingType.Single` | Expression | Converts `122` to `OracleMappingType.Single` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 123)` | `OracleMappingType.TimeStamp` | Expression | Converts `123` to `OracleMappingType.TimeStamp` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 124)` | `OracleMappingType.TimeStampLTZ` | Expression | Converts `124` to `OracleMappingType.TimeStampLTZ` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 125)` | `OracleMappingType.TimeStampLZ` | Expression | Converts `125` to `OracleMappingType.TimeStampLZ` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 126)` | `OracleMappingType.Varchar2` | Expression | Converts `126` to `OracleMappingType.Varchar2` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 127)` | `OracleMappingType.XmlType` | Expression | Converts `127` to `OracleMappingType.XmlType` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 132)` | `OracleMappingType.BinaryDouble` | Expression | Converts `132` to `OracleMappingType.BinaryDouble` value. See [Enum.ToObject][] |
| | `(OracleMappingType)Enum.ToObject(typeof(OracleMappingType), 133)` | `OracleMappingType.BinaryFloat` | Expression | Converts `133` to `OracleMappingType.BinaryFloat` value. See [Enum.ToObject][] |

Please see [Instantiating an enumeration type][] for further information.

### Convert OracleMappingType to Text

The following table shows some of the ways that a `OracleMappingType` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `ToString` | `OracleMappingType.BFile.ToString()` | `"BFile"` | Expression | Converts `OracleMappingType.BFile` to `"BFile"`. See [Enum.ToString][] |
| | `OracleMappingType.Byte.ToString()` | `"Blob"` | Expression | Converts `OracleMappingType.Blob` to `"Blob"`. See [Enum.ToString][] |
| | `OracleMappingType.Byte.ToString()` | `"Byte"` | Expression | Converts `OracleMappingType.Byte` to `"Byte"`. See [Enum.ToString][] |
| | `OracleMappingType.Char.ToString()` | `"Char"` | Expression | Converts `OracleMappingType.Char` to `"Char"`. See [Enum.ToString][] |
| | `OracleMappingType.Clob.ToString()` | `"Clob"` | Expression | Converts `OracleMappingType.Clob` to `"Clob"`. See [Enum.ToString][] |
| | `OracleMappingType.Date.ToString()` | `"Date"` | Expression | Converts `OracleMappingType.Date` to `"Date"`. See [Enum.ToString][] |
| | `OracleMappingType.Decimal.ToString()` | `"Decimal"` | Expression | Converts `OracleMappingType.Decimal` to `"Decimal"`. See [Enum.ToString][] |
| | `OracleMappingType.Double.ToString()` | `"Double"` | Expression | Converts `OracleMappingType.Double` to `"Double"`. See [Enum.ToString][] |
| | `OracleMappingType.Long.ToString()` | `"Long"` | Expression | Converts `OracleMappingType.Long` to `"Long"`. See [Enum.ToString][] |
| | `OracleMappingType.LongRaw.ToString()` | `"LongRaw"` | Expression | Converts `OracleMappingType.LongRaw` to `"LongRaw"`. See [Enum.ToString][] |
| | `OracleMappingType.Int16.ToString()` | `"Int16"` | Expression | Converts `OracleMappingType.Int16` to `"Int16"`. See [Enum.ToString][] |
| | `OracleMappingType.Int32.ToString()` | `"Int32"` | Expression | Converts `OracleMappingType.Int32` to `"Int32"`. See [Enum.ToString][] |
| | `OracleMappingType.Int64.ToString()` | `"Int64"` | Expression | Converts `OracleMappingType.Int64` to `"Int64"`. See [Enum.ToString][] |
| | `OracleMappingType.IntervalDS.ToString()` | `"IntervalDS"` | Expression | Converts `OracleMappingType.IntervalDS` to `"IntervalDS"`. See [Enum.ToString][] |
| | `OracleMappingType.IntervalYM.ToString()` | `"IntervalYM"` | Expression | Converts `OracleMappingType.IntervalYM` to `"IntervalYM"`. See [Enum.ToString][] |
| | `OracleMappingType.NClob.ToString()` | `"NClob"` | Expression | Converts `OracleMappingType.NClob` to `"NClob"`. See [Enum.ToString][] |
| | `OracleMappingType.NChar.ToString()` | `"NChar"` | Expression | Converts `OracleMappingType.NChar` to `"NChar"`. See [Enum.ToString][] |
| | `OracleMappingType.NVarchar2.ToString()` | `"NVarchar2"` | Expression | Converts `OracleMappingType.NVarchar2` to `"NVarchar2"`. See [Enum.ToString][] |
| | `OracleMappingType.Raw.ToString()` | `"Raw"` | Expression | Converts `OracleMappingType.Raw` to `"Raw"`. See [Enum.ToString][] |
| | `OracleMappingType.RefCursor.ToString()` | `"RefCursor"` | Expression | Converts `OracleMappingType.RefCursor` to `"RefCursor"`. See [Enum.ToString][] |
| | `OracleMappingType.Single.ToString()` | `"Single"` | Expression | Converts `OracleMappingType.Single` to `"Single"`. See [Enum.ToString][] |
| | `OracleMappingType.TimeStamp.ToString()` | `"TimeStamp"` | Expression | Converts `OracleMappingType.TimeStamp` to `"TimeStamp"`. See [Enum.ToString][] |
| | `OracleMappingType.TimeStampLTZ.ToString()` | `"TimeStampLTZ"` | Expression | Converts `OracleMappingType.TimeStampLTZ` to `"TimeStampLTZ"`. See [Enum.ToString][] |
| | `OracleMappingType.TimeStampLZ.ToString()` | `"TimeStampLZ"` | Expression | Converts `OracleMappingType.TimeStampLZ` to `"TimeStampLZ"`. See [Enum.ToString][] |
| | `OracleMappingType.Varchar2.ToString()` | `"Varchar2"` | Expression | Converts `OracleMappingType.Varchar2` to `"Varchar2"`. See [Enum.ToString][] |
| | `OracleMappingType.XmlType.ToString()` | `"XmlType"` | Expression | Converts `OracleMappingType.XmlType` to `"XmlType"`. See [Enum.ToString][] |
| | `OracleMappingType.BinaryDouble.ToString()` | `"BinaryDouble"` | Expression | Converts `OracleMappingType.BinaryDouble` to `"BinaryDouble"`. See [Enum.ToString][] |
| | `OracleMappingType.BinaryFloat.ToString()` | `"BinaryFloat"` | Expression | Converts `OracleMappingType.BinaryFloat` to `"BinaryFloat"`. See [Enum.ToString][] |
| Use `Convert.ToString` | `Convert.ToString(OracleMappingType.BFile)` | `"BFile"` | Expression | Converts `OracleMappingType.BFile` to `"BFile"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Byte)` | `"Byte"` | Expression | Converts `OracleMappingType.Byte` to `"Byte"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Char)` | `"Char"` | Expression | Converts `OracleMappingType.Char` to `"Char"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Clob)` | `"Clob"` | Expression | Converts `OracleMappingType.Clob` to `"Clob"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Date)` | `"Date"` | Expression | Converts `OracleMappingType.Date` to `"Date"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Decimal)` | `"Decimal"` | Expression | Converts `OracleMappingType.Decimal` to `"Decimal"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Double)` | `"Double"` | Expression | Converts `OracleMappingType.Double` to `"Double"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Long)` | `"Long"` | Expression | Converts `OracleMappingType.Long` to `"Long"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.LongRaw)` | `"LongRaw"` | Expression | Converts `OracleMappingType.LongRaw` to `"LongRaw"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Int16)` | `"Int16"` | Expression | Converts `OracleMappingType.Int16` to `"Int16"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Int32)` | `"Int32"` | Expression | Converts `OracleMappingType.Int32` to `"Int32"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Int64)` | `"Int64"` | Expression | Converts `OracleMappingType.Int64` to `"Int64"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.IntervalDS)` | `"IntervalDS"` | Expression | Converts `OracleMappingType.IntervalDS` to `"IntervalDS"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.IntervalYM)` | `"IntervalYM"` | Expression | Converts `OracleMappingType.IntervalYM` to `"IntervalYM"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.NClob)` | `"NClob"` | Expression | Converts `OracleMappingType.NClob` to `"NClob"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.NChar)` | `"NChar"` | Expression | Converts `OracleMappingType.NChar` to `"NChar"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.NVarchar2)` | `"NVarchar2"` | Expression | Converts `OracleMappingType.NVarchar2` to `"NVarchar2"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Raw)` | `"Raw"` | Expression | Converts `OracleMappingType.Raw` to `"Raw"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.RefCursor)` | `"RefCursor"` | Expression | Converts `OracleMappingType.RefCursor` to `"RefCursor"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Single)` | `"Single"` | Expression | Converts `OracleMappingType.Single` to `"Single"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.TimeStamp)` | `"TimeStamp"` | Expression | Converts `OracleMappingType.TimeStamp` to `"TimeStamp"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.TimeStampLTZ)` | `"TimeStampLTZ"` | Expression | Converts `OracleMappingType.TimeStampLTZ` to `"TimeStampLTZ"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.TimeStampLZ)` | `"TimeStampLZ"` | Expression | Converts `OracleMappingType.TimeStampLZ` to `"TimeStampLZ"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.Varchar2)` | `"Varchar2"` | Expression | Converts `OracleMappingType.Varchar2` to `"Varchar2"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.XmlType)` | `"XmlType"` | Expression | Converts `OracleMappingType.XmlType` to `"XmlType"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.BinaryDouble)` | `"BinaryDouble"` | Expression | Converts `OracleMappingType.BinaryDouble` to `"BinaryDouble"`. See [Convert.ToString][] |
| | `Convert.ToString(OracleMappingType.BinaryFloat)` | `"BinaryFloat"` | Expression | Converts `OracleMappingType.BinaryFloat` to `"BinaryFloat"`. See [Convert.ToString][] |
| Use `Convert Object To Text` block | where `Object` property has a value of `OracleMappingType.BFile` | `"BFile"` | N/A  | Converts `OracleMappingType.BFile` to `"BFile"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Byte` | `"Byte"` | N/A  | Converts `OracleMappingType.Byte` to `"Byte"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Char` | `"Char"` | N/A  | Converts `OracleMappingType.Char` to `"Char"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Clob` | `"Clob"` | N/A  | Converts `OracleMappingType.Clob` to `"Clob"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Char` | `"Char"` | N/A  | Converts `OracleMappingType.Char` to `"Char"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Date` | `"Date"` | N/A  | Converts `OracleMappingType.Date` to `"Date"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Decimal` | `"Decimal"` | N/A  | Converts `OracleMappingType.Decimal` to `"Decimal"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Double` | `"Double"` | N/A  | Converts `OracleMappingType.Double` to `"Double"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Long` | `"Long"` | N/A  | Converts `OracleMappingType.Long` to `"Long"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.LongRaw` | `"LongRaw"` | N/A  | Converts `OracleMappingType.LongRaw` to `"LongRaw"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Int16` | `"Int16"` | N/A  | Converts `OracleMappingType.Int16` to `"Int16"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Int32` | `"Int32"` | N/A  | Converts `OracleMappingType.Int32` to `"Int32"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Int64` | `"Int64"` | N/A  | Converts `OracleMappingType.Int64` to `"Int64"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.IntervalDS` | `"IntervalDS"` | N/A  | Converts `OracleMappingType.IntervalDS` to `"IntervalDS"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.IntervalYM` | `"IntervalYM"` | N/A  | Converts `OracleMappingType.IntervalYM` to `"IntervalYM"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.NClob` | `"NClob"` | N/A  | Converts `OracleMappingType.NClob` to `"NClob"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.NChar` | `"NChar"` | N/A  | Converts `OracleMappingType.NChar` to `"NChar"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.NVarchar2` | `"NVarchar2"` | N/A  | Converts `OracleMappingType.NVarchar2` to `"NVarchar2"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Raw` | `"Raw"` | N/A  | Converts `OracleMappingType.Raw` to `"Raw"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.RefCursor` | `"RefCursor"` | N/A  | Converts `OracleMappingType.RefCursor` to `"RefCursor"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Single` | `"Single"` | N/A  | Converts `OracleMappingType.Single` to `"Single"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.TimeStamp` | `"TimeStamp"` | N/A  | Converts `OracleMappingType.TimeStamp` to `"TimeStamp"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.TimeStampLTZ` | `"TimeStampLTZ"` | N/A  | Converts `OracleMappingType.TimeStampLTZ` to `"TimeStampLTZ"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.TimeStampLZ` | `"TimeStampLZ"` | N/A  | Converts `OracleMappingType.TimeStampLZ` to `"TimeStampLZ"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.Varchar2` | `"Varchar2"` | N/A  | Converts `OracleMappingType.Varchar2` to `"Varchar2"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.XmlType` | `"XmlType"` | N/A  | Converts `OracleMappingType.XmlType` to `"XmlType"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.BinaryDouble` | `"BinaryDouble"` | N/A  | Converts `OracleMappingType.BinaryDouble` to `"BinaryDouble"`. See [Convert Object To Text][] |
| | where `Object` property has a value of `OracleMappingType.BinaryFloat` | `"BinaryFloat"` | N/A  | Converts `OracleMappingType.BinaryFloat` to `"BinaryFloat"`. See [Convert Object To Text][] |
| Use `Convert Object To Json` block | where `Object` property has a value of `OracleMappingType.BFile` | `"101"` | N/A  | Converts `OracleMappingType.BFile` to `"101"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `OracleMappingType.Blob` | `"102"` | N/A  | Converts `OracleMappingType.Blob` to `"102"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `OracleMappingType.Byte` | `"103"` | N/A  | Converts `OracleMappingType.Byte` to `"103"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `OracleMappingType.Char` | `"104"` | N/A  | Converts `OracleMappingType.Char` to `"104"`. See [Convert Object To Json][] |
| | where `Object` property has a value of `OracleMappingType.Clob` | `"104"` | N/A  | Converts `OracleMappingType.Clob` to `"105"`. See [Convert Object To Json][] |

Please see [Formatting enumeration values][] for further information.

### Convert OracleMappingType to a Number

The following table shows some of the ways that a `OracleMappingType` can be converted to a number.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use [Explicit Casting][]              | `(Int32)OracleMappingType.None`   | `0` | Expression | [Casts][Explicit Casting] `OracleMappingType.None` to `0` |
|                                       | `(Int32)OracleMappingType.RemoveEmptyEntries`   | `1` | Expression | [Casts][Explicit Casting] `OracleMappingType.RemoveEmptyEntries` to `1` |
|                                       | `(Int32)OracleMappingType.TrimEntries`   | `2` | Expression | [Casts][Explicit Casting] `OracleMappingType.TrimEntries` to `2` |
|                                       | `(Int32)(OracleMappingType.RemoveEmptyEntries \| OracleMappingType.TrimEntries)`   | `3` | Expression | [Casts][Explicit Casting] `OracleMappingType.RemoveEmptyEntries \| OracleMappingType.TrimEntries` to `3` |
| Use `Convert.ToInt32`                 | `Convert.ToInt32(OracleMappingType.None)`   | `0` | Expression | Converts `OracleMappingType.None` to `0`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(OracleMappingType.RemoveEmptyEntries)`   | `1` | Expression | Converts `OracleMappingType.RemoveEmptyEntries` to `1`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(OracleMappingType.TrimEntries)`   | `2` | Expression | Converts `OracleMappingType.TrimEntries` to `2`. See [Convert.ToInt32][] |
|                                       | `Convert.ToInt32(OracleMappingType.RemoveEmptyEntries \| OracleMappingType.TrimEntries)`   | `3` | Expression | Converts `OracleMappingType.RemoveEmptyEntries \| OracleMappingType.TrimEntries` to `3`. See [Convert.ToInt32][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `OracleMappingType`.
- The Literal Editor is available for [Input][] properties where the data type is `OracleMappingType`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `OracleMappingType`.

### Known Limitations

None

## See Also

### Related Data Types

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

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}

[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
