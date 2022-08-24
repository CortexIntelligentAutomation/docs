---
title: "Expression Editor"
linkTitle: "Expression Editor"
description: "Information regarding using the Expression Editor to create literal values, expressions, or use variables."
weight: 200
---

# {{% param title %}}

## Summary

The [Expression Editor][] is the most powerful [property editor][] and can accept [literal values][], [expressions][], and [variables][].

TODO: Image of blank expression editor

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

TODO: Image of expression editor with literal values (int, string, list)

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

For interpolated [strings][String], [variables][] or [expressions][] are surrounded by single curly braces. For example:

```csharp
$"He said \"Come here {($)Name}!\""
```

For further information on interpolated strings using  [variables][] or [expressions][] see [String expressions][]

In the case of interpolated verbatim [string][String] literals, double curly braces are not interpreted literally; they produce a single curly brace character. For example:

```csharp
$@"This is a single square brace ""["", and this is a single curly brace ""{{"""
```

The example above becomes:

```text
This is a single square brace "[", and this is a single curly brace "{"
```

For further information, see [String Literals][]

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

For further information, [Char Literals][]

### Int32 literal

If an integer literal value is greater than or equal to [Int32.MinValue][] or less than or equal to [Int32.MaxValue][], then it will be of type [Int32][]

```csharp
1234
```

If an integer literal value is less than [Int32.MinValue][] or greater than [Int32.MaxValue][], then it will be of type [Int64][].

For further information, see [Integer Literals][].

### Int64 literal

If an integer literal value is less than [Int32.MinValue][] or greater than [Int32.MaxValue][], then it will be of type [Int64][].

```csharp
2147483648
```

```csharp
1234l
1234L
```

For further information, see [Integer Literals][].

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

For further information, see [Real Literals][].

### Single literal

If it is necessary to create an floating point literal of type [Single][] with a value greater than or equal to [Single.MinValue][] or less than or equal to [Single.MaxValue][], then the floating point literal must be suffixed by the character `f` or `F`. For example:

```csharp
1234.456f
1234.456F
```

For further information, see [Real Literals][].

### Boolean literal

A [Boolean][] literal represents a truth-value of either `true` or `false`.

```json
true or false
```

For further information, see [Boolean Literals][].

### Object literal

Currently, creating an object using literal syntax is not supported.

### Dictionary literal

Currently, creating a dictionary using literal syntax is not supported; any attempt to make a dictionary using literal syntax will create a [Structure][] instead.

### Structure literal

[Structures][Structure] are a special type of [Dictionary][] that always have [string][String] keys.

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

They differ from a [Dictionary][] in the syntax used for accessing the item:

- [Dictionary][] items can be accessed using [Index expressions][]
- [Structure][] items can be accessed using [Property expressions][] or [Index expressions][]

### List literal

A [List][] is an object that consists of a number of ordered items that can be of any [data type][Data Type].

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

[Lists][List] may be heterogeneous, where the items may be of different [data types][Data Type], or homogeneous, when the items are all of the same [data type][Data Type].

## Variables

[Variables][Variables Concept] are named containers for storing values of any [data type][Data Type]; a [variable's][Variables Concept] value can be read, updated, replaced, or removed using variable syntax; where the variable name is prefixed with `($)` (e.g. `($)VariableName`).

Variables can be used within [expressions][].

## Expressions

An expression is a combination of [operands][] (i.e. [variables][], [literals][literal values], calls to [methods][] and [properties][PropertiesC#] exposed on [data types][Data Type]) and [operators][] (i.e. =, +, -, *, /) that will be evaluated when the flow execution reaches the block.

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

TODO: Image of expression editor with expression (Arithmetic, Constructors, Properties)

### Arithmetic expressions

The following [operators][] perform arithmetic operations with [operands][] that have numeric values.

In the examples below assume:

- `($)Int1` has been set to `6`
- `($)Int2` has been set to `3`

| Expression                | Result | Notes     |
|---------------------------|--------|-----------|
| `($)Int1 + ($)Int2` | `9`    | Add       |
| `($)Int1 - ($)Int2` | `3`    | Subtract  |
| `($)Int1 * ($)Int2` | `18`   | Multiply  |
| `($)Int1 / ($)Int2` | `2`    | Divide    |
| `($)Int1 % ($)Int2` | `0`    | Remainder |

For further information, see [Arithmetic Operators][].

### Boolean expressions

The following [operators][] perform logical operations with [operands][] that have boolean values.

In the examples below assume:

- `($)Bool1` has been set to `false`
- `($)Bool2` has been set to `true`

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `($)Bool1 && ($)Bool2`   | `false` | AND |
| `($)Bool2 \|\| ($)Bool1` | `true`  | OR  |
| `($)Bool1 ^ ($)Bool2`    | `true`  | XOR |
| `!($)Bool1`                 | `true`  | NOT |

For further information, see [Boolean Logical Operators][].

### Comparison expressions

The following [operators][] perform comparison operations with [operands][].

In the examples below assume:

- `($)Int1` has been set to `1`
- `($)Int2` has been set to `2`

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `($)Int1 == ($)Int2`     | `false` | Equal |
| `($)Int1 != ($)Int2`     | `true`  | Not Equal |
| `($)Int1 > ($)Int2`      | `false` | Greater Than  |
| `($)Int1 >= ($)Int2`     | `false` | Greater Than or Equal |
| `($)Int1 < ($)Int2`      | `true`  | Less Than |
| `($)Int1 <= ($)Int2`     | `true`  | Less Than or Equal  |

For further information, see [Equality Operators][], [Comparison Operators][], and [Object Equality][].

### String expressions

There are three types of string expressions:

- [Concatenated Strings][]
- [Interpolated Strings][]
- [Verbatim Strings][]

If a data type is used in a string expression that is not a [String][], then it will be [implicitly cast][] to a [String][] as part of the expression.

In all of the examples below assume:

- `($)String1` has been set to `"hello"`
- `($)String2` has been set to `"world"`
- `($)Int` has been set to `1234`

#### Concatenated Strings

Concatenation is the process of appending one [String][] to the end of another [String][]. You concatenate strings by using the `+` [operator][operators].

| Expression                            | Result                       | Notes                              |
|---------------------------------------|------------------------------|------------------------------------|
| `($)String1 + " " + ($)String2` | `"hello world"`              | |
| `($)String1 + " " + ($)Int` | `"hello 1234"`               | The variable `($)Int` is [implicitly cast][] to a [String][String] as part of the expression |

For further information, see [String concatenation][].

#### Interpolated Strings

Interpolation is the process of inserting expressions and variables into a [String][]. An interpolated string is declared by prefixing the string with the `$` character.

| Expression                            | Result                       | Notes                              |
|---------------------------------------|------------------------------|------------------------------------|
| `$"{($)String1} {($)String2}"`  | `"hello world"`              | |
| `$"{($)String1} {($)Int}"`  | `"hello 1234"`               | The variable `($)Int` is [implicitly cast][] to a [String][String] as part of the expression |
| `$"{($)String1} {($)Int + 1}"`  | `"hello 1235"`               | The expression `($)Int + 1` is evaluated and the result is [implicitly cast][] to a [String][String] as part of the expression |

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
| `$@"c:\programs\{($)String1}.txt"` | `"c:\\programs\\hello.txt"`  | Interpolated Verbatim String |

For further information, see [Verbatim string literals][] and [Verbatim String Interpolation][].

### Dictionary expressions

[Dictionaries][Dictionary] can be created using [Constructor expressions][] and their items can be accessed using [Index expressions][].

### Structure expressions

[Structures][Structure] can be created using [Constructor expressions][] and their items can be accessed using [Property expressions][] (keys must follow [C# identifier naming rules][]) or [Index expressions][] (keys do not need to follow [C# identifier naming rules][]).

### List expressions

[Lists][List] can be created using [Constructor expressions][] and their items can be accessed using [Index expressions][].

### Constructor expressions

Constructors can be used to create a new instance of a [Data Type][]. A [Data Type][] can have multiple constructors, each with different parameters that are used to create the new instance.

Methods on how to create a new instance of a [Data Type][] can be found in the relevant documentation for that [Data Type][Reference Data Types]; information regarding how to create a new [Data Type][] using a constructor can be found in the "Remarks" section under "Create a/an &lt;DataType&gt;" (where &lt;DataType&gt; is replaced by the type's name).

The following examples show two ways a [DateTimeOffset][] can be created using a constructor:

In the examples below assume the variable `($)Year` has been set to `2022`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `new DateTimeOffset()` | `0001-01-01T00:00:00+00:00` | `12AM 1st January 0001` with `0` hour UTC offset, the default for a new DateTimeOffset with no parameters |
| `new DateTimeOffset(($)Year, 7, 1, 14, 0, 0, 0, new TimeSpan(1, 0, 0))` | `2022-07-01T14:00:00+01:00` | `2PM 1st July 2022` with `1` hour UTC offset |

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

Methods can be used to execute specific functionality. The methods accessible are defined by the [Data Type][], and information regarding methods can be found in the relevant documentation for that [Data Type][Reference Data Types].

Methods can have parameters passed into them that are then used to execute the functionality, not all methods have parameters. The same method can be defined multiple times, each with different sets of parameters.

In the examples below assume the variable `($)Int` has been set to `1`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `TimePeriod.FromSeconds(60)` | `{"Years": 0, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 1, "Seconds": 0, "Milliseconds": 0}` | Method with parameters |
| `($)Int.ToString()` | `"1"` | Method without parameters |
| `($)Int.ToString("P0")` | `"100%"` | The `ToString()` method can take parameters in order to format the result. In this case `1` was converted into a percent with zero decimal places |

For further information, see [Methods][Methods External].

### Property expressions

Properties can be used to read data from and/or write data to a [Data Type][]. The properties accessible are defined by the [Data Type][], and information regarding properties can be found in the relevant documentation for that [Data Type][Reference Data Types].

Properties can be read-write, read-only, or write-only (extremely rare) depending on the access specified by the [Data Type][].

Whilst [Structures][Structure] are [Collections][Collection], they also allow for their keys to be accessed as properties.

In the examples below assume:

- `($)TimePeriod` has been set to `{"Years": 1, "Months": 0, "Days": 0, "Hours": 0, "Minutes": 0, "Seconds": 0, "Milliseconds": 0}`
- `($)Structure` has been set to `{"FirstKey": 1, "SecondKey": 2}`

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `DateTimeOffset.UtcNow` | `2022-07-01T13:00:00.0000000+00:00` | Read-only property, this only works in [Input Properties][] |
| `($)TimePeriod.Years` | `1` | Read-write property, this can be used in [Input][Input Properties], [Output][Output Properties], and [InputOutput Properties][]. The result column shows reading the property; writing to the property can be achieved by using any [Output Property][Output Properties]. |
| `($)Structure.FirstKey` | `1` | Read-write property, this can be used in [Input][Input Properties], [Output][Output Properties], and [InputOutput Properties][]. The result column shows reading the property; writing to the property can be achieved by using any [Output Property][Output Properties].|

For further information, see [Properties][].

### Enum expressions

[Enum][] data types have a defined set of values, where each value has an associated [String][] name and [Int32][] value. Information regarding values can be found in the relevant documentation for that [Data Type][Reference Data Types].

Values within an [Enum][] can be accessed in the same way as properties or can they can be [cast][Casting expressions] from an [Int32][] value.

In the examples below assume the variable `($)Int` has been set to `6`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `DayOfWeek.Sunday` | `DayOfWeek.Sunday` | Where the name is `"Sunday"` and the value is `0` |
| `(DayOfWeek)($)Int` | `DayOfWeek.Saturday` |  [Int32][] cast to an [Enum][]. Where the name is `"Saturday"` and the value is `6` |

For further information, see [Enumeration types][].

### Casting expressions

[Data Types][Data Type] can be cast to other [Data Types][Data Type] through the use of explicit casting, this can sometimes result in the loss of information when converting to a type that does not store the same amount of information. Information regarding which types a [Data Type][] can cast to can be found in the "Summary" section under "Can be cast to" in the relevant documentation for that [Data Type][Reference Data Types].

[Data Types][Data Type] can be used as other [Data Types][Data Type] through the use of implicit casting, this is an automatic process that requires no expression syntax. Information regarding which types a [Data Type][] can be used as can be found in the "Summary" section under "Can be used as" in the relevant documentation for that [Data Type][Reference Data Types].

In the examples below assume the variable `($)Int` has been set to `6`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `(DayOfWeek)($)Int` | `DayOfWeek.Saturday` | [Int32][] cast to an [Enum][]. Where the name is `"Saturday"` and the value is `6` |
| `(Int16)($)Int` | `6` | An [Int32][] can be cast to an [Int16][] as long as value is from `-32,768` through `32,767` |
| `(Int32)1.9` | `1` | Casting a [Double][] to an [Int32][] will cause any decimal places to be lost |
| `($)Int` | `6.0` | When using a block property of type [Double][] an [Int32][] is implicitly cast to [Double][] without any expression syntax |

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

In the examples below assume:

- `($)List` has been set to `[1, 2, 3, 4, 5]`
- `($)Dictionary` of type `Dictionary<string, Int32>` has been set to `{"FirstKey": 1, "SecondKey": 2}`
- `($)Structure` has been set to `{"FirstKey": 1, "SecondKey": [1, 2, 3]}`
- `($)String` has been set to `"Some Text"`.

| Expression                     | Result  | Notes                              |
|--------------------------------|---------|------------------------------------|
| `($)List[2]` | `3` | The third item in the list is returned |
| `($)List[0..2]` | `[1, 2]` | The first and second item in the list are returned |
| `($)List[^2]` | `4` | The second to last item in the list is returned |
| `($)List[^2..^0]` | `[4, 5]` | The second to last and the last item in the list are returned |
| `($)List[1..^1]` | `[2, 3, 4]` | The second item to the second to last item in the list are returned |
| `($)List[..]` | `[1, 2, 3, 4, 5]` | All items in the list are returned |
| `($)List[..2]` | `[1, 2]` | The first item and the second item in the list are returned |
| `($)List[2..]` | `[3, 4, 5]` | The third item to the last item in the list are returned |
| `($)Dictionary["FirstKey"]` | `1` | The item with the key `"FirstKey"` is returned |
| `($)Structure["SecondKey"]` | `[1, 2, 3]` | The item with the key `"SecondKey"` is returned |
| `($)Structure["SecondKey"][0]` | `1` |  The first item within the item with key `"SecondKey"` is returned |
| `($)String[0]` | `'S'` | The first character in the string is returned |

## Remarks

### Known Limitations

#### Cannot Create Objects using Literal Syntax

Currently, creating an object using literal syntax is not supported.

Objects can be created using expressions, for more information see [Constructor expressions][].

#### Cannot Create Dictionaries using Literal Syntax

Currently, creating a dictionary using literal syntax is not supported; any attempt to make a dictionary using literal syntax will create a [Structure][] instead.

Dictionaries can be created using expressions, for more information see [Dictionary expressions][].

#### When using variables of the same name the closest scoped is used

It is possible to create multiple [variables][Variables: What Is a Variable] with the same name in the [Variables Grid][]. When using the same name in different [workspaces][workspace], the variable with the closest scope will be used.

For example:

- `Top-Level` workspace has the variable `($)Variable`
- `Child-Level` workspace also has the variable `($)Variable`

When executing a block in `Child-Level` that uses `($)Variable`, the variable that is used is the variable defined in `Child-Level`.

This may change in future to allow developers to specifically select which of the variables with the same name is used in this scenario.

## See Also

### Related Concepts

- [Workspaces][]
- [Literal Editor][]
- [Variable Editor][]
- [Variables][Variables Concept]
- [Data Types][Data Type]
- [Object Casting][]

### Related Blocks

- [All Blocks][Blocks]

### Related Data Types

- [All Data Types][Reference Data Types]

### External Documentation

- [Boolean Literals][]
- [Char Literals][]
- [Integer Literals][]
- [Real Literals][]
- [String Literals][]
- [Arithmetic Operators][]
- [Boolean Logical Operators][]
- [Comparison Operators][]
- [Equality Operators][]
- [String concatenation][]
- [String interpolation][]
- [Verbatim string literals][]
- [Verbatim String Interpolation][]
- [Constructors][]
- [Methods][Methods External]
- [Properties][]
- [C# identifier naming rules][]
- [Enumeration types][]
- [Explicit Conversions][]
- [Implicit Conversions][]
- [Indices and Ranges][]

[literal values]: {{< ref "#literal-values" >}}
[expressions]: {{< ref "#expressions" >}}
[variables]: {{< ref "#variables" >}}

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

[Data Type]: {{< url "Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}

[property editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.MainDoc" >}}
[Literal Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Input Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Reference Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[Boolean]: {{< url "Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[Collections]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[Dictionary]: {{< url "Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
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
[Collection]: {{< url "Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[Workspace Scope]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}

[Variables Concept]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Variables: What Is a Variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[Object Equality]: {{< url "Cortex.Reference.Concepts.ObjectEquality.MainDoc" >}}

[Enum]: {{< url "Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}

[Object Casting]: {{< url "Cortex.Reference.Concepts.ObjectCasting.MainDoc" >}}
[implicitly cast]: {{< url "Cortex.Reference.Concepts.ObjectCasting.ImplicitCast" >}}

[Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Set Variable]: {{< url "Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}

[Expression Editor]: {{< url "Cortex.Guides.Studio.ExpressionEditor.MainDoc" >}}

[Variables Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.VariablesGrid" >}}

[Boolean Literals]: {{< url "MSDocs.CSharp.BooleanLiterals" >}}
[Char Literals]: {{< url "MSDocs.CSharp.CharLiterals" >}}
[Integer Literals]: {{< url "MSDocs.CSharp.IntegerLiterals" >}}
[Real Literals]: {{< url "MSDocs.CSharp.RealLiterals" >}}
[String Literals]: {{< url "MSDocs.CSharp.StringLiterals" >}}
[Arithmetic Operators]: {{< url "MSDocs.CSharp.ArithmeticOperators" >}}
[Boolean Logical Operators]: {{< url "MSDocs.CSharp.BooleanLogicalOperators" >}}
[Comparison Operators]: {{< url "MSDocs.CSharp.ComparisonOperators" >}}
[Equality Operators]: {{< url "MSDocs.CSharp.EqualityOperators" >}}
[Constructors]: {{< url "MSDocs.CSharp.Constructors" >}}
[Methods External]: {{< url "MSDocs.CSharp.Methods" >}}
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

[C#]: {{< url "Cortex.Reference.Glossary.A-E.CSharp" >}}
[operands]: {{< url "Cortex.Reference.Glossary.K-O.Operand" >}}
[operators]: {{< url "Cortex.Reference.Glossary.K-O.Operator" >}}
[PropertiesC#]: {{< url "Cortex.Reference.Glossary.P-T.PropertyCSharp" >}}
[methods]: {{< url "Cortex.Reference.Glossary.K-O.Method" >}}
[programming language]: {{< url "Cortex.Reference.Glossary.P-T.ProgrammingLanguage" >}}
