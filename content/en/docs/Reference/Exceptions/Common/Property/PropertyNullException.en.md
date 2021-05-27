---
title: "PropertyNullException"
linkTitle: "PropertyNullException"
description: "The exception thrown when a property is provided with a `null` value, but a value is required."
date: 2020-05-13
---

# {{< param title >}}

<p class="namespace">(Cortex.Exceptions.Common.Property.PropertyNullException)</p>

The exception thrown when a property is provided with a `null` value, but a value is required.

The format of the exception message is as follows:  

```json
"<property-display-name> is null; it must be provided with a non-null value"
```

## How to fix

Provide a value for the property which is not `null`.
