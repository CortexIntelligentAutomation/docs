---
title: "Create Self-Signed Certificates"
linkTitle: "Create Self-Signed Certificates"
description: "Information about creating and installing self-signed certificates."
---

# {{% param title %}}

Self-signed certificates should be generated using OpenSSL which is bundled in the {{% ctx %}} Web Application Server Installation Scripts:

## Setup OpenSSL in PowerShell

1. Open a Windows PowerShell (x64) window as administrator.
1. Make a directory in which to store the certificates by running the following command, changing the path as required:

    ```powershell
    mkdir C:\Certificates
    ```

1. Navigate PowerShell to inside the certificates folder created above, using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Certificates"
    ```

1. Temporarily add OpenSSL to the Path environment variable of your system by running the following command, modifying the path according to the location of `openssl.exe` in the installation scripts on the machine:

    ```powershell
    $env:PATH += ";C:\Cortex Innovation 2022.9 - Web App Server Install Scripts\OpenSSL"
    ```

## Generate the Root CA Certificate

1. Create the root CA private key by running the following command:

    ```powershell
    openssl genrsa -out cortexCA.key 4096
    ```

1. Generate the root CA certificate signed with the private key:
    1. Copy the following text into a text editor:

        ```shell
        RANDFILE        = .rnd
        [ ca ]
        default_ca      = CA_default    # The default ca section
        [ CA_default ]
        # Directory and file locations.
        # SHA-1 is deprecated, so use SHA-2 instead.
        default_md        = sha256
        policy            = policy_strict
        [ policy_strict ]
        # The root CA should only sign intermediate certificates that match.
        # See the POLICY FORMAT section of `man ca`.
        countryName             = match
        stateOrProvinceName     = match
        organizationName        = match
        organizationalUnitName  = optional
        commonName              = supplied
        emailAddress            = optional
        [ req ]
        # Options for the `req` tool (`man req`).
        default_bits        = 2048
        distinguished_name  = req_distinguished_name
        string_mask         = utf8only

        # SHA-1 is deprecated, so use SHA-2 instead.
        default_md          = sha256
        # Extension to add when the -x509 option is used.
        x509_extensions     = v3_ca
        [ req_distinguished_name ]
        countryName             = Country Name (2 letter code)
        countryName_min         = 2
        countryName_max         = 2
        stateOrProvinceName     = State or Province Name (full name)
        localityName            = Locality Name (eg, city)
        0.organizationName      = Organization Name (eg, company)
        organizationalUnitName  = Organizational Unit Name (eg, section)
        commonName              = Common Name (eg, your website's domain name)
        commonName_max          = 64
        emailAddress            = Email Address
        emailAddress_max        = 40
        # Optionally, specify some defaults.
        countryName_default             = GB
        stateOrProvinceName_default     = Hampshire
        localityName_default            = Southampton
        0.organizationName_default      = Cortex Ltd
        organizationalUnitName_default  = Cortex 
        emailAddress_default            = info@cortex.co.uk
        [ v3_ca ]
        # Extensions for a typical CA (`man x509v3_config`).
        subjectKeyIdentifier = hash
        authorityKeyIdentifier = keyid:always,issuer
        basicConstraints = critical, CA:true
        keyUsage = critical, digitalSignature, cRLSign, keyCertSign
        ```

    1. Save the file as `ca.cnf` in the directory created for the certificates above.
    1. In the PowerShell window, run the following command:

        ```powershell
        openssl req -sha256 -x509 -new -nodes -key cortexCA.key -days 3650 -out cortexCA.pem -config ca.cnf
        ```

    1. Press `Enter` for all parameters except the Common Name. For this enter `Cortex CA`.

1. Package your public and private key in a pkcs12 encrypted file (to install with certmgr on windows) by running the following command:

    ```powershell
    openssl pkcs12 -export -inkey cortexCA.key -in cortexCA.pem -out cortexCA.pfx
    ```

1. Enter a memorable string as the Export Password when asked, this will be needed when adding the certificate to certmgr.

## Import the Root CA Certificate

1. Double click on the `cortexCA.pfx` file in the certificates folder to import the certificate into the Windows Certificate Store.
1. Select `Local Machine` then click `Next`.
1. Click `Next`.
1. Enter the Export Password which the certificate was generated with then click `Next`.
1. Select `Place all certificates in the following store`.
1. Click `Browse…`.
1. Select `Trusted Root Certification Authorities`, click `OK` then click `Next`.
1. Click `Finish`.

## Generate the Certificate

1. Create a private key for the SSL cert by running the following command:

    ```powershell
    openssl genrsa -out cortex.key 2048
    ```

1. Generate the SSL certificate request:
    1. Copy the following text into a text editor:

        ```shell
        RANDFILE        = .rnd
        [ ca ]
        default_ca      = CA_default    # The default ca section
        [ CA_default ]
        # SHA-1 is deprecated, so use SHA-2 instead.
        default_md        = sha256
        policy            = policy_loose
        [ policy_loose ]
        # Allow the intermediate CA to sign a more diverse range of certificates.
        # See the POLICY FORMAT section of the `ca` man page.
        countryName             = optional
        stateOrProvinceName     = optional
        localityName            = optional
        organizationName        = optional
        organizationalUnitName  = optional
        commonName              = supplied
        emailAddress            = optional
        [ req ]
        # Options for the `req` tool (`man req`).
        default_bits        = 2048
        distinguished_name  = req_distinguished_name
        string_mask         = utf8only
        # SHA-1 is deprecated, so use SHA-2 instead.
        default_md          = sha256
        # Extension to add when the -x509 option is used.
        x509_extensions     = v3_req
        req_extensions      = v3_req
        [ req_distinguished_name ]
        countryName             = Country Name (2 letter code)
        countryName_min         = 2
        countryName_max         = 2
        stateOrProvinceName     = State or Province Name (full name)
        localityName            = Locality Name (eg, city)
        0.organizationName      = Organization Name (eg, company)
        organizationalUnitName  = Organizational Unit Name (eg, section)
        commonName              = Common Name (eg, your website's domain name)
        commonName_max          = 64
        emailAddress            = Email Address
        emailAddress_max        = 40
        # Optionally, specify some defaults.
        countryName_default             = GB
        stateOrProvinceName_default     = Hampshire
        localityName_default            = Southampton
        0.organizationName_default      = Cortex Ltd
        organizationalUnitName_default  = Cortex 
        emailAddress_default            = info@cortex.co.uk
        [ v3_req ]
        basicConstraints = CA:FALSE
        keyUsage = nonRepudiation, digitalSignature, keyEncipherment
        subjectAltName = @alt_names
        [ alt_names ]
        # Specify all DNS and/or IP addresses that clients can use to access the secured resource.
        DNS.1 = MACHINE-NAME 
        DNS.2 = FULLY QUALIFIED MACHINE NAME
        DNS.3 = localhost 
        IP.1 = IP ADDRESS
        IP.2 = 127.0.0.1 
        ```

    1. Modify the section `[alt_names]` to include all the required DNS names and IP addresses that clients can use to access the secured resource.
    Each DNS name or IP address entry must be suffixed with `.N` where `N` is the unique index of the DNS name or IP address entry; see below for examples:
    | Resource URL                          | Configuration to add              |
    |---------------------------------------|-----------------------------------|
    | `https://cortex.co.uk/gateway`        | `DNS.1 = cortex.co.uk`              |
    | `https://internal.cortex.co.uk/gateway` | `DNS.2 = internal.cortex.co.uk`     |
    | `https://10.0.0.0/gateway`              | `IP.1 = 10.0.0.0`                   |
    | `https://192.168.1.100/gateway`         | `IP.2 = 192.168.1.100`              |

    1. Save the file as `san.cnf` in the directory created for the certificates above.
    1. In the PowerShell window, run the following command:

        ```powershell
        openssl req -new -sha256 -key cortex.key -out cortex.req -extensions v3_req -config san.cnf
        ```

    1. Press `Enter` for everything except the Common Name. For this enter `Cortex`.
    1. Sign the request with a previously generated root CA by running the following command:

        ```powershell
        openssl x509 -req -sha256 -in cortex.req -CA cortexCA.pem -CAkey cortexCA.key -CAcreateserial -out cortex.pem -days 3650 -extensions v3_req -extfile san.cnf
        ```

    1. Package your public and private key in a pkcs12 encrypted file (to install with certmgr on windows) by running the following command:

        ```powershell
        openssl pkcs12 -export -inkey cortex.key -in cortex.pem -out cortex.pfx
        ```

    1. Enter a memorable string as the Export Password when asked, this will be needed when adding the certificate to certmgr.

## Import the Certificate

1. Double click on the `cortex.pfx` file in the certificates folder to get the certificate imported to the Windows Certificate Store.
1. Select `Local Machine` then click `Next`.
1. Click `Next`.
1. Enter the Export Password which the certificate was generated with then click `Next`.
1. Select `Place all certificates in the following store`.
1. Click `Browse…`.
1. Select `Personal`, click `OK` then click `Next`.
1. Click `Finish`.
