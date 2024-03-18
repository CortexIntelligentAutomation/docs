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
* [Client Authentication Disabled][ClientAuthenticationDisabled]
* [Host Contains Invalid Characters][HostContainsInvalidCharacters]
* [Invalid Certificate][InvalidCertificate]
* [Invalid Credentials][InvalidCredentials]
* [Invalid DNS][InvalidDNS]
* [Invalid Domain][InvalidDomain]
* [Invalid Host IP Address][InvalidHostIPAddress]
* [Invalid Host Name][InvalidHostName]
* [Invalid Port][InvalidPort]
* [Invalid Protocol][InvalidProtocol]
* [Invalid PSConfiguration][InvalidPSConfiguration]

## Reasons

### Access Denied {#accessdenied}

Access to the host provided was denied.

#### Message Format

The format of the exception message can be one of the following:

```json
"Access denied to the 'Host' (\"<hostname-value>\").
Please click the help link below for more information on how to fix this."
```

or

```json
"Access denied to the 'Host' (\"<hostname-value>\"). <authentication-mechanism> Authentication is disabled on the Host's WinRM service.
Please click the help link below for more information on how to fix this."
```

[//]: # (can't demo this message? relies on machine restart just before? investigate)

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<authentication-mechanism>` is the authentication mechanism (i.e. `Kerberos` or `Negotiate`) used for remoting to the host.

#### How to fix

* Ensure that the credentials provided are valid for an administrator account with the correct host and domain.
* Ensure that the authentication mechanism (i.e. `Kerberos` or `Negotiate`) used is not disabled on the host machine's WinRM service.

### Client Authentication Disabled {#clientauthenticationdisabled}

[//]: # (never tested or thrown? added docs since we technically can throw this. )

Kerberos authentication is disabled on the host machine.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). Kerberos Authentication is disabled on the WinRM client on the server where the Cortex Execution Service is running (<machine-name-value>).
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<machine-name-value>` is the NetBIOS name of the machine with the [Execution Service][] running

#### How to fix

If possible, enable Kerberos Authentication on the server where the [Cortex Execution Service][Execution Service] is running.

### Host Contains Invalid Characters {#hostcontainsinvalidcharacters}

The hostname provided contains invalid characters.

#### Message Format

The format of the exception message is as follows:

```json
"Invalid 'Host' (\"<hostname-value>\") provided. The 'Host' has been provided a hostname that contains invalid characters.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the host name does not contain invalid characters (e.g. `domain  .example.com` and `example\com` are both invalid, while `domain.example.com` and `example.com` are not).

### Invalid Credentials {#invalidcredentials}

[//]: # (Not tested - can't get this to throw. Raise and ask for help)

The credentials provided for accessing the host are invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Username' or 'Password' provided is incorrect, or requires a 'Domain'.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the credentials provided are valid.

### Invalid Certificate {#invalidcertificate}

The SSL certificate provided is invalid (e.g. the hostname provided does not match the common name on the certificate).

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). See the data property for details on why the a security error has occurred.
Please click the help link below for more information on how to fix this."
```

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that certificate provided is valid.

### Invalid DNS {#invaliddns}

The hostname provided could not be resolved.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' has been provided a hostname that could not be resolved.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the hostname provided is valid.

### Invalid Domain {#invaliddomain}

The domain for the authentication credentials provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Domain' (\"<domain-name>\") is unavailable on the network.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<domain-name>` is the domain for the authentication credentials provided, which is invalid

#### How to fix

Ensure that the domain provided is valid.

### Invalid Host IP Address {#invalidhostipaddress}

The host provided is in the form of an IP address which is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' has been provided an IP address which is either invalid or has not been added to the WinRM TrustedHosts List on the server where the Cortex Execution Service is running (<machine-name-value>).
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information.
* `<machine-name-value>` is the NetBIOS name of the machine with the [Execution Service][] running.

#### How to fix

Ensure that the IP address provided for the host server is valid, and that this IP address has been added to the WinRM TrustedHosts List on the server where the [Execution Service][] is running.

### Invalid Host Name {#invalidhostname}

The hostname provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' provided is unavailable on the network.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the hostname provided is valid (i.e. that it exists and is available on the network).

### Invalid Port {#invalidport}

The port provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' is either not running, not listening on 'Port' <port>, or requires communication over SSL.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<port>` is the provided port on the host server to connect (e.g. `443`, `5986`, etc.); see [ServerDetails][] for more information

#### How to fix

Ensure that the port provided is a valid port (e.g. `443`, `5986`, etc.).

### Invalid Protocol {#invalidprotocol}

The host server requires communication over SSL, while the `UseSSL` property in the [PowerShellSessionDetails][] provided is `false`.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' requires communication over SSL.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information

#### How to fix

Ensure that the `UseSSL` property for the [PowerShellSessionDetails][] is `true` and that valid credentials and a valid certificate are provided for access to the host.

### Invalid PSConfiguration {#invalidpsconfiguration}

The value of the `PSConfiguration` property in the [PowerShellSessionDetails][] provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'PSConfiguration' (\"<psconfiguration-property-value>\") has not been configured on the 'Host'.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the `Host` property provided in the server details; see [ServerDetails][] for more information
* `<psconfiguration-property-value>` is the value of the `PSConfiguration` property in the [PowerShellSessionDetails][] provided (i.e. the PowerShell configuration that would be used by the host), which is invalid

#### How to fix

Ensure that a valid PowerShell configuration is provided for the `PSConfiguration` property.

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