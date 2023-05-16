---
title: "Advanced Application Server and Load Balancer Configuration Changes"
linkTitle: "Advanced Application Server and Load Balancer Configuration Changes"
description: "Information about installing CORTEX Innovation with non-default installation values."
---

# {{% param title %}}

Advanced configuration (such as port changes) can be undertaken by taking the following steps before running the PowerShell script. Some values will be modified by the script and they will take precedence, but those parameters can be removed from the script and this file used entirely if required.

## Multiple Server With HA

1. In the `Cortex Innovation {{< version >}} - Installation Scripts` folder, locate the file `Cortex.Innovation.Install.Config.json` and open it with a text editor.
1. Change the configuration file according to your cluster, referring to the following example and details:

    {{< highlight json "linenos=table,hl_lines=4 17 18 21 22 23 27-28 31-32 35-36 42 44 46 48 50 52 73-75 80-82,linenostart=1" >}}
    {
      "customers": [
        {
          "name": "Customer1",
          "isPrimary": true,
          "rules": {
            "clientConnectionEndpointPort": "8001",
            "clusterConnectionEndpointPort": "8002",
            "leaseDriverEndpointPort": "8003",
            "serviceConnectionEndpointPort": "8004",
            "httpGatewayEndpointPort": "9080",
            "reverseProxyEndpointPort": "9081",
            "applicationPorts": "10010-10500",
            "ephemeralPorts": "10501-20000"
          },
          "loadBalancer": {
            "installDirectory": "%ProgramData%\\loadbalancer",
            "iPAddress": "192.168.20.178",
            "loadBalancerSnmpPort": "162",
            "snmpReceiverServicePort": "10001",
            "loadBalancerTlsPort": "443",
            "apiGatewayServicePort": "8722",
            "adminCertificate": "loadBalancerCertificate"
          },
          "servers": [
            {
              "serverName": "app-server1",
              "iPAddress": "192.168.1.1"
            },
            {
              "serverName": "app-server2",
              "iPAddress": "192.168.1.2"
            },
            {
              "serverName": "app-server3",
              "iPAddress": "192.168.1.3"
            }
          ]
        }
      ],
      "servers": {
        "app-server1": {
          "faultDomain": "fd:/fd1",
          "serverCertificate": "serverCert"
        },
        "app-server2": {
          "faultDomain": "fd:/fd2",
          "serverCertificate": "serverCert"
        },
        "app-server3": {
          "faultDomain": "fd:/fd3",
          "serverCertificate": "serverCert"
        }
      },
      "rules": {
        "windowsSmbRemoteRegistry": [
          "135",
          "137",
          "138",
          "139",
          "445"
        ],
        "rabbitMqAmqpPorts": [
          "5671"
        ],
        "rabbitMqEpmdPort": "4369",
        "rabbitMqErlangDistributionClientPorts": "35672-35682",
        "rabbitMqErlangDistributionServerPort": "25672",
        "rabbitMqManagementApiPort": "15671"
      },
      "serverCertificates": {
        "serverCert": {
          "pfxCertificatePath": "C:\\Certificates\\wildCardCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": ""
        }
      },
      "adminCertificates": {
        "loadBalancerCert": {
          "pfxCertificatePath": "C:\\Certificates\\lbCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": ""
        }
      }
    }
    {{< / highlight >}}

    | Line | Description |
    |------|-------------|
    |4     | A name identifying the platform being installed. This should have no spaces or symbols. It will be appended to the node names that are displayed in the Service Fabric management tool. |
    |16-24 | If the bundled load balancer is not being used, delete these lines |
    |17    | A local empty or non-existent directory on the load balancer server that the load balancer can be installed in. The directory path will be created if it does not exist. The installation user must have permissions to create and write to directories here. Ensure that all backslashes are escaped with another backslash. Environment variables may be used. |
    |18    | The IPv4 address of the server that the load balancer should run on. |
    |21    | The port that the HTTPS load balancer server should run on. This port should not be in use by anything else. |
    |22    | The port that the API Gateway Service is running on the Application Servers. This should be 8722. |
    |23    | The name of a certificate entry in the adminCertificates section. If this line is removed, an auto-generated self-signed certificate will be used. |
    |27, 31, 35 | The short computer names of the Application Servers. These must not contain the domain. The installation will be run on the first of these nodes. |
    |28, 32, 36 | The respective IPv4 addresses of the Application Servers. |
    |42, 46, 50 | These keys should be changed to the computer names of the Application Servers to match those on lines 26, 30 and 24 |
    |44, 48, 52 | The name of a certificate entry in the serverCertificates section. This should be the same for all Application Servers. If these lines are removed, an auto-generated self-signed certificate will be used. Self-signed certificates are not recommended for production systems.|
    |73-75 | Skip configuring these lines if self-signed certificates are being used. |
    |80-82 | Skip configuring these lines if self-signed certificates are being used or if the bundled load balancer is not being used. |
    |74    |This is the local path of a .PFX certificate file on the first Application Server, containing a full chain certificate with private key. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |75    |The password used to secure the .PFX file.|
    |76    |This only needs to be used if the installation has failed due to a missing root certificate. See [Troubleshooting Root Certificate Error] for information.|
    |81    |This is the local path of a .PFX certificate file on the first Application Server, containing a full chain certificate with private key. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |82    |The password used to secure the .PFX file.|
    |83    |This only needs to be used if the installation has failed due to a missing root certificate. See [Troubleshooting Root Certificate Error] for information.|

1. Save and close the config file.

## Single Server Without HA

1. In the `Cortex Innovation {{< version >}} - Installation Scripts` folder, locate the file `Cortex.Innovation.Install.Config.json` and open it with a text editor.
1. Change the configuration file according to your cluster, referring to the following example and details:

    {{< highlight json "linenos=table,hl_lines=4 18 19 25 27 48-50,linenostart=1" >}}
    {
      "customers": [
        {
          "name": "Customer1",
          "isPrimary": true,
          "rules": {
            "clientConnectionEndpointPort": "8001",
            "clusterConnectionEndpointPort": "8002",
            "leaseDriverEndpointPort": "8003",
            "serviceConnectionEndpointPort": "8004",
            "httpGatewayEndpointPort": "9080",
            "reverseProxyEndpointPort": "9081",
            "applicationPorts": "10010-10500",
            "ephemeralPorts": "10501-20000"
          },
          "servers": [
            {
              "serverName": "app-server1",
              "iPAddress": "192.168.1.1"
            }
          ]
        }
      ],
      "servers": {
        "app-server1": {
          "faultDomain": "fd:/fd1",
          "serverCertificate": "serverCert"
        }
      },
      "rules": {
        "windowsSmbRemoteRegistry": [
          "135",
          "137",
          "138",
          "139",
          "445"
        ],
        "rabbitMqAmqpPorts": [
          "5671"
        ],
        "rabbitMqEpmdPort": "4369",
        "rabbitMqErlangDistributionClientPorts": "35672-35682",
        "rabbitMqErlangDistributionServerPort": "25672",
        "rabbitMqManagementApiPort": "15671"
      },
      "serverCertificates": {
        "serverCert": {
          "pfxCertificatePath": "C:\\Certificates\\wildCardCert.pfx",
          "pfxCertificatePassword": "pfxPassword",
          "pemRootCertificatePath": ""
        }
      }
    }
    {{< / highlight >}}

    | Line | Description |
    |------|-------------|
    |4     | A name identifying the platform being installed. This should have no spaces or symbols. It will be appended to the node names that are displayed in the Service Fabric management tool. |
    |18    | The short computer names of the node. This must not contain the domain. The installation will be run on the this node. |
    |19    | The IPv4 address of the node. |
    |25    | This key should be changed to the computer names of the node to match that on line 18 |
    |27    | The name of a certificate entry in the serverCertificates section. If this line is removed, an auto-generated self-signed certificate will be used. Self-signed certificates are not recommended for production systems.|
    |48-50 | Skip configuring these lines if self-signed certificates are being used. |
    |48    |This is the local path of a .PFX certificate file on the server, containing a full chain certificate with private key. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |49    |The password used to secure the .PFX file.|
    |50    |This only needs to be used if the installation has failed due to a missing root certificate. See [Troubleshooting Root Certificate Error] for information.|

1. Save and close the config file.

[Troubleshooting Root Certificate Error]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingNoRootCertificate" >}}