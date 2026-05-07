---
title: "InvalidDefaultValuesException"
linkTitle: "InvalidDefaultValuesException"
description: "The exception thrown if an exception occurs when initialising the default value for a variable."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Flows.Execution.InvalidDefaultValuesException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown if an exception occurs when initialising the default value for a variable.

## Reasons

### Invalid Default Variable Value

The default value provided for a variable is invalid.

#### Message Format

```json
"Failed to initialise variables due to invalid default values. Please see the 'Variables' property for details on why each variable threw."
```

#### How to fix

Ensure that the variables shown in the `Variables` property have valid default values, by fixing the inner exception for each variable shown.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None
