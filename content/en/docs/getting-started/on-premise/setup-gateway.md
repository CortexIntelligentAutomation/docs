---
title: "Setup Cortex Gateway"
linkTitle: "Setup Cortex Gateway"
description: >
    Information on setting up Cortex Gateway for first-time use.
---

### Cortex Gateway Initial Setup

Log on to Cortex Gateway and run through the setup wizard

1. Navigate to `<protocol>://<host>:<port>/<webapplicationname>`, e.g. `https://localhost/gateway`.
2. Log on using the default credentials that the solution deploys with:
    Username: `administrator`
    Password: `Adm1n1strat0r`
3. On a newly installed system, you will be presented with a Setup Wizard at this point, see Figure 146, which will guide you through some basic configuration steps:
    * Account details
    * LDAP Connection
    * LDAP Authorization
4. Follow the steps in the setup wizard to configure the relevant areas – for more detail refer to "Section 2.1 Initial Configuration" in the Cortex Integrity - Studio Admin Guide which can be found on the Cortex Application server in the C:\Cortex\Help\PDF - TODO: Sort this out
    1. Click `Next Step`:
    {{< figure class="centre" src="/images/Gateway Setup1.png" title="Initial Setup Screen" >}}
    2. Enter an email address for the Administrator:
    {{< figure class="centre" src="/images/Gateway Setup2.png" title="Administrator Details Screen" >}}
    3. Change the Administrator password to a unique, secret password:
    {{< figure class="centre" src="/images/Gateway Setup3.png" title="Change Password Screen" >}}
    4. Enter the details of your LDAP server and provide a Username and Password for a user with read access to the LDAP server:
    {{< figure class="centre" src="/images/Gateway Setup4.png" title="LDAP Connection Scree" >}}
    5. Click `Next Step`. If this fails first time round, just click `Retry`.
    6. Assign Studio access permissions to LDAP users (or groups):
    {{< figure class="centre" src="/images/Gateway Setup5.png" title="LDAP Authorisation Screen" >}}

## Configure the Cortex Databases to use Transparent Data Encryption

Once Cortex Gateway has been configured, if you wish to encrypt the databases using TDE for improved security, this should now be performed. TODO: Link