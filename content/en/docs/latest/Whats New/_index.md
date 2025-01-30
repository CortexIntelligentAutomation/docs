---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2024.11 is the next [Fast Track][] release of {{% ctx %}} and improves on the [2024.9][] release in the following areas:

* [Capability][]
* [Observability][]
* [Performance][]
* [Scalability][]
* [Security][]
* [Usability][]
* [Third-Party Support][]
* [Installation][]
* [Upgrade][]
* [Documentation][]

## Improved Capability

This release introduces multiple new features to the {{% ctx %}} platform:

* The [Monitoring Service has been introduced][] that provides aggregated historical data about the platform.
* The [Operations Overview page][] has been added to {{% ctx %}} Gateway to provide a high-level view of the system's operations, which includes:
  * Current Status
  * Filters
  * Flow graphs
* The [configuration for maximum query string length][] has been added to the {{% ctx %}} Gateway `web.config`.
* The [Cortex Interaction Portal can now be installed multiple times on the same machine][].

## Improved Observability

Observability has been improved by [reducing the maximum size of Service Fabric Trace Logs][].

## Improved Performance

The Performance of the {{% ctx %}} has been improved by:

* optimising [handling high volumes of executions more efficiently][]
* handling [session updates more reliably on slower systems][]

## Improved Scalability

Scalability has been enhanced by [increasing the header size limit for Service Fabric API Gateway][].

## Improved Security

Security has been tightened on {{% ctx %}} Gateway by:

* updating the [Content-security-policy directives][]
* introducing the [Permissions-Policy header][]
* removing the [X-XSS-PROTECTION header][]

## Improved Usability

Usability has been improved by [fixing the LiveView datetime picker styling issues][].

## Improved Third-Party Support

Third-party Support has been improved by:

* adding a [Health Check API to Service Fabric API Gateway][]
* updating the following 3rd party libraries on {{% ctx %}} Gateway:
  * Fuse
  * jQuery
  * jQuery UI
  * Moment.js
  * Stacktrace.js

## Improved Installation

Installation has been modified to:

* [check for certificate friendly name][]
* [use PSDrive to improve compatibility][]
* [allow log file rotation for RabbitMQ logs][]
* [open ports for RabbitMQ Stream][]  

## Improved Upgrade

Upgrade has been improved by:

* [restoring files to pre-upgrade if the load balancer upgrade fails][]
* [aligning the timeout of the Register-ServiceFabricApplicationType command with other commands][]
* [changing the extension of the studio package created by the upgrade script][]
* [allow log file rotation for RabbitMQ logs][Upgrade - allow log file rotation for RabbitMQ logs]
* [opening ports for RabbitMQ Stream][Upgrade - opening ports for RabbitMQ Stream]

## Improved Documentation

The documentation includes updates related to:

* [adding the encryption key to the built-in Load Balancer server][]
* [adding the Observability Compatibility table to release notes][]
* [updating the ports used by the platform][]

For a full list of what has been introduced in this release, please see the [2024.11 Release Notes][]

[Fast Track]: {{< url path="Cortex.Reference.Glossary.F-J.FastTrack" version="2024.11" >}}
[2024.9]: {{< url path="Cortex.Blogs.Releases.2024.9.MainDoc" version="2024.11" >}}

[Capability]: {{< ref "#improved-capability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Performance]: {{< ref "#improved-performance" >}}
[Scalability]: {{< ref "#improved-scalability" >}}
[Security]: {{< ref "#improved-security" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Third-Party Support]: {{< ref "#improved-third-party-support" >}}
[Installation]: {{< ref "#improved-installation" >}}
[Upgrade]: {{< ref "#improved-upgrade" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[Monitoring Service has been introduced]: {{< url path="Cortex.Blogs.Releases.2024.11.MonitoringServiceHasBeenIntroduced" version="2024.11" >}}
[Operations Overview page]: {{< url path="Cortex.Blogs.Releases.2024.11.OperationsOverviewPage" version="2024.11" >}}
[configuration for maximum query string length]: {{< url path="Cortex.Blogs.Releases.2024.11.ConfigurationForMaximumQueryStringLength" version="2024.11" >}}
[Cortex Interaction Portal can now be installed multiple times on the same machine]: {{< url path="Cortex.Blogs.Releases.2024.11.CortexInteractionPortalCanNowBeInstalledMultipleTimesOnTheSameMachine" version="2024.11" >}}
[session updates more reliably on slower systems]: {{< url path="Cortex.Blogs.Releases.2024.11.SessionUpdatesMoreReliablyOnSlowerSystems" version="2024.11" >}}
[reducing the maximum size of Service Fabric Trace Logs]: {{< url path="Cortex.Blogs.Releases.2024.11.ReducingTheMaximumSizeOfServiceFabricTraceLogs" version="2024.11" >}}
[handling high volumes of executions more efficiently]: {{< url path="Cortex.Blogs.Releases.2024.11.HandlingHighVolumesOfExecutionsMoreEfficiently" version="2024.11" >}}
[increasing the header size limit for Service Fabric API Gateway]: {{< url path="Cortex.Blogs.Releases.2024.11.IncreasingTheHeaderSizeLimitForServiceFabricAPIGateway" version="2024.11" >}}
[Content-security-policy directives]: {{< url path="Cortex.Blogs.Releases.2024.11.ContentSecurityPolicyDirectives" version="2024.11" >}}
[Permissions-Policy header]: {{< url path="Cortex.Blogs.Releases.2024.11.PermissionsPolicyHeader" version="2024.11" >}}
[X-XSS-PROTECTION header]: {{< url path="Cortex.Blogs.Releases.2024.11.XXSSPROTECTIONHeader" version="2024.11" >}}
[fixing the LiveView datetime picker styling issues]: {{< url path="Cortex.Blogs.Releases.2024.11.FixingTheLiveViewDatetimePickerStylingIssues" version="2024.11" >}}
[Health Check API to Service Fabric API Gateway]: {{< url path="Cortex.Blogs.Releases.2024.11.HealthCheckAPIToServiceFabricAPIGateway" version="2024.11" >}}
[check for certificate friendly name]: {{< url path="Cortex.Blogs.Releases.2024.11.CheckForCertificateFriendlyName" version="2024.11" >}}
[use PSDrive to improve compatibility]: {{< url path="Cortex.Blogs.Releases.2024.11.UsePSDriveToImproveCompatibility" version="2024.11" >}}
[allow log file rotation for RabbitMQ logs]: {{< url path="Cortex.Blogs.Releases.2024.11.AllowLogFileRotationForRabbitMQLogs" version="2024.11" >}}
[open ports for RabbitMQ Stream]: {{< url path="Cortex.Blogs.Releases.2024.11.OpenPortsForRabbitMQStream" version="2024.11" >}}
[restoring files to pre-upgrade if the load balancer upgrade fails]: {{< url path="Cortex.Blogs.Releases.2024.11.RestoringFilesToPreUpgradeIfTheLoadBalancerUpgradeFails" version="2024.11" >}}
[aligning the timeout of the Register-ServiceFabricApplicationType command with other commands]: {{< url path="Cortex.Blogs.Releases.2024.11.AligningTheTimeoutOfTheRegisterServiceFabricApplicationTypeCommandWithOtherCommands" version="2024.11" >}}
[changing the extension of the studio package created by the upgrade script]: {{< url path="Cortex.Blogs.Releases.2024.11.ChangingTheExtensionOfTheStudioPackageCreatedByTheUpgradeScript" version="2024.11" >}}
[Upgrade - allow log file rotation for RabbitMQ logs]: {{< url path="Cortex.Blogs.Releases.2024.11.UpgradeAllowLogFileRotationForRabbitMQLogs" version="2024.11" >}}
[Upgrade - opening ports for RabbitMQ Stream]: {{< url path="Cortex.Blogs.Releases.2024.11.UpgradeOpeningPortsForRabbitMQStream" version="2024.11" >}}
[adding the encryption key to the built-in Load Balancer server]: {{< url path="Cortex.Blogs.Releases.2024.11.AddingTheEncryptionKeyToTheBuiltInLoadBalancerServer" version="2024.11" >}}
[adding the Observability Compatibility table to release notes]: {{< url path="Cortex.Blogs.Releases.2024.11.AddingTheObservabilityCompatibilityTableToReleaseNotes" version="2024.11" >}}
[updating the ports used by the platform]: {{< url path="Cortex.Blogs.Releases.2024.11.UpdatingThePortsUsedByThePlatform" version="2024.11" >}}

[2024.11 Release Notes]: {{< url path="Cortex.Blogs.Releases.2024.11.MainDoc" version="2024.11" >}}
