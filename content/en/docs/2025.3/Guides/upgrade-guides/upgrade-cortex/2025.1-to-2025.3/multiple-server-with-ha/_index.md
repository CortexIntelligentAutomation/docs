---
title: "Multiple Server - With HA"
linkTitle: "Multiple Server - With HA"
description: "Upgrade instructions for multiple on-premise servers with high availability (HA)."
weight: 10
---

{{% alert title="Warning" color="warning" %}}
Due to breaking changes required for upgrading RabbitMQ from version 3 to version 4 the Application Servers need to be reinstalled rather than upgraded. As a result packages will need to be republished and Config Store data will need to be backed up and restored. Other data stored in Reliable Collections (e.g., data storage collections and semaphores) will be lost.
{{% /alert %}}
