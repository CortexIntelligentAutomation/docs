---
title: "ServiceUnavailableException"
linkTitle: "ServiceUnavailableException"
description: "The exception thrown when a service is unavailable."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Services.ServiceUnavailableException)</p>

## Description

The exception thrown when an error occurs while using a service.

There are multiple reasons that this exception can be thrown:

- [Service is unhealthy][]
- [Service does not exist][]

## Reasons

### Service is Unhealthy or Service does not Exist

This exception indicates that there is an issue with the service.

#### Message Format

```json
"The <service> was unavailable."
```

where `<service>` will be the name of the service.

#### How to fix

Check the status of the specified service and fix it.

## Properties

### Exception Type

The type of the exception (i.e. `ServiceUnavailableException`)

| | |
|-----------|------------|
| Data Type | [String][] |

### Message

The exception message, providing information about the exception that occurred.

| | |
|-----------|------------|
| Data Type | [String][] |

### Service Name

The name of the service that had an issue.

| | |
|-----------|---------------------------|
| Data Type | [String][] |

### Help Link

The URL for the relevant section of this exception's help page.

| | |
|-----------|------------|
| Data Type | [String][] |

## Remarks

### Known Limitations

None

## See Also

### Related Data Types

* [String][]

### Related Concepts

* [Exceptions][]

### Related Blocks

* Data Storage
    * [Create Collection Block][]

### External Documentation

None

[Decode Text]: {{< url path="Cortex.Reference.Blocks.Text.DecodeText.DecodeText.MainDoc" >}}
[InvalidBase64Character]: {{< ref "#100">}}
[OddHexCharacters]: {{< ref "#300">}}
[InvalidBase64UrlCharacter]: {{< ref "#600">}}
[Category]: {{< ref "#category">}}
[Service is unhealthy]: {{< ref "#service-is-unhealthy-or-service-does-not-exist">}}
[Service does not exist]: {{< ref "#service-is-unhealthy-or-service-does-not-exist">}}

[Base64]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64" >}}
[Hex]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Hex" >}}
[Base64URL]: {{< url path="Cortex.Reference.DataTypes.Text.Encoding.TextEncodingFormat.Base64Url" >}}

[Create Collection Block]: {{< url path = "Cortex.Reference.Blocks.DataStorage.CreateCollection.CreateCollectionBLock.MainDoc">}}

[WorkingWithText]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.MainDoc" >}}

[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}

[TextDecodingErrorCode]: {{< url path="Cortex.Reference.DataTypes.Text.TextDecodingErrorCode.MainDoc" >}}

[Exceptions]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Exceptions.MainDoc" >}}

[Tenant]: {{< url path = "Cortex.Reference.DataTypes.Scopes.Scope.Tenant">}}
[System]: {{< url path = "Cortex.Reference.DataTypes.Scopes.Scope.System">}}
