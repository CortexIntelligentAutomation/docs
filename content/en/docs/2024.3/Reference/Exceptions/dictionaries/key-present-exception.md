---
title: "KeyPresentException"
linkTitle: "KeyPresentException"
description: "The exception thrown when trying to add an item to a dictionary with a key that is already present."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Dictionaries.KeyPresentException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when trying to add an item to a [dictionary][IDictionary] with a key that is already present.

## Reasons

### Key is already present in dictionary

The key being used to add an item to a [dictionary][IDictionary] already exists within the [dictionary][IDictionary].

#### Message Format

The format of the exception message is as follows:

```json
"The key <key> is already present in '<dictionary>', so cannot be added.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<key>` is the key being used to add an item.
* `<dictionary>` is the name of the property containing the [dictionary][IDictionary] to which the item is trying to be added.

#### How to fix

Ensure that the key is not a duplicate of an already existing key in the [dictionary][IDictionary], for example by using the [Contains Item With Key][Contains Item With Key Block] block.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

* [System.Collections.Generic.Dictionary<TKey,TItem>][MS Dictionary]
* [System.Collections.Generic.IDictionary<TKey,TItem>][MS IDictionary]

[Contains Item With Key Block]: {{<url path="Cortex.Reference.Blocks.Dictionaries.ContainsItem.ContainsItemWithKey.MainDoc">}}

[Dictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc">}}
[IDictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc">}}

[MS Dictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[MS IDictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IDictionary" >}}
