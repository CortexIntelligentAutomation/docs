---
title: "Wait For Collection To Exist"
linkTitle: "Wait For Collection To Exist"
description: "Waits for a data storage collection to exist."
---
{{< figure src="/blocks/data-storage-wait-for-collection-block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.WaitForCollection.WaitForCollectionToExistBlock)</p>

## Description

Waits for a specified [Data Storage Collection][] to exist within a [Collection Scope][Collection Scope Property].

## Examples

### Wait for a Data Storage Collection to exist

This example will wait for a [Data Storage Collection][] `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [CollectionScope][Collection Scope Property], to exist. In this example `"users"` does not already exist.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current", "Package": "ScopeOption.All", "Flow": "ScopeOption.All"}`.<br><br>In this example `($)Scope` has been set up using the following [Expression][]:<br><br>`new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current, package: ScopeOption.All, flow: ScopeOption.All)`| `($)Scope` is a variable of type [ScopeDefinition][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |

#### Result

Waiting for the `"users"` [Data Storage Collection][] to exist results in the execution waiting until the desired [Collection][Collection Name Property] exists; see [Create Collection][].

### Wait for a Data Storage Collection that already exists to exist

This example will wait for a [Data Storage Collection][] `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [CollectionScope][Collection Scope Property], to exist. In this example `"users"` already exists and contains the following keys and data:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current", "Package": "ScopeOption.All", "Flow": "ScopeOption.All"}`.<br><br>In this example `($)Scope` has been set up using the following [Expression][]:<br><br>`new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current, package: ScopeOption.All, flow: ScopeOption.All)`| `($)Scope` is a variable of type [ScopeDefinition][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |

#### Result

Waiting for the `"users"` [Data Storage Collection][] to exist results in the execution progressing as the collection `"users"` already exists.

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] to wait for the [Data Storage Collection][] to exist in.
  
| | |
|--------------------|---------------------------|
| Data Type | [ScopeDefinition] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [Collection Scope][Collection Scope Property] with value shown below |

```json
{
    "Tenant": "ScopeOption.Current",
    "System": "ScopeOption.Current",
    "Package": "ScopeOption.Current",
    "Flow": "ScopeOption.All"
}

```

### Collection Name

The name of the [Data Storage Collection][] to wait for.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)CollectionName` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Tenant][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [System][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [Package][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [Flow][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Scope][Collection Scope Property] is `null`. |
| | Thrown when the [Collection Name][Collection Name Property] is `null`. |

## Remarks

### Block Timeout

This block has a default [Block Timeout][] of 60 seconds. If the execution waits for longer than 60 seconds the block will throw a [BlockTimeoutException][].

### Case Sensitivity

[Collection Name][Collection Name Property] is case insensitive (e.g. `"Collection"` is the same as `"collection"`), so trying to wait for a [Data Storage Collection][] named `"Collection"` to exist while `"COLLECTION"` already exists would cause the execution to progress; see [Wait for a Data Storage Collection that already exists to exist][Collection Already Exists].

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Collection Already Exists]: {{< ref
"#wait-for-a-data-storage-collection-that-already-exists-to-exist" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc">}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}
[Tenant]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.Tenant">}}
[System]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.System">}}
[Package]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.Package">}}
[Flow]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.Flow">}}
[Block Timeout]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty" >}}

[BlockTimeoutException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.BlockTimeoutException.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}

[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}
[Data Storage Service]: {{< url path = "Cortex.Guides.CortexInnovation.CoreApplication.Services.DataStorageService.MainDoc">}}
[Create Collection]: {{< url path = "Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc">}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
