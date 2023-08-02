---
title: "DataStorageCollectionNotFoundException"
linkTitle: "DataStorageCollectionNotFoundException"
description: "The exception thrown when a data storage collection could not be found."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.DataStorage.DataStorageCollectionNotFoundException)</p>

## Description

The exception thrown when a [Data Storage Collection][] could not be found.

## Reasons

### Data Storage Collection Could Not Be Found

The provided [Data Storage Collection][] could not be found.

#### Message Format

```json
"Collection was not found."
```

#### How to fix

Ensure the provided [Data Storage Collection][] exists.

## Properties

### Exception Type

The type of the exception (i.e. `DataStorageCollectionNotFoundException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Tenant

The tenant specified on the [Scope][] provided.

| | |
|-----------|---------------------------|
| Data Type | [String][] |

### System

The system specified on the [Scope][] provided.

| | |
|-----------|---------------------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### CollectionName

The name of the collection that could not be found.

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
    * [Create Collection][]

### External Documentation

None

[Create Collection]: {{< url path = "Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBLock.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Core Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.MainDoc">}}
[Execution Service]: {{< url path="Cortex.Guides.CortexInnovation.ExecutionApplication.Services.MainDoc">}}
