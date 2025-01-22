---
title: "Setup Gateway"
linkTitle: "Setup Gateway"
description: "Information about setting up {{% ctx %}} Gateway for first-time use."
weight: 50
---

# {{% param title %}}

This guide describes how to setup Gateway. Please ensure that the [Gateway Installation][] has been completed before taking these steps.

## Gateway Initial Setup

Log on to Gateway and run through the setup wizard:

1. Open a [supported web browser][] and navigate to `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://server.domain.com/gateway`.

    If an error message is displayed in the browser, wait a few minutes and refresh the page as it is possible that the website was still starting.
1. Log on using the default credentials that Gateway deploys with:

    Username: `administrator`

    Password: `Adm1n1strat0r`
1. On a newly installed system, you will be presented with a Setup Wizard at this point, which will guide you through some basic configuration steps:
    * [Account Details]
    * [LDAP Connection]
    * [LDAP Authorisation]
1. Follow the steps in the setup wizard to configure the relevant areas:

    ### Account Details

    1. Click `Next Step`:
    {{< figure class="centre" src="/images/Gateway Setup1.png" title="Initial Setup Screen" >}}
    1. Enter an email address for the Administrator and click `Next Step`:
    {{< figure class="centre" src="/images/Gateway Setup2.png" title="Administrator Details Screen" >}}
    1. Change the Administrator password to a unique, secret password and click `Next Step`:
    {{< figure class="centre" src="/images/Gateway Setup3.png" title="Change Password Screen" >}}

    ### LDAP Connection

    1. Enter the details of your Active Directory server and provide a Username and Password for a user with read access to it:

        A connection to an Active Directory server must be established in order to assign authorisation rights to users.
        1. In the `Server` field, enter the Hostname, FQDN or IP Address of the Active Directory server that Gateway should use to authenticate and authorise users.
        1. In the `Port` field, enter the port number of the Active Directory server. The well-known port for LDAP traffic is `389`; if SSL encryption is used, the well-known port is `636`.
        1. If an SSL connection is to be used, tick the box `Use SSL`.
        1. In the `Username` field, enter a valid username of a user that has read permissions for the Active Directory server.
        1. In the `Password` field, enter the password of the user entered in the previous step.
        1. To reduce the scope of any Active Directory searches, add one or more base DNs (Distinguished Names). For each base DN click `Add` and enter the full LDAP path e.g `CN=group, OU=organisational unit, DC=domain, DC=com`. These will be used as the roots of any Active Directory searches performed. For more information about distinguished names see <https://msdn.microsoft.com/en-us/library/aa366101(v=vs.85).aspx>.
    1. Click `Test Connection` to validate the connection and the user credentials entered and click `Next Step`.

    {{< figure class="centre" src="/images/Gateway Setup4.png" title="LDAP Connection Screen" >}}

    ### LDAP Authorisation

    1. If the authorisation grid fails to load first time round, click `Retry`.
    1. Assign access permissions to Active Directory groups:

        To allow users to access the various roles within Gateway, it is first necessary to assign them the appropriate access rights.
        Gateway currently supports four roles, but only two are relevant for {{% ctx %}} Innovation:

        * Admin
        * Studio

        To give a user access to a role, set access for a group or Organisational Unit (OU) that the user is a member of:

        1. Expand the groups or OUs, or search for the group or OU, to be assigned one or more roles.
        1. Check the relevant roles for each group. Checking a parent group will cascade the setting to all child groups.

        {{< figure class="centre" src="/images/Gateway Setup5.png" title="LDAP Authorisation Screen" >}}

    1. Click `Complete Setup` to commit the changes.
    1. To test the permissions, log out as Administrator and then log in as a user with `Studio` permissions.

## Next Steps?

1. [Try it out][]

[Account Details]: {{< ref "#account-details" >}}
[Gateway Installation]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.GatewayInstallationNew" >}}
[LDAP Authorisation]: {{< ref "#ldap-authorisation" >}}
[LDAP Connection]: {{< ref "#ldap-connection" >}}
[supported web browser]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.WebBrowserRequirementsNew" >}}
[Try it out]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.TryItOut" >}}
