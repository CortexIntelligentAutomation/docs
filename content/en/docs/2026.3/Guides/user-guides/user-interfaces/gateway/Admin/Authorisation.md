---
title: "Authorisation"
linkTitle: "Authorisation"
description: "Configure roles used to control access to functionality in {{% ctx %}} Gateway."
weight: 30
---

# {{% param title %}}

## Summary

The Authorisation page is used to assign roles within {{% ctx %}} Gateway based on the membership of Active Directory Security Groups ([LDAP Authentication][]) and Microsoft Entra Groups ([OIDC Authentication][]).

## Anatomy

{{< figure src="/images/Authorisation.png" title="Authorisation" >}}

The Authorisation grid allows roles to be assigned to groups:

* `Name` shows:
  * For [LDAP Authentication][], the Active Directory domain, organisational units, containers and Security Groups in a hierarchical tree; these groups are limited to those defined by the Base DNs configured.
  * For [OIDC Authentication][], the Provider's display name and groups in a hierarchical tree.

* `Type` identifies the type of object for that row.
* `Admin` and `Studio` are roles that can be assigned and contain checkboxes to indicate which object has access to which role.

  * Admin – provides access to administrative functions within {{% ctx %}} Gateway, including the ability to set user roles and permissions, import and export flows, creation and management of packages, etc.
  * Studio – provides access to set the permissions to view and/or edit any flow in the Flow Editor.

  Both the `Admin` and `Studio` roles may be assigned to a single group or groups of groups, to provide access to both the administrative functions in {{% ctx %}} Gateway and flows in the Flow Editor.

  Note: The `LiveView` and `Reporting` roles do not apply to {{% ctx %}}.

## Actions

### Assign {{% ctx %}} Roles to Security Groups

If an individual Group object is checked ({{< image src="/images/Authorisation - Individual Object Checked.png" >}}), then its parent objects will also be implicitly set ({{< image src="/images/Authorisation - Parent Object Implicit.png" >}}). If a parent object is checked ({{< image src="/images/Authorisation - Parent Object Explicit.png" >}}), all its child objects will be implicitly set ({{< image src="/images/Authorisation - Child Object Implicit.png" >}}). Objects may be individually unset by clicking the checked checkbox.

When all the role assignments have been completed, click the Save Changes button to commit the current role assignments.

See the [Assign {{% ctx %}} Roles to Security Groups][Assign {{% ctx %}} Roles to Security Groups tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The key shown at the bottom of the page to convey the role assignment state is incorrect.

## See Also

### Related Concepts

None

### Related Tutorials

* [Assign {{% ctx %}} Roles to Security Groups][Assign {{% ctx %}} Roles to Security Groups tutorial]

[Assign {{% ctx %}} Roles to Security Groups tutorial]: {{< url path="Cortex.Tutorials.Administration.Authorisation.AssignRoles" >}}

[LDAP Authentication]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Authentication.LdapAuth" >}}
[OIDC Authentication]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Authentication.OidcAuth" >}}
