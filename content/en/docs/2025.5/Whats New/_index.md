---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2025.5 is the third [Fast Track][] of the next generation of {{% ctx %}} and improves on the [2025.3][] release in the following areas:

* [Capability][]
* [Observability][]
* [Security][]
* [Usability][]
* [Upgrade][]
* [Documentation][]

## Improved Capability

This release introduces the following new feature to the {{% ctx %}} platform:

* The [_executionContext has been extended with additional properties][Extended the _executionContext with additional properties] as follows:
  * Tenant
  * System
  * PackageName
  * PackageVersion
  * FlowName
  * ExecutionId
  * Node
* The [{{% ctx %}} Interaction Portal now supports the use of separate credentials for querying Active Directory Groups][Added support for the {{% ctx %}} Interaction Portal to provide separate credentials for querying AD Groups].

## Improved Observability

Observability has been improved by:

* [including child executions in the executions data][Executions data includes child executions] used by the Running Executions tile on the Operations Overview page and Running Executions grid on the Packages page.
* adding [new columns to the Running Executions grid on the Packages page][] as follows:
  * `Execution Id`
  * `Parent Execution Id`
  * `Root Execution Id`
  * `Executing On`

## Improved Security

The Security of {{% ctx %}} has been tightened by:

* [introducing a Code Analyser to the {{% ctx %}} Execution Service][Introduced Code Analyser to the {{% ctx %}} Execution Service] that restricts what C# code can be executed from flows within {{% ctx %}}.
* [updating Erlang version][Updated Erlang version] to address recently identified vulnerabilities.
* [improving security of {{% ctx %}} Gateway][General security enhancements on {{% ctx %}} Gateway].

## Improved Usability

Usability has been enhanced by [updating Decision Blocks icons][Updated Decision Blocks icons].

## Improved Upgrade

Upgrade has been modified to:

* [improve certificate update script for High Availability (HA) installations][Improved certificate update script for High Availability (HA) installations].
* [scoped restart for the {{% ctx %}} Gateway web application][Scoped restart for the {{% ctx %}} Gateway web application].

## Improved Documentation

The documentation includes the following updates:

* [added new User Guides][Added new User Guides] and [Tutorials][Added new Tutorials]:
  * Flow Editor
  * Operations Overview
  * Studio Authorisation
  * Studio Hierarchy
  * Studio Import
  * Studio Export
  * License Consumption
* [added Installation Checklists to the Install instructions][Added Installation Checklists to the Install instructions].
* [added Disaster Recovery Guides][Added Disaster Recovery Guides].

For a full list of what has been introduced in this release, please see the [2025.5 Release Notes][]

[Fast Track]: {{< url path="Cortex.Reference.Glossary.F-J.FastTrack" version="2025.5" >}}
[2025.3]: {{< url path="Cortex.Blogs.Releases.2025.3.MainDoc" version="2025.5" >}}

[Capability]: {{< ref "#improved-capability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Security]: {{< ref "#improved-security" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Upgrade]: {{< ref "#improved-upgrade" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[2025.5 Release Notes]: {{< url path="Cortex.Blogs.Releases.2025.5.MainDoc" version="2025.5" >}}

[Extended the _executionContext with additional properties]: {{< url path="Cortex.Blogs.Releases.2025.5.ExtendedTheExecutionContextWithAdditionalProperties" version="2025.5" >}}
[Added support for the {{% ctx %}} Interaction Portal to provide separate credentials for querying AD Groups]: {{< url path="Cortex.Blogs.Releases.2025.5.AddedSupportForTheCortexInteractionPortalToProvideSeparateCredentialsForQueryingAdGroups" version="2025.5" >}}
[Executions data includes child executions]: {{< url path="Cortex.Blogs.Releases.2025.5.ExecutionsDataIncludesChildExecutions" version="2025.5" >}}
[new columns to the Running Executions grid on the Packages page]: {{< url path="Cortex.Blogs.Releases.2025.5.NewColumnsToTheRunningExecutionsGridOnThePackagesPage" version="2025.5" >}}
[Introduced Code Analyser to the {{% ctx %}} Execution Service]: {{< url path="Cortex.Blogs.Releases.2025.5.IntroducedCodeAnalyserToTheCortexExecutionService" version="2025.5" >}}
[Updated Erlang version]: {{< url path="Cortex.Blogs.Releases.2025.5.UpdatedErlangVersion" version="2025.5" >}}
[General security enhancements on {{% ctx %}} Gateway]: {{< url path="Cortex.Blogs.Releases.2025.5.GeneralSecurityEnhancementsOnCortexGateway" version="2025.5" >}}
[Updated Decision Blocks icons]: {{< url path="Cortex.Blogs.Releases.2025.5.UpdatedDecisionBlocksIcons" version="2025.5" >}}
[Improved certificate update script for High Availability (HA) installations]: {{< url path="Cortex.Blogs.Releases.2025.5.ImprovedCertificateUpdateScriptForHighAvailabilityInstallations" version="2025.5" >}}
[Scoped restart for the {{% ctx %}} Gateway web application]: {{< url path="Cortex.Blogs.Releases.2025.5.ScopedRestartForTheCortexGatewayWebApplication" version="2025.5" >}}
[Added new User Guides]: {{< url path="Cortex.Blogs.Releases.2025.5.AddedNewUserGuides" version="2025.5" >}}
[Added new Tutorials]: {{< url path="Cortex.Blogs.Releases.2025.5.AddedNewTutorials" version="2025.5" >}}
[Added Installation Checklists to the Install instructions]: {{< url path="Cortex.Blogs.Releases.2025.5.AddedInstallationChecklistsToTheInstallInstructions" version="2025.5" >}}
[Added Disaster Recovery Guides]: {{< url path="Cortex.Blogs.Releases.2025.5.AddedDisasterRecoveryGuides" version="2025.5" >}}
