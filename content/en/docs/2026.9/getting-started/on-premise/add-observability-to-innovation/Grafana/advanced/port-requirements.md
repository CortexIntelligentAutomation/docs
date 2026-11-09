---
title: "Port Requirements for the Web Application Server"
linkTitle: "Port Requirements for the Web Application Server"
description: "Information about the ports to be opened when installing the Grafana observability platform."
---

# {{% param title %}}

All the required ports for the Web Application Server that forms part of the Grafana observability platform must be opened on any installed firewall. If any other firewall exists between the Application Servers and the Web Application Server, or Grafana users and the Web Application Server, it will be necessary to configure this selection of rules on it.  These ports may be altered if there are any conflicts with other application requirements.

## Grafana Observability Platform

| Name | Description | Default Port(s) | Protocol | Direction |
|------|-------------|-----------------|----------|-----------|
| Grafana | The port used by the Grafana web application | 3000 | TCP | Inbound |
| Reverse proxy for Grafana Loki | The port used by IIS serving the role of a reverse proxy for Grafana Loki | 2100 | TCP | Inbound |
