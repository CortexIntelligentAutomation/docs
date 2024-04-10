---
title: "RegexParsingFailedException"
linkTitle: "RegexParsingFailedException"
description: "The exception thrown when a property is provided with invalid regex syntax."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Text.Regex.RegexParsingFailedException)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a property is provided with invalid [regex syntax][regex].

## Reasons

### Single regex pattern failed to parse

A regex pattern in the property value failed to parse successfully due to invalid [regex syntax][regex] (e.g. `"*"`).

#### Message Format

The format of the exception message is as follows:

```json
"'<regex-property-name>' contains regex pattern \"<invalid-pattern>\" which could not be parsed successfully. Please see the 'RegexParseExceptions' property for details on why the regex failed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<regex-property-name>` is the name of the property containing the regex pattern that failed to parse.
* `<invalid-pattern>` is the pattern with the invalid regex syntax.

#### How to fix

Provide valid [regex syntax][regex], for the regex pattern seen in the `RegexParseExceptions` property.

### Multiple regex patterns failed to parse

Multiple regex patterns in the property value failed to parse successfully due to invalid [regex syntax][regex] (e.g. `"*"`).

#### Message Format

The format of the exception message is as follows:

```json
"'<regex-property-name>' contains one or more regex patterns which could not be parsed succesfully. Please see the 'RegexParseExceptions' property for details on why each regex failed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<regex-property-name>` is the name of the property containing the regex patterns that failed to parse.

#### How to fix

Provide valid [regex syntax][regex], for each regex pattern seen in the `RegexParseExceptions` property.

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[regex]: {{<url path="Cortex.Reference.Concepts.WorkingWith.Text.RegexSyntax.MainDoc">}}