---
title: "CannotModifyReadOnlyDictionaryException"
linkTitle: "CannotModifyReadOnlyDictionaryException"
description: "The exception thrown when trying to modify a read-only dictionary."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException)</p>

The exception thrown when trying to modify a read-only dictionary.

> Dictionaries implementing [IDictionary][]&lt;[TKey][], [TItem][]&gt; have the option to be read-only.

The format of the exception message is as follows:

```json
"'<property-display-name>' cannot be because it's read-only.
Please click the HelpLink for more information on how to fix this."
```

## How to fix

If the dictionary was written directly into the block property using an [expression][], use a dictionary type that is not read-only, such as [Dictionary][]&lt;[TKey][], [TItem]&gt;.

When using a variable, convert the read-only dictionary to a dictionary that can be written to by using the `.ToDictionary(item => item.Key, item => item.Value)` expression like follows:

```CSharp
($)Dictionary.ToDictionary(item => item.Key, item => item.Value);
```

TODO: Confirm if this is all correct

[TKey]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataTypes.Generics.MainDoc" >}}
[TItem]: {{< url "Cortex.Reference.Concepts.WorkingWith.DataTypes.Generics.MainDoc" >}}
[expression]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}
[Dictionary]: {{< url MSDocs.DotNet.Api.System.Collections.Generic.Dictionary >}}
[IDictionary]: {{< url MSDocs.DotNet.Api.System.Collections.Generic.IDictionary >}}
