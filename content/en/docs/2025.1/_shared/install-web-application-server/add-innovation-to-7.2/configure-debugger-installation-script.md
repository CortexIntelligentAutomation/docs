1. In the `Cortex Innovation {{< version >}} - App Server Install Scripts` folder, locate the `Cortex.Innovation.Install.ps1` script and open it with a text editor.
1. Choose the tab below that matches the configuration for this installation, then update the script to match, changing the parameters according to the details given below:

    {{< tabpane lang="powershell" >}}
        {{< tab header="CA Certs" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation {{< version >}} - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation {{< version >}} - Block Packages.zip" `
    -ApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ApiGatewayBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1") `
    -ServerCertificatePath "C:\Install\Certificates\cert.pfx" `
    -ServerCertificatePassword '#_186224203199039!168155035100255155162114088105027~037077176064169!055142133197216213014226219148063#' `
    -SkipLoadBalancer `
    -Credential $Credential `
    -LdapConnectionDetails @{
        Host= "LDAP://ldapserver.fqdn.com:389"
        UseSsl= $false
        Username= "someUserName"
        Password= '#_156218162004047!225018081008117174092221250099053~110194001237006!035122107175168133055021013201167#'
    } `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-app-install-log.txt"
        {{< /tab >}}
        {{< tab header="Self-Signed Certs" >}}
.\Cortex.Install.ps1 -ConfigFileName Cortex.Innovation.Install.Config.json `
    -AppServicesPath "C:\Install\Cortex Innovation {{< version >}} - App Services.zip" `
    -BlockPackagesPath "C:\Install\Cortex Innovation {{< version >}} - Block Packages.zip" `
    -ApiGatewayBasicAuthUsername "BasicAuthUser" `
    -ApiGatewayBasicAuthPassword '#_065077199197085!212123173135087074174142102155007175102029143220132038175026114248243207204119030125106032237087162060168108135168241247037070081~187087056217118!069132229129134129097089241180163#' `
    -CustomerName "Customer1" `
    -ApplicationServerIPv4Addresses @("192.168.1.1") `
    -UseSelfSignedCertificates `
    -SkipLoadBalancer `
    -Credential $Credential `
    -LdapConnectionDetails @{
        Host= "LDAP://ldapserver.fqdn.com:389"
        UseSsl= $false
        Username= "someUserName"
        Password= '#_156218162004047!225018081008117174092221250099053~110194001237006!035122107175168133055021013201167#'
    } `
    -AcceptEULA:$AcceptEula `
    *>&1 | Tee-Object -FilePath "cortex-app-install-log.txt"
        {{< /tab >}}
    {{< /tabpane >}}

    {{% alert title="Important" color="warning" %}}Parameters required to be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}} must be encrypted on the Application Server with {{< ctx >}} 7 installed.{{% /alert %}}

    | Name                                         | Description |
    |----------------------------------------------|-------------|
    |`AppServicesPath`                              | Configure this value with the location of the App Services zip file on the server. |
    |`BlockPackagesPath`                           | Configure this value with the location of the Block Packages zip file on the server. |
    |`ApiGatewayBasicAuthUsername`                     | Configure this value with a username that can be used to make HTTPS requests to the API Gateway Service using Basic Authentication (e.g. starting flows). This username will be used by Gateway for all HTTPS requests to the API Gateway Service.<br /><br />For security reasons it is recommended that the default value `BasicAuthUser` should be changed.<br /><br />This value will be needed later, [when upgrading Gateway][Upgrade Gateway].<br /><br /> This username can also be used by external services for HTTPS requests to the API Gateway Service but is not recommended; these requests should use an OAuth2 session for an authorised Active Directory user.{{< alert type="note" title="Note" >}} This parameter should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`ApiGatewayBasicAuthPassword`                      | Configure this value with the password for the username specified for `ApiGatewayBasicAuthUsername`.<br /><br />For security reasons it is recommended that the default value should be changed.<br /><br />This value will be needed later, [when upgrading Gateway][Upgrade Gateway].{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`CustomerName`                                | A name identifying the platform being installed. This must have no spaces or symbols. It will be appended to the node names that are displayed in Service Fabric Explorer. |
    |`ApplicationServerIPv4Addresses`              | The IPv4 address of the server.|
    |`ServerCertificatePath`                       | The local path of a .PFX certificate file on the server. Environment variables cannot be used. <br /><br />This is only needed if installing with CA Certificates (Recommended). The certificate should meet the [Certificate Requirements][]. <br /><br />This certificate will be used for: <ul><li>Securing communication between the Application Services.</li><li>Allowing Application Services to identify themselves to clients such as Gateway.</li><li>Preventing unauthorised nodes from joining the single node cluster.</li><li>Connecting to Service Fabric Explorer from each of the Application Servers.</li></ul>{{< alert type="warning" title="Warning" >}}It is critical to set a reminder to {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.RolloverCertificates" title="update certificates" >}} in good time before they expire. If they expire then the platform will cease to function and {{< ahref path="Cortex.ServicePortal.MainDoc" title="CORTEX Service Portal" >}} must be contacted for support.{{< /alert >}}|
    |`ServerCertificatePassword`                        | The password for the .PFX certificate file specified in `ServerCertificatePath`. <br /><br /> This is only needed if installing with CA Certificates (Recommended).{{< alert type="note" title="Note" >}} This parameter must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}}|
    |`UseSelfSignedCertificates`                    | Installs Application Services and required infrastructure using generated Self-Signed Certificates rather than CA Certificates.  <br /><br /> Not recommended for production use.  |
    |`SkipLoadBalancer`                             | Installs Application Services and required infrastructure without installing a load balancer. |
    |`Credential`                                   | The credentials of the user which will be used to perform remote operations on the server. It must be a domain user that is a member of the local Administrators group on the server. <br /><br /> This does not need to be changed, a prompt will appear to enter this information when the script is run. |
    |`LdapConnectionDetails`                        | The connection details to the LDAP server. <br /><br />This must be configured with a valid `Host`, `Username`, `Password`, and whether the LDAP server uses SSL using `UseSsl`. {{< alert type="note" title="Note" >}}The parameters `Host` and `Username` should be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}. The parameter `Password` must be {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" title="CORTEX Encrypted" >}}.{{< /alert >}} |
    |`AcceptEULA`                                   | This does not need to be changed, the EULA will be accepted at a later stage. |
    |`FilePath`                                   | The filename that installation logs are written to.  If this should be written to a different location than where the installation files are then a full path should be specified. |

    The `ApiGatewayBasicAuthUsername` and `ApiGatewayBasicAuthPassword` will be needed later, [when upgrading Gateway][Upgrade Gateway].

    {{% alert title="Note" %}}
More advanced configuration (such as changing ports) can be undertaken by modifying the `Cortex.Innovation.Install.Config.json` file but this shouldn't be required for most installations. More information about this can be found at {{< ahref path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.AdvancedConfigSingleServer" title="Advanced Application Server and Load Balancer Configuration Changes" >}}.
    {{% /alert %}}

1. Save and close `Cortex.Innovation.Install.ps1`.

[Certificate Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.CertificateRequirementsNew" >}}
[CORTEX Encrypted]: {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.Advanced.EncryptText" >}}
[Encryption Requirements]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.EncryptionRequirementsNew" >}}
[Upgrade Gateway]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew2" >}}
