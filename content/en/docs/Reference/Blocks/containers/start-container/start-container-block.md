---
title: "Start Container"
linkTitle: "Start Container"
description: "Indicates the start of a container."
---

![Icon](/blocks/containers-start-container-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Containers.StartContainer.StartContainerBlock)</p>

## Description

Indicates the start of a container; when a flow execution reaches this block it will create a new [scope][ContainerScope] for the container.

This is always the first block in a container. It cannot be deleted, and a container can only contain one of these blocks.

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
