---
title: "InvalidDefaultValuesException"
linkTitle: "InvalidDefaultValuesException"
description: "The exception thrown when the default value for a variable throws an exception during the initialisation process on a workspace."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Execution.InvalidDefaultValuesException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when the default value for a variable throws an exception during the initialisation process on a workspace.

## Reasons

### Invalid Default Variable Value

The default value provided for a variable in a workspace is invalid.

#### Message Format

```json
"Failed to initialise variables due to invalid default values. Please see the 'Variables' property for details on why each variable threw."
```

#### How to fix

Ensure that the variable shown in the `Variables` property have valid default values, by fixing the inner exception shown for each variable with an invalid default value.

## Remarks

### Known Limitations

None

## See Also

None
