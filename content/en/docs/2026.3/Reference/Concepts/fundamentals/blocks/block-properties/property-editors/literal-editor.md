---
title: "Literal Editor"
linkTitle: "Literal Editor"
description: "Information regarding using the Literal Editor to create literal values for basic and complex data types."
weight: 1
---

# {{% param title %}}

## Summary

The Literal Editor is a [property editor][] used to enter [literal values][] for a variety of [data types][Data Type]. It is available for most [Input properties][], and is particularly useful for constructing [complex data types][complex data type] without writing [expression][expressions] syntax.

Unlike the [Expression Editor][], the Literal Editor does not accept [expressions][] or [variables][Variables]. Expression syntax is not supported; the value must be entered as a literal for the property's data type. Whether the Literal Editor is available for a given type is documented under **Property Editor Support** on that [data type][Data Type]'s page.

{{< figure src="/images/Literal Editor.png" >}}

The example above shows the creation of a [ClientAuthentication][] object using the Literal Editor. The [clientId][] and [clientSecret][] parameters are both initially associated with [Expression Editors][Expression Editor], which may be individually changed as needed.

## Literal Values

A literal is an explicit value that is not calculated during the execution of the flow. The types available in the Literal Editor are restricted by the [block property][] being edited.

A literal can be any of the following data types:

- [String][String literal]
- [Int16][Int16 literal]
- [Int32][Int32 literal]
- [Int64][Int64 literal]
- [Double][Double literal]
- [Single][Single literal]
- [Boolean][Boolean literal]
- [DateTime][DateTime literal]
- [DateTimeOffset][DateTimeOffset literal]
- [TimeSpan][TimeSpan literal]
- [Enum][Enum literal]
- [Object][Object literal]
- [Dictionary][Dictionary literal]
- [Structure][Structure literal]
- [List][List literal]
- [Complex types][]

When constructing a [basic data type][] such as [String][], [Int32][], or [Boolean][], the Literal Editor typically consists of a single editor field. Some basic types that have multiple components (for example [DateTimeOffset][] or [TimeSpan][]) display nested sub-editors. When constructing a [complex data type][], nested sub-editors are shown for each parameter; see [Complex types][].

### String literal

{{< figure src="/images/Literal Editor - Basic Types.png" >}}

The example above shows the creation of a [String][] using the Literal Editor. The value is the text being formed, without C# [string literal][String Literals] syntax.

[String][] literals are entered without surrounding double quotes. For example:

```text
Example String
```

Any double quotes entered in the Literal Editor are treated as characters that form part of the [string][String]. For example:

```text
He said "Come here!"
```

The example above becomes:

```text
He said "Come here!"
```

In the [Expression Editor][], the surrounding double quotes are required (for example `"Example String"`), and quotes inside the string must be escaped.

For further information, see [Create a String][] and [String Literals][].

### Int16 literal

If an integer literal value is greater than or equal to [Int16.MinValue][] and less than or equal to [Int16.MaxValue][], it can be entered for a property of type [Int16][].

```text
1234
```

Do not use C# casts (for example `(Int16)1234` or `(short)1234`). Expression syntax is not supported within the Literal Editor for the [Int16][] data type.

For further information, see [Integer Literals][].

### Int32 literal

If an integer literal value is greater than or equal to [Int32.MinValue][] and less than or equal to [Int32.MaxValue][], it can be entered for a property of type [Int32][].

```text
1234
```

Do not use C# suffixes (for example `1234L`). The property's data type determines whether the value is treated as [Int32][] or [Int64][]. Expression syntax is not supported within the Literal Editor for the [Int32][] data type.

For further information, see [Integer Literals][].

### Int64 literal

If an integer literal value is greater than or equal to [Int64.MinValue][] and less than or equal to [Int64.MaxValue][], it can be entered for a property of type [Int64][].

```text
2147483648
```

Values outside the [Int32][] range (less than [Int32.MinValue][] or greater than [Int32.MaxValue][]) require a property of type [Int64][]. Unlike the [Expression Editor][], the `L` or `l` suffix is not used in the Literal Editor.

For further information, see [Integer Literals][].

### Double literal

By default, a floating-point literal entered in the Literal Editor for a [Double][] property is of type [Double][].

```text
1234.456
```

Do not use the C# suffix `d` or `D`. Expression syntax is not supported within the Literal Editor for the [Double][] data type.

For further information, see [Real Literals][].

### Single literal

If it is necessary to create a floating-point literal of type [Single][] with a value greater than or equal to [Single.MinValue][] and less than or equal to [Single.MaxValue][], enter the number in a property of type [Single][].

```text
1234.456
```

Do not use the C# suffix `f` or `F`. In the [Expression Editor][], that suffix is required to create a [Single][]; in the Literal Editor the property's data type is already [Single][]. Expression syntax is not supported within the Literal Editor for the [Single][] data type.

For further information, see [Real Literals][].

### Boolean literal

A [Boolean][] literal represents a truth-value of either `true` or `false`. In the Literal Editor the value is selected from a dropdown.

```text
true
```

```text
false
```

Expression syntax is not supported within the Literal Editor for the [Boolean][] data type.

For further information, see [Boolean Literals][].

### DateTime literal

The Literal Editor is available for [Input properties][] where the data type is [DateTime][]. Expression syntax is not supported within the Literal Editor for the [DateTime][] data type.

For further information, see [DateTime][].

### DateTimeOffset literal

The Literal Editor is available for [Input properties][] where the data type is [DateTimeOffset][]. Expression syntax is not supported within the Literal Editor for the [DateTimeOffset][] data type.

A [DateTimeOffset][] is created by filling in the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `Year` | [Int32][] | The year expressed as an [Int32][] value between `1` and `9999`. |
| `Month` | [Int32][] | The month expressed as an [Int32][] value between `1` and `12`. |
| `Day` | [Int32][] | The day expressed as an [Int32][] value between `1` and the number of days in `Month`. |
| `Hour` | [Int32][] | The hour expressed as an [Int32][] value between `0` and `23`. |
| `Minute` | [Int32][] | The minute expressed as an [Int32][] value between `0` and `59`. |
| `Second` | [Int32][] | The second expressed as an [Int32][] value between `0` and `59`. |
| `Millisecond` | [Int32][] | The millisecond expressed as an [Int32][] value between `0` and `999`. |
| `Offset` | [TimeSpan][] | The UTC offset expressed as a [TimeSpan][] value between `-14` hours and `14` hours. If the value is outside that range, an [InvalidPropertyValueException][] is thrown. |

For further information, see [DateTimeOffset][].

### TimeSpan literal

The Literal Editor is available for [Input properties][] where the data type is [TimeSpan][]. Expression syntax is not supported within the Literal Editor for the [TimeSpan][] data type.

A [TimeSpan][] is created by filling in the following properties:

| Property | Data Type | Notes |
|-|-|-|
| `Days` | [Int32][] | The days expressed as an [Int32][] value. Can be positive or negative. |
| `Hours` | [Int32][] | The hours expressed as an [Int32][] value. Can be positive or negative. |
| `Minutes` | [Int32][] | The minutes expressed as an [Int32][] value. Can be positive or negative. |
| `Seconds` | [Int32][] | The seconds expressed as an [Int32][] value. Can be positive or negative. |
| `Milliseconds` | [Int32][] | The milliseconds expressed as an [Int32][] value. Can be positive or negative. |

The specified `Days`, `Hours`, `Minutes`, `Seconds`, and `Milliseconds` are combined into a single interval. If the resulting value is less than [TimeSpan.MinValue][] or greater than [TimeSpan.MaxValue][], an [ArgumentOutOfRangeException][] is thrown.

For further information, see [TimeSpan][].

### Enum literal

When a block [Input property][Input properties] expects an [enum][What is an Enum?], the Literal Editor is usually available. The editor lists the defined members by name so a value can be picked without writing expression syntax. If the values of a parameter are constrained (for example a [Boolean][] or [enum][What is an Enum?]), the editor is displayed as a dropdown.

For example, a property of type [DayOfWeek][] accepts literals such as `Sunday` or `Monday` (the member name only, not `DayOfWeek.Sunday`):

```text
Sunday
```

The example above becomes:

```text
DayOfWeek.Sunday
```

The same pattern applies to other enums, for example `GET` for [RequestVerb][] or `None` for [StringSplitOptions][]. Combined flag values cannot be selected in the Literal Editor; use the [Expression Editor][] instead.

For further information, see [What is an Enum?][] and [Enumeration types][].

### Object literal

Currently, creating an [Object][] using literal syntax is not supported. The Literal Editor is not available for [Input properties][] where the data type is `Object`.

Objects can be created using expressions; for more information see [Constructor expressions][].

### Dictionary literal

Currently, creating a [Dictionary][] using literal syntax is not supported. The Literal Editor is not available for [Input properties][] where the data type is `Dictionary<TKey, TItem>`.

Dictionaries can be created using expressions; for more information see [Create a Dictionary&lt;TKey, TItem&gt;][Create a Dictionary] and [Dictionary literal][Expression Dictionary literal].

### Structure literal

Currently, creating a [Structure][] using literal syntax is not supported. The Literal Editor is not available for [Input properties][] where the data type is `Structure`.

Structures can be created using expressions; for more information see [Create a Structure][].

### List literal

Currently, creating a [List][] using literal syntax is not supported. The Literal Editor is not available for [Input properties][] where the data type is `List<TItem>`.

Lists can be created using expressions; for more information see [Create a List&lt;TItem&gt;][Create a List].

### Complex types

{{< figure src="/images/Literal Editor - Complex Types.png" >}}

When constructing a [complex data type][] (for example [HttpRequest][], [ClientAuthentication][], or [ServerDetails][]), the Literal Editor displays one or more sub-editors so that each parameter needed to construct the object can be configured. Each of these parameter editors may be changed to a Literal Editor, [Expression Editor][], or [Variable Editor][].

If a parameter editor is changed to a Literal Editor, additional sub-parameters and associated sub-editors for that parameter may be displayed, depending on the parameter being configured. Types that have constructors with no parameters are not supported in the Literal Editor.

The example above shows the creation of an [HttpRequest][] using the Literal Editor. Nested parameters such as [uri][] and [body][] may use the [Expression Editor][], while constrained parameters such as [verb][] (an [enum][What is an Enum?]) are shown as a dropdown.

How to create a [complex data type][] in the Literal Editor is documented on that type's page, typically under **Remarks** as a table of properties to fill in (for example [ServerDetails][]).

## Switching Type

When the Literal Editor is selected for a [block property][], it initially defaults to one of the applicable data types for that property. The currently selected object data type (`CurrentType`) may be displayed by hovering over the property name.

{{< figure src="/images/Literal Editor - CurrentType.png" >}}

The example above shows `CurrentType: HttpRequest` on a property whose declared data type is `TValue`.

The `CurrentType` may be changed by clicking the ellipsis to the right of the property name. This enables the Literal Type editor in place of the property name, showing the `CurrentType`. Deleting all of the `CurrentType` text in the Literal Type editor displays a dropdown listing the object types that can be configured for this property.

{{< figure src="/images/Literal Editor - List Types.png" >}}

The objects displayed in the dropdown may be filtered by entering text in the Literal Type editor field; only those objects that form a case-insensitive partial text match are displayed.

{{< figure src="/images/Literal Editor - Switch Type.png" >}}

Click an object type from the dropdown to select it as the `CurrentType`.

{{< figure src="/images/Literal Editor - Different Editors.png" >}}

When a different object type is selected, a new set of editors is displayed to reflect the parameters for that object. The example above shows `CurrentType` switched to [ClientAuthentication][], with sub-editors for [clientId][] and [clientSecret][].

## Remarks

### Expression syntax is not supported

Expression syntax is not supported within the Literal Editor for [basic data types][basic data type] such as [String][], [Int32][], [Boolean][], [DateTime][], [DateTimeOffset][], and [TimeSpan][]. Use the [Expression Editor][] when the value must be calculated from [operators][], [variables][Variables], or [method][methods] calls.

### Availability depends on the data type

The Literal Editor is not available for every data type or every [block property][]. Each data type page documents support under **Property Editor Support**.

### Known Limitations

* There is no support in the Literal Editor for [collection][Collections] types (including [List][], [Dictionary][], and [Structure][]) or for types that have constructors with no parameters.
* Creating an [Object][] using literal syntax is not supported.
* Combined flag [enum][What is an Enum?] values cannot be selected; use the [Expression Editor][] instead (for example [StringSplitOptions][]).

## See Also

### Related Concepts

- [Property Editors][property editor]
- [Expression Editor][]
- [Variable Editor][]
- [What is a Data Type?][]
- [What is an Enum?][]
- [Variables][]
- [Input Properties][Input properties]

### Related Blocks

- [All Blocks][Blocks]

### Related Data Types

- [All Data Types][Reference Data Types]
- [Boolean][]
- [ClientAuthentication][]
- [DateTime][]
- [DateTimeOffset][]
- [TimeSpan][]
- [HttpRequest][]
- [Int32][]
- [String][]

### External Documentation

- [Boolean Literals][]
- [Integer Literals][]
- [Real Literals][]
- [String Literals][]
- [Enumeration types][]
- [Constructors][]
- [Built-in types][]

[literal values]: {{< ref "#literal-values" >}}
[String literal]: {{< ref "#string-literal" >}}
[Int16 literal]: {{< ref "#int16-literal" >}}
[Int32 literal]: {{< ref "#int32-literal" >}}
[Int64 literal]: {{< ref "#int64-literal" >}}
[Double literal]: {{< ref "#double-literal" >}}
[Single literal]: {{< ref "#single-literal" >}}
[Boolean literal]: {{< ref "#boolean-literal" >}}
[DateTime literal]: {{< ref "#datetime-literal" >}}
[DateTimeOffset literal]: {{< ref "#datetimeoffset-literal" >}}
[TimeSpan literal]: {{< ref "#timespan-literal" >}}
[Enum literal]: {{< ref "#enum-literal" >}}
[Object literal]: {{< ref "#object-literal" >}}
[Dictionary literal]: {{< ref "#dictionary-literal" >}}
[Structure literal]: {{< ref "#structure-literal" >}}
[List literal]: {{< ref "#list-literal" >}}
[Complex types]: {{< ref "#complex-types" >}}

[property editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Constructor expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.ConstructorExpressions" >}}
[Expression Dictionary literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.DictionaryLiteral" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}

[Input properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[block property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.MainDoc" >}}

[Data Type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.MainDoc" >}}
[What is a Data Type?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[basic data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.BasicDataTypes" >}}
[complex data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.ComplexDataTypes" >}}

[What is an Enum?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.WhatIsAnEnum.MainDoc" >}}

[Reference Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}
[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[Collections]: {{< url path="Cortex.Reference.DataTypes.Collections.MainDoc" >}}
[Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc" >}}
[Create a Dictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.Dictionary.CreateNew" >}}
[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[Create a List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.CreateNew" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[Create a Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.CreateNew" >}}
[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[DateTime]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[DayOfWeek]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DayOfWeek.MainDoc" >}}
[TimeSpan]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.TimeSpan.MainDoc" >}}
[TimeSpan.MaxValue]: {{< url path="MSDocs.DotNet.Api.System.TimeSpan.MaxValue" >}}
[TimeSpan.MinValue]: {{< url path="MSDocs.DotNet.Api.System.TimeSpan.MinValue" >}}
[ArgumentOutOfRangeException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentOutOfRangeException" >}}
[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[InvalidPropertyValueException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.InvalidPropertyValueException.MainDoc" >}}
[ClientAuthentication]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.MainDoc" >}}
[clientId]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.ClientId" >}}
[clientSecret]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.ClientSecret" >}}
[RequestVerb]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.MainDoc" >}}
[HttpRequest]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.MainDoc" >}}
[uri]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Uri" >}}
[verb]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Verb" >}}
[body]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Body" >}}
[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}
[Double]: {{< url path="Cortex.Reference.DataTypes.Numbers.Double.MainDoc" >}}
[Single]: {{< url path="Cortex.Reference.DataTypes.Numbers.Single.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Create a String]: {{< url path="Cortex.Reference.DataTypes.Text.String.CreateNew" >}}
[StringSplitOptions]: {{< url path="Cortex.Reference.DataTypes.Text.StringSplitOptions.MainDoc" >}}

[Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[Boolean Literals]: {{< url path="MSDocs.CSharp.BooleanLiterals" >}}
[Integer Literals]: {{< url path="MSDocs.CSharp.IntegerLiterals" >}}
[Real Literals]: {{< url path="MSDocs.CSharp.RealLiterals" >}}
[String Literals]: {{< url path="MSDocs.CSharp.StringLiterals" >}}
[Enumeration types]: {{< url path="MSDocs.CSharp.EnumerationTypes" >}}
[Constructors]: {{< url path="MSDocs.CSharp.Constructors" >}}
[Built-in types]: {{< url path="MSDocs.CSharp.BuiltinTypes" >}}
[Int16.MaxValue]: {{< url path="MSDocs.DotNet.Api.System.Int16.MaxValue" >}}
[Int16.MinValue]: {{< url path="MSDocs.DotNet.Api.System.Int16.MinValue" >}}
[Int32.MaxValue]: {{< url path="MSDocs.DotNet.Api.System.Int32.MaxValue" >}}
[Int32.MinValue]: {{< url path="MSDocs.DotNet.Api.System.Int32.MinValue" >}}
[Int64.MaxValue]: {{< url path="MSDocs.DotNet.Api.System.Int64.MaxValue" >}}
[Int64.MinValue]: {{< url path="MSDocs.DotNet.Api.System.Int64.MinValue" >}}
[Single.MaxValue]: {{< url path="MSDocs.DotNet.Api.System.Single.MaxValue" >}}
[Single.MinValue]: {{< url path="MSDocs.DotNet.Api.System.Single.MinValue" >}}

[operators]: {{< url path="Cortex.Reference.Glossary.K-O.Operator" >}}
[methods]: {{< url path="Cortex.Reference.Glossary.K-O.Method" >}}
