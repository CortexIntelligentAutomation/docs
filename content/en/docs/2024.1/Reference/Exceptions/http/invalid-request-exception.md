---
title: "InvalidRequestException"
linkTitle: "InvalidRequestException"
description: "The exception thrown when an issue occurs with a HTTP request."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Http.InvalidRequestException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an issue occurs with a [HTTP request][HttpRequest].

There are multiple reasons that this exception can be thrown:

* [Invalid Request Body][]
* [Invalid Request Content Type][]
* [Invalid Request Enum Provided][]
* [Invalid Request Envelope][]
* [Empty Header Key][]
* [Forbidden Header Key][]
* [Restricted Header Key Provided With No Matching Property][]
* [Invalid Request Header Property][]
* [Invalid Header Type][]
* [Invalid Uri][]

## Reasons

### Invalid Request Body (HttpRequest Only)

A request body for the [request][HttpRequest] was provided when one should not have been provided.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Body' provided. The 'Verb' \"<verb>\" should not be provided a 'Body'.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<verb>` is the request verb of the errored request.

#### How to fix

Ensure that the correct [request verb][RequestVerb] has been provided and that there is no body provided for this verb if it should not be provided one (i.e. `GET` and `HEAD` requests).

### Invalid Request Content Type (HttpRequest Only) {#HttpRequest.Body}

The [request][HttpRequest] body provided does not match the content type.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Body' provided. The 'Body' does not match the 'Content Type' \"<content-type>\".
Please click the HelpLink for more information on how to fix this."
```

where:

* `<content-type>` is the content type of the request, e.g. XML or JSON.

#### How to fix

Ensure that the content type of the body provided matches that which is required for the [request][HttpRequest].

### Invalid Request Enum (HttpRequest Only)

An [Enum][] value provided for the [request][HttpRequest] is invalid, e.g. the [request verb][RequestVerb] or the [request Version][HttpRequestVersion].

#### Message Format 

The format of the message is as follows:

```json
"Invalid '<property-name>' provided. The '<property-name>' \"<property-value>\" is not a valid <enum-type>.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<property-name>` is the name of the property containing the invalid enum value.
* `<property-value>` is the invalid enum value.
* `<enum type>` is the type that the enum provided is required to be.

#### How to fix

Ensure that the value of the enum property provided is a valid value.

### Invalid Request Envelope (SoapRequest Only) {#SoapRequestSoapMessageEnvelope}

The envelope provided is not valid XML.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Envelope' provided. The 'Envelope' is not valid XML.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that the response envelope provided is valid XML; see [Execute Soap Request][] block.

### Empty Header Key (HttpRequest and SoapRequest)

A header key has been provided which is empty.

#### Message Format 

The format of the message is as follows:

```json
"Invalid 'Headers' provided. A header key has been provided which is empty.
Please click the HelpLink for more information on how to fix this."
```

#### How to fix

Ensure that no header key provided for the request headers is empty.

### Forbidden Header Key

[//]: # (Currently unthrowable path, only exists for if some request headers get set to forbidden in future or some forbidden ones are added. RequestExecutor.cs line 148 has details.)

A restricted header key has been provided which is forbidden.

#### Message Format 

The format of the message is as follows:

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key-value>\") has been provided which is forbidden.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<header-key-value>` is the value that the forbidden header key was set to.

#### How to fix

Ensure that no forbidden header key is provided in the request.

### Restricted Header Key Provided With No Matching Property (HttpRequest and SoapRequest)

A restricted header key has been provided which does not match any of the restricted properties.

#### Message Format 

The format of the message is as follows:

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-name>\") has been provided which does not match any of the restricted header properties.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<header-name>` is the name of the header key provided which did not match any of the restricted properties.

#### How to fix

Ensure that the name of the header key provided is valid.

### Invalid Request Header Property (HttpRequest and SoapRequest)

A request header has been provided a header value that cannot be assigned to its property.

#### Message Format 

The format of the message is as follows:

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key>\") has been provided a header value (\"<invalid-value>\") that cannot be assigned to its property.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<header-key>` is the header key which was provided an invalid value.
* `<invalid-value>` is the value which could not be assigned to the header key.

#### How to fix

Ensure that the value provided is a valid one for the request header.

### Invalid Header Type

[//]: # (Invalid route, never actually thrown \(as per tests\), wrote this out as a note in case it changes in future. Under Invalid Header)

A restricted header key has been provided a header value that cannot be converted to its property type.

#### Message Format 

The format of the message is as follows:

```json
"Invalid 'Headers' provided. A restricted header key (\"<header-key>\") has been provided a header value (\"<invalid-value>\") that cannot be converted to its property type (\"<header-type>\").
Please click the HelpLink for more information on how to fix this."
```

where:

* `<header-key>` is the header key which was provided an invalid value.
* `<invalid-value>` is the value which could not be assigned to the header key due to a type conversion issue.
* `<header-type>` is the property type required for the header.

#### How to fix

Ensure that the value provided is of the correct type for the request header.

### Invalid Uri (HttpRequest and SoapRequest)

A Uri has been provided that cannot be parsed.

#### Message Format 

The format of the message is as follows:

```json
"Invalid '<uri-property>' (\"<uri-value>\") provided. The '<uri-property>' has been provided a uri that cannot be parsed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<uri-property>` is the name of the property that was provided a uri that could not be parsed.
* `<uri-value>` is the value of the uri provided that could not be parsed.

#### How to fix

Ensure that the uri provided is a valid uri.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Enum]: {{<url path="Cortex.Reference.Concepts.WorkingWith.Enums.MainDoc">}}
[HttpRequest]: {{<url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.MainDoc">}}
[RequestVerb]: {{<url path="Cortex.Reference.DataTypes.Http.RequestVerb.MainDoc">}}
[HttpRequestVersion]: {{<url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.MainDoc">}}
[Execute Soap Request]: {{<url path="Cortex.Reference.Blocks.Http.ExecuteSoapRequest.ExecuteSoapRequest.MainDoc">}}