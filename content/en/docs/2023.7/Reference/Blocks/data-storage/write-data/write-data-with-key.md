---
title: "Write Data With Key"
linkTitle: "Write Data With Key"
description: "Writes data to a data storage collection with the specified key."
---
{{<figure src="/blocks/data-storage-write-data-with-key-block.png" alt="Icon" class="block-icon">}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.WriteData.WriteDataWithKeyBlock)</p>

## Description

Writes [Data][Data Property] to a [Data Storage Collection][] with the specified [Key][Key Property].

## Examples

### Write to a Data Storage Collection

This example will attempt to write [Data][Data Property] to a [Data Storage Collection] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property]. In this example `"users"` already exists and contains the following [Keys][Key Property] and [Data][Data Property]:

 |Key | Data |
-------------|--------------|
 |`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
 

The example will write the [Data][Data Property] `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` of type [UserCredentials][] with the [Key][Key Property] `"user2"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user2"` | `($)Key` is a variable of type [String][] |
| [Data][Data Property] | `($)Data` with value `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}`. In this example `($)Data` has been set up using the following [Expression][] `new UserCredentials(domain: "domain", username: "user2", password: "encryptedPassword")` | `($)Data` is a variable of type [UserCredentials][] |

#### Result

This writes the [Data][Data Property]  `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` with the [Key][Key Property] `"user2"` to the [Data Storage Collection][] named `"users"` as shown below:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

***

### Write to a Data Storage Collection with a Key that Already Exists

This example will attempt to write [Data][Data Property] to a [Data Storage Collection] named `"users"` that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property]. In this example `"users"` already exists and contains the following [Keys][Key Property] and [Data][Data Property]:

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

The example will write the [Data][Data Property] `{"Domain": "domain", "Username": "new user2", "Password": "encryptedPassword"}` of type [UserCredentials][] with the [Key][Key Property] `"user2"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user2"` | `($)Key` is a variable of type [String][] |
| [Data][Data Property] | `($)Data` with value `{"Domain": "domain", "Username": "new user2", "Password": "encryptedPassword"}`. In this example `($)Data` has been set up using the following [Expression][] `new UserCredentials(domain: "domain", username: "new user2", password: "encryptedPassword")` | `($)Data` is a variable of type [UserCredentials][] |

#### Result

This example will update the [Data][Data Property] stored to [Key][Key Property] `"user2"` to `{"Domain": "domain", "Username": "new user2", "Password": "encryptedPassword"}` of type [UserCredentials][] in the [Data Storage Collection][] named `"users"` as shown below.

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "new user2", "Password": "encryptedPassword"}` |

***

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] containing the [Data Storage Collection][] to write to.
  
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

The name of the [Data Storage Collection][] to write to.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)CollectionName` with no value |

### Key

The [Key][Key Property] to add the [Data][Data Property] with.

The [Key][Key Property] can't be `null` and must be unique within each [Data Storage Collection][].

For more information about what a key is, please see [Keys].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Key` with no value |

### Data

The [Data][Data Property] to be added to the [Data Storage Collection][] with the [Key][Key Property].

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
| [ArgumentException][] | Thrown when [Tenant][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [System][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Scope][Collection Scope Property] is `null`. |
| | Thrown when the [Collection Name][Collection Name Property] is `null`. |
| | Thrown when the [Key][Key Property] is `null` |
| [ServiceUnavailableException][] | Thrown when the [Data Storage Service] is not healthy |
| [DataStorageCollectionNotFoundException][] | Thrown when the [Collection Name][Collection Name Property] can not be found on the specified [Collection Scope][Collection Scope property].

## Remarks

### Writing with a key that is already present

When trying to write to a key that is already present on the [Data Storage Collection][] provided, the value of the key is overwritten; see example [Write to a Data Storage Collection with a Key that Already Exists][Write Existing Key]

### Case Sensitivity

[Collection Name][Collection Name Property] is case insensitive (e.g. 'Collection' is the same as 'collection'), so trying to write to a [Data Storage Collection] named `"Collection"` while `"COLLECTION"` already exists would write to `"COLLECTION"`.

[Key][Key Property] is case sensitive (e.g. `"user"` is not the same as `"USER"`).

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Key Property]: {{< ref "#key" >}}
[Data Property]: {{< ref "#data" >}}
[Write Existing Key]: {{< ref "#write-to-a-data-storage-collection-with-a-key-that-already-exists">}}

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

[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}
[Data Storage Service]: {{< url path = "Cortex.Guides.CortexInnovation.CoreApplication.Services.DataStorageService.MainDoc">}}

[Object]: {{< url path="Cortex.Reference.DataTypes.All.Object.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc">}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
