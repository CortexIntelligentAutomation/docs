---
title: "Data Sources"
linkTitle: "Data Sources"
description: "Information related to working with Data Sources."
---

## Overview

TODO: Overview/summary

- Supported Data Sources
- Connection Strings

Currently SQL Server and ODBC are the only supported data sources.

TODO:

- SQL Server, verified data sources (SQL Server versions) and examples (link to connection strings)
- ODBC, verified data sources (e.g. postgres, mysql, access, excel, oracle) and examples (link to connection strings)
- Point to ConnectionStrings.com
- Connected as the user running the service or as a custom user (e.g. trusted user vs username and password)
  - can have issues when there is a difference in permissions between the flow debugger service user vs flow execution service user
  - check that impersonation works with trusted when implemented
