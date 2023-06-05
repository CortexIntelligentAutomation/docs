---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} Innovation platform."
weight: 1
---

## Summary

{{% version %}} is the third release of the next generation of {{% ctx %}} and continues our journey to improve on the previous 7.X generation in the following areas:

* [Usability][]
* [Capability][]
* [Security][]
* [Documentation][]

## Improved Usability

This release introduces:

* [Improvements to the Interaction Portal][].

## Improved Capability

This release introduces:

* The following new services have been added to the [HA Platform][]:
  * [Configuration Management Service][]
  * [Data Storage Service][]
  * [Authorisation Service][]
* Six [new Blocks][New Blocks] have been added to the {{% ctx %}} Block Packages, adding new functionality to work with:
  * [Flows][]
  * [Tasks][]
  * [Telnet][]

## Improved Security

This release introduces:

* [OAuth2 authorisation for running flows in published packages][]. The [HA Platform][] can be configured to authenticate against a single Active Directory server, allowing authorised users to start a flow execution. Package Management within Gateway can be used to modify access control to any version of a package.

## Improved Documentation

This release introduces:

* [Product Portal][] changes, including:
  * Rebranding to follow We Are {{% ctx %}} branding guidelines
  * Documentation has been updated to reflect the [new and upcoming services][HA Platform]
  * Reference documentation has been added for the [new blocks][New Blocks]
  * Reference documentation to the existing [SSH data types][] has been improved

## Other Improvements

This release introduces a number of other improvements, such as:

* [Improvements to installation process of the HA Platform][]

For a full list of what has been introduced in this release, please see the [2023.5 Release Notes][]

[Usability]: {{< ref "#improved-usability" >}}
[Capability]: {{< ref "#improved-capability" >}}
[Security]: {{< ref "#improved-security" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[Improvements to the Interaction Portal]: {{< url path="Cortex.Blogs.Releases.2023.5.ImprovedInteractionPortal" version="2023.5" >}}
[HA Platform]: {{< url path="Cortex.Blogs.Releases.2023.5.ExpansionOfTheHAPlatform" version="2023.5" >}}
[Configuration Management Service]: {{< url path="Cortex.Blogs.Releases.2023.5.NewConfigurationManagementService" version="2023.5" >}}
[Data Storage Service]: {{< url path="Cortex.Blogs.Releases.2023.5.NewDataStorageService" version="2023.5" >}}
[Authorisation Service]: {{< url path="Cortex.Blogs.Releases.2023.5.NewAuthorisationService" version="2023.5" >}}
[New Blocks]: {{< url path="Cortex.Blogs.Releases.2023.5.NewBlocks" version="2023.5" >}}
[OAuth2 authorisation for running flows in published packages]: {{< url path="Cortex.Blogs.Releases.2023.5.IntroducedOAuth2Authorisation" version="2023.5" >}}
[Product Portal]: {{< url path="Cortex.Blogs.Releases.2023.5.ProductPortal" version="2023.5" >}}
[Improvements to installation process of the HA Platform]: {{< url path="Cortex.Blogs.Releases.2023.5.ImprovedInstallationProcess" version="2023.5" >}}
[2023.5 Release Notes]: {{< url path="Cortex.Blogs.Releases.2023.5.MainDoc" version="2023.5" >}}

[Flows]: {{< url path="Cortex.Reference.Blocks.Flows.MainDoc" version="2023.5" >}}
[Tasks]: {{< url path="Cortex.Reference.Blocks.Tasks.MainDoc" version="2023.5" >}}
[Telnet]: {{< url path="Cortex.Reference.Blocks.Telnet.MainDoc" version="2023.5" >}}

[SSH data types]: {{< url path="Cortex.Reference.DataTypes.Ssh.MainDoc" version="2023.5" >}}
