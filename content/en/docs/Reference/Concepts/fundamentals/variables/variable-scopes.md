---
title: "Variable Scopes"
linkTitle: "Variable Scopes"
description: "The page provides guidance on creating and working with variables in different scopes"
---
# {{< param title >}}

## What is a Scope?

Each workspace in a flow has a Variable Scope. Variables defined in a workspace can only be used in the workspace they are defined in, and any subordinate workspaces. If a variable is not in scope of a block, the variable will not be available in the [Variable Editor][] or the [Expression Editor][] using [Snippets][].

| Workspace Name | Parent Workspace | Defined Variables | Available Variables |
|----------------|------------------|-------------------|---------------------|
| Top-Level Workspace | n/a | <ul><li>GlobalVarA</li><li>GlobalVarB</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li></ul> |
| Workspace1 | Top-Level Workspace | <ul><li>WSVar1</li><li>WSVar2</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li><li>WSVar1</li><li>WSVar2</li></ul> |
| Workspace2 | Top-Level Workspace | <ul><li>WSVar3</li><li>WSVar4</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li><li>WSVar3</li><li>WSVar4</li></ul> |
| Workspace3 | Workspace1 | <ul><li>WSVar5</li><li>WSVar6</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li><li>WSVar1</li><li>WSVar2</li><li>WSVar5</li><li>WSVar6</li></ul> |
| Workspace4 | Workspace2 | <ul><li>WSVar7</li><li>WSVar8</li></ul> | <ul><li>GlobalVarA</li><li>GlobalVarB</li><li>WSVar3</li><li>WSVar4</li><li>WSVar7</li><li>WSVar8</li></ul> |

## Create a Variable in a certain Scope

Variables are created in the scope of the workspace currently in focus. This applies to creating variables using the [Variable Grid][] or using the [Variable Editor][] in the [Property Viewer][]. If the variable was not created in the appropriate scope, see [Change Variable Scope](#change-variable-scope)

## Change Variable Scope

Variable scope can be changed after a variable has been created.

1. Find the variable in the [Variable Grid][]
2. Double-click the **Scope** to load a dropdown menu
3. Select the desired workspace

If the variable does not appear in the grid, the most likely reason is the variable is not in scope of the workspace currently in focus. To resolve this, either select the appropriate workspace, or change the **Scope** filter on the [Variable Grid][] to **All**.

## Remarks

### Known Limitations

#### Duplicate Variable Names across states

It is currently possible to create more than one variable of the same name in the [Variable Grid][]. This is because the same variable name can be used in different states.

When using the same variable name in different states, the variable with the lowest level of scope (or closest scope) will be used. For example:

**Top-Level Workspace** has a variable called `loop-var`. **Workspace1** has a variable called `loop-var` as well.

When executing a block in **Workspace1** that uses `loop-var`, the variable that is used is the variable defined in **Workspace1**.

## See Also

### Related Concepts

#### Workspaces

See [Workspaces][] for more information.

### Related Blocks

#### Workspace Block

- [Workspaces][Workspace-block]

[Variable Grid]: {{< url "Cortex.Guides.Gateway.Studio.SouthPanel.VariableGridInnovation" >}}
[Property Viewer]: {{< url "Cortex.Guides.Gateway.Studio.EastPanel.PropertyViewer" >}}
[Expression Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.ReferencingVariables.UsingExpressionEditor.MainDoc" >}}
[Variable Editor]: {{< url "Cortex.Reference.Concepts.Fundamentals.Variables.ReferencingVariables.UsingVariableEditor.MainDoc" >}}
[Snippets]: {{< url "Cortex.Reference.Glossary.P-T.Snippets" >}}
[Workspace-block]: {{< url "Cortex.Reference.Blocks.Workspaces.Workspace.WorkspaceBlock.MainDoc" >}}
[Workspaces]: {{< url "Cortex.Reference.Concepts.Fundamentals.DevelopingFlows.Workspaces.MainDoc" >}}