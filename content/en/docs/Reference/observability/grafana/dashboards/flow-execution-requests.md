---
title: "Flow Execution Requests"
linkTitle: "Flow Execution Requests"
description: "Information about the Flow Executions Request Dashboard."
weight: 10
---

# {{< param title >}}

## Description

This dashboard provides the information required to analyse the flow execution requests within the Cortex Innovation platform. It will display data based on the [Time Range][] that has been specified.

At the top of the page there is a dashboard description. This provides information about what the dashboard is reporting and what each of the filters are. The description is always collapsed by default.

The dashboard is then split into 4 main sections:

- [Overview](#overview-section)
- [Requests](#requests-section)
- [Errors](#errors-section)
- [Duration](#duration-section)

There are several [filters](#filters) available to filter the data to a more fine-grained level as necessary and are explained in further detail below.

{{< figure src="/images/Flow Execution Requests Dashboard.svg" >}}

## Time Range

{{% alert type="note" title="Note" %}}Choosing large time ranges will increase the time it takes for the data to be loaded into the dashboard.{{% /alert %}}

The time range for which the dashboard displays data is configurable in the top right of the dashboard using the Time Range selector (defaults to the last 3 hours):

{{< figure src="/images/Flow Execution Requests - Time Range.svg">}}

There are a number of predefined quick ranges to choose from:

- Last 5, 15 and 30 minutes
- Last 1, 3, 6, 12 and 24 hours
- Last 2, 7, 30 and 90 days
- Last 6 months
- Last 1, 2 and 5 years
- Yesterday
- Day before yesterday
- This day last week
- Previous week, month, fiscal quarter, year, fiscal year
- Today
- Today so far
- This month, fiscal quarter, year and fiscal year
- This month, fiscal quarter, year and fiscal year so far

To configure an absolute time range, you should specify a From and To date and time.  These values can be in the format of `YYYY-MM-DD HH:MM:SS`, e.g. `2022-07-22 13:54:23`, or alternatively can use times relative to now, e.g. `now-24h`. It is also possible to use the date time picker available for both the From and To fields. Once the absolute time range has been configured you must click the 'Apply time range' button.

If an absolute time range is specified, the Time Range selector will show the selected time range with arrows either side. These arrows can be used to shift the time range forwards and backwards. This feature is not available for quick ranges.

{{< figure src="/images/Flow Execution Requests - Time Range extended.svg">}}

The magnifying glass icon allows you to zoom out of the time range specified. It will substract half the current time range from the From field and add half the current time range to the To field.

For more information regarding the Time Range selector, see Grafana's [Time range controls][] documentation.

## Filters

At the top of the dashboard, there are 10 filters available to restrict the data queried:

{{< figure src="/images/Flow Execution Requests - Filters.svg" >}}

|Filter  |Description|
|--------|-----------|
| Tenant | List of tenants. Defaulted to All. |
| System | List of systems. Defaulted to All. |
| Node | List of hosts that processed the requests. Defaulted to All. |
| Package Name | List of packages. Defaulted to All. |
| Flow Name | List of flows that have execution requests. Defaulted to All. |
| Status Code | List of [status codes][] found in the HTTP responses. Defaulted to All. |
| Result | List of results found in the HTTP responses. Defaulted to All. |
| Initiator IP Address | List of IP addresses for the initiators of the requests. Defaulted to All. |
| Interval | List of intervals to perform the time series aggregations upon. This only affects the graphs on this dashboard.<br> <br>The available values for this filter are auto, 1m, 10m, 30m, 1h, 6h, 12h, 1d, 7d, 14d, 30d.<br> <br>If *auto* is selected, as is the default, Grafana will aggregate to a level it deems appropriate for the time range specified. |
| Custom Filter | Enables filtering on all available values, including those not exposed by default. |

All filters (excluding Interval and Custom Filter) will display their list of available options dependent on the preceding filters selected.

## Overview Section

This section displays key flow execution request metrics for the specified [time range][] and consists of 4 panels.

{{< figure src="/images/Flow Execution Requests - Overview.svg" >}}

{{% alert type="note" title="Note" %}}The Interval filter does not affect these panels.{{% /alert %}}

### Total Requests

This tile displays the total number of flow execution requests during the specified [time range][].

### Total Requests Errored

This tile displays the total number of flow execution requests that errored during the specified [time range][]. This tile has thresholds set to colour code the tile depending on the value. These thresholds can be [customised][customise threholds], however the default thresholds are:

| Threshold | Value | Colour |
|------------------|-----------|------------|
| OK  | 0 | <span class="threshold-ok">green</span> |
| CRITICAL | &gt;= 1 | <span class="threshold-critical">red</span> |

### Request Error Rate

This tile displays the percentage of errored flow execution requests against the total flow execution requests during the specified [time range][]. This tile has thresholds set to colour code the tile depending on the value. These thresholds can be [customised][customise threholds], however the default thresholds are:

| Threshold | Value | Colour |
|------------------|-----------|------------|
| OK  | &lt; 5% | <span class="threshold-ok">green</span> |
| WARNING | &gt;= 5% | <span class="threshold-warning">orange</span> |
| CRITICAL | &gt;= 10% | <span class="threshold-critical">red</span> |

### Mean Request Duration

This tile displays the mean duration for flow execution requests during the specified [time range][]. This is usually reported in seconds, however the unit may change if the number is much smaller or larger.

## Requests Section

This section provides information regarding the flow execution request history for the specified [time range][] and consists of 3 panels.

{{< figure src="/images/Flow Execution Requests - Requests.svg" >}}

### Requests

This graph displays, for the specified [time range][], the:

- count of all flow execution requests
- mean duration in seconds for all flow execution requests

Each data point value is calculated by aggregating requests based on the Interval filter.

### Top 10 Requests by Count

This table displays the 10 flows with the most execution requests during the specified [time range][] with their mean, minimum and maximum duration in seconds.

{{% alert type="note" title="Note" %}}The Interval filter does not affect this table.{{% /alert %}}

### Bottom 10 Requests by Count

This table displays the 10 flows with the least execution requests during the specified [time range][] with their mean, minimum and maximum duration in seconds.

{{% alert type="note" title="Note" %}}The Interval filter does not affect this table. Also, any flows with zero executions will not be displayed.{{% /alert %}}

## Errors Section

This section provides information regarding the errored flow execution request history for the specified [time range][] and consists of 2 panels.

{{< figure src="/images/Flow Execution Requests - Errors.svg" >}}

### Errored Requests

This graph displays, for the specified [time range][], the:

- count of errored flow execution requests
- mean duration in seconds for errored flow execution requests

Each data point value is calculated by aggregating requests based on the Interval filter.

### Top 10 Requests by Error Count

This table displays the 10 flows with the most errored execution requests (by status code and result) during the specified [time range][] with their mean, minimum and maximum duration in seconds.

{{% alert type="note" title="Note" %}}The Interval filter does not affect this table.{{% /alert %}}

## Duration Section

This section provides information regarding the flow execution request duration history for the specified [time range][] and consists of 3 panels.

{{< figure src="/images/Flow Execution Requests - Duration.svg" >}}

### Request Duration

This graph displays, for the specified [time range][], the:

- mean duration in seconds for all flow execution requests
- minimum duration in seconds for all flow execution requests
- maximum duration in seconds for all flow execution requests

Each data point value is calculated by aggregating requests based on the Interval filter.

### Top 10 Longest Running Requests by Mean Duration

This table displays the 10 flows whose execution requests have the longest mean duration during the specified [time range][] with their total count, error count, minimum and maximum duration in seconds.

{{% alert type="note" title="Note" %}}The Interval filter does not affect this table.{{% /alert %}}

### Top 10 Shortest Running Requests by Mean Duration

This table displays the 10 flows whose execution requests have the shortest mean duration during the specified [time range][] with their total count, error count, minimum and maximum duration in seconds.

{{% alert type="note" title="Note" %}}The Interval filter does not affect this table. Also, any flows with zero executions will not be displayed.{{% /alert %}}

## Remarks

### Unknown values

The dashboard may display flow execution requests that have an `Unknown` status code or result, if they are missing from the raw logs. The chances of this occurring are minimal.

### Known Limitations

#### Graphs do not reset to zero

There is a limitation in Grafana where the graph does not always return to the zero line when there is no data for a given time point.  This only occurs when there is a data point available at the beginning of the graph, followed by a period with no data, then data occurs again.  When hovering the mouse over this area, it will show that the value is 0, and any other tiles will reflect the zero data at this point accordingly.

{{< figure src="/images/Flow Execution Requests - Not Zero.svg" >}}

## Related Dashboards

None
<!-- Same page links -->
[time range]: #time-range

<!-- Other links -->
[customise threholds]: {{< url "Cortex.Reference.Observability.Grafana.Dashboards.Grafana.AdvancedSetup.ConfigureThresholds.MainDoc" >}}
[status codes]: {{< url "Wikipedia.HttpStatusCodes" >}}
[Time range controls]: {{< url "Grafana.Products.Grafana.TimeRange" >}}
