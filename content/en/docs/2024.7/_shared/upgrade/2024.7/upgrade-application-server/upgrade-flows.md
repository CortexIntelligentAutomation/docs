On the Web Application Server, copy the `Cortex Innovation 2024.7 - Upgrade Flows.zip` artefacts to a folder on it:
1. Extract the `Cortex Innovation 2024.7 - Upgrade Flows.zip` file to a folder with the same name.
1. Open a Windows PowerShell (x64) window as administrator. The administrator must be a domain user that is a member of the local Administrators group on the Web Application Server.
1. Navigate PowerShell to inside the `Cortex Innovation 2024.7 - Upgrade Flows` folder using the following command, modifying the path as necessary:

    ```powershell
    cd "C:\Install\Cortex Innovation 2024.7 - Upgrade Flows"
    ```

1. Export the flows to be upgraded from Gateway as a studio package.
1. Run the `Cortex.Upgrade.FlowUpgrader.exe` application using the following command, modifying the argument value to contain the extracted studio package of flows to upgrade:

    ```powershell
    .\Cortex.Upgrade.FlowUpgrader.exe "C:\Install\Export.studiopkg"
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

1. A new studio package will be created in the same file path as the package given as the argument with the format `{PackageName}-{PreviousVersion}UpgradedTo{NewVersion}.studiopkg`.
