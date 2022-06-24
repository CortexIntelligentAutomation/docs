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

For further information on interpolated strings using  [variables][Variables] or [expressions][Expressions] see [String expressions][]

In the case of interpolated verbatim [string][String] literals, double curly braces are not interpreted literally; they produce a single curly brace character. For example:

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
- TODO: Remove old literal-variable-expression page
- TODO: Go through expressions - Up to Equality
- TODO: Update to format below
- TODO: Below is missing Equality and Properties

Types of expressions:

- [Arithmetic][Arithmetic expressions]
- [String][String expressions]
- [Boolean][Boolean expressions]
- [Equality][Equality expressions]
- [Constructors][Constructor expressions]
- [Methods][Method expressions]
- [Properties][Property expressions]
- [Indexes][Index expressions]
- [Casting][Casting expressions]

### Arithmetic expressions

The following [operators][] perform arithmetic operations with [operands][] that have numeric values.

Assume the variable `($)IntVar1` has been set to `6`, and the variable `($)IntVar2` has been set to `3`.

| Expression                | Result | Notes     |
|---------------------------|--------|-----------|
| `($)IntVar1 + ($)IntVar2` | `9`    | Add       |
| `($)IntVar1 - ($)IntVar2` | `3`    | Subtract  |
| `($)IntVar1 * ($)IntVar2` | `18`   | Multiply  |
| `($)IntVar1 / ($)IntVar2` | `2`    | Divide    |
| `($)IntVar1 % ($)IntVar2` | `0`    | Remainder |

For further information, see [Arithmetic Operators][]

### String expressions

There are three types of string expressions:

- [Concatenated Strings][]
- [Interpolated Strings][]
- [Verbatim Strings][]

If a data type is used in a string expression that is not a [String][], then it will be [implicitly cast][] to a [String][] as part of the expression.

Assume for all the examples below the variable `($)StringVar1` has been set to `"hello"`, `($)StringVar2` has been set to `"world"` and `($)IntegerVar` has been set to `1234`

#### Concatenated Strings

Concatenation is the process of appending one [String][] to the end of another [String][]. You concatenate strings by using the `+` [operator][operators].

| Expression                            | Result                       | Notes                              |
|---------------------------------------|------------------------------|------------------------------------|
| `($)StringVar1 + " " + ($)StringVar2` | `"hello world"`              | |
| `($)StringVar1 + " " + ($)IntegerVar` | `"hello 1234"`               | The variable `($)IntegerVar` is [implicitly cast][] to a [String][String] as part of the expression |

For further information, see [String concatenation][].

#### Interpolated Strings

Interpolation is the process of inserting expressions and variable references into a [String][]. An interpolated string is declared by prefixing the string with the `$` character.

| Expression                            | Result                       | Notes                              |
|---------------------------------------|------------------------------|------------------------------------|
| `$"{($)StringVar1} {($)StringVar2}"`  | `"hello world"`              | |
| `$"{($)StringVar1} {($)IntegerVar}"`  | `"hello 1234"`               | The variable `($)IntegerVar` is [implicitly cast][] to a [String][String] as part of the expression |
| `$"{($)StringVar1} {($)IntegerVar + 1}"`  | `"hello 1235"`               | The expression `($)IntegerVar + 1` is evaluated and the result is [implicitly cast][] to a [String][String] as part of the expression |

For further information, see [String interpolation][].

#### Verbatim Strings

A verbatim string identifies that characters within the string should be processed literally, and do not need to be escaped. However, the following exceptions apply:

- In both Verbatim and Interpolated Verbatim strings the double quote character `"` is escaped by prefixing it with another double quote character
- In Interpolated Verbatim strings the curly brace characters `{` and `}` are escaped by prefixing them with the same curly brace character

| Expression                            | Result                       | Notes                              |
|---------------------------------------|------------------------------|------------------------------------|
| `@"c:\programs\file.txt"`             | `"c:\\programs\\file.txt"`   | |
| `@"They said ""Hello!"""`             | `"They said \"Hello!\""`     | The `"` character is escaped|
| `$@"{{ Some Text }}"`                 | `"{ Some Text }"`            | Interpolated Verbatim String, The curly brace characters are escaped |
| `$@"c:\programs\{($)StringVar1}.txt"` | `"c:\\programs\\hello.txt"`  | Interpolated Verbatim String |

For further information, see [Verbatim string literals][] and [Verbatim String Interpolation][].

### Boolean expressions

The following [operators][] perform logical operations with [operands][] that have boolean values.

Assume the variable `($)BoolVar1` has been set to `false`, and the variable `($)BoolVar2` has been set to `true`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `($)BoolVar1 && ($)BoolVar2`   | `false` | AND |
| `($)BoolVar2 \|\| ($)BoolVar1` | `true`  | OR  |
| `($)BoolVar1 ^ ($)BoolVar2`    | `true`  | XOR |
| `!($)BoolVar1`                 | `true`  | NOT |

For further information, see [Boolean Logical Operators][]

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

`($)StringVar1` equals `"hello"` and `($)StringVar2` equals `"123"`

| Expression              | Result    |
|-------------------------|-----------|
| `StringVar1.ToUpper()`  | `"HELLO"` |
| `int.Parse(StringVar2)` | `123`     |

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
[Conc]: {{< ref "#list-literal" >}}
[List literal]: {{< ref "#list-literal" >}}
[Concatenated Strings]: {{< ref "#concatenated-strings" >}}
[Interpolated Strings]: {{< ref "#interpolated-strings" >}}
[Verbatim Strings]: {{< ref "#verbatim-strings" >}}

[Data-Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[Arithmetic expressions]: {{< ref "#arithmetic-expressions" >}}
[String expressions]: {{< ref "#string-expressions" >}}
[Boolean expressions]: {{< ref "#boolean-expressions" >}}
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

[implicitly cast]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ImplicitCasting" >}}

[Boolean-Literals]: {{< url "MSDocs.CSharp.BooleanLiterals" >}}
[Char-Literals]: {{< url "MSDocs.CSharp.CharLiterals" >}}
[Integer-Literals]: {{< url "MSDocs.CSharp.IntegerLiterals" >}}
[Real-Literals]: {{< url "MSDocs.CSharp.RealLiterals" >}}
[String-Literals]: {{< url "MSDocs.CSharp.StringLiterals" >}}
[Arithmetic Operators]: {{< url "MSDocs.CSharp.ArithmeticOperators" >}}
[Boolean Logical Operators]: {{< url "MSDocs.CSharp.BooleanLogicalOperators" >}}
[C# identifier naming rules]: {{< url "MSDocs.CSharp.IdentifierNamingRules" >}}
[String interpolation]: {{< url "MSDocs.CSharp.Interpolation" >}}
[Verbatim string literals]: {{< url "MSDocs.CSharp.Verbatim" >}}
[Verbatim String Interpolation]: {{< url "MSDocs.CSharp.InterpolatedVerbatim" >}}
[String concatenation]: {{< url "MSDocs.DotNet.Api.System.String.ConcatGuide" >}}

[C#]: {{< url "Cortex.Reference.Glossary.A-E.CSharp" >}}
[operands]: {{< url "Cortex.Reference.Glossary.K-O.Operand" >}}
[operators]: {{< url "Cortex.Reference.Glossary.K-O.Operator" >}}
[PropertiesC#]: {{< url "Cortex.Reference.Glossary.P-T.PropertyCSharp" >}}
[methods]: {{< url "Cortex.Reference.Glossary.K-O.Method" >}}
[programming language]: {{< url "Cortex.Reference.Glossary.P-T.ProgrammingLanguage" >}}
