---
title: "Wait For Key In Collection To Not Exist"
linkTitle: "Wait For Key In Collection To Not Exist"
description: "Waits for a key in a collection to not exist."
---
{{< figure src="/blocks/data-storage-wait-for-key-in-collection-block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.WaitForKeyInCollection.WaitForKeyInCollectionToNotExistBlock)</p>

## Description

Waits for a specified [Key][Key Property] to not exist in a [Data Storage Collection][] within a [Collection Scope][Collection Scope Property].

## Examples

### Wait for a Key in a Data Storage Collection to not exist

This example will wait for a [Key][Key Property] `"user2"` to exist in the [Data Storage Collection][] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property].
In this example `"users"` already exists and contains the following keys and data:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current", "Package": "ScopeOption.All", "Flow": "ScopeOption.All"}`.<br><br>In this example `($)Scope` has been set up using the following [Expression][]:<br><br>`new ScopeDefinition(tenant: ScopeOption.Current, system: ScopeOption.Current, package: ScopeOption.All, flow: ScopeOption.All)`| `($)Scope` is a variable of type [ScopeDefinition][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user2"` | `($)Key` is a variable of type [String][] |

#### Result

Waiting for `"user2"` to not exist in the [Data Storage Collection][] results in the execution waiting until `"users"` does not contain the desired [Key][Key Property]; see [Delete Data With Key][].

***

### Wait for a Key in a Data Storage Collection to not exist where the Key does not already exist

This example will wait for a [Key][Key Property] `"user3"` to exist in the [Data Storage Collection][] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property].
In this example `"users"` already exists and contains the following keys and data:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current", "Package": "ScopeOption.All", "Flow": "ScopeOption.All"}`.<br><br>In this example `($)Scope` has been set up using the following [Expression][]:<br><br>`new ScopeDefinition(tenant: ScopeOption.Current, system: ScopeOption.Current, package: ScopeOption.All, flow: ScopeOption.All)`| `($)Scope` is a variable of type [ScopeDefinition][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user3"` | `($)Key` is a variable of type [String][] |

#### Result

Waiting for `"user3"` to not exist in the [Data Storage Collection][] results in the execution progressing as `"users"` does not contain the desired [Key][Key Property].

***

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] containing the [Data Storage Collection][] to wait for.
  
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

The name of the [Data Storage Collection][] containing the [Key][Key Property] to wait for.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)CollectionName` with no value |

### Key

The [Key][Key Property] to wait for.

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
| | Thrown when [Package][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [Flow][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Scope][Collection Scope Property] is `null`. |
| | Thrown when the [Collection Name][Collection Name Property] is `null`. |
| | Thrown when the [Key][Key Property] is `null`. |

## Remarks

### Block Timeout

This block has a default [Block Timeout][] of 60 seconds. If the execution waits for longer than 60 seconds the block will throw a [BlockTimeoutException][].

### Case Sensitivity

[Collection Name][Collection Name Property] is case insensitive (e.g. `"Collection"` is the same as `"collection"`), so trying to wait for a key `"key"` to not exist in a [Data Storage Collection][] named `"Collection"` while `"COLLECTION"` already exists would wait for `"key"` to not exist in the [Data Storage Collection][] `"COLLECTION"`.

[Key][Key Property] is case sensitive (e.g. `"user"` is not the same as `"USER"`).

### Waiting For a Key in a Collection That Does Not Exist

When trying to wait for a [Key][Key Property] contained in a collection that does not exist, it is treated the same as when a key does not exist in a collection; see [Wait for a Key in a Data Storage Collection to not exist where the Key does not already exist][Wait For Key To Not Exist].

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Key Property]: {{< ref "#key" >}}
[Wait For Key To Not Exist]: {{< ref "#wait-for-a-key-in-a-data-storage-collection-to-not-exist-where-the-key-does-not-already-exist" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

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
[Delete Data With Key]: {{< url path = "Cortex.Reference.Blocks.DataStorage.DeleteData.DeleteDataWithKeyBlock.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
