Navigate to `https://app-server.domain.com:9080/Explorer`, where `app-server.domain.com` is the fully qualified domain name of any Application Server. Replace `9080` with new `httpGatewayEndpointPort` value if it was changed during configuration.

The screen should resemble that in the following figure:
{{< figure src="/images/Service Fabric Explorer.png" >}}

The status circles should be entirely green - this indicates that all nodes, services and instances are healthy. Other status pages can be accessed by expanding items in the leftmost pane. Issues can be tracked down to the failing component by expanding items with warning triangles or error icons on. The next few diagrams show the status pages for a healthy system.

After expanding the application, clicking on any of the services should display a green circle and `Status = Active`:

{{< figure src="/images/Service Fabric Explorer - Service.png" >}}

After expanding either of the services, clicking on any of the instances/partitions should display a green circle and `Status = Ready`:

{{< figure src="/images/Service Fabric Explorer - Instance.png" >}}

Clicking on any of the nodes at the bottom of the leftmost pane should display a green circle and `Status = Up`:

{{< figure src="/images/Service Fabric Explorer - Node.png" >}}

If any warning triangles appear, wait for 5 minutes or so as the cluster may still be starting up. If the cluster looks OK, go to the next section.

If the warnings persist or anything on the screen goes red, expand the items to find the individual services and instances which have errors or warnings. Warnings should not be ignored as they can indicate that the service can’t start but is still in the retry phase. Error and warning messages should be displayed on the status screens and should indicate what is wrong.

If no useful message can be seen here, the service log files may contain more information. These can be found on each Application Server at:

* `%ProgramData%/Cortex/API Gateway Service/Logs`
* `%ProgramData%/Cortex/Execution Service/Logs`

If no solution can be found, please contact [{{% ctx %}} Service Portal][CORTEX Service Portal] for further assistance.

[CORTEX Service Portal]: {{< url path="Cortex.ServicePortal.MainDoc" >}}
