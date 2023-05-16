---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the CORTEX Innovation platform."
weight: 1
---

## Summary

2022.9 is the first release of the next generation of CORTEX and begins our journey to improve on the previous 7.X generation starting with the following areas:

- [Performance][]
- [Availability][]
- [Usability][]
- [Security][]
- [Observability][]

## Improved Performance

This release introduces a [new engine][] to execute automation solutions, and has shown [significant performance improvements][] compared to 7.X, both in our own observations and customers installations. For example, one customer solution that has been migrated to 2022.9 has shown the time taken to run their tests reduce from 210 minutes to 10 minutes.

## Improved Availability

This release introduces a new [high availability (HA) architecture][], which provides:

- Elimination of single points of failure resulting in reduced downtime
- The ability to perform zero downtime upgrades
- Increased processing capacity resulting in increased throughput

## Improved Usability

This release introduces:

- A quicker, [simplified installation process][]
- A new [Package Management][] system that improves the speed and ease of deploying automation solutions into production
- [180+ new blocks][] to provide equivalent capability with the most used blocks within 7.X.
- A [new Property Editor][] for configuring [blocks][block], allowing for quicker configuration and better ease of use.
- [Messages][] which reports issues identified with a flow before it is executed
- A new online [Product Portal][] that contains materials regarding the release and how to use the product
- Integration of [{{< ctx >}} Studio][CORTEX Studio] with the [Product Portal][]

## Improved Security

This release introduces the concept of [Encryptable and Encrypted text][], allowing for blocks to identify and interact with sensitive data that should/must be encrypted at rest and during data transfer.

## Improved Observability

This release introduces:

- [Structured logging][] providing a defined JSON format for logs produced by the Innovation Platform
- [Dashboards][] providing observability of the Innovation Platform in Production; these use [structured logs][Structured logging] as their source

## Other Improvements

This release introduces a number of other improvements, such as:

- [Flow Contracts][] which allow a flow to declare any [Input Variables][] required to run the flow, and what [Output Variables][] will be returned by the flow
- [Debugging with Input Variables][] which allow [flow developers][] to provide required [Input Variables][] when debugging a flow
- [Versioned APIs][] which allow our APIs to evolve in future releases without breaking existing automation solutions

For a full list of what has been introduced in this release, please see the [2022.9 Release Notes][]

[Performance]: {{< ref "#improved-performance" >}}
[Availability]: {{< ref "#improved-availability" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Security]: {{< ref "#improved-security" >}}
[Observability]: {{< ref "#improved-observability" >}}

[2022.9 Release Notes]: {{< url path="Cortex.Blogs.Releases.2022.9.MainDoc" >}}
[new engine]: {{< url path="Cortex.Blogs.Releases.2022.9.NewEngine" >}}
[significant performance improvements]: {{< url path="Cortex.Blogs.Releases.2022.9.ImprovedPerformance" >}}
[high availability (HA) architecture]: {{< url path="Cortex.Blogs.Releases.2022.9.HAArchitecture" >}}
[simplified installation process]: {{< url path="Cortex.Blogs.Releases.2022.9.SimplifiedInstallation" >}}
[Package Management]: {{< url path="Cortex.Blogs.Releases.2022.9.PackageManagement" >}}
[180+ new blocks]: {{< url path="Cortex.Blogs.Releases.2022.9.180NewBlocks" >}}
[new Property Editor]: {{< url path="Cortex.Blogs.Releases.2022.9.NewPropertyEditor" >}}
[Messages]: {{< url path="Cortex.Blogs.Releases.2022.9.Messages" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2022.9.ProductPortal" >}}
[Encryptable and Encrypted text]: {{< url path="Cortex.Blogs.Releases.2022.9.EncryptableAndEncryptedText" >}}
[Structured logging]: {{< url path="Cortex.Blogs.Releases.2022.9.StructuredLogging" >}}
[Dashboards]: {{< url path="Cortex.Blogs.Releases.2022.9.GrafanaDashboards" >}}
[Flow Contracts]: {{< url path="Cortex.Blogs.Releases.2022.9.FlowContract" >}}
[Debugging with Input Variables]: {{< url path="Cortex.Blogs.Releases.2022.9.DebugWithInputVariables" >}}
[Versioned APIs]: {{< url path="Cortex.Blogs.Releases.2022.9.VersionedAPIs" >}}

[block]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Input Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Output Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.OutputVariablesStructure" >}}

[CORTEX Studio]: {{< url path="Cortex.Guides.Studio.MainDoc" >}}

[flow developers]: {{< url path="Cortex.Reference.Glossary.F-J.FlowDeveloper" >}}
