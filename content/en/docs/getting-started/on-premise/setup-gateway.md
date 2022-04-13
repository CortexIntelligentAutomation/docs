---
title: "Setup Cortex Gateway"
linkTitle: "Setup Cortex Gateway"
description: >
    Information on setting up Cortex Gateway for first-time use.
---

## Cortex Gateway Initial Setup

Log on to Cortex Gateway and run through the setup wizard

1. Navigate to `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
1. Log on using the default credentials that the solution deploys with:
    Username: `administrator`
    Password: `Adm1n1strat0r`
1. On a newly installed system, you will be presented with a Setup Wizard at this point, which will guide you through some basic configuration steps:
    * Account details
    * LDAP Connection
    * LDAP Authorization
1. Follow the steps in the setup wizard to configure the relevant areas:
    1. Click `Next Step`:
    {{< figure class="centre" src="/images/Gateway Setup1.png" title="Initial Setup Screen" >}}
    2. Enter an email address for the Administrator:
    {{< figure class="centre" src="/images/Gateway Setup2.png" title="Administrator Details Screen" >}}
    3. Change the Administrator password to a unique, secret password:
    {{< figure class="centre" src="/images/Gateway Setup3.png" title="Change Password Screen" >}}
    4. Enter the details of your LDAP server and provide a Username and Password for a user with read access to the LDAP server:
        A connection to an Active Directory or an LDAP server must be established in order to assign authorisation rights to users.
        1. In the Server field, enter the Hostname, FQDN or IP Address of the LDAP Server that Cortex Gateway should use to authenticate and authorise users.
        1. In the Port field, enter the port number of the LDAP Server. The well-known port for LDAP traffic is `389`; if SSL encryption is used, the well-known port is `636`.
        1. If an SSL connection is to be used, tick the box `Use SSL`.
        1. In the `Username` field, enter a valid username or a user that has read permissions for the LDAP Server.
        1. In the `Password` field, enter the password of the user entered in the previous step.
        1. To reduce the scope of the LDAP, add one or more base DNs (Distinguished Names). For each base DN click `Add` and enter the full LDAP path e.g `CN=group, OU=organisational unit, DC=domain, DC=com`. These will be used as the roots of the LDAP search. For more information about distinguished names see https://msdn.microsoft.com/en-us/library/aa366101(v=vs.85).aspx.
        1. Click `Test Connection` to validate the connection and the user credentials entered.
        1. Click `Next Step`.

        {{< figure class="centre" src="/images/Gateway Setup4.png" title="LDAP Connection Screen" >}}

    1. Click `Next Step`. If the authorisation grid fails to load first time round, just click `Retry`.
    1. Assign Studio access permissions to LDAP users (or groups):
    To allow users to access the various roles within Cortex, it is first necessary to assign them the appropriate access rights.
    Cortex currently supports four roles:

        * Admin
        * LiveView
        * Reporting
        * Studio

        To give a user access to a role, set access for an LDAP group or OU that the user is a member of:

        1. Expand the LDAP Groups or Organisational Units, or search for the group or OU, to be assigned authorisation. The LDAP Name or LDAP Type columns may be ordered alphabetically ascending or descending by clicking the down-arrow to the right of the column name and selecting the appropriate menu option.
        1. Click the intersection between the LDAP Group or OU and the role to be assigned to explicitly set authorisation.
        1. Click `Complete Setup` to commit the changes.

    {{< figure class="centre" src="/images/Gateway Setup5.png" title="LDAP Authorisation Screen" >}}

## Finish Gateway configuration

1. Log in to Cortex Gateway as your "administrator" user.
1. In the Cortex Gateway UI go to `Settings` → `LDAP Authorisation` and configure security roles for LDAP groups to your requirements. You can refer to `Section 2.2 Configuring Authorisation Rights` of the `Cortex Studio Admin Guide` for more details on this.
1. Log out and Login as a user with Studio permissions.

## Configure the Cortex Databases to use Transparent Data Encryption

Once Cortex Gateway has been configured, if you wish to encrypt the databases using TDE for improved security, this should now be performed by following the steps in [Configuring TDE][].

## Next Steps?
1. [Try it out][]

[Configuring TDE]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.Advanced.ApplyTDE" >}}
[Try it out]: {{< url "Cortex.GettingStarted.OnPremise.MultipleServerWithHA.TryItOut" >}}