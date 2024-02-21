---
title: "InvalidResponseException"
linkTitle: "InvalidResponseException"
description: "The exception thrown when an issue occurs with a HTTP response."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Http.InvalidResponseException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an issue occurs with a HTTP response.

## Reasons

### Response envelope in SOAP response is not valid XML

The response envelope returned from a SOAP response is not valid XML; see [Execute SOAP Request block][ExecuteSOAPRequestBlock] for more information.

#### Message Format

The format of the exception message is as follows:

```json
"Invalid 'Response Envelope' returned. The 'Response Envelope' is not valid XML.
Please click the HelpLink for more information on how to fix this."
```

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[ExecuteSOAPRequestBlock]: {{<url path="Cortex.Reference.Blocks.Http.ExecuteSoapRequest.ExecuteSoapRequest.MainDoc">}}