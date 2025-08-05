1. Log in to Gateway with a user that has the `Admin` role.
1. Click on the `Admin` charm, then `Packages`.
1. Click `Add Package Definition`. Enter a package name and select the new flow to add to the package. Click `Save` to save the new package.
1. Click `Publish`. A success message should appear. If it doesn't it means that there is a problem with the configuration in the `web.config` file for {{% ctx %}} Gateway, or the Application Services aren't healthy. See [Troubleshooting][] for more information.

[Troubleshooting]: {{< url path="Cortex.Reference.Troubleshooting.Upgrade.TroubleshootingDuringUpgrade" >}}
