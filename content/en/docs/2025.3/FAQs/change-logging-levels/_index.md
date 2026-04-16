---
title: "How do I change the logging level?"
linkTitle: "How do I change the logging level?"
description: "Instructions on how to change the {{% ctx %}} logging level."
weight: 1000
---

{{% ctx %}} Logging Levels are set to `Error` by default for most services. However, levels can be changed whilst {{% ctx %}} is running by sending REST calls to the {{% ctx %}} API Gateway service.

{{% alert title="Note" %}}
Although the logging level for the {{% ctx %}} API Gateway service can be increased, it will still always log all API calls received regardless of logging level.
{{% / alert %}}

If increasing the logging level, particularly if increasing for everything or for Block Logging, we recommend that this is done only when required. Increasing log levels will lead to an increase in disk usage and disk writes, which can impact the performance of the {{% ctx %}} platform if not monitored.

Whilst increased logging levels are in place, we would recommend closely monitoring system performance and disk space usage.

All REST calls to update logging levels use Basic Auth and can be made using REST clients such as [Postman][] or using scripts such as PowerShell. For each of the below solutions, an example PowerShell script will be provided with instructions on how to use.

[Postman]: {{< url path="Postman.Downloads.MainDoc" >}}
