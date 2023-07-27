---
title: "Write Data With Key"
linkTitle: "Write Data With Key"
description: "Writes data to a data storage collection with a key"
---
todo this
figure src="/blocks/data-storage-write-data-with-key-block.png" alt="Icon" class="block-icon"

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.Write.WriteDataWithKeyBlock)</p>

## Description

Writes data to a data storage collection with a key.

## Examples

### Write a string to a data storage collection

This example will write to an existing data storage collection.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOptions.Current", "System": "ScopeOptions.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(Tenant: ScopeOptions.All, System: ScopeOptions.All)`| `($)Scope` is a variable of type [Scope][] |
| [Collection name][Collection Name Property] | `($)CollectionName` with value `"dataStorageCollection"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"key"` | `($)Key` is a variable of type [String][] |
| [Data][Data Property] | `($)Data` with value `"data"` | `($)Data` is a variable of type [String][] |

#### Result

This adds the pair of `"key" : "data"` to the data storage collection referenced by `($)CollectionName`.

### Write an object to a data storage collection

This example will write to an existing data storage collection.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOptions.Current", "System": "ScopeOptions.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(Tenant: ScopeOptions.All, System: ScopeOptions.All)`| `($)Scope` is a variable of type [Scope][] |
| [Collection name][Collection Name Property] | `($)CollectionName` with value `"dataStorageCollection"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"key"` | `($)Key` is a variable of type [String][] |
| [Data][Data Property] | `($)Data` with value `{ /r/n"CommandText": "Select * from databse.dbo.table", /r/n"Parameters": null /r/n}` | `($)Data` is a variable of type [QueryCommand][] |

#### Result

This adds the pair of `"key" : "{ /r/n"CommandText": "Select * from databse.dbo.table", /r/n"Parameters": null /r/n}"` to the data storage collection referenced by `($)CollectionName`.

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] to create the collection on.
  
| | |
|--------------------|---------------------------|
| Data Type | [Scope] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Collection Scope][Collection Scope Property] with value show below |

```json
{
    "Tenant": "ScopeOptions.Current",
    "System": "ScopeOptions.Current"
}

```

### Collection Name

The [Collection Name][Collection Name Property] to create.

The [Collection Name][Collection Name Property] can't be `null` or empty.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)CollectionName` with no value |

### Key

The [Key][Key Property] to add the [Data][Data Property] with.

The [Key][Key Property] can't be `null` or empty and only one instance of a key can exist at one time in each collection.

For more information about Keys please see [Keys].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Key` with no value |

### Data

The [Data][Data Property] to be added with the [Key][Key Property].

| | |
|--------------------|---------------------------|
| Data Type | [Object][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Data` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|----------|----------|
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty.|
| [PropertyNullException][] | Thrown when the [Collection Name][Collection Name Property] `null`. |
| | Thrown when the [Collection Scope][Collection Scope Property] is `null` |
| | Thrown when the [Key][Key Property] is `null` |
| [ArgumentException][] | Thrown when the Tenant or System [ScopeOptions] within the [Collection Scope][Collection Scope Property] aren't configured correctly |
| [ServiceUnavailableException][] | Thrown when the data storage service doesn't exist or isn't healthy |
| [DataStorageCollectionNotFoundException][] | Thrown when the [Collection Name][Collection Name Property] can't be found on the specified [Collection Scope][Collection Scope property].

## Remarks

When trying to create a collection that already exists, no operation is performed.

Collection name is case insensitive. E.g. 'Collection' is the same as 'collection'.

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Key Property]: {{< ref "#key" >}}
[Data Property]: {{< ref "#data" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.scope.MainDoc">}}
[ScopeOptions]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOptions.MainDox">}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[ServiceUnavailableException]: {{< url path = "Cortex.Reference.Exceptions.DataStorage.ServiceUnavailableException.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
