---
title: "What is a Data Type?"
linkTitle: "What is a Data Type?"
description: "Information regarding what a data type is, basic and complex data types and their differences."
weight: 1
---

# {{% param title %}}

<img src="/images/work-in-progress.jpg">

## Summary

TODO:

- Overview of a data type
- Difference between Value (value types cannot be null, and have a default value that is not null e.g. int is `0`) and Reference Data Types (reference types can be null and have a null default value)
- Difference between Basic and Complex Data Types

## Value Types

TODO:

- Explain what a value type is, and how it can be used
- Check Set Variable block and how Value Types work within the block
  - Setting a new variable to an already existing value type will cause them to be separate instances of the value
- The Copy Object block can be used to make a copy of a value type (value types always have a different reference)

## Reference Types

TODO:

- Explain what a reference type is, and how it can be used
- This is referenced by the Set Variable block
  - Set Variable block is used to set ($)List[0]
  - When adding `($)Reference` to `($)List`, the actual reference is added (not a copy)
  - Setting value of `($)List1` to `($)List2` will cause them to have the same reference. Changes to `($)List1` are reflected in `($)List2`
- The Copy Object block can be used to make a copy of a type with a different reference

## Basic Data Types

TODO:

- Explain what a basic data type is
- Table of Basic Data Types
  - Columns - Data Type Name, Value/Reference Type
  - Strings are a basic data type but are also a reference type.

## Complex Data Types

TODO:

- Explain what a complex data type is and what makes a data type complex
- Includes Complex and Collections (Lists, Dictionaries, structures, etc)
- Object
- Dynamic
- Object vs Dynamic

## Remarks

### Known Limitations

TODO

## See Also

### Related Concepts

TODO

### Related Data Types

- [All Data Types][Data Type]

### Related Blocks

- [All Blocks][]

### External Documentation

TODO:

- [Value Types][]
- [Reference Types][]
- [Builtin Types][]
- [Default Values][]

[Reference Types]: {{< url "MSDocs.CSharp.ReferenceTypes" >}}
[Value Types]: {{< url "MSDocs.CSharp.ValueTypes" >}}
[Builtin Types]: {{< url "MSDocs.CSharp.BuiltinTypes" >}}
[Default Values]: {{< url "MSDocs.CSharp.DefaultValues" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}

[Data Type]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
