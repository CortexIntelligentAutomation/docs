---
title: "Installation"
linkTitle: "Installation"
description: >
    Information on troubleshooting Cortex Innovation installations.
---

# {{< param title >}}

## Troubleshooting issues during installation {#ts-during-installation}

### Root certificate verification failed as no root certificate has been specified {#ts-no-root-certificate}

If the installation fails with `Root certificate verification failed as no root certificate has been specified.` it means that Windows has not got the trusted root installed for the provided X.509 certificate. This can be rectified by providing the path to a .pem file containing the root certificate in the `pemRootCertificatePath` property for each certificate in the `serverCertificates` and `adminCertificates` section of the configuration file. After adding this, the installation script can be re-run. The following steps can be taken to create a .pem file and re-run the installation (these instructions may differ slightly depending on the Certificate Authority):

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
1. Modify the following, highlighted sections of the installation configuration file like so:

    ```json
      "serverCertificates": {
        "serverCert": {
          "pfxCertificatePath": "C:\\Certificates\\wildCardCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": "C:\\Certificates\\rootCert.pem"
        }
      },
      "adminCertificates": {
        "loadBalancerCert": {
          "pfxCertificatePath": "C:\\Certificates\\lbCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": "C:\\Certificates\\lbRootCert.pem"
        }
      }
    ```

1. Run the installation script again.

## Troubleshooting issues after installation {#ts-after-installation}

### Cortex Innovation features not visible in Cortex Gateway {#ts-no-innovation}

Check that the `Feature Flags` Guid in the `parameters.xml` file used for installing Cortex Gateway is correct. If it is not, update it and reinstall Cortex Gateway or update the value in the `web.config` file and restart the website. If the value is correct, please contact [Cortex Service Desk](https://support.cortex.co.uk/) for assistance.

### Cortex Innovation blocks not visible in Cortex Studio {#ts-no-blocks}

Check that the `Dot NET flow debugger Endpoint` URL in the `parameters.xml` file used for installing Cortex Gateway is correct pay particular attention to the protocol - it should usually be `https`. If it is not, update it and reinstall Cortex Gateway or update the value in the `web.config` file and restart the website.

Ensure that the flow debugger service is running. Open IIS, click on `Application Pools`and ensure there is a `debugger` application pool which is showing that it is associated with 1 application. If not, go back to the Cortex Flow Debugger Service installation steps and ensure that all steps were followed correctly.

If no misconfiguration can be found, the service log files may contain more information. These can be found on the Web Application Server at:

* %ProgramData%/Cortex/Cortex Flow Debugger

If the issues cannot be resolved, please contact [Cortex Service Desk](https://support.cortex.co.uk/) for assistance.

### Cannot publish a package {#ts-no-publish}

Check that the "Service Fabric Api Gateway Endpoint", "Service Fabric Using Self Signed Certificates", "Service Fabric ApiGateway Basic Auth Username" and "Service Fabric ApiGateway Basic Auth Password" in the "parameters.xml" file used for installing Cortex Gateway are correct. If any of them are not, update them and reinstall Cortex Gateway or update the value in the "web.config" file and restart the website. If the value is correct, please contact [Cortex Service Desk](https://support.cortex.co.uk/) for assistance.

Ensure that the HA Services are healthy by following these steps:

1. Log on to one of the Application servers and open a web browser.
1. Navigate to https://ha-server.domain.com:9080/Explorer, where `ha-server.domain.com` is the fully qualified domain name of any server within the HA cluster. Replace 9080 with new httpGatewayEndpointPort value if it was changed during configuration.

    If page access is denied it may be necessary to import the server certificate used in installation to the Current User certificate store (usually achieved by double clicking on it and following the wizard). If using self-signed certificates, the certificate can be retrieved by using the `Manage Computer Certificates` tool in Windows to export the CortexServerCertificate from the Personal store and then importing it to the Current User store by double-clicking on it and following the wizard. The browser may need to be restarted before the site can be accessed

    The screen should resemble that in the following figure, all services should have Health State = OK and Status = Active. All instances below the service should have Health State = OK and Status = Ready.

    {{< figure src="/images/Service Fabric Explorer.png" title="Healthy Service Fabric Explorer" >}}

    If any warning triangles appear, wait for 5 minutes or so as the cluster may still be starting up. If the cluster looks OK, ignore the rest of this step. If the warnings persist or anything on the screen goes red, use the filter buttons to find the individual elements which have errors or warnings. Warnings should not be ignored as they can indicate that the service can’t start but is still in the retry phase.
    If no useful message can be seen here, the service log files may contain more information.

If no solution can be found, please contact [Cortex Service Desk](https://support.cortex.co.uk/) for assistance.

### Managing RabbitMQ

There may be times when the logs provided by the Cortex Services and the errors displayed in Service Fabric Explorer are not enough to debug an issue that is occurring on the system. This can be due to RabbitMQ being a state where it can’t send the messages between services.
To check that RabbitMQ is working as expected, remote desktop to an Application Server and navigate to `https://ha-server1.domain.com:15671`, replacing `ha-server1.domain.com` with the FQDN of one of the Application Servers. Sign in with username 'administrator' and the RabbitMQ password provided during the Application Server installation. The following should be displayed in the overview tab for a healthy cluster:

{{< figure src="/images/RabbitMQ Status.png" title="Healthy RabbitMQ status." >}}

{{% alert title="Note" %}} The username and password are not secure, but the RabbitMQ manager will only allow you to connect from localhost so it is not accessible to anyone who does not have remote desktop access. {{% /alert %}}

If there are any unhealthy nodes (red) you may need to restart the RabbitMQ Windows service on each of the nodes that is erroring. These can be restarted in any order, but they
must be restarted one at a time; wait for the node in the RabbitMQ explorer to be green before restarting the next one (you may need to refresh the browser).