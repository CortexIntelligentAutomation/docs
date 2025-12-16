---
title: "Authentication"
linkTitle: "Authentication"
description: "Setup authentication for accessing {{% ctx %}} Gateway."
weight: 20
---

# {{% param title %}}

## Summary

The Authentication page is used to setup authentication for accessing {{% ctx %}} Gateway.

## Anatomy

Authentication can be configured using [LDAP Authentication][] against a Microsoft Active Directory, and [OpenID Connect (OIDC) Authentication][OIDC Authentication] with one or more providers.

### LDAP Authentication

{{< figure src="/images/Authentication - LDAP.png" title="LDAP Authentication Configuration" >}}

LDAP authentication defines the connection to a Microsoft Active Directory server to authorise Active Directory users with different roles and permissions within {{% ctx %}} Gateway.

The LDAP form provides for the connection details to the LDAP server (URL or domain), port and protocol, plus the credentials of an AD User (typically a Service Account) that can read the Active Directory.

For additional security, and to avoid the clutter of irrelevant information, it is possible to filter the Active Directory information available for use in {{% ctx %}} Gateway to that defined by a set of Base DNs.

The fields available in the LDAP form are:

* `Server` – specifies either URL or IPv4 address of the Active Directory server, or the domain name for the Active Directory domain.
* `Port` – specifies the IPv4 port used to access Active Directory, typically either 389 or 636.
* `Use SSL` – a checkbox to select the LDAPS protocol rather than LDAP.
* `Username` – the name of a user with read permissions in Active Directory. A Service Account is used.
* `Password` – the password associated with the username entered in the Username field.
* `Base DNs` – the Active Directory objects that can be accessed by {{% ctx %}} Gateway. The identity of the objects is expressed using their Distinguished Names. More than one Distinguished Name can be set to refer to multiple objects within Active Directory. If no Distinguished Names are set, the whole of Active Directory is accessible.

### OpenID Connect Authentication

{{< figure src="/images/Authentication - OIDC.png" title="Open ID Connect Provider Configuration" >}}

OpenID Connect provides connections to third-party authentication services, e.g. Microsoft Entra. The OpenID Connect tab allows for one or more providers to be configured for users to authenticate with {{% ctx %}} Gateway, using Multi-Factor Authentication (MFA) if required.

Groups set up in Microsoft Entra, provide for {{% ctx %}} Role assignment and {{% ctx %}} Flow Editor permissions.

The fields available in the OIDC form are:

* `Provider Type` – the OIDC provider type. Currently, only Microsoft is the OIDC provider supported.
* `Identifier` – free-format, friendly unique name for this provider.
* `Display Name` – the text displayed in the {{% ctx %}} Gateway sign-in button.
* `Authority` – the URL for authentication to which to send authentication requests.
* `Tenant Identifier` – the Microsoft Entra Tenant ID for the organisation managing authentication.
* `Client Identifier` – the unique identifier to identify the {{% ctx %}} Gateway application to the authentication provider.
* `Client Secret` – the client secret that validate the Client Identifier to the authentication provider.

## Actions

### Configure LDAP Authentication

LDAP Authentication can be configured by selecting the `LDAP` tab and entering the connection information. Once the details have been entered it is necessary to test the connection before being able to save them.

See the [Configure LDAP Authentication][Configure LDAP Authentication tutorial] tutorial for a step-by-step guide.

### Add New OpenID Connect Authentication Provider

To configure {{% ctx %}} Gateway to use OpenID Connect Authentication, the application must be registered and configured with the provider. For assistance with configuring this see [FAQs][configure OIDC provider].

An Open ID Connect provider can be added to the authentication providers by selecting the `OpenID Connect` tab, then selecting the `+ New Provider` option and entering the connection information. Once the details have been entered it is necessary to validate the connection before being able to save them.

See the [Add New OpenID Connect Authentication Provider][Add New OpenID Connect Authentication Provider tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* Currently, only Microsoft Entra OIDC is supported.
* OpenID Connect only validates the format of the data entered in the OIDC form; it does not validate that a connection to the provider can be established.
* OpenID Connect does not currently offer any filtering of the groups imported into {{% ctx %}} Gateway.

## See Also

### Related Concepts

None

### Related Tutorials

* [Configure LDAP Authentication][Configure LDAP Authentication tutorial]
* [Add New OpenID Connect Authentication Provider][Add New OpenID Connect Authentication Provider tutorial]

[OIDC Authentication]: {{< ref "#openid-connect-authentication" >}}
[LDAP Authentication]: {{< ref "#ldap-authentication" >}}

[Add New OpenID Connect Authentication Provider tutorial]: {{< url path="Cortex.Tutorials.Administration.Authentication.OpenID" >}}
[Configure LDAP Authentication tutorial]: {{< url path="Cortex.Tutorials.Administration.Authentication.LDAP" >}}

[configure OIDC provider]: {{< url path="Cortex.Faqs.ConfigureOidcAuthentication.MainDoc" >}}
