---
title: "Create Collection"
linkTitle: "Create Collection"
description: "Creates a data storage collection."
---
todo this
figure src="/blocks/data-storage-create-collection-block.png" alt="Icon" class="block-icon"

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.Create.CreateCollectionBLock)</p>

## Description

Creates a data storage collection.

## Examples

### Create a Data Storage Collection

This example will create a new data storage collection.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOptions.Current", "System": "ScopeOptions.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(Tenant: ScopeOptions.All, System: ScopeOptions.All)`| `($)Scope` is a variable of type [Scope][] |
| [Collection name][Collection Name Property] | `($)CollectionName` with value "data storage collection" | `($)CollectionName` is a variable of type [String][] |

#### Result

This creates a new data storage collection which an be referenced by the [Collection Name][Collection Name Property].

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
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty.|
| [PropertyNullException][] | Thrown when the [Collection Name][Collection Name Property] `null`. |
| | Thrown when the [Collection Scope][Collection Scope Property] is `null` |
| [ArgumentException][] | Thrown when the Tenant or System [ScopeOptions] within the [Collection Scope][Collection Scope Property] aren't configured correctly |
| [ServiceUnavailableException][] | Thrown when the data storage service doesn't exist or isn't healthy |

## Remarks

When trying to create a collection that already exists, no operation is performed.

Collection name is case insensitive. E.g. 'Collection' is the same as 'collection'.

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}

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
