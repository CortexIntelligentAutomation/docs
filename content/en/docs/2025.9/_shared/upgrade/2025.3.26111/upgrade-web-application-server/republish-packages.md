1. Log in to Gateway with a user that has the `Admin` role.
1. Click on the `Admin` charm, then `Packages`.
1. In the `Package Definitions` grid, select `Is Published` filter option on the `Is Published` column to show all published packages.
1. For each published package version:
    * Select the package.
    * Click  `Unpublish` at the bottom of the `Definition` tab and click `Unpublish` on the confirmation pop-up dialog. A success message should appear. If it doesn't it means that there is a problem with the configuration in the `web.config` file for {{% ctx %}} Gateway, or the Application Services aren't healthy.
    * Click `Create New Version` then click `Save` and wait for the new version to be created.
    * Click `Publish`. A success message should appear. If it doesn't it means that there is a problem with the configuration in the `web.config` file for {{% ctx %}} Gateway, or the Application Services aren't healthy.
    * Sometimes the list of published packages in the `Package Definitions` grid disappears. To fix, set the `Is Published` filter in the `Package Definitions` grid to blank option and then set the filter to `Is Published` option again to show all published packages.
