---
title: "Install on a Separate Server"
linkTitle: "Install on a Separate Server"
description: "Information about installing the AI model server on a separate Model Server and creating the Documentation Service on the Web Application Server, including prerequisites, installation and configuration instructions."
weight: 20
---

{{% pageinfo %}}
The AI model server is installed on a separate Model Server. The Documentation Service stays on the Web Application Server, and connects to the Model Server over `https` using an API key.

On the Model Server:

* The AI model server, the AI model and NSSM are installed by a script, with the certificate, the API key file and a firewall rule.
* Nothing else from {{% ctx %}} is installed. The Model Server does not run Service Fabric, {{% ctx %}} Gateway or the Documentation Service.

On the Web Application Server:

* The AI application and the Documentation Service, which are installed with {{% ctx %}} but not created by default, are created, and the Documentation Service is configured.
* The root certificate of the Model Server's certificate is imported, if it is not already trusted.
* The AI model server and the AI model are not installed.

Each step in this guide states which server it is carried out on.
{{% /pageinfo %}}
