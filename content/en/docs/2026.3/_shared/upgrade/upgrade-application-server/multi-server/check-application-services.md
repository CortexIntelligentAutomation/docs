1. Log on to one of the Application Servers.
1. Import the client certificate used for the original installation of the application. Its location is specified in the `ClientCertificatePath` parameter of the `Cortex.Innovation.Install.ps1` file of the original installation.

    If the .PFX file is available on the server:
    * Double-click on the client certificate .PFX file and follow the wizard.

    If the .PFX file is not available:
    * Identify the certificate to export by opening the `Cortex.Upgrade.ApplicationConfig.json` configuration file located in `C:\ProgramData\Cortex\Upgrade` and locate the value of the `applicationServerCertificateSubject` and `applicationServerCertificateThumbprint`.
    * Find the certificate by using the `Manage Computer Certificates` tool in Windows.  In the `Personal` store, the certificate will have an `Issued To` similar to `applicationServerCertificateSubject` and to confirm it is the right certificate double-click the certificate, select the `Details` tab and locate the `Thumbprint` property to compare the value to that in `applicationServerCertificateThumbprint`.
    * Export the certificate as a pfx file and then import it to the `Current User` store by double-clicking on it and following the wizard.
1. Open a web browser.
1. {{< section "/install-application-server/multi-server/check-application-services.md">}}

[Configure Installation Script]:  {{< ref "#configure-installation-script" >}}
