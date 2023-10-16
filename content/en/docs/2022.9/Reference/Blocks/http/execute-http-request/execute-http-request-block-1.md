---
title: "Execute Http Request"
linkTitle: "Execute Http Request"
description: "Executes an HTTP request and returns a response."
---

{{< figure src="/blocks/http-execute-http-request-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Http.ExecuteHttpRequest.ExecuteHttpRequestBlock`1)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future; this will include further examples and remarks.{{% /alert %}}

## Description

Executes an [Http Request][Http Request Property] using the specified [Http Credentials][Http Credentials Property] and returns the [Http Response][Http Response Property].

## Examples

The following examples will use an example [API][] with a base [Uri][] of `https://test-shop.com/api` and resource called `items` at `https://test-shop.com/api/items`. Each example assumes that the resource `items` contains the following data before the example is executed:

```json
[
    {
        "name": "item 1",
        "id": 1
    },
    {
        "name": "item 2",
        "id": 2
    }
]
```

The example [API][] supports:

- Retrieval of every item in the `items` resource via a [GET][] request which returns the `items` resource as the [ResponseBody][] of the [Http Response][Http Response Property]
- Creation of a new item in the `items` resource via a [POST][] request which returns the updated `items` resource as the [ResponseBody][] of the [Http Response][Http Response Property]
- Unauthenticated requests
- Basic authentication
- Retrieval of access tokens from `https://test-shop.com/api/oauth2/token`
- OAuth authentication using password credentials
- OAuth authentication using client credentials

### Executing a GET request

This example will send a [GET][] request to `https://test-shop.com/api/items` using [HTTP 1.1][HTTP11] with no authentication which requires [Http Credentials][Http Credentials Property] to be `null`.

Note that the result of executing an [Http Request][Http Request Property] is dependent on the [API][] that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Http Request][Http Request Property] | `($)HttpRequest`, with value `{"QueryStringParameters": null, "Verb": "RequestVerb.GET", "ContentType": null, "Body": null, "Uri": "https://test-shop.com/api/items", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)HttpRequest` has been set up using the following [Expression][]:<br><br>`new HttpRequest(uri: "https://test-api/com/items", queryParameters: null, verb: RequestVerb.GET, contentType: null, headers: null, body: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)HttpRequest` is a variable of type [HttpRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `null`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`null` | `($)HttpCredentials` is a variable with value `null`<br><br>As `($)HttpCredentials` is `null`, no authentication will occur when making the request. |
| [Http Response][Http Response Property] | `($)HttpResponse`, with no value | `($)HttpResponse` will be set to the type [HttpResponse][] |

#### Result

Executing an [HttpRequest][] with a [Uri][] of `https://test-shop.com/api/items` and a [Verb][] of [GET][] using [HTTP 1.1][HTTP11] results in the variable `($)HttpResponse` being updated to the following:

```json
{
    "ResponseBody": [
        {
            "name": "item 1",
            "id": 1
        },
        {
            "name": "item 2",
            "id": 2
        }
    ],
    "ErrorMessage": null,
    "Headers": {
        "Content-Length": 1024,
        "Content-Type": "application/json",
    },
    "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `application/json`, the [ResponseBody][] is a [Structure][] containing the data.

***

### Executing a POST request

This example will send a [POST][] request to `https://test-shop.com/api/items` using [HTTP 1.1][HTTP11] with no authentication which requires [Http Credentials][Http Credentials Property] to be `null`.

Note that the result of executing an [Http Request][Http Request Property] is dependent on the [API][] that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Http Request][Http Request Property] | `($)HttpRequest`, with value `{"QueryStringParameters": null, "Verb": "RequestVerb.POST", "ContentType": "application/json", "Body": "{'name': 'item 3', 'id': 3}", "Uri": "https://test-shop.com/api/items", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)HttpRequest` has been set up using the following [Expression][]:<br><br>`new HttpRequest(uri: "https://test-api/com/items", queryParameters: null, verb: RequestVerb.POST, contentType: "application/json", headers: null, body: "{'name': 'item 3', 'id': 3}", httpVersion: HttpRequestVersion.HTTP11)` | `($)HttpRequest` is a variable of type [HttpRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `null`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`null` | `($)HttpCredentials` is a variable with value `null`<br><br>As `($)HttpCredentials` is `null`, no authentication will occur when making the request. |
| [Http Response][Http Response Property] | `($)HttpResponse`, with no value | `($)HttpResponse` will be set to the type [HttpResponse][] |

#### Result

Executing an [HttpRequest][] with a [Uri][] of `https://test-shop.com/api/items` and a [Verb][] of [POST][] using [HTTP 1.1][HTTP11] results in the variable `($)HttpResponse` being updated to the following:

```json
{
    "ResponseBody": [
        {
            "name": "item 1",
            "id": 1
        },
        {
            "name": "item 2",
            "id": 2
        },
        {
            "name": "item 3",
            "id": 3
        }
    ],
    "ErrorMessage": null,
    "Headers": {
        "Content-Length": 1024,
        "Content-Type": "application/json",
    },
    "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note the following:

- The resource `items` at `https://test-shop.com/api/items` contains `item 3` as shown in the [ResponseBody][] of the [Http Response][Http Response Property] shown above
- As the [Headers][Headers Response] contains a key of `Content-Type` with a value of `application/json`, the [ResponseBody][] is a [Structure][] containing the data

***

### Executing a request using Basic authentication

This example will send a [GET][] request to `https://test-shop.com/api/items` using [HTTP 1.1][HTTP11] using Basic authentication which requires [Http Credentials][Http Credentials Property] to be a [UserCredentials][].

Note that the result of executing an [Http Request][Http Request Property] is dependent on the [API][] that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Http Request][Http Request Property] | `($)HttpRequest`, with value `{"QueryStringParameters": null, "Verb": "RequestVerb.GET", "ContentType": null, "Body": null, "Uri": "https://test-shop.com/api/items", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)HttpRequest` has been set up using the following [Expression][]:<br><br>`new HttpRequest(uri: "https://test-api/com/items", queryParameters: null, verb: RequestVerb.GET, contentType: null, headers: null, body: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)HttpRequest` is a variable of type [HttpRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `{"Domain": null, "Username": "username", "Password": "encryptedPassword"}`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`new UserCredentials(username: "username", password: "encryptedPassword")` | `($)HttpCredentials` is a variable of type [UserCredentials][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Http Response][Http Response Property] | `($)HttpResponse`, with no value | `($)HttpResponse` will be set to the type [HttpResponse][] |

#### Result

Executing an [HttpRequest][] with a [Uri][] of `https://test-shop.com/api/items` and a [Verb][] of [GET][] using [HTTP 1.1][HTTP11] results in the variable `($)HttpResponse` being updated to the following:

```json
{
    "ResponseBody": [
        {
            "name": "item 1",
            "id": 1
        },
        {
            "name": "item 2",
            "id": 2
        }
    ],
    "ErrorMessage": null,
    "Headers": {
        "Content-Length": 1024,
        "Content-Type": "application/json",
    },
    "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `application/json`, the [ResponseBody][] is a [Structure][] containing the data.

***

### Executing a request using OAuth password credentials

This example will send a [GET][] request to `https://test-shop.com/api/items` using [HTTP 1.1][HTTP11] using OAuth authentication with password credentials which requires [Http Credentials][Http Credentials Property] to be a [HttpOAuthPasswordCredentials][].

Note that the result of executing an [Http Request][Http Request Property] is dependent on the [API][] that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Http Request][Http Request Property] | `($)HttpRequest`, with value `{"QueryStringParameters": null, "Verb": "RequestVerb.GET", "ContentType": null, "Body": null, "Uri": "https://test-shop.com/api/items", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)HttpRequest` has been set up using the following [Expression][]:<br><br>`new HttpRequest(uri: "https://test-api/com/items", queryParameters: null, verb: RequestVerb.GET, contentType: null, headers: null, body: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)HttpRequest` is a variable of type [HttpRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `{"AccessTokenUri": "https://test-shop.com/api/oauth2/token", "ClientAuthentication": null, "Scope": null, "ResourceOwnerUsername": "username", "ResourceOwnerPassword": "encryptedPassword"}`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`new HttpOAuthPasswordCredentials(accessTokenUri: "https://test-shop.com/api/oauth2/token", clientAuthentication: null, scope: null, resourceOwnerUsername: "username", resourceOwnerPassword: "encryptedPassword")` | `($)HttpCredentials` is a variable of type [HttpOAuthPasswordCredentials][]<br><br>The [ResourceOwnerPassword][ResourceOwnerPassword Password Credentials] property in the [HttpOAuthPasswordCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Http Response][Http Response Property] | `($)HttpResponse`, with no value | `($)HttpResponse` will be set to the type [HttpResponse][] |

#### Result

Executing an [HttpRequest][] with a [Uri][] of `https://test-shop.com/api/items` and a [Verb][] of [GET][] using [HTTP 1.1][HTTP11] results in the variable `($)HttpResponse` being updated to the following:

```json
{
    "ResponseBody": [
        {
            "name": "item 1",
            "id": 1
        },
        {
            "name": "item 2",
            "id": 2
        }
    ],
    "ErrorMessage": null,
    "Headers": {
        "Content-Length": 1024,
        "Content-Type": "application/json",
    },
    "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `application/json`, the [ResponseBody][] is a [Structure][] containing the data.

***

### Executing a request using OAuth client credentials

This example will send a [GET][] request to `https://test-shop.com/api/items` using [HTTP 1.1][HTTP11] using OAuth authentication with client credentials which requires [Http Credentials][Http Credentials Property] to be a [HttpOAuthClientCredentials][].

Note that the result of executing an [Http Request][Http Request Property] is dependent on the [API][] that the request is being made to.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Http Request][Http Request Property] | `($)HttpRequest`, with value `{"QueryStringParameters": null, "Verb": "RequestVerb.GET", "ContentType": null, "Body": null, "Uri": "https://test-shop.com/api/items", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)HttpRequest` has been set up using the following [Expression][]:<br><br>`new HttpRequest(uri: "https://test-api/com/items", queryParameters: null, verb: RequestVerb.GET, contentType: null, headers: null, body: null, httpVersion: HttpRequestVersion.HTTP11)` | `($)HttpRequest` is a variable of type [HttpRequest][] |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `{"AccessTokenUri": "https://test-shop.com/api/oauth2/token", "ClientAuthentication": {"ClientId": "clientId", "ClientSecret": "encryptedClientSecret", "SendAs": "ClientAuthType.Header"}, "Scope": null}`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`new HttpOAuthClientCredentials(accessTokenUri: "https://test-shop.com/api/oauth2/token", clientAuthentication: new ClientAuthentication("clientId", "encryptedClientSecret", ClientAuthType.Header), scope: null)` | `($)HttpCredentials` is a variable of type [HttpOAuthClientCredentials][]<br><br>The [ClientSecret][] property in [ClientAuthentication][] must be encrypted, for more information on how to encrypt the [ClientSecret][], see [EncryptedText][]. |
| [Http Response][Http Response Property] | `($)HttpResponse`, with no value | `($)HttpResponse` will be set to the type [HttpResponse][] |

#### Result

Executing an [HttpRequest][] with a [Uri][] of `https://test-shop.com/api/items` and a [Verb][] of [GET][] using [HTTP 1.1][HTTP11] results in the variable `($)HttpResponse` being updated to the following:

```json
{
    "ResponseBody": [
        {
            "name": "item 1",
            "id": 1
        },
        {
            "name": "item 2",
            "id": 2
        }
    ],
    "ErrorMessage": null,
    "Headers": {
        "Content-Length": 1024,
        "Content-Type": "application/json",
    },
    "StatusCode": "HttpStatusCode.OK (200)"
}
```

Note that as the [Headers][Headers Response] contains a key of `Content-Type` with a value of `application/json`, the [ResponseBody][] is a [Structure][] containing the data.

***

### Calling another Flow

Note: This example does not follow the base [Uri][] or [API][] as specified [above][Examples Base]; but instead uses the [Uri][] of the [Cortex API Gateway][]. The [Uri][] to send this HTTP request to has the following form: `https://<server>:8722/api/<tenant>/<system>/flows/<flowName>/executions/`.

<br>

This example will send a [POST][] request to the [Uri][] of a [Flow][] within a [published package][Publish Package] using [HTTP 1.1][HTTP11] and run the [Flow][], using Basic authentication which requires [Http Credentials][Http Credentials Property] to be a [UserCredentials][]. This example is similar in functionality to the [Run Flow][] block.

<br>

The flow being run is `ExampleFlow`. This flow sets the value of an [Output][] variable `ExampleOutput` to `"I love We Are CORTEX"`. This flow is in a published, non-default package `ExamplePackage`.

<br>

This example will send this request to `https://server.domain.com:8722/api/default/default/flows/ExampleFlow/executions?packageName=ExamplePackage`, where `server.domain.com` is the FQDN of the server hosting an Innovation install.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Http Request][Http Request Property] | `($)HttpRequest`, with value `{"QueryStringParameters": {"packageName": "ExamplePackage"}, "Verb": "RequestVerb.POST", "ContentType": "application/json", "Body": {}, "Uri": "https://server.domain.com:8722/api/default/default/flows/ExampleFlow/executions", "Headers": null, "HttpVersion": "HttpRequestVersion.HTTP11"}`<br><br>In this example `($)HttpRequest` has been set up using the following [Expression][]:<br><br>`new HttpRequest(uri: "https://server.domain.com:8722/api/default/default/flows/ExampleFlow/executions", queryParameters: new Dictionary<string,string>({"packageName","ExamplePackage"}), verb: RequestVerb.POST, contentType: "application/json", headers: null, body: "{}", httpVersion: HttpRequestVersion.HTTP11)` | `($)HttpRequest` is a variable of type [HttpRequest][]<br><br> In this example, the `queryParameters` [Advanced][] property is an [IDictionary<string, string>][IDictionary] with two valid keys, `"packageName"` and `"packageVersion"`. `"packageName"` must be specified as the package of the published flow if it is not the default package.`"packageVersion"` may be included to refer to a specific version of a published package if it is not the default version. |
| [Http Credentials][Http Credentials Property] | `($)HttpCredentials`, with value `{"Username": "username", "Password":"encryptedPassword"}`<br><br>In this example, `($)HttpCredentials` has been set up using the following [Expression][]:<br><br>`new UserCredentials(username: "username", password: "encryptedPassword")` | `($)HttpCredentials` is a variable of type [UserCredentials][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the [password][Password], see [EncryptedText][]. |
| [Http Response][Http Response Property] | `($)HttpResponse`, with no value | `($)HttpResponse` will be set to the type [HttpResponse][] |

#### Results

Executing a [POST][] [HttpRequest][] to `https://server.domain.com:8722/api/default/default/flows/ExampleFlow/executions?packageName=ExamplePackage` results in the variable `($)HttpResponse` being updated to the following:
```json
{
    "ResponseBody": {
        "ExampleOutput": "I love We Are CORTEX"
    },
    "ErrorMessage": null,
    "Headers": {
        "Date": "2023-10-04T14:17:40+00:00",
        "Server": "Kestrel",
        "Cache-Control": "no-store, must-revalidate, no-cache",
        "X-Content-Type-Options": "nosniff",
        "api-supported-versions": "1.0",
        "Content-Length": 36,
        "Content-Type": "application/json; charset=utf-8"
    },
    "StatusCode": "HttpStatusCode.OK (200)"
}
```

***

## Properties

### Http Request

The [Http Request][Http Request Property] to execute using the [Http Credentials][Http Credentials Property]. This property contains all of the information in relation to the request to be sent, these are:

- [Uri][]
- [QueryParameters][]
- [Verb][]
- [ContentType][]
- [Headers][Headers Request]
- [Body][]
- [HttpVersion][]

For more detailed information on each of the properties, see [HttpRequest][].

|||
|----------|----------|
| Data Type | [HttpRequest][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [HttpRequest][] with value shown below: |

```json
{
    "Uri": "",
    "QueryParameters": null,
    "Verb": "RequestVerb.GET",
    "ContentType": "application/json",
    "Headers": null,
    "Body": "",
    "HttpVersion": "HttpRequestVersion.HTTP10"
}
```

### Http Credentials

The [Http Credentials][Http Credentials Property] object that includes all of the information required for authentication. Mutliple authentication mechanisms are supported which correspond to specific values/data types:

- `null`: No authentication
- [UserCredentials][]: Basic authentication
- [HttpOAuthPasswordCredentials][]: OAuth authentication using password credentials
- [HttpOAuthClientCredentials][]: OAuth authentication using client credentials

Note that when using [HttpOAuthPasswordCredentials][] or [HttpOAuthClientCredentials][] as the [Http Credentials][Http Credentials Property], the Execute Http Request block automatically handles retrieval of access tokens using the following rules:

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

### Http Response

The [Http Response][Http Response Property] object which contains the response returned from the server. This property contains all of the information in relation to the response from the server, these are:

- [ResponseBody][]
- [ErrorMessage][]
- [Headers][Headers Response]
- [StatusCode][]

Note that if the [Headers][Headers Response] contains a key of `Content-Type` with a value containing `json` or `xml`, the [ResponseBody][] will be set to a [Structure][] containing the data.

For more detailed information on each of the properties, see [HttpResponse][].

|||
|----------|----------|
| Data Type | [HttpResponse][] |
| Property Type | [Output][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)HttpResponse` with no value |

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
| [InvalidRequestException][] | Thrown when the [Uri][] within [Http Request][Http Request Property] is not in the correct format or contains invalid characters. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Password Credentials] within [HttpOAuthPasswordCredentials][] is not in the correct format or contains invalid characters. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Client Credentials] within [HttpOAuthClientCredentials][] is not in the correct format or contains invalid characters. |
| | Thrown when the [Verb][] within [Http Request][Http Request Property] is not one of the specified [RequestVerb][] values (e.g. `(RequestVerb)10`). |
| | Thrown when a header key in [Headers][Headers Request] within [Http Request][Http Request Property] is empty (i.e. `""`). |
| | Thrown when a header key in [Headers][Headers Request] within [Http Request][Http Request Property] is restricted. |
| | Thrown when a header key in [Headers][Headers Request] within [Http Request][Http Request Property] is restricted and forbidden. |
| | Thrown when a header value in [Headers][Headers Request] within [Http Request][Http Request Property] could not be assigned to its restricted header key. |
| | Thrown when a header value in [Headers][Headers Request] within [Http Request][Http Request Property] could not be converted to its restricted header key's type. |
| | Thrown when the [Body][] within [Http Request][Http Request Property] is not `null` or empty (i.e. `""`) and [RequestVerb][] is [GET][] or [HEAD][]. |
| | Thrown when the [Body][] within [Http Request][Http Request Property] does not match the [ContentType][]. |
| | Thrown when the [HttpVersion][] within [Http Request][Http Request Property] is not one of the specified [HttpRequestVersion][] values (e.g. `(HttpRequestVersion)20`). |
| [PropertyNullException][] | Thrown when the [Http Request][Http Request Property] is `null`. |
| | Thrown when the [Uri][] within [Http Request][Http Request Property] is `null`. |
| | Thrown when the [Username][] within [UserCredentials][] is `null`. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Password Credentials] within [HttpOAuthPasswordCredentials][] is `null`. |
| | Thrown when the [ResourceOwnerUsername][ResourceOwnerUsername Password Credentials] within [HttpOAuthPasswordCredentials][] is `null`. |
| | Thrown when the [AccessTokenUri][AccessTokenUri Client Credentials] within [HttpOAuthClientCredentials][] is `null`. |
| | Thrown when the [ClientAuthentication][ClientAuthentication Client Credentials] within [HttpOAuthClientCredentials][] is `null`. |
| | Thrown when the [ClientId][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is `null`. |
| | Thrown when the [ClientSecret][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is `null`. |
| [PropertyEmptyException][] | Thrown when the [Uri][] within [Http Request][Http Request Property] is empty (i.e. `""`). |
| | Thrown when the [Username][] within [UserCredentials][] is empty (i.e. `""`). |
| | Thrown when the [AccessTokenUri][AccessTokenUri Password Credentials] within [HttpOAuthPasswordCredentials][] is empty (i.e. `""`). |
| | Thrown when the [ResourceOwnerUsername][ResourceOwnerUsername Password Credentials] within [HttpOAuthPasswordCredentials][] is empty (i.e. `""`). |
| | Thrown when the [AccessTokenUri][AccessTokenUri Client Credentials] within [HttpOAuthClientCredentials][] is empty (i.e. `""`). |
| | Thrown when the [ClientId][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is empty (i.e. `""`). |
| | Thrown when the [ClientSecret][] in [ClientAuthentication][] within [HttpOAuthClientCredentials][] is empty (i.e. `""`). |

## Remarks

### Known Limitations

None

[Examples Base]: {{< ref "#examples" >}}
[Http Request Property]: {{< ref "#http-request" >}}
[Http Credentials Property]: {{< ref "#http-credentials" >}}
[Http Response Property]: {{< ref "#http-response" >}}

[IDictionary]: {{< url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc" >}}
[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[HttpCredentials]: {{< url path="Cortex.Reference.DataTypes.Http.Authentication.HttpCredentials.MainDoc" >}}

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

[HttpRequest]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.MainDoc" >}}
[Uri]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Uri" >}}
[QueryParameters]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.QueryParameters" >}}
[Verb]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Verb" >}}
[ContentType]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.ContentType" >}}
[Headers Request]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Headers" >}}
[Body]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.Body" >}}
[HttpVersion]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpRequest.HttpVersion" >}}

[RequestVerb]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.MainDoc" >}}
[GET]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.GET" >}}
[POST]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.POST" >}}
[PUT]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.PUT" >}}
[DELETE]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.DELETE" >}}
[PATCH]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.PATCH" >}}
[HEAD]: {{< url path="Cortex.Reference.DataTypes.Http.RequestVerb.HEAD" >}}

[HttpRequestVersion]: {{< url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.MainDoc" >}}
[HTTP10]: {{< url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.HTTP10" >}}
[HTTP11]: {{< url path="Cortex.Reference.DataTypes.Http.HttpRequestVersion.HTTP11" >}}

[HttpResponse]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpResponse.MainDoc" >}}
[ResponseBody]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpResponse.ResponseBody" >}}
[ErrorMessage]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpResponse.ErrorMessage" >}}
[Headers Response]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpResponse.Headers" >}}
[StatusCode]: {{< url path="Cortex.Reference.DataTypes.Http.Rest.HttpResponse.StatusCode" >}}

[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}

[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}

[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[HttpAuthorisationException]: {{< url path="Cortex.Reference.Exceptions.Http.HttpAuthorisationException.MainDoc" >}}
[InvalidRequestException]: {{< url path="Cortex.Reference.Exceptions.Http.InvalidRequestException.MainDoc" >}}

[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}

[API]: {{< url path="Cortex.Reference.Glossary.A-E.API" >}}
[Flow]:{{< url path="Cortex.Reference.Glossary.F-J.Flow">}}

[Cortex API Gateway]: {{< url path="Cortex.Guides.ApiGatewayService.MainDoc" >}}
[Publish Package]: {{< url path="Cortex.Guides.Gateway.Settings.Packages.MainDoc" >}}
[Run Flow]: {{< url path="Cortex.Reference.Blocks.Flows.RunFlow.RunFlow.MainDoc">}}
