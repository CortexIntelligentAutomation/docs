---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} Innovation platform."
weight: 1
---

## Summary

2023.11 is the sixth [Fast Track][] release of the next generation of {{% ctx %}} and continues our journey to improve on the previous 7.X generation in the following areas:

* [Capability][]
* [Security][]
* [Documentation][]

## Improved Capability

This release introduces:

* The [Triggers][Triggers Service SnmpV3] service has been has been expanded to allow the triggering executions of flows within the {{% ctx %}} Innovation platform when specific SNMPV3 Traps are received
* A number of services have had [improved logging introduced][]
* Dependency on SQL Server has been removed for a number of components within th {{% ctx %}} Innovation Platform
* Two [new Blocks][New Blocks] have been added, introducing new functionality to work with:
  * [Text][] - Allowing for searching for values within text, using a number of methods e.g. Contains, Pattern Matching, and Regex
* [Support for Oracle Data Connections has been added for the Execute Data Command Block][Support for Oracle Data Connections]

## Improved Security

This release introduces:

* [Encrypted Headers are Supported in the Execute HTTP Request Block][]
* [The installation process of the {{% ctx %}} Innovation Platform has been improved][improved installation]

## Improved Documentation

This release introduces:

* [Product Portal][] changes, including:
  * Reference documentation has been added for the [new blocks][New Blocks]
  * Reference documentation has been added for [Oracle Data Connection support][Support for Oracle Data Connections]
  * Reference documentation has been added for [encrypted headers in the Execute HTTP Request block][Encrypted Headers are Supported in the Execute HTTP Request Block]
  * Documentation has been updated to reflect the [improved installation][]

## Other Improvements

This release additionally introduces:

* [CORTEX Gateway Rebranding][]

For a full list of what has been introduced in this release, please see the [2023.11 Release Notes][]

[Capability]: {{< ref "#improved-capability" >}}
[Security]: {{< ref "#improved-security" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[Triggers Service SnmpV3]: {{< url path="Cortex.Blogs.Releases.2023.11.TriggersServiceSnmpV3" version="2023.11" >}}
[improved logging introduced]: {{< url path="Cortex.Blogs.Releases.2023.11.ImprovedLogging" version="2023.11" >}}
[New Blocks]: {{< url path="Cortex.Blogs.Releases.2023.11.NewBlocks" version="2023.11" >}}
[Support for Oracle Data Connections]: {{< url path="Cortex.Blogs.Releases.2023.11.OracleSupport" version="2023.11" >}}
[Encrypted Headers are Supported in the Execute HTTP Request Block]: {{< url path="Cortex.Blogs.Releases.2023.11.EncryptedHeaders" version="2023.11" >}}
[improved installation]: {{< url path="Cortex.Blogs.Releases.2023.11.ImprovedInstallation" version="2023.11" >}}
[CORTEX Gateway Rebranding]: {{< url path="Cortex.Blogs.Releases.2023.11.CORTEXGatewayRebranding" version="2023.11" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2023.11.ProductPortal" version="2023.11" >}}
[2023.11 Release Notes]: {{< url path="Cortex.Blogs.Releases.2023.11.MainDoc" version="2023.11" >}}

[Text]: {{< url path="Cortex.Reference.Blocks.Text.MainDoc" version="2023.11" >}}
[Fast Track]: {{< url path="Cortex.Reference.Glossary.F-J.FastTrack" >}}
