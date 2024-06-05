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
* [Cost of ownership][]
* [Documentation][]

## Improved Usability

* [Improvements have been made to {{% ctx %}} Gateway][Improved {{% ctx %}} Gateway], including:
  * [Helplinks Update When Upgrading the {{% ctx %}} Platform][]
  * [Update Styling of the Setup Wizard to be Consistent with Improved Design][]
* [Improvements have been made to exceptions raised by the engine][Improved Engine Exceptions] for improved clarity and helpfulness
* [Scope has been extended][Extended Scope Support] to support further levels of segregation, the levels within scope are hierarchical, affecting several blocks and services within the {{% ctx %}} platform
* The [installation process of the {{% ctx %}} Platform has been improved][improved installation] and has been updated preserve information required for future upgrades of the installed platform
* The [upgrade process of the {{% ctx %}} Platform has been improved][improved upgrade] and now provides more useful feedback when running

## Improved Capability

* This release shows improvements to [platform visibility][Platform Visibility] in a number of areas:
  * Enhancements to the Package Management page now allow for [real-time stopping of running executions][Running Executions can be Stopped in Real-Time]
  * allows users to quickly [unselect all flows except for a selected one][Unselect All 'Use Latest Version' for a flow] when creating a new version of an existing package.
* Two [new blocks have been added][new Blocks] within the [{{% ctx %}} Block Packages][Blocks], improving functionality to work with:
  * [Wireless][] - Allowing for the control and movement of tokens within a flow

## Improved Observability

* The following [components within the Observability platform have been updated][Observability Upgrades] to the latest major version:
  * Grafana
  * Loki
  * Promtail

## Cost of Ownership

* The [{{% ctx %}} Licence Fingerprint Generator has been updated][Improved Fingerprint Generator] to reduce its usage within the {{% ctx %}} platform and improve the installation process

## Improved Documentation

This [Product Portal][] includes updates related to:

* The [new blocks][New Blocks] and data types
* [Exceptions][] and [Data Types][] that were marked as Work In Progress
* The [improved installation][]
* The [improved upgrade][]

For a full list of what has been introduced in this release, please see the [2024.3 Release Notes][]

[Usability]: {{< ref "#improved-usability" >}}
[Capability]: {{< ref "#improved-capability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Cost of Ownership]: {{< ref "#cost-of-ownership" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[improved installation]: {{< url path="Cortex.Blogs.Releases.2024.3.ImprovedInstallation" version="2024.3" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2024.3.ProductPortal" version="2024.3" >}}
[2024.3 Release Notes]: {{< url path="Cortex.Blogs.Releases.2024.3.MainDoc" version="2024.3" >}}

[Data Types]: {{< url path="Cortex.Reference.DataTypes.MainDoc" version="2024.3" >}}
[Exceptions]: {{< url path="Cortex.Reference.Exceptions.MainDoc" version="2024.3" >}}

[Fast Track]: {{< url path="Cortex.Reference.Glossary.F-J.FastTrack" version="2024.3" >}}
[2024.1]: {{< url path="Cortex.Blogs.Releases.2024.1.MainDoc" version="2024.3" >}}
