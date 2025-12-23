### Account Details

1. Enter an email address for the Administrator and click `Next`:
{{< figure class="centre" src="/images/Gateway Setup2.png" title="Administrator Details Screen" >}}
1. Change the Administrator password to a unique, secret password and click `Next`:
{{< figure class="centre" src="/images/Gateway Setup3.png" title="Change Password Screen" >}}

### Authentication

CORTEX Gateway can authenticate users against a Microsoft Active Directory ([LDAP][]) or an external OpenID Connect (OIDC) authentication service ([OpenID Connect][OIDC]). At least one authentication provider must be established in order to assign authorisation rights to users.

#### LDAP

1. Select the LDAP tab.
1. Enter the details of your Active Directory server and provide a Username and Password for a user with read access to it.

    1. In the `Server` field, enter the Hostname, FQDN or IP Address of the Active Directory server that Gateway should use to authenticate and authorise users.
    1. In the `Port` field, enter the port number of the Active Directory server. Typically either `389` for LDAP or `636` for LDAPS.
    1. If an SSL connection (LDAPS) is to be used, tick the box `Use SSL`.
    1. In the `Username` field, enter a valid username of an account that has read permissions in Active Directory; typically a service account is used.
    1. In the `Password` field, enter the password of the username entered in the `Username` field.
    1. To reduce the scope of any Active Directory searches, add one or more [Base DNs (Distinguished Names)][Base Dns]. For each base DN click `+` and enter the full LDAP path e.g `CN=group, OU=organisational unit, DC=domain, DC=com`. These will be used as the roots of any Active Directory searches performed.
1. Click `Test Connection` to validate the connection and the user credentials entered and click `Save`.
1. Click `Next` once the authentication setup has been completed.

{{< figure class="centre" src="/images/Gateway Setup4 LDAP.png" title="LDAP Authentication Screen" >}}

#### OpenID Connect

{{% alert title="Note" %}}
At this stage it is only possible to configure a single OpenID Connect Authentication provider. It is possible to add additional OIDC providers after the initial setup is completed. See the {{< ahref path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Authentication.OidcAuth" title="Authentication User Guide" >}} for further assistance.
{{% /alert %}}

1. Select the `OpenID Connect` tab.
1. Select `+ New Provider`.
1. Enter the details of your OpenID Connect provider; currently only the Microsoft Entra provider is supported:

    1. The `Provider Type` field is set to Microsoft as this is currently the only OIDC provider supported.
    1. In the `Identifier` field, enter a friendly unique name for this provider.
    1. In the `Display Name` field, enter a friendly display for this provider. This is displayed on the {{% ctx %}} Gateway sign-in button.
    1. In the `Authority` field, enter the URL to send authentication requests to. For Microsoft Entra this is `https://login.microsoftonline.com`.
    1. In the `Tenant Identifier` field, enter the Microsoft Entra Tenant ID for the organisation managing authentication.
    1. In the `Client Identifier` field, enter the unique identifier to identify the {{% ctx %}} Gateway application to the authentication provider.
    1. In the `Client Secret` field, enter the client secret that validates the {{% ctx %}} Gateway application with the authentication provider.
1. Click `Validate` to validate the information entered and click `Save`.
1. Click `Next` once the authentication setup has been completed.

{{< figure class="centre" src="/images/Gateway Setup4 OIDC.png" title="OpenID Connect Authentication Screen" >}}

### Authorisation

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

[LDAP]: {{< ref "#ldap" >}}
[OIDC]: {{< ref "#openid-connect" >}}

[Base DNs]: {{< url path="MSDocs.Windows.Ldap.DNs" >}}
