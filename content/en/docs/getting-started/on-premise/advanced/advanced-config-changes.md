---
title: "Advanced HA Infrastructure and Load Balancer Configuration Changes"
linkTitle: "Advanced HA Infrastructure and Load Balancer Configuration Changes"
description: >
    Information on installing Cortex across multiple on-premise servers with high availability (HA), with non-default installation values.
---

# {{< param title >}}

{{< param description >}}

Advanced configuration (such as port changes) can be undertaken by taking the following steps before running the PowerShell script. Some values will be modified by the script and they will take precedence, but those parameters can be removed from the script and this file used entirely if required.

1. In the "Cortex Evolution - Innovation 2022-RC.2022.1.4 - Installation Scripts" folder, locate the file "Cortex.Innovation.Install.Config.json" and open it with a text editor.
1. Change the configuration file according to your cluster, referring to the following example and details:

    {{< highlight json "linenos=table,hl_lines=4 17 20 22 26-27 30-31 34-35 41 43 45 47 49 51 72-75 79-82,linenostart=1" >}}
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
            "installDirectory": "c:\\ProgramData\\loadbalancer",
            "protocol": "udp",
            "balance": "roundrobin",
            "host": "lb-server:162",
            "applicationPort": "10001",
            "adminCertificate": "loadBalancerCert"
          },
          "servers": [
            {
              "serverName": "ha-server1",
              "iPAddress": "192.168.1.1"
            },
            {
              "serverName": "ha-server2",
              "iPAddress": "192.168.1.2"
            },
            {
              "serverName": "ha-server3",
              "iPAddress": "192.168.1.3"
            }
          ]
        }
      ],
      "servers": {
        "ha-server1": {
          "faultDomain": "fd:/fd1",
          "serverCertificate": "serverCert"
        },
        "ha-server2": {
          "faultDomain": "fd:/fd2",
          "serverCertificate": "serverCert"
        },
        "ha-server3": {
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
    |16-23 | If the bundled load balancer is not being used, delete these lines TODO: this will cause the line numbers to be wrong!!! |
    |17    | A local empty or non-existent directory on the load balancer server that the load balancer can be installed in. The directory path will be created if it does not exist. The installation user must have permissions to create and write to directories here. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |20    | The computer name and port of the server that the load balancer should run on. This cannot be an IP address. The port must not be used by anything else. |
    |22    | The name of a certificate entry in the adminCertificates section. If this line is removed, an auto-generated self-signed certificate will be used. |
    |26, 30, 24 | The short computer names of the HA nodes. These must not contain the domain. The installation will be run on the first of these nodes. |
    |27, 31, 35 | The respective IPv4 addresses of the HA nodes. |
    |41, 45, 49 | These keys should be changed to the computer names of the HA nodes to match those on lines 26, 30 and 24 |
    |43, 47, 51 | The name of a certificate entry in the serverCertificates section. This should be the same for all HA servers. If these lines are removed, an auto-generated self-signed certificate will be used. Self-signed certificates are not recommended for production systems.|
    |72-74 | Skip configuring these lines if self-signed certificates are being used. |
    |79-81 | Skip configuring these lines if self-signed certificates are being used or if the bundled load balancer is not being used. |
    |73    |This is the local path of a .PFX certificate file on the first HA server, containing a full chain certificate with private key. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |74    |The password used to secure the .PFX file.|
    |75    |This only needs to be used if the installation has failed due to a missing root certificate. See [Troubleshooting Root Certificate Error] for information.|
    |80    |This is the local path of a .PFX certificate file on the first HA server, containing a full chain certificate with private key. Ensure that all backslashes are escaped with another backslash. Environment variables cannot be used. |
    |81    |The password used to secure the .PFX file.|
    |82    |This only needs to be used if the installation has failed due to a missing root certificate. See [Troubleshooting Root Certificate Error] for information.|

1. Save and close the config file.
