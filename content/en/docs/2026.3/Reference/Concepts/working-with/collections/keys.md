---
title: "Keys"
linkTitle: "Keys"
description: "Information related to working with Keys."
---

# {{% param title %}}

{{< workinprogress >}}

## Summary

TODO:

- Overview/summary
- What is a Key?
- How are they accessed?
- The type of the Key depends on the data type
- Keys are unique
- Keys cannot be null
- If you are using C# syntax, then the equality is done using reference equality for reference types, and value equality for value types
- If you are using Dictionary blocks, then the equality is done using reference equality for reference types and falls back to value equality if no reference was found, and value equality for value types

## Accessing an item using Keys

[Keys][] can be used in the [Expression Editor][] to access items in a Collection.

## Remarks

### Known Limitations

#### Complex Keys do not show sho correctly in the Variable Details Viewer

Currently, if a Dictionary is shown in the Variable Details Viewer and contains Complex Data types as its keys, the data within the variable will not be displayed correctly.

In the future this limitation may be removed.

## See Also

### Related Concepts

TODO

### Related Data Types

TODO

### Related Blocks

TODO

### External Documentation

TODO

[Expression Editor]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Keys]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.IndexExpressions" >}}
