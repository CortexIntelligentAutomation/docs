---
title: "Advanced Properties"
linkTitle: "Advanced Properties"
description: "Information regarding properties that do not normally need to be configured but allow for more advanced scenarios."
weight: 300
---

# {{< param title >}}

## Summary

Some [blocks][All Blocks] have advanced properties that do not normally need to be configured but allow for more advanced scenarios (e.g. A block to send emails would have advanced properties for specifying things like cc, bcc, attachments etc.). Advanced properties may have explicit default values or will be initialised with values that allow the [block][] to run without configuration.

All advanced properties are hidden by default and can be shown by [Toggling Advanced Properties][], their values will be used in the [block's][block] execution regardless of whether they are hidden or shown.

## Toggling Advanced Properties

All advanced properties can be shown or hidden using the Show/Hide Advanced Properties button found on the top right of the [Property Editor][]. This button is used to toggle whether properties are shown or hidden.

TODO: Image of Set Item block with timeout (have label showing how to toggle advanced)

## Finding Advanced Properties

A property is defined as advanced within the documentation of a [Block][All Blocks] or [Data Type][].

Information regarding which properties are advanced for a [Block][All Blocks] can be found in the "Properties" section. The table within each property in the relevant documentation will have an "Is Advanced" row stating whether the property is advanced or not.

Information regarding which properties are advanced for a [Data Type][] can be found in the "Remarks" section under "Advanced Properties" in the relevant documentation for that [Data Type][].

## Remarks

### Known Limitations

#### Toggling advanced properties is not persisted between blocks

Currently, when advanced properties are shown when editing a [block][] the advanced toggle state is not persisted when switching between [blocks][block].

In future this limitation may be removed.

#### Toggling advanced properties shows or hides all advanced properties

Currently, it is not possible to show or hide individual advanced properties.

In future this limitation may be removed.

## See Also

### Related Concepts

- [Blocks][]
- [Block Properties][]

### Related Blocks

- [All Blocks][]

### External Documentation

None

[Toggling Advanced Properties]: {{< ref "#toggling-advanced-properties" >}}

[Blocks]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.MainDoc" >}}
[block]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.WhatIsABlock.MainDoc" >}}
[Block Properties]: {{< url "Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.MainDoc" >}}

[Property Editor]: {{< url "Cortex.Guides.Studio.EastPanel.PropertyEditor" >}}

[All Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}

[Data Type]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
