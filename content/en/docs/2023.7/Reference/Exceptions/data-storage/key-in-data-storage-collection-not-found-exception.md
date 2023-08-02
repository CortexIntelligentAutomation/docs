---
title: "KeyInDataStorageCollectionNotFoundException"
linkTitle: "KeyInDataStorageCollectionNotFoundException"
description: "The exception thrown when an operation attempts to retrieve data from a  data storage collection using a key that does not exist in that collection."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.DataStorage.KeyInDataStorageCollectionNotFoundException)</p>

## Description

The exception thrown when an operation attempts to retrieve data from a  [Data Storage Collection][] using a key that does not exist in that collection.

## Reasons

### Data Storage Collection Could Not Be Found

The provided [Data Storage Collection][] could not be found.

#### Message Format

```json
"The key could not be found for this data storage collection."
```

#### How to fix

Ensure the provided [Data Storage Collection][] exists.

## Properties

### Exception Type

The type of the exception (i.e. `KeyInDataStorageCollectionNotFoundException`)

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

### CollectionName

The name of the collection the [Key][] was attempted to retrieve from.

| | |
|-----------|---------------------------|
| Data Type | [String][] |

### Key

The key that could not be found on the [Data Storage Collection][].

| | |
|-----------|---------------------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
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
