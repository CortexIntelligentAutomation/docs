1. If the .PFX file is available:
    1. Copy it to the machine it is to be imported on.
1. Otherwise, export it from the Application Server certificate store:
    1. Using the `Manage Computer Certificates` tool in Windows on the Application Server, export the certificate used from the `Personal` store as a pfx file.
    1. Copy it to the machine it is to be imported on.
1. Import it to the `Current User` store by double-clicking on it, selecting the `Current User` Store Location and continue following the wizard.
1. If the certificate was generated from a CA that is not a trusted root authority (e.g. OpenSSL), then it will also need importing to the Trusted Root Certification Authorities in the Local Computer store:
     1. Import it to the `Trusted Root Certification Authorities` in the `Local Computer` store by double-clicking on it, selecting the `Local Computer` Store Location and continue following the wizard, selecting `Trusted Root Certification Authorities` on the `Certificate Store` page.
