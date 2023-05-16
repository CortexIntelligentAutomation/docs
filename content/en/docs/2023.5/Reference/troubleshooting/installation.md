---
title: "Installation"
linkTitle: "Installation"
description: >
    Information on troubleshooting CORTEX Innovation installations.
---

# {{% param title %}}

## Troubleshooting issues during installation {#ts-during-installation}

### Root certificate verification failed as no root certificate has been specified {#ts-no-root-certificate}

If the installation fails with `Root certificate verification failed as no root certificate has been specified.` it means that Windows has not got the trusted root installed for the provided X.509 certificate. This can be rectified by providing the path to a .pem file containing the root certificate in the `pemRootCertificatePath` property for each certificate in the `serverCertificates` and/or `adminCertificates` section of the configuration file. After adding this, the installation script can be re-run. The following steps can be taken to create a .pem file and re-run the installation (these instructions may differ slightly depending on the Certificate Authority):

1. In order to find out the issuer of the certificate, if not already known, the following script can be used, replacing the password for the pfx file and certificate path as necessary:

    ```powershell
    $p = ConvertTo-SecureString -String "pfxPassword" -AsPlainText -Force
    $c = Get-PfxData -Password $p -FilePath "C:\Certificates\serverCert.pfx"
    $c | Format-List
    ```

1. This will give a list of `Other Certificates` and `End Certificates` contained in the .pfx file. The issuer can be found in the `Issuer` property of one of the `Other Certificates`. If there are more than one, it will be the one that does not appear as a `Subject` in any of the other items.
1. E.g. For a "Let's Encrypt" certificate this will give the following results:

    ```powershell
    OtherCertificates     : {[Subject]
                              CN=Let's Encrypt Authority X3, O=Let's Encrypt, C=US
                            [Issuer]
                              CN=DST Root CA X3, O=Digital Signature Trust Co.
                            [Serial Number]
                              0A0141420000015385736A0B85ECA708
                            [Not Before]
                              17/03/2016 16:40:46
                            [Not After]
                              17/03/2021 16:40:46
                            [Thumbprint]
                              E6A3B45B062D509B3382282D196EFE97D5956CCB
                            }
    EndEntityCertificates : {[Subject]
                              CN=*.domain.com
                            [Issuer]
                              CN=Let's Encrypt Authority X3, O=Let's Encrypt, C=US
                            [Serial Number]
                              03D3B2E5E7D75175C25B250305650ABE849A
                            [Not Before]
                              20/12/2019 16:27:36
                            [Not After]
                              19/03/2020 16:27:36
                            [Thumbprint]
                              D61356405B8D4AA11C29AF3D20F2D834C1A3039F
                            }
    ```

1. In this case, the root certificate is `DST Root CA X3`.
1. In a search engine, search for the CN of the issuer and one of the results should lead to a download of a .pem file or to a page with the certificate on it, which can then be copied and saved into a file with a .pem extension. Often, searching the issuer of the EndEntityCertificate, in the above case `Let’s Encrypt`, will also work.
1. E.g. for `Let’s Encrypt`, the results of the search for `DST Root CA X3` leads to `https://www.identrust.com/dst-root-ca-x3` which provides the following text to be saved as a .pem file:

    ```markdown
    -----BEGIN CERTIFICATE-----
    MIIDSjCCAjKgAwIBAgIQRK+wgNajJ7qJMDmGLvhAazANBgkqhkiG9w0BAQUFADA/
    MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT
    DkRTVCBSb290IENBIFgzMB4XDTAwMDkzMDIxMTIxOVoXDTIxMDkzMDE0MDExNVow
    PzEkMCIGA1UEChMbRGlnaXRhbCBTaWduYXR1cmUgVHJ1c3QgQ28uMRcwFQYDVQQD
    Ew5EU1QgUm9vdCBDQSBYMzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
    AN+v6ZdQCINXtMxiZfaQguzH0yxrMMpb7NnDfcdAwRgUi+DoM3ZJKuM/IUmTrE4O
    rz5Iy2Xu/NMhD2XSKtkyj4zl93ewEnu1lcCJo6m67XMuegwGMoOifooUMM0RoOEq
    OLl5CjH9UL2AZd+3UWODyOKIYepLYYHsUmu5ouJLGiifSKOeDNoJjj4XLh7dIN9b
    xiqKqy69cK3FCxolkHRyxXtqqzTWMIn/5WgTe1QLyNau7Fqckh49ZLOMxt+/yUFw
    7BZy1SbsOFU5Q9D8/RhcQPGX69Wam40dutolucbY38EVAjqr2m7xPi71XAicPNaD
    aeQQmxkqtilX4+U9m5/wAl0CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAOBgNV
    HQ8BAf8EBAMCAQYwHQYDVR0OBBYEFMSnsaR7LHH62+FLkHX/xBVghYkQMA0GCSqG
    SIb3DQEBBQUAA4IBAQCjGiybFwBcqR7uKGY3Or+Dxz9LwwmglSBd49lZRNI+DT69
    ikugdB/OEIKcdBodfpga3csTS7MgROSR6cz8faXbauX+5v3gTt23ADq1cEmv8uXr
    AvHRAosZy5Q6XkjEGB5YGV8eAlrwDPGxrancWYaLbumR9YbK+rlmM6pZW87ipxZz
    R8srzJmwN0jP41ZL9c8PDHIyh8bwRLtTcm1D9SZImlJnt1ir/md2cXjbDaJWFBM5
    JDGFoqgCWjBH4d1QB7wCCZAA62RjYJsWvIjJEubSfZGL+T0yjWW06XyxV3bqxbYo
    Ob8VZRzI9neWagqNdwvYkQsEjgfbKbYK7p2CNTUQ
    -----END CERTIFICATE-----
    ```

1. After saving the .pem file, transfer it to the same directory as other installation certificates.
1. Modify the installation configuration file to include the .pem file as the `pemRootCertificatePath` in the `serverCertificates` like so:

    ```json
      "serverCertificates": {
        "serverCert": {
          "pfxCertificatePath": "C:\\Certificates\\wildCardCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": "C:\\Certificates\\rootCert.pem"
        }
      }
    ```

1. If a load balancer is being used (not single server), modify the installation configuration file to include the .pem file as the `pemRootCertificatePath` in the `adminCertificates` like so:

    ```json
      "adminCertificates": {
        "loadBalancerCert": {
          "pfxCertificatePath": "C:\\Certificates\\lbCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": "C:\\Certificates\\lbRootCert.pem"
        }
      }
    ```

1. Run the installation script again.

### RabbitMQ commands not succeeding

When running the installation, if you get errors similar to the following:

``` shell
Retry rabbitmqctl start_app --erlang-cookie $ErlangCookie --longnames  .  Attempt 1
Retry rabbitmqctl start_app --erlang-cookie $ErlangCookie --longnames  .  Attempt 2
Retry rabbitmqctl start_app --erlang-cookie $ErlangCookie --longnames  .  Attempt ...
Retry rabbitmqctl start_app --erlang-cookie $ErlangCookie --longnames  .  Attempt 20
```

It means there is probably something wrong with the certificate verification with RabbitMQ. Please report issues like this to [CORTEX Service Portal][].

To work around this error, either uninstall the platform and reinstall it using a different certificate, otherwise disable peer-to-peer verification in RabbitMQ by carrying out the following steps:

1. Uninstall the platform by taking the following steps:
    1. Open a Windows PowerShell (x64) window as administrator.
    1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

        ```powershell
        cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
        ```

    1. Uninstall the platform by running the following command for your architecture:

    {{< tabpane lang="powershell" >}}
        {{< tab header="Multiple Servers With HA" >}}
        .\Cortex.Innovation.Uninstall.ps1
        {{< /tab >}}
        {{< tab header="Single Server Without HA" >}}
        .\Cortex.Innovation.Uninstall.ps1 -SkipLoadBalancer
        {{< /tab >}}
    {{< /tabpane >}}
    1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press OK.
    1. Wait for the command to finish.
1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder, navigate to `Resources`.
1. Backup the file `RabbitMqInterNodePublicTemplate.config` and then open it with a text editor.
1. Replace both instances of the text `verify_peer` with the text `verify_none`.
1. Change the value of both occurrences of `fail_if_no_peer_cert` to `false` so that they resemble the following:

    ```shell
    {fail_if_no_peer_cert, false},
    ```

1. Save and close `RabbitMqInterNodePublicTemplate.config`.
1. Re-run the installation script.

## Troubleshooting issues after installation {#ts-after-installation}

### CORTEX Innovation features not visible in CORTEX Gateway {#ts-no-innovation}

Check that the `Feature Flags` Guid in the `CortexGateway.SetParameters.xml` file used for installing CORTEX Gateway is correct. If it is not, update it and reinstall CORTEX Gateway or update the value in the `web.config` file and restart the website. If the value is correct, please contact [CORTEX Service Portal][] for assistance.

### CORTEX Innovation blocks not visible in CORTEX Studio {#ts-no-blocks}

Check that the `Dot NET flow debugger Endpoint` URL in the `CortexGateway.SetParameters.xml` file used for installing CORTEX Gateway is correct pay particular attention to the protocol - it should usually be `https`. If it is not, update it and reinstall CORTEX Gateway or update the value in the `web.config` file and restart the website.

Ensure that the Flow Debugger Service is running. Open IIS, click on `Application Pools`and ensure there is a `debugger` application pool which is showing that it is associated with 1 application. If not, go back to the CORTEX Flow Debugger Service installation steps and ensure that all steps were followed correctly.

If no misconfiguration can be found, the service log files may contain more information. These can be found on the Web Application Server at:

* %ProgramData%\Cortex\Cortex Flow Debugger
* C:\temp\Cortex.Gateway.log

Restart the Cortex website. Open IIS, In the `Connection` pane, browse to `Sites`. Select the `Cortex` website and click `Restart` in the `Manage Website` pane.

If the issues cannot be resolved, please contact [CORTEX Service Portal][] for assistance.

### Cannot publish a package {#ts-no-publish}

Check that the `Service Fabric Api Gateway Endpoint`, `Service Fabric Using Self Signed Certificates`, `Service Fabric ApiGateway Basic Auth Username` and `Service Fabric ApiGateway Basic Auth Password` in the `CortexGateway.SetParameters.xml` file used for installing CORTEX Gateway are correct. If any of them are not, update them and reinstall CORTEX Gateway or update the value in the "web.config" file and restart the website. If the value is correct, please contact [CORTEX Service Portal][] for assistance.

Ensure that the Application Services are healthy by following these steps:

1. Log on to one of the Application Servers and open a web browser.
1. Navigate to `https://app-server.domain.com:9080/Explorer`, where `app-server.domain.com` is the fully qualified domain name of any Application Server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration.

    If page access is denied it may be necessary to import the server certificate used in installation to the Current User certificate store (usually achieved by double clicking on it and following the wizard). If using self-signed certificates, the certificate can be retrieved by using the `Manage Computer Certificates` tool in Windows to export the CortexServerCertificate from the `Personal` store and then importing it to the Current User store by double-clicking on it and following the wizard. The browser may need to be restarted before the site can be accessed

    The screen should resemble that in the following figure, all services should have `Health State = OK` and `Status = Active`. All instances below the service should have Health State = OK and Status = Ready.

    {{< figure src="/images/Service Fabric Explorer.png" title="Healthy Service Fabric Explorer" >}}

    If any warning triangles appear, wait for 5 minutes or so as the cluster may still be starting up. If the cluster looks OK, ignore the rest of this step. If the warnings persist or anything on the screen goes red, use the filter buttons to find the individual elements which have errors or warnings. Warnings should not be ignored as they can indicate that the service can’t start but is still in the retry phase.
    If no useful message can be seen here, the service log files may contain more information.

If no solution can be found, please contact [CORTEX Service Portal][] for assistance.

### Managing RabbitMQ

There may be times when the logs provided by CORTEX Innovation Services and the errors displayed in Service Fabric Explorer are not enough to debug an issue that is occurring on the system. This can be due to RabbitMQ being a state where it can’t send messages between services.

To check that RabbitMQ is working as expected, remote desktop to an Application Server and navigate to `https://app-server1.domain.com:15671`, replacing `app-server1.domain.com` with the FQDN of one of the Application Servers. Sign in with username 'administrator' and the RabbitMQ password provided during the Application Server installation. The following should be displayed in the overview tab for a healthy cluster:

{{< figure src="/images/RabbitMQ Status.png" title="Healthy RabbitMQ status." >}}

{{% alert title="Note" %}} The username and password are not secure, but the RabbitMQ manager will only allow you to connect from localhost so it is not accessible to anyone who does not have remote desktop access. {{% /alert %}}

If there are any unhealthy nodes (red) you may need to restart the RabbitMQ Windows service on each of the nodes that is erroring. These can be restarted in any order, but they must be restarted one at a time; wait for the node in the RabbitMQ explorer to be green before restarting the next one (you may need to refresh the browser).

### Service Fabric Explorer displays errored services with RabbitMQ Broker Unreachable Exceptions

If, when checking Service Fabric Explorer, all services are showing as erroring and the details are displaying a message similar to the following:

```text
RabbitMQ.Client.Exceptions.BrokerUnreachableException (-2146232800)
None of the specified endpoints were reachable
```

There may be due to an incompatibility between the version of OpenSSL used and your processor. From Intel's website: **"OpenSSL* 1.0.2 beta (Jun 2014) to OpenSSL 1.0.2k (Jan 2017) contain bugs that either cause a crash or bad SHA (Secure Hash Algorithm) values on processors with the SHA extensions. Both bugs were fixed years ago; however, any application that uses the old version directly, or as one of its dependencies, will fail"**

To verify that this is the problem, open Event Viewer and look in Windows -> Application. If this problem has occurred there will be some errors in the event viewer which contain the following:

```text
Faulting application name: erl.exe, version: 0.0.0.0, time stamp: 0x5d80b978
Faulting module name: crypto.dll, version: 0.0.0.0, time stamp: 0x5d80baab
```

A workaround for this is provided by Intel. 

1. Uninstall the platform by taking the following steps:
    1. Open a Windows PowerShell (x64) window as administrator.
    1. Navigate PowerShell to inside the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder using the following command, modifying the path as necessary:

        ```powershell
        cd "C:\Install\Cortex Innovation {{< version >}} - App Server Install Scripts"
        ```

    1. Uninstall the platform by running the following command for your architecture:

    {{< tabpane lang="powershell" >}}
        {{< tab header="Multiple Servers With HA" >}}
        .\Cortex.Innovation.Uninstall.ps1
        {{< /tab >}}
        {{< tab header="Single Server Without HA" >}}
        .\Cortex.Innovation.Uninstall.ps1 -SkipLoadBalancer
        {{< /tab >}}
    {{< /tabpane >}}
    1. A credentials prompt will appear. Enter credentials of a domain user that is a member of the local Administrators group on all servers (Application and Load Balancer) and press OK.
    1. Wait for the command to finish.
1. Add a system environment variable, provided by Intel, to each Application Server by taking the following steps:
    1. Remote desktop to one of the Application Servers.
    1. Right-click on the Start Menu and select `System`.
    1. Click `Advanced system settings` to open the System Properties dialog.
    1. Click `Environment Variables...`.
    1. Under `System variables`, click `New...` to open the New System Variable dialog.
    1. Set the Variable name to `OPENSSL_ia32cap` and the Variable value to `:~0x20000000`. Make sure to include the colon at the start.
    1. Click OK.
    1. Repeat these steps for any other Application Servers.
1. Run the Application Servers installation script again.

### Service Fabric Explorer displays certificate is about to expire warning

If Service Fabric certificates are going to expire in fewer than 30 days, a warning is displayed as follows:

{{< figure src="/images/Service Fabric Explorer - Expiring Certificate.PNG" title="Service Fabric Explorer Certificate Expiring" >}}

*Certificate expiration: thumbprint = {thumbprint}, expiration {date} remaining lifetime is {time} please refresh ahead of time to avoid catastrophic failure.*

If this occurs on your server it is important to update your certificates as soon as possible using [Rollover Certificates][].

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
[Rollover Certificates]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" >}}
