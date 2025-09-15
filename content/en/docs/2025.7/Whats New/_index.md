---
title: "What's New?"
linkTitle: "What's New?"
description: "Discover what's new in the {{% ctx %}} platform."
weight: 1
---

## Summary

2025.7 is the next [Fast Track][] release of {{% ctx %}} and improves on the [2025.5][] release in the following areas:

* [Capability][]
* [Performance][]
* [Observability][]
* [Documentation][]

## Improved Capability

This release introduces multiple new features to the {{% ctx %}} Platform:

* The [{{% ctx %}} Triggers Service now supports SNMP MIB loading and OID translation][Capability - Support for SNMP MIB loading and OID translation].
* The [SNMP Trap Details now includes the ReceivedAt field][Capability - Added ReceivedAt property to SNMP Trap Details].
* The [Execute SSH Command Block][] now has support for:
  * [non-printable characters][Capability - Added support for non-printable characters in Execute SSH Command Block]
  * [response grace period][Capability - Added support for response grace period in Execute SSH Command Block]
* The [Log Event Block now supports custom log path][Capability - Added support for custom log path on Log Event blocks].
* The [Running Executions grid now allows stopping multiple running executions][Capability - Added support for stopping multiple running executions].

## Improved Performance

The performance of the {{% ctx %}} Platform has been improved by:

* [optimising stopping multiple running executions][Performance - Improved performance of stopping multiple running executions].
* [optimising the monitoring execution updates][Performance - Improved performance of monitoring execution updates].

## Improved Observability

* Observability has been updated to use [Grafana Alloy instead of Promtail for ingesting logs to Grafana Loki][Observability - Migrated from Promtail to Grafana Alloy].

* The following [components within the Observability platform have been updated][Observability Upgrades] to the latest major versions:
  * Grafana - 12.1.1
  * Loki - 3.5.5

## Improved Documentation

The Documentation includes updates related to:

* [adding a new User Guide for the Flows Explorer][Documentation - Added new User Guide].
* [adding a new Tutorial for the Flows Explorer][Documentation - Added new Tutorial].
* [pointing documentation to the Flow Editor User Guide][Documentation - Updated documentation to point to Flow Editor User Guide].

For a full list of what has been introduced in this release, please see the [2025.7 Release Notes][]

[Fast Track]: {{< url path="Cortex.Reference.Glossary.F-J.FastTrack" version="2025.7" >}}
[2025.5]: {{< url path="Cortex.Blogs.Releases.2025.5.MainDoc" version="2025.7" >}}

[Capability]: {{< ref "#improved-capability" >}}
[Observability]: {{< ref "#improved-observability" >}}
[Performance]: {{< ref "#improved-performance" >}}
[Documentation]: {{< ref "#improved-documentation" >}}

[2025.7 Release Notes]: {{< url path="Cortex.Blogs.Releases.2025.7.MainDoc" version="2025.7" >}}

[Capability - Support for SNMP MIB loading and OID translation]: {{< url path="Cortex.Blogs.Releases.2025.7.SupportForSnmpMibLoadingAndOidTranslation" version="2025.7" >}}
[Capability - Added ReceivedAt property to SNMP Trap Details]: {{< url path="Cortex.Blogs.Releases.2025.7.AddedReceivedAtPropertyToSnmpTrapDetails" version="2025.7" >}}
[Capability - Added support for non-printable characters in Execute SSH Command Block]: {{< url path="Cortex.Blogs.Releases.2025.7.AddedSupportForNonPrintableCharactersInExecuteSshCommandBlock" version="2025.7" >}}
[Capability - Added support for response grace period in Execute SSH Command Block]: {{< url path="Cortex.Blogs.Releases.2025.7.AddedSupportForResponseGracePeriodInExecuteSshCommandBlock" version="2025.7" >}}
[Capability - Added support for custom log path on Log Event blocks]: {{< url path="Cortex.Blogs.Releases.2025.7.AddedSupportForCustomLogPathOnLogEventBlocks" version="2025.7" >}}
[Capability - Added support for stopping multiple running executions]: {{< url path="Cortex.Blogs.Releases.2025.7.AddedSupportForStoppingMultipleRunningExecutions" version="2025.7" >}}
[Performance - Improved performance of stopping multiple running executions]: {{< url path="Cortex.Blogs.Releases.2025.7.ImprovedPerformanceOfStoppingMultipleRunningExecutions" version="2025.7" >}}
[Performance - Improved performance of monitoring execution updates]: {{< url path="Cortex.Blogs.Releases.2025.7.ImprovedPerformanceOfMonitoringExecutionUpdates" version="2025.7" >}}
[Observability - Migrated from Promtail to Grafana Alloy]: {{< url path="Cortex.Blogs.Releases.2025.7.MigratedFromPromtailToGrafanaAlloy" version="2025.7" >}}
[Observability Upgrades]: {{< url path="Cortex.Blogs.Releases.2025.7.ObservabilityUpgrades" version="2025.7" >}}
[Documentation - Added new User Guide]: {{< url path="Cortex.Blogs.Releases.2025.7.AddedNewUserGuide" version="2025.7" >}}
[Documentation - Added new Tutorial]: {{< url path="Cortex.Blogs.Releases.2025.7.AddedNewTutorial" version="2025.7" >}}
[Documentation - Updated documentation to point to Flow Editor User Guide]: {{< url path="Cortex.Blogs.Releases.2025.7.UpdatedDocumentationToPointToFlowEditorUserGuide" version="2025.7" >}}

[Execute SSH Command Block]: {{< url path="Cortex.Reference.Blocks.Ssh.ExecuteSshCommand.ExecuteSshCommandBlock.MainDoc" version="2025.7" >}}
