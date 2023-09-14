---
title: "Wait For Key In Collection to Contain Value"
linkTitle: "Wait For Key In Collection to Contain Value"
description: "Waits for a key in a collection to contain the specified value."
---
TODO
{{< figure src="/blocks/data-storage-wait-for-key-in-collection-block.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.DataStorage.WaitForKeyInCollection.WaitForKeyInCollectionToContainValueBlock)</p>

## Description

Wait for a specified [Key][] to contain the specified [Value][Value Property] in the specified [Data Storage Collection][] within the [Collection Scope][Collection Scope Property].

## Examples

### Wait For Key To Contain Value

This example will wait for a [Key][Key Property] `"user2"` to contain the [Value][Value Property] `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` in the [Data Storage Collection][] named `"users"`that is only accessible by flows that are scoped to the same [Tenant][] and [System][] specified by the [Collection Scope][Collection Scope Property].
In this example `"users"` already exists and contains the following [Keys][Key Property].

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user2"` | `($)Key` is a variable of type [String][] |
| [Value][Value Property] | `($)Value` with value `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}`. In this example `($)Value` has been set up using the following [Expression][] `new UserCredentials(domain: "domain", username: "user2", password: "encryptedPassword")` | `($)Value` is a variable of type [UserCredentials][] |

#### Result

Waiting for `"user2"` to contain `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` in the [Data Storage Collection][] results in  the execution progressing as the [Value][ValueProperty] of `"user2"` matches the desired value.


***

### Waiting For a Key To Contain Value When A Different Value Is Contained

This example will wait for a [Key][Key Property] `"user2"` to contain the specified [Value][Value Property] in the [Data Storage Collection][] named `"users"`that is only accessible by flows that are scoped to the same [Tenant] and [System] specified by the [Collection Scope][Collection Scope Property].
In this example `"users"` already exists and contains the following [Keys][Key Property].

|Key | Data |
-------------|--------------|
|`"user1"` | `{"Domain": "domain", "Username": "user1", "Password": "encryptedPassword"}` |
|`"user2"` | `{"Domain": "domain", "Username": "admin", "Password": "encryptedPassword"}` |

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Collection Scope][Collection Scope Property] | `($)Scope` with value `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current"}`. In this example `($)Scope` has been set up using the following [Expression][]: `new Scope(tenant: ScopeOption.Current, system: ScopeOption.Current)`| `($)Scope` is a variable of type [Scope][] |
| [Collection Name][Collection Name Property] | `($)CollectionName` with value `"users"` | `($)CollectionName` is a variable of type [String][] |
| [Key][Key Property] | `($)Key` with value `"user2"` | `($)Key` is a variable of type [String][] |
| [Value][Value Property] | `($)Value` with value `{"Domain": "domain", "Username": "admin", "Password": "encryptedPassword"}`. In this example `($)Value` has been set up using the following [Expression][] `new UserCredentials(domain: "domain", username: "admin", password: "encryptedPassword")` | `($)Value` is a variable of type [UserCredentials][] |

#### Result

Waiting for `"user2"` to contain [Value][Value Property] `{"Domain": "domain", "Username": "user2", "Password": "encryptedPassword"}` in the [Data Storage Collection][] results in the execution waiting as `"user2"` has value `{"Domain": "domain", "Username": "admin", "Password": "encryptedPassword"}`, which is different. The execution will wait for 60 seconds by default or until the [Value][Value Property] associated with the specified [Key][Key Property] matches the value of `"user2"` in `"users"`. The execution will wait for 60 seconds by default or until the [Key][Key Property] is removed from the [Data Storage Collection][] `"users"`.

***

## Properties

### Collection Scope

The [Collection Scope][Collection Scope Property] containing the [Data Storage Collection] containing the [Key][Key Property] with the [Value][Value Property] to check the value of.
  
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

The name of the [Data Storage Collection][] containing the [Key][Key Property] to check the value of.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)CollectionName` with no value |

### Key

The [Key][Key Property] to check the value of.

For more information about what a key is, please see [Keys].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Key` with no value |

### Value

The [Value][Value Property] that is checked for a match.

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)Value` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Tenant][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| | Thrown when [System][] is not one of the specified [ScopeOption][] types (e.g. `(ScopeOption)100`). |
| [PropertyEmptyException][] | Thrown when the [Collection Name][Collection Name Property] is empty (i.e. `""`).|
| [PropertyNullException][] | Thrown when the [Collection Scope][Collection Scope Property] is `null`. |
| | Thrown when the [Collection Name][Collection Name Property] is `null`. |
| | Thrown when the [Key][Key Property] is `null`. |

## Remarks

### Waiting For a Key in a Collection That Does Not Exist to Contain a Value

When trying to wait for a [Key][Key Property]  to contain a value and the [Data Storage Collection][] specified does not exist, , it is treated the same as when a key does not have a matching value; see example [Waiting For a Key To Contain Value When A Different Value Is Contained][Waiting For Key Value When Different].

### Waiting For a Key That Does Not Exist in a Collection To Contain a Value

When trying to wait for a [Key][Key Property] that does not exist, in a collection that does exist, to contain a value, it is treated the same as when a key does not have a matching value; see example [Waiting For a Key To Contain Value When a Different Value is Contained][Waiting For Key Value When Different].

### Case Sensitivity

[Collection Name][Collection Name Property] is case insensitive (e.g. 'Collection' is the same as 'collection'), so waiting for a [Key][Key Property] `"key"` in a [Data Storage Collection] named `"Collection"` to contain a [Value][Value Property] while `"COLLECTION"` already exists would delete from `"COLLECTION"`.

[Key][Key Property] is case sensitive (e.g. `"user"` is not the same as `"USER"`).

[Collection Scope Property]: {{< ref "#collection-scope" >}}
[Collection Name Property]: {{< ref "#collection-name" >}}
[Key Property]: {{< ref "#key" >}}
[Value Property]: {{< ref "#value" >}}
[Waiting For Key Value When Different]: {{< ref
"#waiting-for-a-key-to-contain-value-when-a-different-value-is-contained">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc">}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}
[Tenant]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.Tenant">}}
[System]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.System">}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}

[Data Storage Collection]: {{< url path = "Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage">}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}

[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Keys.MainDoc" >}}
