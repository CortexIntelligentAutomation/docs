---
title: "InvalidInputVariablesException"
linkTitle: "InvalidInputVariablesException"
description: "The exception thrown when trying to run a flow with invalid input variables."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Execution.InvalidInputVariablesException)</p>

## Description

The exception thrown when trying to run a [flow][] with invalid [Input Variables][].

## Reasons

### Missing Input Variables

This exception is thrown when a [flow][] is run and there are missing [Input Variables][]; any missing variables will be shown in the [InvalidVariableErrors][] property.

#### Message Format

The format of the [Message][] is as follows:

```json
"Couldn't initialize variable store because of invalid input variables."
```

#### How to fix

Add the variables referenced in [InvalidVariableErrors][].

### Extra Input Variables

This exception is thrown when a [flow][] is run and extra [Input Variables][] have been provided; any extra variables will be shown in the [InvalidVariableErrors][] property.

#### Message Format

The format of the [Message][] is as follows:

```json
"Couldn't initialize variable store because of invalid input variables."
```

#### How to fix

Remove the variables referenced in [InvalidVariableErrors][].

### Input Variables of an Invalid Type

This exception is thrown when a [flow][] is run and there are [Input Variables][] that are of an invalid type; any variables with an invalid type will be shown in the [InvalidVariableErrors][] property.

#### Message Format

The format of the [Message][] is as follows:

```json
"Couldn't initialize variable store because of invalid input variables."
```

#### How to fix

Ensure the value provided for the variables referenced in [InvalidVariableErrors][] is either the same type as, or can be implicitly cast to the type defined in the default value for that [Input Variable][Input Variables].

## Properties

### Exception Type

The type of the exception (i.e. `InvalidInputVariablesException`).

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### InvalidVariableErrors

A [List][]&lt;InputVariableError&gt; containing each invalid variable passed into the flow.

| | |
|-----------|----------|
| Data Type | [List][]&lt;InputVariableError&gt; |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

None

### Related Concepts

* [Flows][]
* [Variables][]
* [Exceptions][]

### Related Blocks

* Flows
  * [Run Flow][]
  * [Run Flow Async][]
  
### External Documentation

None

[Message]: {{< ref "#message" >}}
[InvalidVariableErrors]: {{< ref "#invalidvariableerrors" >}}

[Run Flow]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc" >}}
[Run Flow Async]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlowAsync.MainDoc" >}}

[List]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Input Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
