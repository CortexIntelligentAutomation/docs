---
title: "Literals, Expressions and Variables"
linkTitle: "Literals, Expressions and Variables"
description: "Using literal values, expressions, and references to variables in properties."
weight: 20
---

# {{< param title >}}

## Summary

An [input property][TODO] that uses an [expression editor][TODO] is the most flexible and can accept [literal values][Literals], [expressions][Expressions], and references to [variables][Variables].

## Literals

A literal is an explicit value that is not calculated during the execution of the flow. A literal can be of any [data type][Data-Types].

### String literal

[String][String] literals are surrounded by double quotes. For example:

```csharp
"Example String"
```

The example above becomes:

```text
Example String
```

Double quotes that form part of the [string][String], along with the back-slash character and any unicode character codes or hexadecimal character codes, must be escaped by a back-slash character. For example:

```csharp
"He said \"Come here\x0021\""
```

The example above becomes:

```text
He said "Come here!"
```

For verbatim [string][String] literals, double quotes that form part of the [string][String] literal must be duplicated to give a single double quote character. For example:

```csharp
@"He said ""Come here!"""
```

The example above becomes:

```text
He said "Come here!"
```

For interpolated [strings][String], [variables][Variables] or [expressions][Expressions] are surrounded by single curly braces. For example:

```csharp
$"He said \"Come here {($)NameVar}!\""
```

For further information on interpolated strings using  [variables][Variables] or [expressions][Expressions] see [String Expressions][String-Expressions]

In the case of interpolated verbatim [sting][String] literals, double curly braces are not interpreted literally; they produce a single curly brace character. For example:

```csharp
$@"This is a single square brace ""["", and this is a single curly brace ""{{"""
```

The example above becomes:

```text
This is a single square brace "[", and this is a single curly brace "{"
```

For further information, see [String Literals][String-Literals]

### Char literal

Char literals are single characters; they are surrounded by single quotes. For example:

```csharp
'A'
'\u0041'
```

The example above becomes:

```text
'A'
'A'
```

For further information, [Char Literals][Char-Literals]

### Integer literal

```csharp
1234
```

By default, Integer literals are assumed to be of type [Int32][Int32], if the literal value can be accommodated in an [Int32][Int32]. If the Integer literal is larger than [Int32.MaxValue][TODO], then it will automatically be taken as type [Int64][Int64]. 

If it is necessary to create an integer of type [Int64][Int64] with a value less than or equal to [Int32.MaxValue][TODO], then the numeric literal should be suffixed by the character `L`. For example:

```csharp
1234L
```

For further information, see [Integer Literals][Integer-Literals].

### Floating Point literal

By default, floating point literals are assumed to be of type [Double][Double]; the suffix `D` used to create the floating point literal to type [Double][Double] is optional.

```csharp
1234.456
1234.456D
```

To create a floating point literal to be of type [Single][Single], the suffix `F` should be used.

```csharp
1234.456F
```

For further information, see [Real Literals][Real-Literals].

### Boolean literal

A [Boolean][Boolean] literal represents a truth-value of either `true` or `false`.

```json
true or false
```

For further information, see [Boolean Literals][Boolean-Literals].

### Object literal

An [Object][Object] may consist of a number of elements, which in turn may contains values or sub-elements. Examples of objects include datatypes such as [Lists][Lists] (arrays), [Dictionaries][Dictionaries], [Structures][Structures] (a special type of [Dictionary][Dictionaries]), etc.

```json
{
  "StringProperty": "Example String",
  "IntegerProperty": 1,
  "BooleanProperty": true,
  "EmptyDictionaryProperty": {},
  "EmptyListProperty": [],
  "EmptyObjectProperty": {},
  "EmptyStructureProperty": {},
  "NullProperty": null
}
```

If the execution engine can determine that a literal object matches a known [data type][Data-Types], then the engine will convert the literal object to that data type, otherwise it will convert it to a [structure][Structures].

### Dictionary literal

[Dictionaries][Dictionaries] are objects that consist of a number of Key/Value pairs; the Value field may be a value or another [object][Object].

```json
{
  "Key 1" : "",
  "Key 2" : 1,
  "Key 3" : true,
  "Key 4" : {},
  "Key 5" : [],
  "Key 6" : null
}
```

[Dictionaries][Dictionaries] may be heterogenious, where the value elements may be of different [data types][Data-Types], or heterogenous, when the value elements are all of the same [data type][Data-Types].

The Keys of [dictionaries][Dictionaries] must be homogenious, i.e., of the same [data type][Data-Types], e.g., [string][String], [integer][Int32] etc. Keys must also be unique but not necessarily ordered.

### Structure literal

[Structures][Structures] are a special type of [Dictionary][Dictionaries] that always have [string][String] type keys.

```json
{
  "Name1" : "",
  "Name2" : 1,
  "Name3" : true,
  "Name4" : {},
  "Name5" : [],
  "Name6" : null
}
```

They differ from a [Dictionary][Dictionaries] in the syntax used for accessing the values, which uses the dot notation e.g., `myStructure.elementName`.

### List literal

A [List][Lists] is an object that consist of a number of ordered values; the value field may be another [object][Object].

```json
[
  "Example String",
  1,
  true,
  {},
  [],
  null
]
```

[Lists][Lists] may be heterogenious, where the values may be of different [data types][Data-Types], or heterogenous, when the values are all of the same [data type][Data-Types].

## Variables

A variable reference identifies a variable object that can contain a value. The value, to which the variable evaluates, may vary depending on the value assigned.

When the variable contains a [Structure][Structures], [Dictionary][Dictionaries] or a [List][Lists] [data type][Data-Types], it is possible to access individual values (elements) within that variable.

### A variable reference

```csharp
($)variableName
```

### A structure element

```csharp
($)variableName.ElementName
```

### A list element

Note: it is possible to index into a [list][Lists] using an [integer][Int32] variable or an [integer literal][Integer].

```csharp
($)variableName[5]
```

```csharp
($)variableName[($)indexVariable]
```

### A dictionary element

Note: it is possible to reference into a [dictionary][Dictionaries] using a variable or a literal of the correct type.

```csharp
($)variableName["StringKey"]  // String key
```

```csharp
($)variableName[123]    // Integer key
```

```csharp
($)variableName[($)stringVariable]
```

## Expressions

An expression is a value that will be evaluated when the [flow execution][What-Is-Execution] executes the [block][What-Is-Block]. Cortex expressions use C# syntax; anything that is a valid C# expression will be valid in a Cortex expression.

Full namespaces or keywords for built-in C# types must be used to reference a .NET [data type][Data-Types].

### Arithmetic expressions

If `($)intVar1` equals `6` and `($)intVar2` equals `3`

| Expression                | Result |
|---------------------------|--------|
| `($)intVar1 + ($)intVar2` | `9`    |
| `($)intVar1 / ($)intVar2` | `2`    |

### String expressions

Variables containing other simple [data types][Data-Types], e.g., numeric values or [Boolean][Boolean] values, will be coerced to [strings][String] when used in a [string][String] expression.

If `($)stringVar1` equals `"hello"`, `($)stringVar2` equals `"world"` and `($)integerVar` equals `1234`

| Expression                            | Result                       | Notes                              |
|---------------------------------------|------------------------------|------------------------------------|
| `($)stringVar1 + " " + ($)stringVar2` | `"hello world"`              |                                    |
| `($)stringVar1 + " " + ($)integerVar` | `"hello 1234"`               | ($)integerVar is coerced to a [string][String] |
| `$"{($)stringVar1} {($)stringVar2}"`  | `"hello world"`              | using .NET [string][String] interpolation    |
| `$"{($)stringVar1} {($)integerVar}"`  | `"hello 1234"`              | ($)integerVar is coerced to a [string][String] |
| `@"c:\programs\file.txt"`             | `"c:\\programs\\file.txt"`   | using .NET verbatim [string literal][String-Literal] |
| `$@"c:\programs\{($)stringVar1}.txt"` | `"c:\\programs\\hello.txt"`  | using .NET [string][String] interpolation and verbatim [string literal][String-Literal] |

### Boolean expressions

If `($)boolVar1` equals `false` and `($)boolVar2` equals `true`

| Expression                            | Result                       | Notes                              |
|---------------------------------------|------------------------------|------------------------------------|
| `($)boolVar1 & ($)boolVar2`           | `false`                      | logical `AND` evaluating both sides of expression |
| `($)boolVar1 && ($)boolVar2`          | `false`                       | logical `AND` only requring left hand part to be evaluated |
| `($)boolVar2 \| ($)boolVar1`           | `true`                      | logical `OR` evaluating both sides of expression |
| `($)boolVar2 \|\| ($)boolVar1`          | `true`                       | logical `OR` only requring left hand part to be evaluated |
| `($)boolVar1 ^ ($)boolVar2`           | `true`                      | logical `XOR` |
| `!($)boolVar1`                        | `true`                      | unary negation of [Boolean][Boolean] value |

### Dictionary expressions

To access a single value of a [Dictionary][Dictionaries] variable `($)myDictionary`:

`($)myDictionary[key]`

To access a value within a nested [Dictionary][Dictionaries] variable:

`($)myDictionary[outerkey][innerKey]`

### List expressions

An element of a [list][Lists] may be referenced using an index, where the index is an integer expression and an index of zero indicates the first element:

`($)myDictionary[index]`

### Creating a new object

| Expression        | Result |
|-------------------|--------|
| `new Structure()` | `{}`   |

### Using a method on an object

`($)stringVar1` equals `"hello"` and `($)stringVar2` equals `"123"`

| Expression              | Result    |
|-------------------------|-----------|
| `stringVar1.ToUpper()`  | `"HELLO"` |
| `int.Parse(stringVar2)` | `123`     |

### Explicitly cast a variable

`($)longVar` equals `1` as a long ([Int64][Int64])

| Expression                 | Result | Notes     |
|----------------------------|--------|-----------|
| `(int)($)longVar`          | `1`    | as an [Int32][Int32] |
| `(System.Int32)($)longVar` | `1`    | as an [Int32][Int32] |

## Related Concepts

* [Property Types][Property-Types]
* [Data Types][Data-Types]

[Literals]: {{< ref "#literals" >}}
[Expressions]: {{< ref "#expressions" >}}
[Variables]: {{< ref "#variables" >}}

[Data-Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[Dictionary]: {{< ref "#dictionary-literal" >}}
[List]: {{< ref "#list-literal" >}}
[String-Expressions]: {{< ref "#string-expressions" >}}
[Structure]: {{< ref "#structure-literal" >}}
[Integer]: {{< ref "#integer-literal" >}}
[String-Literal]: {{< ref "#string-literal" >}}

[Boolean]: {{< url "Cortex.Reference.DataTypes.MostCommon.Boolean" >}}
[Dictionaries]: {{< url "Cortex.Reference.DataTypes.MostCommon.Dictionaries" >}}
[Int16]: {{< url "Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url "Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Double]: {{< url "Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[Lists]: {{< url "Cortex.Reference.DataTypes.MostCommon.Lists" >}}
[Object]: {{< url "Cortex.Reference.DataTypes.MostCommon.Object" >}}
[Single]: {{< url "Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
[Structures]: {{< url "Cortex.Reference.DataTypes.MostCommon.Structure" >}}

[Property-Types]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockProperties.PropertyTypes.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.What-Is-An-Execution.MainDoc" >}}

[Boolean-Literals]: {{< url "MSDocs.CSharp.BooleanLiterals" >}}
[Char-Literals]: {{< url "MSDocs.CSharp.CharLiterals" >}}
[Integer-Literals]: {{< url "MSDocs.CSharp.IntegerLiterals" >}}
[Real-Literals]: {{< url "MSDocs.CSharp.RealLiterals" >}}
[String-Literals]: {{< url "MSDocs.CSharp.StringLiterals" >}}
