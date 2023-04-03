---
title: "F-J"
linkTitle: "F-J"
description: "Terms, words and phrases beginning with the letters F through J."
weight: 20
---

# {{% param title %}}

Terms, words and phrases beginning with the letters F through J.

## F

### Fast Track

A Fast Track release follows a quick release cycle, allowing access to the latest features and functionality of Cortex.

### File

A file is an object on a computer that stores data.

Different files can store different types of data (i.e. a text file, `.txt`, stores textual data; an executable file, `.exe` stores data required for executing an application).

### Flow

A flow is an object in [Cortex Studio][] that contains the logic and actions (in the form of [blocks][]) that the [Cortex][] [platform][] is able to execute for the [flow developers][].

For more detailed information about flows, see [Fundamentals > Flows][].

### Flow Developer

A flow developer is a user that has been granted permissions to develop [flows][] in [Cortex Studio][].

For more detailed information about granting permissions to develop [flows][], see [Cortex Studio > Authorisation][].

### Folder

A folder (or directory) is an object on a computer that contains [files][].

Folders can contain different types of file and can also contain other folders.

### Format Parameter

See [Text > Format Parameters][].

### Format Specifier

See [Text > Format Specifiers][].

### Format Template

See [Text > Format Templates][].

### Functional Block

See [block][blocks].

## G

### Generics

Generic means not specific to a particular [data type][].

An example of a generic data type is [List&lt;TItem&gt;][] where TItem is a placeholder which indicates it can be initialised with any data type, such as:

- List&lt;int&gt; and List&lt;string&gt; which are [homogenous][] lists that can only contain integers and strings respectively
- List&lt;object&gt; and List&lt;dynamic&gt; are [heterogenous][] lists that can contain multiple data types

### Gmail

Gmail is a free web-based email service provided by Google.

### GUI

GUI stands for "Graphical User Interface". It is used to graphically display information and represent user interactions with a system, without the need for typing commands.

## H

### Heterogenous

Consists of dissimilar or diverse constituents.

Heterogenous collections can contain multiple [data types][data type] (e.g. [List&lt;dynamic&gt;][List&lt;TItem&gt;]).

Collections that can only contain a single data type are known as [homogenous][].

### Homogenous

Consists of the same or a similar constituents.

Homogenous collections can only contain a single [data type][] (e.g. [List&lt;int&gt;][List&lt;TItem&gt;]).

Collections that can contain multiple data types are known as [heterogenous][].

### HTML Entity

An HTML entity is a piece of text that begins with an ampersand (i.e. `&`) and ends with a semicolon (i.e. `;`). Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard.

See [WHATWG][WHATWG entity list] for a full list of HTML4 and HTML5 Entities.

### Human-in-the-Loop

Human-in-the-Loop or HITL allows people to interact with automated systems and processes, affecting the direction and functionality of the automated systems or process.

## I

### IDE

IDE or Integrated Development Environment is a software application such as [Cortex Studio][], that allows users to create a program or application.

In [Cortex Studio][], the users are called [flow developers][], and the programs are called [flows][].

Some common and popular examples of IDE's include:

* Visual Studio
* VSCode
* Eclipse

### IMAP

Internet Messaging Access Protocol (IMAP) in an internet protocol used by email clients to retrieve email messages from a mail server.

### Immutable

Unable to be changed.

### Implicit Cast

The process of an application converting one [data type][] to another, without requiring an explicit instruction from the developer.

For one [data type][] to be able to be implicitly cast to another, there should be no data loss during the conversion.

An example would be converting a [16-Bit][] [integer][] ([Int16][]) to a [32-Bit][] [integer][] ([Int32][]), as the entire range of the 16-bit integer will fit into a 32-bit integer:

```csharp
Int16 SixteenBitInteger = 100;
Int32 ThirtyTwoBitInteger = SixteenBitInteger;
```

See [Explicit Cast][] for an example of where data loss would occur during conversion, and would therefore require an explicit instruction from the developer.

See [Casting and type conversions (C# Programming Guide)][] for a detailed technical explanation of casting in [C#][], the [programming language][] natively supported by the [Cortex][] [platform][] for writing simple [expressions][] and more complex [code][].

### Index

An [Index][Collections > Indexes] is used to access an [item][] in a [list][] and relates to the position of the item in the list.

Indexes are 0 based (e.g. The first item in a list is at index 0, the second item is at index 1, etc.).

See [Collections > Indexes][].

### Intellisense

IntelliSense is a general term for various [code][] editing features such as code completion and [snippets][].

### Initialised

A [variable][] is initialised when its value has been set for the first time.

### Input

Input properties are used to provide values to a [block][blocks]. These properties are used in the block's execution.

See [Block Properties > Input Properties][].

### InputOutput

InputOutput properties are used to provide values to a [block][blocks]. These properties are used, updated and saved back to a variable during the block's execution.

See [Block Properties > InputOutput Properties][].

### Integer

A whole number (e.g. `100`).

### Int16

A [data type][] that represents a whole number from `-32,768` through `32,767`.

For more detailed information about the Int16 data type, see [Int16][].

### Int32

A [data type][] that represents a whole number from `-2,147,483,648` through `2,147,483,647`.

For more detailed information about the Int32 data type, see [Int32][].

### Int64

A [data type][] that represents a whole number from `-9,223,372,036,854,775,808` through `9,223,372,036,854,775,807`.

For more detailed information about the Int64 data type, see [Int64][].

### Invariant Culture

A culture associated with the English language, but not with any country or region; it determines the default format for dates, times, numbers, currency values, the sorting order of text, casing conventions, and string comparisons.

It has a stable and unchanging set of rules that cannot be customized and is unaffected by culture related changes to the operating system.

See [Working With > Invariant Culture][].

### Item

Each object within a [collection][] is called an [item][].

### IT

IT stands for Information Technology, which is the use of computers to create, process, store, retrieve, and exchange electronic data and information.

See [Wikipedia][Information Technology (Wikipedia)] for more information.

## J

### JSON

JSON stands for JavaScript Object Notation, and is a format for storing and transporting data between computer applications.

See [What is JSON][What is Json (W3)] for more information.

[16-Bit]: {{< url path="Cortex.Reference.Glossary.0-9.16Bit" >}}
[32-Bit]: {{< url path="Cortex.Reference.Glossary.0-9.32Bit" >}}
[blocks]: {{< url path="Cortex.Reference.Glossary.A-E.Block" >}}
[code]: {{< url path="Cortex.Reference.Glossary.A-E.Code" >}}
[Cortex]: {{< url path="Cortex.Reference.Glossary.A-E.Cortex" >}}
[Cortex Studio]: {{< url path="Cortex.Reference.Glossary.A-E.CortexStudio" >}}
[C#]: {{< url path="Cortex.Reference.Glossary.A-E.CSharp" >}}
[data type]: {{< url path="Cortex.Reference.Glossary.A-E.DataType" >}}
[Explicit Cast]: {{< url path="Cortex.Reference.Glossary.A-E.ExplicitCast" >}}
[expressions]: {{< url path="Cortex.Reference.Glossary.A-E.Expression" >}}
[files]: {{< url path="Cortex.Reference.Glossary.F-J.File" >}}
[flows]: {{< url path="Cortex.Reference.Glossary.F-J.Flow" >}}
[flow developers]: {{< url path="Cortex.Reference.Glossary.F-J.FlowDeveloper" >}}
[heterogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Heterogenous" >}}
[homogenous]: {{< url path="Cortex.Reference.Glossary.F-J.Homogenous" >}}
[integer]: {{< url path="Cortex.Reference.Glossary.F-J.Integer" >}}
[item]: {{< url path="Cortex.Reference.Glossary.F-J.Item" >}}
[list]: {{< url path="Cortex.Reference.Glossary.K-O.List" >}}
[platform]: {{< url path="Cortex.Reference.Glossary.P-T.Platform" >}}
[programming language]: {{< url path="Cortex.Reference.Glossary.P-T.ProgrammingLanguage" >}}
[snippets]: {{< url path="Cortex.Reference.Glossary.P-T.Snippets" >}}
[variable]: {{< url path="Cortex.Reference.Glossary.U-Z.Variable" >}}

[List&lt;TItem&gt;]: {{< url path="Cortex.Reference.DataTypes.Collections.List.MainDoc" >}}

[Fundamentals > Flows]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Flows.MainDoc" >}}
[Text > Format Parameters]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.FormatTemplates" >}}
[Text > Format Specifiers]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.FormatSpecifiers" >}}
[Text > Format Templates]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Text.Formatting.FormatTemplates" >}}
[Working With > Invariant Culture]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Culture.InvariantCulture.MainDoc" >}}
[Block Properties > Input Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Block Properties > InputOutput Properties]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[collection]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.MainDoc" >}}
[Collections > Indexes]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Collections.Indexes.MainDoc" >}}
[Cortex Studio > Authorisation]: {{< url path="Cortex.Guides.Gateway.Settings.StudioAuthorisation.MainDoc" >}}

[Int16]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int16.MainDoc" >}}
[Int32]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int32.MainDoc" >}}
[Int64]: {{< url path="Cortex.Reference.DataTypes.Numbers.Int64.MainDoc" >}}

[Casting and type conversions (C# Programming Guide)]: {{< url path="MSDocs.CSharp.Casting" >}}

[What is Json (W3)]: {{< url path="W3.WhatIsJson" >}}

[Information Technology (Wikipedia)]: {{< url path="Wikipedia.InformationTechnology" >}}

[WHATWG entity list]: {{< url path="WHATWG.EntityList" >}}
