---
title: "Schedule Documentation Generation"
linkTitle: "Schedule Documentation Generation"
description: "Information about restricting documentation generation to set hours, e.g. overnight and at weekends."
---

# {{% param title %}}

By default, documentation is generated whenever a job is submitted. Generation can take many hours, and on a server without a GPU it uses all of the processor cores for the whole time, which slows down other services on that server. It can instead be restricted to run windows, e.g. overnight and at weekends.

When scheduling is enabled:

* A job submitted outside a run window is accepted but does not start. Its status is `Paused`, and it starts when the next run window opens.
* If a run window closes while a job is generating, the flow that is being generated is stopped and discarded, flows that have already been completed are kept, and the job's status changes to `Paused`. When the next run window opens the job resumes, skipping the completed flows, and the interrupted flow is generated again from the start.
* A `Paused` job has not failed and has not been cancelled. A job that is cancelled by deleting it is never resumed.
* Run windows use the local time of the server that runs the Documentation Service. There is no time zone setting.

{{% alert title="Important" color="warning" %}}
Each run window must be long enough for the slowest flow to be generated. A flow that is stopped when the window closes is generated again from the start in the next window, so a window that is shorter than the time needed for one flow means that the job never finishes. On a server without a GPU a single flow can take 25 minutes or more.
{{% /alert %}}

## Configure Run Windows

On the Web Application Server:

1. Navigate to the Documentation Service directory, e.g. `%ProgramData%\SF\<CustomerName>.<NodeName>\Fabric\work\Applications\Cortex.Innovation.AI_App<n>\DocumentationPkg.Code.<Version>` replacing `<CustomerName>` with the CustomerName configured during installation, `<NodeName>` with the name of the node, `<n>` with the application number and `<Version>` with the version of the code package.
1. Open the `appsettings.json` file.
1. Under the `Scheduling` section, update the parameters to the values for this installation, referring to the following example and details:

    ``` json
    "Scheduling": {
        "Enabled": true,
        "Windows": [
            { "Days": [ "Mon", "Tue", "Wed", "Thu", "Fri" ], "Start": "20:00", "End": "06:00" },
            { "Days": [ "Sat", "Sun" ], "Start": "00:00", "End": "23:59" }
        ]
    },
    ```

    | Name | Description |
    |------|-------------|
    | `Enabled` | Whether documentation generation is restricted to the run windows. The default is `false`, which allows documentation to be generated at any time. |
    | `Windows` | The list of run windows. Documentation can be generated when any of the windows is open. If windows overlap, they are combined. |
    | `Days` | The days of the week that the window opens on, using either the short or the full name of each day:<ul><li>`Mon` or `Monday`</li><li>`Tue` or `Tuesday`</li><li>`Wed` or `Wednesday`</li><li>`Thu` or `Thursday`</li><li>`Fri` or `Friday`</li><li>`Sat` or `Saturday`</li><li>`Sun` or `Sunday`</li></ul>Days are not case sensitive. This is optional; if it is not specified, the window opens every day. |
    | `Start` | The time that the window opens, in 24-hour `HH:mm` format. For example, `00:00` is 12am (midnight); `08:00` is 8am; `12:00` is 12pm (midday); `20:00` is 8pm. |
    | `End` | The time that the window closes, in 24-hour `HH:mm` format. If `End` is earlier than `Start`, the window runs overnight into the next morning. `End` must be different to `Start`. For a window that is open all day, use a `Start` of `00:00` and an `End` of `23:59`. |

    {{% alert title="Note" %}} An overnight window belongs to the day that it opens on. For example, a window with `Days` set to `Mon`, `Start` set to `20:00` and `End` set to `06:00` is open from Monday at 20:00 until Tuesday at 06:00, even though Tuesday is not listed. {{% /alert %}}

1. Save the file.
1. Repeat these steps for the `appsettings.json` file located in `C:\ProgramData\SF\<CustomerName>.<NodeName>\Fabric\work\ImageCache\Store\Cortex.Innovation.AI\DocumentationPkg.Code.<Version>`.
1. {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.RestartTheCodePackage" title="Restart the Documentation Service code package" >}}.

The Documentation Service checks the run windows when it starts and does not start if a time is not a valid `HH:mm` time, if a `Start` is the same as its `End`, or if a day is not recognised. The error names the setting that is incorrect.

## Check the Status of a Job

A job that is waiting for a run window has the status `Paused` when its status is checked using the API, as described in {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.WebApplicationServer.TryItOut" title="Try it Out" >}}. Flows that have already been completed can be retrieved while the job is `Paused`.
