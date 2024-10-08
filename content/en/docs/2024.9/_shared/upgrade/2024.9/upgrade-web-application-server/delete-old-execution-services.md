
1. Navigate to the service fabric explorer in a web browser.
1. Expand `Cluster` then `Applications` then `Cortex.Innovation.Execution`
1. For all old execution applications
    * Click on the drop down menu and select `Delete Application`
    * Give this a few minutes. If the application does not delete
        * Expand `Nodes`
            * For each node
                * Select the application that matches the engine version number of the application that is being attempted to be deleted
                * Expand each level up to `Code Packages`
                * Click on the drop down menu for `Code` and select `Restart`.
                * Give this a few minutes. The application should be deleted and disappear from the list of applications.