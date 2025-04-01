---
title: "Version Control"
linkTitle: "Version Control"
description: "This section includes user guides related to Version Control in {{% ctx %}} Gateway."
weight: 90
---

# {{% param title %}}

## Summary

The Version Control feature displays the Group hierarchy of the flows for the current user, identifying whether the current user’s flows, stored in the user’s sandbox repository, are up to date with the Master Versions, stored in the Master Repository.

|                              |                                                                 |
|------------------------------|-----------------------------------------------------------------|
| **Roles Required:**          | Admin                                                           |

## Anatomy

{{< figure src="/images/Version Control.png" title="Version Control" >}}

Only flows with Edit permissions for the current user are displayed in the Version Control grid.

Any flow versions, in the user’s repository, that are ahead of the Master Version, in the Master Repository, are indicated by an upward pointing arrow, and may be selected to be Committed as the Master Version by using the `Commit Changes` button.

Any flow Master Versions that have been Committed to the Master Repository by another user are indicated by a downward pointing arrow, and may be selected to be retrieved from the Master Repository and stored in the user’s repository using the `Get Master` button.

## Remarks

### Known Limitations

* It is necessary for the parent groups to have edit permissions in addition to the flows, to enable the display of the flows in Version Control.

## See Also

### Related Concepts

TODO

### Related Tutorials

* [Use Version Control][Use Version Control tutorial]

[Use Version Control tutorial]: {{< url path="Cortex.Tutorials.Administration.VersionControl.UseVersionControl" >}}
