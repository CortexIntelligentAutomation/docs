---
title: "IParameter"
linkTitle: "IParameter"
description: "Any data type representing a parameter for use in the parameters property."
---

# {{% param title %}}

<p class="namespace">(Cortex.DataTypes.Data.IParameter)</p>

{{% alert type="information" title="Information" %}} Improvements to this page are planned for the future. {{% /alert %}}

## Summary

Any data type representing a parameter for use in the [Parameters property][ParametersProperty] on the [DataCommand][] data types.

| | |
|-|-|
| **Category:**          | Data                                            |
| **Name:**              | `IParameter`                                      |
| **Full Name:**         | `Cortex.DataTypes.Data.IParameter`         |
| **Alias:**             | N/A                                                    |
| **Description:**       | Any data type representing a parameter for use in the [Parameters property][ParametersProperty] on the [DataCommand][] data types. |
| **Default Value:**     | `null`                                                  |
| **Can be used as:**    | `OracleParameters`, `IParameter`, `Object`, `dynamic`                 |
| **Can be cast to:**    | N/A                                                    |

## Remarks

### Property Editor Support

- The Expression Editor is available for [Input][] properties where the data type is `IParameter`.
- The Literal Editor is available for [Input][] properties where the data type is `IParameter`.
- The Variable Editor is available for [Input][], [InputOutput][] and [Output][] properties where the data type is `IParameter`.

### Known Limitations

None

## See Also

### Related Data Types

- [IParameter][]
- [OracleParameter][]
- [OracleParameters][]

### Related Concepts

None

### External Documentation

None

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[Output]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Output" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[OracleParameter]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameter.MainDoc" >}}
[OracleParameters]: {{< url path="Cortex.Reference.DataTypes.Data.OracleParameters.MainDoc" >}}

[EncryptableText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptableText.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}
[ParametersProperty]: {{< url path="Cortex.Reference.DataTypes.Data.DataCommand.Parameters" >}}
