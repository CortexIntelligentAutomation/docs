Import the client certificate, used in the `ClientCertificatePath` parameter of the [Configure Installation Script][] section, to your Current User certificate store.

  This can be achieved by double-clicking on the client certificate .PFX file and following the wizard.

  If using self-signed certificates, the certificate can be retrieved by using the `Manage Computer Certificates` tool in Windows to export the `CortexServerCertificate` from the `Personal` store as a pfx file and then importing it to the `Current User` store by double-clicking on it and following the wizard. The certificate must also be imported to `Trusted Root Certification Authorities` in the `Local Computer` store.

[Configure Installation Script]:  {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.SingleServerWithoutHA.ConfigureInstallationScriptNew" >}}
