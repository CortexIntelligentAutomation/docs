---
title: "CannotModifyReadOnlyDictionaryException"
linkTitle: "CannotModifyReadOnlyDictionaryException"
description: "The exception thrown when trying to modify a read-only dictionary."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Dictionaries.CannotModifyReadOnlyDictionaryException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when trying to modify a read-only dictionary.

> Dictionaries implementing [IDictionary][]&lt;[TKey][], [TItem][]&gt; have the option to be read-only.

## Reasons

### Attempting to modify a read-only dictionary

The execution is attempting to perform a non-read operation on a read-only [IDictionary][]&lt;[TKey][], [TItem][]&gt;.

#### Message Format

The format of the exception message is as follows:

```json
"'<dictionary>' cannot be modified because it's read-only.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<dictionary>` is the name of the property containing the read-only dictionary.

#### How to fix

If the dictionary was written directly into the block property using an [expression][], use a dictionary type that is not read-only, such as [Dictionary][]&lt;[TKey][], [TItem]&gt;.

When using a variable, convert the read-only dictionary to a dictionary that can be written to by using the `.ToDictionary(item => item.Key, item => item.Value)` expression like follows:

```CSharp
($)Dictionary.ToDictionary(item => item.Key, item => item.Value);
```

## Remarks

### Known Limitations

None

## See Also
  
### External Documentation

* [System.Collections.Generic.Dictionary<TKey,TItem>][MS Dictionary]
* [System.Collections.Generic.IDictionary<TKey,TItem>][MS IDictionary]

[Dictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.Dictionary.MainDoc">}}
[IDictionary]: {{<url path="Cortex.Reference.DataTypes.Collections.IDictionary.MainDoc">}}
[TKey]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[TItem]: {{< url path="Cortex.Reference.Concepts.Fundamentals.DataTypes.Generics.MainDoc" >}}
[expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.Expressions" >}}

[MS Dictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.Dictionary" >}}
[MS IDictionary]: {{< url path="MSDocs.DotNet.Api.System.Collections.Generic.IDictionary" >}}