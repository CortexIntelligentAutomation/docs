---
title: "PSRemotingException"
linkTitle: "PSRemotingException"
description: "The exception thrown when access is denied to a host when attempting to execute scripts over WinRM."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.PowerShell.PSRemotingException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when access is denied to a host when attempting to execute scripts over WinRM.

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

[//]: # (can't demo this message. relies on machine restart just before)

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].
* `<authentication-mechanism>` is the authentication mechanism (i.e. `Kerberos` or `Negotiate`) used for connecting to the host.

#### How to fix

* Ensure that the credentials provided are valid for a user account with permissions to execute PowerShell scripts or cmdlets on the [Host][ServerDetailsHost].
* Ensure that the authentication mechanism (i.e. `Kerberos` or `Negotiate`) used is not disabled on the host machine's WinRM service.

### Client Authentication Disabled {#clientauthenticationdisabled}

[//]: # (never tested or thrown? added docs since we technically can throw this. )

Kerberos authentication is disabled on the server where the [Execution Service][] is running.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). Kerberos Authentication is disabled on the WinRM client on the server where the Cortex Execution Service is running (<machine-name-value>).
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].
* `<machine-name-value>` is the NetBIOS name of the server where the [Execution Service][] is running.

#### How to fix

If possible, enable Kerberos Authentication on the server where the [Execution Service][Execution Service] is running.

### Host Contains Invalid Characters {#hostcontainsinvalidcharacters}

The hostname provided contains invalid characters.

#### Message Format

The format of the exception message is as follows:

```json
"Invalid 'Host' (\"<hostname-value>\") provided. The 'Host' has been provided a hostname that contains invalid characters.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].

#### How to fix

Ensure that the hostname does not contain invalid characters; see [Naming Conventions][NamingConventions] for more information.

### Invalid Certificate {#invalidcertificate}

The SSL certificate provided is invalid (e.g. the hostname provided does not match the common name on the certificate).

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). See the data property for details on why the a security error has occurred.
Please click the help link below for more information on how to fix this."
```

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].

#### How to fix

Ensure that certificate provided is valid.

### Invalid Credentials {#invalidcredentials}

[//]: # (never tested or thrown, added docs since we technically can throw this)

The credentials provided for accessing the host are invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Username' or 'Password' provided is incorrect, or requires a 'Domain'.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].

#### How to fix

Ensure that the credentials provided are valid.

### Invalid DNS {#invaliddns}

The hostname provided could not be resolved.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' has been provided a hostname that could not be resolved.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].

#### How to fix

Ensure that the hostname provided is valid.

### Invalid Domain {#invaliddomain}

The domain for the authentication credentials provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Domain' (\"<domain-name-value>\") is unavailable on the network.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].
* `<domain-name-value>` is the domain for the authentication credentials provided, which is invalid.

#### How to fix

Ensure that the domain provided is valid.

### Invalid Host IP Address {#invalidhostipaddress}

The hostname provided is in the form of an invalid or untrusted IP address.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' has been provided an IP address which is either invalid or has not been added to the WinRM TrustedHosts List on the server where the Cortex Execution Service is running (<machine-name-value>).
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].
* `<machine-name-value>` is the NetBIOS name of the server where the [Execution Service][] is running.

#### How to fix

Ensure that the IP address provided for the [Host][ServerDetailsHost] is valid, and that this IP address has been added to the WinRM TrustedHosts List on the server where the [Execution Service][] is running.

### Invalid Host Name {#invalidhostname}

The hostname provided is invalid.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' provided is unavailable on the network.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].

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

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].
* `<port>` is the provided port on the host to connect (e.g. `443`, `5986`, etc.); see [ServerDetails][] for more information.

#### How to fix

Ensure that the port provided is a valid port (e.g. `443`, `5986`, etc.).

### Invalid Protocol {#invalidprotocol}

The [Host][ServerDetailsHost] requires communication over SSL, while the [UseSSL][ServerDetailsUseSSL] property in the [ServerDetails][ServerDetails] provided is `false`.

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'Host' requires communication over SSL.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].

#### How to fix

Ensure that the [UseSSL][ServerDetailsUseSSL] property for the [ServerDetails][ServerDetails] is `true` and that valid credentials and a valid certificate are provided for access to the host.

### Invalid PSConfiguration {#invalidpsconfiguration}

The value of the [PSConfiguration][] property in the [PowerShellSessionDetails][] provided does not match any of the configured PowerShell session configurations on the [Host][ServerDetailsHost].

#### Message Format

The format of the exception message is as follows:

```json
"Access denied to the 'Host' (\"<hostname-value>\"). The 'PSConfiguration' (\"<psconfiguration-property-value>\") has not been configured on the 'Host'.
Please click the help link below for more information on how to fix this."
```

where:

* `<hostname-value>` is the value of the [Host][ServerDetailsHost] property provided in the [ServerDetails][ServerDetails].
* `<psconfiguration-property-value>` is the value of the [PSConfiguration][] property in the [PowerShellSessionDetails][] provided (i.e. the PowerShell session configuration that would be used by the host), which is invalid.

#### How to fix

Ensure that the [PSConfiguration][] provided matches a configured PowerShell session configuration on the [Host][ServerDetailsHost].

## Remarks

### Known Limitations

None

## See Also

### External Documentation

* [Naming conventions in Active Directory for computers, domains, sites, and OUs][NamingConventions]

[AccessDenied]: {{<ref "#accessdenied">}}
[ClientAuthenticationDisabled]: {{<ref "#clientauthenticationdisabled">}}
[HostContainsInvalidCharacters]: {{<ref "#hostcontainsinvalidcharacters">}}
[InvalidHostName]: {{<ref "#invalidhostname">}}
[InvalidDomain]: {{<ref "#invaliddomain">}}
[InvalidCredentials]: {{<ref "#invalidcredentials">}}
[InvalidCertificate]: {{<ref "#invalidcertificate">}}
[InvalidHostIPAddress]: {{<ref "#invalidhostipaddress">}}
[InvalidDNS]: {{<ref "#invaliddns">}}
[InvalidPort]: {{<ref "#invalidport">}}
[InvalidPSConfiguration]: {{<ref "#invalidpsconfiguration">}}
[InvalidProtocol]: {{<ref "#invalidprotocol">}}

[PowerShellSessionDetails]: {{<url path="Cortex.Reference.DataTypes.PowerShell.PowerShellSessionDetails.MainDoc">}}
[ServerDetails]: {{<url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc">}}
[ServerDetailsHost]: {{<url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host">}}
[ServerDetailsUseSSL]: {{<url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl">}}

[PSConfiguration]: {{<url path="Cortex.Reference.DataTypes.PowerShell.PowerShellSessionDetails.PsConfiguration">}}

[Execution Service]: {{<url path="Cortex.Guides.CortexInnovation.ExecutionApplication.Services.ExecutionService.MainDoc">}}

[NamingConventions]: {{<url path = "MSDocs.Windows.WindowsServer.NamingConventions">}}