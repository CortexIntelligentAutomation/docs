---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2024.5 is the next [Fast Track][] release of {{% ctx %}} and improves on the [2024.3][] release in the following areas:

* [Usability][]
* [Capability][]
* [Observability][]
* [Documentation][]

## Improved Usability

* [Improvements have been made to {{% ctx %}} Gateway][Improved {{% ctx %}} Gateway], including:
  * [Helplinks update when upgrading the {{% ctx %}} platform][]
  * [Update styling of the setup wizard to be consistent with new themes][]
* [Improvements have been made to exceptions raised by the engine][Improved Engine Exceptions] for improved clarity and helpfulness
* The [installation process has been improved][improved installation] to preserve information required for future upgrades of the installed platform
* The [upgrade process has been improved][improved upgrade] and now provides more useful feedback when running

## Improved Capability

* This release shows improvements to [package management][Package Management] in a number of areas:
  * The `Running Executions` tab now allows for [running executions to be stopped in real-time][Running Executions can be Stopped in Real-Time]
  * Users can now [unselect 'Use Latest Version' for all flows except for a selected one][Unselect All 'Use Latest Version' for a flow] when creating a new version of an existing package
* [Scope has been extended][Extended Scope Support] to support further levels of segregation (package and flow), the levels within scope are hierarchical, affecting several blocks and services within the {{% ctx %}} platform
* Two [new Wireless blocks have been added][new Blocks] within the {{% ctx %}} Block Packages, allowing for better organisation of the layout of a flow

## Improved Observability

* The following [components within the Observability platform have been updated][Observability Upgrades] to the latest major versions:
  * Grafana - 10.4.1
  * Loki - 3.0.0
  * Promtail - 3.0.0

## Improved Documentation

This [Product Portal][] includes updates related to:

* The [new blocks][New Blocks] and data types
* The [improved installation][]
* The [improved upgrade][]

## Other

* Services within the {{% ctx %}} platform no longer [reference code shared with the {{% ctx %}} Licence Fingerprint Generator][Reduced Usage of Shared Fingerprint Generator Code], and now invoke a local instance of the {{% ctx %}} Licence Fingerprint Generator when validating licenses
* The installation now deploys the {{% ctx %}} Licence Fingerprint Generator to all required nodes.

For a full list of what has been introduced in this release, please see the [2024.5 Release Notes][]

[Usability]: {{< ref "#improved-usability" >}}
[Capability]: {{< ref "#improved-capability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Cost of Ownership]: {{< ref "#cost-of-ownership" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[Product Portal]: {{< url path="Cortex.Blogs.Releases.2024.5.ProductPortal" version="2024.5" >}}
[Package Management]: {{< url path="Cortex.Blogs.Releases.2024.5.PackageManagement" version="2024.5" >}}
[Running Executions can be Stopped in Real-Time]: {{< url path="Cortex.Blogs.Releases.2024.5.RunningExecutions" version="2024.5" >}}
[Extended Scope Support]: {{< url path="Cortex.Blogs.Releases.2024.5.ExtendedScopeSupport" version="2024.5" >}}
[new Blocks]: {{< url path="Cortex.Blogs.Releases.2024.5.NewBlocks" version="2024.5" >}}
[Reduced Usage of Shared Fingerprint Generator Code]: {{< url path="Cortex.Blogs.Releases.2024.5.FingerprintGeneratorCode" version="2024.5" >}}
[Improved {{% ctx %}} Gateway]: {{< url path="Cortex.Blogs.Releases.2024.5.ImprovedCortexGateway" version="2024.5" >}}
[Helplinks Update When Upgrading the {{% ctx %}} Platform]: {{< url path="Cortex.Blogs.Releases.2024.5.HelplinksUpdate" version="2024.5" >}}
[Update styling of the setup wizard to be consistent with new themes]: {{< url path="Cortex.Blogs.Releases.2024.5.UpdateStyling" version="2024.5" >}}
[Improved Engine Exceptions]: {{< url path="Cortex.Blogs.Releases.2024.5.ImprovedEngineExceptions" version="2024.5" >}}
[Unselect All 'Use Latest Version' for a flow]: {{< url path="Cortex.Blogs.Releases.2024.5.UnselectAll" version="2024.5" >}}
[improved upgrade]: {{< url path="Cortex.Blogs.Releases.2024.5.ImprovedUpgrade" version="2024.5" >}}
[improved installation]: {{< url path="Cortex.Blogs.Releases.2024.5.ImprovedInstallation" version="2024.5" >}}
[Observability Upgrades]: {{< url path="Cortex.Blogs.Releases.2024.5.ObservabilityUpgrades" version="2024.5" >}}
[2024.5 Release Notes]: {{< url path="Cortex.Blogs.Releases.2024.5.MainDoc" version="2024.5" >}}

[Fast Track]: {{< url path="Cortex.Reference.Glossary.F-J.FastTrack" version="2024.3" >}}
[2024.3]: {{< url path="Cortex.Blogs.Releases.2024.3.MainDoc" version="2024.3" >}}
