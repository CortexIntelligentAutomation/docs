---
title: "Authentication"
linkTitle: "Authentication"
description: "Setup authentication providers used to control access to {{% ctx %}} Gateway."
weight: 20
---

# {{% param title %}}

## Summary

The Authentication page is used to setup one or more authentication providers used to control access to {{% ctx %}} Gateway.

## Anatomy

Authentication can be configured using [LDAP][] against a Microsoft Active Directory, and [OpenID Connect (OIDC)][OIDC] with one or more providers.

### LDAP

{{< figure src="/images/Authentication - LDAP.png" title="LDAP Authentication Configuration" >}}

LDAP authentication defines the connection to a Microsoft Active Directory server to authorise Active Directory users with different roles and permissions within {{% ctx %}} Gateway.

It requires connection details to the Active Directory server (URL or domain), port and protocol, plus the credentials of an Active Directory account (typically a service account) that can read the Active Directory.

For additional security, and to avoid the clutter of irrelevant information, it is possible to filter the Active Directory information available for use in {{% ctx %}} Gateway to that defined by a set of [Base DNs (Distinguished Names)][DNs].

{{% ctx %}} Roles and Flow Editor permissions can be assigned to groups set up in Active Directory.

The fields available are:

* `Server` – specifies either URL or IPv4 address of the Active Directory server, or the domain name for the Active Directory domain.
* `Port` – specifies the port used to access Active Directory, typically either 389 for LDAP or 636 for LDAPS.
* `Use SSL` – a checkbox to connect via the LDAPS protocol rather than LDAP.
* `Username` – the username of an account with read permissions in Active Directory; typically a service account is used.
* `Password` – the password associated with the username entered in the `Username` field.
* `Base DNs` – the Active Directory objects that can be accessed by {{% ctx %}} Gateway. The identity of the objects is expressed using their Distinguished Names. More than one Distinguished Name can be set to refer to multiple objects within the Active Directory. If no Distinguished Names are set, the whole of the Active Directory is accessible.

### OpenID Connect

{{< figure src="/images/Authentication - OIDC.png" title="Open ID Connect Provider Configuration" >}}

OpenID Connect provides connections to third-party authentication services to authenticate users in {{% ctx %}} Gateway, using Multi-Factor Authentication (MFA) if the provider supports it.

The OpenID Connect tab currently only supports the Microsoft Entra provider but allows for one or more instances to be configured.

{{% ctx %}} Roles and Flow Editor permissions can be assigned to groups set up in Microsoft Entra.

The fields available are:

* `Provider Type` – the OIDC provider type. Currently, only Microsoft is the OIDC provider supported.
* `Identifier` – free-format, friendly unique name for this provider.
* `Display Name` – the text displayed in the {{% ctx %}} Gateway sign-in button.
* `Authority` – the URL to send authentication requests to.
* `Tenant Identifier` – the Microsoft Entra Tenant ID for the organisation managing authentication.
* `Client Identifier` – the unique identifier to identify the {{% ctx %}} Gateway application to the authentication provider.
* `Client Secret` – the client secret that validates the {{% ctx %}} Gateway application with the authentication provider.

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

[OIDC]: {{< ref "#openid-connect" >}}
[LDAP]: {{< ref "#ldap" >}}

[Add New OpenID Connect Authentication Provider tutorial]: {{< url path="Cortex.Tutorials.Administration.Authentication.OpenID" >}}
[Configure LDAP Authentication tutorial]: {{< url path="Cortex.Tutorials.Administration.Authentication.LDAP" >}}

[configure OIDC provider]: {{< url path="Cortex.Faqs.ConfigureOidcAuthentication.MainDoc" >}}
[DNs]: {{< url path="MSDocs.Windows.Ldap.DNs" >}}
