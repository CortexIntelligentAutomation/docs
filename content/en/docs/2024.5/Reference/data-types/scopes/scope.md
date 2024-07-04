---
title: "Scope"
linkTitle: "Scope"
description: "Used to define the actual values of an area described by a ScopeDefinition."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Scopes.Scope)</p>

## Summary

The `Scope` data type is used to define the actual values of an area described by a [ScopeDefinition][].

The `Scope` is defined by a number of levels:

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
| **Name:**           | `Scope`                                                 |
| **Full Name:**      | `Cortex.DataTypes.Scopes.Scope`                         |
| **Alias:**          | N/A                                                     |
| **Description:**    | Used to define the actual values of an area described by a [ScopeDefinition][]. |
| **Default Value:**  | `null`                                                  |
| **Can be used as:** | `Scope`, `Object`, `dynamic`                            |
| **Can be cast to:** | N/A                                                     |

## Properties

### Tenant

The [Tenant][Tenant Property] the action is operating in.

|                 |                       |
|-----------------|-----------------------|
| Data Type       | [String][]            |

### System

The [System][System Property] the action is operating in.

|                 |                       |
|-----------------|-----------------------|
| Data Type       | [String][]       |

### Package

The [Package][Package Property] the action is operating in.

|                 |                       |
|-----------------|-----------------------|
| Data Type       | [String][]       |

### Flow

The [Flow][Flow Property] the action is operating in.

|                 |                       |
|-----------------|-----------------------|
| Data Type       | [String][]       |

## Remarks

### Create a Scope

The following table shows some of the ways that `Scope` can be created.

| Method                    | Example                                                               | Result                                                               | Editor&nbsp;Support | Notes                                                                                          |
|---------------------------|-----------------------------------------------------------------------|----------------------------------------------------------------------|---------------------|------------------------------------------------------------------------------------------------|
| Use a `Scope` constructor | `new Scope("tenant", "system", "package", "flow")` | `{ "Tenant": "tenant", "System": "system", "Package": "package", "Flow": "flow" }` | N/A          | Creates a new `Scope` that contains the scope values an action could be operating in. |

### Convert Scope to Text

The following table shows some of the ways that a `Scope` can be converted to text.

| Method                             | Example                                                                                                       | Result                                                                                      | Editor&nbsp;Support | Notes                          |
|------------------------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------|--------------------------------|
| Use `Convert Object To Json` block | where `Object` property has a value of `{ "Tenant": "tenant", "System": "system", "Package": "package", "Flow": "flow" }` | `"{\r\n \"Tenant\": \"tenant\",\r\n \"System\": \"system\",\r\n \"Package\": \"package\",\r\n \"Flow\": \"flow\"\r\n}"` | N/A                 | See [Convert Object To Json][] |

### Property Editor Support

None

### Known Limitations

None

## See Also

### Related Data Types

- [ScopeDefinition][]

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
[ScopeDefinition]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc">}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
