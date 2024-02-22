---
title: "KeyNotPresentException"
linkTitle: "KeyNotPresentException"
description: "The exception thrown when trying to get an item from a dictionary, or set an item in a dictionary, with a key that is not present."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Dictionaries.KeyNotPresentException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when trying to get an item from a [dictionary][IDictionary], or set an item in a [dictionary][IDictionary], with a key that is not present.

## Reasons

### Dictionary is empty

The [dictionary][IDictionary] being accessed is empty, i.e. it contains no items.

#### Message Format

The format of the exception message is as follows:

```json
"The key <key> is not present in '<dictionary>', so cannot be retrieved because '<dictionary>' is empty.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<key>` is the key that is not present.
* `<dictionary>` is the empty [dictionary][IDictionary] that is being accessed.

#### How to fix

Ensure that the dictionary is not empty, and has the key that is being used.

### Key not present in dictionary

The key being used does not exist as a key in the [dictionary][IDictionary] being accessed.

#### Message Format

The format of the exception message is as follows:

```json
"The key <key> is not present in '<dictionary>', so cannot be retrieved.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<key>` is the key that is not present.
* `<dictionary>` is the [dictionary][IDictionary] that is being accessed.

#### How to fix

Ensure that the key is correct and is present in the [dictionary][IDictionary].

## Remarks

### Known Limitations

None

## See Also

### External Documentation

* [Dictionary][MS Dictionary]
* [IDictionary][MS IDictionary]

[Dictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc">}}
[IDictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc">}}

[MS Dictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[MS IDictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IDictionary" >}}
