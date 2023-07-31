---
title: "ServiceUnavailableException"
linkTitle: "ServiceUnavailableException"
description: "The exception thrown when a service is unavailable."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Services.ServiceUnavailableException)</p>

## Description

The exception thrown when a service is unavailable.

## Reasons

### Service is Unavailable

This exception indicates that there is an issue with the service.

#### Message Format

```json
"The <service> was unavailable."
```

where `<service>` will be the name of the service.

#### How to fix

Ensure the specified service exists and is healthy.

## Properties

### Exception Type

The type of the exception (i.e. `ServiceUnavailableException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Service Name

The name of the service that had an issue.

| | |
|-----------|---------------------------|
| Data Type | [String][] |

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

* [String][]

### Related Concepts

* [Exceptions][]

### Related Blocks

* Data Storage
    * [Create Collection Block][]

### External Documentation

None
[Create Collection Block]: {{< url path = "Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBLock.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
