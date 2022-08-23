---
title: "Variable Scopes"
linkTitle: "Variable Scopes"
description: "Information regarding variable scopes, including: what they are, creating variables at a specific scope, and changing a variable's scope."
weight: 200
---
# {{% param title %}}

## Summary

Each [workspace][] in a [flow][] has a scope. A scope is where [variables][variable] are defined and controls where they can be used.

Variables can only be used in the workspace of the scope they are defined in and any descendant workspaces. Only variables in scope will be available in the [Variable Editor][], or the [Expression Editor][] using [snippets][]. For an example see [Accessing Variables from Other Scopes][].

When the [flow execution][execution] exits a workspace, any local-scope variables that have been declared in that workspace are deleted and their values, if any, are lost.

## Accessing Variables from Other Scopes

For example, the table below shows a hierarchy of workspaces and which variables are available to each workspace due to their scope:

| Workspace Name | Parent Workspace | Defined Variables | Available Variables |
|----------------|------------------|-------------------|---------------------|
| Top-Level Workspace | N/A | <ul><li>GlobalVarA</li><li>GlobalVarB</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li></ul> |
| ChildWorkspace1 | Top-Level Workspace | <ul><li>ChildVarA</li><li>ChildVarB</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li><li>ChildVarA</li><li>ChildVarB</li></ul> |
| ChildWorkspace2 | Top-Level Workspace | <ul><li>ChildVarC</li><li>ChildVarD</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li><li>ChildVarC</li><li>ChildVarD</li></ul> |
| GrandChildWorkspace1 | ChildWorkspace1 | <ul><li>GrandChildVarA</li><li>GrandChildVarB</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li><li>ChildVarA</li><li>ChildVarB</li><li>GrandChildVarA</li><li>GrandChildVarB</li></ul> |
| GrandChildWorkspace2 | ChildWorkspace2 | <ul><li>GrandChildVarC</li><li>GrandChildVarD</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li><li>ChildVarC</li><li>ChildVarD</li><li>GrandChildVarC</li><li>GrandChildVarD</li></ul> |

## Creating Variables at a Specific Scope

[Variables][variable] can be created by using the [Variables Grid][Grid: Creating Variables], or through the use of the [Variable Editor][Editor: Creating Variables]. When a new variable is created, it is created in the scope of the currently selected [workspace][]. It is possible to [Change a Variable's Scope][Changing a Variable's Scope]

## Changing a Variable's Scope

A [variable's][variable] scope can be changed by using the [Variables Grid][Grid: Changing a Variable's Scope].

## Remarks

### Known Limitations

#### When using variables of the same name the closest scoped is used

It is possible to create multiple [variables][variable] with the same name in the [Variables Grid][]. When using the same name in different [workspaces][workspace], the variable with the closest scope will be used.

For example:

- `Top-Level` workspace has the variable `($)Variable`
- `Child-Level` workspace also has the variable `($)Variable`

When executing a block in `Child-Level` that uses `($)Variable`, the variable that is used is the variable defined in `Child-Level`.

This may change in future to allow developers to specifically select which of the variables with the same name is used in this scenario.

## See Also

### Related Concepts

- [Flows][]
- [Workspaces][]
- [Blocks][]
- [Block Properties][]
- [Executions][]

### Related Blocks

- [All Blocks][]

### External Documentation

None

[Accessing Variables from Other Scopes]: {{< ref "#accessing-variables-from-other-scopes" >}}
[Changing a Variable's Scope]: {{< ref "#changing-a-variables-scope" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[Block Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}
[Expression Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Editor: Creating Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.CreatingVariables" >}}

[Executions]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.MainDoc" >}}
[execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Executions.WhatIsAnExecution.MainDoc" >}}

[Flows]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[flow]: {{< url "Cortex.Reference.Concepts.Fundamentals.Flows.WhatIsAFlow.MainDoc" >}}

[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.MainDoc" >}}
[workspace]: {{< url "Cortex.Reference.Concepts.Fundamentals.Workspaces.WhatIsAWorkspace.MainDoc" >}}

[Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[variable]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.MainDoc" >}}

[Variables Grid]: {{< url "Cortex.Guides.Studio.SouthPanel.VariablesGrid" >}}
[Grid: Creating Variables]: {{< url "Cortex.Guides.Studio.SouthPanel.CreatingVariables" >}}
[Grid: Changing a Variable's Scope]: {{< url "Cortex.Guides.Studio.SouthPanel.ChangingAVariablesScope" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}

[snippets]: {{< url "Cortex.Reference.Glossary.P-T.Snippets" >}}
