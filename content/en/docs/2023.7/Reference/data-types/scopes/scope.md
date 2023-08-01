---
title: "Scope"
linkTitle: "Scope"
description: "Used to define the area in which an action takes place."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Scopes.Scope)</p>

## Summary

The `Scope` data type is used to define the area in which an action takes place. 

The `Scope` is restricted by a number of properties:

- [Tenant][Tenant Property]
- [System][System Property]

| | |
|-|-|
| **Category:**          | Scopes                                                  |
| **Name:**              | `Scope`                                |
| **Full Name:**         | `Cortex.DataTypes.Scopes.Scope`         |
| **Alias:**             | N/A                                              |
| **Description:**       | Used to define the area in which an action takes place.|
| **Default Value:**     | `null`                             |
| **Can be used as:**    | `Scope`, `Object`, `dynamic`           |
| **Can be cast to:**    | N/A |

## Properties

### Tenant

The [Tenant][Tenant Property] is used to define the scope of the action at the tenant level.

| | |
|-|-|
| Data Type | [ScopeOptions][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `ScopeOptions.Current` |

### System

The [System][System Property] is used to define the scope of the action at the system level.

| | |
|-|-|
| Data Type | [ScopeOptions][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `ScopeOptions.Current` |

## Remarks

### Creating a Scope

The following table shows some of the ways that `Scope` can be created.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
|Use a `Scope` constructor | `new Scope(Tenant: ScopeOptions.Current, System: ScopeOptions.Current)` | `"{\r\n "Tenant": "ScopeOptions.Current",\r\n "System": "ScopeOptions.Current"\r\n }"`| Expression | |

A `Scope` can also be created using the Literal Editor by filling in the necessary values for the following properties:

| Property | Data Type | Example | Notes |
|-|-|-|-|
| `Tenant` | `ScopeOptions` | `ScopeOptions.Current` | Used to define the action of the scope at the tenant level. |
| `System` | `ScopeOptions` | `ScopeOptions.Current` | Used to define the action of the scope at the system level. |

### Convert Scope to Text

The following table shows some of the ways that a `Scope` can be converted to text.

| Method | Example | Result | Editor&nbsp;Support | Notes |
|-|-|-|-|-|
| Use `Convert Object To Json` block | where `Object` property has a value of `"{\r\n "Tenant": "ScopeOptions.Current",\r\n "System": "ScopeOptions.Current"\r\n }"` | N/A  | See [Convert Object To Json][] |

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `Scope`.
- The Literal Editor is available for [Input][] properties where the data type is `Scope`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `Scope`.

### Known Limitations

#### ScopeOption only has ScopeOption.Current

Currently [ScopeOption] only allows `ScopeOption.Current` to be selected, `ScopeOption.All` may be added in a future release.

## See Also

### Related Data Types

- [ScopeOption][]

### Related Concepts

None

### External Documentation

None

[Tenant Property]: {{< ref "#tenant">}}
[System Property]: {{< ref "#system">}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[System.Enum]: {{< url path="MSDocs.DotNet.Api.System.Enum.MainDoc" >}}
[Convert Object To Text]: {{< url path="Cortex.Reference.Blocks.Objects.ConvertObject.ConvertObjectToText.MainDoc" >}}
[Convert Object To Json]: {{< url path="Cortex.Reference.Blocks.Json.ConvertJson.ConvertObjectToJson.MainDoc" >}}
[Working with Enums]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc" >}}
[working with Text]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}
[Explicit Casting]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Objects.ObjectCasting.ExplicitCast" >}}
[Enum.Parse]: {{< url path="MSDocs.DotNet.Api.System.Enum.Parse" >}}
[Enum.ToObject]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToObject" >}}
[Enum.ToString]: {{< url path="MSDocs.DotNet.Api.System.Enum.ToString" >}}
[Convert.ToInt32]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToInt32" >}}
[Convert.ToString]: {{< url path="MSDocs.DotNet.Api.System.Convert.ToString" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[ScopeOption]: {{< url path ="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc">}}

[Instantiating an enumeration type]: {{< url path="MSDocs.DotNet.Api.System.Enum.InstantiatingAnEnum" >}}
[Formatting enumeration values]: {{< url path="MSDocs.DotNet.Api.System.Enum.FormattingEnumerationValues" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}