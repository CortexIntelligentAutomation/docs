---
title: "Multiple Server with HA"
linkTitle: "Multiple Server with HA"
description: "Instructions on how to import the client certificate used to check your multiple server cluster health."
weight: 1
---

# Import Client Certificate

## Using CA Certificates

In order to check the cluster health in Service Fabric Explorer and RabbitMQ, the certificate specified for `ClientCertificatePath` during [installation of the Application Servers][Configure Application Server Installation Script], or `ServerCertificatePath` during [installation of the Flow Debugger][Configure Flow Debugger Installation Script] will need to be imported to the local certificate store on the machine that is being used to browse from:

{{< section "/faqs/import-ca-client-certificate.md">}}

## Using Self Signed Certificates

In order to check the cluster health in Service Fabric Explorer and RabbitMQ, the certificate generated when specifying `UseSelfSignedCertificates` during [installation of the Application Servers][Configure Application Server Installation Script], or during [installation of the Flow Debugger][Configure Flow Debugger Installation Script] will need to be imported to the local certificate store on the machine that is being used to browse from:

{{< section "/faqs/import-selfsigned-client-certificate.md">}}

[Configure Application Server Installation Script]:  {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureInstallationScriptNew" >}}
[Configure Flow Debugger Installation Script]:  {{< url path="Cortex.GettingStarted.OnPremise.InstallInnovationOnly.MultipleServerWithHA.ConfigureDebuggerInstallationScript" >}}
