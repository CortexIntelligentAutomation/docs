---
title: "Most Common"
linkTitle: "Most Common"
description: "Data types that are most commonly used."
weight: 10
---

## Data Types

A data type specifies the type and size of variable values.

The most commonly used data types are categorised and listed below:

| Category | Data Type                 | Size                              | Description |
|----------|---------------------------|-----------------------------------|-------------|
| | TimeSpan | | A value representing a time interval (duration of time or elapsed time) that is measured as a positive or negative number of days, hours, minutes, seconds, and milliseconds. It can be used wherever a TimePeriod is expected, and wll be converted to a TimePeriod automatically. |
| | DateTimeComponentType | | A value representing a component of a DateTimeOffset (e.g. Year, Month, Day). |
| Exceptions | Exception | Varies | The data type that all other exceptions inherit from TODO: Link to inheritence |
| Files & Folders | FileInformation | Varies | TODO |
| | FolderInformation | Varies | TODO |
| | ContentOptions | 4 bytes | TODO |
| | FileMatch | Varies | TODO |
| Json | JsonSerializerSettings |  | Settings used to control how to convert objects to Json and vice versa |
| | StringComparison | 4 bytes | TODO |
| | SearchOptions | 4 bytes | TODO |
| | IFormatProvider | Varies | TODO |
| | CultureInfo | Varies | TODO |
| | Encoding | Varies | TODO |
| | Guid | 16 bytes | TODO |

#### Nullable

### Lists

### Dictionaries

#### TimeSpan

#### DateTimeComponentType

#### Exception

#### FileInformation

#### FolderInformation

#### ContentOptions

#### FileMatch

#### JsonSerializerSettings

#### StringComparison

#### IFormatProvider

#### CultureInfo

            /// [Block Help Only] If the culture identifier is empty e.g (new CultureInfo("")), cultureInfo is set to InvariantCulture.
            
            /// [Block Help Only] If the culture does not exist, the operating system will create a custom culture using the culture identifier.
            
            /// [Block Help Only] As well as the default InvariantCulture you can also use the culture of the system (CultureInfo.CurrentCulture) or provide a new culture info (new CultureInfo("en-GB")).

            // Note about formatProvider and CultureInfo: If an invalid CultureInfo is provided (e.g. new CultureInfo("enaa")), a CultureNotFoundException will be thrown.

##### CurrentCulture

##### InvariantCulture

TODO: variable link, on page links, glossary, concept links etc.

[explicitly cast]: {{< url "Cortex.Reference.Concepts.LiteralVariablesExpressions.ExplicitlyCastAVariable" >}}

#### SearchOptions

#### Encoding

#### Guid
