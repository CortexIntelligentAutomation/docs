---
title: "Overview"
linkTitle: "Overview"
description: "This section includes user guides related to the Operations Overview in {{% ctx %}} Gateway."
weight: 10
---

# {{% param title %}}

## Summary

The Operations Overview shows a synopsis of the current system status, and a graphical display of the flow execution statistics.

## Anatomy

{{< figure src="/images/Operations Overview.png" title="Operations Overview" >}}

### Current Status

The Current Status displays the current License Consumption, the execution node Cluster Health, and the number of currently [Running Executions][]. A *Go To* icon on each of these tiles navigates to display more detail:

  * The License Consumption Go To icon navigates to the License Consumption feature, normally found under the Admin charm, to provide visibility of the License Consumption by flow.
  * The Cluster Health Go To icon opens a new browser tab and navigates to the Service Fabric Explorer, which inspection and management of the execution node cluster.
  * [Running Executions][] Go To icon navigates to the [Package Management][Package Management] feature, normally found under the Admin charm, to provide a breakdown of Running Executions by Package Version and flow.

{{% alert title="Note" %}}
To view the Service Fabric Explorer, the Service Fabric certificate must be installed as a client certificate on the machine from which you are browsing.
{{% /alert %}}

### Filters

The statistical flow execution graphs may be filtered by:

* `Package Names`: One or more of the Packages that have statistical flow execution data may be selected. The default is ‘All’
* `Package Versions`: One or more of the Package Versions that have statistical flow execution data may be selected. The default is ‘All’
* `Flows`: One or more of the flows that have statistical flow execution data may be selected. The default is ‘All’

The filters are applied hierarchically, i.e. if a single Package Name is selected, only the flow data from the associated Package Versions will be displayed; similarly, when a Package Version is selected, only the flow data from the associated flows will be displayed.

If a Package Name is selected that does not contain a previously selected Package Version, then all Package Versions for the selected Package Name will be automatically selected; similarly, if a Package Version is selected that does not contain a previously selected flow, then all flows for the selected Package Version will be automatically selected.

When any of the filters are changed, it is necessary to refresh the data to show the newly filtered statistics.

The period for which the statistical flow execution data represents may be selected to be either:

* *Today (so far)*, with a granularity of 1 hour. This is the default period.
* *Yesterday*, with a granularity of 1 hour
* *This week (so far)*, with a granularity of 1 hour
* *Last day*, representing data over the preceding 24 hours, with a granularity of 1 hour
* *Last 2 days*, representing data over the preceding 48 hours, with a granularity of 1 hour
* *Last 3 days*, representing data over the preceding 72 hours, with a granularity of 1 hour
* *Last 5 days*, representing data over the preceding 120 hours, with a granularity of 1 hour
* *Last 7 days*, representing data over the preceding 168 hours, with a granularity of 1 hour
* *This month (so far)*, with a granularity of 1 day
* *Last month*, representing data over the preceding 31 days, with a granularity of 1 day
* *Last 3 months*, representing data over the preceding 92 days, with a granularity of 1 day
* *Last 6 months*, representing data over the preceding 184 days, with a granularity of 1 day
* *Last 12 months*, representing data over the preceding 364 days, with a granularity of 1 day

### Success Rate

The Success Rate graph measures the percentage of flows that successfully ran to completion during the granularity period. The headline Success Rate is the average Success Rate for the entire period displayed, rounded down to the nearest whole percentage point.

### Completed

The Completed graph shows the number of flows that completed execution during the granularity period. The headline Completed flows is the total number of flows that competed execution over the entire period displayed.

### Errored

The Errored graph shows the number of flows that errored during the granularity period, The headline Errored flows is the total number of flows that errored over the entire period displayed.

{{% alert title="Note" %}}
Executing Flows that are administratively stopped in the {{< ahref path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.Overview.MainDoc" title="Package Management" >}} feature are also counted as Errored flows.
{{% /alert %}}

### Duration

The Duration graph measures the average duration of all flows executed, both successful and errored, during the granularity period. The headline Duration is the average duration of all the flows executed over the entire period displayed.

## Remarks

### Known Limitations

* The statistical data is only updated once a flow execution is complete. It does not show any data relating to currently executing flows.

## See Also

### Related Concepts

None

### Related Tutorials

* [Using the Operations Overview][Using the Operations Overview tutorial]

[Package Management]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.Overview.MainDoc" >}}
[Running Executions]: {{< url path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Packages.PackageVersionEditor.RunningExecutions" >}}
[Using the Operations Overview tutorial]: {{< url path="Cortex.Tutorials.Operations.Overview.UseOperationsOverview" >}}
