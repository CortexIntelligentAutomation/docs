---
title: "Overview"
linkTitle: "Overview"
description: "The current platform status and flow execution statistics."
weight: 10
---

# {{% param title %}}

## Summary

The Operations Overview shows a synopsis of the current platform status, and a graphical display of the flow execution statistics.

## Anatomy

{{< figure src="/images/Operations Overview.png" title="Operations Overview" >}}

### Current Status

#### License Consumption

This tile displays the current License Consumption. The {{< image src="/images/GoTo.png" >}} icon navigates to the License Consumption feature, to provide visibility of the license consumption by group and by flow.

#### Cluster Health

This tile displays the current Cluster Health. The {{< image src="/images/GoTo.png" >}} icon opens a new browser tab and navigates to the [Service Fabric Explorer][], which allows [inspection and management][Check Cluster Health] of the cluster.

{{% alert title="Note" %}}
To view Service Fabric Explorer, the Service Fabric client certificate must be {{< ahref path="Cortex.Faqs.ImportClientCertificate.MainDoc" title="imported" >}} on the machine from which you are browsing.
{{% /alert %}}

#### Running Executions

This tile displays the current number of [Running Executions][]. The {{< image src="/images/GoTo.png" >}} icon  navigates to the [Package Management][Package Management] feature, to provide a breakdown of running executions by package version and flow.

### Filters

#### Package Names

This filter displays the packages that have executions during the [Time Period][] selected. One or more packages can be selected, the default is `All`.

If a Package Name is selected that does not contain a previously selected Package Version, then all Package Versions for the selected Package Name will be automatically selected.

#### Package Versions

This filter displays the package versions that have executions during the [Time Period][] selected. One or more package versions can be selected, the default is `All`. This filter will only include package versions for the packages selected in the [Package Names][] filter.

If a Package Version is selected that does not contain a previously selected flow, then all flows for the selected Package Version will be automatically selected.

#### Flows

This filter displays the flows that have executions during the [Time Period][] selected. One or more flows can be selected, the default is `All`. This filter will only include flows for the package versions and packages selected in the [Package Versions][] and [Package Names][] filters.

{{% alert title="Note" %}}
When any of the above filters are changed, a `Refresh Data` button will appear that must be clicked to apply the filters.
{{% /alert %}}

#### Time Period

This filter displays a set of pre-defined periods to filter the data by:

| Time Period         | Start of Period              | End of Period         | Interval |
|---------------------|------------------------------|-----------------------|----------|
| Today (so far)      | Today at 00:00:00            | Now                   | 1 hour   |
| Yesterday           | Yesterday at 00:00:00        | Yesterday at 23:59:59 | 1 hour   |
| This week (so far)  | Monday at 00:00:00           | Now                   | 1 hour   |
| Last day            | Now - 24 hours               | Now                   | 1 hour   |
| Last 2 days         | Now - 48 hours               | Now                   | 1 hour   |
| Last 3 days         | Now - 72 hours               | Now                   | 1 hour   |
| Last 5 days         | Now - 120 hours              | Now                   | 1 hour   |
| Last 7 days         | Now - 168 hours              | Now                   | 1 hour   |
| This month (so far) | 1st day of month at 00:00:00 | Now                   | 1 day    |
| Last month          | Now - 1 month                | Now                   | 1 day    |
| Last 3 months       | Now - 3 months               | Now                   | 1 day    |
| Last 6 months       | Now - 6 months               | Now                   | 1 day    |
| Last 12 months      | Now - 12 months              | Now                   | 1 day    |

#### Refresh

This button, located next to the [Time Period][] filter, refreshes the filters and then the data displayed.

### Flows

#### Success Rate

Success Rate represents the percentage of flow executions that completed successfully.

The value displayed is the average success rate for the selected time period, rounded down to the nearest whole percentage point.

The graph displays the trend of flow execution success rate during the selected time period.

#### Completed

Completed represents the number of flow executions that completed successfully or errored.

The value displayed is the total number of flow executions that completed during the selected time period.

The graph displays the trend of completed flow executions during the selected time period.

#### Errored

Errored represents the number of flow executions that errored; this includes executions that have been stopped in the [Running Executions] tab of the [Package Management][] feature.

The value displayed is the total number of flow executions that errored during the selected time period.

The graph displays the trend of errored flow executions during the selected time period.

#### Duration

Duration represents the time taken in seconds for flow executions to have completed successfully or errored.

The value displayed is the average flow execution duration during the selected time period.

The graph displays the trend of average flow execution duration during the selected time period.

## Remarks

### Known Limitations

None

## See Also

### Related Concepts

None

### Related Tutorials

* [Using the Operations Overview][Using the Operations Overview tutorial]

[Package Names]: {{< ref "#package-names" >}}
[Package Versions]: {{< ref "#package-versions" >}}
[Time Period]: {{< ref "#time-period" >}}

[Check Cluster Health]: {{< url path="Cortex.Faqs.CheckClusterHealth">}}
[Package Management]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.Overview.MainDoc" >}}
[Running Executions]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.RunningExecutions" >}}
[Service Fabric Explorer]: {{< url path="Cortex.Reference.Glossary.P-T.ServiceFabricExplorer" >}}
[Using the Operations Overview tutorial]: {{< url path="Cortex.Tutorials.Operations.Overview.UseOperationsOverview" >}}
