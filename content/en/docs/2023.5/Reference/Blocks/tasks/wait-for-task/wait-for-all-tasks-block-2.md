---
title: "Wait For All Tasks"
linkTitle: "Wait For All Tasks"
description: "Waits for multiple Tasks to complete and returns their Results."
---

{{< figure src="/blocks/tasks-wait-for-task-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Tasks.WaitForTask.WaitForAllTasksBlock`2)</p>

## Description

Waits for all of the specified [Tasks][Tasks Property] to finish and returns a list of all [Results][Results Property].

## Examples

TODO

## Properties

### Tasks

The list of [Tasks][Tasks Property] being waited for.  
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[ITask][]&lt;[TResult][]&gt;&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Tasks` with no value |

### Results

The list of [Results][Results Property] of all the [Tasks][Tasks Property] being waited for.
  
| | |
|--------------------|---------------------------|
| Data Type | [IList][]&lt;[TResult][]&gt; |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Results` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyNullException][] | Thrown when [Tasks][Tasks Property] is `null`. |
| [PropertyEmptyException][] | Thrown when [Tasks][Tasks Property] is empty. |
| [PropertyContainsNullItemException][] | Thrown when one or more items in the list of [Tasks][Tasks Property] is `null`. |
| [AggregateTaskException][] | Thrown when one or more items in [Tasks][Tasks Property] throws an exception. |

[Tasks Property]: {{< ref "#tasks" >}}
[Results Property]: {{< ref "#results" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[TResult]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}

[IExecutionTask]: {{< url path="Cortex.Reference.DataTypes.Tasks.IExecutionTask.MainDoc" >}}
[ITask]: {{< url path="Cortex.Reference.DataTypes.Tasks.ITask.MainDoc" >}}
[IList]: {{< url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyContainsNullItemException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyContainsNullItemException.MainDoc" >}}
[AggregateTaskException]: {{< url path="Cortex.Reference.Exceptions.Tasks.AggregateTaskException.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}