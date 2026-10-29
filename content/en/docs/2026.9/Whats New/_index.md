---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2026.9 is the latest [Release][] of the next generation of {{% ctx %}} and improves on the [2026.3][] release in the following areas:

* [Capability][]
* [Security][]
* [Performance][]
* [Usability][]
* [Third-Party Support][]
* [Installation][]
* [Upgrade][]
* [Documentation][]

## Improved Capability

This release introduces multiple new features to the {{% ctx %}} Platform:

* [Added AI-generated flow documentation][Capability - Added AI-generated flow documentation]
* [Added Microsoft 365 email blocks][Capability - Added Microsoft 365 email blocks]
* [Added proxy support to Send Email Using Microsoft 365][Capability - Added proxy support to Send Email Using Microsoft 365]
* [Added SSH private key authentication][Capability - Added SSH private key authentication]
* [Updated Create Process from BPMN XML][Capability - Updated Create Process from BPMN XML]
* [Added SNMP enumeration translation][Capability - Added SNMP enumeration translation]
* [Extended configuration settings management][Capability - Extended configuration settings management]
* [Introduced the {{% ctx %}} Portal][Capability - Introduced the {{% ctx %}} Portal]
* [Added RabbitMQ outage logging][Capability - Added RabbitMQ outage logging]

## Improved Security

We tightened the security of the platform by:

* [Adding certificate-based OAuth and mTLS][Security - Adding certificate-based OAuth and mTLS]
* [Adding an optional OpenID scope and UserInfo][Security - Adding an optional OpenID scope and UserInfo]
* [Updating the SSL best practices scripts][Security - Updating the SSL best practices scripts]

## Improved Performance

The performance of the {{% ctx %}} Platform has been improved by:

* [Returning to debug mode without the previous timeout][Performance - Debug resume returns without timing out]
* [Improving the loading of running executions][Performance - Improved loading of running executions]

## Improved Usability

Usability has been improved by [limiting log redaction to sensitive property names][Usability - Limiting log redaction to sensitive property names].

## Improved Third-Party Support

Third-party support has been improved by:

* [Upgrading to .NET 10][Third-Party Support - Upgrading to .NET 10]
* [Upgrading RabbitMQ and Erlang][Third-Party Support - Upgrading RabbitMQ and Erlang]
* [Updating third-party packages][Third-Party Support - Updating third-party packages]
* [Adding Windows Server 2025 support][Third-Party Support - Adding Windows Server 2025 support]

## Improved Installation

Installation has been improved by:

* [Adding a script to move RabbitMQ logs and data][Installation - Adding a script to move RabbitMQ logs and data]
* [Reactivating the Service Fabric node after node maintenance][Installation - Reactivating the Service Fabric node after node maintenance]

## Improved Upgrade

Upgrade has been improved by [skipping invalid RunSubTask blocks during flow migration][Upgrade - Skipping invalid RunSubTask blocks during flow migration].

## Improved Documentation

The documentation has been [expanded with broader Product Portal][Documentation - Expanded with broader Product Portal] coverage across the code analyser, the global RunAs user, BPMN and natural language process templates, and the literal editor. Working with topics now include concurrency, data sources, date and time, email authentication, enums, files and folders, loops, numbers, scopes, tasks, and text. Fundamentals now include data types, null and nullable types, and generics. Objects now include what an object is, casting, and equality.

For a full list of what has been introduced in this release, please see the [2026.9 Release Notes][]

[Release]: {{< url path="Cortex.Reference.Glossary.P-T.Release" version="2026.9" >}}
[2026.3]: {{< url path="Cortex.Blogs.Releases.2026_3.MainDoc" version="2026.9" >}}

[Capability]: {{< ref "#improved-capability" >}}
[Security]: {{< ref "#improved-security" >}}
[Performance]: {{< ref "#improved-performance" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Third-Party Support]: {{< ref "#improved-third-party-support" >}}
[Installation]: {{< ref "#improved-installation" >}}
[Upgrade]: {{< ref "#improved-upgrade" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[2026.9 Release Notes]: {{< url path="Cortex.Blogs.Releases.2026_9.MainDoc" version="2026.9" >}}

[Capability - Added AI-generated flow documentation]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedAiGeneratedFlowDocumentation" version="2026.9" >}}
[Performance - Improved loading of running executions]: {{< url path="Cortex.Blogs.Releases.2026_9.ImprovedLoadingOfRunningExecutions" version="2026.9" >}}
[Capability - Added Microsoft 365 email blocks]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedMicrosoft365EmailBlocks" version="2026.9" >}}
[Capability - Added proxy support to Send Email Using Microsoft 365]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedProxySupportToSendEmailUsingMicrosoft365" version="2026.9" >}}
[Capability - Added SSH private key authentication]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedSshPrivateKeyAuthentication" version="2026.9" >}}
[Capability - Updated Create Process from BPMN XML]: {{< url path="Cortex.Blogs.Releases.2026_9.UpdatedCreateProcessFromBpmnXml" version="2026.9" >}}
[Capability - Added SNMP enumeration translation]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedSnmpEnumerationTranslation" version="2026.9" >}}
[Capability - Extended configuration settings management]: {{< url path="Cortex.Blogs.Releases.2026_9.ExtendedConfigurationSettingsManagement" version="2026.9" >}}
[Capability - Introduced the {{% ctx %}} Portal]: {{< url path="Cortex.Blogs.Releases.2026_9.IntroducedTheCortexPortal" version="2026.9" >}}
[Capability - Added RabbitMQ outage logging]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedRabbitMqOutageLogging" version="2026.9" >}}

[Security - Adding certificate-based OAuth and mTLS]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedCertificateBasedOauthAndMtls" version="2026.9" >}}
[Security - Adding an optional OpenID scope and UserInfo]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedAnOptionalOpenIdScopeAndUserInfo" version="2026.9" >}}
[Security - Updating the SSL best practices scripts]: {{< url path="Cortex.Blogs.Releases.2026_9.UpdatedTheSslBestPracticesScripts" version="2026.9" >}}

[Performance - Debug resume returns without timing out]: {{< url path="Cortex.Blogs.Releases.2026_9.DebugResumeReturnsWithoutTimingOut" version="2026.9" >}}

[Usability - Limiting log redaction to sensitive property names]: {{< url path="Cortex.Blogs.Releases.2026_9.LimitedLogRedactionToSensitivePropertyNames" version="2026.9" >}}

[Third-Party Support - Upgrading to .NET 10]: {{< url path="Cortex.Blogs.Releases.2026_9.UpgradedToNet10" version="2026.9" >}}
[Third-Party Support - Upgrading RabbitMQ and Erlang]: {{< url path="Cortex.Blogs.Releases.2026_9.UpgradedRabbitMqAndErlang" version="2026.9" >}}
[Third-Party Support - Updating third-party packages]: {{< url path="Cortex.Blogs.Releases.2026_9.UpdatedThirdPartyPackages" version="2026.9" >}}
[Third-Party Support - Adding Windows Server 2025 support]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedWindowsServer2025Support" version="2026.9" >}}

[Installation - Adding a script to move RabbitMQ logs and data]: {{< url path="Cortex.Blogs.Releases.2026_9.AddedAScriptToMoveRabbitMqLogsAndData" version="2026.9" >}}
[Installation - Reactivating the Service Fabric node after node maintenance]: {{< url path="Cortex.Blogs.Releases.2026_9.ReactivatingTheServiceFabricNodeAfterNodeMaintenance" version="2026.9" >}}

[Upgrade - Skipping invalid RunSubTask blocks during flow migration]: {{< url path="Cortex.Blogs.Releases.2026_9.SkippingInvalidRunSubTaskBlocksDuringFlowMigration" version="2026.9" >}}

[Documentation - Expanded with broader Product Portal]: {{< url path="Cortex.Blogs.Releases.2026_9.ExpandedProductPortalDocumentationCoverage" version="2026.9" >}}
