---
title: "Alternative Architectures"
linkTitle: "Alternative Architectures"
description: >
    Information on installing Cortex on alternative architectures.
---

## Alternative architectures

It is possible to minimise the number of servers used by installing SQL Express/SQL Server, Cortex Gateway and the Flow Debugger Service on either the load balancer machine or one of the application servers (4 server architecture), as shown below. A 3 node architecture is not possible as the load balancer cannot route requests to itself.

{{< figure class="no-float" src="/images/Cortex Innovation Overview 4a servers.png" title="4 Server Architecture Diagram - Web Applications on Load Balancer Server" >}}
{{< figure class="no-float" src="/images/Cortex Innovation Overview 4b servers.png" title="4 Server Architecture Diagram - Web Applications on Application Server" >}}

A number of other configurations are also possible, where any combination of the load balancer, Cortex Gateway, Flow Debugger Service and Databases can be on any combination of servers. This can be particularly relevant for adding Cortex Innovation to an existing Gateway installation.
