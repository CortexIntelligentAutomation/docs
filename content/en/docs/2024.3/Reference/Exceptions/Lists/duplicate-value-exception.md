---
title: "DuplicateValueException"
linkTitle: "DuplicateValueException"
description: "The exception thrown when a list has duplicate values but shouldn't."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Lists.DuplicateValueException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a [list][IList] has duplicate values but shouldn't.

## Reasons

### Duplicate values in list when not supported

A [list][IList] provided for an operation requiring unique values contains at least one duplicate value (e.g. providing duplicate indexes for the `Indexes` property of the [Get Items At Indexes][] block).

#### Message Format

The format of the exception message is as follows:

```json
"The value of '<list-property-name>' cannot contain duplicate values.
The values <list-property-values> in '<list-property-name>' are duplicated.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<list-property-name>` is the name of the property containing the list that has duplicate values.
* `<list-property-values>` is the list of values that are duplicated in the list.

#### How to fix

Ensure that duplicate values do not exist within the list being provided.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[IList]: {{<url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc">}}
[Get Items At Indexes]: {{<url path="Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtIndexes.MainDoc">}}
