---
title: "Overview"
linkTitle: "Overview"
description: "Summary and anatomy of Package Management"
weight: 1
---

# {{% param title %}}

## Summary

The Package Management page allows you to manage [{{% ctx %}} packages][What is a Package?], including creating and publishing them.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Package Management.png" title="Package Management" >}}

The Package Management page displays a list of existing {{% ctx %}} Package definitions in the [Package Definitions Grid][], showing the most recently created version of each package; older versions can be viewed by expanding the package definition.

Selecting a package version will display it in the [Package Version Editor][]; the Definition tab will be selected, displaying the flows it contains and buttons to:

* [Export][] the selected package version to a {{% ctx %}} Package file.
* [Create New Version][] of the package based on the selected package version.
* [Publish][] or [Unpublish][] the package version to the {{% ctx %}} Execution Services.
* [Set As Default Package][] enabling flows to be executed from all versions of this package without specifying the package name in the execution REST Request.
* [Set As Default Version][] enabling flows to be executed from the package version without specifying the package version in the execution REST Request.

The [Package Version Editor][] contains the following tabs:

* [Definition][] - displays the flows contained in this package version.
* [Authorisation][] - allows the selection of LDAP groups authorised to execute flows contained in this package version.
* [Schedules][] – allows configuration of schedules to automatically execute flows contained in this package version at defined times or intervals.
* [Triggers][] - allows configuration of SNMP triggers to automatically execute flows contained in this package version on receipt of SNMP traps.
* [Running Executions][] - displays a list of running executions of flows in this package version and enables the user to abort them.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

* [What is a Package?][]

### Related Tutorials

* [Package Management][]

[Authorisation]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Authorisation" >}}
[Create New Version]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.CreateNewVersion" >}}
[Definition]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Definition" >}}
[Export]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Export" >}}
[Package Definitions Grid]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageDefinitionsGrid.MainDoc" >}}
[Package Management]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.MainDoc" >}}
[Package Version Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.MainDoc" >}}
[Publish]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Publish" >}}
[Running Executions]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.RunningExecutions" >}}
[Schedules]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Schedules" >}}
[Set As Default Package]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.SetDefaultPackage" >}}
[Set As Default Version]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.SetDefaultVersion" >}}
[Triggers]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Triggers" >}}
[Unpublish]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.Unpublish" >}}
[What is a Package?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Packages.WhatIsAPackage.MainDoc" >}}
