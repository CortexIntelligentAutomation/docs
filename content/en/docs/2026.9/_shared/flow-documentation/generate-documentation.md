These steps generate documentation for a package of flows, using the API.

{{% alert title="Note" %}}
This test uses a small package of flows, for example a package containing one or two flows, so that the test finishes quickly. Documentation is generated slowly on a server without a GPU.
{{% /alert %}}

1. Export a package of flows as a `.ctxpkg` or `.studiopkg` file.
1. In an HTTP client, such as [Postman][], make a request with the following format:

    | Property       | Value |
    |----------------|-------|
    | Action         | POST |
    | URL            | `https://{FQDN of Web Application Server}:{API Gateway Port}/api/{tenant}/{system}/documentation`, the API Gateway of the Flow Debugger, where:<br />`{API Gateway Port}` is the port of the API Gateway, `8722` by default<br />`{tenant}` and `{system}` are the tenant and system the documentation is generated for, e.g. `default`<br />e.g. `https://web-application-server.domain.com:8722/api/default/default/documentation` |
    | Content Type   | multipart/form-data |
    | Body           | A form field named `Package` of type *File*, set to the exported package. |
    | Authentication | Basic |
    | Username       | The value used for `ApiGatewayBasicAuthUsername` when installing the Flow Debugger on the Web Application Server. |
    | Password       | The value used for `ApiGatewayBasicAuthPassword` (Unencrypted) when installing the Flow Debugger on the Web Application Server. |

    {{% alert title="Note" %}} If you used self-signed certificates when installing the Web Application Server you may need to disable SSL certificate validation in your HTTP client. {{% /alert %}}

1. The response should have a status of `202 Accepted` and the body contains the job id. Make a note of it.
1. Make a request with the following format to check the progress of the job:

    | Property       | Value |
    |----------------|-------|
    | Action         | GET |
    | URL            | The URL used in the previous request with `/{Job Id}` added to the end, e.g. `https://web-application-server.domain.com:8722/api/default/default/documentation/0e0a0f8c-1f3b-4c52-9c47-6a1d5f1d3a10` |
    | Authentication | The same as the previous request. |

    The `status` is `Running` while documentation is being generated and `Completed` when it has finished. The `details` shows which flows are `completed`, which are `pending` and which have `errors`.

1. When a GPU is used, check that the GPU is generating the documentation while the `status` is `Running`. On the server running the AI model server, run the following command, and check that `utilization.gpu` is well above `0 %`:

    ```powershell
    nvidia-smi --query-gpu=utilization.gpu,memory.used --format=csv
    ```

    If the GPU is not being used, see {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.TroubleshootingModelNotOnGPU" title="The Model Is Not Loaded on to the GPU" >}}.

1. When the job has completed, make a note of the `documentationKey` of a completed flow, then make a request with the following format to retrieve its documentation:

    | Property       | Value |
    |----------------|-------|
    | Action         | GET |
    | URL            | The URL used in the previous request with `/result/{Documentation Key}` added to the end. |
    | Authentication | The same as the previous request. |

1. The response should be the documentation for the flow, in Markdown. In the job, the flow's `completeness` should be `Complete`.

If the job fails, or a flow has a `completeness` of `Partial`, see {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.TroubleshootingGeneration" title="Problems Generating Documentation" >}}.

[Postman]: {{< url path="Postman.Downloads.MainDoc" >}}
