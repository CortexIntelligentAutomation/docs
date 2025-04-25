---
title: "Studio Authorisation"
linkTitle: "Studio Authorisation"
description: "Manage the authorisation for access to flows in {{% ctx %}} Gateway."
weight: 50
---

# {{% param title %}}

## Summary

The Studio Authorisation page is used to manage the authorisation for access to flows within {{% ctx %}} Gateway. Each flow can be set to have [View][] or [Edit][] permissions assigned to LDAP Groups, or no access permissions at all.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Studio Authorisation.png" title="Studio Authorisation" >}}

The LDAP Groups that may be granted access are limited to those assigned the Studio role in LDAP Authorisation.

Permissions are set either explicitly or implicitly. Explicitly set permissions are assigned by the user performing an explicit action to set that item’s permissions, whereas implicitly set permissions are assigned automatically by the user explicitly setting the permissions on a parent group.

Permissions are explicitly set by setting the checkbox in either the [View][] or [Edit][] columns of the appropriate LDAP Group where it intersects with the flow or flow Group to which the permissions are to be assigned.  Permissions are explicitly removed by clearing the checkbox.

If an item is explicitly set with [Edit][] permissions, then that item will also be implicitly set with [View][] permissions. Explicitly setting an item with [View][] permissions does not implicitly set it with Edit permissions.

## Actions

### View

If an LDAP group is given `View` permissions on a flow, the members of the LDAP group can:

* View the flow
* Execute the flow

If an LDAP Group is given `View` only permissions on a flow group, the members of that LDAP group can only access existing flows and flow groups within that flow group.

If a flow group has `View` permissions either explicitly set or implicitly set, then its child flow groups or flows will have their `View` permissions be implicitly set.

If a flow group has its `View` permissions removed, then all its child flow groups or flows will have their `View` permissions removed, regardless of whether they were set explicitly or implicitly.

See the [Manage Flow Access][Manage Flow Access tutorial] tutorial for a step-by-step guide.

### Edit

If an LDAP group is given `Edit` permissions on a flow, the members of the LDAP group can:

* View the flow
* Execute the flow
* Edit the flow
* Delete the flow
* Commit changes to the flow
* Get the master version of the flow

If an LDAP Group is given `Edit` permissions on a flow group, the members of that LDAP group can create new flows and groups within that flow group.

If a flow group has `Edit` permissions explicitly set, then its child flow groups or flows will be implicitly set with both `Edit` and [`View`][View] permissions.

If a flow group has its `Edit` permissions removed, then all its child flow groups or flows will have their `Edit` permissions removed, regardless of whether they were set explicitly or implicitly.

If a flow is explicitly set with `Edit` permissions, then any parent Groups, which have not been explicitly set with [`View`][View] permissions, will be also implicitly set with [`View`][View] permissions.

See the [Manage Flow Access][Manage Flow Access tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* If a flow group is explicitly set Edit permissions, then the Groups View permissions will be implicitly set. However, if the explicitly set Edit permissions are removed from the Group, the implicitly set View permissions are not removed.

## See Also

### Related Concepts

None

### Related Tutorials

* [Manage Flow Access][Manage Flow Access tutorial]

[Edit]: {{< ref "#edit">}}
[View]: {{< ref "#view">}}
[Manage Flow Access tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioAuthorisation.ManageFlowAccess" >}}
