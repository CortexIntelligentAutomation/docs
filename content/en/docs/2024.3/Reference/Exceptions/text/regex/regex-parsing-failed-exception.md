---
title: "RegexParsingFailedException"
linkTitle: "RegexParsingFailedException"
description: "The exception thrown when a property is provided with an invalid regex value."
---

# {{% param title %}}

<p class="namespace">(Cortex.Exceptions.Text.Regex.RegexParsingFailedException)</p>

{{% alert type="information" title="Information" %}}Improvements to this page are planned for the future.{{% /alert %}}

## Description

The exception thrown when a property is provided with an [invalid regex value][regex].

## Reasons

### Single regex pattern failed to parse

A regex pattern in the property value failed to parse successfully because it was an invalid regex, e.g. `"*"`.

#### Message Format

The format of the exception message is as follows:

```json
"'<regex-property>' contains regex pattern \"<invalid-pattern>\" which could not be parsed successfully. Please see the 'RegexParseExceptions' property for details on why the regex failed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<regex-property>` is the name of the property containing the invalid regex pattern.
* `<invalid-pattern>` is the regex pattern that is invalid.

#### How to fix

Provide a valid regex value for the property; for help with valid regex syntax, please see [Working with Regex][regex].

### Multiple regex patterns failed to parse

Multiple regex patterns in the property value failed to parse successfully because they were invalid regexes, e.g. `"*"`.

#### Message Format

The format of the exception message is as follows:

```json
"'<regexes-property>' contains one or more regex patterns which could not be parsed succesfully. Please see the 'RegexParseExceptions' property for details on why each regex failed.
Please click the HelpLink for more information on how to fix this."
```

where:

* `<regexes-property>` is the name of the property containing multiple invalid regex patterns.

#### How to fix

Provide valid regexes for all the regexes which failed to parse successfully, which can be seen and examined in the `RegexParseExceptions` property; for help with valid regex syntax, please see [Working with Regex][regex].

## Remarks

### Known Limitations

None

## See Also

### External Documentation

None

[regex]: {{<url path="Cortex.Reference.Concepts.WorkingWith.Text.RegexSyntax.MainDoc">}}