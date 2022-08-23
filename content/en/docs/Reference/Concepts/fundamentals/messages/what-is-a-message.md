---
title: "What is a Message?"
linkTitle: "What is a Message?"
description: "This page describes the concept of a Message"
weight: 1
---

# {{% param title %}}

TODO: Paul and Tyler review

## Summary

A message is a warning or error generated during the pre-execution phase of a flow execution. Prior to execution, the flow is translated for the Cortex engine and is analysed for issues that may occur during execution.

Some examples of issues that can be raised are (please note this is not an exhaustive list):

- Blocks using undefined variables
- Blocks using variables with mismatched data types
- Input variables that have not been initialised

## Anatomy of a Message

TODO: Example image of message in the messages grid

| Message Property | Notes |
|-------------|-------------|
| Location | Area of the flow that triggered the message. Block or variable property |
| Summary | Short description of the issue |
| Details | Information relating to the cause of the issue. May also contain help for resolving the issue |

## Remarks

### Known Limitations

#### Navigating to Block Properties

When clicking a message to locate an issue with a block property, only the top-level property of a literal property will be highlighted. This may change in future releases.

## See Also

### Related Concepts

- [Executions][]
- [Variables][]
