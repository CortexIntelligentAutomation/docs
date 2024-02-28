---
title: "HttpAuthorisationException"
linkTitle: "HttpAuthorisationException"
description: "The exception thrown when an issue occurs during the authorisation process when working with HTTP."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Http.HttpAuthorisationException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when an issue occurs during the authorisation process when working with HTTP.

There are multiple reasons that this exception can be thrown:

* [Invalid Access Token Uri][]
* [Invalid Credentials][]

## Reasons

### Invalid access token uri provided

A category of `HttpOAuthCredentials.AccessTokenUri` indicates that an invalid access token uri was provided.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Access Token Uri' (\"<access-token-uri>\") provided. A token could not be retrieved from the provided 'Access Token Uri'.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<access-token-uri>` is the name of the property containing the Uri from which to attempt to retrieve an access token for the web request.

#### How to fix

Ensure that the Uri provided is valid.

### Invalid credentials provided

The username or password in the [IHttpCredentials][] provided are invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid '<invalid-username-credentials>' (\"<invalid-username-credentials-value>\") or '<password>' provided. A token could not be retrieved from the provided 'Access Token Uri' (\"<access-token-uri>\") using these credentials.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<invalid-username-credentials>` is the name of the property containing the possibly invalid username for the credentials provided.
* `<invalid-username-credentials-value>` is the value of the possibly invalid username for the credentials provided.
* `<password>` is the name of property containing the possibly invalid password for the credentials provided.
* `<access-token-uri>` is the name of the property containing the Uri from which to attempt to retrieve an access token for the web request.

#### How to fix

Ensure that the credentials provided contain a valid username and password.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Invalid Access Token Uri]: {{<ref "#invalid-access-token-uri-provided">}}
[Invalid Credentials]: {{<ref "#invalid-credentials-provided">}}

[IHttpCredentials]: {{<url path="Cortex.Reference.DataTypes.Http.Authentication.IHttpCredentials.MainDoc">}}