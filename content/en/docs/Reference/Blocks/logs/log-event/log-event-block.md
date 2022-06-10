---
title: "Log Event"
linkTitle: "Log Event"
description: "Logs an event to the filesystem."
---

{{< figure src="/blocks/logs-log-event-block-icon.png" alt="Icon" class="block-icon" >}}

# {{< param title >}}

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

{{< highlight go "linenos=table,hl_lines=5 7-8 13-33,linenostart=1" >}}
{
    "@t":"2021-11-15T10:06:15.0000000Z",
    "@mt":"{@Event}",
    "Event":{
        "Type":"User Provisioning",
        "Duration":{
            "StartedAt":"2021-11-15T10:05:32.0000000Z",
            "EndedAt":"2021-11-15T10:06:12.0000000Z",
            "InMs":40000,
            "$type":"EventDurationDetails"
        },
        "Details":{
            "Process":{
                "Provision New User":{
                    "Stages":[
                        {
                            "Configure Active Directory":{
                                "Tasks":[
                                    "Add User to Azure Active Directory",
                                    "Add User to On-Premise Active Directory"
                                ]
                            }
                        },
                        {
                            "Configure Email":{
                                "Tasks":[
                                    "Create Outlook Account",
                                    "Create Default Signature"
                                ]
                            }
                        }
                    ]
                }
            },  
            "Correlation":{
                "TraceId":null,
                "SpanId":null,
                "ParentSpanId":null,
                "$type":"EventCorrelationDetails"
            },
            "Service":{
                "Type":null,
                "IpAddressOrFqdn":null,
                "$type":"ServiceDetails"
            },
            "$type":"StructuredEventLog"
        }
    }
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
| Default Value | `($)EventDetails` with value `null` |

### Event Type

[Event Type][EventType Property] can be specified to define the type of event being logged.

[Event Type][EventType Property] is a free format text property. If left blank or `null` it will default to `Cortex.Blocks.Logs.LogEvent.LogEventBlock`.

| | |
|--------------------|---------------------------|
| Data Type | [String][] |
| Property Type | [Input][] |
| Default Value | `($)EventType` with value `null` |

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

Logs with an [Event Severity][EventSeverity Property] of `EventSeverity.Information`, have the event severity ommitted from the log that is written to the filesystem. This is to save disk space, as typically the highest volume of logs produced are Information logs. This cannot be changed and is a restriction of the underlying logging system used. All non-Information logs do include the event severity in the log that is written to the filesystem.

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[EventSeverity][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)EventSeverity` with value `null` |

### Started At

[Started At][StartedAt Property] can be specified to define the Date and Time the event being logged started.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

If [Started At][StartedAt Property] is left blank or set to `null`, a value of `null`   will be logged.

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)StartedAt` with value null |

### Ended At

[Ended At][EndedAt Property] can be specified to define the Date and Time the event being logged ended.

Its text representation will be in the [ISO 8601 Standard][] (e.g. `2021-11-05T08:48:08.0307614+00:00`).

If [Ended At][EndedAt Property] is left blank or set to `null`, a value of `null` will be logged.

For more information about Date and Time, please see [Working with Date and Time][].

| | |
|--------------------|---------------------------|
| Data Type | [Nullable][]&lt;[DateTimeOffset][]&gt; |
| Property Type | [Input][] |
| Default Value | `($)EndedAt` with value null |

## Exceptions

The exceptions thrown by the block can be found below:

| Name     | Description |
|----------|----------|
| [ArgumentException][] | Thrown when [Event Severity][EventSeverity Property] is not one of the specified [EventSeverity][] types (e.g. `(EventSeverity)10`). |
| [PropertyNullException][] | Thrown when [Event Details][EventDetails Property] is `null`. |

## Remarks

### Configuring Logging

Log settings exist for the following Cortex Services:

| Service                       | Default File Location                 | Description                       |
|-------------------------------|---------------------------------------|-----------------------------------|
| `Cortex Debugger Service`     | `<install-location>\appsettings.json` | Debugger Service is used to debug flows when developing them in Cortex Studio |
| `Cortex Flow Execution Service`| `<install-location>\appsettings.json` | Flow Execution Service is used to execute published flows in a runtime environment (e.g. Development, UAT, Production) |

An example of the log settings can be found below (some settings that do not need to be modified have been ommitted):

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

The format of the logs written by this block are the same as the logs written by the rest of the Cortex Services. This is to ensure logging is consistent and done one way within Cortex. Hopefully this will make it easier to work with logging, and also make it easier to gain a holistic picture into what has happened to a flow execution throughout its entire lifecycle (i.e. from initial request to returning the response to the caller), rather than just what happens inside of the flow.

An example log can be found below:

```json
{
    "@t":"2021-11-15T10:06:15.0000000Z",
    "@mt":"{@Event}",
    "@l":"Debug",
    "Event":{
        "Type":"User Provisioning",
        "Duration":{
            "StartedAt":"2021-11-15T10:05:32.0000000Z",
            "EndedAt":"2021-11-15T10:06:12.0000000Z",
            "InMs":40000,
            "$type":"EventDurationDetails"
        },
        "Details":{
            "Process":{
                "Provision New User":{
                    "Stages":[
                        {
                            "Configure Active Directory":{
                                "Tasks":[
                                    "Add User to Azure Active Directory",
                                    "Add User to On-Premise Active Directory"
                                ]
                            }
                        },
                        {
                            "Configure Email":{
                                "Tasks":[
                                    "Create Outlook Account",
                                    "Create Default Signature"
                                ]
                            }
                        }
                    ]
                }
            }
        },  
        "Correlation":{
            "TraceId":null,
            "SpanId":null,
            "ParentSpanId":null,
            "$type":"EventCorrelationDetails"
        },
        "Service":{
            "Type":null,
            "IpAddressOrFqdn":null,
            "$type":"ServiceDetails"
        },
        "$type":"StructuredEventLog"
        }
    }
}
```

A list of each of the log's properties and an accompanying description can be found below:

| Log Property                      | Description                                                   |
|-----------------------------------|---------------------------------------------------------------|
| `@t`                              | The date and time the log was written. The format is [ISO 8601 Standard][]. |
| `@mt`                             | The message template for the log. This is set to log the entire Event.  |
| `@l`                             | The level for the log. The value of [Event Severity][EventSeverity Property] is used here.  |
| `Event`                           | The event that was logged. |
| `Event.Type`                      | The type of event that was logged. This can be used for log analysis and reporting. The value of [Event Type][EventType Property] is used here. |
| `Event.Duration`                  | Contains the date and time the event started at, ended at, and its duration. |
| `Event.Duration.StartedAt`        | The date and time the event started. The format is [ISO 8601 Standard][]. The value of [Started At][StartedAt Property] is used here. |
| `Event.Duration.EndedAt`          | The date and time the event ended. The format is [ISO 8601 Standard][]. The value of [Ended At][EndedAt Property] is used here.  |
| `Event.Duration.InMs`             | The duration of the event in milliseconds and is calculated using `Event.Duration.StartedAt` and `Event.Duration.EndedAt` . |
| `Event.Duration.$type`            | The .Net data type used to represent the duration data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Details`                   | Contains the details of the event. The value of [Event Details][EventDetails Property] is written as a child property of this (e.g. in this example `Event.Details.Process`). |
| `Event.Correlation`               | Contains details that can be used to correlate related events. E.g. The act of starting a new flow execution may result in multiple Cortex Services processing the event. As a result, each service may write its own logs, and additionally the flow developer may also write out multiple logs during the flow execution. The Correlation details allow all of these logs to easily be correlated back together when performing log analysis and reporting to gain a full picture of everything that happened. |
| `Event.Correlation.TraceId`       | ID common to all related logs, so they can be easily correlated together. |
| `Event.Correlation.SpanId`        | Unique ID for each log, so tools like [Grafana][] can display a call stack, showing each step that occurred when processing an event. |
| `Event.Correlation.ParentSpanId`  | The ID of the step that called this step of processing, so tools like [Grafana][] can display a call stack, showing each step that occurred when processing an event. |
| `Event.Correlation.$type`  | The .Net data type used to represent the correlation data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.Service`            | Contains details of the Cortex Service that logged this event, and will allow enhanced log analysis and reporting to gain a full picture of everything that happened. |
| `Event.Service.Type`       | The type of the Cortex Service that logged this event. |
| `Event.Service.IpAddressOrFqdn`   | The IP address or fully qualified domain name of the Cortex Service that logged this event. |
| `Event.Service.$type`      | The .Net data type used to represent the service data. This can be ignored and is an artefact of the underlying implementation. |
| `Event.$type`              | The .Net data type used to represent the event data. This can be ignored and is an artefact of the underlying implementation. |

### Null Event Type

If [Event Type][EventType Property] is left blank or `null` it will default to `Cortex.Blocks.Logs.LogEvent.LogEventBlock`.

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

[Input]: {{< url "Cortex.Reference.Concepts.PropertyType.Input" >}}

[ArgumentException]: {{< url "MSDocs.DotNet.Api.System.ArgumentException" >}}
[PropertyNullException]: {{< url "Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}

[ISO 8601 Standard]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.DateAndTimeFormatting.ISO8601Standard" >}}
[Working with Date and Time]: {{< url "Cortex.Reference.Concepts.WorkingWithDateAndTime.MainDoc" >}}

[Grafana]: {{< url "Grafana.MainDoc" >}}
[ElasticSearch]: {{< url "ElasticSearch.MainDoc" >}}
[Splunk]: {{< url "Splunk.MainDoc" >}}

[dynamic]: {{< url "Cortex.Reference.DataTypes.All.dynamic.MainDoc" >}}
[Structure]: {{< url "Cortex.Reference.DataTypes.Collections.Structure.MainDoc" >}}
[String]: {{< url "Cortex.Reference.DataTypes.Text.String.MainDoc" >}}
[DateTimeOffset]: {{< url "Cortex.Reference.DataTypes.DateAndTime.DateTimeOffset.MainDoc" >}}
[Nullable]: {{< url "Cortex.Reference.DataTypes.MostCommon.Nullable" >}}
[EventSeverity]: {{< url "Cortex.Reference.DataTypes.Logs.EventSeverity.MainDoc" >}}
