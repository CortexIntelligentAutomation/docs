#### Cortex Blocks Provider Host folder

Check that the {{% ctx %}} Gateway `Application Pool` user has rights to the `Cortex Blocks Provider Host folder` folder using the following steps:

1. Navigate to `C:\ProgramData\Cortex`
1. Right-click on the `Cortex Blocks Provider Host` folder and click `Properties`.
1. In the dialog, click the `Security` tab.
1. Check the `Application Pool` user for Gateway is listed in the `Group or user names` and has `Modify` permissions.
1. If the `Application Pool` user for Gateway is not listed:
   1. Click the `Edit...` button.
   1. Click the `Add...` button.
   1. Enter the username of the application pool user and click `OK`.
   1. In the `Permissions` section at the bottom, check `Modify`.
   1. Click `OK`.
1. If the `Application Pool` user for Gateway is listed but does not have permissions:
   1. Click the `Edit...` button.
   1. Select the `Application Pool` user.
   1. Check `Modify`.
   1. Click `OK`.
