---
title: "Create the Documentation Service"
linkTitle: "Create the Documentation Service"
description: "Information about creating the AI application and the Documentation Service on the Web Application Server, which are installed with {{% ctx %}} but not created by default."
weight: 30
---

# {{% param title %}}

This guide describes how to create the AI application and the Documentation Service. Please ensure that the AI model server has been [installed on the Model Server][Install the AI Model Server] before starting this installation.

Carry out these steps on the Web Application Server, not the Model Server.

## Create the AI Application

{{< section "/flow-documentation/create-ai-application.md" >}}

## Create the Documentation Service

{{< section "/flow-documentation/create-documentation-service.md" >}}

## Next Steps?

1. [Configure the Documentation Service][]

[Configure the Documentation Service]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.ConfigureDocumentationService" >}}
[Install the AI Model Server]: {{< url path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.SeparateServer.InstallModelServer" >}}
