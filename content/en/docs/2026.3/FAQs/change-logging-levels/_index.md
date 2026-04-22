---
title: "How do I change the Logging Level?"
linkTitle: "How do I change the Logging Level?"
description: "Instructions on how to change the {{% ctx %}} Logging Level."
weight: 1000
---

{{% ctx %}} Logging Levels are set to `Error` by default for most services. However, levels can be changed whilst {{% ctx %}} is running by sending REST calls to the {{% ctx %}} API Gateway service.

{{% alert title="Note" %}}
Although the Logging Level for the {{% ctx %}} API Gateway service can be increased, it will still always log all API calls regardless of Logging Level configured.
{{% / alert %}}

If increasing the Logging Level, particularly if increasing for everything or for Block Logging, we recommend that this is done only when required. Increasing log levels will lead to an increase in disk usage and disk writes, which can impact the performance of the {{% ctx %}} platform if not monitored.

Whilst increased Logging Levels are in place, we would recommend closely monitoring system performance and disk space usage.

All REST calls to update Logging Levels use Basic Auth and can be made using REST clients such as [Postman][] or using scripts such as PowerShell.

[Postman]: {{< url path="Postman.Downloads.MainDoc" >}}
