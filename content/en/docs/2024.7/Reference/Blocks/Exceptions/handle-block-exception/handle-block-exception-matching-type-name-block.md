---
title: "Handle Block Exception Matching Type Name"
linkTitle: "Handle Block Exception Matching Type Name"
description: "Handles any exception thrown by the block it is connected to that matches a specified type name."
---

{{< figure src="/blocks/Cortex_Blocks_Exceptions_HandleBlockException_HandleBlockExceptionMatchingTypeNameBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Exceptions.HandleBlockException.HandleBlockExceptionMatchingTypeNameBlock)</p>

## Description

Handles any [Exception][Exception Property] thrown by the block it is connected to that matches a specified [Type Name][TypeName Property].

## Examples

### Handle Exception matching Type Name and save the Exception

This example will handle any exception thrown by the block it is connected to that contains `"PropertyNull"` in its fully qualified `TypeName`; saving the exception to a variable, so the flow execution can use it to make decisions or take further action.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of type names.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Type Name][TypeName Property] | `($)TypeName`, with value `"PropertyNull"` | `($)TypeName` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Exception][Exception Property] | `($)Exception`, with no value | `($)Exception` is a variable that will be set to a [dynamic][] value |

#### Result

The block will handle any exception containing `"PropertyNull"` in its fully qualified `TypeName` and save the exception to the `($)Exception` variable for use later in the flow execution.

E.g.

If the List property of the Add Item At Beginning list block was set to null, it would throw a [PropertyNullException][] when executed.

This exception's fully qualified `TypeName` is `"Cortex.Exceptions.Common.Property.PropertyNullException"`; therefore as we are checking for exceptions containing `"PropertyNull"` in their `TypeName`, this exception would be handled and saved to the `($)Exception` variable.

***

### Handle Exception matching Type Name and discard the Exception

This example is the same as the example above, except it does not save the exception to a variable, as the flow execution does not need it to make decisions or take further action.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of type names.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Type Name][TypeName Property] | `($)TypeName`, with value `"PropertyNull"` | `($)TypeName` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Exception][Exception Property] | `($)_`, with no value | `($)_` is a built-in variable that indicates the flow execution does not need to save the exception, so it can be discarded |

#### Result

The block will handle any exception containing `"PropertyNull"` in its fully qualified `TypeName`, but will not save the exception as the `($)_` variable indicates it is not needed and can be discarded.

E.g.

If the List property of the Add Item At Beginning list block was set to null, it would throw a [PropertyNullException][] when executed.

This exception's fully qualified `TypeName` is `"Cortex.Exceptions.Common.Property.PropertyNullException"`; therefore as we are checking for exceptions containing `"PropertyNull"` in their `TypeName`, this exception would be handled, but because the `($)_` variable is used it will not be saved to the `($)Exception` variable.

For more infomation about using the built-in `($)_` variable, please see [Discarding Output Properties][].

***

### Exception does not match Type Name

This example will not handle an exception thrown by the block it is connected to that does not contain `"PropertyNull"` in its fully qualified `TypeName`; the exception will be passed to the next exception handling block.

It performs a [case-sensitive, culture-insensitive][Ordinal] comparison of type names.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Type Name][TypeName Property] | `($)TypeName`, with value `"PropertyNull"` | `($)TypeName` is a variable of type [String][] |
| [Comparison Type][ComparisonType Property] | `($)ComparisonType`, with value `StringComparison.Ordinal` | `($)ComparisonType` is a variable of type [StringComparison][] |
| [Exception][Exception Property] | `($)Exception`, with no value | `($)Exception` is a variable that won't be set |

#### Result

The block will not handle any exception that does not contain `"PropertyNull"` in its fully qualified `TypeName`; instead the exception will be passed to the next exception handling block.

E.g.

If the List property of the Add Item At Beginning list block was set to a read-only List, it would throw a [CannotModifyReadOnlyListException][] when executed.

This exception's fully qualified `TypeName` is `"Cortex.Exceptions.Lists.CannotModifyReadOnlyListException"`; therefore as we are checking for exceptions containing `"PropertyNull"` in their `TypeName`, this exception would not be handled.

***

## Properties

### Type Name

The [Type Name][TypeName Property] the [Exception's][Exception Property] fully qualified `TypeName` must contain for this block to handle the [Exception][Exception Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Comparison Type

The [Comparison Type][ComparisonType Property] specifying the rules used to determine whether [Type Name][TypeName Property] is contained in the [Exception's][Exception Property] fully qualified `TypeName`.

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Equality][].

| | |
|--------------------|---------------------------|
| Data Type | [StringComparison][] |
| Property Type | [Input][] |
| Is [Advanced][] | `true` |
| Default Editor | [Literal][] |
| Default Value | `Ordinal` |

### Exception

The [Exception][Exception Property] if it is handled by the block.

[Exception][Exception Property] can be any [Exception data type][Exception].

If the flow execution does not need the exception, it can be discarded by assigning the built-in `($)_` variable.

For more infomation about using the built-in `($)_` variable, please see [Discarding Output Properties][].

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)_` to [discard][] |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Comparison Type][ComparisonType Property] is not one of the specified [StringComparison][] types (e.g. `(StringComparison)10`). |
| [PropertyEmptyException][] | Thrown when [Type Name][TypeName Property] is empty (i.e. `""`). |
| [PropertyNullException][] | Thrown when [Type Name][TypeName Property] is `null`. |

## Remarks

### Comparison Types

For information about the [supported values][ComparisonTypes] for the [Comparison Type][ComparisonType Property] property and examples of how it is determined whether two pieces of text match, please see [Equality][].

### Chaining Exception handling blocks

Blocks that handle block exceptions can be chained together so different exceptions can be handled separately. The blocks are listed below:

* [Handle Block Exception Matching Message][]
* [Handle Block Exception Matching Messages][]
* [Handle Block Exception Matching Type Name][]
* [Handle Block Exception Matching Type Names][]
* [Handle Block Exception][]

{{< figure src="/images/chaining-handle-block-exception-blocks.png" >}}

Each block has an input port on its left-hand side and, with the exception of the [Handle Block Exception][] block, also have an output port on their right-hand side; this is so they can pass any exception they do not handle to the next block.

As the [Handle Block Exception][] block handles any exception, it does not require the output port.

For more information about chaining of exception handling blocks and passing of exceptions, please see [Exception Handling][].

### Why does the Exception property return a dynamic data type?

The decision for the [Exception][Exception Property] to return a [dynamic data type][dynamic] rather than an [Exception data type][Exception], was to avoid users having to [cast][Object Casting] the exception to its correct type to be able to use all of its properties.

As a result, any issues with using the [Exception data type][Exception] (i.e. trying to access a property it does not have) will not be reported as messages when trying to debug the flow; they will only be discovered when the flow execution reaches the part of the flow with the issue.

If it is desirable to have any issues reported as messages when trying to debug the flow, the user can [cast][Object Casting] the exception to its correct type.

### Using the built-in ($)_ variable to discard the Exception from being saved

Sometimes when an exception occurs the flow execution wants to use the exception to make decisions or take further action. However, there are occasions when the exception is not needed, and being forced to create another variable to save the exception is extra work for no benefit. In these circumstances it is possible to use the built-in `($)_` variable to indicate the exception does not need to be saved.

For more infomation about using the built-in `($)_` variable, please see [Discarding Output Properties][].

[TypeName Property]: {{< ref "#type-name" >}}
[ComparisonType Property]: {{< ref "#comparison-type" >}}
[Exception Property]: {{< ref "#exception" >}}
[discard]: {{< ref "#using-the-built-in-_-variable-to-discard-the-exception-from-being-saved" >}}

[Handle Block Exception]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockException.MainDoc" >}}
[Handle Block Exception Matching Message]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingMessage.MainDoc" >}}
[Handle Block Exception Matching Messages]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingMessages.MainDoc" >}}
[Handle Block Exception Matching Type Name]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeName.MainDoc" >}}
[Handle Block Exception Matching Type Names]: {{< url path="Cortex.Reference.Blocks.Exceptions.HandleBlock.HandleBlockExceptionMatchingTypeNames.MainDoc" >}}
[Discarding Output Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.DiscardingOutputs" >}}
[Exception Handling]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[Object Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.MainDoc" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Equality]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.MainDoc" >}}
[ComparisonTypes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.MainDoc" >}}
[Ordinal]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Equality.ComparisonTypes.Ordinal" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[CannotModifyReadOnlyListException]: {{< url path="Cortex.Reference.Exceptions.Lists.CannotModifyReadOnlyListException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[StringComparison]: {{< url path="Cortex.Reference.DataTypes.Text.StringComparison.MainDoc" >}}
[Exception]: {{< url path="Cortex.Reference.DataTypes.Exceptions.Exception.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
