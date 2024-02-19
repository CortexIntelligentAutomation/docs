---
title: "PropertyNotNullableException"
linkTitle: "PropertyNotNullableException"
description: "The exception thrown when a property that requires a nullable value is given a non-nullable value."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Decisions.PropertyNotNullableException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a property that requires a nullable value is given a non-nullable value.

## Reasons

### Invalid data type for property provided

The data type provided for the property is one that does not allow null values, e.g. [Int32][], [Boolean][], [Char][] etc.

#### Message Format

The format of the message is as follows:

[//]: <> (This is also a comment.)

```json
"'<property-name>' cannot accept data types that do not allow null values (e.g. Int32, Boolean, Char, etc.); it must be provided a data type which allows null values.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property which must have a nullable type.

#### How to fix

Ensure that the type of the value provided to the affected property is one that is nullable.

## Remarks

### Known Limitations

None

## See Also
  
### External Documentation

None

[Message]: {{< ref "#message" >}}

[Blocks]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Block Timeout]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty">}}
[Executions]: {{<url path ="Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc">}}
[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
[Flows]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc">}}
[Workspaces]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc">}}

[Boolean]: {{<url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc">}}
[Char]: {{<url path="Cortex.Reference.DataTypes.Text.Char.MainDoc">}}
[Guid]: {{<url path="Cortex.Reference.DataTypes.Other.Guid.MainDoc">}}
[Int32]: {{<url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc">}}
[String]: {{<url path="Cortex.Reference.DataTypes.Text.String.MainDoc">}}

[WhatIsABlock]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc">}}
[WhatIsAnExecution]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc">}}
[WhatIsAFlow]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc">}}
[WhatIsAWorkspace]: {{<url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc">}}
