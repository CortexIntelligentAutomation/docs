---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2024.1 is the first [Release][] of the next generation of {{% ctx %}} and continues our journey to improve on the previous 7.X generation in the following areas:

* [Capability][]
* [Security][]
* [Observability][]
* [Documentation][]

## Removed Dependency on SQL Server

* Dependency on SQL Server has been [removed][] from {{% ctx %}} Gateway

## Improved Capability

* A number of [blocks have been improved][Improved Blocks] in the following areas:
  * [Text][] - Allowing for searching for values within text, using a number of methods e.g. Literal Text, Pattern Matching, and Regex, and then either replacing or removing the found text

## Improved Security

* The [installation process has been improved][improved installation] in a number of ways:
  * Making the load balancer more secure
  * Including SANs in auto-generated self-signed certificates
  * Replacing hard coded drive paths with environment variables
* Various 3rd party client libraries within {{% ctx %}} Gateway have been [upgraded][]

## Improved Observability

* Logging has been expanded within the HA Platform, all services have had [improved logging introduced][] for messages and events they receive
* Logging has been added to the Execution Service to [log all flows and any called flows][], including input variables, output variables, and whether the flow had finished successfully or threw an unhandled exception
* Logging within all services can now be [configured][] at the platform level
* The maximum number and size of log files produced within the {{% ctx %}} Platform has been [reduced][]

## Improved Documentation

* [Product Portal][] changes, including:
  * Reference documentation has been updated for the [improved blocks][Improved Blocks]
  * Getting Started documentation has been updated to reflect the [improved installation][] and the [removal of SQL Server][removed]

For a full list of what has been introduced in this release, please see the [2024.1 Release Notes][]

[Capability]: {{< ref "#improved-capability" >}}
[Security]: {{< ref "#improved-security" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[improved logging introduced]: {{< url path="Cortex.Blogs.Releases.2024.1.ImprovedLogging" version="2024.1" >}}
[log all flows and any called flows]: {{< url path="Cortex.Blogs.Releases.2024.1.ImprovedLogging" version="2024.1" >}}
[configured]: {{< url path="Cortex.Blogs.Releases.2024.1.ConfigurableLogging" version="2024.1" >}}
[reduced]: {{< url path="Cortex.Blogs.Releases.2024.1.ReducedLogging" version="2024.1" >}}
[removed]: {{< url path="Cortex.Blogs.Releases.2024.1.RemovedSqlServer" version="2024.1" >}}
[Improved Blocks]: {{< url path="Cortex.Blogs.Releases.2024.1.ImprovedBlocks" version="2024.1" >}}
[improved installation]: {{< url path="Cortex.Blogs.Releases.2024.1.ImprovedInstallation" version="2024.1" >}}
[upgraded]: {{< url path="Cortex.Blogs.Releases.2024.1.3rdParty" version="2024.1" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2024.1.ProductPortal" version="2024.1" >}}
[2024.1 Release Notes]: {{< url path="Cortex.Blogs.Releases.2024.1.MainDoc" version="2024.1" >}}

[Text]: {{< url path="Cortex.Reference.Blocks.Text.MainDoc" version="2024.1" >}}
[Release]: {{< url path="Cortex.Reference.Glossary.P-T.Release" version="2024.1" >}}
