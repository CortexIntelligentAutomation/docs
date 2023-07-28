---
title: "Create Collection"
linkTitle: "Create Collection"
description: "Creates a data storage collection."
---
{{<figure src="/blocks/data-storage-create-collection-block.png" alt="Icon" class="block-icon">}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.CreateCollection.CreateCollectionBlock)</p>

## Description

Creates a [Data Storage Collection] within the [Collection Scope][Collection Scope Property].

## Examples

### Create a Data Storage Collection

This example will attempt to create a new [Data Storage Collection]. No collection named `"users"` exists within the [Collection Scope][Collection Scope Property].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOptions.Current", "System": "ScopeOptions.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(Tenant: ScopeOptions.Current, System: ScopeOptions.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |

#### Result

This creates a new [Data Storage Collection] within the [Collection Scope][Collection Scope Property] with [Collection Name][Collection Name Property] `"users"`.

### Create a Data Storage Collection that Already Exists

This example will attempt to create a new [Data Storage Collection]. A collection named `"users"`already exists within the [Collection Scope][Collection Scope Property].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOptions.Current", "System": "ScopeOptions.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(Tenant: ScopeOptions.Current, System: ScopeOptions.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |

#### Result

Attempting to create a [Data Storage Collection] with the name `"users"` within the [Collection Scope][Colection Scope Property] results in no operation, as the [Data Storage Collection] already exists.

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] to create the [Data Storage Collection] within.

| | |
|--------------------|---------------------------|
| Data Type | [Scope] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Collection Scope][Collection Scope Property] with the value shown below: |

```json
{
    "Tenant": "ScopeOptions.Current",
    "System": "ScopeOptions.Current"
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
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Name][Collection Name Property] is `null`. |
| | Thrown when the [Collection Scope][Collection Scope Property] is `null` |
| [ArgumentException][] | Thrown when [Tenant][] is not one of the specified [ScopeOptions][] types (e.g. `(ScopeOptions)100`). |
| [ArgumentException][] | Thrown when [System][] is not one of the specified [ScopeOptions][] types (e.g. `(ScopeOptions)100`). |
| [ServiceUnavailableException][] | Thrown when the data storage service doesn't exist or isn't healthy |

## Remarks

### Creating a collection that already exists

When trying to create a collection that already exists, no operation is performed, see [Collection Already Exists][].

### Case Sensitivity

Collection name is case insensitive. E.g. 'Collection' is the same as 'collection' so trying to create a [Data Storage Collection] named `"Collection"` while `"COLLECTION"` already exists would have no effect ( see [Collection Already Exists][] ).

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Collection Already Exists]: {{< ref "#create-a-data-storage-collection-that-already-exists">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.scope.MainDoc">}}
[ScopeOptions]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOptions.MainDox">}}
[Tenant]: {{< url path="Cortex.Reference.DataTypes.Scopes.scope.Tenant">}}
[System]: {{< url path="Cortex.Reference.DataTypes.Scopes.scope.System">}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[ServiceUnavailableException]: {{< url path = "Cortex.Reference.Exceptions.DataStorage.ServiceUnavailableException.MainDoc">}}
[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
