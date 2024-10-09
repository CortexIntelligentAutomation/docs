---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2024.9 is the second [Release][] of the next generation of {{% ctx %}} and improves on the [2024.7][] release in the following areas:

* [Capability][]
* [Observability][]
* [Scalability][]
* [Security][]
* [Usability][]
* [Third-Party Support][]
* [Installation][]
* [Upgrade][]
* [Documentation][]

## Improved Capability

This release introduces multiple new features to the {{% ctx %}} platform:

* The concept of [Process and Activity][], which are types of [Flow][], has now been introduced to {{% ctx %}} Gateway.
* [Saving Output Properties to multiple variables][] is now supported.
* A new built-in [execution context variable][] has been added to the Flow Engine which contains the initiator.
* A new [Proxy for the {{% ctx %}} 7 Flow API][] has been added to the platform.

## Improved Observability

Observability has been improved by [adding logging to blocks that communicate with external systems][Logging added to blocks that communicate with external systems].

## Improved Scalability

Optimisation to scalability has been made by [reducing the total number of NServiceBus endpoints and RabbitMQ queues][Reduction of total number of NServiceBus endpoints and RabbitMQ queues].  

## Improved Security

We increased the security of the platform by:

* [Upgrading the OpenSSL version][Upgrade OpenSSL] shipped with the platform.
* Added [Multi-domain certificates support][].
* A [CortexManagementUser for RabbitMQ is now created during upgrade][New CortexManagementUser added to manage RabbitMQ queues].
* [Server-side validation added to {{% ctx %}} Gateway API][] to prevent [Path Traversal][] attacks.
* Removal of the [refresh token cookie on sign out][remove refresh token cookie on sign out].

## Improved Usability

The usability of the platform has been improved by:

* Renaming the [Flows Charm to Dev and changing the icon][Rename Flows Charm to Dev and change icon].
* Renaming the [Settings Charm to Admin and changing the icon][Rename Settings Charm to Admin and change icon].

## Improved Third-Party Support

Third-party Support has been improved by [upgrading the platform to .NET 8][Upgrade to .NET 8].  

## Improved Installation

Installation when [files are blocked by the operating system][Support installation when files are blocked by the operating system] due to the `Zone.Identifier` is now supported.  

## Improved Upgrade

The upgrade process has been improved by:

* [Supporting upgrade when files are blocked by the operating system][Support upgrade when files are blocked by the operating system].
* Upgrading the [Execution Service when the engine version is unchanged][Execution Service is upgraded when the engine version is unchanged].
* [Handling of the Execution Services lifecycle events][].

## Improved Documentation

The documentation includes updates related to:

* New concepts such as [Process and Activity][Process and Activity Documentation] as well as [Decomposition of Output properties][].
* [Preventing deadlocks when using semaphores][Prevent deadlocks when using semaphores].
* [Updating screenshots][screenshots updated] to reflect the new branding.
* [Flow compatibility version][Flow compatibility version introduced] being added to the release notes.
* [General improvements to the documentation][].

For a full list of what has been introduced in this release, please see the [2024.9 Release Notes][]

[Release]: {{< url path="Cortex.Reference.Glossary.P-T.Release" version="2024.9" >}}
[2024.7]: {{< url path="Cortex.Blogs.Releases.2024.7.MainDoc" version="2024.9" >}}

[Capability]: {{< ref "#improved-capability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Scalability]: {{< ref "#improved-scalability" >}}
[Security]: {{< ref "#improved-security" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Third-Party Support]: {{< ref "#improved-third-party-support" >}}
[Installation]: {{< ref "#improved-installation" >}}
[Upgrade]: {{< ref "#improved-upgrade" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[Process and Activity]: {{< url path="Cortex.Blogs.Releases.2024.9.ProcessAndActivity" version="2024.9" >}}
[Saving Output Properties to multiple variables]: {{< url path="Cortex.Blogs.Releases.2024.9.SaveOutputPropertiesToMultipleVariables" version="2024.9" >}}
[execution context variable]: {{< url path="Cortex.Blogs.Releases.2024.9.ExecutionContextVariable" version="2024.9" >}}
[Proxy for the {{% ctx %}} 7 Flow API]: {{< url path="Cortex.Blogs.Releases.2024.9.ProxyForTheCortex7FlowApi" version="2024.9" >}}
[Logging added to blocks that communicate with external systems]: {{< url path="Cortex.Blogs.Releases.2024.9.LoggingAddedToBlocksThatCommunicateWithExternalSystems" version="2024.9" >}}
[Reduction of total number of NServiceBus endpoints and RabbitMQ queues]: {{< url path="Cortex.Blogs.Releases.2024.9.ReductionOfTotalNumberOfNServiceBusEndpointsAndRabbitMQQueues" version="2024.9" >}}
[Upgrade OpenSSL]: {{< url path="Cortex.Blogs.Releases.2024.9.UpgradeOpenSSL" version="2024.9" >}}
[Multi-domain certificates support]: {{< url path="Cortex.Blogs.Releases.2024.9.MultiDomainCertificatesSupport" version="2024.9" >}}
[New CortexManagementUser added to manage RabbitMQ queues]: {{< url path="Cortex.Blogs.Releases.2024.9.NewCortexManagementUserAddedToManageRabbitMQQueues" version="2024.9" >}}
[Server-side validation added to {{% ctx %}} Gateway API]: {{< url path="Cortex.Blogs.Releases.2024.9.ServerSideValidationAddedToCortexGatewayAPI" version="2024.9" >}}
[Remove refresh token cookie on sign out]: {{< url path="Cortex.Blogs.Releases.2024.9.RemoveRefreshTokenCookieOnSign" version="2024.9" >}}
[Rename Flows Charm to Dev and change icon]: {{< url path="Cortex.Blogs.Releases.2024.9.RenameFlowsCharmToDevAndChangeIcon" version="2024.9" >}}
[Rename Settings Charm to Admin and change icon]: {{< url path="Cortex.Blogs.Releases.2024.9.RenameSettingsCharmToAdminAndChangeIcon" version="2024.9" >}}
[Upgrade to .NET 8]: {{< url path="Cortex.Blogs.Releases.2024.9.UpgradeToNet8" version="2024.9" >}}
[Support installation when files are blocked by the operating system]: {{< url path="Cortex.Blogs.Releases.2024.9.SupportInstallationWhenFilesAreBlockedByTheOperatingSystem" version="2024.9" >}}
[Support upgrade when files are blocked by the operating system]: {{< url path="Cortex.Blogs.Releases.2024.9.SupportUpgradeWhenFilesAreBlockedByTheOperatingSystem" version="2024.9" >}}
[Execution Service is upgraded when the engine version is unchanged]: {{< url path="Cortex.Blogs.Releases.2024.9.ExecutionServiceIsUpgradedWhenTheEngineVersionIsUnchanged" version="2024.9" >}}
[Handling of the Execution Services lifecycle events]: {{< url path="Cortex.Blogs.Releases.2024.9.HandlingOfTheExecutionServicesLifecycleEvents" version="2024.9" >}}
[Process and Activity Documentation]: {{< url path="Cortex.Blogs.Releases.2024.9.ProcessAndActivityDocumentation" version="2024.9" >}}
[Decomposition of Output properties]: {{< url path="Cortex.Blogs.Releases.2024.9.DecompositionOfOutputProperties" version="2024.9" >}}
[Prevent deadlocks when using semaphores]: {{< url path="Cortex.Blogs.Releases.2024.9.PreventDeadlocksWhenUsingSemaphores" version="2024.9" >}}
[Screenshots updated]: {{< url path="Cortex.Blogs.Releases.2024.9.ScreenshotsUpdated" >}}
[Flow compatibility version introduced]: {{< url path="Cortex.Blogs.Releases.2024.9.FlowCompatibilityVersionIntroduced" version="2024.9" >}}
[General improvements to the documentation]: {{< url path="Cortex.Blogs.Releases.2024.9.GeneralImprovementsToTheDocumentation" version="2024.9" >}}

[2024.9 Release Notes]: {{< url path="Cortex.Blogs.Releases.2024.9.MainDoc" version="2024.9" >}}
