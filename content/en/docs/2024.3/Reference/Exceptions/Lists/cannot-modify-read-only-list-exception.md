---
title: "CannotModifyReadOnlyListException"
linkTitle: "CannotModifyReadOnlyListException"
description: "The exception thrown when trying to modify a read-only list."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Lists.CannotModifyReadOnlyListException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when trying to modify a read-only list.

> Lists implementing [IList][]&lt;[TItem][]&gt; have the option to be read-only.

## Reasons

### Attempting to modify a read-only list

The execution is attempting to perform a non-read operation on a read-only [IList][]&lt;[TItem][]&gt;.

##### Message Format

The format of the exception message is as follows:

```json
"'<list>' cannot be modified because it's read-only.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<list>` is the name for the property containing the read-only list.

#### How to fix

If the list was written directly into the block property using an [expression][], use a list type that is not read-only, such as [List][]&lt;[TItem][]&gt;.

When using a variable, convert the list to a list that can be written to by using the `.ToList()` expression like follows:

```CSharp
($)List.ToList()
```

## Remarks

### Known Limitations

None

## See Also

#### External Documentation

* [System.Collections.Generic.IList<T>][MS IList]
* [System.Collections.Generic.List<T>][MS List]

[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}

[List]: {{<url path="Cortex.Reference.DataTypes.Collections.List.MainDoc">}}
[IList]: {{<url path="Cortex.Reference.DataTypes.Collections.IList.MainDoc">}}

[MS List]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[MS IList]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IList" >}}
