---
title: "A-E"
linkTitle: "A-E"
description: "Terms, words and phrases beginning with the letters A through E."
weight: 10
---

# {{< param title >}}

Terms, words and phrases beginning with the letters A through E.

## A

### Automate

The application of [automation].

### Automation

Automation is a term for techniques, methods, systems or technologies that reduce human intervention in [tasks] and [processes].

## B

### Bit

A bit is the most basic unit of information in computing, and represents a logical state with one of two possible values; most commonly represented as 1 or 0.

See [Wikipedia][Bit (Wikipedia)] for more information.

### Block

Blocks (or [functional blocks]) expose the logic and actions that the [Cortex Evolution] [platform] is able to execute for the [flow developers]; alongside [flows][flow] they are one of the main components used to define how to automate [tasks] and [processes].

For more detailed information about blocks, see [Guides->Cortex Studio->Blocks][TODO].

For a complete list of available blocks deployed with the platform, see [Reference->Blocks].

### Block Property

[Blocks][Block] have block properties (or [properties]) that allow the [flow developers] to configure how the block should behave. E.g. which server to execute a function on.

For more detailed information about configuring blocks using block properties, see [Guides->Cortex Studio->Blocks->Configuring Blocks][TODO].

## C

### C\#

C# (pronounced "see sharp") is a [programming language] developed by Microsoft.

It is natively supported by the [Cortex Evolution] [platform] for using simple [expressions][expression] (i.e. `1 + 1`) and more complex [code] (i.e. `DateTime.Now.AddDays(1)`) within [flows][flow].

C# expressions and code can be entered as the values for [block properties][Block Property] using the [Cortex Studio] [expression editor].

See the official [C# documentation] for more information about C#.

### camelCase

camelCase is a typographical convention in which phrases are written without spaces or punctuation, indicating the separation of words with a single capitalized letter, and the first word starting with a lowercase letter. E.g. "iPhone" and "eBay".

camelCase is often used as a naming convention in programming languages such as [C#].

See also [PascalCase].

### Cast

The process of explicitly converting one [data type] to another.

See [Casting and type conversions (C# Programming Guide)] for a detailed technical explanation of casting in [C#], the [programming language] natively supported by the [Cortex Evolution] [platform] for writing simple [expressions][expression] and more complex [code].

Also see [Explicit Cast] for more information.

### Code

A set of instructions in a computer program.

### Concurrent

At the same time.

### Convert

To change something into a different form. E.g. Change some [text] from [lowercase] to [UPPERCASE].

### Cortex Evolution

The name of the new and current generation of the Cortex [automation] [platform].

### Cortex Gateway

The centralised web-based [portal] for accessing all user applications and tooling in the [Cortex Evolution] [platform].

### Cortex Studio

The web-based integrated development environment ([IDE]) for creating, editing, [debugging], testing and managing [flows][flow] that define the logic and actions required to capture and automate a [task][Tasks] or [process][Processes].

For more detailed information about Cortex Studio, see [Guides->Cortex Studio][TODO].

## D

### Data Type

A data type (or [type]) defines the type of data or values that a [block property] can accept.

For more detailed information about data types, see [Reference->Data Types].

### Debug

The ability for [flow developers] to execute and interact with a [flow] step-by-step from within [Cortex Studio], so that they are able to identify and remove [errors] in the [flow's][flow] logic and actions.

For more detailed information about debugging in Cortex Studio, see [Guides->Cortex Studio->Debugging][TODO].  

### Default Value

The default that is assigned as the value of a [block property] when a new [block] is added to a [flow].

### Dictionary

A [data type] that represents an unordered collection of key-item pairs, where each pair consists of a unique key and it's associated item. Dictionaries are optimised for fast lookup of items using their key.

For more detailed information about dictionaries, see [Reference->Data Types->Dictionaries][TODO].

### Dynamic

A [data type] that indicates that any data type can be used.

For more detailed information about the dynamic data type, see [Reference->Data Types->Dynamic][TODO].

## E

### Empty

Empty indicates that a [data type] has been [initialised] and has a [non-null] value, but the value does not contain any data. E.g. a [string] that contains no characters `""`, or a [list] that contains no items `[]`.

Empty is not the same as [null].

### Error

Something which is inaccurate or incorrect; a mistake.

### Example

An example is intended to show [flow developers] how something works. Examples can be found near the top of every [block's][block] help page. See [examples] for the [Add Text At Beginning] block.

### Execution

When a [request] to start a [flow] is received by the [Cortex Evolution] [platform], an execution is created that represents that instance of the executing flow.

There can be multiple executions of a flow running [concurrently][concurrent].

For more detailed information about executions, see [Guides->Cortex Studio->Debugging->Executions][TODO].

### Exception

An exception represents [errors] that occur during the [execution] of a [flow].

Exceptions are [data types][Data Type] that can be reasoned with during the execution of a flow, in order to handle errors during the [automation] of a [task][Tasks] or [process][Processes].

For a complete list of available [blocks][block] that can be used to handle exceptions, see [Exception Blocks].

For more detailed information about exceptions, see [Reference->Exceptions].

### Explicit Cast

Sometimes, in order to convert one [data type] to another, an "explicit cast" [expression] is required; this is typically needed when information might be lost in the conversion, or when the conversion might not succeed for other reasons.

An example would be converting a [32-bit] [integer] ([Int32]) to a [16-bit] [integer] ([Int16]):

```csharp
Int32 ThirtyTwoBitInteger = 100;
Int16 SixteenBitInteger = (Int16)ThirtyTwoBitInteger;
```

See [Cast expression (C# Reference)] for a detailed technical explanation.

Also see [Cast] for more information.

### Expression

An expression is a combination of [operands] (i.e. [variables], [literals], calls to [methods] and [properties][PropertiesC#] exposed on [data types][Data Type] etc.) and [operators] (i.e. =, +, -, *, / etc.) that can be evaluated by the [Cortex Evolution] [platform] to a single value.

Expressions use the syntax of the [C#] [programming language].

For more detailed information about expressions, see [Guides->Cortex Studio->Expressions][TODO].

### Expression Editor

The Expression Editor is a web-based text editor that allows [flow developers] to use either  simple [expression] or more complex [code] as the value of a [block property].

It is based on the [Monaco Editor] used by [VS Code], and includes a rich set of features including:

* [Syntax Highlighting][TODO]
* [Snippets][TODO]
* [Intellisense][TODO]

For more detailed information about the Expression Editor, see [Guides->Cortex Studio->Expression Editor][TODO].

[Automate]: {{< ref "#automate" >}}
[Automation]: {{< ref "#automation" >}}
[Block]: {{< ref "#block" >}}
[Block Property]: {{< ref "#block-property" >}}
[C#]: {{< ref "#c-1" >}}
[Cast]: {{< ref "#cast" >}}
[Code]: {{< ref "#code" >}}
[Concurrent]: {{< ref "#concurrent" >}}
[Cortex Evolution]: {{< ref "#cortex-evolution" >}}
[Cortex Studio]: {{< ref "#cortex-studio" >}}
[Data Type]: {{< ref "#data-type" >}}
[Debugging]: {{< ref "#debug" >}}
[Errors]: {{< ref "#error" >}}
[Execution]: {{< ref "#execution" >}}
[Explicit Cast]: {{< ref "#explicit-cast" >}}
[Expression]: {{< ref "#expression" >}}
[Expression Editor]: {{< ref "#expression-editor" >}}

[Reference->Blocks]: {{< url "Cortex.Reference.Blocks.MainDoc" >}}
[Exception Blocks]: {{< url "Cortex.Reference.Blocks.Exceptions.MainDoc" >}}
[Add Text At Beginning]: {{< url "Cortex.Reference.Blocks.Text.Add.AddTextAtBeginning.MainDoc" >}}

[Examples]: {{< url "Cortex.Reference.Blocks.Text.Add.AddTextAtBeginning.Examples" >}}

[Reference->Data Types]: {{< url "Cortex.Reference.DataTypes.MainDoc" >}}
[Reference->Exceptions]: {{< url "Cortex.Reference.Exceptions.MainDoc" >}}

[Flow]: {{< url "Cortex.Reference.Glossary.F-J.Flow" >}}
[Flow Developers]: {{< url "Cortex.Reference.Glossary.F-J.FlowDeveloper" >}}
[Functional Blocks]: {{< url "Cortex.Reference.Glossary.F-J.FunctionalBlock" >}}
[Initialised]: {{< url "Cortex.Reference.Glossary.F-J.Initialised" >}}
[Integer]: {{< url "Cortex.Reference.Glossary.F-J.Integer" >}}
[Int16]: {{< url "Cortex.Reference.Glossary.F-J.Int16" >}}
[Int32]: {{< url "Cortex.Reference.Glossary.F-J.Int32" >}}
[IDE]: {{< url "Cortex.Reference.Glossary.F-J.IDE" >}}
[Literals]: {{< url "Cortex.Reference.Glossary.K-O.Literal" >}}
[LowerCase]: {{< url "Cortex.Reference.Glossary.K-O.LowerCase" >}}
[Methods]: {{< url "Cortex.Reference.Glossary.K-O.Method" >}}
[Non-Null]: {{< url "Cortex.Reference.Glossary.K-O.NonNull" >}}
[Null]: {{< url "Cortex.Reference.Glossary.K-O.Null" >}}
[Operands]: {{< url "Cortex.Reference.Glossary.K-O.Operand" >}}
[Operators]: {{< url "Cortex.Reference.Glossary.K-O.Operator" >}}
[PascalCase]: {{< url "Cortex.Reference.Glossary.P-T.PascalCase" >}}
[Platform]: {{< url "Cortex.Reference.Glossary.P-T.Platform" >}}
[Portal]: {{< url "Cortex.Reference.Glossary.P-T.Portal" >}}
[Processes]: {{< url "Cortex.Reference.Glossary.P-T.Process" >}}
[Programming Language]: {{< url "Cortex.Reference.Glossary.P-T.ProgrammingLanguage" >}}
[Properties]: {{< url "Cortex.Reference.Glossary.P-T.PropertyBlock" >}}
[PropertiesC#]: {{< url "Cortex.Reference.Glossary.P-T.PropertyCSharp" >}}
[Request]: {{< url "Cortex.Reference.Glossary.P-T.Request" >}}
[Tasks]: {{< url "Cortex.Reference.Glossary.P-T.Task" >}}
[Text]: {{< url "Cortex.Reference.Glossary.P-T.Text" >}}
[Type]: {{< url "Cortex.Reference.Glossary.P-T.Type" >}}
[UpperCase]: {{< url "Cortex.Reference.Glossary.U-Z.UpperCase" >}}
[Variables]: {{< url "Cortex.Reference.Glossary.U-Z.Variable" >}}
[16-bit]: {{< url "Cortex.Reference.Glossary.0-9.16Bit" >}}
[32-bit]: {{< url "Cortex.Reference.Glossary.0-9.32Bit" >}}

[Casting and type conversions (C# Programming Guide)]: {{< url "MSDocs.CSharp.Casting" >}}
[Cast expression (C# Reference)]: {{< url "MSDocs.CSharp.CastExpression" >}}
[C# documentation]: {{< url "MSDocs.CSharp.MainDoc" >}}
[List]: {{< url "MSDocs.DotNet.Api.System.Collections.Generic.List" >}}
[String]: {{< url "MSDocs.DotNet.Api.System.String" >}}

[Monaco Editor]: {{< url "MSGitHub.MonacoEditor.MainDoc" >}}

[VS Code]: {{< url "VisualStudio.Code.MainDoc" >}}

[Bit (Wikipedia)]: {{< url "Wikipedia.Bit" >}}