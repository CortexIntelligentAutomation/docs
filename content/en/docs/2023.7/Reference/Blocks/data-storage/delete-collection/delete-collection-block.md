---
title: "Delete Collection"
linkTitle: "Delete Collection"
description: "Deletes a data storage collection."
---

{{<figure src="/blocks/data-storage-delete-collection-block.png" alt="Icon" class="block-icon">}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.DeleteCollection.DeleteCollectionBlock)</p>

## Description

Delete a [Data Storage Collection][] within the [Collection Scope][Collection Scope Property].

## Examples

### Delete a Data Storage Collection

This example will attempt to delete a [Data Storage Collection] named `"users"`that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property].
In this example `"users"` already exists.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |

#### Result

This deletes the [Data Storage Collection] within the [Collection Scope][Collection Scope Property] with [Collection Name][Collection Name Property] `"users"`.

***

### Delete a Data Storage Collection that Does Not Exist

This example will attempt to delete a [Data Storage Collection][] named `"users"`that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property].
In this example `"users"` does not exist.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |

#### Result

Attempting to delete a [Data Storage Collection] with the name `"users"` within the [Collection Scope][Collection Scope Property] results in no operation, as the [Data Storage Collection] does not exist.

***

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] to delete the [Data Storage Collection] from.
  
| | |
|--------------------|---------------------------|
| Data Type | [Scope] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Collection Scope][Collection Scope Property] with value show below |

```json
{
    "Tenant": "ScopeOption.Current",
    "System": "ScopeOption.Current"
}

```

### Collection Name

The name of the [Data Storage Collection] to delete.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)CollectionName` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Tenant][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [System][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Scope][Collection Scope Property] is `null`. |
| | Thrown when the [Collection Name][Collection Name Property] is `null`. |
| [ServiceDoesNotExistException][] | Thrown when the [Data Storage Service][] does not exist. |
| [ServiceUnavailableException][] | Thrown when the [Data Storage Service][] is not healthy. |

## Remarks

### Deleting a Collection that Does Not Exist
When trying to delete a collection that does not exist, no operation is performed; see example [Delete a Data Storage Collection that Does Not Exist][Delete Collection that Does Not Exist].

### Case Sensitivity

[Collection Name][Collection Name Property] is case insensitive (e.g. 'Collection' is the same as 'collection'), so trying to delete a [Data Storage Collection] named `"Collection"` while `"COLLECTION"` exists would delete `"COLLECTION"`; see example [Delete a Data Storage Collection][Delete Collection].

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}

[Delete Collection]: {{< ref "#delete-a-data-storage-collection">}}
[Delete Collection that Does Not Exist]: {{< ref "#delete-a-data-storage-collection-that-does-not-exist" >}}

[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}
[Data Storage Service]: {{< url path = "Cortex.Guides.CortexInnovation.CoreApplication.Services.DataStorageService.MainDoc">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc">}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}
[Tenant]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.Tenant">}}
[System]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.System">}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[ServiceDoesNotExistException]: {{< url path = "Cortex.Reference.Exceptions.Services.ServiceDoesNotExistException.MainDoc">}}
[ServiceUnavailableException]: {{< url path = "Cortex.Reference.Exceptions.Services.ServiceUnavailableException.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
