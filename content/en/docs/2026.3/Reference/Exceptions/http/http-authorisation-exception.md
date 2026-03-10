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
* [Invalid Client ID or Client Secret][]
* [Invalid Resource Owner Username or Password][]

## Reasons

### Invalid Access Token Uri {#httpoauthcredentialsaccesstokenuri}

An invalid access token uri was provided.

#### Message Format

The format of the message is as follows:

```json
"Invalid 'Access Token Uri' (\"<access-token-uri-value>\") provided. A token could not be retrieved from the provided 'Access Token Uri'.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<access-token-uri-value>` is the uri provided from which the block is attempting to retrieve an access token.

#### How to fix

Ensure that the uri provided is valid.

### Invalid Client ID or Client Secret {#httpoauthclientcredentialsclientauthentication}

The client ID or client secret in the [HttpOAuthClientCredentials][] provided are invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid '<client-id-property>' (\"<client-id-value>\") or '<client-secret-property>' provided. A token could not be retrieved from the provided 'Access Token Uri' (\"<access-token-uri-value>\") using these credentials.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<client-id-property>` is the name of the property containing the possibly invalid client ID for the credentials provided.
* `<client-id-value>` is the value of the possibly invalid client ID for the credentials provided.
* `<client-secret-property>` is the name of property containing the possibly invalid client secret for the credentials provided.
* `<access-token-uri-value>` is the uri provided from which the block is attempting to retrieve an access token.

#### How to fix

Ensure that the credentials provided for client authentication contains a valid client ID and client secret.

### Invalid Resource Owner Username or Password {#httpoauthpasswordcredentialsresourceowner}

The username or password for the resource owner in the [HttpOAuthPasswordCredentials][] provided are invalid.

#### Message Format

The format of the message is as follows:

```json
"Invalid '<resource-owner-username-property>' (\"<resource-owner-username-value>\") or '<resource-owner-password-property>' provided. A token could not be retrieved from the provided 'Access Token Uri' (\"<access-token-uri-value>\") using these credentials.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<resource-owner-username-property>` is the name of the property containing the possibly invalid username for the credentials provided.
* `<resource-owner-username-value>` is the value of the possibly invalid username for the credentials provided.
* `<resource-owner-password-property>` is the name of property containing the possibly invalid password for the credentials provided.
* `<access-token-uri-value>` is the uri provided from which the block is attempting to retrieve an access token.

#### How to fix

Ensure that the credentials provided for the resource owner contains a valid username and password.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Invalid Access Token Uri]: {{<ref "#httpoauthcredentialsaccesstokenuri">}}
[Invalid Resource Owner Username or Password]: {{<ref "#httpoauthpasswordcredentialsresourceowner">}}
[Invalid Client ID or Client Secret]: {{<ref "#httpoauthclientcredentialsclientauthentication">}}

[HttpOAuthCredentials]: {{<url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthCredentials.MainDoc">}}
[HttpOAuthClientCredentials]: {{<url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthClientCredentials.MainDoc">}}
[HttpOAuthPasswordCredentials]: {{<url path="Cortex.Reference.DataTypes.Http.Authentication.OAuth.HttpOAuthPasswordCredentials.MainDoc">}}