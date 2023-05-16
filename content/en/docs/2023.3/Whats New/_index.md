---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the CORTEX Innovation platform."
weight: 1
---

## Summary

2023.3 is the second release of the next generation of {{< ctx >}} and continues our journey to improve on the previous 7.X generation in the following areas:

- [Performance][]
- [Availability][]
- [Scalability][]
- [Usability][]
- [Capability][]
- [Documentation][]

## Improved Performance

This release introduces:

- A [re-architected HA Platform][], to improve performance and to reduce the memory footprint of the Innovation Platform
- Other [performance improvements][]

## Improved Availability

This release includes a [re-architected HA Platform][], which provides:

- The ability to perform zero downtime upgrades
- The ability to host side-by-side execution of automation solutions

## Improved Scalability

This release includes a [re-architected HA Platform][], which lays the foundations for future releases to provide:

- Manual and on-demand automated scaling
- Single click deployments and zero downtime upgrades
- Control of what deployed automation solutions are upgraded and when
- Multi-tenancy, including the ability to choose the level of separation of tenants based on your compliance and hardware constraints

## Improved Usability

This release introduces:

- [Automatic dependency selection in Package Management][]
- [Renaming of variables to the Variables Grid][]

## Improved Capability

This release introduces:

- A new web application called [Interaction Portal][] - to support [Human-in-the-Loop][] automation in {{< ctx >}} Innovation deployments
- [CORS][] support for the [API Gateway Service][CORTEX API Gateway Service] - required by single server deployments that use the new [Interaction Portal][]
- Nine [new Blocks][New Blocks] - adding new functionality to work with [Queues][], and [encode][Encode Text] and [decode][Decode Text] text to various formats
- Improvements to the [Execute Ssh Command][] block - to support paged responses

## Improved Documentation

This release introduces:

- [Product Portal][] updates - to reflect the [re-architected HA Platform][]
- [Tutorials][]
- Multi-version support - to allow for easy switching between documentation for different versions of Cortex

## Other Improvements

This release introduces a number of other improvements, such as:

- [Updated Third Party Components][] - gaining any associated performance and memory improvements
- [Simplified installation of the web application server][]
- A new [Welcome Page][] - acting as a landing page when signing in and providing the ability to quickly navigate to recently edited flows for the signed-in user

For a full list of what has been introduced in this release, please see the [2023.3 Release Notes][]

[Performance]: {{< ref "#improved-performance" >}}
[Availability]: {{< ref "#improved-availability" >}}
[Scalability]: {{< ref "#improved-scalability" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Capability]: {{< ref "#improved-capability" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[CORTEX API Gateway Service]: {{< url path="Cortex.Guides.CortexInnovation.CoreApplication.Services.ApiGatewayService.MainDoc" version="2023.3" >}}

[Queues]: {{< url path="Cortex.Reference.Blocks.Queues.MainDoc" version="2023.3" >}}
[Decode Text]: {{< url path="Cortex.Reference.Blocks.Text.DecodeText.DecodeText.MainDoc" version="2023.3" >}}
[Encode Text]: {{< url path="Cortex.Reference.Blocks.Text.EncodeText.EncodeText.MainDoc" version="2023.3" >}}
[Execute Ssh Command]: {{< url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommand.MainDoc" version="2023.3" >}}

[2023.3 Release Notes]: {{< url path="Cortex.Blogs.Releases.2023.3.MainDoc" >}}
[re-architected HA Platform]: {{< url path="Cortex.Blogs.Releases.2023.3.RearchitectedtheHAPlatform" >}}
[New Blocks]: {{< url path="Cortex.Blogs.Releases.2023.3.NewBlocks" >}}
[Interaction Portal]: {{< url path="Cortex.Blogs.Releases.2023.3.NewInteractionPortal" >}}
[Updated Third Party Components]: {{< url path="Cortex.Blogs.Releases.2023.3.UpdatedThirdPartyComponents" >}}
[Welcome Page]: {{< url path="Cortex.Blogs.Releases.2023.3.NewWelcomePage" >}}
[performance improvements]: {{< url path="Cortex.Blogs.Releases.2023.3.ImprovementsToPerformance" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2023.3.ProductPortal" >}}
[Simplified installation of the web application server]: {{< url path="Cortex.Blogs.Releases.2023.3.SimplifiedInstallation" >}}
[Automatic dependency selection in Package Management]: {{< url path="Cortex.Blogs.Releases.2023.3.AddedAutomaticDependencySelection" >}}
[Renaming of variables to the Variables Grid]: {{< url path="Cortex.Blogs.Releases.2023.3.AddedRenamingOfVariables" >}}

[Tutorials]: {{< url path="Cortex.Tutorials.MainDoc" >}}

[CORS]: {{< url path="Cortex.Reference.Glossary.A-E.CORS" version="2023.3" >}}
[Human-in-the-Loop]: {{< url path="Cortex.Reference.Glossary.F-J.HumanInTheLoop" version="2023.3" >}}
