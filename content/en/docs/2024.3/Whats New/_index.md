---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2024.3 is the next [Fast Track][] release of {{% ctx %}} and continues our journey to improve on the previous 7.X generation in the following areas:

* [Performance][]
* [Capability][]
* [Observability][]
* [Documentation][]

## Platform Upgrades

* Upgrades have been added for both [Single Server][A New Single Server Upgrade Script has been Added to the Installation Artefacts] and [Multi Server][A New Multi Server Upgrade Script has been Added to the Installation Artefacts] deployments, including new documentation being created for upgrading a 2024.1 {{% ctx %}} Platform to 2024.3. Additionally, [A new Flow Upgrader tool has been created to upgrade flows][A New Flow Upgrader Tool has been Created to Upgrade Flows] which allows for flows to be upgraded between versions to mitigate potentially breaking as a result of changes related to blocks. This is not required for upgrading the platform from 2024.1 to 2024.3

## Block Icon Redesign

* [Block icons][Block Icon Redesign] within the {{% ctx %}} platform have been redesigned. The refresh includes new icons for every block updating the consistency of design and accessability of colours used within flows.

## Improved Performance

* This release shows [performance improvements][Platform Performance Improvements] in a number of areas:
  * [Caching has been added to Provisioning service][Caching Added to the Provisioning Service] in order to reduce the number of messages sent throughout the HA Platform
  * [HealthCheck enabled for the Triggers service after provisioning][HealthCheck Enabled for the Triggers Service after Provisioning]
  * General [LoadBalancer healthcheck improvements][LoadBalancer HealthCheck Improvements]

## Improved Capability

* The [ExecuteDataCommand][Improved Blocks] block have been improved as part of this release of the platform, a new Parameter type for requests made to Oracle data sources. This allows for specifying the type and direction of the parameter, and provides the capability for processes like passing large data sets (CLOB) to an Oracle stored procedure.

## Improved Observability

* Platform Visibility within the HA Platform has been improved in a number of ways:
  * [A new Platform property has been added to provide more information in logs][A New Platform Property has been Added to Provide more Information in Logs]
  * [Type and Method properties have been added to all logs][Type and Method Added to Platform Logs]
  * [Request duration is now logged in seconds instead of milliseconds][Request Duration is now Logged in Seconds Instead of Milliseconds]
  * [Grafana and Promtail updated to use the new and updated log properties][Grafana and Promtail Updated to use the New and Updated Properties Added to Platform Logs] to prevent issues with potentially breaking changes
  * [Custom Tags can be passed through logs via headers][Custom Tags can be Passed Through Logs via Headers] in order to add custom tags to any log related to the API request made
  * [Exception Tags added to logs related to Exceptions or Problem Details][Exception Tags Added to Logs Related to Exceptions or Problem Details] which provides more information within a log when an issue occurs
  * [Flow Logging Control][] has been added, this allows for logging to be turned on and off for all flows executing within the platform
  * [Block Logging Control][] has been added, this allows for logging to be turned on and off for all blocks executing within the platform
  * [Running executions can be viewed in real-time][Running Executions can be Viewed in Real-Time] which allows users to track executions within the platform

## Improved Documentation

* [Product Portal][] changes, including:
  * Reference documentation has been updated for the [improved blocks][Improved Blocks]
  * Improvements have been made to all reference documentation for [Exceptions][] and [Data Types][]
  * Getting Started documentation has been updated to reflect the [improved installation][]
  * Documentation has been added for the new [platform upgrade][TODO] process

For a full list of what has been introduced in this release, please see the [2024.3 Release Notes][]

[Performance]: {{< ref "#improved-performance" >}}
[Capability]: {{< ref "#improved-capability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[Platform Performance Improvements]: {{< url path="Cortex.Blogs.Releases.2024.3.PlatformPerformanceImprovements" version="2024.3" >}}
[Caching Added to the Provisioning Service]: {{< url path="Cortex.Blogs.Releases.2024.3.CachingAddedProvisioningService" version="2024.3" >}}
[HealthCheck Enabled for the Triggers Service after Provisioning]: {{< url path="Cortex.Blogs.Releases.2024.3.HealthCheckEnabledTriggersService" version="2024.3" >}}
[LoadBalancer HealthCheck Improvements]: {{< url path="Cortex.Blogs.Releases.2024.3.LoadBalancerHealthCheckImprovements" version="2024.3" >}}

[A New Platform Property has been Added to Provide more Information in Logs]: {{< url path="Cortex.Blogs.Releases.2024.3.NewPlatformProperty" version="2024.3" >}}
[Request Duration is now Logged in Seconds Instead of Milliseconds]: {{< url path="Cortex.Blogs.Releases.2024.3.RequestDurationLoggedInSeconds" version="2024.3" >}}
[Type and Method Added to Platform Logs]: {{< url path="Cortex.Blogs.Releases.2024.3.TypeandMethodAddedToLogs" version="2024.3" >}}
[Custom Tags can be Passed Through Logs via Headers]: {{< url path="Cortex.Blogs.Releases.2024.3.CustomTags" version="2024.3" >}}
[Exception Tags Added to Logs Related to Exceptions or Problem Details]: {{< url path="Cortex.Blogs.Releases.2024.3.ExceptionTags" version="2024.3" >}}
[Flow Logging Control]: {{< url path="Cortex.Blogs.Releases.2024.3.FlowLoggingControl" version="2024.3" >}}
[Block Logging Control]: {{< url path="Cortex.Blogs.Releases.2024.3.BlockLoggingControl" version="2024.3" >}}
[Running Executions can be Viewed in Real-Time]: {{< url path="Cortex.Blogs.Releases.2024.3.RunningExecutionsRealTime" version="2024.3" >}}
[Grafana and Promtail Updated to use the New and Updated Properties Added to Platform Logs]: {{< url path="Cortex.Blogs.Releases.2024.3.GrafanaAndPromtailUpdated" version="2024.3" >}}

[A New Flow Upgrader Tool has been Created to Upgrade Flows]: {{< url path="Cortex.Blogs.Releases.2024.3.FlowUpgraderTool" version="2024.3" >}}
[A New Single Server Upgrade Script has been Added to the Installation Artefacts]: {{< url path="Cortex.Blogs.Releases.2024.3.SingleServerUpgradeScript" version="2024.3" >}}
[A New Multi Server Upgrade Script has been Added to the Installation Artefacts]: {{< url path="Cortex.Blogs.Releases.2024.3.MultiServerUpgradeScript" version="2024.3" >}}

[Block Icon Redesign]: {{< url path="Cortex.Blogs.Releases.2024.3.BlockIconRedesign" version="2024.3" >}}

[Improved Blocks]: {{< url path="Cortex.Blogs.Releases.2024.3.ImprovedBlocks" version="2024.3" >}}
[improved installation]: {{< url path="Cortex.Blogs.Releases.2024.3.ImprovedInstallation" version="2024.3" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2024.3.ProductPortal" version="2024.3" >}}
[2024.3 Release Notes]: {{< url path="Cortex.Blogs.Releases.2024.3.MainDoc" version="2024.3" >}}

[Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" version="2024.3" >}}
[Exceptions]: {{< url path="Cortex.Reference.Exceptions.MainDoc" version="2024.3" >}}

[Fast Track]: {{< url path="Cortex.Reference.Glossary.F-J.FastTrack" version="2024.3" >}}
