The following folders require `Modify` permission to allow creating the `NuGet` folders and its `NuGet.Config` file within:

* `C:\Windows\System32\config\systemprofile\AppData\Roaming`
* `C:\Windows\SysWOW64\config\systemprofile\AppData\Roaming`

For each folder, perform the following steps:

1. Navigate to the `AppData` folder.
1. Right-click on the `Roaming` folder and click `Properties`.
1. In the dialog, click the `Security` tab.
1. Check the `Application Pool` user that will be used for {{% ctx %}} Gateway is listed in the `Group or user names` and has `Modify` permissions.
1. If the `Application Pool` user that will be used for {{% ctx %}} Gateway is not listed:
   1. Click the `Edit...` button.
   1. Click the `Add...` button.
   1. Enter the username of the application pool user and click `OK`.
   1. In the `Permissions` section at the bottom, check `Modify`.
   1. Click `OK`.
   1. Click `Yes` to change the permission to the folder.
1. If the `Application Pool` user that will be used for {{% ctx %}} Gateway is listed but does not have permissions:
   1. Click the `Edit...` button.
   1. Select the `Application Pool` user.
   1. Check `Modify`.
   1. Click `OK`.
   1. Click `Yes` to change the permission to the folder.
