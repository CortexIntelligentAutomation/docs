---
title: "Literals, Variables and Expressions"
linkTitle: "Literals, Variables and Expressions"
description: "This page describes the different syntax that can be used when entering values for block properties."
---

# {{< param title >}}

This page describes the different syntax that can be used when entering values for block properties.

## Literals

A literal is a value that does not need to be calculated during the execution of the flow. A literal can be of any [data type][Data Types].

### String literals

Note that a string requires double quotes to indicate that it is a string literal.

```json
"Example String"
```

TODO: Chars

### Integer literals

```json
1
```

TODO: Talk about integer sizing
TODO: floating points

### Boolean literals

```json
true or false
```

### Object literals

```JSON
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

If the [Cortex Flow Engine][TODO Link] can determine that a literal object matches a known [data type][Data Types], then the engine will convert the literal object to that data type, otherwise it will convert it to a [structure][TODO Link].

TODO: talk about $type
TODO: talk about using the data type of properties
TODO: talk about dictionaries
TODO: talk about structures
TODO: Datetimeoffset/timeperiod
TODO: Enums

### Dictionary literals

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

TODO: Talk about heterogenous vs homogenous dictionaries.
TODO: talk about keys and uniqueness
TODO: talk about complex keys
TODO: talk about {} and dynamic vs object
TODO: talk about typed dictionaries

### List literals

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

TODO: talk about [] and dynamic vs object
TODO: talk about typed lists
TODO: Talk about heterogenous vs homogenous lists.

## Variable Reference

TODO: Review

A variable reference is a value that has been stored within a variable. The value that the variable evaluates to will not be constant, it will depend on what value was assigned to it.

When the variable contains a Structure or a List, you can index into the variable to access values within the Structure/List.

### A variable reference

```csharp
($)variableName
```

### A structure property

```csharp
($)variableName.PropertyName
```

### A list value

Note that you can index into a list using an int variable as well as with an int literal.

```csharp
($)variableName[5]
```

```csharp
($)variableName[($)indexVariable]
```

## Expressions

TODO: Review

An expression is a value that will be calculated when the execution reaches the block. Cortex expressions use C# syntax so anything that is a valid C# expression will be valid. Full namespaces or keywords for built-in C# types will need to be used to reference a .NET data type.

### Arithmetic expressions

`($)intVar1` equals `6` and `($)intVar2` equals `3`

| Expression                | Result |
|---------------------------|--------|
| `($)intVar1 + ($)intVar2` | `9`    |
| `($)intVar1 / ($)intVar2` | `2`    |

### String expressions

`($)stringVar1` equals `"hello"` and `($)stringVar2` equals `"world"`

| Expression                            | Result                       | Notes                              |
|---------------------------------------|------------------------------|------------------------------------|
| `($)stringVar1 + " " + ($)stringVar2` | `"hello world"`              |                                    |
| `$"{($)stringVar1} {($)stringVar2}"`  | `"hello world"`              | using .NET string interpolation    |
| `@"c:\programs\file.txt"`             | `"c:\\programs\\file.txt"`   | using .NET verbatim string literal |
| `$@"c:\programs\{($)stringVar1}.txt"` | `"c:\\programs\\hello.txt"`  | using .NET string interpolation and verbatim string literal |

TODO: Other data type expressions like above with literals

### Dictionary expressions

TODO

### List expressions

TODO

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

`($)longVar` equals `1` as a long

| Expression                 | Result | Notes     |
|----------------------------|--------|-----------|
| `(int)($)longVar`          | `1`    | as an int |
| `(System.Int32)($)longVar` | `1`    | as an int |

[Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
