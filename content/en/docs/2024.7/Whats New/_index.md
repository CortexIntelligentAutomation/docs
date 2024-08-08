---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2024.7 is the next [Fast Track][] release of {{% ctx %}} and improves on the [2024.5][] release in the following areas:

* [Performance][]
* [Security][]
* [Scalability][]
* [Usability][]
* [Documentation][]

## Improved Performance

This release shows performance improvements in a number of areas:

* [Reduce the number of license check calls][]
* [Reduce memory usage of the Package Management Service][] by compressing the Flow JSON
* Fixed a bug where the [Expression editor in {{% ctx %}} Studio leaks memory][]

## Improved Security

We increased the security of the platform by:

* [Redacting any value in logs that has the format of an encrypted text][Redact any value in logs that has the format of an encrypted text] to ensure that encrypted text is not visible in logs
* [Adding the Request user to API Gateway HTTPEvent logs][Request user has been added to API Gateway HTTPEvent logs] to provide more information in logs
* Fixed a bug where [Password redaction not always occurring][].  

## Improved Scalability

Scalability has been improved by adding [support of custom names for default Tenant and System][Custom names supported for default Tenant and System] from {{% ctx %}} Gateway, as well as [support for installing multiple {{% ctx %}} Gateway instances on the same Web App Server][].

## Improved Usability

The previous `Scope` data type has been renamed to [ScopeDefinition][] as it more accurately reflects its purpose of defining a scope; allowing for a new [Scope][] data type to represent an instance of a scope.  
\
The [user experience of {{% ctx %}} Gateway][{{% ctx %}} Gateway] has seen improvements which include:

* [Improving the Home page loading placeholder][Improved Home page loading placeholder]
* [Improving the Search bar styling][Improved Search bar styling]

A bug has been fixed on the [Engine][] where a [Flow with expression sometimes fails to execute with a KeyNotFoundException][].  

## Improved Documentation

The [Product Portal][] includes updates related to:

* [Wireless Blocks][Wireless Blocks section] including data type and exception
* [Execute Data Commmand Block][Execute Data Commmand Block section] and data types
* [Scope and ScopeDefinition][] data types
* [Upgrade steps][Upgrade section] from 2024.5 to 2024.7
* [Block Icons][]
* [Incorrect link in Multiple Server Install Web Application Prerequisites][]

For a full list of what has been introduced in this release, please see the [2024.7 Release Notes][]

[Fast Track]: {{< url path="Cortex.Reference.Glossary.F-J.FastTrack" version="2024.7" >}}

[Performance]: {{< ref "#improved-performance" >}}
[Security]: {{< ref "#improved-security" >}}
[Scalability]: {{< ref "#improved-scalability" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[Reduce the number of license check calls]: {{< ref "#reduced-the-number-of-license-check-calls" >}}
[Reduce memory usage of the Package Management Service]: {{< ref "#reduce-memory-usage-of-the-package-management-service" >}}
[Expression editor in {{% ctx %}} Studio leaks memory]: {{< ref "#expression-editor-in-cortex-studio-leaks-memory" >}}
[Redact any value in logs that has the format of an encrypted text]: {{< ref "#redact-any-value-in-logs-that-has-the-format-of-an-encrypted-text" >}}
[Request user has been added to API Gateway HTTPEvent logs]: {{< ref "#request-user-has-been-added-to-api-gateway-httpevent-logs" >}}
[Password redaction not always occurring]: {{< ref "#password-redaction-not-always-occurring" >}}
[Custom names supported for default Tenant and System]: {{< ref "#custom-names-supported-for-default-tenant-and-system" >}}
[support for installing multiple {{% ctx %}} Gateway instances on the same Web App Server]: {{< ref "#support-for-installing-multiple-cortex-gateway-instances-on-the-same-web-app-server" >}}
[{{% ctx %}} Gateway]: {{< ref "#cortex-gateway" >}}
[Improved Home page loading placeholder]: {{< ref "#improved-home-page-loading-placeholder" >}}
[Improved Search bar styling]: {{< ref "#improved-search-bar-styling" >}}
[Engine]: {{< ref "#engine" >}}
[Flow with expression sometimes fails to execute with a KeyNotFoundException]: {{< ref "#flow-with-expression-sometimes-fails-to-execute-with-a-keynotfoundexception" >}}
[Product Portal]: {{< ref "#product-portal" >}}
[Wireless Blocks section]: {{< ref "#wireless-blocks" >}}
[Execute Data Commmand Block section]: {{< ref "#execute-data-commmand-block" >}}
[Scope and ScopeDefinition]: {{< ref "#scope-and-scopedefinition" >}}
[Block Icons]: {{< ref "#block-icons" >}}
[upgrade section]: {{< ref "#upgrade" >}}
[Incorrect link in Multiple Server Install Web Application Prerequisites]: {{< ref "#incorrect-link-in-multiple-server-install-web-application-prerequisites" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc" version="2024.7">}}
[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc" version="2024.7">}}

[2024.7 Release Notes]: {{< url path="Cortex.Blogs.Releases.2024.7.MainDoc" version="2024.7" >}}

[2024.5]: {{< url path="Cortex.Blogs.Releases.2024.5.MainDoc" version="2024.7" >}}
