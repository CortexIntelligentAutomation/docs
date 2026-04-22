---
title: "Change All Logging Levels"
linkTitle: "Change All Logging Levels"
description: "Instructions on how to change the Logging Level for All Logging."
weight: 10
---

# {{% param title %}}

To change the Logging Level for all services, the below PowerShell script can be used to make a REST call against your {{% ctx %}} platform.

1. Run Windows PowerShell ISE as Administrator.
1. Copy the following script into the PowerShell window:

    ``` powershell
    $serverFQDN     = "server.domain.com"
    $APIGatewayPort = 8722
    $loglevel       = 4
    $user           = "BasicAuthUser"
    
    $securePass = Read-Host -Prompt "Enter password for $user" -AsSecureString

    $ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePass)
    try {
        $plainPass = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)

        $authBytes = [System.Text.Encoding]::ASCII.GetBytes("$user`:$plainPass")
        $base64AuthInfo = [Convert]::ToBase64String($authBytes)
    }
    finally {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)

        $plainPass = $null
        Remove-Variable -Name plainPass -Force
    }

    $headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
    $headers.Add("Content-Type", "application/json")
    $headers.Add("Accept", "application/json")
    $headers.Add("Authorization", "Basic $base64AuthInfo")
    $path = "applications/logging" 
    $body = @"
    $loglevel
    "@
    
    $response = Invoke-RestMethod "https://${serverFQDN}:$APIGatewayPort/api/v1/default/default/$path" -Method PUT -Headers $headers -Body $body
    $response
    ```

1. Configure the following variables:
    * `$serverFQDN` – The fully qualified domain name for the Application Server Or Load Balancer
    * `$APIGatewayPort` – {{% ctx %}} API Gateway Service Port (8722) or Load Balancer port (typically 443 or 8722)
    * `$loglevel` – Desired log level as an integer, `1` is enabled and `4` is the default error level
    * `$user` – {{% ctx %}} API Gateway Basic Auth Username

1. Execute the script, entering the Basic Auth User's password when prompted.
1. Confirm success response:

    If the call was successful, there should be no errors and the following response should be received

    ``` powershell
    LogLevel was successfully configured.
    ```
