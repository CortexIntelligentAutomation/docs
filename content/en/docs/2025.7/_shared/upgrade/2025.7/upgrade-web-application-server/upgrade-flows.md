1. Export the flows to be upgraded from {{% ctx %}} Gateway as a studio package:
    1. In a browser, navigate to {{% ctx %}} Gateway and log in as a user with administrative privileges.
    1. Click on the `Settings` charm and select `Studio Export`.
    1. Select all the flows to be upgraded and click `Export`.
    1. A message should be displayed confirming that the studio package was exported successfully.
1. Open a Windows PowerShell (x64) window as administrator.
1. Navigate PowerShell to inside the `Cortex Innovation 2025.7 - Flows Upgrader` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2025.7 - Flows Upgrader"
    ```

1. Run the `Cortex.Upgrade.FlowsUpgrader.exe` application using the following command, modifying the path specified to contain the extracted studio package of flows to upgrade (typically this will have been exported to the local `Downloads` folder):

    ```powershell
    .\Cortex.Upgrade.FlowsUpgrader.exe "C:\Users\{Username}\Downloads\export.studiopkg"
    ```

1. A message similar to the following will indicate that the application has completed successfully:

    ```text
    Upgrading Flows
    Flow Upgraded: Test Flows\TestFlow1.flow
    Flow Upgraded: Test Flows\TestFlow3.flow
    Flow Upgraded: Test Flows\TestFlow2.flow
    Flows Upgraded
    Upgraded Studio Package Created: export-28UpgradedTo30.StudioPkg
    ```

    A new studio package will have been created in the same location as the original export package with the name `{PackageName}-{PreviousVersion}UpgradedTo{NewVersion}.studiopkg`.
1. Import the upgraded flow package into {{% ctx %}} Gateway:
    1. In a browser, navigate to {{% ctx %}} Gateway and log in as a user with administrative privileges.
    1. Click on the `Settings` charm and select `Studio Import`.
    1. Select `Browse` and locate and select the upgraded studio package and click `Open`.
    1. Verify that there are no flows with a red status and click `Import`.
    1. A message should be displayed confirming that the studio package was imported successfully.
