---
title: "Delete Data With Key"
linkTitle: "Delete Data With Key"
description: "Deletes data from a data storage collection with the specified key."
---
{{< figure src="/blocks/data-storage-delete-data-with-key-block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.DeleteData.DeleteDataWithKeyBlock)</p>

## Description

Deletes data from a [Data Storage Collection][] with the specified [Key][Key Property].

## Examples

### Delete from a Data Storage Collection

This example will attempt to delete data from a [Data Storage Collection][] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property]. In this example `"users"` already exists and contains the following [Keys][Key Property] and data:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

The example will delete the [Key][Key Property] `"user2"` and the associated data.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user2"` | `($)Key` is a variable of type [String][] |

#### Result

This deletes `"user2"` from the [Data Storage Collection][] which removes the data `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` from the `"users"` [Data Storage Collection][] as shown below:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |

***

### Delete from a Data Storage Collection with a Key that Does Not Exist

This example will attempt to delete data from a [Data Storage Collection] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property]. In this example `"users"` already exists and contains the following [Keys][Key Property] and data:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

The example will attempt to delete the [Key][Key Property] `"user3"` and any associated data.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user3"` | `($)Key` is a variable of type [String][] |

#### Result

Attempting to delete `"user3"` from the [Data Storage Collection][] `"users"` within the [Collection Scope][Collection Scope Property] results in no operation, as the [Key][Key Property] does not exist.

***

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] containing the [Data Storage Collection] to delete from.
  
| | |
|--------------------|---------------------------|
| Data Type | [Scope] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Collection Scope][Collection Scope Property] with value shown below |

```json
{
    "Tenant": "ScopeOption.Current",
    "System": "ScopeOption.Current"
}

```

### Collection Name

The name of the [Data Storage Collection][] to delete from.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)CollectionName` with no value |

### Key

The [Key][Key Property] the data to delete must have.

For more information about what a key is, please see [Keys].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Key` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Tenant][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [System][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| [DataStorageCollectionNotFoundException][] | Thrown when the [Collection Name][Collection Name Property] can not be found within the specified [Collection Scope][Collection Scope property].
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Scope][Collection Scope Property] is `null`. |
| | Thrown when the [Collection Name][Collection Name Property] is `null`. |
| | Thrown when the [Key][Key Property] is `null`. |
| [ServiceUnavailableException][] | Thrown when the [Data Storage Service][] does not exist. |
| | Thrown when the [Data Storage Service][] is not healthy. |

## Remarks

### Deleting from a Collection with a Key that Does Not Exist
When trying to delete from a collection with a [Key][Key Property] that does not exist, no operation is performed; see example [Delete from a Data Storage Collection with a Key that Does Not Exist][Delete Missing Key].

### Case Sensitivity

[Collection Name][Collection Name Property] is case insensitive (e.g. 'Collection' is the same as 'collection'), so trying to delete from a [Data Storage Collection] named `"Collection"` while `"COLLECTION"` already exists would delete from `"COLLECTION"`.

[Key][Key Property] is case sensitive (e.g. `"user"` is not the same as `"USER"`).

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Key Property]: {{< ref "#key" >}}
[Data Property]: {{< ref "#data" >}}
[Delete Missing Key]: {{< ref "#delete-from-a-data-storage-collection-with-a-key-that-does-not-exist">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc">}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}
[Tenant]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.Tenant">}}
[System]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.System">}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[ServiceUnavailableException]: {{< url path = "Cortex.Reference.Exceptions.Services.ServiceUnavailableException.MainDoc">}}
[DataStorageCollectionNotFoundException]: {{< url path = "Cortex.Reference.Exceptions.DataStorage.DataStorageCollectionNotFoundException.MainDoc">}}
[KeyInDataStorageCollectionNotFoundException]: {{< url path = "Cortex.Reference.Exceptions.DataStorage.KeyInDataStorageCollectionNotFoundException.MainDoc">}}

[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}
[Data Storage Service]: {{< url path = "Cortex.Guides.CortexInnovation.CoreApplication.Services.DataStorageService.MainDoc">}}

[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc">}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
