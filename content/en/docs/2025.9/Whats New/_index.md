---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2025.9 is the fourth [Release][] of the next generation of {{% ctx %}} and improves on the [2025.7][] release in the following areas:

* [Capability][]
* [Security][]
* [Performance][]
* [Scalability][]
* [Observability][]
* [Installation][]
* [Upgrade][]
* [Documentation][]

## Improved Capability

This release introduces multiple new features to the {{% ctx %}} Platform:

* [Added multi‑factor authentication (MFA) via OpenID Connect on {{% ctx %}} Gateway][Capability - Added multi‑factor authentication (MFA) via OpenID Connect on {{% ctx %}} Gateway]
* [Enabled debugging of production flows][Capability - Enabled debugging of production flows]
* [Added 'quick add' blocks to the Flow Editor][Capability - Added 'quick add' blocks to the Flow Editor]
* [Extended Licence Fingerprint Generator][Capability - Extended Licence Fingerprint Generator]

## Improved Security

We tightened the security of the platform by:

* [Adding Authentication Management to {{% ctx %}} API Gateway Service][Security - Added Authentication Management to {{% ctx %}} API Gateway Service]
* [Enabling single‑use refresh tokens][Security - Enabled single‑use refresh tokens (configurable)]
* [Hardening Configuration Portal with security headers][Security - Hardened Configuration Portal with security headers]

## Improved Performance

The performance of the {{% ctx %}} Platform has been improved by:

* [Optimising Execution Management Service event batching][Performance - Optimised Execution Management Service event batching]
* [Improving Execution Service concurrency and flow translation][Performance - Improved Execution Service concurrency and flow translation]

## Improved Scalability

Scalability has been improved by [enhancing Service Fabric resilience to RabbitMQ node outages][Scalability - Enhanced Service Fabric resilience to RabbitMQ node outages].

## Improved Observability

Observability has been extended by:

* [Expanding block logging][Observability - Expanded block logging]
* [Making Block logs queryable in Grafana][Observability - Made Block logs queryable in Grafana]

## Improved Installation

Installation has been [improved for generation of OpenSSL certificates][Installation - Improved OpenSSL certificate generation].

## Improved Upgrade

Upgrade has been improved to prevent ConfigPackage mismatches when [CertificateSettings for Service Fabric services][Upgrade - Changed location of CertificateSettings for Service Fabric services] have been modified.

## Improved Documentation

The documentation includes the following updates:

* [Added Configuration Portal installation guide][Documentation - Added Configuration Portal installation guide]
* [Updated {{% ctx %}} Installation Guide for new Fingerprint output][Documentation - Updated {{% ctx %}} Installation Guide for new Fingerprint output]
* [Added Upgrade Observability documentation to latest version][Documentation - Added Upgrade Observability documentation to latest version]
* [Updated tutorials][Documentation - Updated tutorials]

For a full list of what has been introduced in this release, please see the [2025.9 Release Notes][]

[Release]: {{< url path="Cortex.Reference.Glossary.P-T.Release" version="2025.9" >}}
[2025.7]: {{< url path="Cortex.Blogs.Releases.2025.9.MainDoc" version="2025.9" >}}

[Capability]: {{< ref "#improved-capability" >}}
[Security]: {{< ref "#improved-security" >}}
[Performance]: {{< ref "#improved-performance" >}}
[Scalability]: {{< ref "#improved-scalability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Installation]: {{< ref "#improved-installation" >}}
[Upgrade]: {{< ref "#improved-upgrade" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[2025.9 Release Notes]: {{< url path="Cortex.Blogs.Releases.2025.9.MainDoc" version="2025.9" >}}

[Capability - Added multi‑factor authentication (MFA) via OpenID Connect on {{% ctx %}} Gateway]: {{< url path="Cortex.Blogs.Releases.2025.9.AddedMultiFactorAuthenticationViaOpenIdConnectOnGateway" version="2025.9" >}}
[Capability - Enabled debugging of production flows]: {{< url path="Cortex.Blogs.Releases.2025.9.EnabledDebuggingOfProductionFlows" version="2025.9" >}}
[Capability - Added 'quick add' blocks to the Flow Editor]: {{< url path="Cortex.Blogs.Releases.2025.9.AddedQuickAddBlocksToTheFlowEditor" version="2025.9" >}}
[Capability - Extended Licence Fingerprint Generator]: {{< url path="Cortex.Blogs.Releases.2025.9.ExtendedLicenceFingerprintGenerator" version="2025.9" >}}

[Security - Added Authentication Management to {{% ctx %}} API Gateway Service]: {{< url path="Cortex.Blogs.Releases.2025.9.AddedAuthenticationManagementToApiGatewayService" version="2025.9" >}}
[Security - Enabled single‑use refresh tokens (configurable)]: {{< url path="Cortex.Blogs.Releases.2025.9.EnabledSingleUseRefreshTokensConfigurable" version="2025.9" >}}
[Security - Hardened Configuration Portal with security headers]: {{< url path="Cortex.Blogs.Releases.2025.9.HardenedConfigurationPortalWithSecurityHeaders" version="2025.9" >}}

[Performance - Optimised Execution Management Service event batching]: {{< url path="Cortex.Blogs.Releases.2025.9.OptimisedExecutionManagementServiceEventBatching" version="2025.9" >}}
[Performance - Improved Execution Service concurrency and flow translation]: {{< url path="Cortex.Blogs.Releases.2025.9.ImprovedExecutionServiceConcurrencyAndFlowTranslation" version="2025.9" >}}
[Scalability - Enhanced Service Fabric resilience to RabbitMQ node outages]: {{< url path="Cortex.Blogs.Releases.2025.9.EnhancedServiceFabricResilienceToRabbitMqNodeOutages" version="2025.9" >}}

[Observability - Expanded block logging]: {{< url path="Cortex.Blogs.Releases.2025.9.ExpandedBlockLogging" version="2025.9" >}}
[Observability - Made Block logs queryable in Grafana]: {{< url path="Cortex.Blogs.Releases.2025.9.MadeBlockLogsQueryableInGrafana" version="2025.9" >}}

[Installation - Improved OpenSSL certificate generation]: {{< url path="Cortex.Blogs.Releases.2025.9.ImprovedOpenSslCertificateGeneration" version="2025.9" >}}

[Upgrade - Changed location of CertificateSettings for Service Fabric services]: {{< url path="Cortex.Blogs.Releases.2025.9.ChangedLocationOfCertificateSettingsForServiceFabricServices" version="2025.9" >}}

[Documentation - Added Configuration Portal installation guide]: {{< url path="Cortex.Blogs.Releases.2025.9.AddedConfigurationPortalInstallationGuide" version="2025.9" >}}
[Documentation - Updated {{% ctx %}} Installation Guide for new Fingerprint output]: {{< url path="Cortex.Blogs.Releases.2025.9.UpdatedInstallationGuideForNewFingerprintOutput" version="2025.9" >}}
[Documentation - Added Upgrade Observability documentation to latest version]: {{< url path="Cortex.Blogs.Releases.2025.9.AddedUpgradeObservabilityDocumentationToLatestVersion" version="2025.9" >}}
[Documentation - Updated tutorials]: {{< url path="Cortex.Blogs.Releases.2025.9.UpdatedTutorials" version="2025.9" >}}
