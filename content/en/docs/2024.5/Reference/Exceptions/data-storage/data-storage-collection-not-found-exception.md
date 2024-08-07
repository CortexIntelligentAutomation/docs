---
title: "DataStorageCollectionNotFoundException"
linkTitle: "DataStorageCollectionNotFoundException"
description: "The exception thrown when a data storage collection could not be found."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.DataStorage.DataStorageCollectionNotFoundException)</p>

## Description

The exception thrown when an operation attempts to retrieve a [Data Storage Collection][] that does not exist in the [Scope][] specified by the [ScopeDefinition][].

## Reasons

### Data Storage Collection Could Not Be Found

The [Data Storage Collection][] could not be found in the [Scope][] specified by the [ScopeDefinition][].

#### Message Format

```json
"The '<collection-name>' collection was not found. 
Please click the HelpLink for more information on how to fix this."
```

where:

- `<collection-name>` will be the name of the collection that could not be found (e.g. `"users"`).

#### How to fix

Ensure the provided [Data Storage Collection][] exists. A [Data Storage Collection][] can be created using the [Create Collection][] block.

## Properties

### Exception Type

The type of the exception (i.e. `DataStorageCollectionNotFoundException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception:
- `<collection-name>` will be replaced with the name of the collection.

| | |
|-----------|------------|
| Data Type | [String][] |

### Scope

The scope of the collection specified.

| | |
|-----------|---------------------------|
| Data Type | [Scope][] |

### CollectionName

The name of the collection that could not be found within the [Scope][] specified by the [ScopeDefinition][] provided.

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

* [Scope][]
* [ScopeDefinition][]
* [String][]

### Related Concepts

* [Exceptions][]

### Related Blocks

- Data Storage
    - [Delete Data With Key][]
    - [Read Data With Key][]
    - [Write Data With Key][]

### External Documentation

None

[Create Collection]: {{< url path = "Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc">}}
[Delete Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.DeleteData.DeleteDataWithKeyBlock.MainDoc">}}
[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc">}}
[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc">}}
[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc">}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}
