1. Open an HTTP client, such as [Postman](https://www.postman.com/downloads/). Make a request with the following format:
    | Property      | Value                                                                               |
    |---------------|-------------------------------------------------------------------------------------|
    | Action        | POST                                                                                |
    | URL           | https://{FQDN of Load Balancer Server}/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}<br />e.g. https://load-balancer&#46;domain&#46;com/api/default/default/flows/NewFlow/executions?packageName=NewPackage|
    | Content Type  | application/json                                                                    |
    | Body          | {}                                                                                  |
    | Authentication| Basic                                                                               |
    | Username      | The value used for `ApiGatewayBasicAuthUsername` when installing Application Services              |
    | Password      | The value used for `ApiGatewayBasicAuthPassword` when installing Application Services (Unencrypted) |

    {{% alert title="Note" %}} If you used self-signed certificates when installing the Application Servers you will need to disable SSL certificate validation in your HTTP client. {{% /alert %}}

1. The request should return a JSON object with the output variables of the flow e.g. `{ "Output": "2022-03-09T07:35:16+0000" }`.
1. {{% ctx %}} has now been verified and is ready to use.
