---
title: "Variable Scopes"
linkTitle: "Variable Scopes"
description: "How variable scopes follow workspaces in CORTEX: where variables can be used, how to change scope, name collisions, and what happens when a variable goes out of scope."
weight: 3
---

# {{% param title %}}

## Summary

A **variable scope** is the [workspace][] where a [variable][] is defined. It controls where that variable can be used and when it is deleted during [flow execution][].

Variables can only be used in the workspace of the scope they are defined in and any descendant workspaces. Only variables in scope appear in the [Variable Editor][] or as [snippets][] in the [Expression Editor][]. When execution exits a workspace, local-scope variables declared in that workspace are deleted and their values are lost.

This is conceptually similar to [local variable / block scope][MS C# Scopes] in C#: a name is visible inside a region of code, and leaving that region ends the variable's lifetime. When a variable held a connection or session that stayed open, leaving scope closes that resource — similar in spirit to disposing at the end of a [`using`][MS using] statement.

Variable scopes are separate from [resource scopes][Resource Scopes] ([ScopeDefinition][] / [Scope][] used by collections and semaphores). For both meanings, see [What is a Scope?][].

Detailed fundamentals — including the full workspace hierarchy example — are in [Variable Scopes (fundamentals)][Fundamentals Variable Scopes]. This page summarises the same model for the Working With Scopes section and links out for procedures.

## Hierarchy and inheritance

{{% ctx %}} uses inherited scope: a block can use variables from its own workspace and from ancestor workspaces.

| Workspace | Parent | Defined variables (example) | Accessible variables |
| --- | --- | --- | --- |
| Top-Level Workspace | — | GlobalVarA, GlobalVarB | GlobalVarA, GlobalVarB |
| ChildWorkspace1 | Top-Level | ChildVarA, ChildVarB | GlobalVarA, GlobalVarB, ChildVarA, ChildVarB |
| ChildWorkspace2 | Top-Level | ChildVarC, ChildVarD | GlobalVarA, GlobalVarB, ChildVarC, ChildVarD |
| GrandChildWorkspace1 | ChildWorkspace1 | GrandChildVarA, GrandChildVarB | Globals + ChildWorkspace1 vars + its own |
| GrandChildWorkspace2 | ChildWorkspace2 | GrandChildVarC, GrandChildVarD | Globals + ChildWorkspace2 vars + its own |

Sibling workspaces do not see each other's local variables. See [Accessing Variables from Other Scopes][] on the fundamentals page for the complete table.

## Creating and changing variable scope

| Action | Where |
| --- | --- |
| Create a variable in the current workspace | [Variables Grid][] or [Variable Editor][] (creating a variable scopes it to the currently selected workspace) |
| Change a variable's scope | [Variables Grid][] — [change scope][Grid: Changing a Variable's Scope] |

The [Variable Editor][] lists only variables in scope for the selected block. Filtering matches name or scope text. Creating a new name from the editor scopes the new variable to the current workspace. See [Scoped Variables][] and [Creating Variables][] in the Variable Editor documentation.

## Name collisions

You can declare the same variable name in more than one workspace. When a block uses that name, the variable with the **closest** scope to the executing block is used.

Example:

* Top-Level workspace defines `($)Variable`
* Child-Level workspace also defines `($)Variable`

A block in Child-Level that uses `($)Variable` receives the Child-Level variable. The [Variable Editor][] dropdown likewise shows only the closest same-name variable.

This may change in future so developers can select which same-name variable to use. See [Known Limitations](#known-limitations).

## Going out of scope

When [flow execution][] leaves a workspace:

1. Local-scope variables declared in that workspace are **deleted**.
2. Their values are **lost**.

### Connections and sessions held in variables

Some resources stay open only while a variable remains in scope:

| Resource | Behaviour when Close is `false` and details are in a variable |
| --- | --- |
| Email session | Session stays open until the variable goes out of scope or the flow ends, whichever comes first |
| PowerShell session | Session stays open until the variable goes out of scope or the flow ends, whichever comes first |
| Ssh session | Session stays open until the variable goes out of scope or the flow ends, whichever comes first |
| Telnet session | Session stays open until the variable goes out of scope or the flow ends, whichever comes first |
| Data source connection | Connection stays open until the variable goes out of scope or the flow ends, whichever comes first |

If session or connection details are supplied as a literal or expression instead of a variable, the connection is closed after the block finishes and cannot be shared with later blocks the way a variable-backed resource can.

In C# terms, treat that lifetime like a resource that is disposed when execution leaves the declaring scope ([`using`][MS using] / [IDisposable][MS IDisposable]), not like a resource-scope identity for platform collections or semaphores.

## Comparison with C#

| Behaviour | C# analogue |
| --- | --- |
| Variable visible in declaring workspace and descendants | Local / block scope — see [scopes in the C# specification][MS C# Scopes] |
| Variable deleted when execution leaves the workspace | End of the declaring block; locals are no longer accessible |
| Connection or session closed when the holding variable leaves scope | Disposal at end of [`using`][MS using] when the resource implements [IDisposable][MS IDisposable] |

[Resource scopes][Resource Scopes] (Tenant / System / Package / Flow) do **not** map to C# variable scope; they are platform identity for shared resources. See [Resource Scopes][].

## Remarks

### Known Limitations

* When multiple variables share a name across workspaces, only the closest scope is used and shown in the [Variable Editor][]. Explicit selection of a farther same-name variable is not supported today and may be added in future. See [Fundamentals: Variable Scopes][Fundamentals Variable Scopes].

## See Also

### Related Concepts

* [What is a Scope?][]
* [Resource Scopes][]
* [Variable Scopes (fundamentals)][Fundamentals Variable Scopes]
* [What is a Variable?][]
* [What is a Workspace?][workspace]
* [Variable Editor][]

### Related Data Types

None specific to variable scopes — variable scope is a workspace concept, not [ScopeDefinition][] / [Scope][].

### Related Blocks

* [All Blocks][] (variable use is scoped by the block's workspace)

### External Documentation

* [Basic concepts — Scopes (C# language specification)][MS C# Scopes]
* [using statement (C#)][MS using]
* [IDisposable interface][MS IDisposable]

[What is a Scope?]: {{< ref "what-is-a-scope.md" >}}
[Resource Scopes]: {{< ref "resource-scopes.md" >}}

[Fundamentals Variable Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}
[Accessing Variables from Other Scopes]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.VariableScopes.MainDoc" >}}#accessing-variables-from-other-scopes
[What is a Variable?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}
[workspace]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}
[flow execution]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}
[Variable Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Scoped Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Creating Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.CreatingVariables" >}}
[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[snippets]: {{< url path="Cortex.Reference.Glossary.P-T.Snippets" >}}
[Variables Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.VariablesGrid.MainDoc" >}}
[Grid: Changing a Variable's Scope]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Dev.FlowEditor.BottomPanel.VariablesGrid.ModifyScope" >}}

[Email]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.WhatIsEmail.MainDoc" >}}
[Data source]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DataSources.WhatIsADataSource.MainDoc" >}}

[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc" >}}
[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc" >}}
[All Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" >}}

[MS C# Scopes]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/basic-concepts#77-scopes
[MS using]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using
[MS IDisposable]: https://learn.microsoft.com/en-us/dotnet/api/system.idisposable
