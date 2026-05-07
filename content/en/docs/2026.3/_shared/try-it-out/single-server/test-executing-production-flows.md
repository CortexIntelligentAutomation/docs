1. Open an HTTP client, such as [Postman](https://www.postman.com/downloads/). Make a request with the following format:
    | Property      | Value                                                                               |
    |---------------|-------------------------------------------------------------------------------------|
    | Action        | POST                                                                                |
    | URL           | https://{FQDN of server}:8722/api/default/default/flows/{Flow Name}/executions?packageName={Package Name}<br />e.g. https://server&#46;domain&#46;com:8722/api/default/default/flows/NewFlow/executions?packageName=NewPackage|
    | Content Type  | application/json                                                                    |
    | Body          | {}                                                                                  |
    | Authentication| Basic                                                                               |
    | Username      | The value used for `ApiGatewayBasicAuthUsername` when installing Application Services              |
    | Password      | The value used for `ApiGatewayBasicAuthPassword` when installing Application Services (Unencrypted) |

    {{% alert title="Note" %}} If you used self-signed certificates when installing the server you will need to disable SSL certificate validation in your HTTP client. {{% /alert %}}

1. The request should return a JSON object with the output variables of the flow e.g. `{ "Output": "211ea792-7ef0-4b35-92cc-dc2d3581d8c1" }`.
1. {{% ctx %}} has now been verified and is ready to use.
