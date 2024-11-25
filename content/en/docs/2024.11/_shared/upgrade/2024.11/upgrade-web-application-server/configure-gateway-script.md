1. In the `Cortex Innovation 2024.11 - Web App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.Gateway.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this upgrade, then update the script to match, changing the parameters according to the details given below:

    {{% alert title="Note" %}}
To check the previous configuration values open the `Cortex.Upgrade.GatewayConfig.json` file located in `%ProgramData%\Cortex\Upgrade`. If the file does not exist or any of the values should be changed then use the `Use New Configuration Values` tab removing any of the parameters that do need need to change leaving the minimum required parameters as can be seen in the `Use Previous Configuration Values` tab.
    {{% /alert %}}

    {{< tabpane lang="powershell" >}}
        {{< tab header="Use Previous Configuration Values" >}}
.\Cortex.Install.Gateway.ps1 `
    -GatewayPackagePath "C:\Install\Cortex Innovation 2024.11 - Gateway.zip" `
    -ApplySecurityMeasures $true `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-gateway-install-log.txt"
        {{< /tab >}}
        {{< tab header="Use New Configuration Values">}}
.\Cortex.Install.Gateway.ps1 `
    -GatewayPackagePath "C:\Install\Cortex Innovation 2024.11 - Gateway.zip" `
    -GatewayApplicationPoolUsername "Domain\Username" `
    -WebRootFolder "C:\inetpub\wwwroot" `
    -WebsitePort "443" `
    -ImportCertificate $false `
    -CertificateFriendlyName "CertificateName" `
    -ConfigureSiteRedirect $true `
    -ApplySecurityMeasures $true `
    -UsingWindowsDefender $false `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-gateway-install-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    | Name                                           | Description |
    |------------------------------------------------|-------------|
    |`GatewayPackagePath`                            | Configure this value with the location of the `Cortex Innovation 2024.11 - Gateway.zip` file on the server. |
    |`GatewayApplicationPoolUsername`                | Replace `Domain\Username` with the user that is used to run the {{% ctx %}} Gateway application pool currently.|
    |`WebRootFolder`                                 | Replace this with the correct path for the Web Root Folder on the server. Typically this will be  `C:\inetpub\wwwroot`.|
    |`WebsitePort`                                   | Replace this with the port that you wish the website to use. Typically this will be `443`.|
    |`ImportCertificate`                             | This should be set to `$false`.|
    |`CertificateFriendlyName`                       | Replace this with the friendly name that is allocated to the certificate that {{% ctx %}} Gateway is currently using.|
    |`ConfigureSiteRedirect`                         | If the site hosting the {{% ctx %}} Gateway web application is an existing site that doesn’t have its own content, it is recommended to redirect the site URL to the {{% ctx %}} Gateway web application URL. The default behaviour of the script is to create a URL Rewrite redirect rule to achieve this.<br /><br />To skip this rule creation change the value to `$false`.|
    |`ApplySecurityMeasures`                         | Change this to `$false` if you do not require the latest recommended [Security Best Practices][] to be implemented as part of the installation process.|
    |`UsingWindowsDefender`                          | Change this to `$false` if you are not using the Windows Defender firewall.<br /><br />If Windows Defender is not being used but an alternative firewall is, it must be configured to allow communication inbound via TCP on the port configured for HTTPS (usually 443).|
    |`AcceptEULA`                                    | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                      | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

1. Save and close `Cortex.Innovation.Install.Gateway.ps1`.

[Security Best Practices]: {{< url path="Cortex.Guides.UpgradeCortex.Advanced.SSLBestPractices" >}}
