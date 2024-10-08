1. Unpublish existing published packages and create new versions
    * Log in to Gateway with a user that has the `Admin` role.
    * Click on the `Admin` charm, then `Packages`.
    * In the `Package Definitions` grid, select `Is Published` filter on the `Is Published` column to show all published packages.
    * For each published package version
        * Select the package.
        * Click  `Unpublish` at the bottom of the `Definition` tab and click `Unpublish` on the confirmation pop-up dialog. A success message should appear. If it doesn’t it means that there is a problem with the configuration in the web.config file for CORTEX Gateway, or the Application Services aren’t healthy. See Troubleshooting for more information.
        * Click `Create New Version` then click `Save` and wait for the new version to be created.
        * Click `Publish`. A success message should appear. If it doesn’t it means that there is a problem with the configuration in the web.config file for CORTEX Gateway, or the Application Services aren’t healthy. See Troubleshooting for more information.