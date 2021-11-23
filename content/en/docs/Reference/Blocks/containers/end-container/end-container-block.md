---
title: "End Container"
linkTitle: "End Container"
description: "Indicates the end of a container."
---

![Icon](/blocks/containers-end-container-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Containers.EndContainer.EndContainerBlock)</p>

## Description

Indicates the end of a container; when a flow execution reaches this block it will exit the container, and all variables declared in the [scope][ContainerScope] of the container are deleted.

A container can contain any number of these blocks, and they can be placed anywhere in the container.

The block has no block specific properties, but it does have the `Description` property that is common to all blocks. This allows users to give each block a description; typically this will be left blank for this block.

A breakpoint can be added to this block when debugging.

## Examples

No examples for the block.

## Properties

No properties for the block, other than the `Description` property that is common to all blocks.

## Exceptions

No exceptions are thrown by the block.

## Remarks

### Container Scope

Each container has its own scope; as a result, variables can be defined that only exist and are accessible in this container and any of its sub-containers. On exiting a container any variables defined for the container's scope are deleted.

For information about variables and scope, please see [Working with Variables][].

[ContainerScope]: {{< ref "#container-scope" >}}

[Working with Variables]: {{< url "Cortex.Reference.Concepts.WorkingWithVariables.MainDoc" >}}
