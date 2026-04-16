---
title: "Change Block Logging Level"
linkTitle: "Change Block Logging Level"
description: "Instructions on how to change the Logging Level for Block Logging."
weight: 5
---

# {{% param title %}}

Block logging in {{% ctx %}} logs the following by default:

* Command.CommandText
* Command.Parameters
* HTTPRequest
* HTTPResponse
* SOAPRequest
* SOAPResponse
* Script
* Parameters
* Outputs
* Records
* Command
* Response
* SSH Logs

To change logging levels for block logging so that every block is logged when executed, the below PowerShell script can be used to make a REST call against your {{% ctx %}} platform.

1. Run Windows PowerShell ISE as Administrator.
1. Copy the following script into the PowerShell window:

    ``` powershell
    $serverFQDN = "server.domain.com"
    $APIGatewayPort = 8722
    $loglevel = 4

    $user = "UserName"
    $pass = Read-Host -Prompt "Enter Password for Basic Auth User"
    $base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $user,$pass)))
    
    $headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
    $headers.Add("Content-Type", "application/json")
    $headers.Add("Accept", "application/json")
    $headers.Add("Authorization", "Basic $base64AuthInfo")
    $path = "applications/ execution/services/engine/blocks/packages/versions/executions/flows/workspaces/blocks/logging" 
    $body = @"
    $loglevel
    "@
    
    $response = Invoke-RestMethod "https://${serverFQDN}:$APIGatewayPort/api/v1/default/default/$path" -Method 'PUT' -Headers $headers -Body $body
    $response | ConvertTo-Json
    ```

1. Configure the following variables:
    * `$serverFQDN` – The fully qualified domain name for the Application Server Or Load Balancer
    * `$APIGatewayPort` – {{% ctx %}} API Gateway Service Port (8722) or Load Balancer port (typically 443 or 8722)
    * `$loglevel` – Desired log level as an integer, `1` is enabled and `4` is the default error level
    * `$user` – {{% ctx %}} API Gateway Basic Auth Username

1. Execute the script, entering the Basic Auth User's password when prompted.
1. Confirm success response:

    If the call was successful, the following response should be received

    ``` powershell
    LogLevel was successfully configured.
    ```
