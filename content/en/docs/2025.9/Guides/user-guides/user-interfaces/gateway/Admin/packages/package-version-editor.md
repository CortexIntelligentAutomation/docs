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

* [Create New Version][] of the package based on the selected package version.
* [Publish][] or [Unpublish][] the package version to the {{% ctx %}} Execution Services.
* [Set As Default Package][] enabling flows to be executed from all versions of this package without specifying the package name in the execution REST Request.
* [Set As Default Version][] enabling flows to be executed from the package version without specifying the package version in the execution REST Request.
* [Export][] the selected package version to a {{% ctx %}} Package file.

{{% alert title="Note" %}}
Some buttons are not visible until the package version has been initially published.
{{% /alert %}}

The Package Version Editor contains the following tabs:

* [Definition][] - displays the name, version and flows contained in this package version.
* [Authorisation][] - allows the selection of LDAP groups authorised to execute flows contained in this package version.
* [Schedules][] – allows configuration of schedules to automatically execute flows contained in this package version at defined times or intervals.
* [Triggers][] - allows configuration of SNMP triggers to automatically execute flows contained in this package version on receipt of SNMP traps.
* [Running Executions][] - displays a list of running executions of flows in this package version and enables the user to abort them.

### Definition

Displays the flows contained in this package version and the actions that can be performed on it.

#### Create a New Package Version

A new package version can be created from any existing package version. Creating a new version allows additional flows to be added and existing flows to be removed; in addition existing flows may be individually updated to their current Master Version contained in the Master Repository or kept at their original version.

The created package version may optionally define [schedules][Schedules] to execute flows at specific times, [triggers][Triggers] to execute flows on receipt of SNMP traps, and the selection of LDAP Groups [authorised][Authorisation] to execute flows contained in this package version.

The new package version does not retain any of the configured schedules or triggers set on the source version. This is a known limitation and should be addressed in a future release.

See the [Create a New Package Version][Create a New Package Version tutorial] tutorial for a step-by-step guide.

#### Publish a Package Version

When a package version is published it is made available to the {{% ctx %}} Execution Services. The first execution of a flow on a node will cause the flow to be compiled, cached and executed on that node.

Published {{% ctx %}} Package Versions may be explicitly set as the Default Version for that {{% ctx %}} Package, meaning that a REST Request to execute a flow from that published {{% ctx %}} Package Version does not have to specify the Package Version.

See the [Publish a Package Version][Publish a Package Version tutorial] tutorial for a step-by-step guide.

#### Set As Default Package

The default package specifies which package will be used to execute flows if the execution REST Request omits the Package Name to specify the package to use. There is only one default package for each {{% ctx %}} platform.

Any package that has a [published][Publish] package version can be set as the default package. If all the package versions associated with the default package are [unpublished][Unpublish], the default package remains unchanged.

See the [Set the Default Package][Set the Default Package tutorial] tutorial for a step-by-step guide.

#### Set As Default Version

The default version specifies which package version will be used to execute flows if the execution REST Request omits the Package Version to specify the package version to use. Every package will have a default version set, either implicitly or explicitly.

By default, the most recently [published][Publish] package version will be implicitly set as the default version. If the implicitly set default version of a package is [unpublished][Unpublish], the next most recently published version of that package will be implicitly set as the default version.

Any published package version may be explicitly set as the default version. An explicitly set default version will remain the default version regardless of other package versions that are published or unpublished.

If a package version that has been set as the default version is unpublished, no other published package version associated with that package will be implicitly set as the default version. In this instance, there will be no default package version available for that package.

If an unpublished package version that was previously set as the default version is published again, it will automatically become the explicitly set default version.

If all the versions of a package are unpublished and then a package version is republished, it will become implicitly set as the default version, even if it was explicitly set as the default version before unpublishing.

See the [Set the Default Package Version][Set the Default Package Version tutorial] tutorial for a step-by-step guide.

#### Unpublish a Package Version

When a package version is unpublished, it is removed from the {{% ctx %}} Execution Services and flow executions cannot be started for any flows in that package; however, any currently [running executions][Running Executions] from that package version will continue to completion. When all instances of an executing flow in an unpublished package have completed, the cache of the compiled flow is discarded.

See the [Unpublish a Package Version][Unpublish a Package Version tutorial] tutorial for a step-by-step guide.

#### Export a Package Version

Any package version can be exported to a file, which can be used for [importing][Import] the package to another {{% ctx %}} Gateway or for archiving purposes. The export file is automatically downloaded from the browser and has the file name of `<Package Name>.ctxpkg`.

The exported file contains the definition of the package version, including the flows contained in the package. Any [schedules][Schedules], [triggers][Triggers] or [authorisation][Authorisation] set on the package version are not included in the exported file. This is a known limitation and should be addressed in a future release.

See the [Export a Package Version][Export a Package Version tutorial] tutorial for a step-by-step guide.

### Authorisation

The Authorisation tab on a package version defines which LDAP groups can execute flows contained in that package version, using Token-based OAuth2 authorisation.

The list of Active Directory objects displayed to define flow execution authorisation is retrieved from the Active Directory server configured in LDAP Connection for {{% ctx %}} Gateway and is filtered by the same base DNs. In a future release we may allow for a different LDAP connection to be used to define flow execution authorisation.

See the [Set Authorisation on a Package Version][Set Authorisation on a Package Version tutorial] tutorial for a step-by-step guide.

### Schedules

A schedule allows flow executions to occur at defined times, passing values to the flow’s [input variables][Input Variables]. Multiple schedules can be configured; a schedule can execute a single flow and a flow can be executed by mutiple schedules.

Each schedule definition consists of a `Name`, which is used to easily identify the schedule, and an optional `Description` to provide additional information. The defintion also specifies the `Flow` to be executed, the `Type` of schedule (currently only CRON is available) and the schedule, expressed as a `CRON Expression`, to initiate the flow execution. The CRON expression entered will also be displayed in a human readable format.

Any data to be passed to the flow’s [input variables][Input Variables] is entered using [expression editors][Expression Editor].

Creating a [new package version][Create New Version] will not inherit the schedule configuration from the source version. Similarly, exporting a package version will not include the schedule configuration in the {{% ctx %}} Package file. These are known limitations and should be addressed in a future release.

See the [Create a Schedule on a Package Version][Create a Schedule on a Package Version tutorial] tutorial for a step-by-step guide.

### Triggers

A trigger allows flow executions to occur on receipt of an SNMP Trap, passing values to the flow’s [input variables][Input Variables], and if required, the SNMP Trap PDU can be stored in a selected input variable as an object. Multiple triggers can be configured; a trigger can execute a single flow, and a flow can be executed by multiple triggers.

Each trigger definition consists of a `Name`, which is used to easily identify the trigger, and an optional `Description` to provide additional information. The definition also specifies the `Flow` to be executed as well as a set of conditions that, on receipt of a matching SNMP Trap, will execute the flow.

The conditions that must be set are:

* The `Device Address` of the device sending the SNMP Trap.

    This can be a single IPv4 address, a list of comma-separated IPv4 addresses, a range of IPv4 addresses, CIDR subnets, or the * symbol to represent any address.
* The `Device Port` of the device sending the SNMP Trap.

    This can be a single port, a list of comma-separated ports, a range of ports, or the * symbol to represent any port.
* The `Trap OID`.

    This can be a single OID, a list of comma-separated OIDs, a range of OIDs, or the * symbol to represent any OID.

* The `SNMP Version`; either: *SNMPv1*, *SNMPv2c*, or *SNMPv3*.
  * If *SNMPv1* is selected, a `Community` and `Agent Address` must be configured.
    * `Community` can be any value, a list of comma-separated values, or the * symbol to represent any community.
    * `Agent Address` matches with the device address contained in the SNMP PDU, and can be a single IPv4 address, a list of comma-separated IPv4 addresses, a range of IPv4 addresses, CIDR subnets, or the * symbol to represent any address.
  * If *SNMPv2c* is selected, a `Community` must be configured.
    * `Community` can be any value, a list of comma-separated values, or the * symbol to represent any community.
  * If *SNMPv3* is selected, it is necessary to setup one or more authentication users from the `Configure SNMPv3 Users` hyperlink, above the list of existing SNMP Triggers.

Any data to be passed to the flow’s [input variables][Input Variables] is entered using [expression editors][Expression Editor], except for the SNMP Trap PDU which, if required, is dynamically passed to a selected input variable, overwriting any static or default values configured for that variable.

Creating a [new package version][Create New Version] will not inherit the trigger configuration from the source version. Similarly, exporting a package version will not include the trigger configuration in the {{% ctx %}} Package file. These are known limitations and should be addressed in a future release.

See the [Create a Trigger on a Package Version][Create a Trigger on a Package Version tutorial] tutorial for a step-by-step guide.

### Running Executions

{{< figure src="/images/Package Version Editor - Running Executions.png" title="Running Executions Grid" >}}

The Running Executions tab displays a list of currently running flow executions for the selected package version. Each row in the list is a distinct flow execution, and identifies:

* `Flow Name` - the name of the flow being executed.
* `Execution Id` - the unique execution ID for this flow.
* `Parent Execution Id` - the Execution ID of the flow that initiated the execution of this flow. If this flow was not initiated by another flow the Parent Execution Id is blank.
* `Root Execution Id` - the Execution ID of the initial flow to be executed. If this flow is the initially executed flow, its Execution Id will be also the Root Execution Id. If this flow execution was initiated by another flow, if will share the same Root Execution Id to that of the parent flow.
* `Started At` - the date and time when this flow started executing.
* `Duration` - the current duration of the flow in seconds; the Duration is updated at 10 second intervals.
* `Executing On` - identifies the node executing this flow. It has the format of `<Installation>.<Host Name> (<IPv4 Address>)`, `<Installation>` is a custom text string specified at the time of installation, `<Host Name>` is the name of the host server, and `<IPv4 Address>` is the IP address configured on the host’s network adaptor.
* `Debugged By`– identifies the user that has attached to this flow to debug it in {{% ctx %}} Gateway. This will be blank if a user is not attached to the flow.

#### Filter Running Executions

Flows may be filtered by entering text into the search field of any column to form a partial text match with the displayed data.

Note: The `Started At` column must be filtered using the date-time format of `yyyy-MM-ddThh:mm:ss`. A partial match of digits used in the `Started At` filter may be used.

See the [View Running Executions][View Running Executions tutorial] tutorial for a step-by-step guide.

#### Group, Sort and Aggregate Running Executions

The {{< image src="/images/Package Version Editor - Filter Options.png" >}} icon to the right of each column name reveals a menu enabling the executing flows to be grouped, sorted, or have an aggregation function applied to the column’s data.

See the [View Running Executions][View Running Executions tutorial] tutorial for a step-by-step guide.

#### Stop Running Executions

Any running flow execution may be aborted by selecting the flow and clicking the {{< image src="/images/Package Version Editor - Stop Execution.png" >}} icon. The flow execution will be stopped immediately.

Multiple executions may be stopped simultaneously by selecting the executions by holding down the Ctrl or Shift key and clicking the executions to select, then clicking the {{< image src="/images/Package Version Editor - Stop Execution.png" >}} icon.

See the [Stop Running Executions][Stop Running Executions tutorial] tutorial for a step-by-step guide.

#### Debug Running Executions

A running execution may be debugged in {{% ctx %}} Gateway by selecting the execution in the Running Executions grid and clicking the {{< image src="/images/Package Version Editor - Attach to Execution.png" >}} icon; all dependent running executions will also be automatically attached to the same {{% ctx %}} Gateway session, which will open in a new window.

To abort debugging in {{% ctx %}} Gateway, detach the execution by clicking the {{< image src="/images/Package Version Editor - Detach from Execution.png" >}} icon. Any paused executions in {{% ctx %}} Gateway will immediately continue running. If any changes have been made to the executing flow whilst debugging in {{% ctx %}} Gateway, these changes will persist for this execution only after the execution has been detached.

See the [Debug Running Executions][Debug Running Executions tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* Only flow versions inherited from the source package version, or the Master Versions stored in the Master Repository, can be included in a new package version.
* New package versions do not retain any of the configured schedules or triggers set on the source version.
* Exported package versions do not retain any of the configured schedules, triggers or authorisation set on the package version being exported.
* To set the default package, it is necessary to select a published package version; it is not possible to set the default package by selecting a version that is not published even if other versions of the same package are published.
* Currently, a schedule cannot be edited; new schedules can be created, and existing schedules deleted.

## See Also

### Related Concepts

* [What is a Package?][]

### Related Tutorials

* [Definition][Definition tutorials]
  * [Create a New Package Version][Create a New Package Version tutorial]
  * [Publish a Package Version][Publish a Package Version tutorial]
  * [Set the Default Package][Set the Default Package tutorial]
  * [Set the Default Package Version][Set the Default Package Version tutorial]
  * [Unpublish a Package Version][Unpublish a Package Version tutorial]
  * [Export a Package Version][Export a Package Version tutorial]
* [Authorisation][Authorisation tutorials]
  * [Set Authorisation on a Package Version][Set Authorisation on a Package Version tutorial]
* [Schedules][Schedules tutorials]
  * [Create a Schedule on a Package Version][Create a Schedule on a Package Version tutorial]
* [Triggers][Triggers tutorials]
  * [Create a Trigger on a Package Version][Create a Trigger on a Package Version tutorial]
* [Running Executions][Running Executions tutorials]
  * [View Running Executions][View Running Executions tutorial]
  * [Stop Running Executions][Stop Running Executions tutorial]
  * [Debug Running Executions][Debug Running Executions tutorial]

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

[Authorisation tutorials]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.AuthorisationTutorials" >}}
[Create a New Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.CreateNewPackageVersion" >}}
[Create a Schedule on a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.Schedules" >}}
[Create a Trigger on a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.Triggers" >}}
[Debug Running Executions tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.DebugRunningExecutions" >}}
[Definition tutorials]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.DefinitionTutorials" >}}
[Export a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.ExportPackage" >}}
[Publish a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.PublishPackage" >}}
[Running Executions tutorials]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.RunningExecutionsTutorials" >}}
[Schedules tutorials]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.SchedulesTutorials" >}}
[Set Authorisation on a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.Authorisation" >}}
[Set the Default Package tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.SetDefaultPackage" >}}
[Set the Default Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.SetDefaultPackageVersion" >}}
[Stop Running Executions tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.StopRunningExecutions" >}}
[Triggers tutorials]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.TriggersTutorials" >}}
[Unpublish a Package Version tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.UnpublishPackage" >}}
[View Running Executions tutorial]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.ViewRunningExecutions" >}}

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Import]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageDefinitionsGrid.Import" >}}
[Input Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.WhatIsAVariable.FlowInputVariable" >}}
[Package Definitions Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageDefinitionsGrid.MainDoc" >}}
[What is a Package?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Packages.WhatIsAPackage.MainDoc" >}}
