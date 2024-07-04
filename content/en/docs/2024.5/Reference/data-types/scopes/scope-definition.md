---
title: "ScopeDefinition"
linkTitle: "ScopeDefinition"
description: "Used to define the area in which an action takes place."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Scopes.ScopeDefinition)</p>

## Summary

The `ScopeDefinition` data type is used to define the area in which an action takes place.

The `ScopeDefinition` is restricted by a number of levels:

- [Tenant][Tenant Property]
- [System][System Property]
- [Package][Package Property]
- [Flow][Flow Property]

Additional levels will be added in future releases, including:

- Environment
- PackageVersion

|                     |                                                         |
|---------------------|---------------------------------------------------------|
| **Category:**       | Scopes                                                  |
| **Name:**           | `ScopeDefinition`                                       |
| **Full Name:**      | `Cortex.DataTypes.Scopes.ScopeDefinition`               |
| **Alias:**          | N/A                                                     |
| **Description:**    | Used to define the area in which an action takes place. |
| **Default Value:**  | `null`                                                  |
| **Can be used as:** | `ScopeDefinition`, `Object`, `dynamic`                  |
| **Can be cast to:** | N/A                                                     |

## Properties

### Tenant

The [Tenant][Tenant Property] is used to define the scope of the action at the tenant level.

|                 |                       |
|-----------------|-----------------------|
| Data Type       | [ScopeOption][]       |
| Is [Advanced][] | `false`               |
| Default Editor  | [Literal][]           |
| Default Value   | `ScopeOption.Current` |

### System

The [System][System Property] is used to define the scope of the action at the system level.

|                 |                       |
|-----------------|-----------------------|
| Data Type       | [ScopeOption][]       |
| Is [Advanced][] | `false`               |
| Default Editor  | [Literal][]           |
| Default Value   | `ScopeOption.Current` |

### Package

The [Package][Package Property] is used to define the scope of the action at the package level.

|                 |                       |
|-----------------|-----------------------|
| Data Type       | [ScopeOption][]       |
| Is [Advanced][] | `false`               |
| Default Editor  | [Literal][]           |
| Default Value   | `ScopeOption.Current` |

### Flow

The [Flow][Flow Property] is used to define the scope of the action at the flow level.

|                 |                       |
|-----------------|-----------------------|
| Data Type       | [ScopeOption][]       |
| Is [Advanced][] | `false`               |
| Default Editor  | [Literal][]           |
| Default Value   | `ScopeOption.All` |

## Remarks

### Create a Scope

The following table shows some of the ways that `ScopeDefinition` can be created.

| Method                    | Example                                                               | Result                                                               | Editor&nbsp;Support | Notes                                                                                          |
|---------------------------|-----------------------------------------------------------------------|----------------------------------------------------------------------|---------------------|------------------------------------------------------------------------------------------------|
| Use a `ScopeDefinition` constructor | `new ScopeDefinition(tenant: ScopeOption.Current, system: ScopeOption.Current, package: ScopeOption.Current, flow: ScopeOption.All)` | `{"Tenant": "ScopeOption.Current", "System": "ScopeOption.Current", "Package": "ScopeOption.Current", "Flow": "ScopeOption.All"}` | Expression          | Creates a new `ScopeDefinition` that can be used to restrict an action to the current Tenant, System and Package, and any Flow. |

A `ScopeDefinition` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property  | Data Type     | Example               | Notes                                                                             |
|-----------|---------------|-----------------------|-----------------------------------------------------------------------------------|
| `Tenant`  | `ScopeOption` | `ScopeOption.Current` | [Tenant][Tenant Property] defines the scope of the action at the tenant level.    |
| `System`  | `ScopeOption` | `ScopeOption.Current` | [System][System Property] defines the scope of the action at the system level.    |
| `Package` | `ScopeOption` | `ScopeOption.Current` | [Package][Package Property] defines the scope of the action at the package level. |
| `Flow`    | `ScopeOption` | `ScopeOption.All`     | [Flow][Flow Property] defines the scope of the action at the flow level.          |

### Convert Scope to Text

The following table shows some of the ways that a `ScopeDefinition` can be converted to text.

| Method                             | Example                                                                                                       | Result                                                                                      | Editor&nbsp;Support | Notes                          |
|------------------------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------|--------------------------------|
| Use `Convert Object To Json` block | where `Object` property has a value of `{ "Tenant": "ScopeOption.Current", "System": "ScopeOption.Current", "Package": "ScopeOption.Current", "Flow": "ScopeOption.All" }` | `"{\r\n \"Tenant\": \"ScopeOption.Current\",\r\n \"System\": \"ScopeOption.Current\",\r\n \"Package\": \"ScopeOption.Current\",\r\n \"Flow\": \"ScopeOption.All\"\r\n}"` | N/A                 | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `ScopeDefinition`.
- The Literal Editor is available for [Input][] properties where the data type is `ScopeDefinition`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `ScopeDefinition`.

### Known Limitations

#### ScopeOption only has ScopeOption.Current

None

## See Also

### Related Data Types

- [ScopeOption][]

### Related Concepts

- [Working with Scopes][]

### External Documentation

None

[Tenant Property]: {{< ref "#tenant">}}
[System Property]: {{< ref "#system">}}
[Package Property]: {{< ref "#package">}}
[Flow Property]: {{< ref "#flow">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Scopes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Scopes.MainDoc">}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
