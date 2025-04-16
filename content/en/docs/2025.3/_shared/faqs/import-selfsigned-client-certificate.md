1. Using the `Manage Computer Certificates` tool in Windows on the Application Server export the `CortexServerCertificate` from the `Personal` store as a pfx file.
1. Copy the file to the machine that it needs to be imported on.
1. Import it to the `Current User` store by double-clicking on it, selecting the `Current User` Store Location and continue following the wizard.
1. Import it to the `Trusted Root Certification Authorities` in the `Local Computer` store by double-clicking on it, selecting the `Local Computer` Store Location and continue following the wizard.
