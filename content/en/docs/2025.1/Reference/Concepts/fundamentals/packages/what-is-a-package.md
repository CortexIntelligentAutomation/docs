---
title: "What is a Package?"
linkTitle: "What is a Package?"
description: "Information regarding the anatomy of a package, creating a package, publishing a package, and starting a flow execution."
weight: 1
---


# {{% param title %}}

## Summary

A {{% ctx %}} Package contains a set of independent or related flows that together form an automation solution.

Users with the Admin role can use the [{{% ctx %}} Package Management][] feature to manage packages, including [creating][CreatePackage] and [publishing][Publish] them.

## Anatomy of a Package

TODO

## Package Operations

### Creating a Package

Packages are immutable; once a package has been [created][CreatePackage], it is not possible to add flows, delete flows or update the version of flows contained within it. However, a [new version][] of the same package may be created from any previous version, which can contain different or updated flows.

### Publishing a Package

Packages must be [published][Publish] to the {{% ctx %}} Execution Services, making the flows within them available for execution; it is not possible to publish flows unless they are contained in a package.

It is possible to [publish][Publish] multiple versions of the same package to the {{% ctx %}} Execution Services, with each package version acting independently of the others; this permits CI/CD operations within the same {{% ctx %}} platform.

### Starting a Flow Execution

Executions of flows contained within published packages can be triggered via a REST Request. This can be [access controlled][authorisation] for each flow in the package using OAuth2 authorisation, which can be independently set on each package version, and can be restricted based on groups in the configured LDAP server.

A published package may be set as the [Default Package][], which will be used if the Package Name is not explicitly identified in a REST Request to execute a flow. Additionally, within each package, a published Package Version may be set as the [Default Package Version][]; this will be used if the Package Version is not explicitly identified in a REST Request to execute a flow.

### Other Package Operations

{{% ctx %}} Package Management also allows for:

* [Exporting][] a package version to a {{% ctx %}} Package file for archiving or [importing][Importing] to a different {{% ctx %}} Gateway
* [Importing][] a package version from a {{% ctx %}} Package file
* [Defining schedules][] on different package versions to execute flows at pre-determined times; flows within a package version may be assigned any number of schedules.
* [Defining triggers][] on different package versions to execute flows on receipt of an SNMP Trap; flows within a package version may be assigned any number of triggers.
* Viewing the total number of [running flow executions][] per package, viewing the individual [running flow executions][] associated with a package version, and aborting [running flow executions][].

## See Also

### Related Guides

* [Package Management Overview][]
* [Package Definitions Grid][]
* [Package Version Editor][]

[{{% ctx %}} Package Management]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.MainDoc" >}}
[authorisation]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Authorisation" >}}
[CreatePackage]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageDefinitionsGrid.CreatePackage" >}}
[Default Package]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.SetDefaultPackage" >}}
[Default Package Version]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.SetDefaultVersion" >}}
[Defining schedules]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Schedules" >}}
[Defining triggers]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Triggers" >}}
[Exporting]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Export" >}}
[Importing]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageDefinitionsGrid.Import" >}}
[new version]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.CreateNewVersion" >}}
[Package Management Overview]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.Overview.MainDoc" >}}
[Package Definitions Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageDefinitionsGrid.MainDoc" >}}
[Package Version Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.MainDoc" >}}
[Publish]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Publish" >}}
[running flow executions]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.RunningExecutions" >}}
