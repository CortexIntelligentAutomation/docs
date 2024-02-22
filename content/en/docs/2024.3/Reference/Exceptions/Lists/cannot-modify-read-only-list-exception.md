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

## Reasons

### Attempting to modify a read-only list

> Lists deriving from [IList][]&lt;[T][]&gt; have the option to be read-only.

There was an attempt to modify a read-only list.

##### Message Format

The format of the exception message is as follows:

```json
"The value of '<property-name>' cannot be modified.
This is because the value of '<property-name>' is read-only.
See the CannotModifyReadOnlyListException help page for more information on how to fix this."
```

where:

* `<property-name>` is the name for the property that contains the read-only list.

## How to fix

If the list was written directly into the block property using an [expression][], use a list type that is not read-only, such as [List][]&lt;[T][]&gt;.

When using a variable, convert the list to a list that can be written to by using the `.ToList()` expression like follows:

```CSharp
($)List.ToList()
```

TODO: Confirm if this is all correct - look at cannotmodifyreadonlydictionaryexception for consistency

[T]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[List]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[IList]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IList" >}}
