---
title: "Regex Syntax"
linkTitle: "Regex Syntax"
description: "Information regarding .Net regex syntax."
---

# {{% param title %}}

<img src="/images/work-in-progress.jpg">

## Summary

TODO:

- What is regex matching?
  - how is it different to contains or pattern matching
- https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions
- https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference
- Common regex expressions
  - urls, emails, etc
  - https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-example-scanning-for-hrefs
  - and subsequent links
- State that we specify a timeout to prevent dos attacks
- Talk about no current support for old g2 syntax - may add in future

TODO: Options

- https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options
- https://docs.microsoft.com/en-us/dotnet/standard/base-types/miscellaneous-constructs-in-regular-expressions

Links:

- Regex Best Practices - https://docs.microsoft.com/en-us/dotnet/standard/base-types/best-practices

### Character Classes

TODO:

- Include information about any builtin snippets for each regex

A character class matches any of a set of characters. Character classes include the language elements listed in the following table.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `[characters]` | Matches any character found in characters. | `[oz]` | o in Cortex |
| `[^characters]` | Matches any character not found in characters. | `[^oz]` | C, r, t, e, x in Cortex |
| `[first-last]` | Matches any character in the range of characters from first to last. | `[A-C]` | C in Cortex |
| `.` | Wildcard. Matches any character except \n. | `C.r` | Cor in Cortex |
| `\p{category}` | Matches any character in a category of Unicode characters, specified by category. To see what you can use for category, please check the supported Unicode general categories and the supported named blocks. | `\p{Lu}` | C in Cortex |
| `\P{category}` | Matches any character not in a category of Unicode characters, specified by category. To see what you can use for category, please check the supported Unicode general categories, and the supported named blocks. | `\P{Lu}` | o, r, t, e, x in Cortex |
| `\w` | Matches any letter, decimal digit, or an underscore. | `\w` | C, o, r, t, e, x in Cortex ! |
| `\W` | Matches any character except a letter, decimal digit, or an underscore. | `\W` | ! in Cortex ! |
| `\s` | Matches any white-space character. | `\w\s` | x  in Cortex ! |
| `\S` | Matches any character except a white-space character. | `\s\S` |  ! in Cortex ! |
| `\d` | Matches any decimal digit. | `\d` | 7 in Cortex 7! |
| `\D` | Matches any character except a decimal digit. | `\D` | C, o, r, t, e, x,  , ! in Cortex 7! |

https://docs.microsoft.com/en-us/dotnet/standard/base-types/character-classes-in-regular-expressions#SupportedUnicodeGeneralCategories
https://docs.microsoft.com/en-us/dotnet/standard/base-types/character-classes-in-regular-expressions#supported-named-blocks

### Character Escapes

TODO:

- Include information about any builtin snippets for each regex

The following table lists the character escapes supported by regular expressions in .NET.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `\r` | Matches a carriage return. | `\r\n(\w+)` | \r\nCortex in \r\nCortex with\na new line |
| `\n` | Matches a newline. | `\r\n(\w+)` | \r\nCortex in \r\nCortex with\na new line |
| `\t` | Matches a tab. | `(\w+)\t` | Cortex1\t, Cortex2\t in Cortex1\tCortex2\t |
| `[\b]` | Matches a backspace. Note that it must be enclosed in brackets to have this meaning. | `[\b]{3,}` | \b\b\b\b in \b\b\b\b |
| `\f` | Matches a form feed. | `[\f]{2,}` | \f\f\f in \f\f\f |
| `\e` | Matches an escape. | `\e` | \x001B in \x001B |
| `\v` | Matches a vertical tab. | `[\v]{2,}` | \v\v\v in \v\v\v |
| `\a` | Matches the bell character. | `\a` | \u0007 in Cortex '\u0007' |
| `\octal` | Matches a character, where octal is the octal representation of that character. | `\w\040\w` | x C in Cortex Cortex |
| `\xhex` | Matches a character, where hex is the two-digit hexadecimal representation of that character. | `\w\x20\w` | x C in Cortex Cortex |
| `\uunicode` | Matches a Unicode character, where unicode is the four digit hexadecimal representation of that Unicode character. | `\w\u0020\w` | x C in Cortex Cortex |
| `\ccharacter` | Matches an ASCII control character specified by character. | `\cC` | \x0003 in \x0003 |

### Quantifiers

TODO:

- Include information about any builtin snippets for each regex

A quantifier specifies how many instances of the previous element (which can be a character, a group, or a character class) must be present in the input string for a match to occur. Quantifiers include the language elements listed in the following table.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `*` | Matches previous element zero or more times. | `co*rtex` | crtex, cortex, coortex, coooortex in crtex cortex coortex coooortex |
| `+` | Matches previous element one or more times. | `co+rtex` | cortex, coortex, coooortex in crtex cortex coortex coooortex |
| `?` | Matches previous element zero or one times. | `co?rtex` | crtex, cortex in crtex cortex coortex coooortex |
| `{n}` | Matches previous element exactly n times. | `co{2}rtex` | coortex in crtex cortex coortex coooortex |
| `{n,}` | Matches previous element at least n times. | `co{2,}rtex` | coortex, coooortex in crtex cortex coortex coooortex |
| `{n,m}` | Matches previous element at least n times and at most m times. | `co{1,2}rtex` | cortex, coortex in crtex cortex coortex coooortex |
| `*?` | Matches previous element zero or more times, but as few times as possible. | `cort(ex)*?` | cort in cortexexex |
| `+?` | Matches previous element one or more times, but as few times as possible. | `cort(ex)+?` | cortex in cortexexex |
| `??` | Matches previous element zero or one time, but as few times as possible. | `cort(ex)??` | cort in cortexexex |
| `{n,}?` | Matches previous element at least n times, but as few times as possible. | `cort(ex){2,}?` | cortexex in cortexexex |
| `{n,m}?` | Matches previous element at least n times and at most m times, but as few times as possible. | `cort(ex){1,3}?` | cortex in cortexexex |

### Anchors

TODO:

- Include information about any builtin snippets for each regex

Anchors cause a match to succeed or fail depending on the current position in the string.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `^` | Matches the beginning of the input. | `^\w{3}` | Cor in Cortex |
| `$` | Matches the end of the input, or the point before a final \n at the end of the input. | `\w{3}$` | tex in Cortex |
| `\A` | Matches the beginning of the input. Identical to ^, except it is unaffected by the multi-line option. | `\A\w{3}` | Cor in Cortex |
| `\z` | Matches the end of the input, without exception. | `\w{3}\z` | tex in Cortex |
| `\Z` | Matches the end of the input, or the point before a final \n at the end of the input. Identical to $, except it is unaffected by the multi-line option. | `\w{3}\Z` | tex in Cortex |
| `\G` | Matches the point that the previous match ended. Used to find contiguous matches. | `\G\D*\s` | Cortex , reads  in Cortex reads 7 files |
| `\b` | Matches any word boundary. Specifically, any point between a \w and a \W. | `\b\w+\s\w+\b` | Cortex reads, Cortex writes in Cortex reads Cortex writes |
| `\B` | Matches any point that is not a word boundary. Specifically, any point not between a \w and a \W. | `\Brt\w*\b` | rtex, rtex in Cortex reads Cortex writes |

### Grouping Constructs

TODO:

- Include information about any builtin snippets for each regex

Grouping constructs delineate sub-expressions of a regular expression and typically capture sub-strings of an input string. Grouping constructs include the language elements listed in the following table.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `(subpattern) `| Captures subpattern as an unnamed group. | `(\w)\1` | oo in Coortex |
| `(?<name>subpattern)` | Captures subpattern as a named group specified by name. | `(?<double>\w)\k<double>` | oo in Coortex |
| `(?<name-previous>subpattern)` | Balancing group definition. This allows nested constructs to be matched, such as parentheses or HTML tags. The previously defined group to balance against is specified by previous. Captures subpattern as a named group specified by name, or name can be omitted to capture as an unnamed group. | `(((?<open><span>)[^<]*)+([^<]*(?<close-open></span>))+)+(?(open)(?!))` | &lt;span&gt;Cortex this is included&lt;/span&gt;, &lt;span&gt;Cortex this is included too&lt;/span&gt; in not included &lt;span&gt;Cortex this is included&lt;/span&gt; not included either &lt;span&gt;Cortex this is included too&lt;/span&gt; |
| `(?:subpattern)` | Non-capturing group. Allows the use of parentheses without subpattern being captured into a group. | `Cortex\s(?:include)?` | Cortex include, Cortex  in Cortex include Cortex not include |
| `(?enabled-disabled:subpattern)` | Allows subpattern to be matched with different options than the rest of the pattern. Any inline option characters in enabled or disabled will enable or disable specific options, respectively. To see what inline option characters are available, please check the regular expressions options. | `(?i:c\|v)(ortex)` | cortex, Cortex, Vortex in cortex Cortex Vortex CORTEX |
| `(?=subpattern)` | Zero-width positive look-ahead assertion. Continues matching only if subpattern matches on the right. | `\w+(?=ex\b)` | Cort, Vort in Cortex Vortex Balloon |
| `(?!subpattern)` | Zero-width negative look-ahead assertion. Continues matching only if subpattern does not match on the right. | `\b\w+\.(?!exe)\w+\b` | cortex.jpg, cortex.html in cortex.jpg cortex.html .*.html cortex.exe |
| `(?<=subpattern)` | Zero-width positive look-behind assertion. Continues matching only if subpattern matches on the left. | `(?<=\(\$\))\w+` | variable, 22 in ($)variable ($)22 ($)-- |
| `(?<!subpattern)` | Zero-width negative look-behind assertion. Continues matching only if subpattern does not match on the left. | `\b\w(?<![aeiou])\w*` | Cortex, words, which, does, not, start, with, vowel, like in Cortex words which does not start with a vowel like all |
| `(?>subpattern)` | Prevents backtracking over subpattern, which can improve performance. | `[cv](?>o+r+)` | cor, coor, vor in cortex coortex vortex gortex |

### Back-reference Constructs

TODO:

- Include information about any builtin snippets for each regex

A back-reference allows a previously matched sub-expression to be identified subsequently in the same regular expression. The following table lists the back-reference constructs supported by regular expressions in .NET.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `\number` | Matches the value of a previously captured group, specified by number. | `\b(\w)\w*\1\b` | xcortex, that in Finds all words like xcortex that start and end with the same letter |
| `\k<name>` | Matches the value of a previously captured named group, specified by name. | `(?<punctuation>\p{P})\w+\k<punctuation>` | !cortex!, ?cortex? in !cortex! ?cortex? XcortexX |

### Alternation Constructs

TODO:

- Include information about any builtin snippets for each regex

Alternation constructs changes a regular expression to enable either/or matching. These constructs include the language elements listed in the following table.

| Syntax | Description | Pattern | Matches |
|---|---|---|---|
| `\|` | Functions as a logical or. Matches any elements it separates. | `(c\|v)ortex` | cortex, vortex in cortex vortex xortex |
| `(?(subpattern)yes\|no)` | Treats subpattern as a zero-width assertion to check if it matches. If so, attempts to match with the yes subpattern. Otherwise, tries the no subpattern. The \|no part is optional. | `\b(?(\w+tez\b)\w{3}\|cortex)` | cortex, cor in cortex cortez vortex |
| `(?(group)yes\|no)` | Checks if a previously defined group was successfully captured, specified by group, which can be a number or a name for a named group. If so, attempts to match with the yes subpattern. Otherwise, tries the no subpattern. The \|no part is optional. | `(?(<quoted>\(\$\)))\w+\|'\w+'` | cortex, 'cortex' in ($)cortex 'cortex' |

### Substitutions

TODO:

- Include information about any builtin snippets for each regex

Substitutions are regular expression language elements supported in replacement patterns.

| Syntax | Description | Pattern | Replacement | Result |
|---|---|---|---|---|
| `$number` | Substitutes the value of a group, specified by number. | `\b(\w+)(\s)(\w+)\b` | `$3$2$1` | Cortex Great becomes Great Cortex |
| `${name}` | Substitutes the value of a named group, specified by name. | `\b(?<word1>\w+)(\s)(?<word2>\w+)\b` | `${word2} ${word1}` | Cortex Great becomes Great Cortex |
| `$$` | Substitutes the $ character. | `\b(dollar)` | `$$` | (dollar)name becomes ($)name |
| `$&` | Substitutes the entire match. | `\w+` | `\*\*$&\*\*` | Cortex becomes \*\*Cortex\*\* |
| ``$` `` | Substitutes all input text found before the match. | `#+` | ``$` `` | Co##rtex becomes CoCortex |
| `$'` | Substitutes all input text found after the match. | `#+` | `$'` | Cort##ex becomes Cortexex |
| `$+` | Substitutes the last group captured. | `Co(r)` | `$+` | CoCortex becomes Cortex |
| `$_` | Substitutes the entire input. | `\w+?` | `$_`  | Cortex becomes Cortex Cortex Cortex Cortex Cortex Cortex  |

## Remarks

### Known Limitations

TODO

## See Also

### Related Concepts

TODO

### Related Data Types

TODO

### Related Blocks

TODO: List blocks which support using regex

TODO: All blocks which support regex should link back here from the properties that support it

### External Documentation

TODO
