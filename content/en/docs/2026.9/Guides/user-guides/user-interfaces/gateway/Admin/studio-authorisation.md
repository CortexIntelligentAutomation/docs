---
title: "Studio Authorisation"
linkTitle: "Studio Authorisation"
description: "Configure access to flows in {{% ctx %}} Gateway."
weight: 50
---

# {{% param title %}}

## Summary

The Studio Authorisation page is used to configure access to flows within {{% ctx %}} Gateway. Each flow can be set to have [`View`][View] or [`Edit`][Edit] permissions assigned to LDAP Groups that exist in the Active Directory server configured in LDAP Connection for {{% ctx %}} Gateway, or no access permissions at all.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Studio Authorisation.png" title="Studio Authorisation" >}}

The LDAP Groups that may be granted access are limited to those assigned the `Studio` role in LDAP Authorisation.

Permissions are set either explicitly or implicitly. Explicitly set permissions are assigned by the user performing an explicit action to set that item’s permissions, whereas implicitly set permissions are assigned automatically by the user explicitly setting the permissions on a parent group.

Permissions are explicitly set by setting the checkbox in either the [View][] or [Edit][] columns of the appropriate LDAP Group for the flow or group to which the permissions are to be assigned.  Permissions are explicitly removed by clearing the checkbox.

If an item is explicitly set with [`Edit`][Edit] permissions, then that item will also be implicitly set with [`View`][View] permissions. Explicitly setting an item with [`View`][View] permissions does not implicitly set it with Edit permissions.

## Actions

### View

If an LDAP group is given `View` permissions on a flow, the members of the LDAP group can:

* View the flow
* Debug the flow

If an LDAP Group is given `View` permissions on a group, the members of that LDAP group can:

* View all descendent groups and flows
* Debug all descendent flows

If a group has `View` permissions either explicitly set or implicitly set, then its child groups and flows will have their `View` permissions implicitly set.

If a group has its `View` permissions removed, then all its child groups and flows will have their `View` permissions removed, regardless of whether they were set explicitly or implicitly.

See the [Manage Flow Access][Manage Flow Access tutorial] tutorial for a step-by-step guide.

### Edit

If an LDAP group is given `Edit` permissions on a flow, the members of the LDAP group can:

* View the flow
* Debug the flow
* Edit the flow
* Move the flow
* Rename the flow
* Delete the flow
* Commit changes to the flow
* Get the master version of the flow

If an LDAP Group is given `Edit` permissions on a group, the members of that LDAP group can:

* Create new flows and groups within the group
* View all descendent flows and groups
* Debug all descendent flows
* Edit all descendent flows
* Move all descendent flows
* Rename all descendent flows
* Delete all descendent flows
* Commit changes to all descendent flows
* Get the master version of all descendent flows

If a group has `Edit` permissions explicitly set, then its child groups and flows will be implicitly set with both `Edit` and [`View`][View] permissions.

If a group has its `Edit` permissions removed, then all its child groups and flows will have their `Edit` permissions removed, regardless of whether they were set explicitly or implicitly.

If a flow is explicitly set with `Edit` permissions, then any parent groups, which have not been explicitly set with [`View`][View] permissions, will be implicitly set with [`View`][View] permissions.

See the [Manage Flow Access][Manage Flow Access tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The state of whether a permission is granted explicitly or implicitly is not persisted between the page being closed and reopened.

## See Also

### Related Concepts

None

### Related Tutorials

* [Manage Flow Access][Manage Flow Access tutorial]

[Edit]: {{< ref "#edit">}}
[View]: {{< ref "#view">}}
[Manage Flow Access tutorial]: {{< url path="Cortex.Tutorials.Administration.StudioAuthorisation.ManageFlowAccess" >}}
