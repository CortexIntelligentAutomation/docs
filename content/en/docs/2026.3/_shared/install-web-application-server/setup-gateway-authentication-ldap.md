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

[Base DNs]: {{< url path="MSDocs.Windows.Ldap.DNs" >}}
