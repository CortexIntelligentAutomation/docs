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

Duplicate values have been provided for operating with a [list][IList], which cannot take duplicates for that operation, e.g. providing duplicate indices for the Indexes property of the [Get Items At Indexes][] block.

#### Message Format

The format of the exception message is as follows:

```json
"The value of '<list-name>' cannot contain duplicate values.
The values <values> in '<list-name>' are duplicated.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<list-name>` is the name of the property containing the list containing duplicate values that shouldn't.
* `<values>` is the [list][IList] of values that are duplicated in the list.

#### How to fix

Ensure that duplicate values do not exist within the list before providing the property for the execution.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[IList]: {{<url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc">}}
[Get Items At Indexes]: {{<url path="Cortex.Reference.Blocks.Lists.GetItem.GetItemsAtIndexes.MainDoc">}}
