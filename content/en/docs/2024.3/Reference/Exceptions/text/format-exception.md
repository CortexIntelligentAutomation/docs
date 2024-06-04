---
title: "FormatException"
linkTitle: "FormatException"
description: "The exception thrown when a format template string is invalid."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Text.FormatException)</p>
{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a format template string is invalid.

## Reasons

### Invalid format template

The [format template][Format Templates] provided could not be parsed.

#### Message Format

The format of the message can be one of the following:

```json
"The largest Format Parameter in '<format-template-property>' is <largest-format-parameter>, therefore, '<values-property>' must contain at least <expected-number-of-values> items, but only contains <number-of-values>.
Text:
<format-template-value>
Values:
<values-value>
Please click the HelpLink for more information on how to fix this."
```

or

```json
"'<format-template-property>' contains at least one Format Parameter larger than {0}, therefore, it cannot be formatted.
Text:
<format-template-value>
Please click the HelpLink for more information on how to fix this."
```

or

```json
"'<format-template-property>' contains negative Format Parameter(s), therefore, it cannot be formatted.
Text:
<format-template-value>
Please click the HelpLink for more information on how to fix this."
```

where:

* `<format-template-property>` is the name of the property containing the format template provided for the block which threw this exception; see [Format Text With Value][Format Text With Value Format Template] or [Format Text With Values][Format Text With Values Format Template] for more information.
* `<format-template-value>` is the value of the format template provided; see [Format Text With Value][Format Text With Value Format Template] or [Format Text With Values][Format Text With Values Format Template] for more information.
* `<largest-format-parameter>` is the value of the largest unique format specifier provided (i.e. if the format template is `"{0} {2} {1} {3}`, this will be `3`).
* `<expected-number-of-values>` is the number of values expected to be provided (i.e. if the format template is `"{0} {2} {1} {3}`, this will be `4`).
* `<values-property>` is the property containing the values provided to insert into the format template.
* `<values-value>` is the list of values provided to insert into the format template.

#### How to fix

* Ensure that the list of values provided contains at least `<expected-number-of-values>` values (e.g. for a format template of `"{0} {1} {2} {3} {4}"`, there should be at least `5` values provided).
* Ensure that the format template provided does not have more than 1 format parameter when using the [Format Text With Value][] block.
* Ensure that the format template provided does not contain any negative format specifiers (e.g. `{-1}`, `{-5}`, `{-1000}`, etc).

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[Format Text With Value]: {{<url path = "Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.MainDoc">}}
[Format Text With Value Format Template]: {{<url path="Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValue.FormatTemplate">}}
[Format Text With Values]: {{<url path = "Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.MainDoc">}}
[Format Text With Values Format Template]: {{<url path = "Cortex.Reference.Blocks.Text.FormatText.FormatTextWithValues.FormatTemplate">}}

[Working With Text Formatting]: {{<url path = "Cortex.Reference.Concepts.WorkingWith.Text.Formatting.MainDoc">}}
[Format Specifiers]: {{<url path = "Cortex.Reference.Concepts.WorkingWith.Text.Formatting.FormatSpecifiers">}}
[Format Templates]: {{<url path = "Cortex.Reference.Concepts.WorkingWith.Text.Formatting.FormatTemplates">}}
