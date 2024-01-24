1. Log on to the server.
1. Import the certificate, used in the `ServerCertificatePath` parameter of the [Configure Installation Script][] section, to your `Current User` certificate store. This can be achieved by double-clicking on the certificate .PFX file and following the wizard.

    If using self-signed certificates, the certificate can be retrieved by using the `Manage Computer Certificates` tool in Windows to export the `CortexServerCertificate` from the `Personal` store as a pfx file and then importing it to the `Current User` store by double-clicking on it and following the wizard. The certificate must also be imported to `Trusted Root Certification Authorities` in the `Local Computer` store.
1. Open a web browser.
1. Navigate to `https://server.domain.com:9080/Explorer`, where `server.domain.com` is the fully qualified domain name of the server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration.

    The screen should resemble that in the following figure:
    {{< figure src="/images/Service Fabric Explorer - Single.png" >}}

    The status circles should be entirely green - this indicates that the node and all services and instances are healthy. Other status pages can be accessed by expanding items in the leftmost pane. Issues can be tracked down to the failing component by expanding items with warning triangles or error icons on. The next few diagrams show the status pages for a healthy system.

    After expanding the application, clicking on any of the services should display a green circle and `Status = Active`:

    {{< figure src="/images/Service Fabric Explorer - Service - Single.png" >}}

    After expanding either of the services, clicking on any of the instances/partitions should display a green circle and `Status = Ready`:

    {{< figure src="/images/Service Fabric Explorer - Instance - Single.png" >}}

    Clicking on any of the nodes at the bottom of the leftmost pane should display a green circle and `Status = Up`:

    {{< figure src="/images/Service Fabric Explorer - Node - Single.png" >}}

    If any warning triangles appear, wait for 5 minutes or so as the cluster may still be starting up. If the cluster looks OK, go to the next section.

    If the warnings persist or anything on the screen goes red, expand the items to find the individual services and instances which have errors or warnings. Warnings should not be ignored as they can indicate that the service can’t start but is still in the retry phase. Error and warning messages should be displayed on the status screens and should indicate what is wrong.

    If no useful message can be seen here, the service log files may contain more information. These can be found on the server at:

    * `%ProgramData%/Cortex/API Gateway Service/Logs`
    * `%ProgramData%/Cortex/Execution Service/Logs`

    If no solution can be found, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance.

[Configure Installation Script]:  {{< ref "#configure-installation-script" >}}
[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}