See the [Assign {{% ctx %}} Roles to Security Groups][Assign {{% ctx %}} Roles to Security Groups tutorial] tutorial for a step-by-step guide.

1. If the authorisation grid fails to load first time round, click `Retry`.
1. Assign access permissions to authenticated groups:

    To allow users to access the various roles within Gateway, it is first necessary to assign them the appropriate access rights.
    Gateway currently supports four roles, but only two are relevant for {{% ctx %}}:

    * Admin
    * Studio

    To give a user access to a role, set access for a group or Organisational Unit (OU) that the user is a member of:

    1. Expand the groups or OUs, or search for the group or OU, to be assigned one or more roles.
    1. Check the relevant roles for each group. Checking a parent group will cascade the setting to all child groups.

1. Click `Complete Setup` to commit the changes.
1. To test the permissions, log out as Administrator and then log in as a user assigned `Studio` permissions.

{{< figure class="centre" src="/images/Gateway Setup5.png" title="LDAP Authorisation Screen" >}}

[Assign {{% ctx %}} Roles to Security Groups tutorial]: {{< url path="Cortex.Tutorials.Administration.Authorisation.AssignRoles" >}}
