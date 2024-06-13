Once the certificate has been imported, a `Friendly Name` should be assigned which will be used in the [Configure {{% ctx %}} Gateway Installation Script][Configure CORTEX Gateway Installation Script] to enable the installation script to identify the certificate to be used for the website:

1. Click the Windows button (`Start`).
1. Type `certlm.msc` and press `Enter` to open the Certificate Manager dialog.
1. Expand `Personal` and select `Certificates`.
1. You should see your certificate in this store.
1. Right-click on the certificate and select `Properties`.
1. On the `General` tab in the `Friendly Name` text box, enter a name to be used for the certificate.
1. Click `OK`.

[Configure CORTEX Gateway Installation Script]: {{< url path="Cortex.GettingStarted.OnPremise.AddInnovationTo72.MultipleServerWithHA.ConfigureCortexGatewayInstallationScriptNew" >}}
