---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the Cortex Innovation platform."
weight: 1
---

## Summary

2023.3 is the second release of the next generation of Cortex and continues our journey to improve on the previous 7.X generation in the following areas:

- [Performance][]
- [Availability][]
- [Scalability][]
- [Usability][]
- [Capability][]
- [Documentation][]

## Improved Performance

This release introduces:

- A re-architected [HA Platform][], to improve performance and reduce the memory footprint of the Innovation Platform.
- The performance of debugging automation solutions has been improved due to time taken to perform both dependency and git status checks has been reduced.  
- The memory usage of debugging automation solutions that require input variables has been reduced, and garbage collection of memory that is no longer required has been improved.

## Improved Availability

This release includes a re-architected [HA Platform][], which provides:

- The ability to perform zero downtime upgrades
- The ability to host side by side execution of automation solutions

## Improved Scalability

This release includes a re-architected [HA Platform][], which provides:

- Manual scaling and on demand automated scaling
- Single click deployments and zero downtime upgrades
- Control of upgrading deployed automation solutions
- Multi-tenancy, including the ability to choose the level of separation of tenants based on your compliance and hardware constraints

## Improved Usability

This release introduces:

- Automatic Dependency Selection in Package Management
- Renaming of Variables to the Variables Grid
- Nine [New Blocks][] have been added to [Cortex Block Packages][Blocks], adding new functionality to work with [Queues][], and [encode][Encode Text] and [decode][Decode Text] text to various formats
- Improvements have been made to the [Execute Ssh Command][] block to improve its usability within flows

## Improved Capability

This release introduces:

- A new [Interaction Portal][] has been developed to replace LivePortal in Cortex Innovation Deployments
- CORS support has been added to the [API Gateway Service][Cortex API Gateway Service] to support single server deployments that include the new [Interaction Portal][]

## Improved Documentation

This release introduces:

- This [Product Portal][] has been updated to reflect the [re-architected HA Platform][HA Platform]
- [Tutorials][] have been added
- Multi-version support has been added to allow for easy navigation between different versions of Cortex

## Other Improvements

This release introduces a number of other improvements, such as:

- [Updated Third Party Components][], gaining any associated performance and memory improvements
- Simplified installation of the web application server
- A new [Welcome Page][] has added to [Cortex Gateway][Gateway]. It acts as a landing page when logging into [Cortex Gateway][Gateway] and provides the ability to quickly navigate to the last 20 recently edited flows for the signed-in user

For a full list of what has been introduced in this release, please see the [2023.3 Release Notes][]

[Performance]: {{< ref "#improved-performance" >}}
[Availability]: {{< ref "#improved-availability" >}}
[Scalability]: {{< ref "#improved-scalability" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Capability]: {{< ref "#improved-capability" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[Cortex API Gateway Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ApiGatewayService.MainDoc" version="2023.3" >}}

[Blocks]: {{< url path="Cortex.Reference.Blocks.MainDoc" version="2023.3" >}}
[Queues]: {{< url path="Cortex.Reference.Blocks.Queues.MainDoc" version="2023.3" >}}
[Decode Text]: {{< url path="Cortex.Reference.Blocks.Text.DecodeText.DecodeText.MainDoc" version="2023.3" >}}
[Encode Text]: {{< url path="Cortex.Reference.Blocks.Text.EncodeText.EncodeText.MainDoc" version="2023.3" >}}
[Execute Ssh Command]: {{< url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommand.MainDoc" version="2023.3" >}}

[2023.3 Release Notes]: {{< url path="Cortex.Blogs.Releases.2023.3.MainDoc" >}}
[HA Platform]: {{< url path="Cortex.Blogs.Releases.2023.3.RearchitectedtheHAPlatform" >}}
[New Blocks]: {{< url path="Cortex.Blogs.Releases.2023.3.NewBlocks" >}}
[Interaction Portal]: {{< url path="Cortex.Blogs.Releases.2023.3.NewInteractionPortal" >}}
[Updated Third Party Components]: {{< url path="Cortex.Blogs.Releases.2023.3.UpdatedThirdPartyComponents" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2023.3.ProductPortal" >}}

[Tutorials]: {{< url path="Cortex.Tutorials.MainDoc" >}}
