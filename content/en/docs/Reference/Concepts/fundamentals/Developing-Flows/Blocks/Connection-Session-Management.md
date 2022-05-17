---
title: "Connection and Session Management"
linkTitle: "Connection and Session Management"
description: "The management of connections and sessions to third-party systems."
weight: 30
---

# {{< param title >}}

## Summary

Some OCI [blocks][What-Is-Block] use the concept of establishing a session to third party systems in order to exchange data; for example, the [Execute Command][Block-Execute-Command] [block][What-Is-Block], which can be used to interwork with an external database.

Connection details, contained in an [object][Object], are used to uniquely define the session to be established.

As establishing a session with third party equipment typically takes a significant amount of time (compared to performing the transaction itself), it is often desirable to maintain the open session that has been established for further transactions.

### Literal Connection Details

Connection details expressed in a [literal object][Object-Literal] will allow the session to be established for one transaction; the session will be closed when the OCI [block][What-Is-Block] completes the transaction.

### Connection Details Stored in a Variable

 If the connection details [object][Object] are assigned to a variable first, referencing the variable in the OCI [block's][What-Is-Block] Connection Details [property][Block-Properties] will cause first OCI [block][What-Is-Block] referencing this variable to establish the session and perform its transaction; the session will not be closed when the OCI [block][What-Is-Block] completes the transaction.

 Successive OCI [blocks][What-Is-Block] referencing the same connection details variable  will utilise the already open session to perform their transactions.

### Automatic Session Management

A session will be automatically closed when the connection string variable goes out of [scope][Local-Scope-Variables], or the [flow execution][What-Is-Execution] terminates.

### Manual Session Management

For a session that has been established using a connection string variable, the session may be manually closed by setting the **Close Connection** [property][Block-Properties] to `true` on the last OCI [block][What-Is-Block] to be used for this sequence of transactions.

## Related Concepts

* [Blocks][What-Is-Block]
* [Block Properties][Block-Properties]
* [Variable Scope][Local-Scope-Variables]
* [Flow Execution][What-Is-Execution]

## Related Blocks

* [Execute Command block][Block-Execute-Command]

[Block-Execute-Command]: {{< url "Cortex.Reference.Blocks.Data.ExecuteCommand.ExecuteCommand.MainDoc" >}}
[Block-Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.MainDoc" >}}
[Object]: {{< url "Cortex.Reference.DataTypes.MostCommon.Object" >}}
[What-Is-Block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.What-Is-A-Block.MainDoc" >}}
[What-Is-Execution]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Executions.What-Is-An-Execution.MainDoc" >}}
[Local-Scope-Variables]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Workspaces.Scope.Local-Scope-Variables" >}}
[Object-Literal]: {{< url "Cortex.Reference.Concepts.Fundamentals.Developing-Flows.Blocks.Block-Properties.Literals-Expressions-Variables.Object-Literal" >}}
