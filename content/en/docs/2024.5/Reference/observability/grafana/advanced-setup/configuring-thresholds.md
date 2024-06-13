---
title: "Configuring Thresholds"
linkTitle: "Configuring Thresholds"
description: "Instructions on how to configure thresholds in the Grafana Dashboard panels."
weight: 30
---

# {{% param title %}}

## Configure Thresholds

This section explains how to change the colour coding of thresholds set for the thresholded panels in the dashboards.

1. Log in to your configured Grafana with a user that has the *Admin* role.
1. To open a dashboard:
    1. Open the *Dashboards* page via the menu on the left sidebar.
    1. Click the folder name that the dashboards were imported to.
    1. Click the name of the dashboard you wish to modify to open it.
1. Open the panel you wish to configure in edit mode:
    1. Click the title of the panel to display a drop-down menu.
    1. Click *Edit*.
1. On the *Edit Panel* page, on the right-hand side, scroll down through the list of options until you reach the *Thresholds* section.
    1. You can change the value configured for the colours defined if the thresholds should be different to the default set for that panel.  
    1. You can change the colours defined for the thresholds to be different to the default set for that panel.  
    1. You can add additional threshold levels by clicking *+ add threshold* and configuring the colours and numbers appropriately. E.g. on the [Total Requests Errored][] panel on the [Flow Execution Requests][] dashboard, you may wish to add a warning threshold level to be >= 1 errors and change the critical threshold to be >= 10.  For this you should add a threshold and set the colour to your preferred colour, set the value to 1 and change the value for red to be 10.
    1. The threshold should be set to be an absolute value if it is a count e.g. error count, or a percentage if it is a rate e.g. success rate.
1. Click *Apply* in the top right corner of the Edit Panel page.
1. Save the changes to the dashboard by clicking on the save (disk) icon, in the top right of the dashboard.

<!-- Other links -->
[Flow Execution Requests]: {{< url path="Cortex.Reference.Observability.Grafana.Dashboards.FlowExecutionRequests.MainDoc" >}}
[Total Requests Errored]: {{< url path="Cortex.Reference.Observability.Grafana.Dashboards.FlowExecutionRequests.TotalRequestsErrored" >}}
