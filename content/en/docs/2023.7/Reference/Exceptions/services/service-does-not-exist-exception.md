---
title: "ServiceDoesNotExistException"
linkTitle: "ServiceDoesNotExistException"
description: "The exception thrown when a service does not exist."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Services.ServiceDoesNotExistException)</p>

## Description

The exception thrown when either a [Core Service][] or [Execution Service][] does not exist.

## Reasons

### Service Does Not Exist

The service does not exist.

#### Message Format

```json
"The '<service-name>' service does not exist."
```

where:
- `<service-name>` will be the name of the service in Service Fabric Explorer (e.g. fabric:/Core/Services/DataStorage).

#### How to fix

Ensure the specified service exists.

## Properties

### Exception Type

The type of the exception (i.e. `ServiceDoesNotExistException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

For this exception:
- `<service-name>` will be replaced with the name of the service.

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

### Service Name

The name of the service that does not exist.

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
    - [Create Collection][]
    - [Delete Collection][]
    - [Delete Data With Key][]
    - [Read Data With Key][]
    - [Write Data With Key][]

### External Documentation

None

[Create Collection]: {{< url path = "Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc">}}
[Delete Collection]: {{< url path = "Cortex.Reference.Blocks.DataStorage.DeleteCollection.DeleteCollectionBlock.MainDoc">}}
[Delete Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.DeleteData.DeleteDataWithKeyBlock.MainDoc">}}
[Read Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.ReadData.ReadDataWithKeyBlock.MainDoc">}}
[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc">}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Core Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.MainDoc">}}
[Execution Service]: {{< url path="Cortex.Guides.CortexInnovation.ExecutionApplication.Services.MainDoc">}}
