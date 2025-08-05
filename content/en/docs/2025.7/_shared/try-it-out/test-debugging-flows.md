Test the platform by creating a new flow and executing it using the following steps:

1. Click on the `Dev` charm, then the `+` button and click `Group` to open a dialog.
1. Enter a name for the group, configure the `Permission Groups` and click `OK` to create the group.
1. Click on the group to open it (refresh the page if it does not appear).
1. Inside the group, click the `+` button again and click on `Activity` to open a dialog. If the menu item is not present, it means that the `FeatureFlags` in the `CortexGateway.SetParameters.xml` file was not set properly when installing Gateway. See [Troubleshooting][Troubleshooting No Innovation] for more information.
1. Enter a name for the flow, configure the `Permission Groups` and click `OK` to create the flow.
1. The flow should be displayed with a `Start Flow` block and `End Flow` block, if those blocks are not displayed see [Troubleshooting][Troubleshooting Flow No Blocks]. A list of block palettes should be displayed down the left hand side:
    {{< figure src="/images/CORTEX Flow View.PNG" title="New Flow - Number of palettes may differ" >}}
1. Add a `Set Variable` block and connect it between the `Start Flow` and `End Flow` blocks.
1. Click the `Set Variable` block to open the Property Editor.
1. Set the `Value` property to the expression `new Guid.NewGuid()`.
1. Type `Result` into the `Variable` property and click `Create Result`.
1. In the Variables Grid, set `Is Output Variable?` to `true` for the new `Result` variable.
1. Add a breakpoint to the `End Flow` block and start the flow. An execution token should appear.
   If the token does not appear, try refreshing the page. Failing that, see [Troubleshooting][Troubleshooting Flow Not Starting].
1. Select the execution in the Executions Grid (bottom panel).
1. The `Result` variable displayed in the Variables Viewer (right panel) should show a GUID.
1. Continue or stop the execution.
1. Commit the flow.

[Troubleshooting Flow Not Starting]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingFlowNotStarting" >}}
[Troubleshooting Flow No Blocks]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingFlowNoBlocks" >}}
[Troubleshooting No Innovation]: {{< url path="Cortex.Reference.Troubleshooting.Installation.TroubleshootingNoInnovation" >}}
