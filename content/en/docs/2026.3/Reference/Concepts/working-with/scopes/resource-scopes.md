---
title: "Resource Scopes"
linkTitle: "Resource Scopes"
description: "How ScopeDefinition, ScopeOption, and Scope isolate shared CORTEX resources such as data storage collections and semaphores by Tenant, System, Package, and Flow."
weight: 2
---

# {{% param title %}}

## Summary

A **resource scope** defines which area of the platform shares a named resource. You declare the intended sharing with a [ScopeDefinition][]; at runtime that definition resolves to a [Scope][] whose properties are the concrete Tenant, System, Package, and Flow string values an action is restricted to.

Resource scopes are a {{% ctx %}} platform concept. They are represented by the [ScopeDefinition][], [ScopeOption][], and [Scope][] data types — not by a single .NET type. Use them when configuring shared resources such as [data storage collections][] ([Collection Scope][]) and [semaphores][] ([Scope][Semaphore Scope] on [SemaphoreSettings][]).

For how this differs from [variable scopes][], see [What is a Scope?][].

| Term | Role |
| --- | --- |
| [ScopeDefinition][] | Intent: for each level, use [ScopeOption.Current][ScopeOption] or [ScopeOption.All][ScopeOption] |
| [ScopeOption][] | Per-level choice: `All` (`0`) or `Current` (`1`) |
| [Scope][] | Resolved identity: Tenant, System, Package, and Flow as strings |

## Scope levels

A [ScopeDefinition][] and the resolved [Scope][] use these levels:

| Level | Meaning |
| --- | --- |
| Tenant | Restricts (or shares across) the tenant |
| System | Restricts (or shares across) the system |
| Package | Restricts (or shares across) the [package][] |
| Flow | Restricts (or shares across) the [flow][] |

Additional levels — Environment and PackageVersion — are planned for future releases.

On [ScopeDefinition][], each level is a [ScopeOption][]. On [Scope][], each level is a [String][].

## ScopeOption.Current and ScopeOption.All

| Value | Int32 | Effect on a level |
| --- | --- | --- |
| `ScopeOption.All` | `0` | Restricts that level to a unique "All" value so the resource can be shared across every value at that level |
| `ScopeOption.Current` | `1` | Restricts that level to its current value (for example the current tenant) |

### Examples

| Definition (Tenant / System / Package / Flow) | Typical sharing |
| --- | --- |
| `Current` / `Current` / `Current` / `All` | Shared across flows in the current tenant, system, and package (default for collection and semaphore scope properties) |
| `Current` / `Current` / `All` / `All` | Shared across packages and flows in the current tenant and system (see the [Create Collection][] example) |
| `Current` / `Current` / `Current` / `Current` | Limited to the current flow only |

When several blocks use the same resolved [Scope][] and the same resource name, they share one instance. Different scopes or names produce separate instances — even in the same flow.

## Default ScopeDefinition

A [ScopeDefinition][] variable defaults to `null` until you set it. When data storage [Collection Scope][] or semaphore [Scope][Semaphore Scope] use a built-in default (including the default [semaphore property][Semaphore Property] in [Common Properties][]), that default is:

| Level | Default |
| --- | --- |
| Tenant | `ScopeOption.Current` |
| System | `ScopeOption.Current` |
| Package | `ScopeOption.Current` |
| Flow | `ScopeOption.All` |

```json
{
    "Tenant": "ScopeOption.Current",
    "System": "ScopeOption.Current",
    "Package": "ScopeOption.Current",
    "Flow": "ScopeOption.All"
}
```

Those same per-level defaults appear on the [ScopeDefinition][] data type properties (Tenant, System, and Package default to `Current`; Flow defaults to `All`).

## Creating a ScopeDefinition

### In the Expression Editor

```csharp
new ScopeDefinition(
    tenant: ScopeOption.Current,
    system: ScopeOption.Current,
    package: ScopeOption.Current,
    flow: ScopeOption.All)
```

Positional form (as used with [SemaphoreSettings][]):

```csharp
new ScopeDefinition(ScopeOption.Current, ScopeOption.Current, ScopeOption.Current, ScopeOption.All)
```

Example that shares a collection across packages within the current tenant and system:

```csharp
new ScopeDefinition(
    tenant: ScopeOption.Current,
    system: ScopeOption.Current,
    package: ScopeOption.All,
    flow: ScopeOption.All)
```

### In the Literal Editor

Set each of Tenant, System, Package, and Flow to `ScopeOption.Current` or `ScopeOption.All`.

You can also construct a resolved [Scope][] directly when a property expects [Scope][]:

```csharp
new Scope("tenant", "system", "package", "flow")
```

See [ScopeDefinition][] and [Scope][] for property-editor support and conversion examples.

## How scopes identify shared instances

| Resource | Identity | Notes |
| --- | --- | --- |
| [Semaphore][semaphores] | [Scope][Semaphore Scope] + [Name][Semaphore Name] | Blocks with the same scope and name share one semaphore |
| [Data Storage Collection][data storage collections] | [Collection Scope][] + [Collection Name][] | Names are case insensitive within a scope; keys inside a collection are case sensitive |

### Semaphore path format

When a semaphore cannot be acquired, [SemaphoreCouldNotBeAcquiredException][] messages use a path built from the resolved scope and name:

```text
"/<tenant>/<system>/*/<package>/*/<flow>/<semaphore-name>"
```

where `<tenant>`, `<system>`, `<package>`, and `<flow>` come from the [Scope][], and `<semaphore-name>` is the semaphore [Name][Semaphore Name].

If a data storage collection is missing for the resolved scope, [DataStorageCollectionNotFoundException][] reports the collection name and includes the [Scope][] on the exception.

## Choosing a scope

| Prefer | When |
| --- | --- |
| Narrower sharing (more `Current`, especially Flow = `Current`) | The resource must not be visible to other flows, packages, or systems |
| Wider sharing (more `All`, for example Package and Flow = `All`) | Several flows or packages must share one collection or semaphore |
| Default (`Current` / `Current` / `Current` / `All`) | Share within the current package across its flows, without crossing packages |

Mismatching scope between create and later read/write or acquire operations looks like a missing resource (for collections) or a separate semaphore instance — even when the name matches.

## Remarks

### Known Limitations

* Environment and PackageVersion levels are not available yet.
* Only [ScopeOption.All][ScopeOption] (`0`) and [ScopeOption.Current][ScopeOption] (`1`) are defined. Supplying an undefined [ScopeOption][] value (for example `(ScopeOption)100`) can cause an [ArgumentException][] on blocks such as [Create Collection][].

## See Also

### Related Concepts

* [What is a Scope?][]
* [Variable Scopes][]
* [What is a Semaphore?][semaphores]
* [What is a Collection?][]
* [Common Properties][]
* [What is a Package?][package]
* [What is a Flow?][flow]

### Related Data Types

* [ScopeDefinition][]
* [ScopeOption][]
* [Scope][]
* [SemaphoreSettings][]

### Related Blocks

* [Create Collection][]
* [Semaphore Property][] (most blocks; see [Common Properties][])

### Related Exceptions

* [SemaphoreCouldNotBeAcquiredException][]
* [DataStorageCollectionNotFoundException][]

### External Documentation

None — resource scopes are a {{% ctx %}} platform concept rather than a direct .NET type mapping. For variable lifetime and C# comparisons, see [Variable Scopes][] and [What is a Scope?][].

[What is a Scope?]: {{< ref "what-is-a-scope.md" >}}
[Variable Scopes]: {{< ref "variable-scopes.md" >}}

[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc" >}}
[ScopeOption]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc" >}}
[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc" >}}
[SemaphoreSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.MainDoc" >}}
[Semaphore Scope]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Scope" >}}
[Semaphore Name]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Name" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[data storage collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage" >}}
[What is a Collection?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[Collection Scope]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[Collection Name]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[Create Collection]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[semaphores]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.MainDoc" >}}
[Common Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.MainDoc" >}}
[Semaphore Property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.SemaphoreProperty" >}}
[package]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Packages.WhatIsAPackage.MainDoc" >}}
[flow]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[SemaphoreCouldNotBeAcquiredException]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.MainDoc" >}}
[DataStorageCollectionNotFoundException]: {{< url path="Cortex.Reference.Exceptions.DataStorage.DataStorageCollectionNotFoundException.MainDoc" >}}
[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
