---
title: "Package Version Editor"
linkTitle: "Package Version Editor"
description: "Summary and anatomy of the Package Version Editor"
weight: 30
---

# {{% param title %}}

## Summary

The Package Version Editor displays details of the selected package version and allows management of it.

## Anatomy

{{< figure src="/images/Package Version Editor.png" title="Package Version Editor" >}}

Selecting a package version in the [Package Definitions Grid][] will display it's details in the Package Version Editor; the [Definition][] tab will be selected, displaying the flows it contains and buttons to:

* [Export][] the selected package version to a {{% ctx %}} Package file.
* [Create New Version][] of the package based on the selected package version.
* [Publish][] or [Unpublish][] the package version to the {{% ctx %}} Execution Services.
* [Set As Default Package][] enabling flows to be executed from all versions of this package without specifying the package name in the execution REST Request.
* [Set As Default Version][] enabling flows to be executed from the package version without specifying the package version in the execution REST Request.

{{% alert title="Note" %}}
Some buttons are not visible until the package has been initially published.
{{% /alert %}}

The Package Version Editor contains the following tabs:

* [Definition][] - displays the flows contained in this package version.
* [Authorisation][] - allows the selection of LDAP groups authorised to execute flows contained in this package version.
* [Schedules][] – allows configuration of schedules to automatically execute flows contained in this package version at defined times or intervals.
* [Triggers][] - allows configuration of SNMP triggers to automatically execute flows contained in this package version on receipt of SNMP traps.
* [Running Executions][] - displays a list of running executions of flows in this package version and enables the user to abort them.

## Actions

### Definition

Displays the flows contained in this package version and the actions that can be performed on it.

#### Create a New Package Version

A new {{% ctx %}} Package Version can be created from any existing {{% ctx %}} Package Version. Creating a new {{% ctx %}} Package Version allows additional flows to be added, and flows inherited from the from the source Package Version excluded from the new version. Existing flows inherited from the source {{% ctx %}} Package Version may be individually updated to their current Master Version contained in the Master Repository or kept at their original version.

The created {{% ctx %}} Package Version may optionally define Schedules to cause flows to be run at specific times, Triggers to cause flows to be run on receipt of specific SNMP Traps, or the Authorisation to authorise Token-based OAuth2 REST Requests for flow execution.

The new {{% ctx %}} Package Version does not retain any of the flow execution authorisation, schedules, nor any triggers set on the source {{% ctx %}} Package Version.

See the [Create a New Package Version tutorial][] for a step-by-step guide.

#### Publish a Package Version

When a {{% ctx %}} Package Version is published it is distributed to the execution nodes. The first execution of a flow on a node will cause the flow to be compiled, cached and executed on that node.

Published {{% ctx %}} Package Versions may be explicitly set as the Default Version for that {{% ctx %}} Package, meaning that a REST Request to execute a flow from that published {{% ctx %}} Package Version does not have to specify the Package Version.

See the [Publish a Package Version tutorial][] for a step-by-step guide.

#### Set As Default Package

The Default Package specifies which {{% ctx %}} Package will be used to execute flows if the execution REST Request omits the Package Name specifying the {{% ctx %}} Package to use. There is only one Default Package for each {{% ctx %}} system.

The Default Package can be set on any {{% ctx %}} Package that has a published {{% ctx %}} Package Version. If all the {{% ctx %}} Package Versions associated with the Default Package are unpublished, the Default Package remains unchanged.

See the [Set the Default Package tutorial][] for a step-by-step guide.

#### Set As Default Version

The Default Version specifies which {{% ctx %}} Package Version will be used to execute flows if the execution REST Request omits the Package Version specifying the {{% ctx %}} Package Version to use. Every {{% ctx %}} Package will have a Default Version set, either implicitly or explicitly.

By default, the most recently published {{% ctx %}} Package Version will be implicitly set as the Default Version. If the implicitly set Default Version of a Package is unpublished, the next most recently published version of that Package will be implicitly set as the Default Version.

Any published {{% ctx %}} Package Version may be explicitly set as the Default Version. An explicitly set Default Version will remain the Default Version regardless of which other Packages Versions are published or unpublished.

If a {{% ctx %}} Package Version that has been set as the Default Version is unpublished, no other published {{% ctx %}} Package Version associated with that {{% ctx %}} Package will be implicitly set as the Default Version. In this instance, there will be no default {{% ctx %}} Package Version available for that {{% ctx %}} Package.

If an unpublished {{% ctx %}} Package Version that was previously set as the Default Version is again published, it will automatically become the explicitly set Default Version.

If all the {{% ctx %}} Package Versions of a {{% ctx %}} Package are unpublished and then a Package is republished, it will become implicitly set as the Default Version, even if it was explicitly set as the Default Version before unpublishing.

See the [Set the Default Package Version tutorial][] for a step-by-step guide.

#### Unpublish a Package Version

When a {{% ctx %}} Package Version is unpublished, it is removed from all the execution nodes and flow execution cannot be started for any flows in that package; however, any currently running executions from that Package Version will continue to completion. When all instances of an executing flow in an unpublished package have completed, the cache of the compiled flow discarded.

See the [Unpublish a Package Version tutorial][] for a step-by-step guide.

#### Export a Package Version

Any {{% ctx %}} Package Version can be exported to a file, which can be used for importing the package to another {{% ctx %}} Gateway or for archiving purposes. The export file is automatically downloaded from the browser and has the file name of `<Package Name>.ctxpkg`.

The exported file contains the {{% ctx %}} Package Version definition, and the flow definitions contained in the package. Any authorisation, schedules or triggers set on the {{% ctx %}} Package Version are not included in the exported file.

See the [Export a Package Version tutorial][] for a step-by-step guide.

### Authorisation

The Authorisation tab on a package version defines which LDAP groups can execute flows contained in that package version, using Token-based OAuth2 authorisation.

The list of Active Directory objects displayed to define flow execution authorisation is filtered by the Base DNs configured in LDAP Connection for {{% ctx %}} Gateway.

See the [Set Authorisation on a Package Version tutorial][] for a step-by-step guide.

### Schedules

A schedule causes a flow execution at a predetermined time, optionally passing values to the flow’s input variables. A single flow may be triggered by several different schedules, and several different schedules may trigger several flows.

Each schedule definition consists of a Name, which is used to easily identify the schedule, and an optional Description to provide additional information. The schedule also specifies the flow to be executed and the time or intervals to initiate the flow execution, expressed in CRON format. The CRON data entered will also be displayed in a human readable format.

Any data to be passed to the flow’s input variables is entered using Expression editors.

Creating a new package version will not inherit the schedule configuration from the source package version. Similarly, exporting a package version will not include the package’s Schedule in the {{% ctx %}} Package file.

See the [Create a Schedule on a Package Version tutorial][] for a step-by-step guide.

### Triggers

A trigger causes a flow execution on receipt of an SNMP Trap event, optionally passing static values to the flow’s input variables, and if required, the SNMP Trap PDU can be stored in a selected input variable as an object. A single flow may be executed by several different triggers, and several different triggers may initiate the execution of several flows.

Each trigger definition consists of a Name, which is used to easily identify the trigger, and an optional Description to provide additional information. The trigger also specifies a flow plus the set of conditions under which the receipt of an SNMP Trap will trigger the execution of the flow.

The trigger conditions that can be set are:

* The `source IPv4 address` of the device sending the SNMP Trap.

    This can be a single address, a set of comma-separated addresses, a range of addresses, CIDR subnets, or the * symbol to represent any source address.
* The `source IPv4 port` of the device sending the SNMP Trap.

    This can be a single port, a set of comma-separated ports, a range of ports, or the * symbol to represent any source port.
* The received `SNMP Trap OID`.

    This can be a single OID, a set of comma-separated OIDs, a range of OIDs, or the * symbol to represent any OID.

Each Trigger also define the SNMP version; either: `SNMPv1`, `SNMPv2c`, or `SNMPv3`.

* If `SNMPv1` is selected, a `Community` string and `Agent IPv4 Address` must be configured. The Agent Address matches with the source address contained in the SNMP PDU, and can be a single address, a set of comma-separated addresses, a range of addresses, CIDR subnets, or the * symbol to represent any source address.
* If `SNMPv2c` is selected, a `Community` string must be configured.
* If `SNMPv3` is selected, it is necessary to setup one or more authentication users from the `Configure SNMPv3 Users` hyperlink, above the list of existing SNMP Triggers.

Any data to be passed to the flow’s input variables is entered using Expression editors, except for the SNMP Trap PDU which, if required, is dynamically passed to a selected input variable, overwriting any static or default values configured for that variable.

Creating a new package version will not inherit the trigger configuration from the source package version. Similarly, exporting a package version will not include the package’s trigger configuration in the {{% ctx %}} Package file.

See the [Create a Trigger on a Package Version tutorial][] for a step-by-step guide.

### Running Executions

The Running Executions tab displays a list of currently running flow executions for the selected package version. Each row in the list is a distinct flow execution, and identifies: the Flow Name, its Execution ID, the time the execution Started At, and the duration of that execution; the duration is updated at 10 second intervals.

Any running flow execution may be aborted by selecting the flow and clicking the `Stop the execution` icon. The flow execution will be immediately stopped.

See the [View and Abort Running Flow Executions tutorial][] for a step-by-step guide.

## Remarks

### Known Limitations

* Flow versions other than those inherited from the source {{% ctx %}} Package Version, or the Master Versions stored in the Master Repository, cannot be included in a new {{% ctx %}} Package Version.
* To set the Default Package, it is necessary to select a published {{% ctx %}} Package Version; it is not possible to set the Default Package by selecting a {{% ctx %}} Package Version that is not published even if other {{% ctx %}} Package Versions of the same {{% ctx %}} Package are published.
* At present, the OAuth2 authorisation for flow execution uses the same Active Directory server used by {{% ctx %}} Gateway. This limitation will be removed in a future release.
* Currently, a schedule cannot be edited; new schedules can be created, and existing schedules deleted.

## See Also

### Related Concepts

* [What is a Package?][]

### Related Tutorials

* [Create a New Package Version][Create a New Package Version tutorial]
* [Publish a Package Version][Publish a Package Version tutorial]
* [Set the Default Package][Set the Default Package tutorial]
* [Set the Default Package Version][Set the Default Package Version tutorial]
* [Unpublish a Package Version][Unpublish a Package Version tutorial]
* [Export a Package Version][Export a Package Version tutorial]
* [Set Authorisation on a Package Version][Set Authorisation on a Package Version tutorial]
* [Create a Schedule on a Package Version][Create a Schedule on a Package Version tutorial]
* [Create a Trigger on a Package Version][Create a Trigger on a Package Version tutorial]
* [View and Abort Running Flow Executions][View and Abort Running Flow Executions tutorial]

[Authorisation]: {{< ref "#authorisation" >}}
[Create New Version]: {{< ref "#create-a-new-package-version" >}}
[Definition]: {{< ref "#definition" >}}
[Export]: {{< ref "#export-a-package-version" >}}
[Publish]: {{< ref "#publish-a-package-version" >}}
[Running Executions]: {{< ref "#running-executions" >}}
[Schedules]: {{< ref "#schedules" >}}
[Set As Default Package]: {{< ref "#set-as-default-package" >}}
[Set As Default Version]: {{< ref "#set-as-default-version" >}}
[Triggers]: {{< ref "#triggers" >}}
[Unpublish]: {{< ref "#unpublish-a-package-version" >}}

[Create a New Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.CreateNewPackageVersion" >}}
[Create a Schedule on a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.Schedules" >}}
[Create a Trigger on a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.Triggers" >}}
[Export a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.ExportPackage" >}}
[Publish a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.PublishPackage" >}}
[Set Authorisation on a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.Authorisation" >}}
[Set the Default Package tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.SetDefaultPackage" >}}
[Set the Default Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.SetDefaultPackageVersion" >}}
[Unpublish a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.UnpublishPackage" >}}
[View and Abort Running Flow Executions tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.RunningExecutions" >}}
[Package Definitions Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageDefinitionsGrid.MainDoc" >}}
[What is a Package?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Packages.WhatIsAPackage.MainDoc" >}}
