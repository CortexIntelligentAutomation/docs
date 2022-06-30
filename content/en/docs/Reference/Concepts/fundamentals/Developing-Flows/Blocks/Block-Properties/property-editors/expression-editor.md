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

- [String][String literal]
- [Char][Char literal]
- [Int32][Int32 literal]
- [Int64][Int64 literal]
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

### Int64 literal

If an integer literal value is less than [Int32.MinValue][] or greater than [Int32.MaxValue][], then it will be of type [Int64][].

```csharp
2147483648
```

```csharp
1234l
1234L
```

For further information, see [Integer Literals][Integer-Literals].

### Double literal

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

Types of expressions:

- [Arithmetic][Arithmetic expressions]
- [Boolean][Boolean expressions]
- [Comparison][Comparison expressions]
- [String][String expressions]
- [Dictionary][Dictionary expressions]
- [Structure][Structure expressions]
- [List][List expressions]
- [Constructors][Constructor expressions]
- [Methods][Method expressions]
- [Properties][Property expressions]
- [Enums][Enum expressions]
- [Casting][Casting expressions]
- [Indexes][Index expressions]

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

For further information, see [Arithmetic Operators][].

### Boolean expressions

The following [operators][] perform logical operations with [operands][] that have boolean values.

Assume the variable `($)BoolVar1` has been set to `false`, and the variable `($)BoolVar2` has been set to `true`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `($)BoolVar1 && ($)BoolVar2`   | `false` | AND |
| `($)BoolVar2 \|\| ($)BoolVar1` | `true`  | OR  |
| `($)BoolVar1 ^ ($)BoolVar2`    | `true`  | XOR |
| `!($)BoolVar1`                 | `true`  | NOT |

For further information, see [Boolean Logical Operators][].

### Comparison expressions

The following [operators][] perform comparison operations with [operands][].

Assume the variable `($)IntVar1` has been set to `1`, and the variable `($)IntVar2` has been set to `2`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `($)IntVar1 == ($)IntVar2`     | `false` | Equal |
| `($)IntVar1 != ($)IntVar2`     | `true`  | Not Equal |
| `($)IntVar1 > ($)IntVar2`      | `false` | Greater Than  |
| `($)IntVar1 >= ($)IntVar2`     | `false` | Greater Than or Equal |
| `($)IntVar1 < ($)IntVar2`      | `true`  | Less Than |
| `($)IntVar1 <= ($)IntVar2`     | `true`  | Less Than or Equal  |

For further information, see [Equality Operators][], [Comparison Operators][], and [Object Equality][].

### String expressions

There are three types of string expressions:

- [Concatenated Strings][]
- [Interpolated Strings][]
- [Verbatim Strings][]

If a data type is used in a string expression that is not a [String][], then it will be [implicitly cast][] to a [String][] as part of the expression.

Assume for all the examples below the variable `($)StringVar1` has been set to `"hello"`, `($)StringVar2` has been set to `"world"` and `($)IntegerVar` has been set to `1234`.

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

### Dictionary expressions

[Dictionaries][Dictionary] can be created using [Constructor expressions][] and their items can be accessed using [Index expressions][].

### Structure expressions

[Structures][Structure] can be created using [Constructor expressions][] and their items can be accessed using [Property expressions][] or [Index expressions][].

### List expressions

[Lists][List] can be created using [Constructor expressions][] and their items can be accessed using [Index expressions][].

### Constructor expressions

Constructors can be used to create a new instance of a [Data Type][]. A [Data Type][] can have multiple constructors, each with different parameters that are used to create the new instance.

Methods on how to create a new instance of a [Data Type][] can be found in the relevant documentation for that [Data Type][Reference Data Types]; information regarding how to create a new [Data Type][] using a constructor can be found in the "Remarks" section under "Create a/an &lt;DataType&gt;" (where &lt;DataType&gt; is replaced by the type's name).

The following examples show two ways a [DateTimeOffset][] can be created using a constructor:

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `new DateTimeOffset()` | `0001-01-01T00:00:00+00:00` | `12AM 1st January 0001` with `0` hour UTC offset, the default for a new DateTimeOffset with no parameters |
| `new DateTimeOffset(2022, 7, 1, 14, 0, 0, 0, new TimeSpan(1, 0, 0))` | `2022-07-01T14:00:00+01:00` | `2PM 1st July 2022` with `1` hour UTC offset |

Note that some [Data Types][Data Type] should be created via [literal values][] instead of their constructors, these include:

- [String][String literal]
- [Char][Char literal]
- [Int32][Int32 literal]
- [Int64][Int64 literal]
- [Double][Double literal]
- [Single][Single literal]
- [Boolean][Boolean literal]

For further information, see [Constructors][].

### Method expressions

Methods can be used to execute specific functionality. Which methods are accessible is defined by the [Data Type][], and information regarding methods can be found in the relevant documentation for that [Data Type][Reference Data Types].

Methods can have parameters passed into them that are then used to execute the functionality, not all methods have parameters. The same method can be defined multiple times, each with different sets of parameters.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `TimePeriod.FromSeconds(60)` | `{"Years": 0, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 1, "Seconds": 0, "Milliseconds": 0}` | Method with parameters |
| `1.ToString()` | `"1"` | Method without parameters |
| `1.ToString("P0")` | `"100%"` | The `ToString()` method can take parameters in order to format the result. In this case `1` was converted into a percent with zero decimal places |

For further information, see [Methods][].

### Property expressions

Properties can be used to read data from and/or write data to a [Data Type][]. Which properties are accessible is defined by the [Data Type][], and information regarding properties can be found in the relevant documentation for that [Data Type][Reference Data Types].

Properties can be read-write, read-only, or write-only (extremely rare) depending on the access specified by the [Data Type][].

[Structures][Structure] allow for their keys to be accessed as properties.

Assume the variable `($)TimePeriodVar` has been set to `{"Years": 1, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 0, "Milliseconds": 0}`, and the variable `($)StructureVar` has been set to `{"FirstKey": 1, "SecondKey": 2}`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `DateTimeOffset.UtcNow` | `2022-07-01T13:00:00.0000000+00:00` | Read-only property |
| `($)TimePeriod.Years` | `1` | Read-write property. The result column shows reading the property, writing to the property can be achieved by using the [Set Variable][] block |
| `($)StructureVar.FirstKey` | `1` | Read-write property. The result column shows reading the property, writing to the property can be achieved by using the [Set Variable][] block  |

For further information, see [Properties][].

### Enum expressions

[Enum][] data types have a defined set of values, where each value has an associated [String][] name and [Int32][] value. Information regarding values can be found in the relevant documentation for that [Data Type][Reference Data Types].

Values within an [Enum][] can be accessed in the same way as properties or can they can be [cast][Casting expressions] from an [Int32][] value.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `DayOfWeek.Sunday` | `DayOfWeek.Sunday` | Where the name is `"Sunday"` and the value is `0` |
| `(DayOfWeek)6` | `DayOfWeek.Saturday` |  [Int32][] cast to an [Enum][]. Where the name is `"Saturday"` and the value is `6` |

For further information, see [Enumeration types][].

### Casting expressions

[Data Types][Data Type] can be cast to other [Data Types][Data Type] through the use of explicit casting, this can sometimes result in the loss of information when converting to a type that does not store the same amount of information. Information regarding which types a [Data Type][] can cast to can be found in the "Summary" section under "Can be cast to" in the relevant documentation for that [Data Type][Reference Data Types].

[Data Types][Data Type] can be used as other [Data Types][Data Type] through the use of implicit casting, this is an automatic process that requires no expression syntax. Information regarding which types a [Data Type][] can be used as can be found in the "Summary" section under "Can be used as" in the relevant documentation for that [Data Type][Reference Data Types].

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `(DayOfWeek)6` | `DayOfWeek.Saturday` | [Int32][] cast to an [Enum][]. Where the name is `"Saturday"` and the value is `6` |
| `(Int16)1` | `1` | An [Int32][] can be cast to an [Int16][] as long as value is from `-32,768` through `32,767` |
| `(Int32)1.9` | `1` | Casting a [Double][] to an [Int32][] will cause any decimal places to be lost |
| `1` | `1.0` | When using a block property of type [Double][] an [Int32][] is implicitly cast to [Double][] without any expression syntax |

For further information, see [Explicit Conversions][] and [Implicit Conversions][].

### Index expressions

[Data Types][Data Type] that are [Collections][] or [String][] can have their items accessed using index notation:

- `[0]` gets the first item
- `[1]` gets the second item
- `["key"]` gets the item with the key `"key"`.

Ranges can also be used within index notation:

- `[0..3]` gets three items from the first item (inclusively) (i.e. the first, second, and third item)
- `[^1]` gets the last item
- `[^2]` gets the second to last item
- `[..]` gets all items
- `[..3]` gets three items from the first item (inclusively) (i.e. the first, second, and third item)
- `[3..]` gets all items from the fourth item (inclusively) (i.e. the fourth to the last item)

For further information on index and range syntax, see [Indices and Ranges][].

In the examples bellow assume:

- `($)ListVar` has been set to `[1, 2, 3, 4, 5]`
- `($)DictionaryVar` of type `Dictionary<string, Int32>` has been set to `{"FirstKey": 1, "SecondKey": 2}`
- `($)StructureVar` has been set to `{"FirstKey": 1, "SecondKey": [1, 2, 3]}`
- `($)StringVar` has been set to `"Some Text"`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `($)ListVar[2]` | `3` | The third item in the list is returned |
| `($)ListVar[0..2]` | `[1, 2]` | The first and second item in the list are returned |
| `($)ListVar[^2]` | `4` | The second to last item in the list is returned |
| `($)ListVar[^2..^0]` | `[4, 5]` | The second to last and the last item in the list are returned |
| `($)ListVar[1..^1]` | `[2, 3, 4]` | The second item to the second to last item in the list are returned |
| `($)ListVar[..]` | `[1, 2, 3, 4, 5]` | All items in the list are returned |
| `($)ListVar[..2]` | `[1, 2]` | The first item and the second item in the list are returned |
| `($)ListVar[2..]` | `[3, 4, 5]` | The third item to the last item in the list are returned |
| `($)DictionaryVar["FirstKey"]` | `1` | The item with the key `"FirstKey"` is returned |
| `($)StructureVar["SecondKey"]` | `[1, 2, 3]` | The item with the key `"SecondKey"` is returned |
| `($)StructureVar["SecondKey"][0]` | `1` |  The first item within the item with key `"SecondKey"` is returned |
| `($)StringVar[0]` | `'S'` | The first character in the string is returned |

## Variables

- TODO: We are here
- TODO: Remove old literal-variable-expression page
- TODO: Update Fundamental Concepts index page/link title to Fundamentals

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
* [Data Types][Data Type]

[literal values]: {{< ref "#literal-values" >}}
[Expressions]: {{< ref "#expressions" >}}
[Variables]: {{< ref "#variables" >}}

[String literal]: {{< ref "#string-literal" >}}
[Char literal]: {{< ref "#char-literal" >}}
[Int32 literal]: {{< ref "#int32-literal" >}}
[Int64 literal]: {{< ref "#int64-literal" >}}
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

[Data Type]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}

[Arithmetic expressions]: {{< ref "#arithmetic-expressions" >}}
[Boolean expressions]: {{< ref "#boolean-expressions" >}}
[Comparison expressions]: {{< ref "#comparison-expressions" >}}
[String expressions]: {{< ref "#string-expressions" >}}
[Dictionary expressions]: {{< ref "#dictionary-expressions" >}}
[Structure expressions]: {{< ref "#structure-expressions" >}}
[List expressions]: {{< ref "#list-expressions" >}}
[Constructor expressions]: {{< ref "#constructor-expressions" >}}
[Method expressions]: {{< ref "#method-expressions" >}}
[Property expressions]: {{< ref "#property-expressions" >}}
[Enum expressions]: {{< ref "#enum-expressions" >}}
[Casting expressions]: {{< ref "#casting-expressions" >}}
[Index expressions]: {{< ref "#index-expressions" >}}

[property editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockProperties.PropertyEditors.MainDoc" >}}

[Reference Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Collections]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
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
[Char]: {{< url "Cortex.Reference.DataTypes.Text.Char.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Property-Types]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.BlockProperties.PropertyTypes.MainDoc" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Blocks.WhatIsABlock.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Executions.WhatIsAnExecution.MainDoc" >}}
[Variables Concept]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}

[input property]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[index notation]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.IndexNotation" >}}
[dot notation]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.DotNotation" >}}
[key]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Keys" >}}
[item]: {{< url "Cortex.Reference.Concepts.WorkingWithCollections.Items" >}}
[Enum]: {{< url "Cortex.Reference.Concepts.WorkingWithEnums.MainDoc" >}}

[implicitly cast]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ImplicitCasting" >}}

[Boolean-Literals]: {{< url "MSDocs.CSharp.BooleanLiterals" >}}
[Char-Literals]: {{< url "MSDocs.CSharp.CharLiterals" >}}
[Integer-Literals]: {{< url "MSDocs.CSharp.IntegerLiterals" >}}
[Real-Literals]: {{< url "MSDocs.CSharp.RealLiterals" >}}
[String-Literals]: {{< url "MSDocs.CSharp.StringLiterals" >}}
[Arithmetic Operators]: {{< url "MSDocs.CSharp.ArithmeticOperators" >}}
[Boolean Logical Operators]: {{< url "MSDocs.CSharp.BooleanLogicalOperators" >}}
[Comparison Operators]: {{< url "MSDocs.CSharp.ComparisonOperators" >}}
[Equality Operators]: {{< url "MSDocs.CSharp.EqualityOperators" >}}
[Constructors]: {{< url "MSDocs.CSharp.Constructors" >}}
[Methods]: {{< url "MSDocs.CSharp.Methods" >}}
[Properties]: {{< url "MSDocs.CSharp.Properties" >}}
[Enumeration types]: {{< url "MSDocs.CSharp.EnumerationTypes" >}}
[Explicit Conversions]: {{< url "MSDocs.CSharp.ExplicitConversions" >}}
[Implicit Conversions]: {{< url "MSDocs.CSharp.ImplicitConversions" >}}
[Indices and Ranges]: {{< url "MSDocs.CSharp.IndicesAndRanges" >}}
[String concatenation]: {{< url "MSDocs.DotNet.Api.System.String.ConcatGuide" >}}
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
