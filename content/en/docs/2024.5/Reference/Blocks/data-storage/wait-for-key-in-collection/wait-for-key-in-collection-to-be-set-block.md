---
title: "Wait For Key In Collection To Be Set"
linkTitle: "Wait For Key In Collection To Be Set"
description: "Waits for a key in a collection to be set."
---
{{< figure src="/blocks/data-storage-wait-for-key-in-collection-block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.WaitForKeyInCollection.WaitForKeyInCollectionToBeSetBlock)</p>

## Description

Waits for a specified [Key][Key Property] in a [Data Storage Collection][] within a [Collection Scope][Collection Scope Property] to be set to a value and returns the [old][Old Value Property] and [new][New Value Property] values.

## Examples

### Wait for a Key to be set in a Data Storage Collection

This example will wait for a [Key][Key Property] `"user1"` to be set in a [Data Storage Collection][] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property]. In this example `"users"` already exists and contains the following following keys and data:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

In this example a separate flow with access to `"users"` has a [Write Data With Key][Write Data With Key] block that will act on `"users"` to update the following key and data:
|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "newDomain", "Username": "newUser1", "Password": "encryptedPassword"}` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`.<br><br>In this example `($)Scope` has been set up using the following [Expression][]:<br><br>`new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [ScopeDefinition][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user1"` | `($)Key` is a variable of type [String][] |
| [Old Value][Old Value Property] | `($)OldValue`, with no value | `($)OldValue` is a variable of type [dynamic][] |
| [New Value][New Value Property] | `($)NewValue`, with no value | `($)NewValue` is a variable of type [dynamic][] |

#### Result

Waiting for `"user1"` to be set in the [Data Storage Collection][] results in the execution waiting until the [Key][Key Property] `"user1"` is updated to have any value; see [Write Data With Key][Write Data With Key].  
On the update to the value of `"user1"`, [Old Value][Old Value Property] will have the value `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}`. [New Value][New Value Property] will have the value `{"Domain": "newDomain", "Username": "newUser1", "Password": "encryptedPassword"}`.

***

### Wait for a Key to be set in a Data Storage Collection where the Key does not already exist

This example will wait for a [Key][Key Property] `"user3"` to be set in a [Data Storage Collection][] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property]. In this example `"users"` already exists and contains the following following keys and data:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

In this example a separate flow with access to `"users"` has a [Write Data With Key][Write Data With Key] block that will act on `"users"` to add the following key and data:
|Key | Data |
-------------|--------------|
|`"user3"` | `{"Domain": "domain", "Username": "user3", "Password": "encryptedPassword"}` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`.<br><br>In this example `($)Scope` has been set up using the following [Expression][]:<br><br>`new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [ScopeDefinition][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user3"` | `($)Key` is a variable of type [String][] |
| [Old Value][Old Value Property] | `($)OldValue`, with no value | `($)OldValue` is a variable of type [dynamic][] |
| [New Value][New Value Property] | `($)NewValue`, with no value | `($)NewValue` is a variable of type [dynamic][] |

#### Result

Waiting for `"user3"` to be set in the [Data Storage Collection][] results in the execution waiting until the [Key][Key Property] `"user3"` is created; see [Write Data With Key][Write Data With Key].  
On the creation of `"user3"` [Old Value][Old Value Property] will have the value `null`, as the key did not exist before being set to a value.
[New Value][New Value Property] will have the value `{"Domain": "domain", "Username": "user3", "Password": "encryptedPassword"}`.

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
| Default Value | [Collection Scope][Collection Scope Property] with value show below |

```json
{
    "Tenant": "ScopeOption.Current",
    "System": "ScopeOption.Current"
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

### Old Value

The [Old Value][Old Value Property] associated with the key in the [Data Storage Collection][], i.e. before setting a value.
| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)OldValue` with no value |

### New Value

The [New Value][New Value Property] associated with the key in the [Data Storage Collection][], i.e. after setting a value. [New Value][New Value Property] can have the same value as [Old Value][Old Value Property].

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)NewValue` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Tenant][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [System][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Scope][Collection Scope Property] is `null`. |
| | Thrown when the [Collection Name][Collection Name Property] is `null`. |
| | Thrown when the [Key][Key Property] is `null` |

## Remarks

### Block Timeout

This block has a default [Block Timeout][] of 60 seconds. If the execution waits for longer than 60 seconds the block will throw a [BlockTimeoutException][].

### Case Sensitivity

[Collection Name][Collection Name Property] is case insensitive (e.g. `"Collection"` is the same as `"collection"`), so waiting for a [Key][Key Property] `"key"` to be set in a [Data Storage Collection][] named `"Collection"` while `"COLLECTION"` already contains a key `"key"` will cause the execution to progress if the [Key][Key Property] `"key"` in the [Collection Scope][Collection Scope Property] is set.

[Key][Key Property] is case sensitive (e.g. `"user"` is not the same as `"USER"`).

### Waiting for a Key to Be Set in a Collection That Does Not Exist

Waiting for a key to be set, in a collection that doesn't exist, it is treated the same as when waiting for a key that does not exist to be set; see [Wait for a Key to be set in a Data Storage Collection where the Key does not already exist][Wait For Missing Key].

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Key Property]: {{< ref "#key" >}}
[Data Property]: {{< ref "#data" >}}
[Wait For Missing Key]: {{< ref
"#wait-for-a-key-to-be-set-in-a-data-storage-collection-where-the-key-does-not-already-exist">}}
[Old Value Property]: {{< ref "#old-value" >}}
[New Value Property]: {{< ref "#new-value" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc">}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}
[Tenant]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.Tenant">}}
[System]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.System">}}
[Block Timeout]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.BlockTimeoutProperty" >}}

[BlockTimeoutException]: {{< url path="Cortex.Reference.Exceptions.Flows.Blocks.BlockTimeoutException.MainDoc" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}

[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}
[Data Storage Service]: {{< url path = "Cortex.Guides.CortexInnovation.CoreApplication.Services.DataStorageService.MainDoc">}}
[Write Data With Key]: {{< url path = "Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc">}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}

[Write Data With Key]: {{< url path="Cortex.Reference.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock.MainDoc" >}}
[Delete Collection]: {{< url path="Cortex.Reference.Blocks.DataStorage.DeleteCollection.DeleteCollectionBlock.MainDoc" >}}