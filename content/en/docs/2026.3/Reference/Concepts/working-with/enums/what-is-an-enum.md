---
title: "What is an Enum?"
linkTitle: "What is an Enum?"
description: "Overview of enumeration (enum) data types in CORTEX, including how they are defined, edited in flows, cast, and displayed when debugging."
weight: 1
---

# {{% param title %}}

## Summary

An **enum** (enumeration) is a [value type][] that defines a fixed set of named constants, each backed by an underlying numeric value (typically [Int32][]). In {{% ctx %}}, enums follow C# and .NET rules: they represent a single choice from a defined list of options and cannot be `null` unless wrapped in [Nullable&lt;T&gt;][].

Enum data types are used throughout {{% ctx %}} for block properties that accept a specific set of values — for example a day of the week ([DayOfWeek][]), a date and time component ([DateTimeComponentType][]), how text is matched ([SearchOptions][]), or an HTTP result code ([HttpStatusCode][]). Each enum is documented on its own data type page with a full list of members, default value, and supported casts.

For how enums relate to other classifications of data types, see [What is a Data Type?][]. For casting between enums and other types, see [Object Casting][].

## Anatomy of an Enum

Every enum documented in {{% ctx %}} shares the same structure. Each member has:

| Part | Description | Example ([DayOfWeek][]) |
| --- | --- | --- |
| **Type name** | The enum data type | `DayOfWeek` |
| **Full name** | The .NET namespace and type | `System.DayOfWeek` |
| **Member name** | A [String][] identifier for one option | `Sunday` |
| **Member value** | The underlying [Int32][] integer | `0` |
| **Qualified member** | Type and member combined | `DayOfWeek.Sunday` |
| **Default value** | Value used when none is specified | `DayOfWeek.Sunday` (value `0`) |

On each enum's data type page, the **Summary** table lists the category, full name, default value, **Can be used as** (implicit casts, usually [Object][] and [dynamic][]), and **Can be cast to** (explicit casts to numeric types). The **Values** section (where present) describes each member's name, numeric value, and purpose.

Enums are [value types][value type]: assigning an enum from one [variable][] to another copies the value. Equality compares the underlying numeric value. See [Object Equality][].

## Enum Types in {{% ctx %}}

{{% ctx %}} includes enums from the .NET base class library and enums defined for the platform. They are grouped by category under [All Data Types][]. Common examples include:

| Category | Examples | Typical use |
| --- | --- | --- |
| Date & Time | [DayOfWeek][], [DateTimeComponentType][] | Extract or compare parts of a date and time |
| Text | [SearchOptions][], [StringSplitOptions][], [StringComparison][] | Control search, split, and comparison behaviour |
| HTTP | [HttpStatusCode][], [RequestVerb][] | Represent status codes and request methods |
| Email | [EmailMessagePriority][], [EmailMessageBodyFormat][] | Message options and formats |
| Data | [DataCommandErrorCode][], [OracleMappingType][] | Database command and mapping options |
| Files & Folders | [ContentOptions][] | Options for folder content blocks |
| Logs | [EventSeverity][] | Severity levels for events |

## Working with Enums in Flows

### Literal Editor

When a block [Input][] property expects an enum, the [Literal Editor][] is usually available. The editor lists the defined members by name so you can pick a value without writing expression syntax.

For example, a property of type [DayOfWeek][] accepts literals such as `Sunday` or `Monday` (the member name only, not `DayOfWeek.Sunday`). The same pattern applies to platform enums such as `LiteralText` for [SearchOptions][].

Whether the Literal Editor is available for a given enum is documented under **Property Editor Support** on that enum's data type page.

### Expression Editor

The [Expression Editor][] supports full enum syntax:

* **Member access** — `DayOfWeek.Sunday`, `SearchOptions.Regex`
* **Numeric cast** — `(DayOfWeek)6` yields `DayOfWeek.Saturday`
* **Parse from text** — `(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Sunday")`
* **Create from number** — `(DayOfWeek)Enum.ToObject(typeof(DayOfWeek), 0)`
* **Convert to text** — `DayOfWeek.Sunday.ToString()` yields `"Sunday"`
* **Convert to number** — `(Int32)DayOfWeek.Sunday` yields `0`

See [Enum expressions][] in the Expression Editor documentation and the **Create**, **Convert to Text**, and **Convert to a Number** tables on individual enum data type pages (for example [DayOfWeek][]).

### Variable Details Viewer

When [debugging a flow][], enum values are shown in the [Variables Viewer][]:

* In the [Variables List][], a variable holding an enum is displayed as a [basic data type][] — typically the member name (for example `Sunday` for [DayOfWeek][]).
* In the [Variable Details Viewer][], the selected variable's name, type, and value are shown in JSON format.

How the value appears in the Variable Details Viewer depends on the stored type:

| Stored as | Typical display | Notes |
| --- | --- | --- |
| Native enum type (for example `DayOfWeek`) | Member name in the Variables List; JSON value in the Variable Details Viewer | Default behaviour for enum [variables][] |
| [Object][] or [dynamic][] holding an enum | May show the underlying numeric value or a generic object representation | The viewer reflects the runtime type of the stored value, not the original enum type |
| Out-of-range cast (for example `(DayOfWeek)1000`) | Numeric value `1000` with no matching member name | Valid in C# but does not correspond to a defined member; `ToString()` may return `"1000"` instead of a member name |

To convert an enum to text or JSON explicitly, use `ToString()`, [Convert Object To Text][], or [Convert Object To Json][] — see the conversion tables on each enum's data type page. [Convert Object To Text][] returns the member name (for example `"Sunday"`); [Convert Object To Json][] returns the underlying number as text (for example `"0"`).

## Casting and Converting Enums

Enums integrate with {{% ctx %}} casting rules as described in [Object Casting][].

### Enum and numeric types

Enum members are stored as integers. You can [explicitly cast][Explicit Casting] between an enum and its underlying numeric type:

| Direction | Example | Result |
| --- | --- | --- |
| Number to enum | `(DayOfWeek)6` | `DayOfWeek.Saturday` |
| Enum to number | `(Int32)DayOfWeek.Saturday` | `6` |
| Variable to enum | `(DayOfWeek)($)Int` where `($)Int` is `6` | `DayOfWeek.Saturday` |

When comparing an enum to a number, cast one side so both operands share a type — for example `(Int32)DayOfWeek.Sunday == 0` or `($)MyDay == (DayOfWeek)($)DayNumber`.

Casting a number to an enum when no member has that underlying value (for example `(DayOfWeek)1000`) still produces a value at runtime in C#, but it does not match a named member. Prefer defined members or validate the result when using numeric casts.

### Enum and text

You cannot [explicitly cast][Explicit Casting] a [String][] directly to an enum. Parse the text instead:

```csharp
(DayOfWeek)Enum.Parse(typeof(DayOfWeek), "Sunday")
```

To convert an enum to text, use `ToString()`, `Convert.ToString()`, or [Convert Object To Text][].

### Enum and Object or dynamic

Any enum can be used where [Object][] or [dynamic][] is expected without a cast. To recover the enum type from [Object][], use an explicit cast — for example `(DayOfWeek)($)MyObject`. Values held as [dynamic][] usually do not require a cast for member access.

## Flag Enums

Some .NET enums are **flag enums**: members are assigned powers of two so multiple options can be combined with the bitwise OR operator (`|`). [StringSplitOptions][] is an example — `StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries` combines both options.

In {{% ctx %}}:

* Combined flag values can be created in the [Expression Editor][] using `|` (see [StringSplitOptions][]).
* The [Literal Editor][] typically allows only a **single** member to be selected, not a combined flag value. For combined flags, use an expression.

For general C# guidance on flag enums, see [Enumeration types (C#)][MS Enumeration Types].

## Remarks

### Enum names are not localised

Enum member names are fixed C# identifiers (for example `DayOfWeek.Sunday`). They are not translated for different cultures — `DayOfWeek.Sunday` always displays as `Sunday`, not `Dimanche` for French. Localized display applies to date and time **formatting** (see [Date and Time Formatting][] and [Culture][]), not to enum member names.

### Known Limitations

* The [Literal Editor][] does not support combined flag enum values; use the [Expression Editor][] instead (for example [StringSplitOptions][]).
* Enum member names are not localised.
* Casting a numeric value outside the defined members produces a value with no named member (for example `(DayOfWeek)1000`).
* You cannot cast [String][] to enum directly; use `Enum.Parse` or equivalent.
* Whether the Literal Editor is available varies by enum; see each data type page.

## See Also

### Related Concepts

* [What is a Data Type?][]
* [Object Casting][]
* [Object Equality][]
* [What is a Variable?][]
* [Enum expressions][] — expression syntax for enums
* [Date and Time Formatting][] — localized date and time text (distinct from enum names)

### Related Data Types

* [ContentOptions][]
* [DateTimeComponentType][]
* [DataCommandErrorCode][]
* [DayOfWeek][]
* [EmailMessageBodyFormat][]
* [EmailMessagePriority][]
* [EventSeverity][]
* [HttpStatusCode][]
* [Int32][]
* [OracleMappingType][]
* [RequestVerb][]
* [SearchOptions][]
* [String][]
* [StringComparison][]
* [StringSplitOptions][]

### Related Blocks

* [Set Variable][]
* [Convert Object To Text][]
* [Convert Object To Json][]
* [Get Date Time Component][]

### External Documentation

* [System.Enum class][MS System Enum]
* [Enumeration types (C#)][MS Enumeration Types]
* [Instantiating an enumeration type][MS Instantiating Enum]
* [Formatting enumeration values][MS Formatting Enum]

[value type]: {{< ref "#anatomy-of-an-enum" >}}

[What is a Data Type?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[basic data type]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.WhatIsADataType.MainDoc" >}}
[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Object Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectEquality.MainDoc" >}}
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}

[Literal Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Enum expressions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.EnumExpressions" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[debugging a flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.ExecutionsInDevelopment.MainDoc" >}}
[Variables Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer.VariablesViewer" >}}
[Variables List]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer.VariablesList" >}}
[Variable Details Viewer]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.RightPanel.ExecutionViewer.VariableDetailsViewer" >}}

[Date and Time Formatting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.MainDoc" >}}
[Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.MainDoc" >}}

[All Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" >}}

[Nullable&lt;T&gt;]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[DayOfWeek]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DayOfWeek.MainDoc" >}}
[DateTimeComponentType]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeComponentType.MainDoc" >}}
[SearchOptions]: {{< url path="Cortex.Reference.DataTypes.Text.SearchOptions.MainDoc" >}}
[StringSplitOptions]: {{< url path="Cortex.Reference.DataTypes.Text.StringSplitOptions.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[HttpStatusCode]: {{< url path="Cortex.Reference.DataTypes.Http.HttpStatusCode.MainDoc" >}}
[RequestVerb]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.MainDoc" >}}
[EmailMessagePriority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.MainDoc" >}}
[EmailMessageBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}
[DataCommandErrorCode]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommandErrorCode.MainDoc" >}}
[OracleMappingType]: {{< url path="Cortex.Reference.DataTypes.Data.OracleMappingType.MainDoc" >}}
[ContentOptions]: {{< url path="Cortex.Reference.DataTypes.FilesAndFolders.ContentOptions.MainDoc" >}}
[EventSeverity]: {{< url path="Cortex.Reference.DataTypes.Logs.EventSeverity.MainDoc" >}}

[Set Variable]: {{< url path="Cortex.Reference.Blocks.Variables.SetVariable.SetVariable.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Get Date Time Component]: {{< ref "../../../Blocks/date-and-time/get-date-time/get-date-time-component-block.md" >}}

[MS System Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[MS Enumeration Types]: {{< url path="MSDocs.CSharp.EnumerationTypes" >}}
[MS Instantiating Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[MS Formatting Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}
