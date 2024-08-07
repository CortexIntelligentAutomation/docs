---
title: "Execute Soap Request"
linkTitle: "Execute Soap Request"
description: "Executes a SOAP request and returns a response."
---

{{< figure src="/blocks/Cortex_Blocks_Http_ExecuteSoapRequest_ExecuteSoapRequestBlock_1.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Http.ExecuteSoapRequest.ExecuteSoapRequestBlock`1)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future; this will include further examples and remarks.{{% /alert %}}

## Description

Executes a [Soap Request][Soap Request Property] using the specified [Http Credentials][Http Credentials Property] and returns the [Soap Response][Soap Response Property].

## Examples

The following examples will use an example SOAP service with a base [Uri][] of `https://test-converter.com/xml`.

The example SOAP service supports the following:

- Conversion of a temperature in Degrees Celcius to Kelvin using an [Action][] of `https://test-converter.com/DegreesToKelvin`
- Unauthenticated requests
- Basic authentication
- Retrieval of access tokens from `https://test-converter.com/oauth2/token`
- OAuth authentication using password credentials
- OAuth authentication using client credentials

### Executing a request using SOAP 1.1

This example will send a [Soap Request][Soap Request Property] to `https://test-converter.com/xml` using SOAP 1.1 with no authentication which requires:

- [SoapMessage][SoapMessage Property] to be a [Soap11Message][]
- [Http Credentials][Http Credentials Property] to be `null`

Note that the result of executing a [Soap Request][Soap Request Property] is dependent on the SOAP service that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Soap Request][Soap Request Property] | `($)SoapRequest`, with value `{"SoapMessage": {"Action": "https://test-converter.com/DegreesToKelvin", "Envelope": "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap:Body></soap:Envelope>", "Version": 11}, "Uri": "https://test-converter.com/xml", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)SoapRequest` has been set up using the following [Expression][]:<br><br>`new SoapRequest(uri: "https://test-converter.com/xml", soapMessage: new Soap11Message("https://test-converter.com/DegreesToKelvin", "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap:Body></soap:Envelope>"), headers: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)SoapRequest` is a variable of type [SoapRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `null`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`null` | `($)HttpCredentials` is a variable with value `null`<br><br>As `($)HttpCredentials` is `null`, no authentication will occur when making the request. |
| [Soap Response][Soap Response Property] | `($)SoapResponse`, with no value | `($)SoapResponse` will be set to the type [SoapResponse][] |

#### Result

Executing a [Soap Request][Soap Request Property] with a [Uri][] of `https://test-converter.com/xml` using a [Soap11Message][] with an [Action][] of `https://test-converter.com/DegreesToKelvin` results in the variable `($)SoapResponse` being updated to the following:

```json
{
  "ResponseEnvelope": {
    "?xml": {
      "@version": "1.0",
      "@encoding": "utf-8"
    },
    "soap:Envelope": {
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "@xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/",
      "soap:Body": {
        "DegreesToKelvinResponse": {
          "@xmlns": "https://test-converter.com/DegreesToKelvin/schema",
          "kelvin": "293"
        }
      }
    }
  },
  "ErrorMessage": null,
  "Headers": {
    "Content-Type": "text/xml; charset=utf-8"
  },
  "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `text/xml; charset=utf-8`, the [ResponseEnvelope][] is a [Structure][] containing the data.

***

### Executing a request using SOAP 1.2

This example will send a [Soap Request][Soap Request Property] to `https://test-converter.com/xml` using SOAP 1.2 with no authentication which requires:

- [SoapMessage][SoapMessage Property] to be a [Soap12Message][]
- [Http Credentials][Http Credentials Property] to be `null`

Note that the result of executing a [Soap Request][Soap Request Property] is dependent on the SOAP service that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Soap Request][Soap Request Property] | `($)SoapRequest`, with value `{"SoapMessage": {"Envelope": "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap12:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap12=\"http://www.w3.org/2003/05/soap-envelope\"><soap12:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap12:Body></soap12:Envelope>", "Version": 12}, "Uri": "https://test-converter.com/xml", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)SoapRequest` has been set up using the following [Expression][]:<br><br>`new SoapRequest(uri: "https://test-converter.com/xml", soapMessage: new Soap12Message("<?xml version=\"1.0\" encoding=\"utf-8\"?><soap12:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap12=\"http://www.w3.org/2003/05/soap-envelope\"><soap12:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap12:Body></soap12:Envelope>"), headers: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)SoapRequest` is a variable of type [SoapRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `null`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`null` | `($)HttpCredentials` is a variable with value `null`<br><br>As `($)HttpCredentials` is `null`, no authentication will occur when making the request. |
| [Soap Response][Soap Response Property] | `($)SoapResponse`, with no value | `($)SoapResponse` will be set to the type [SoapResponse][] |

#### Result

Executing a [Soap Request][Soap Request Property] with a [Uri][] of `https://test-converter.com/xml` using a [Soap12Message][] results in the variable `($)SoapResponse` being updated to the following:

```json
{
  "ResponseEnvelope": {
    "?xml": {
      "@version": "1.0",
      "@encoding": "utf-8"
    },
    "soap12:Envelope": {
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "@xmlns:soap12": "http://www.w3.org/2003/05/soap-envelope",
      "soap12:Body": {
        "DegreesToKelvinResponse": {
          "@xmlns": "https://test-converter.com/DegreesToKelvin/schema",
          "kelvin": "293"
        }
      }
    }
  },
  "ErrorMessage": null,
  "Headers": {
    "Content-Type": "application/soap+xml; charset=utf-8"
  },
  "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `application/soap+xml; charset=utf-8`, the [ResponseEnvelope][] is a [Structure][] containing the data.

***

### Executing a request using Basic authentication

This example will send a [Soap Request][Soap Request Property] to `https://test-converter.com/xml` using SOAP 1.1 with Basic authentication which requires:

- [SoapMessage][SoapMessage Property] to be a [Soap11Message][]
- [Http Credentials][Http Credentials Property] to be a [UserCredentials][]

Note that the result of executing a [Soap Request][Soap Request Property] is dependent on the SOAP service that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Soap Request][Soap Request Property] | `($)SoapRequest`, with value `{"SoapMessage": {"Action": "https://test-converter.com/DegreesToKelvin", "Envelope": "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap:Body></soap:Envelope>", "Version": 11}, "Uri": "https://test-converter.com/xml", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)SoapRequest` has been set up using the following [Expression][]:<br><br>`new SoapRequest(uri: "https://test-converter.com/xml", soapMessage: new Soap11Message("https://test-converter.com/DegreesToKelvin", "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap:Body></soap:Envelope>"), headers: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)SoapRequest` is a variable of type [SoapRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `{"Domain": null, "Username": "username", "Password": "encryptedPassword"}`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`new UserCredentials(username: "username", password: "encryptedPassword")` | `($)HttpCredentials` is a variable of type [UserCredentials][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Soap Response][Soap Response Property] | `($)SoapResponse`, with no value | `($)SoapResponse` will be set to the type [SoapResponse][] |

#### Result

Executing a [Soap Request][Soap Request Property] with a [Uri][] of `https://test-converter.com/xml` using a [Soap11Message][] with an [Action][] of `https://test-converter.com/DegreesToKelvin` results in the variable `($)SoapResponse` being updated to the following:

```json
{
  "ResponseEnvelope": {
    "?xml": {
      "@version": "1.0",
      "@encoding": "utf-8"
    },
    "soap:Envelope": {
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "@xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/",
      "soap:Body": {
        "DegreesToKelvinResponse": {
          "@xmlns": "https://test-converter.com/DegreesToKelvin/schema",
          "kelvin": "293"
        }
      }
    }
  },
  "ErrorMessage": null,
  "Headers": {
    "Content-Type": "text/xml; charset=utf-8"
  },
  "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `text/xml; charset=utf-8`, the [ResponseEnvelope][] is a [Structure][] containing the data.

***

### Executing a request using OAuth password credentials

This example will send a [Soap Request][Soap Request Property] to `https://test-converter.com/xml` using SOAP 1.1 with OAuth authentication using password credentials which requires:

- [SoapMessage][SoapMessage Property] to be a [Soap11Message][]
- [Http Credentials][Http Credentials Property] to be an [HttpOAuthPasswordCredentials][]

Note that the result of executing a [Soap Request][Soap Request Property] is dependent on the SOAP service that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Soap Request][Soap Request Property] | `($)SoapRequest`, with value `{"SoapMessage": {"Action": "https://test-converter.com/DegreesToKelvin", "Envelope": "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap:Body></soap:Envelope>", "Version": 11}, "Uri": "https://test-converter.com/xml", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)SoapRequest` has been set up using the following [Expression][]:<br><br>`new SoapRequest(uri: "https://test-converter.com/xml", soapMessage: new Soap11Message("https://test-converter.com/DegreesToKelvin", "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap:Body></soap:Envelope>"), headers: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)SoapRequest` is a variable of type [SoapRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `{"AccessTokenUri": "https://test-converter.com/oauth2/token", "ClientAuthentication": null, "Scope": null, "ResourceOwnerUsername": "username", "ResourceOwnerPassword": "encryptedPassword"}`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`new HttpOAuthPasswordCredentials(accessTokenUri: "https://test-converter.com/oauth2/token", clientAuthentication: null, scope: null, resourceOwnerUsername: "username", resourceOwnerPassword: "encryptedPassword")` | `($)HttpCredentials` is a variable of type [HttpOAuthPasswordCredentials][]<br><br>The [ResourceOwnerPassword][ResourceOwnerPassword Password Credentials] property in the [HttpOAuthPasswordCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Soap Response][Soap Response Property] | `($)SoapResponse`, with no value | `($)SoapResponse` will be set to the type [SoapResponse][] |

#### Result

Executing a [Soap Request][Soap Request Property] with a [Uri][] of `https://test-converter.com/xml` using a [Soap11Message][] with an [Action][] of `https://test-converter.com/DegreesToKelvin` results in the variable `($)SoapResponse` being updated to the following:

```json
{
  "ResponseEnvelope": {
    "?xml": {
      "@version": "1.0",
      "@encoding": "utf-8"
    },
    "soap:Envelope": {
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "@xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/",
      "soap:Body": {
        "DegreesToKelvinResponse": {
          "@xmlns": "https://test-converter.com/DegreesToKelvin/schema",
          "kelvin": "293"
        }
      }
    }
  },
  "ErrorMessage": null,
  "Headers": {
    "Content-Type": "text/xml; charset=utf-8"
  },
  "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `text/xml; charset=utf-8`, the [ResponseEnvelope][] is a [Structure][] containing the data.

***

### Executing a request using OAuth client credentials

This example will send a [Soap Request][Soap Request Property] to `https://test-converter.com/xml` using SOAP 1.1 with OAuth authentication using client credentials which requires:

- [SoapMessage][SoapMessage Property] to be a [Soap11Message][]
- [Http Credentials][Http Credentials Property] to be an [HttpOAuthClientCredentials][]

Note that the result of executing a [Soap Request][Soap Request Property] is dependent on the SOAP service that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Soap Request][Soap Request Property] | `($)SoapRequest`, with value `{"SoapMessage": {"Action": "https://test-converter.com/DegreesToKelvin", "Envelope": "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap:Body></soap:Envelope>", "Version": 11}, "Uri": "https://test-converter.com/xml", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)SoapRequest` has been set up using the following [Expression][]:<br><br>`new SoapRequest(uri: "https://test-converter.com/xml", soapMessage: new Soap11Message("https://test-converter.com/DegreesToKelvin", "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body><DegreesToKelvin xmlns=\"https://test-converter.com/DegreesToKelvin/schema\"><degrees>20</degrees></DegreesToKelvin></soap:Body></soap:Envelope>"), headers: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)SoapRequest` is a variable of type [SoapRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `{"AccessTokenUri": "https://test-converter.com/oauth2/token", "ClientAuthentication": {"ClientId": "clientId", "ClientSecret": "encryptedClientSecret", "SendAs": "ClientAuthType.Header"}, "Scope": null}`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`new HttpOAuthClientCredentials(accessTokenUri: "https://test-converter.com/oauth2/token", clientAuthentication: new ClientAuthentication("clientId", "encryptedClientSecret", ClientAuthType.Header), scope: null)` | `($)HttpCredentials` is a variable of type [HttpOAuthClientCredentials][]<br><br>The [ClientSecret][] property in [ClientAuthentication][] must be encrypted, for more information on how to encrypt the [ClientSecret][], see [EncryptedText][]. |
| [Soap Response][Soap Response Property] | `($)SoapResponse`, with no value | `($)SoapResponse` will be set to the type [SoapResponse][] |

#### Result

Executing a [Soap Request][Soap Request Property] with a [Uri][] of `https://test-converter.com/xml` using a [Soap11Message][] with an [Action][] of `https://test-converter.com/DegreesToKelvin` results in the variable `($)SoapResponse` being updated to the following:

```json
{
  "ResponseEnvelope": {
    "?xml": {
      "@version": "1.0",
      "@encoding": "utf-8"
    },
    "soap:Envelope": {
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "@xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/",
      "soap:Body": {
        "DegreesToKelvinResponse": {
          "@xmlns": "https://test-converter.com/DegreesToKelvin/schema",
          "kelvin": "293"
        }
      }
    }
  },
  "ErrorMessage": null,
  "Headers": {
    "Content-Type": "text/xml; charset=utf-8"
  },
  "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `text/xml; charset=utf-8`, the [ResponseEnvelope][] is a [Structure][] containing the data.

***

## Properties

### Soap Request

The [Soap Request][Soap Request Property] to execute using the [Http Credentials][Http Credentials Property]. This property contains all of the information in relation to the request to be sent, these are:

- [SoapMessage][SoapMessage Property]
- [Uri][]
- [Headers][Headers Request]
- [HttpVersion][]

SOAP 1.1 and SOAP 1.2 are both supported, which correspond to [SoapMessage][SoapMessage Property] within [SoapRequest][] being a [Soap11Message][] and [Soap12Message][] respectively.

For more information on:

- How to use a [Soap11Message][], see [Executing a request using SOAP 1.1][]
- How to use a [Soap12Message][], see [Executing a request using SOAP 1.2][]
- Each of the properties, see [SoapRequest][]

|||
|----------|----------|
| Data Type | [SoapRequest][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [SoapRequest][] with value shown below: |

```json
{
    "SoapMessage": {
        "Action": "",
        "Envelope": "",
        "Version": 11
    },
    "Uri": "",
    "Headers": null,
    "HttpVersion": "HttpRequestVersion.HTTP10"
}
```

### Http Credentials

The [Http Credentials][Http Credentials Property] object that includes all of the information required for authentication. Mutliple authentication mechanisms are supported which correspond to specific values/data types:

- `null`: No authentication
- [UserCredentials][]: Basic authentication
- [HttpOAuthPasswordCredentials][]: OAuth authentication using password credentials
- [HttpOAuthClientCredentials][]: OAuth authentication using client credentials

Note that when using [HttpOAuthPasswordCredentials][] or [HttpOAuthClientCredentials][] as the [Http Credentials][Http Credentials Property], the Execute Soap Request block automatically handles retrieval of access tokens using the following rules:

- If an access token does not exist, a new access token will be retrieved and used when the block runs.
- If an access token already exists but is expired, a new access token will be retrieved and used when the block runs.
- If an access token already exists and is valid, it will be used when the block runs.

|||
|----------|----------|
| Data Type | [HttpCredentials][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)HttpCredentials` with no value |

### Soap Response

The [Soap Response][Soap Response Property] object which contains the response returned from the server. This property contains all of the information in relation to the response from the server, these are:

- [ResponseEnvelope][]
- [ErrorMessage][]
- [Headers][Headers Response]
- [StatusCode][]

Note that if the [Headers][Headers Response] contains a key of `Content-Type` with a value containing `json` or `xml`, the [ResponseEnvelope][] will be set to a [Structure][] containing the data.

For more detailed information on each of the properties, see [SoapResponse][].

|||
|----------|----------|
| Data Type | [SoapResponse][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)SoapResponse` with no value |

## Exceptions

The exceptions thrown by the block can be found below:

| Name                                 | Description |
|--------------------------------------|-------------|
| [HttpAuthorisationException][] | Thrown when the [AccessTokenUri][AccessTokenUri Password Credentials] within [HttpOAuthPasswordCredentials][] is invalid. |
| | Thrown when the [ResourceOwnerUsername][ResourceOwnerUsername Password Credentials] within [HttpOAuthPasswordCredentials][] is invalid. |
| | Thrown when the [ResourceOwnerPassword][ResourceOwnerPassword Password Credentials] within [HttpOAuthPasswordCredentials][] is invalid. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Client Credentials] within [HttpOAuthClientCredentials][] is invalid. |
| | Thrown when the [ClientId][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is invalid. |
| | Thrown when the [ClientSecret][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is invalid. |
| [InvalidRequestException][] | Thrown when the [Uri][] within [Soap Request][Soap Request Property] is not in the correct format or contains invalid characters. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Password Credentials] within [HttpOAuthPasswordCredentials][] is not in the correct format or contains invalid characters. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Client Credentials] within [HttpOAuthClientCredentials][] is not in the correct format or contains invalid characters. |
| | Thrown when a header key in [Headers][Headers Request] within [Soap Request][Soap Request Property] is empty (i.e. `""`). |
| | Thrown when a header key in [Headers][Headers Request] within [Soap Request][Soap Request Property] is restricted. |
| | Thrown when a header key in [Headers][Headers Request] within [Soap Request][Soap Request Property] is restricted and forbidden. |
| | Thrown when a header value in [Headers][Headers Request] within [Soap Request][Soap Request Property] could not be assigned to its restricted header key. |
| | Thrown when a header value in [Headers][Headers Request] within [Soap Request][Soap Request Property] could not be converted to its restricted header key's type. |
| | Thrown when the [Envelope][] in the [SoapMessage][SoapMessage Property] within [Soap Request][Soap Request Property] is not valid XML. |
| | Thrown when the [HttpVersion][] within [Soap Request][Soap Request Property] is not one of the specified [HttpRequestVersion][] values (e.g. `(HttpRequestVersion)20`). |
| [InvalidResponseException][] | Thrown when the [ResponseEnvelope][] within [Soap Response][Soap Response Property] is not valid XML. |
| [PropertyNullException][] | Thrown when the [Soap Request][Soap Request Property] is `null`. |
| | Thrown when the [Uri][] within [Soap Request][Soap Request Property] is `null`. |
| | Thrown when the [SoapMessage][SoapMessage Property] within [Soap Request][Soap Request Property] is `null`. |
| | Thrown when the [Action][] in the [Soap11Message][] within [Soap Request][Soap Request Property] is `null`. |
| | Thrown when the [Envelope][] in the [SoapMessage][SoapMessage Property] within [Soap Request][Soap Request Property] is `null`. |
| | Thrown when the [Username][] within [UserCredentials][] is `null`. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Password Credentials] within [HttpOAuthPasswordCredentials][] is `null`. |
| | Thrown when the [ResourceOwnerUsername][ResourceOwnerUsername Password Credentials] within [HttpOAuthPasswordCredentials][] is `null`. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Client Credentials] within [HttpOAuthClientCredentials][] is `null`. |
| | Thrown when the [ClientAuthentication][ClientAuthentication Client Credentials] within [HttpOAuthClientCredentials][] is `null`. |
| | Thrown when the [ClientId][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is `null`. |
| | Thrown when the [ClientSecret][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is `null`. |
| [PropertyEmptyException][] | Thrown when the [Uri][] within [Soap Request][Soap Request Property] is empty (i.e. `""`). |
| | Thrown when the [Username][] within [UserCredentials][] is empty (i.e. `""`). |
| | Thrown when the [AccessTokenUri][AccessTokenUri Password Credentials] within [HttpOAuthPasswordCredentials][] is empty (i.e. `""`). |
| | Thrown when the [ResourceOwnerUsername][ResourceOwnerUsername Password Credentials] within [HttpOAuthPasswordCredentials][] is empty (i.e. `""`). |
| | Thrown when the [AccessTokenUri][AccessTokenUri Client Credentials] within [HttpOAuthClientCredentials][] is empty (i.e. `""`). |
| | Thrown when the [ClientId][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is empty (i.e. `""`). |
| | Thrown when the [ClientSecret][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is empty (i.e. `""`). |

## Remarks

### Known Limitations

None

[Soap Request Property]: {{< ref "#soap-request" >}}
[Http Credentials Property]: {{< ref "#http-credentials" >}}
[Soap Response Property]: {{< ref "#soap-response" >}}

[Executing a request using SOAP 1.1]: {{< ref "#executing-a-request-using-soap-11" >}}
[Executing a request using SOAP 1.2]: {{< ref "#executing-a-request-using-soap-12" >}}

[SoapRequest]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.MainDoc" >}}
[SoapMessage Property]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.SoapMessage" >}}
[Uri]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.Uri" >}}
[Headers Request]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.Headers" >}}
[HttpVersion]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapRequest.HttpVersion" >}}

[SoapMessage]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapMessage.MainDoc" >}}
[Envelope]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapMessage.Envelope" >}}

[Soap11Message]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.Soap11Message.MainDoc" >}}
[Action]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.Soap11Message.Action" >}}

[Soap12Message]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.Soap12Message.MainDoc" >}}

[HttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.HttpCredentials.MainDoc" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[HttpOAuthClientCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc" >}}
[AccessTokenUri Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.AccessTokenUri" >}}
[ClientAuthentication Client Credentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.ClientAuthentication" >}}

[HttpOAuthPasswordCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.MainDoc" >}}
[ResourceOwnerUsername Password Credentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.ResourceOwnerUsername" >}}
[ResourceOwnerPassword Password Credentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.ResourceOwnerPassword" >}}
[AccessTokenUri Password Credentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.AccessTokenUri" >}}

[ClientAuthentication]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.MainDoc" >}}
[ClientId]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.ClientId" >}}
[ClientSecret]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.ClientSecret" >}}
[SendAs]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.ClientAuthentication.SendAs" >}}

[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}

[SoapResponse]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapResponse.MainDoc" >}}
[ResponseEnvelope]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapResponse.ResponseEnvelope" >}}
[ErrorMessage]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapResponse.ErrorMessage" >}}
[Headers Response]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapResponse.Headers" >}}
[StatusCode]: {{< url path="Cortex.Reference.DataTypes.Http.Soap.SoapResponse.StatusCode" >}}

[HttpRequestVersion]: {{< url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.MainDoc" >}}
[HTTP10]: {{< url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.HTTP10" >}}
[HTTP11]: {{< url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.HTTP11" >}}

[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[HttpAuthorisationException]: {{< url path="Cortex.Reference.Exceptions.Http.HttpAuthorisationException.MainDoc" >}}
[InvalidRequestException]: {{< url path="Cortex.Reference.Exceptions.Http.InvalidRequestException.MainDoc" >}}
[InvalidResponseException]: {{< url path="Cortex.Reference.Exceptions.Http.InvalidResponseException.MainDoc" >}}

[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[API]: {{< url path="Cortex.Reference.Glossary.A-E.API" >}}
