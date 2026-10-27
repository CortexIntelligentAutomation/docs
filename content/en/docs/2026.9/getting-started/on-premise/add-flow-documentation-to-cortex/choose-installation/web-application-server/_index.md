---
title: "Install on the Web Application Server"
linkTitle: "Install on the Web Application Server"
description: "Information about installing the AI model server and creating the Documentation Service on the Web Application Server, including prerequisites, installation and configuration instructions."
weight: 10
---

{{% pageinfo %}}
Everything is installed on the Web Application Server. No other server is needed or changed.

On the Web Application Server:

* The AI model server, the AI model and NSSM are installed by a script.
* The AI application and the Documentation Service, which are installed with {{% ctx %}} but not created by default, are created, and the Documentation Service is configured.

The AI model server only accepts connections from the same server, so no certificate, API key or firewall rule is needed.
{{% /pageinfo %}}
