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
"The key `<key-name>` is not present in in '`<collection-name>`', so cannot be retrieved.\r\nPlease click the HelpLink for more information on how to fix this."
```

where:

- `<key-name>` will be the name of the key that could not be found (e.g. `"user1"`)
- `<collection-name>` will be the name of the collection that the key could not be found on (e.g. `"users"`).

#### How to fix

Ensure the provided [Data Storage Collection][] exists.

## Properties

### Exception Type

The type of the exception (i.e. `KeyInDataStorageCollectionNotFoundException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception:

- `<key>` will be replaced with the specified key.
- `<collection-name>` will be replaced with the name of the collection.

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

The name of the collection the [Key][Key Property] was attempted to retrieve from.

| | |
|-----------|---------------------------|
| Data Type | [String][] |

### Key

The key that could not be found on the [Data Storage Collection][].

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
* [String][]

### Related Concepts

* [Exceptions][]

### Related Blocks

- Data Storage
    - [Read Data With Key][]

### External Documentation

None

[Key Property]: {{< ref "#key">}}

[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc">}}
[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}
