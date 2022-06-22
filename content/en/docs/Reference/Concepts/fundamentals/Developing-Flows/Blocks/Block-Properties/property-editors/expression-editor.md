---
title: "Expression Editor"
linkTitle: "Expression Editor"
description: "Using the Expression Editor."
weight: 20
---

# {{< param title >}}

## Summary

The [Expression Editor][TODO] is the most powerful [property editor][] and can accept [literal values][], [expressions][Expressions], and references to [variables][Variables].

## Literal Values

A literal is an explicit value that is not calculated during the execution of the flow. A literal can be any of the following data types:

- [String][String Literal]
- [Char][Char Literal]
- [Int32][Int32 Literal]
- [Int64][Int64 Literal]
- [Double][Double literal]
- [Single][Single literal]
- [Boolean][Boolean literal]
- [Object][Object literal]
- [Dictionary][Dictionary literal]
- [Structure][Structure literal]
- [List][List literal]

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

### Int32 literal

If an integer literal value is greater than or equal to [Int32.MinValue][] or less than or equal to [Int32.MaxValue][], then it will be of type [Int32][]

```csharp
1234
```

If an integer literal value is less than [Int32.MinValue][] or greater than [Int32.MaxValue][], then it will be of type [Int64][].

For further information, see [Integer Literals][Integer-Literals].

### Int64 Literal

If an integer literal value is less than [Int32.MinValue][] or greater than [Int32.MaxValue][], then it will be of type [Int64][].

```csharp
2147483648
```

```csharp
1234l
1234L
```

For further information, see [Integer Literals][Integer-Literals].

### Double Literal

By default, floating point literals are of type [Double][Double].

```csharp
1234.456
```

The suffix `d` or `D` can used to create a floating point literal of type [Double][Double], but is unnecessary.

```csharp
1234.456d
1234.456D
```

For further information, see [Real Literals][Real-Literals].

### Single literal

If it is necessary to create an floating point literal of type [Single][] with a value greater than or equal to [Single.MinValue][] or less than or equal to [Single.MaxValue][], then the floating point literal must be suffixed by the character `f` or `F`. For example:

```csharp
1234.456f
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

Currently, creating an object using literal syntax is not supported.

### Dictionary literal

Currently, creating a dictionary using literal syntax is not supported; any attempt to make a dictionary using literal syntax will create a [Structure][] instead.

### Structure literal

[Structures][Structure] are a special type of [Dictionary][] that always have [string][String] [keys][key].

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

They differ from a [Dictionary][] in the syntax used for accessing the [item][].

Dictionaries can only use [index notation][]  e.g., `myDictionary["Key"]` to access [items][item]. Whereas, [Structures][Structure] can use both [dot notation][] e.g., `myStructure.Key` and [index notation][] e.g., `myStructure["Key"]`.

### List literal

A [List][] is an object that consists of a number of ordered [items][item] that can be of any [data type][Data-Types].

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

[Lists][List] may be heterogeneous, where the [items][item] may be of different [data types][Data-Types], or homogeneous, when the [items][item] are all of the same [data type][Data-Types].

## Expressions

An expression is a combination of [operands][] (i.e. [variables][Variables], [literals][literal values], calls to [methods][] and [properties][PropertiesC#] exposed on [data types][Data-Types]) and [operators][] (i.e. =, +, -, *, /) that will be evaluated when the flow execution reaches the block.

Expressions use the syntax of the [C#][] [programming language][].

- TODO: We are here
- TODO: Below is missing Equality and Properties
- TODO: Remove old literal-variable-expression page, fix url toml and fix references. [Cortex.Reference.Concepts.LiteralVariablesExpressions]

Types of expressions:

- Arithmetic
- String
- Boolean
- Equality
- Constructors
- Methods
- Properties
- Indexes
- Casting

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

To access a single value of a [Dictionary][] variable `($)myDictionary`:

`($)myDictionary[key]`

To access a value within a nested [Dictionary][] variable:

`($)myDictionary[outerkey][innerKey]`

### List expressions

An element of a [List][] may be referenced using an index, where the index is an integer expression and an index of zero indicates the first element:

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

## Variables

[Variables][Variables Concept] are named containers for storing values of any [data type][Data-Types]; a value can be read, updated, replaced, or removed.

### Variable References

The value of a variable can be read using variable reference syntax.

```csharp
($)variableName
```

The syntax for reading the properties of a variable differ depending on the value's [data type][Data-Types].

### Accessing a property in an Object

This example will read a property with the name `"Message"` from a variable that contains an [Exception][] object.

Assume the variable `($)Exception` has been set to the following:

```json
{
  "ExceptionType" : "Exception",
  "Message" : "Exception of Type \"System.Exception\" was thrown.",
  "HelpLink" : ""
}
```

The value `"Exception of Type \"System.Exception\" was thrown."` of the property named `"Message"` can be read from the [Exception][] using [dot notation][]:

```csharp
($)Exception.Message
```

### Accessing an item in a Dictionary

This example will read an [item][] with the [key][] `"Key1"` from a variable that contains a [Dictionary][].

Assume the variable `($)Dictionary` has been set to the following:

```json
{
  "Key1" : "Item 1",
  "Key2" : "Item 2"
}
```

The [item][] `"Item 1"` with the [key][] `"Key1"` can be read from the [Dictionary][] using [index notation][]:

```csharp
($)Dictionary["Key1"]
```

### Accessing an item in a Structure

This example will read an [item][] with the [key][] `"Key1"` from a variable that contains a [Structure][].

Assume the variable `($)Structure` has been set to the following:

```json
{
  "Key1" : "Item 1",
  "Key2" : "Item 2"
}
```

The [item][] `"Item 1"` with the [key][] `"Key1"` can be read from the [Structure][] using [dot notation][]:

```csharp
($)Structure.Key1
```

Or by using [index notation][]:

```csharp
($)Structure["Key1"]
```

### Accessing an item in a List

This example will read an [item][] with the index `0` from a variable that contains a [List][].

Assume the variable `($)List` has been set to the following:

```json
[
  "Item 1",
  "Item 2"
]
```

The [item][] `"Item 1"` with the index `0` can be read from the [List][] using [index notation][]:

```csharp
($)List[0]
```

## Known Limitations

* TODO: Cannot create Objects
* TODO: Cannot create Dictionaries
* [Keys][key] within a [Structure][] must follow [C# identifier naming rules][] to be accessed by [dot notation][], keys that do not follow these rules can still be accessed by [index notation][].

## Related Concepts

* [Property Types][Property-Types]
* [Data Types][Data-Types]

[literal values]: {{< ref "#literal-values" >}}
[Expressions]: {{< ref "#expressions" >}}
[Variables]: {{< ref "#variables" >}}

[String Literal]: {{< ref "#string-literal" >}}
[Char Literal]: {{< ref "#char-literal" >}}
[Int32 Literal]: {{< ref "#int32-literal" >}}
[Int64 Literal]: {{< ref "#int64-literal" >}}
[Single literal]: {{< ref "#single-literal" >}}
[Double literal]: {{< ref "#double-literal" >}}
[Boolean literal]: {{< ref "#boolean-literal" >}}
[Object literal]: {{< ref "#object-literal" >}}
[Dictionary literal]: {{< ref "#dictionary-literal" >}}
[Structure literal]: {{< ref "#structure-literal" >}}
[List literal]: {{< ref "#list-literal" >}}

[Data-Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[String-Expressions]: {{< ref "#string-expressions" >}}
[String-Literal]: {{< ref "#string-literal" >}}

[property editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockProperties.PropertyEditors.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Exception]: {{< url "Cortex.Reference.DataTypes.MostCommon.Exception" >}}
[Int16]: {{< url "Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url "Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int32.MaxValue]: {{< url "MSDocs.DotNet.Api.System.Int32.MaxValue" >}}
[Int32.MinValue]: {{< url "MSDocs.DotNet.Api.System.Int32.MinValue" >}}
[Int64]: {{< url "Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Double]: {{< url "Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[List]: {{< url "Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Object]: {{< url "Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[Single]: {{< url "Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[Single.MaxValue]: {{< url "MSDocs.DotNet.Api.System.Single.MaxValue" >}}
[Single.MinValue]: {{< url "MSDocs.DotNet.Api.System.Single.MinValue" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Property-Types]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockProperties.PropertyTypes.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[Variables Concept]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}

[input property]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[index notation]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.IndexNotation" >}}
[dot notation]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.DotNotation" >}}
[key]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Keys" >}}
[item]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Items" >}}

[Boolean-Literals]: {{< url "MSDocs.CSharp.BooleanLiterals" >}}
[Char-Literals]: {{< url "MSDocs.CSharp.CharLiterals" >}}
[Integer-Literals]: {{< url "MSDocs.CSharp.IntegerLiterals" >}}
[Real-Literals]: {{< url "MSDocs.CSharp.RealLiterals" >}}
[String-Literals]: {{< url "MSDocs.CSharp.StringLiterals" >}}
[C# identifier naming rules]: {{< url "MSDocs.CSharp.IdentifierNamingRules" >}}

[C#]: {{< url "Cortex.Reference.Glossary.A-E.CSharp" >}}
[operands]: {{< url "Cortex.Reference.Glossary.K-O.Operand" >}}
[operators]: {{< url "Cortex.Reference.Glossary.K-O.Operator" >}}
[PropertiesC#]: {{< url "Cortex.Reference.Glossary.P-T.PropertyCSharp" >}}
[methods]: {{< url "Cortex.Reference.Glossary.K-O.Method" >}}
[programming language]: {{< url "Cortex.Reference.Glossary.P-T.ProgrammingLanguage" >}}
