---
title: "InvalidRequestException"
linkTitle: "InvalidRequestException"
description: "The exception thrown when an issue occurs with an HTTP request."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Http.InvalidRequestException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an issue occurs with an [HTTP request][HttpRequest] or a [SOAP Request][SoapRequest].

There are multiple reasons that this exception can be thrown:

* [Invalid Headers in HTTP Request][]
* [Invalid Headers in SOAP Request][]
* [Invalid HTTP Version in HTTP Request][]
* [Invalid HTTP Version in SOAP Request][]
* [Invalid Request Body][]
* [Invalid Request Envelope][]
* [Invalid Request Verb][]
* [Invalid Uri in HTTP Request][]
* [Invalid Uri in SOAP Request][]

## Reasons

### Invalid Headers in HTTP Request {#httprequestheaders}

The headers provided in the [HTTP request][HttpRequest] are invalid (e.g. a header key in the headers is empty).

#### Message Format

The format of the message can be one of the following:

```json
"Invalid 'Headers' provided. A header key has been provided which is empty.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key>\") has been provided which does not match any of the restricted header properties.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key\") has been provided a header value (\"<header-value>\") that cannot be assigned to its property.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key>\") has been provided a header value (\"<header-value>\") that cannot be converted to its property type (\"<header-type>\").
Please click the HelpLink for more information on how to fix this."
```

or

[//]: # (forbidden header key route, implemented and technically valid though no header keys are currently set as forbidden so will never be thrown)

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key>\") has been provided which is forbidden.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<header-key>` is the specific restricted header key in the request headers which may either contain an invalid value or be invalid.
* `<header-value>` is the value assigned to the header with the given key, which may be invalid.
* `<header-type>` is the expected data type for the header

#### How to fix

Ensure that the header key is not empty.
Ensure that the value provided for the header is of the correct type.
Ensure that no forbidden header keys are provided in the request.
Ensure that the header key provided is valid.
Ensure that the value provided for the header is valid.

### Invalid Headers in SOAP Request {#soaprequestheaders}

The headers provided in the [SOAP request][SoapRequest] are invalid (e.g. a header key in the headers is empty).

#### Message Format

The format of the message can be one of the following:

```json
"Invalid 'Headers' provided. A header key has been provided which is empty.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key>\") has been provided which does not match any of the restricted header properties.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key\") has been provided a header value (\"<header-value>\") that cannot be assigned to its property.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key>\") has been provided a header value (\"<header-value>\") that cannot be converted to its property type (\"<header-type>\").
Please click the HelpLink for more information on how to fix this."
```

or

[//]: # (forbidden header key route, implemented and technically valid though no header keys are currently set as forbidden so will never be thrown)

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key>\") has been provided which is forbidden.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<header-key>` is the specific restricted header key in the request headers which may either contain an invalid value or be invalid.
* `<header-value>` is the value assigned to the header with the given key, which may be invalid.
* `<header-type>` is the expected data type for the header

#### How to fix

Ensure that the header key is not empty.
Ensure that the value provided for the header is of the correct type.
Ensure that no forbidden header keys are provided in the request.
Ensure that the header key provided is valid.
Ensure that the value provided for the header is valid.

### Invalid HTTP Version in HTTP Request {#httprequesthttpversion}

The [HTTP version][HttpRequestVersion] provided in the [request][HttpRequest] is invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid '<http-version-property>' provided. The '<http-version-property>' \"<http-version-value>\" is not a valid Http Request Version.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<http-version-property>` is the property containing the invalid HTTP version value
* `<http-version-value>` is the invalid value for the HTTP version

#### How to fix

Ensure that the [HTTP version][HttpRequestVersion] provided for the [request][SoapRequest] is a valid version (i.e. `HTTP10` or `HTTP11`).

### Invalid HTTP Version in SOAP Request {#soaprequesthttpversion}

The [HTTP version][HttpRequestVersion] provided in the [request][SoapRequest] is invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid '<http-version-property>' provided. The '<http-version-property>' \"<http-version-value>\" is not a valid Http Request Version.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<http-version-property>` is the property containing the invalid HTTP version value
* `<http-version-value>` is the invalid value for the HTTP version

#### How to fix

Ensure that the [HTTP version][HttpRequestVersion] provided for the [request][SoapRequest] is a valid version (i.e. `HTTP10` or `HTTP11`).

### Invalid Request Body {#httprequestbody}

A request body for the [request][HttpRequest] was provided when one should not have been provided.

#### Message Format

The format of the message can be one of the following:

```json
"Invalid 'Body' provided. The 'Verb' \"<verb>\" should not be provided a 'Body'.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Body' provided. The 'Body' does not match the 'Content Type' \"<content-type>\".
Please click the HelpLink for more information on how to fix this."
```

where:

* `<verb>` is the request verb of the errored request.
* `<content-type>` is the content type of the request, e.g. XML or JSON.

#### How to fix

[//]: # (Unsure on formatting/phrasing, bring this up)

Ensure that the request body provided is a valid body for a valid [request verb][RequestVerb] (i.e. the request verb should be valid and no body should be provided for `GET` and `HEAD` requests).

Ensure that the correct [request verb][RequestVerb] has been provided and that there is no body provided for this verb if it should not be provided one (i.e. `GET` and `HEAD` requests).

### Invalid Request Envelope {#soaprequestsoapmessageenvelope}

The envelope provided is not valid XML.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Envelope' provided. The 'Envelope' is not valid XML.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the response envelope provided is valid XML; see [Execute Soap Request][] block.

### Invalid Request Verb {#httprequestverb}

The [request verb][RequestVerb] provided for the [request][HttpRequest] is invalid.

#### Message Format 

The format of the message is as follows:

```json
"Invalid '<property-name>' provided. The '<property-name>' \"<property-value>\" is not a valid <enum-type>.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<verb-property>` is the name of the property containing the invalid verb.
* `<verb-value>` is the value of the invalid verb.
* `<enum type>` is the type that the enum provided is required to be (i.e. [RequestVerb][]).

#### How to fix

Ensure that the verb provided is a valid verb (i.e. `GET`, `POST`, `PUT`, `DELETE`, `PATCH` or `HEAD`).

### Invalid Uri in HTTP Request {#httprequesturi}

The [request][HttpRequest] has been provided a uri that cannot be parsed.

#### Message Format 

The format of the message is as follows:

```json
"Invalid '<uri-property>' (\"<uri-value>\") provided. The '<uri-property>' has been provided a uri that cannot be parsed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<uri-property>` is the name of the property containing the invalid uri.
* `<uri-value>` is the value of the uri provided that could not be parsed.

#### How to fix

Ensure that the uri provided is a valid uri (i.e. it is of the correct format and contains no invalid characters).

### Invalid Uri in SOAP Request {#soaprequesturi}

The [request][SoapRequest] has been provided a uri that cannot be parsed.

#### Message Format 

The format of the message is as follows:

```json
"Invalid '<uri-property>' (\"<uri-value>\") provided. The '<uri-property>' has been provided a uri that cannot be parsed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<uri-property>` is the name of the property containing the invalid uri.
* `<uri-value>` is the value of the uri provided that could not be parsed.

#### How to fix

Ensure that the uri provided is a valid uri (i.e. it is of the correct format and contains no invalid characters).

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Invalid Headers in HTTP Request]: {{<ref "#httprequestheaders">}}
[Invalid Headers in SOAP Request]: {{<ref "#soaprequestheaders">}}
[Invalid HTTP Version in HTTP Request]: {{<ref "#httprequesthttpversion">}}
[Invalid HTTP Version in SOAP Request]: {{<ref "#soaprequesthttpversion">}}
[Invalid Request Body]: {{<ref "#httprequestbody">}}
[Invalid Request Envelope]: {{<ref "#soaprequestsoapmessageenvelope">}}
[Invalid Uri in HTTP Request]: {{<ref "#httprequesturi">}}
[Invalid Uri in SOAP Request]: {{<ref "#soaprequesturi">}}
[Invalid Request Verb]: {{<ref "#httprequestverb">}}

[Enum]: {{<url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc">}}
[HttpRequest]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.MainDoc">}}
[SoapRequest]: {{<url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.MainDoc">}}
[RequestEnvelope]: {{<url path="Cortex.Reference.DataTypes.Http.Soap.SoapMessage.Envelope">}}
[RequestVerb]: {{<url path="Cortex.Reference.DataTypes.Http.RequestVerb.MainDoc">}}
[HttpRequestVersion]: {{<url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.MainDoc">}}
[Execute Soap Request]: {{<url path="Cortex.Reference.Blocks.Http.ExecuteSoapRequest.ExecuteSoapRequest.MainDoc">}}