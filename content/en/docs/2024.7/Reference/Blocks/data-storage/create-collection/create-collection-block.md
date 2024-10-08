---
title: "Create Collection"
linkTitle: "Create Collection"
description: "Create a data storage collection."
---
{{<figure src="/blocks/Cortex_Blocks_DataStorage_CreateCollection_CreateCollectionBlock.png" alt="Icon" class="block-icon">}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.CreateCollection.CreateCollectionBlock)</p>

## Description

Create a [Data Storage Collection] within the [Collection Scope][Collection Scope Property].

## Examples

### Create a Data Storage Collection

This example will attempt to create a new [Data Storage Collection] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current", "Package": "ScopeOption.All", "Flow": "ScopeOption.All"}`.<br><br>In this example `($)Scope` has been set up using the following [Expression][]: `new ScopeDefinition(tenant: ScopeOption.Current, system: ScopeOption.Current, package: ScopeOption.All, flow: ScopeOption.All)`| `($)Scope` is a variable of type [ScopeDefinition][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |

#### Result

This creates a new [Data Storage Collection] within the [Collection Scope][Collection Scope Property] with [Collection Name][Collection Name Property] `"users"`.

### Create a Data Storage Collection that Already Exists

This example will attempt to create a new [Data Storage Collection] named `"users"`that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property].
In this example `"users"` already exists.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current", "Package": "ScopeOption.All", "Flow": "ScopeOption.All"}`.<br><br>In this example `($)Scope` has been set up using the following [Expression][]: `new ScopeDefinition(tenant: ScopeOption.Current, system: ScopeOption.Current, package: ScopeOption.All, flow: ScopeOption.All)`| `($)Scope` is a variable of type [ScopeDefinition][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |

#### Result

Attempting to create a [Data Storage Collection] with the name `"users"` within the [Collection Scope][Collection Scope Property] results in no operation, as the [Data Storage Collection] already exists.

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] to create the [Data Storage Collection] within.

| | |
|--------------------|---------------------------|
| Data Type | [ScopeDefinition] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Collection Scope][Collection Scope Property] with the value shown below: |

```json
{
    "Tenant": "ScopeOption.Current",
    "System": "ScopeOption.Current",
    "Package": "ScopeOption.Current",
    "Flow": "ScopeOption.All"
}

```

### Collection Name

The name of the [Data Storage Collection] to create.

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
| | Thrown when [Package][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [Flow][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Scope][Collection Scope Property] is `null`. |
| | Thrown when the [Collection Name][Collection Name Property] is `null`. |
| [ServiceDoesNotExistException][] | Thrown when the [Data Storage Service][] does not exist. |
| [ServiceUnavailableException][] | Thrown when the [Data Storage Service][] is not healthy. |

## Remarks

### Creating a Collection that Already Exists

When trying to create a collection that already exists, no operation is performed; see example [Create a Data Storage Collection that Already Exists][Collection Already Exists].

### Case Sensitivity

[Collection Name][Collection Name Property] is case insensitive (e.g. 'Collection' is the same as 'collection'), so trying to create a [Data Storage Collection] named `"Collection"` while `"COLLECTION"` already exists would have no effect; see example [Create a Data Storage Collection that Already Exists][Collection Already Exists].

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Collection Already Exists]: {{< ref "#create-a-data-storage-collection-that-already-exists">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc">}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}
[Tenant]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.Tenant">}}
[System]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.System">}}
[Package]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.Package">}}
[Flow]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.Flow">}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[ServiceDoesNotExistException]: {{< url path = "Cortex.Reference.Exceptions.Services.ServiceDoesNotExistException.MainDoc">}}
[ServiceUnavailableException]: {{< url path = "Cortex.Reference.Exceptions.Services.ServiceUnavailableException.MainDoc">}}
[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}
[Data Storage Service]: {{< url path = "Cortex.Guides.CortexInnovation.CoreApplication.Services.DataStorageService.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
