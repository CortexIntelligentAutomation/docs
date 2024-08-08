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

[Reduce the number of license check calls]: {{< url path="Cortex.Blogs.Releases.2024.7.ReduceTheNumberOfLicenseCheckCalls" version="2024.7" >}}
[Reduce memory usage of the Package Management Service]: {{< url path="Cortex.Blogs.Releases.2024.7.ReduceMemoryUsageOfThePackageManagementService" version="2024.7" >}}
[Expression editor in {{% ctx %}} Studio leaks memory]: {{< url path="Cortex.Blogs.Releases.2024.7.ExpressionEditorInCortexStudioLeaksMemory" version="2024.7" >}}
[Redact any value in logs that has the format of an encrypted text]: {{< url path="Cortex.Blogs.Releases.2024.7.RedactAnyValueInLogsThatHasTheFormatOfAnEncryptedText" version="2024.7" >}}
[Request user has been added to API Gateway HTTPEvent logs]: {{< url path="Cortex.Blogs.Releases.2024.7.RequestUserHasBeenAddedToApiGatewayHttpEventLogs" version="2024.7" >}}
[Password redaction not always occurring]: {{< url path="Cortex.Blogs.Releases.2024.7.PasswordRedactionNotAlwaysOccurring" version="2024.7" >}}
[Custom names supported for default Tenant and System]: {{< url path="Cortex.Blogs.Releases.2024.7.CustomNamesSupportedForDefaultTenantAndSystem" version="2024.7" >}}
[support for installing multiple {{% ctx %}} Gateway instances on the same Web App Server]: {{< url path="Cortex.Blogs.Releases.2024.7.SupportForInstallingMultipleCortexGatewayInstancesOnTheSameWebAppServer" version="2024.7" >}}
[{{% ctx %}} Gateway]: {{< url path="Cortex.Blogs.Releases.2024.7.CortexGateway" version="2024.7" >}}
[Improved Home page loading placeholder]: {{< url path="Cortex.Blogs.Releases.2024.7.ImprovedHomePageLoadingPlaceholder" version="2024.7" >}}
[Improved Search bar styling]: {{< url path="Cortex.Blogs.Releases.2024.7.ImprovedSearchBarStyling" version="2024.7" >}}
[Engine]: {{< url path="Cortex.Blogs.Releases.2024.7.Engine" version="2024.7" >}}
[Flow with expression sometimes fails to execute with a KeyNotFoundException]: {{< url path="Cortex.Blogs.Releases.2024.7.FlowWithExpressionSometimesFailsToExecuteWithAKeyNotFoundException" version="2024.7" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2024.7.ProductPortal" version="2024.7" >}}
[Wireless Blocks section]: {{< url path="Cortex.Blogs.Releases.2024.7.WirelessBlocks" version="2024.7" >}}
[Execute Data Commmand Block section]: {{< url path="Cortex.Blogs.Releases.2024.7.ExecuteDataCommmandBlock" version="2024.7" >}}
[Scope and ScopeDefinition]: {{< url path="Cortex.Blogs.Releases.2024.7.ScopeandScopeDefinition" version="2024.7" >}}
[Block Icons]: {{< url path="Cortex.Blogs.Releases.2024.7.BlockIcons" version="2024.7" >}}
[upgrade section]: {{< url path="Cortex.Blogs.Releases.2024.7.Upgrade" version="2024.7" >}}
[Incorrect link in Multiple Server Install Web Application Prerequisites]: {{< url path="Cortex.Blogs.Releases.2024.7.IncorrectLinkInMultipleServerInstallWebApplicationPrerequisites" version="2024.7" >}}

[Scope]: {{< url path="Cortex.Reference.DataTypes.Scopes.Scope.MainDoc" version="2024.7">}}
[ScopeDefinition]: {{< url path="Cortex.Reference.DataTypes.Scopes.ScopeDefinition.MainDoc" version="2024.7">}}

[2024.7 Release Notes]: {{< url path="Cortex.Blogs.Releases.2024.7.MainDoc" version="2024.7" >}}

[2024.5]: {{< url path="Cortex.Blogs.Releases.2024.7.MainDoc" version="2024.7" >}}
