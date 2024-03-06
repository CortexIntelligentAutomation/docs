---
title: "PSRemotingException"
linkTitle: "PSRemotingException"
description: "The exception thrown when access is denied to a host when attempting to executing scripts over WinRM."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.PowerShell.PSRemotingException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when access is denied to a host when attempting to executing scripts over WinRM.

There are multiple reasons that this exception can be thrown:

* [Access Denied][AccessDenied]
* [Invalid Host Name][InvalidHostName]
* [Invalid Domain][InvalidDomain]
* [Invalid Credentials][InvalidCredentials]
* [Invalid Certificate][InvalidCertificate]
* [Invalid Host IP Address][InvalidHostIPAddress]
* [Invalid DNS][InvalidDNS]
* [Invalid Port][InvalidPort]
* [Invalid PSConfiguration][InvalidPSConfiguration]
* [Invalid Protocol][InvalidProtocol]

## Reasons

### AccessDenied

Access to the host provided was denied.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\").
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the credentials provided are valid for an administrator account with the correct host and domain.

### InvalidHostName

The hostname provided is invalid (e.g. it contains invalid characters).

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). The 'Host' provided is unavailable on the network.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the hostname provided is valid (e.g. it contains no invalid characters).

### InvalidDomain

The domain for the authentication credentials provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). The 'Domain' (\"<domain-name>\") is unavailable on the network.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<domain-name>` is the domain for the authentication credentials provided, which is invalid

#### How to fix

Ensure that the domain provided is valid.


### InvalidCredentials

[//]: # (This doesn't seem to be thrown anywhere - will investigate further)

The credentials provided for accessing the host are invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). The 'Username' or 'Password' provided is incorrect, or requires a 'Domain'.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the credentials provided are valid.

### InvalidCertificate

The SSL certificate provided is invalid (e.g. the hostname provided does not match the common name on the certificate).

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). See the data property for details on why the a security error has occurred.
Please click the help link below for more information on how to fix this."
```

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that certificate provided is valid.

### InvalidHostIPAddress

The host provided is in the form of an IP address which is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). The 'Host' has been provided an IP address which is either invalid or has not been added to the WinRM TrustedHosts List on the server where the Cortex Execution Service is running (<machine-name>).
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<machine-name>` is the NetBIOS name of the machine with the [Execution Service][] running, usually the local machine

[//]: # (Check if this is ever not the local machine, i.e. Environment.MachineName)

#### How to fix

Ensure that the IP address provided for the host server is valid, and that this IP address has been added to the WinRM TrustedHosts List on the server where the [Execution Service][] is running.

### InvalidDNS

The hostname provided could not be resolved.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). The 'Host' has been provided a hostname that could not be resolved.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the hostname provided is valid.

### InvalidPort

The port provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). The 'Host' is either not running, not listening on 'Port' <port>, or requires communication over SSL.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<port>` is the provided port on the host server to connect (e.g. `443`, `5986`, etc.); see [ServerDetails][] for more information

#### How to fix

Ensure that the port provided is a valid port.

### InvalidPSConfiguration

The value of the `PSConfiguration` property in the [PowerShellSessionDetails][] provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). The 'PSConfiguration' (\"<psconfiguration-property-value>\") has not been configured on the 'Host'.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<psconfiguration-property-value>` is the value of the `PSConfiguration` property in the [PowerShellSessionDetails][] provided (i.e. the PowerShell configuration that would be used by the host), which is invalid

#### How to fix

Ensure that a valid PowerShell configuration is provided for the `PSConfiguration` property.

### InvalidProtocol

The host server requires communication over SSL, while the `UseSSL` property in the [PowerShellSessionDetails][] provided is `false`.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname>\"). The 'Host' requires communication over SSL.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the `UseSSL` property for the [PowerShellSessionDetails][] is `true` and that valid credentials and a valid certificate are provided for access to the host.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[AccessDenied]: {{<ref "#accessdenied">}}
[InvalidHostName]: {{<ref "#invalidhostname">}}
[InvalidDomain]: {{<ref "#invaliddomain">}}
[InvalidCredentials]: {{<ref "#invalidcredentials">}}
[InvalidCertificate]: {{<ref "#invalidcertificates">}}
[InvalidHostIPAddress]: {{<ref "#invalidhostipaddress">}}
[InvalidDNS]: {{<ref "#invaliddns">}}
[InvalidPort]: {{<ref "#invalidport">}}
[InvalidPSConfiguration]: {{<ref "#invalidpsconfiguration">}}
[InvalidProtocol]: {{<ref "#invalidprotocol">}}

[PowerShellSessionDetails]: {{<url path="Cortex.Reference.DataTypes.PowerShell.PowerShellSessionDetails.MainDoc">}}
[ServerDetails]: {{<url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc">}}

[Execution Service]: {{<url path="Cortex.Guides.CortexInnovation.ExecutionApplication.Services.ExecutionService.MainDoc">}}