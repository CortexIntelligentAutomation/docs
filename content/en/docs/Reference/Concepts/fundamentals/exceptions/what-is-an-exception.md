---
title: "What is an Exception?"
linkTitle: "What is an Exception?"
description: "This page describes the concept of an Exception"
weight: 1
---

# {{< param title >}}

## Summary

An Exception is an event that occurs during the execution of a [flow][Flows] that disrupts the standard process of the [flow][Flows] execution.

Exceptions can be raised in different ways:

- Misconfiguration in a block

- Unexpected responses from a third-party system

- Environmental issues

- Intentionally thrown with [Flow][Flows] logic. I.e. [Throwing Exceptions][]

Exceptions (sometimes referred to as "Errors") can be handled in different ways depending on how the exception was raised. See [Handling Exceptions][] for more detail on how to handle exceptions.

## Anatomy of an Exception

An Exception is comprised of the following elements:

| Element | Notes | Example |
|---------|---------|---------|
|Exception Name | Generated name based on the block that raised the exception | `Convert Date Time To Text Exception` |
| Exception Type | Machine parsable [Exception Message](#exception-message) | `InvalidPropertyValueException`
| [Exception Message](#exception-message) | Human readable [Exception Message](#exception-message) | `The value of the property could not be evaluated.`
| Inner Exception | More detailed information for the exception | `"Exception Type":"KeyNotFoundException","Message":"The given key 'Datetime' was not present in the dictionary."`|
| [Help Link](#help-links) | Help link for the relevant information in the Cortex Product Portal, External Reference Documentation, or a Custom generated URL | `https://v2022.docs.cortex-ia.com/docs/reference/exceptions/flows/blocks/invalid-property-value-exception` |

### Exception Message



### Help Links

#### Cortex

#### External

#### Custom

## Remarks

### Known Limitations

#### Return Characters

#### Copying Exception Text

## See Also

### Related Concepts

- [Handling Exceptions][]

- [Throwing Exceptions][]

- [Flows][]

- [Executions][]

### Related Data Types

### Related Blocks

[Handling Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.HandlingExceptions.MainDoc" >}}
[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.MainDoc" >}}
[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Flows.What-Is-A-Flow.MainDoc" >}}
[Throwing Exceptions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Exceptions.ThrowingExceptions.MainDoc" >}}
