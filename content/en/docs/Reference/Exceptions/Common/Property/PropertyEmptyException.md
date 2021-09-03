---
title: "PropertyEmptyException"
linkTitle: "PropertyEmptyException"
description: "The exception thrown when a property is provided with an empty value, but a value is required."
---

# {{< param title >}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyEmptyException)</p>

The exception thrown when a property is provided with an empty value, but a value is required.

The format of the exception message is as follows:  

```json
TODO: "<property-display-name> is null; it must be provided with a non-null value"
```

## How to fix

Provide a value for the property which is not empty.
