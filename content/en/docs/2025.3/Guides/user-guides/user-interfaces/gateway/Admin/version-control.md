---
title: "Version Control"
linkTitle: "Version Control"
description: "View and manage differences between flows in the current user's repository and the Master Repository."
weight: 90
---

# {{% param title %}}

## Summary

The Version Control page displays the flow hierarchy for the current user, indicating whether the current user’s flows, stored in the user’s repository, are the same as or differ from the Master Versions, stored in the Master Repository.

## Anatomy

{{< figure src="/images/Version Control.png" title="Version Control" >}}

Only flows with Edit permissions for the current user are displayed in the Version Control grid.

## Actions

### Get Master

Any flows that have been committed to the Master Repository by another user are indicated by a downward pointing arrow {{< image src="/images/Version Control - Master Updated.png" >}}. These newer Master Versions may be pulled into the user’s repository by selecting them and clicking the `Get Master` button; if `Get Master` is selected for a flow that also has user uncommitted changes, these changes will be lost and the flow will be overwritten with the Master Version from the Master Repository.

See the [Use Version Control][Use Version Control tutorial] tutorial for a step-by-step guide.

### Commit Changes

Any flows in the user’s repository that have uncommitted changes are indicated by an upward pointing arrow {{< image src="/images/Version Control - Uncommitted Changes.png" >}}. These flows may be committed to the Master Repository by selecting them and clicking the `Commit Changes` button; if any flows selected to be committed have a new Master Version committed by another user a dialog will be displayed prompting conflicts to be resolved by taking either the version to be committed (`Take your version`) or `Take master version` resulting in a `Get Master` being performed.

See the [Use Version Control][Use Version Control tutorial] tutorial for a step-by-step guide.

## Remarks

### Known Limitations

* Parent groups must also have edit permissions, in addition to the flows, otherwise the group and flows contained within it will not be displayed.

## See Also

### Related Concepts

None

### Related Tutorials

* [Use Version Control][Use Version Control tutorial]

[Use Version Control tutorial]: {{< url path="Cortex.Tutorials.Administration.VersionControl.UseVersionControl" >}}
