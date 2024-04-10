---
title: "KeysNotPresentException"
linkTitle: "KeysNotPresentException"
description: "The exception thrown when trying to get items from a dictionary, or set items in a dictionary, and one or more of the keys used to find the items is not present."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Dictionaries.KeysNotPresentException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when trying to get items from a [dictionary][IDictionary], or set items in a [dictionary][IDictionary], and one or more of the keys used to find the items is not present.

## Reasons

### Dictionary is empty

The [dictionary][IDictionary] being accessed is empty.

#### Message Format

The format of the exception message is as follows:

```json
"The following keys are not present in '<dictionary>', so cannot be retrieved because '<dictionary>' is empty.
<keys>
Please click the HelpLink for more information on how to fix this."
```

where:

* `<dictionary>` is the name of the property containing [dictionary][IDictionary] being accessed.
* `<keys>` is the list of keys that were not present in the [dictionary][IDictionary]. In this case it should be all keys provided.

#### How to fix

Ensure that the [dictionary][IDictionary] is not empty.

### One or more keys not present

Some of the keys provided were not present in the [dictionary][IDictionary].

#### Message Format

The format of the exception message is as follows:

```json
"The following keys are not present in '<dictionary>', so cannot be retrieved.
<keys>
Please click the HelpLink for more information on how to fix this."
```

where:

* `<dictionary>` is the name of the property containing [dictionary][IDictionary] being accessed.
* `<keys>` is the list of keys that were not present in the [dictionary][IDictionary].

#### How to fix

Ensure that the [dictionary][IDictionary] contains the key, for example by using the [Contains Item With Key][Contains Item With Key Block] block.

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