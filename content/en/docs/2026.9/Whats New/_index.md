---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2026.3 is the latest [Release][] of the next generation of {{% ctx %}} and improves on the [2025.9][] release in the following areas:

* [Capability][]
* [Security][]
* [Performance][]
* [Usability][]
* [Scalability][]
* [Observability][]
* [Third-Party Support][]
* [Installation][]
* [Upgrade][]
* [Documentation][]

## Improved Capability

This release introduces multiple new features to the {{% ctx %}} Platform:

* [Added ServiceDetails to ExecutionContext][Capability - Added ServiceDetails to ExecutionContext]
* [Added ability to configure block logging on each block][Capability - Added ability to configure block logging on each block]
* [Added new flow Settings dialog][Capability - Added new flow Settings dialog]
* [Improved handling of blank or null expression][Capability - Improved handling of blank or null expression]
* [Added LDAP Group Filtering for Role Claims][Capability - Added LDAP Group Filtering for Role Claims]
* [Added support for filtering and opening task by process id][Capability - Added support for filtering and opening task by process id]
* [Added support for assigning task to users and/or groups][Capability - Added support for assigning task to users and/or groups]
* [Enhanced the handling of untranslated SNMP v1 Traps][Capability - Enhanced the handling of untranslated SNMP v1 Traps]
* [Partial Translation for unrecognised SNMP varbinds][Capability - Partial Translation for unrecognised SNMP varbinds]
* [Attempt Translation of SNMP varbinds that do not end with .0][Capability - Attempt Translation of SNMP varbinds that do not end with .0]

## Improved Security

We tightened the security of the platform by:

* [Adding an Encryption Endpoint to {{% ctx %}} API Gateway Service][Security - Added Encryption Endpoint to {{% ctx %}} API Gateway Service]
* [Adding support for multiple encryption keys][Security - Added support for multiple encryption keys]
* [Adding the ability to encrypt values in the {{% ctx %}} Configuration Portal][Security - Added the ability to encrypt values in the {{% ctx %}} Configuration Portal]
* [Introducing Role‑Based Access Control for Containers in the {{% ctx %}} Configuration Portal][Security - Introduced Role‑Based Access Control for Containers in the {{% ctx %}} Configuration Portal]
* [Delivering general security enhancements][Security - General Security enhancements]
* [Adding robots.txt exclusions for {{% ctx %}} web applications][Security - Added robots.txt exclusions for {{% ctx %}} web applications]

## Improved Performance

The performance of the {{% ctx %}} Platform has been improved by:

* [Improving Execution Service concurrency and flow translation][Performance - Improved Execution Service concurrency and flow translation]
* [Limiting the batch size of ExecutionCompletionDetails sent to the Monitoring Service][Performance - Limit The batch size of ExecutionCompletionDetails sent to the Monitoring Service]
* [Improving handling of batch ExecutionCompletionDetails in the Monitoring Service][Performance - Improving handling of batch ExecutionCompletionDetails in the Monitoring Service]
* [Improving execution handling performance in the Provisioning Service][Performance - Improving execution handling performance in the Provisioning Service]

## Improved Usability

Usability has been improved with [support for implicit data type conversion in Flow input variables][Usability - Support for implicit data type conversion in Flow input variables] and by [making first-time debug execution start immediately][Usability - Making first-time debug execution start immediately].

## Improved Scalability

Scalability has been increased by [enhancing service lifecycle handling and RabbitMQ outage recovery][Scalability - Enhancing service lifecycle handling and RabbitMQ outage recovery].

## Improved Observability

Observability has been extended by:

* [Setting a retention period for Grafana Loki][Observability - Set Retention Period for Grafana Loki]
* [Enabling logs for failed login attempts to {{% ctx %}} Gateway][Observability - Enabling logs for failed login attempts to {{% ctx %}} Gateway]
* [Adding engine and blocks version display in the {{% ctx %}} Gateway package definitions grid][Observability - Adding engine and blocks version display in the {{% ctx %}} Gateway package definitions grid]
* [Adding a new Flow Execution Detail dashboard in Grafana][Observability - Adding a new Flow Execution Detail dashboard in Grafana]

## Improved Third-Party Support

Third-party support has been improved by:

* [updating NuGet packages][Third-Party Support - Updating NuGet Packages]
* [upgrading observability stack dependencies][Third-Party Support - Upgrading Observability Stack Dependencies]
* [updating the SNMP library to support new authentication protocols][Third-Party Support - Updating SNMP Library to Support New Authentication Protocols]

## Improved Installation

Installation has been improved by:

* [Improving node recovery for cluster machines][Installation - Improved Node Recovery for Cluster Machines]
* [Improving behaviour when disabling cluster nodes][Installation - Improved behaviour when disabling cluster nodes]
* [Adding UTF‑8 encoding support for non‑ANSI characters in configuration files][Installation - UTF‑8 encoding support for Non‑ANSI characters in configuration files]
* [Removing dependency on Active Directory cmdlets][Installation - Removal of dependency on Active Directory cmdlets]
* [Adding required types to LoggingSettings during upgrade][Installation - Added required types to LoggingSettings during upgrade]
* [Adding a new node maintenance script for pre-patching operations][Installation - Adding a new node maintenance script for pre-patching operations]
* [Removing Active Directory cmdlets dependency from Grafana Alloy installation][Installation - Removal of Active Directory cmdlets dependency from Grafana Alloy installation]

## Improved Upgrade

Upgrade has been improved by:

* [Adding backup and restore support for reliable collections during single-server upgrades][Upgrade - Backup & Restore Support for Reliable Collections during Single‑Server Upgrades]
* [Enhancing pre-upgrade health checks for Service Fabric and RabbitMQ][Upgrade - Enhanced pre‑upgrade health checks for Service Fabric and RabbitMQ]
* [Improving service management during reliable collections backup and restore][Upgrade - Improving service management during reliable collections backup and restore]
* [Improving Flow migration from CORTEX 7][Upgrade - Improving Flow migration from CORTEX 7]

## Improved Documentation

The documentation has been [expanded with broader Product Portal][Documentation - Expanded with broader Product Portal] coverage across authentication and authorisation, Gateway setup, Variable Editor usage, running execution changes, and MIB/SNMP Trap guidance in the Package Version Editor.

For a full list of what has been introduced in this release, please see the [2026.3 Release Notes][]

[Release]: {{< url path="Cortex.Reference.Glossary.P-T.Release" version="2026.3" >}}
[2025.9]: {{< url path="Cortex.Blogs.Releases.2025_9.MainDoc" version="2026.3" >}}

[Capability]: {{< ref "#improved-capability" >}}
[Security]: {{< ref "#improved-security" >}}
[Performance]: {{< ref "#improved-performance" >}}
[Usability]: {{< ref "#improved-usability" >}}
[Scalability]: {{< ref "#improved-scalability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Third-Party Support]: {{< ref "#improved-third-party-support" >}}
[Installation]: {{< ref "#improved-installation" >}}
[Upgrade]: {{< ref "#improved-upgrade" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[2026.3 Release Notes]: {{< url path="Cortex.Blogs.Releases.2026_3.MainDoc" version="2026.3" >}}

[Capability - Added ServiceDetails to ExecutionContext]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedServiceDetailsToExecutionContext" version="2026.3" >}}
[Capability - Added ability to configure block logging on each block]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedAbilityToConfigureBlockLoggingOnEachBlock" version="2026.3" >}}
[Capability - Added new flow Settings dialog]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedNewFlowSettingsDialog" version="2026.3" >}}
[Capability - Improved handling of blank or null expression]: {{< url path="Cortex.Blogs.Releases.2026_3.ImprovedHandlingOfBlankOrNullExpression" version="2026.3" >}}
[Capability - Added LDAP Group Filtering for Role Claims]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedLdapGroupFilteringForRoleClaims" version="2026.3" >}}
[Capability - Added support for filtering and opening task by process id]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedSupportForFilteringAndOpeningTaskByProcessId" version="2026.3" >}}
[Capability - Added support for assigning task to users and/or groups]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedSupportForAssigningTaskToUsersAndOrGroups" version="2026.3" >}}
[Capability - Enhanced the handling of untranslated SNMP v1 Traps]: {{< url path="Cortex.Blogs.Releases.2026_3.EnhancedTheHandlingOfUntranslatedSnmpV1Traps" version="2026.3" >}}
[Capability - Partial Translation for unrecognised SNMP varbinds]: {{< url path="Cortex.Blogs.Releases.2026_3.PartialTranslationForUnrecognisedSnmpVarbinds" version="2026.3" >}}
[Capability - Attempt Translation of SNMP varbinds that do not end with .0]: {{< url path="Cortex.Blogs.Releases.2026_3.AttemptTranslationOfSnmpVarbindsThatDoNotEndWith0" version="2026.3" >}}

[Security - Added Encryption Endpoint to {{% ctx %}} API Gateway Service]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedEncryptionEndpointToApiGatewayService" version="2026.3" >}}
[Security - Added support for multiple encryption keys]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedSupportForMultipleEncryptionKeys" version="2026.3" >}}
[Security - Added the ability to encrypt values in the {{% ctx %}} Configuration Portal]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedTheAbilityToEncryptValuesInTheConfigurationPortal" version="2026.3" >}}
[Security - Introduced Role‑Based Access Control for Containers in the {{% ctx %}} Configuration Portal]: {{< url path="Cortex.Blogs.Releases.2026_3.IntroducedRoleBasedAccessControlForContainersInTheConfigurationPortal" version="2026.3" >}}
[Security - General Security enhancements]: {{< url path="Cortex.Blogs.Releases.2026_3.GeneralSecurityEnhancements" version="2026.3" >}}
[Security - Added robots.txt exclusions for {{% ctx %}} web applications]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedRobotsTxtExclusionsForWebApplications" version="2026.3" >}}

[Performance - Improved Execution Service concurrency and flow translation]: {{< url path="Cortex.Blogs.Releases.2026_3.ImprovedExecutionServiceConcurrencyAndFlowTranslation" version="2026.3" >}}
[Performance - Limit The batch size of ExecutionCompletionDetails sent to the Monitoring Service]: {{< url path="Cortex.Blogs.Releases.2026_3.LimitTheBatchSizeOfExecutionCompletionDetailsSentToTheMonitoringService" version="2026.3" >}}
[Performance - Improving handling of batch ExecutionCompletionDetails in the Monitoring Service]: {{< url path="Cortex.Blogs.Releases.2026_3.ImprovingHandlingOfBatchExecutionCompletionDetailsInTheMonitoringService" version="2026.3" >}}
[Performance - Improving execution handling performance in the Provisioning Service]: {{< url path="Cortex.Blogs.Releases.2026_3.ImprovingExecutionHandlingPerformanceInTheProvisioningService" version="2026.3" >}}

[Usability - Support for implicit data type conversion in Flow input variables]: {{< url path="Cortex.Blogs.Releases.2026_3.SupportForImplicitDataTypeConversionInFlowInputVariables" version="2026.3" >}}
[Usability - Making first-time debug execution start immediately]: {{< url path="Cortex.Blogs.Releases.2026_3.MakingFirstTimeDebugExecutionStartImmediately" version="2026.3" >}}

[Scalability - Enhancing service lifecycle handling and RabbitMQ outage recovery]: {{< url path="Cortex.Blogs.Releases.2026_3.EnhancingServiceLifecycleHandlingAndRabbitMqOutageRecovery" version="2026.3" >}}

[Observability - Set Retention Period for Grafana Loki]: {{< url path="Cortex.Blogs.Releases.2026_3.SetRetentionPeriodForGrafanaLoki" version="2026.3" >}}
[Observability - Enabling logs for failed login attempts to {{% ctx %}} Gateway]: {{< url path="Cortex.Blogs.Releases.2026_3.EnablingLogsForFailedLoginAttemptsToGateway" version="2026.3" >}}
[Observability - Adding engine and blocks version display in the {{% ctx %}} Gateway package definitions grid]: {{< url path="Cortex.Blogs.Releases.2026_3.AddingEngineAndBlocksVersionDisplayInTheGatewayPackageDefinitionsGrid" version="2026.3" >}}
[Observability - Adding a new Flow Execution Detail dashboard in Grafana]: {{< url path="Cortex.Blogs.Releases.2026_3.AddingANewFlowExecutionDetailDashboardInGrafana" version="2026.3" >}}

[Third-Party Support - Updating NuGet Packages]: {{< url path="Cortex.Blogs.Releases.2026_3.UpdatingNuGetPackages" version="2026.3" >}}
[Third-Party Support - Upgrading Observability Stack Dependencies]: {{< url path="Cortex.Blogs.Releases.2026_3.UpgradingObservabilityStackDependencies" version="2026.3" >}}
[Third-Party Support - Updating SNMP Library to Support New Authentication Protocols]: {{< url path="Cortex.Blogs.Releases.2026_3.UpdatingSnmpLibraryToSupportNewAuthenticationProtocols" version="2026.3" >}}

[Installation - Improved Node Recovery for Cluster Machines]: {{< url path="Cortex.Blogs.Releases.2026_3.ImprovedNodeRecoveryForClusterMachines" version="2026.3" >}}
[Installation - Improved behaviour when disabling cluster nodes]: {{< url path="Cortex.Blogs.Releases.2026_3.ImprovedBehaviourWhenDisablingClusterNodes" version="2026.3" >}}
[Installation - UTF‑8 encoding support for Non‑ANSI characters in configuration files]: {{< url path="Cortex.Blogs.Releases.2026_3.Utf8EncodingSupportForNonAnsiCharactersInConfigurationFiles" version="2026.3" >}}
[Installation - Removal of dependency on Active Directory cmdlets]: {{< url path="Cortex.Blogs.Releases.2026_3.RemovalOfDependencyOnActiveDirectoryCmdlets" version="2026.3" >}}
[Installation - Added required types to LoggingSettings during upgrade]: {{< url path="Cortex.Blogs.Releases.2026_3.AddedRequiredTypesToLoggingSettingsDuringUpgrade" version="2026.3" >}}
[Installation - Adding a new node maintenance script for pre-patching operations]: {{< url path="Cortex.Blogs.Releases.2026_3.AddingANewNodeMaintenanceScriptForPrePatchingOperations" version="2026.3" >}}
[Installation - Removal of Active Directory cmdlets dependency from Grafana Alloy installation]: {{< url path="Cortex.Blogs.Releases.2026_3.RemovalOfActiveDirectoryCmdletsDependencyFromGrafanaAlloyInstallation" version="2026.3" >}}

[Upgrade - Backup & Restore Support for Reliable Collections during Single‑Server Upgrades]: {{< url path="Cortex.Blogs.Releases.2026_3.BackupAndRestoreSupportForReliableCollectionsDuringSingleServerUpgrades" version="2026.3" >}}
[Upgrade - Enhanced pre‑upgrade health checks for Service Fabric and RabbitMQ]: {{< url path="Cortex.Blogs.Releases.2026_3.EnhancedPreUpgradeHealthChecksForServiceFabricAndRabbitMq" version="2026.3" >}}
[Upgrade - Improving service management during reliable collections backup and restore]: {{< url path="Cortex.Blogs.Releases.2026_3.ImprovingServiceManagementDuringReliableCollectionsBackupAndRestore" version="2026.3" >}}
[Upgrade - Improving Flow migration from CORTEX 7]: {{< url path="Cortex.Blogs.Releases.2026_3.ImprovingFlowMigrationFromCortex7" version="2026.3" >}}

[Documentation - Expanded with broader Product Portal]: {{< url path="Cortex.Blogs.Releases.2026_3.ExpandedWithBroaderProductPortal" version="2026.3" >}}
