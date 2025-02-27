---
title: "Package Definitions Grid"
linkTitle: "Package Definitions Grid"
description: "Package Definitions Grid - To be refined"
weight: 10
---

# {{% param title %}}

## Summary

The Package Definitions Grid displays a list of existing [{{% ctx %}} Package][What is a Package?] definitions.

## Anatomy

{{< figure src="/images/Package Definitions Grid.png" title="Package Definitions Grid" >}}

The Package Definitions Grid shows the most recently created version of each package; older versions can be viewed by expanding the package definition. Selecting a package version will display it's details in the [Package Version Editor][].

The Package Definitions Grid also contains buttons to:
* [Create a Package][]
* [Import a Package][]

## Actions

### Create a Package

A new package is created by clicking the `Add Package Definition` button, supplying a Package Name and selecting the flows to be included in the package.

The Package Name must be unique and can only contain alphanumeric characters, hyphens and underscores. The flows added to the package definition are the Master Versions of the flows contained in the Master Repository (most recently committed flow version).

If a selected flow has dependent flows, the dependent flow will be automatically selected for inclusion in the package; dependent flows cannot be manually deselected for inclusion; this ensures packages contain all required dependencies.

The package may optionally define LDAP groups that can execute flows, schedules to run flows at specific times, and triggers to run flows on receipt of specific SNMP Traps.

### Import a Package

A {{% ctx %}} Package file, with the extension of `.ctxpkg`, may be imported into any {{% ctx %}} Gateway by clicking the `Import` button and selecting the `.ctxpkg` file to import. 

If the imported package already exists in {{% ctx %}} Gateway, a new version of that package will be created; if the imported package does not exist, a new package will be created.

All the flows contained in the package will be saved in the Master Repository of the destination {{% ctx %}} Gateway as the master versions of those flows; if the imported flows already existed, the imported flows would become the new master versions.

## Remarks

### Known Limitations

* Flow versions other than the master versions stored in the Master Repository cannot be included in a new package.

## See Also

### Related Concepts

[What is a Package?][]

### Related Tutorials

* [How to Create a New {{% ctx %}} Package Definition][]
* [How to Import a {{% ctx %}} Package File][]

[Create a Package]: {{< ref "#create-a-package" >}}
[How to Create a New {{% ctx %}} Package Definition]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.CreatePackage" >}}
[How to Import a {{% ctx %}} Package File]: {{< url path="Cortex.Tutorials.Administration.PackageManagement.ImportPackage" >}}
[Import a Package]: {{< ref "#import-a-package" >}}
[Package Version Editor]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.MainDoc" >}}
[What is a Package?]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Packages.WhatIsAPackage.MainDoc" >}}
