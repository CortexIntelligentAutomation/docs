---
title: "Authorisation"
linkTitle: "Authorisation"
description: "Setup authorisation for accessing {{% ctx %}} Gateway."
weight: 30
---

# {{% param title %}}

## Summary

The Authorisation page is used to assign roles within {{% ctx %}} Gateway based on the membership of Active Directory Security Groups ([LDAP Authentication][]) and Microsoft Entra Groups ([OIDC Authentication][]).

## Anatomy

{{< figure src="/images/Authentication - OIDC.png" title="Open ID Connect Provider Configuration" >}}

TODO

## Actions

### Assign {{% ctx %}} Roles to Security Groups

TODO

See the [Assign {{% ctx %}} Roles to Security Groups][Assign {{% ctx %}} Roles to Security Groups tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* The Key shown at the bottom of the page to convey the role assignment state is incorrect.

## See Also

### Related Concepts

None

### Related Tutorials

* [Assign {{% ctx %}} Roles to Security Groups][Assign {{% ctx %}} Roles to Security Groups tutorial]

[Assign {{% ctx %}} Roles to Security Groups tutorial]: {{< url path="Cortex.Tutorials.Administration.Authorisation.AssignRoles" >}}

[LDAP Authentication]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Authentication.LdapAuth" >}}
[OIDC Authentication]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Authentication.OidcAuth" >}}
