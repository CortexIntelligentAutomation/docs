---
title: "What is a Scope?"
linkTitle: "What is a Scope?"
description: "Overview of scopes in CORTEX: resource scopes that isolate shared platform resources, and variable scopes that control where variables can be used and when they go out of scope."
weight: 1
---

# {{% param title %}}

## Summary

In {{% ctx %}}, **scope** means more than one thing. The same word appears when you configure shared platform resources (such as [data storage collections][] and [semaphores][]) and when you work with [variables][] in [workspaces][]. Both uses control *where* something is visible or shared — but they apply to different parts of the platform.

| Kind of scope | What it controls | Typical use |
| --- | --- | --- |
| [Resource scopes][Resource Scopes] | Which tenant, system, package, and flow share a named platform resource | [Collection Scope][] on data storage blocks; [Scope][Semaphore Scope] on [SemaphoreSettings][] |
| [Variable scopes][Variable Scopes] | Which [workspace][] a [variable][] belongs to, where it can be used, and when it is deleted | Variables Grid, [Variable Editor][]; connections and sessions that close when a variable goes out of scope |

## Types of Scopes

### Resource scopes

A **resource scope** isolates shared platform resources so that the same name in a different scope refers to a different instance. You define the intended sharing with a [ScopeDefinition][]; at runtime that definition resolves to a [Scope][] with string values for Tenant, System, Package, and Flow.

Common examples:

* [Data Storage Collections][data storage collections] — identified by [collection scope][Resource Scopes] plus [collection name][]
* [Semaphores][semaphores] — identified by [Scope][Semaphore Scope] plus [Name][Semaphore Name]

Levels today are Tenant, System, Package, and Flow. Environment and PackageVersion levels are planned for future releases. See [Resource Scopes][].

### Variable scopes

A **variable scope** is the [workspace][] where a [variable][] is defined. Variables are available in that workspace and in descendant workspaces. When [flow execution][] leaves a workspace, local-scope variables declared there are deleted.

Resources held in variables — for example [email][] sessions or [data source][] connections that stay open while [Close Session][] / [Close Connection][] is `false` — close when the variable goes out of scope or the flow ends, whichever comes first. See [Variable Scopes][].

## Working with Scopes

| Goal | Prefer |
| --- | --- |
| Choose how widely a data storage collection or semaphore is shared | [Resource Scopes][] |
| Define or inspect a [ScopeDefinition][] / [Scope][] / [ScopeOption][] | [Resource Scopes][] and the related data type pages |
| Understand where a variable can be used, or change its workspace | [Variable Scopes][] (and fundamentals [Variable Scopes][Fundamentals Variable Scopes]) |
| Understand when a session or connection closes because a variable left scope | [Variable Scopes][] — also [What is Email?][email] and [What is a Data Source?][data source] |

## Remarks

### Known Limitations

* Resource scope levels Environment and PackageVersion are not available yet; only Tenant, System, Package, and Flow are defined today.
* When several [variables][] share the same name in different workspaces, the variable with the closest scope to the executing block is used. This may change in future so developers can select a specific same-name variable explicitly. See [Variable Scopes][].

## See Also

### Related Concepts

* [Resource Scopes][]
* [Variable Scopes][]
* [Fundamentals: Variable Scopes][Fundamentals Variable Scopes]
* [What is a Semaphore?][semaphores]
* [What is a Collection?][]
* [What is Email?][email]
* [What is a Data Source?][data source]
* [What is a Workspace?][workspaces]
* [What is a Variable?][variables]

### Related Data Types

* [ScopeDefinition][]
* [ScopeOption][]
* [Scope][]
* [SemaphoreSettings][]

### Related Blocks

* [Create Collection][]
* Blocks that use the [semaphore property][Semaphore Property] (see [Common Properties][])

### Related Exceptions

* [SemaphoreCouldNotBeAcquiredException][]
* [DataStorageCollectionNotFoundException][]

### External Documentation

* [Basic concepts — Scopes (C# language specification)][MS C# Scopes]

[Resource Scopes]: {{< ref "resource-scopes.md" >}}
[Variable Scopes]: {{< ref "variable-scopes.md" >}}

[Fundamentals Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[workspaces]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Common Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.MainDoc" >}}
[Semaphore Property]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.CommonProperties.SemaphoreProperty" >}}

[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc" >}}
[ScopeOption]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeOption.MainDoc" >}}
[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc" >}}
[SemaphoreSettings]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.MainDoc" >}}
[Semaphore Scope]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Scope" >}}
[Semaphore Name]: {{< url path="Cortex.Reference.DataTypes.Concurrency.Semaphores.SemaphoreSettings.Name" >}}

[data storage collections]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.DataStorage" >}}
[What is a Collection?]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.WhatIsACollection.MainDoc" >}}
[Collection Scope]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[collection name]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[Create Collection]: {{< url path="Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBlock.MainDoc" >}}
[semaphores]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Concurrency.Semaphores.WhatIsASemaphore.MainDoc" >}}
[email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.WhatIsEmail.MainDoc" >}}
[data source]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}
[Close Session]: {{< url path="Cortex.Reference.Blocks.Email.SendEmail.SendEmailUsingSmtpServer.CloseSessionProperty" >}}
[Close Connection]: {{< url path="Cortex.Reference.Blocks.Data.ExecuteDataCommand.ExecuteDataCommand.CloseConnectionProperty" >}}

[SemaphoreCouldNotBeAcquiredException]: {{< url path="Cortex.Reference.Exceptions.Concurrency.Semaphores.SemaphoreCouldNotBeAcquiredException.MainDoc" >}}
[DataStorageCollectionNotFoundException]: {{< url path="Cortex.Reference.Exceptions.DataStorage.DataStorageCollectionNotFoundException.MainDoc" >}}

[MS C# Scopes]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#77-scopes
