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
| | IFormatProvider | Varies | TODO |
| | CultureInfo | Varies | TODO |
| | Encoding | Varies | TODO |
| | Guid | 16 bytes | TODO |

#### Nullable

### Lists

### Dictionaries

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

#### Encoding

#### Guid
