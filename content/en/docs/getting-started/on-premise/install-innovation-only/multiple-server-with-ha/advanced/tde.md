---
title: "Configure the Gateway Databases to use Transparent Data Encryption"
linkTitle: "Configure TDE"
description: "Information about configuring Gateway Databases to use Transparent Data Encryption."
---

# {{< param title >}}

Once the [Gateway Setup][] steps have been completed, if you wish to encrypt the databases using [Transparent Data Encryption](https://docs.microsoft.com/en-us/sql/relational-databases/security/encryption/transparent-data-encryption?view=sql-server-ver15) (TDE) for improved security, this should now be performed.

Enabling TDE on the databases ensures that the data is encrypted on disk. The process to do this requires that you:

* Create a master key in the master database with a strong password. This password must be remembered and/or saved in a secure location to enable decryption of the database later.
* Create a certificate within SQL Server.
* Backup the certificate and store it in a secure location. If a database needed to be restored elsewhere for any reason the certificate will need to be imported to the new server.
* Create a database encryption key in each user database to be encrypted.
* Enable encryption on the database.

To enable TDE on the suite of Gateway Databases you should complete the following steps:

1. Open SQL Server Management Studio.
2. Open the `Cortex.Install.TDE.sql` script included within the `Cortex Evolution - Innovation 2022.5 - Web Application Server Installation Scripts` folder.
{{% alert title="Note" %}}This script will attempt to encrypt all Cortex Databases that exist on the system. Any that do not exist will be skipped. If you do not wish to encrypt all existing Cortex Databases then you should contact [Cortex Service Desk](https://support.cortex.co.uk/) for assistance with script modification.{{% /alert %}}
3. Set the `@sPassword` parameter value to a password that you wish to use. {{% alert title="Note" %}} This password must be set to a value that is not a blank or empty string, it cannot be `null` and the script will not execute if it is not changed from the pre-populated value of `StrongPassword`. The password must also meet your system’s minimum security requirements.{{% /alert %}}
4. You can change the names of the certificate and the name of the master key by changing the `@sCertName` and `@sKeyName` parameters if you so wish.
5. You can change the location that the certificate and key are backed up to by changing the value of the `@sBackupLocation` parameter.

    The location must already exist, and there must not be any files within the specified location with the same name as the certificate or master key names that have been specified.

    The user that this script will be executed as must also have write permissions to this location.
6. Once the parameters have been set appropriately you should now save the script.

    We recommended that the modified script is saved out to file (taking care to observe your own organisation's security policies for password management), before it is executed. This may help facilitate the support process if anything goes wrong.
7. Click `Execute` to run the script. It may take several minutes to execute depending on the size of the databases.
8. Once the script has completed successfully, you should move the backed-up certificate and master key to a secure location and the password specified should also be stored securely.

[Gateway Setup]: {{< url "Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.SetupGateway" >}}
