---
title: "Literal Editor"
linkTitle: "Literal Editor"
description: "Information regarding using the Literal Editor."
weight: 1
---

# {{% param title %}}

{{< workinprogress >}}

## Summary

The Literal Editor is a property editor used to enter parameter values for variety of different data types; it is particularly useful for entering parameter data associated with complex objects.

When constructing a complex object, the Literal Editor provides for a set of sub-editors, dependent on the data type of the object being constructed, allowing for the values of individual parameters to be entered. Each sub-editor type may be changed to either a Literal Editor, Expression Editor, or Variable Editor

{{< figure src="/images/Literal Editor.png" >}}

The example above shows the creation of a ClientCredentials object using the Literal Editor. The two parameters of the ClientCredentials object, clientId and clientSecret, are both initially associated with Expression Editors, which may be individually changed as needed.

## Available Types

A Literal Editor can construct a variety of Basic or Complex object data types, dependent on the block's property being edited; the Literal Editor does not support the construction of Collection data types.

### Basic Types

When constructing a Basic data type, e.g., String, Int32, or Boolean, the Literal Editor consists of a single editor field with no sub-editors. The parameter value must be entered literally, for example, a text string should be entered without the surrounding double inverted commas that would be necessary with an Expression editor.

If a Boolean object is being created using the Literal Editor, the value is selected from a dropdown.

{{< figure src="/images/Literal Editor - Basic Types.png" >}}

The example above shows the creation of a String object using the Literal Editor. The Value parameter is simply the text string being formed.

### Complex Types

When constructing a Complex object data type, e.g., HttpRequest, TimeSpan, etc., the Literal Editor will display one or more sub-editors to enable the individual configuration of different parameters needed for the construction of the Complex object. Each of these parameter editors may be individually changed to a different type of editor (Literal, Expression, or Variable Editor).

If a parameter editor is changed to a Literal Editor, additional sub-parameters and associated sub-editors for that parameter may be displayed, dependent on the parameter being configured. If the values of a parameter are constrained, for example, a Boolean or Enum, the parameter editor will be displayed as a dropdown.

{{< figure src="/images/Literal Editor - Complex Types.png" >}}

### Switching Type

When the Literal Editor is selected for the configuration of a block's property, it will initially default to one of the applicable data types for that property. The currently selected object data type (CurrentType) may be displayed by hovering over the property name.

{{< figure src="/images/Literal Editor - CurrentType.png" >}}

The CurrentType may be changed to construct a different object by clicking on the ellipsis to the right of the property name. This will enable the Literal Type editor in place of the property name, showing the CurrentType. Deleting all the CurrentType text in the Literal Type editor will display a dropdown, listing all the object types that can be configured for this property.

{{< figure src="/images/Literal Editor - List Types.png" >}}

The objects displayed in the drop-down menu may be filtered by entering text in the Literal Type editor field, with only those objects forming a case-insensitive partial text match being displayed.

Click on an object type from the dropdown menu to select it as the CurrentType.

{{< figure src="/images/Literal Editor - Switch Type.png" >}}

When a different object type is selected, a new set of set editors will be displayed to reflect the parameters for this object.

{{< figure src="/images/Literal Editor - Different Editors.png" >}}

## Remarks

### Known Limitations

* There is no support in the Literal Editor for Collection type objects or objects that have constructors with no parameters.

## See Also

### Related Concepts

TODO

### Related Blocks

TODO

### Related Data Types

TODO

### External Documentation

TODO
