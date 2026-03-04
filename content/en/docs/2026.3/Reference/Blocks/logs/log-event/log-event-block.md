---
title: "Log Event"
linkTitle: "Log Event"
description: "Logs an event to the filesystem."
---

{{< figure src="/blocks/Cortex_Blocks_Logs_LogEvent_LogEventBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Logs.LogEvent.LogEventBlock)</p>

## Description

Logs an [event][EventDetails Property] to the filesystem.

Additional options can be specified:

* [Event Type][EventType Property] can be specified to define the type of event being logged.
* [Event Severity][EventSeverity Property] can be specified to define the severity of the event being logged.
* [Started At][StartedAt Property] can be specified to define the Date and Time the event being logged started.
* [Ended At][EndedAt Property] can be specified to define the Date and Time the event being logged ended.

## Examples

### Log an event

This example will log details about all tasks of a multi-stage process that provisions a new user at a company.

* Process: `"Provision New User"`
  * Stage: `"Configure Active Directory"`
    * Task: `"Add User to Azure Active Directory"`
    * Task: `"Add User to On-Premise Active Directory"`
  * Stage: `"Configure Email"`
    * Task: `"Create Outlook Account"`
    * Task: `"Create Default Signature"`

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Event Details][EventDetails Property] | `($)EventDetails`, with value `{"Process":{"Provision New User":{"Stages":[{"Configure Active Directory":{"Tasks":["Add User to Azure Active Directory","Add User to On-Premise Active Directory"]}},{"Configure Email":{"Tasks":["Create Outlook Account","Create Default Signature"]}}]}}}` | `($)EventDetails` is a variable of type [Structure][]. |
| [Event Type][EventType Property] | `($)EventType`, with value `"User Provisioning"` | `($)EventType` is a variable of type [String][]. |
| [Event Severity][EventSeverity Property] | `($)EventSeverity`, with value `EventSeverity.Information` | `($)EventSeverity` is a variable of type [Nullable][]&lt;[EventSeverity][]&gt;. |
| [Started At][StartedAt Property] | `($)StartedAt`, with value of [DateTimeOffset][] that has a text representation of `2021-11-15T10:05:32.0000000Z` | `($)StartedAt` is a variable of type [Nullable][]&lt;[DateTimeOffset][]&gt;. |
| [Ended At][EndedAt Property] | `($)EndedAt`, with value of [DateTimeOffset][] that has a text representation of `2021-11-15T10:06:12.0000000Z` | `($)EndedAt` is a variable of type [Nullable][]&lt;[DateTimeOffset][]&gt;. |

#### Result

Logging the event results in the following log being written:

{{< highlight go "linenos=table,hl_lines=5 8-9 14-48,linenostart=1" >}}
{
  "@t": "2024-09-05T08:06:15.0000000Z",
  "@mt": "{@Event}",
  "Event": {
    "Type": "User Provisioning",
    "Method": "",
    "Duration": {
      "StartedAt": "2024-09-05T08:05:32.0000000+00:00",
      "EndedAt": "2024-09-05T08:06:12.0000000+00:00",
      "InSeconds": 40,
      "$type": "Cortex.Core.Logging.Common.EventDurationDetails, Cortex.Core.Logging"
    },
    "Details": {
      "Process": {
        "Provision New User": {
          "Stages": {
            "$values": [
              {
                "Configure Active Directory": {
                  "Tasks": {
                    "$values": [
                      "Add User to Azure Active Directory",
                      "Add User to On-Premise Active Directory"
                    ],
                    "$type": "System.Collections.Generic.List`1[[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
                  },
                  "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
                },
                "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
              },
              {
                "Configure Email": {
                  "$values": [
                    "Create Outlook Account",
                    "Create Default Signature"
                  ],
                  "$type": "System.Collections.Generic.List`1[[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
                },
                "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
              }
            ],
            "$type": "System.Collections.Generic.List`1[[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
          },
          "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
        },
        "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
      },
      "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
    },
    "Tags": {
      "Cortex": {
        "Tenant.Name": "default",
        "System.Name": "default",
        "Package.Name": "PackageName",
        "Package.Version": "57b45289-cc81-478c-a176-88d0a6104fb2",
        "Flow.Id": "c038b421-c7f0-4793-86ad-7bb81801ab9f",
        "Flow.Name": "FlowName",
        "Execution.Id": "97a98060-acc2-4d11-bc7b-14989d4cf624",
        "Workspace.Id": "cf358365-76d8-4100-b58e-4c023563083f",
        "Block.Id": "422c42a2-4402-430b-8c96-8f0818f2b324",
        "Block.Name": "LogEventBlock",
        "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
      },
      "Custom": {
        "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
      },
      "$type": "Cortex.Core.Logging.Common.EventTags, Cortex.Core.Logging"
    },
    "Correlation": {
      "TraceId": "1fd6e5080a25f26b498816933ed91886",
      "SpanId": "88f321981aa42963",
      "ParentSpanId": "90e588941f7e20ba",
      "$type": "Cortex.Core.Logging.Common.EventCorrelationDetails, Cortex.Core.Logging"
    },
    "Platform": {
      "Node": {
        "Name": "CustomerName.MachineName",
        "IpAddressOrFqdn": "192.168.1.1",
        "Versions": {
          "OperatingSystem": "Microsoft Windows NT 10.0.20348.0",
          "DotNet": "6.0",
          "ServiceFabric": "10.0.1816.9590",
          "NServiceBus": "8.1.6",
          "Rabbitmq": "3.10.5",
          "Erlang": "Erlang OTP 24.0 (12.0)",
          "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
        },
        "$type": "Cortex.Core.Logging.ServiceFabric.NodeDetails, Cortex.Core.Logging"
      },
      "Application": {
        "Name": "fabric:/Execution/Services/Engine/32.2.4.24340",
        "Type": "Cortex.Innovation.Execution",
        "Version": "19.1.2.24340",
        "$type": "Cortex.Core.Logging.ServiceFabric.ServiceFabricApplicationDetails, Cortex.Core.Logging"
      },
      "Service": {
        "Name": "fabric:/Execution/Services/Engine/32.2.4.24340/Blocks/46.0.4.24340",
        "Type": "Execution",
        "Version": "19.1.2.24340",
        "PartitionId": "5bf4dc16-4076-46bf-9d20-31cd6d878736",
        "ReplicaOrInstanceId": "133697171066478481",
        "$type": "Cortex.Core.Logging.ServiceFabric.ServiceFabricServiceDetails, Cortex.Core.Logging"
      },
      "Version": "2024.7",
      "$type": "Cortex.Core.Logging.ServiceFabric.PlatformDetails, Cortex.Core.Logging"
    },
    "$type": "Cortex.Core.Logging.Common.StructuredEventLog, Cortex.Core.Logging"
  },
  "SourceContext": "Cortex.ServiceFabric.Service.Execution.ExecutionService"
}
{{< / highlight >}}

For information about the format of the logs written, see [Anatomy of a Log][].

For information about where the logs are written to, see [Configuring Logging][].

***

## Properties

### Event Details

The [Event Details][EventDetails Property] to log.

[Event Details][EventDetails Property] can be any object of any data type; it does not have to be a [String][]. Using a data type like a [Structure][] allows you to [create richer logs with a more defined format][Anatomy Of A Log]. This makes them easier to consume, process and query by other systems that consume logs, such as [Grafana][], [ElasticSearch][] and [Splunk][], which are commonly used for log analysis, reporting and dashboarding.

| | |
|--------------------|---------------------------|
| Data Type | [dynamic][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)EventDetails` with no value |

### Event Type

[Event Type][EventType Property] can be specified to define the type of event being logged.

[Event Type][EventType Property] is a free format text property. If left blank, `null`, or empty (i.e. `""`) it will default to `Cortex.Blocks.Logs.LogEvent.LogEventBlock`.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | No value (defaults to `null`) |

### Event Severity

[Event Severity][EventSeverity Property] can be specified to define the severity of the event being logged.

[Event Severity][EventSeverity Property] can be any of the following predefined values:

* `EventSeverity.Verbose` - Logs that contain the most detailed messages. These messages may contain sensitive application data. These logs should never be enabled in a production environment.
* `EventSeverity.Debug` - Logs that are used for interactive investigation during development. These logs should primarily contain information useful for debugging and have no long-term value.
* `EventSeverity.Information` - Logs that track the general path of the flow execution. These logs should have long-term value.
* `EventSeverity.Warning` - Logs that highlight an abnormal or unexpected event in the path of the flow execution, but do not otherwise cause the flow execution to exit.
* `EventSeverity.Error` - Logs that highlight when the current flow execution exits due to an error. These should indicate a failure in the current flow execution, not a service-wide or process-wide failure.
* `EventSeverity.Fatal` - Logs that describe an unrecoverable service or process error, or a catastrophic failure that requires immediate attention.

[Event Severity][EventSeverity Property] can also be left blank or set to `null`, in which case it will default to `EventSeverity.Information`.

Logs with an [Event Severity][EventSeverity Property] of `EventSeverity.Information`, have the event severity omitted from the log that is written to the filesystem. This is to save disk space, as typically the highest volume of logs produced are Information logs. This cannot be changed and is a restriction of the underlying logging system used. All non-Information logs do include the event severity in the log that is written to the filesystem.

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[EventSeverity][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | `Information` |

### Started At

[Started At][StartedAt Property] can be specified to define the Date and Time the event being logged started.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

If [Started At][StartedAt Property] is left blank or set to `null`, a value of `null` will be logged.

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `DateTimeOffset.UtcNow` |

### Ended At

[Ended At][EndedAt Property] can be specified to define the Date and Time the event being logged ended.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

If [Ended At][EndedAt Property] is left blank or set to `null`, a value of `null` will be logged.

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Expression][] |
| Default Value | `DateTimeOffset.UtcNow` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Event Severity][EventSeverity Property] is not one of the specified [EventSeverity][] types (e.g. `(EventSeverity)10`). |
| [PropertyNullException][] | Thrown when [Event Details][EventDetails Property] is `null`. |

## Remarks

### Configuring Logging

Log settings exist for the following {{% ctx %}} Services:

| Service                    | Default File Location                 | Description                                                                                                            |
|----------------------------|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `Execution Service`        | `<install-location>\appsettings.json` | Execution Service is used to execute published flows in a runtime environment (e.g. Development, UAT, Production)      |

An example of the log settings can be found below (some settings that do not need to be modified have been omitted):

{{< highlight go "linenos=table,hl_lines=5 11-15,linenostart=1" >}}
{
  "Cortex.Blocks.Logs": {
    "Using": [ "Serilog.Sinks.File" ],
    "MinimumLevel": {
      "Default": "Verbose"
    },
    "WriteTo": [
      {
        "Name": "File",
        "Args": {
          "path": "%ProgramData%/Cortex/Logging/LogEventBlock-.json",
          "rollingInterval": "Day",
          "fileSizeLimitBytes": 50000000,
          "rollOnFileSizeLimit": true,
          "retainedFileCountLimit": 365
        }
      }
    ]
  }
}
{{< / highlight >}}

A list of the main log settings (highlighted above) and an accompanying description can be found below:

| Log Setting | Default Value | Description |
|-------------|---------------|-------------|
| `Default` | `"Verbose"` | The default minimum log level that will be logged.</br></br>Possible options are `"Verbose"`, `"Debug"`, `"Information"`, `"Warning"`, `"Error"`, `"Fatal"`.</br></br>The order of log levels is `"Verbose"->"Debug"->"Information"->"Warning"->"Error"->"Fatal"`. When setting the default log level, that level and every level to its right will be logged. |
| `path` | `"%ProgramData%/Cortex/Logging/LogEventBlock-.json"` | The location that logs will be written to.</br></br>This value supports use of environment variables, as seen in the default value.</br></br>If any part of the location does not exist, the logging will attempt to create it.</br></br>The file names written will include a date format after the `-` and before `.json` (e.g. `"LogEventBlock-yyyyMMdd.json"` -> `"LogEventBlock-20210921.json"`)</br></br>The date format used will be decided by the value specified in `rollingInterval`.</br></br>The file name may also include a file count number and is added automatically to make sure file names are unique. This can happen if `rollOnFileSizeLimit` is set to `true` and a log file reaches the size specified in `fileSizeLimitBytes`. It can also happen if the log file is locked by another process, preventing it from being written to. |
| `rollingInterval` | `"Day"` | The time interval at which the logging system will create and start logging to a new log file.</br></br>Possible options are `"Infinite"`, `"Year"`, `"Month"`, `"Day"`, `"Hour"`, `"Minute"`.</br></br>`Infinite` means that the log files never roll over based on a time interval. |
| `fileSizeLimitBytes` | `50000000` | The maximum file size in bytes that the loggging system will write to. Once this size is exceeded the logging system will create and start logging to a new log file.</br></br>`Null` can be used to mean unlimited size.</br></br>`rollOnFileSizeLimit` must be set to `true` for this setting to take effect. |
| `rollOnFileSizeLimit` | `true` | Whether the loggging system should start creating a new log file if the current one reaches the maximum file size specified in `fileSizeLimitBytes`.</br></br>Possible options are `true` and `false`. |
| `retainedFileCountLimit` | `365` | The maximum number of files to retain on disk. Once this number is reached, the loggging system will start delete the oldest file. |

Please note that if the appsetting.json file cannot be found for one of the services, the logger will use the same default settings specified above.

### Anatomy of a Log

The format of the logs written by this block are the same as the logs written by the rest of the {{% ctx %}} Services. This is to ensure logging is consistent and done one way within {{% ctx %}}. Hopefully this will make it easier to work with logging, and also make it easier to gain a holistic picture into what has happened to a flow execution throughout its entire lifecycle (i.e. from initial request to returning the response to the caller), rather than just what happens inside of the flow.

An example log can be found below:

```json
{
  "@t": "2024-09-05T08:06:15.0000000Z",
  "@mt": "{@Event}",
  "@l": "Debug",
  "Event": {
    "Type": "User Provisioning",
    "Method": "",
    "Duration": {
      "StartedAt": "2024-09-05T08:05:32.0000000+00:00",
      "EndedAt": "2024-09-05T08:06:12.0000000+00:00",
      "InSeconds": 40,
      "$type": "Cortex.Core.Logging.Common.EventDurationDetails, Cortex.Core.Logging"
    },
    "Details": {
      "Process": {
        "Provision New User": {
          "Stages": {
            "$values": [
              {
                "Configure Active Directory": {
                  "Tasks": {
                    "$values": [
                      "Add User to Azure Active Directory",
                      "Add User to On-Premise Active Directory"
                    ],
                    "$type": "System.Collections.Generic.List`1[[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
                  },
                  "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
                },
                "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
              },
              {
                "Configure Email": {
                  "$values": [
                    "Create Outlook Account",
                    "Create Default Signature"
                  ],
                  "$type": "System.Collections.Generic.List`1[[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
                },
                "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
              }
            ],
            "$type": "System.Collections.Generic.List`1[[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
          },
          "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
        },
        "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
      },
      "$type": "Cortex.DataTypes.Dictionaries.Structure, Cortex.Core.DataTypes"
    },
    "Tags": {
      "Cortex": {
        "Tenant.Name": "default",
        "System.Name": "default",
        "Package.Name": "PackageName",
        "Package.Version": "57b45289-cc81-478c-a176-88d0a6104fb2",
        "Flow.Id": "c038b421-c7f0-4793-86ad-7bb81801ab9f",
        "Flow.Name": "FlowName",
        "Execution.Id": "97a98060-acc2-4d11-bc7b-14989d4cf624",
        "Workspace.Id": "cf358365-76d8-4100-b58e-4c023563083f",
        "Block.Id": "422c42a2-4402-430b-8c96-8f0818f2b324",
        "Block.Name": "LogEventBlock",
        "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
      },
      "Custom": {
        "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
      },
      "$type": "Cortex.Core.Logging.Common.EventTags, Cortex.Core.Logging"
    },
    "Correlation": {
      "TraceId": "1fd6e5080a25f26b498816933ed91886",
      "SpanId": "88f321981aa42963",
      "ParentSpanId": "90e588941f7e20ba",
      "$type": "Cortex.Core.Logging.Common.EventCorrelationDetails, Cortex.Core.Logging"
    },
    "Platform": {
      "Node": {
        "Name": "CustomerName.MachineName",
        "IpAddressOrFqdn": "192.168.1.1",
        "Versions": {
          "OperatingSystem": "Microsoft Windows NT 10.0.20348.0",
          "DotNet": "6.0",
          "ServiceFabric": "10.0.1816.9590",
          "NServiceBus": "8.1.6",
          "Rabbitmq": "3.10.5",
          "Erlang": "Erlang OTP 24.0 (12.0)",
          "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.String, System.Private.CoreLib]], System.Private.CoreLib"
        },
        "$type": "Cortex.Core.Logging.ServiceFabric.NodeDetails, Cortex.Core.Logging"
      },
      "Application": {
        "Name": "fabric:/Execution/Services/Engine/32.2.4.24340",
        "Type": "Cortex.Innovation.Execution",
        "Version": "19.1.2.24340",
        "$type": "Cortex.Core.Logging.ServiceFabric.ServiceFabricApplicationDetails, Cortex.Core.Logging"
      },
      "Service": {
        "Name": "fabric:/Execution/Services/Engine/32.2.4.24340/Blocks/46.0.4.24340",
        "Type": "Execution",
        "Version": "19.1.2.24340",
        "PartitionId": "5bf4dc16-4076-46bf-9d20-31cd6d878736",
        "ReplicaOrInstanceId": "133697171066478481",
        "$type": "Cortex.Core.Logging.ServiceFabric.ServiceFabricServiceDetails, Cortex.Core.Logging"
      },
      "Version": "2024.7",
      "$type": "Cortex.Core.Logging.ServiceFabric.PlatformDetails, Cortex.Core.Logging"
    },
    "$type": "Cortex.Core.Logging.Common.StructuredEventLog, Cortex.Core.Logging"
  },
  "SourceContext": "Cortex.ServiceFabric.Service.Execution.ExecutionService"
}
```

A list of each of the log's properties and an accompanying description can be found below:

| Log Property                                   | Description                                                   |
|------------------------------------------------|---------------------------------------------------------------|
| `@t`                                           | The date and time the log was written. The format is [ISO 8601 Standard][]. |
| `@mt`                                          | The message template for the log. This is set to log the entire Event.  |
| `@l`                                           | The level for the log. The value of [Event Severity][EventSeverity Property] is used here.  |
| `Event`                                        | The event that was logged. |
| `Event.Type`                                   | The type of event that was logged. This can be used for log analysis and reporting. The value of [Event Type][EventType Property] is used here. |
| `Event.Method`                                 | Not currently used for logs generated by the Log Event block. |
| `Event.Duration`                               | Contains the date and time the event started at, ended at, and its duration. |
| `Event.Duration.StartedAt`                     | The date and time the event started. The format is [ISO 8601 Standard][]. The value of [Started At][StartedAt Property] is used here. |
| `Event.Duration.EndedAt`                       | The date and time the event ended. The format is [ISO 8601 Standard][]. The value of [Ended At][EndedAt Property] is used here.  |
| `Event.Duration.InSeconds`                     | The duration of the event in seconds and is calculated using `Event.Duration.StartedAt` and `Event.Duration.EndedAt` . |
| `Event.Duration.$type`                         | The .NET data type used to represent the duration data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Details`                                | Contains the details of the event. The value of [Event Details][EventDetails Property] is written as a child property of this (e.g. in this example `Event.Details.Process`). |
| `Event.Details.$type`                          | The .NET data type used to represent the event details data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Tags`                                   | Contains tags generated by the {{% ctx %}} platform as well as tags generated by the automation solution running on the {{% ctx %}} platform. |
| `Event.Tags.Cortex`                            | Contains tags generated by the {{% ctx %}} platform. |
| `Event.Tags.Cortex.Tenant.Name`                | The name of the tenant the flow that generated this log belongs to. |
| `Event.Tags.Cortex.System.Name`                | The name of the system the flow that generated this log belongs to. |
| `Event.Tags.Cortex.Package.Name`               | The name of the package containing the flow that generated this log. |
| `Event.Tags.Cortex.Package.Version`            | The version of the package containing the flow that generated this log. |
| `Event.Tags.Cortex.Flow.Id`                    | The ID of the flow containing the block that generated this log. |
| `Event.Tags.Cortex.Flow.Name`                  | The name of the flow containing the block that generated this log. |
| `Event.Tags.Cortex.Execution.Id`               | The ID of the execution that generated this log. |
| `Event.Tags.Cortex.Workspace.Id`               | The ID of the workspace containing the block that generated this log. |
| `Event.Tags.Cortex.Block.Id`                   | The ID of the block that generated this log. |
| `Event.Tags.Cortex.Block.Name`                 | The name of the block that generated this log. |
| `Event.Tags.Cortex.$type`                      | The .NET data type used to represent the {{% ctx %}} tags data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Tags.Custom`                            | Contains custom tags generated by the automation solution running on the {{% ctx %}} platform. |
| `Event.Tags.Custom.$type`                      | The .NET data type used to represent the custom tags data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Tags.$type`                             | The .NET data type used to represent the tags data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Correlation`                            | Contains details that can be used to correlate related events. E.g. The act of starting a new flow execution may result in multiple {{% ctx %}} Services processing the event. As a result, each service may write its own logs, and additionally the flow developer may also write out multiple logs during the flow execution. The Correlation details allow all of these logs to easily be correlated back together when performing log analysis and reporting to gain a full picture of everything that happened. |
| `Event.Correlation.TraceId`                    | ID common to all related logs, so they can be easily correlated together. |
| `Event.Correlation.SpanId`                     | Unique ID for each log, so tools like [Grafana][] can display a call stack, showing each step that occurred when processing an event. |
| `Event.Correlation.ParentSpanId`               | The ID of the step that called this step of processing, so tools like [Grafana][] can display a call stack, showing each step that occurred when processing an event. |
| `Event.Correlation.$type`                      | The .NET data type used to represent the correlation data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Platform`                               | Contains the details about the platform in which the log was written. |
| `Event.Platform.Node`                          | Contains the details about the node in which the log was written. |
| `Event.Platform.Node.Name`                     | The name of the node in which the log was written. |
| `Event.Platform.Node.IpAddressOrFqdn`          | The IP Address or Fully Qualified Domain Name of the node in which the log was written. |
| `Event.Platform.Node.Versions`                 | Contains the details about the versions of software running on the node in which the log was written. |
| `Event.Platform.Node.Versions.OperatingSystem` | The name and version of the Operating system on the node in which the log was written. |
| `Event.Platform.Node.Versions.DotNet`          | The version of .NET used by the node in which the log was written. |
| `Event.Platform.Node.Versions.ServiceFabric`   | The version of Service Fabric used by the node in which the log was written. |
| `Event.Platform.Node.Versions.NServiceBus`     | The version of NServiceBus used by the node in which the log was written. |
| `Event.Platform.Node.Versions.Rabbitmq`        | The version of RabbitMQ used by the node in which the log was written. |
| `Event.Platform.Node.Versions.Erlang`          | The version of Erlang used by the node in which the log was written. |
| `Event.Platform.Node.Versions.$type`           | The .NET data type used to represent the platform node version data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Platform.Node.$type`                    | The .NET data type used to represent the platform node data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Platform.Application`                   | Contains the details of the application in which the log was written. |
| `Event.Platform.Application.Name`              | The name of the application in which the log was written. |
| `Event.Platform.Application.Type`              | The type of the application in which the log was written. |
| `Event.Platform.Application.Version`           | The version of the application type in which the log was written. |
| `Event.Platform.Application.$type`             | The .NET data type used to represent the platform application data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Platform.Service`                       | Contains the details of the service in which the log was written. |
| `Event.Platform.Service.Name`                  | The name of the service in which the log was written. |
| `Event.Platform.Service.Type`                  | The type of the service in which the log was written. |
| `Event.Platform.Service.Version`               | The version of the service type in which the log was written. |
| `Event.Platform.Service.PartitionId`           | The Partition ID of the service in which the log was written. |
| `Event.Platform.Service.ReplicaOrInstanceId`   | The Replica or Instance ID of the service in which the log was written. |
| `Event.Platform.Service.$type`                 | The .NET data type used to represent the service data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Platform.Version`                       | The version of {{% ctx %}} that was used to write the log. |
| `Event.Platform.$type`                         | The .NET data type used to represent the platform data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.$type`                                  | The .NET data type used to represent the event data. This can be ignored and is an artefact of the underlying implementation. |
| `SourceContext`                                | The .NET data type of the Execution Service. This can be ignored and is an artefact of the underlying implementation. |
### Null or Empty Event Type

If [Event Type][EventType Property] is left blank, `null`, or empty (i.e. `""`) it will default to `Cortex.Blocks.Logs.LogEvent.LogEventBlock`.

### Null Event Severity

If [Event Severity][EventSeverity Property] is left blank or set to `null`, it will default to `EventSeverity.Information`.

### Null Started At

If [Started At][StartedAt Property] is left blank or set to `null`, a value of `null` will be logged.

### Null Ended At

If [Ended At][EndedAt Property] is left blank or set to `null`, a value of `null` will be logged.

[EventDetails Property]: {{< ref "#event-details" >}}
[EventType Property]: {{< ref "#event-type" >}}
[EventSeverity Property]: {{< ref "#event-severity" >}}
[StartedAt Property]: {{< ref "#started-at" >}}
[EndedAt Property]: {{< ref "#ended-at" >}}

[Configuring Logging]: {{< ref "#configuring-logging" >}}
[Anatomy of a Log]: {{< ref "#anatomy-of-a-log" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[ISO 8601 Standard]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url path="Cortex.Reference.Concepts.WorkingWith.DateAndTime.MainDoc" >}}

[Grafana]: {{< url path="Grafana.MainDoc" >}}
[ElasticSearch]: {{< url path="ElasticSearch.MainDoc" >}}
[Splunk]: {{< url path="Splunk.MainDoc" >}}

[dynamic]: {{< url path="Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Structure]: {{< url path="Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[String]: {{< url path="Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[DateTimeOffset]: {{< url path="Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[Nullable]: {{< url path="Cortex.Reference.DataTypes.Other.Nullable.MainDoc" >}}
[EventSeverity]: {{< url path="Cortex.Reference.DataTypes.Logs.EventSeverity.MainDoc" >}}

[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}

[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
