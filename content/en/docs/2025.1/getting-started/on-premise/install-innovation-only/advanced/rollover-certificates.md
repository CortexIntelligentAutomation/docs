---
title: "Rollover CA certificates"
linkTitle: "Rollover CA certificates"
description: "Information about updating the certificates on a single or multi-server {{% ctx %}} platform which uses CA certificates."
---

# {{% param title %}}

{{% pageinfo %}}
This process MUST be undertaken before certificates expire, otherwise your system will become unusable. If certificates have already expired, contact {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}} at the earliest opportunity.

Only platforms which use CA certificates can have their certificates updated using this mechanism. Systems using self-signed certificates must be reinstalled.

This mechanism cannot be used to switch from self-signed to CA certificates; that requires a reinstall.
{{% /pageinfo %}}

{{% alert type="warning" title="Warning" %}}Updating the certificates on a single-server system with no high availability will result in downtime while the upgrade takes place. Ensure that this is undertaken at a suitable time. Systems with high availability will use a rollover mechanism which should not result in any downtime.{{% /alert %}}

## Application Server

### Prerequisites

#### Certificate Requirements

A new, valid X.509 certificate needs to be obtained to update the certificates.

The certificate can be obtained from a Certificate Authority, such as [Let’s Encrypt](<https://letsencrypt.org/>), and must meet the following requirements:

* Subject field must be in one of the following formats depending on whether a multi-domain or wildcard certificate is used:
  * Multi-domain certificate - If using the gobetween load balancer this should be specified as the FQDN of the load balancer server (e.g. `CN=load-balancer.domain.com`). If using a different load balancer this must be specified as the FQDN of one of the application servers (e.g. `CN=application-server.domain.com`)
  * Wildcard certificate - wildcard format, pertaining to the domain of the Application Servers (e.g. `CN=*.domain.com`).
* Subject alternative names must include any additional host names that should be able to be used to access the API Gateway Service.  Additionally if using a multi-domain certificate:
  * The FQDN, NetBIOS Name and IP address of all application servers must be added.
  * Optionally, the FQDN, NetBIOS Name and IP address of the web application server must be added if the same certificate is used for the web application server.
* Certificate file must be in a .PFX file format, with a known password.
* Certificate file must contain the full chain of certificates.
* Certificate file must include the private key.
* Key Usage extension must have a value of `Digital Signature, Key Encipherment (a0)`.
* Enhanced Key Usage must include `Server Authentication` and `Client Authentication`.

This file should be placed in a known location on the Application Server where the certificate update script will be run. This location will be required when running the update script.

If required, a separate X.509 SSL certificate can be obtained to be used by the load balancer to communicate with the Application Services. It must meet all of the other requirements laid out above, except the subject parameter can also be the FQDN of the load balancer (e.g. `CN=load-balancer.domain.com`).

### Configure Update Certificates Script

1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder, locate the `Cortex.Innovation.Update.Certificates.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="Multiple Servers with HA" >}}
.\Cortex.Update.Certificates.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePassword "#_173143083161001!153134111116076231173085078170111~219102086228187!128017006016134019248042194172107#" `
    -ClientCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ClientCertificatePassword "#_173143083161001!153134111116076231173085078170111~219102086228187!128017006016134019248042194172107#" `
    -Credential $Credential
        {{< /tab >}}
        {{< tab header="Single Server without HA" >}}
.\Cortex.Update.Certificates.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePassword "#_173143083161001!153134111116076231173085078170111~219102086228187!128017006016134019248042194172107#" `
    -SkipLoadBalancer `
    -Credential $Credential
        {{< /tab >}}
    {{< /tabpane >}}

    {{% alert title="Important" color="warning" %}}Parameters required to be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}} must be encrypted on one of the servers specified in the {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.EncryptionRequirementsNew" title="Encryption Requirements" >}} steps.{{% /alert %}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`ServerCertificatePath`                       | The local path of a new, valid .PFX certificate file on the server. Environment variables cannot be used. <br /><br />The certificate should meet the [Certificate Requirements][]. <br /><br />This certificate will be used for: <ul><li>Securing communication between the Application Services.</li><li>Allowing Application Services to identify themselves to clients such as Gateway.</li><li>Preventing unauthorised nodes from joining the single node cluster.</li><li>Connecting to Service Fabric Explorer from each of the Application Servers.</li></ul> |
    |`ServerCertificatePassword`                        | The password for the .PFX certificate file specified in `ServerCertificatePath`.{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`ClientCertificatePath`                       | The local path of a .PFX certificate file on the first Application Server in the `ApplicationServerIPv4Addresses` list. This can be the same certificate as the `ServerCertificatePath`. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended) and using the Built-In Load Balancer. The certificate should meet the [Certificate Requirements][].<br /><br />This certificate will be used for: <ul><li>Securing communication between the load balancer and the nodes on the Application Servers.</li></ul>|
    |`ClientCertificatePassword`                         | The password for the .PFX certificate file specified in `ClientCertificatePath`. <br /><br /> This is only needed if using the Built-In Load Balancer. {{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`SkipLoadBalancer`                             | Updates certificates without updating a load balancer. |
    |`Credential`                                   | The credentials of the user which will be used to perform remote operations on the server. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |

### Test Update Certificates Script

1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
    ```

1. Test `Cortex.Innovation.Update.Certificates.ps1` by running the following command:

    ```powershell
    .\Cortex.Innovation.Update.Certificates.ps1 -WhatIf
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the command to finish. It will display the output of the certificate update command without making any changes to the system.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are no errors, continue to the next section; otherwise, check if the errors have any instructions for rectifying the issue and follow them.

    If there are no useful instructions, check that all previous steps have been followed correctly and, if not, rectify it and run the command again. <br /><br />If this does not work, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance. The `WhatIf` script will have created a temporary version of the config file in the script location, showing what changes would be made to it when the script runs. The name is appended with `-WhatIf` (e.g. `Cortex.Innovation.Install.Config-WhatIf.json`). This file can be provided when obtaining support.

### Run Update Certificates Script

1. Update the certificates for the Application Services and the required infrastructure by running the following command (`Tee-Object` will write output to both the PowerShell console and a log file, the `FilePath` value can be changed if required):

    ```powershell
    .\Cortex.Innovation.Update.Certificates.ps1 | Tee-Object -FilePath "cortex-app-certificate-update-log.txt"
    ```

1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on the server and press OK.
1. Wait for the script to finish running. This should take approximately 10 minutes.
1. Check that there have been no errors in the script; these would appear in red in the console.

    If there are any errors, then please follow any instructions given within them to rectify the situation.

    If the errors do not give any instructions on how to rectify, see [Troubleshooting During Installation][] for further information; if this does not help then please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for assistance.

### Check Application Services

1. Log on to the server.
1. Import the certificate, used in the `ServerCertificatePath` parameter of the [Configure Update Certificates Script][] section, to your `Current User` certificate store. This can be achieved by double clicking on the certificate .PFX file and following the wizard.

1. Open a web browser.
1. Navigate to `https://server.domain.com:9080/Explorer`, where `server.domain.com` is the fully qualified domain name of the server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration.

    The screen should resemble that in the following figure:
    {{< figure src="/images/Service Fabric Explorer - Single.png" title="Healthy Service Fabric Explorer Cluster" >}}

    The status circles should be entirely green - this indicates that the node and all services and instances are healthy. Other status pages can be accessed by expanding items in the leftmost pane. Issues can be tracked down to the failing component by expanding items with warning triangles or error icons on.

    If there is still a warning that the certificate is close to expiring, wait a few hours and refresh the page and it should go away. It can take some time for the certificate to rollover.

## Web Application Server

If the Web Applications also use an expiring certificate, it will also need to be updated:

### Import the Certificate

If using a single server and using the same certificates for both the Application Services and Web Applications, a new certificate will already be installed. Otherwise, follow the following instructions to import the new certificate for use with the Web Applications:

1. Put the new, valid certificate in `.pfx` format on the Web Application Server.
1. Double click on the certificate file to open the install certificate wizard.
1. Select `Local Machine` then click `Next`.
1. Click `Next`.
1. Enter the Export Password which the certificate was generated with then click `Next`.
1. Select `Place all certificates in the following store`.
1. Click `Browse…`.
1. Select `Personal`, click `OK` then click `Next`.
1. Click `Finish`.

### Apply the Certificate

1. Open Internet Information Services (IIS) Manager.
1. In the left-hand pane of Internet Information Service (IIS) Manager, expand the server node.
1. Right-click on the Site node (usually `Cortex`) which contains Gateway.
1. Click `Edit Bindings...`
1. Click on the `https` binding and click `Edit...`.
1. Click the SSL Certificate `Select...` button and select the new certificate from the table. Click `OK` to close the dialog.
1. Click `OK` to close Edit Bindings dialog.
1. Click `Close` to close the Bindings dialog.
1. Open Gateway in a browser. Click the padlock icon next to the URL. The certificate displayed should be the updated one.

[Certificate Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.CertificateRequirementsNew" >}}
[Troubleshooting During Installation]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingDuringInstallation" >}}
[Configure Update Certificates Script]:  {{< ref "#configure-update-certificates-script" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}