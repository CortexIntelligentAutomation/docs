---
title: "Add Text After Index"
linkTitle: "Add Text After Index"
description: "Adds text to another text after a given index."
---

![Icon](/blocks/text-add-block-icon.png)

# {{< param title >}}

<p class="namespace">(Cortex.Blocks.Text.Add.AddTextAfterIndexBlock)</p>

## Description

Adds [Text To Add][TextToAdd Property] to another [Text][Text Property] after the given [Index][Index Property].

## Examples

### Add Text To Add to another Text after the given Index

This example will add `"|"` after `"A"` (which is at index `0`) in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Text To Add][TextToAdd Property] | `($)TextToAdd`, with value `"\|"` | `($)TextToAdd` is a variable of type [String][] |
| [Index][Index Property] | `($)Index`, with value `0` | `($)Index` is a variable of type [Int32][] |

#### Result

`"A"` is at index `0` in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`. Therefore, adding `"|"` after index `0` results in the variable `($)Text` being updated to the following:

```json
"A|BCDEFGHIJKLMNOPQRSTUVWXYZ"
```

***

### Add null or empty Text To Add to another Text after the given Index

This example will try to add `null` or `""` after `"A"` (which is at index `0`) in `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`.

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Text][Text Property] | `($)Text`, with value `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `($)Text` is a variable of type [String][] |
| [Text To Add][TextToAdd Property] | `($)TextToAdd`, with value `null` or `""` | `($)TextToAdd` is a variable of type [String][] |
| [Index][Index Property] | `($)Index`, with value `0` | `($)Index` is a variable of type [Int32][] |

#### Result

Adding `null` or `""` performs no operation as there is nothing to add, so the variable `($)Text` will remain as follows:

```json
"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

***

## Properties

### Text

The [Text][Text Property] where the [Text To Add][TextToAdd Property] is added.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [InputOutput][] |
| Default Value | `($)Text` with value `""` |

### Text To Add

The [Text To Add][TextToAdd Property] to the [Text][Text Property] after the given [Index][Index Property].

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)TextToAdd` with value `""` |

### Index

The [Index][Index Property] to add the [Text To Add][TextToAdd Property] after.  

For information about what an index is, please see [Indexes][].  

| | |
|--------------------|---------------------------|
| Data Type | [Int32][] |
| Property Type | [Input][] |
| Default Value | `($)Index` with value `0` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [PropertyValueOutOfRangeException][] | Thrown when the [Text][Text Property] property is `null` or empty (i.e. `""`). |
| | Thrown when the [Index][Index Property] property is less than zero or greater than the length of [Text][Text Property] - `1`. |

## Remarks

### Null or empty Text To Add

If [Text To Add][TextToAdd Property] is `null` or empty (i.e. `""`) nothing is added to [Text][Text Property]. See [Example][NullOrEmptyTextToAdd Example] above.

### Immutable String data type

The [String][] data type used to represent [Text][Text Property] is immutable, which means it is read-only and cannot be changed once created.

To overcome this, this block creates a new [String][] which has the [Text To Add][TextToAdd Property] added in the correct place and re-assigns it to the variable specified in the [Text][Text Property] property.  

[Text Property]: {{< ref "#text" >}}
[TextToAdd Property]: {{< ref "#text-to-add" >}}
[Index Property]: {{< ref "#index" >}}

[NullOrEmptyTextToAdd Example]: {{< ref "#add-null-or-empty-text-to-add-to-another-text-after-the-given-index" >}}

[Indexes]: {{< url "Cortex.Reference.Concepts.Indexes.MainDoc" >}}
[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}
[InputOutput]: {{< url "Cortex.Reference.Concepts.PropertyType.InputOutput" >}}
[PropertyValueOutOfRangeException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}

[Int32]: {{< url "Cortex.Reference.DataTypes.MostCommon.Int32" >}}
[String]: {{< url "Cortex.Reference.DataTypes.MostCommon.String" >}}
