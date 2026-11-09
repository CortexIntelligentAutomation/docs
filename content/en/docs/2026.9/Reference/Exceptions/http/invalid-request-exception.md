---
title: "InvalidRequestException"
linkTitle: "InvalidRequestException"
description: "The exception thrown when an issue occurs with an HTTP request or a SOAP request."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Http.InvalidRequestException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an issue occurs with an [HTTP request][HttpRequest] or a [SOAP request][SoapRequest].

There are multiple reasons that this exception can be thrown:

* [Invalid Headers in HTTP Request][]
* [Invalid Headers in SOAP Request][]
* [Invalid HTTP Version in HTTP Request][]
* [Invalid HTTP Version in SOAP Request][]
* [Invalid Request Body in HTTP Request][]
* [Invalid Request Envelope in SOAP Request][]
* [Invalid Request Verb in HTTP Request][]
* [Invalid Uri in HTTP Request][]
* [Invalid Uri in SOAP Request][]

## Reasons

### Invalid Headers in HTTP Request {#httprequestheaders}

The [Headers][HttpRequestHeaders] provided in the [HttpRequest][HttpRequest] are invalid (e.g. a header key in the headers is empty).

#### Message Format

The format of the message can be one of the following:

```json
"Invalid 'Headers' provided. A header key has been provided which is empty.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key-value\") has been provided a header value (\"<header-value>\") that cannot be assigned to its property.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key-value>\") has been provided a header value (\"<header-value>\") that cannot be converted to its property type (\"<header-type>\").
Please click the HelpLink for more information on how to fix this."
```

or

[//]: # (forbidden header key route, implemented and technically valid though no header keys are currently set as forbidden so will never be thrown)

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key-value>\") has been provided which is forbidden.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<header-key-value>` is the specific header key in the request headers which may be invalid or contain an invalid value.
* `<header-value>` is the value assigned to the header with the given key, which may be invalid.
* `<header-type>` is the expected data type for the header value.

#### How to fix

* Ensure that the header key is not empty.
* Ensure that the value provided for the header is valid (e.g. the `"Host"` key expects string in a uri format, so `"27/03/2024"` would not be a valid value, while `"https://www.example.com"` would).
* Ensure that the value provided for the header is of the correct type (e.g. the `"Date"` key expects a value that can convert to [DateTime][DateTime], so `0` is not a valid value, while a string of format `"dd-mm-yyyy"` such as `"13-03-2024"` is).
* Ensure that no forbidden header keys are provided in the request.

[//]: # (TODO add a list of forbidden header keys, and explain what forbidden header keys are - i.e. they can't be set)

### Invalid Headers in SOAP Request {#soaprequestheaders}

The [Headers][SoapRequestHeaders] provided in the [SoapRequest][SoapRequest] are invalid (e.g. a header key in the headers is empty).

#### Message Format

The format of the message can be one of the following:

```json
"Invalid 'Headers' provided. A header key has been provided which is empty.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key-value\") has been provided a header value (\"<header-value>\") that cannot be assigned to its property.
Please click the HelpLink for more information on how to fix this."
```

or

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key-value>\") has been provided a header value (\"<header-value>\") that cannot be converted to its property type (\"<header-type>\").
Please click the HelpLink for more information on how to fix this."
```

or

[//]: # (forbidden header key route, implemented and technically valid though no header keys are currently set as forbidden so will never be thrown)

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key-value>\") has been provided which is forbidden.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<header-key-value>` is the specific header key in the request headers which may be invalid or contain an invalid value.
* `<header-value>` is the value assigned to the header with the given key, which may be invalid.
* `<header-type>` is the expected data type for the header value.

#### How to fix

* Ensure that the header key is not empty.
* Ensure that the value provided for the header is valid (e.g. the `"Host"` key expects string in a uri format, so `"27/03/2024"` would not be a valid value, while `"https://www.example.com"` would).
* Ensure that the value provided for the header is of the correct type (e.g. the `"Date"` key expects a value that can convert to [DateTime][DateTime], so `0` is not a valid value, while a string of format `"dd-mm-yyyy"` such as `"13-03-2024"` is).
* Ensure that no forbidden header keys are provided in the request.

[//]: # (TODO add a list of forbidden header keys, and explain what forbidden header keys are - i.e. they can't be set)

### Invalid HTTP Version in HTTP Request {#httprequesthttpversion}

The [HttpVersion][HttpRequestHttpVersion] provided in the [HttpRequest][HttpRequest] is invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid '<http-version-property>' provided. The '<http-version-property>' \"<http-version-value>\" is not a valid Http Request Version.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<http-version-property>` is the property containing the invalid HTTP version value.
* `<http-version-value>` is the invalid value for the HTTP version.

#### How to fix

Ensure that the [HttpVersion][HttpRequestHttpVersion] provided for the [HttpRequest][HttpRequest] is a valid version (i.e. `HTTP10` or `HTTP11`).

### Invalid HTTP Version in SOAP Request {#soaprequesthttpversion}

The [HttpVersion][SoapRequestHttpVersion] provided in the [SoapRequest][SoapRequest] is invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid '<http-version-property>' provided. The '<http-version-property>' \"<http-version-value>\" is not a valid Http Request Version.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<http-version-property>` is the property containing the invalid HTTP version value.
* `<http-version-value>` is the invalid value for the HTTP version.

#### How to fix

Ensure that the [HttpVersion][SoapRequestHttpVersion] provided for the [SoapRequest][SoapRequest] is a valid version (i.e. `HTTP10` or `HTTP11`).

### Invalid Request Body in HTTP Request {#httprequestbody}

The [Body][HttpRequestBody] provided for the [HttpRequest][HttpRequest] was invalid (i.e. a body was provided for a [Verb][HttpRequestVerb] which does not accept a body, or the body was invalid for the [ContentType][HttpRequestContentType]).

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
* `<content-type>` is the content type of the request (e.g. XML, JSON, etc).

#### How to fix

* Ensure that no [Body][HttpRequestBody] is provided for `GET` and `HEAD` requests.
* Ensure that the content of the [Body][HttpRequestBody] is valid for the [ContentType][HttpRequestContentType] specified (e.g. the [Body][HttpRequestBody] is valid JSON if the [ContentType][HttpRequestContentType] is `application/json`).

### Invalid Request Envelope in SOAP Request {#soaprequestsoapmessageenvelope}

The [Envelope][RequestEnvelope] provided in the [SoapMessage][SoapRequestSoapMessage] for the [SoapRequest][SoapRequest] is not valid XML.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Envelope' provided. The 'Envelope' is not valid XML.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the [Envelope][RequestEnvelope] provided is valid XML.

### Invalid Request Verb in HTTP Request {#httprequestverb}

The [Verb][HttpRequestVerb] provided for the [HttpRequest][HttpRequest] is invalid.

#### Message Format 

The format of the message is as follows:

```json
"Invalid '<verb-property>' provided. The '<verb-property>' \"<verb-value>\" is not a valid Request Verb.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<verb-property>` is the name of the property containing the invalid verb.
* `<verb-value>` is the value of the invalid verb.

#### How to fix

Ensure that the [Verb][HttpRequestVerb] provided is a valid [RequestVerb][RequestVerb] (i.e. `GET`, `POST`, `PUT`, `DELETE`, `PATCH` or `HEAD`).

### Invalid Uri in HTTP Request {#httprequesturi}

The [Uri][HttpRequestUri] provided for the [HttpRequest][HttpRequest] cannot be parsed.

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

Ensure that the [Uri][HttpRequestUri] provided is a valid uri (i.e. it is of the [correct format][UriSyntax] and contains no [invalid characters][UriInvalidCharacters]).

### Invalid Uri in SOAP Request {#soaprequesturi}

The [Uri][SoapRequestUri] provided for the [SoapRequest][SoapRequest] cannot be parsed.

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

Ensure that the [Uri][SoapRequestUri] provided is a valid uri (i.e. it is of the [correct format][UriSyntax] and contains no [invalid characters][UriInvalidCharacters]).

## Remarks

### Known Limitations

None

## See Also

### External Documentation

* [RFC 3986 Section 2: Characters][UriInvalidCharacters]
* [Syntax of Uniform Resource Identifiers (URIs)][UriSyntax]

[Invalid Headers in HTTP Request]: {{<ref "#httprequestheaders">}}
[Invalid Headers in SOAP Request]: {{<ref "#soaprequestheaders">}}
[Invalid HTTP Version in HTTP Request]: {{<ref "#httprequesthttpversion">}}
[Invalid HTTP Version in SOAP Request]: {{<ref "#soaprequesthttpversion">}}
[Invalid Request Body in HTTP Request]: {{<ref "#httprequestbody">}}
[Invalid Request Envelope in SOAP Request]: {{<ref "#soaprequestsoapmessageenvelope">}}
[Invalid Uri in HTTP Request]: {{<ref "#httprequesturi">}}
[Invalid Uri in SOAP Request]: {{<ref "#soaprequesturi">}}
[Invalid Request Verb in HTTP Request]: {{<ref "#httprequestverb">}}

[DateTime]: {{<url path="Cortex.Reference.DataTypes.DateAndTime.DateTime.MainDoc">}}
[Enum]: {{<url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc">}}

[HttpRequest]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.MainDoc">}}
[HttpRequestBody]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Body">}}
[HttpRequestContentType]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.ContentType">}}
[HttpRequestHeaders]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Headers">}}
[HttpRequestUri]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Uri">}}
[HttpRequestVerb]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Verb">}}
[HttpRequestHttpVersion]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.HttpVersion">}}

[SoapRequest]: {{<url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.MainDoc">}}
[SoapRequestHeaders]: {{<url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.Headers">}}
[SoapRequestHttpVersion]: {{<url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.HttpVersion">}}
[SoapRequestSoapMessage]: {{<url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.SoapMessage">}}
[SoapRequestUri]: {{<url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.Uri">}}

[RequestEnvelope]: {{<url path="Cortex.Reference.DataTypes.Http.Soap.SoapMessage.Envelope">}}
[RequestVerb]: {{<url path="Cortex.Reference.DataTypes.Http.RequestVerb.MainDoc">}}
[HttpRequestVersion]: {{<url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.MainDoc">}}
[Execute Soap Request]: {{<url path="Cortex.Reference.Blocks.Http.ExecuteSoapRequest.ExecuteSoapRequest.MainDoc">}}

[UriSyntax]: {{<url path="Mozilla.UriSyntax">}}
[UriInvalidCharacters]: {{<url path="RFC.UriInvalidCharacters">}}