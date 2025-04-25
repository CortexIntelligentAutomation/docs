---
title: "Studio Hierarchy"
linkTitle: "Studio Hierarchy"
description: "Manage the flow hierarchy in {{% ctx %}} Gateway."
weight: 70
---

# {{% param title %}}

## Summary

The Studio Authorisation page is used to manage the authorisation for access to flows within {{% ctx %}} Gateway. Each flow can be set to have [View][] or [Edit][] permissions assigned to LDAP Groups, or no access permissions at all.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Studio Authorisation.png" title="Studio Authorisation" >}}

## Actions

### View


See the [Manage Flow Hierarchy][Manage Flow Hierarchy tutorial] tutorial for a step-by-step guide.

### Edit


See the [Manage Flow Hierarchy][Manage Flow Hierarchy tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* It is necessary for the parent Groups to have Edit permissions in addition to the flows to be moved, to enable the display of the flows in Studio Hierarchy.

## See Also

### Related Concepts

None

### Related Tutorials

* [Manage Flow Hierarchy][Manage Flow Hierarchy tutorial]

[Manage Flow Hierarchy tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioHierarchy.ManageFlowHierarchy" >}}
