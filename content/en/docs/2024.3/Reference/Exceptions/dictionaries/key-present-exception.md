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
* `<dictionary>` is the [dictionary][IDictionary] to which the item is trying to be added.

#### How to fix

Ensure that the key is not a duplicate of an already existing key in the [dictionary][IDictionary].

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Dictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc">}}
[IDictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc">}}