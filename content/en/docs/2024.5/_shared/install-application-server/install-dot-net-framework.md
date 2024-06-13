Microsoft Service Fabric requires a minimum of Microsoft .NET Framework 4.7.2 to be installed on the server.

To find the version of the framework that is installed:

1. On the Start menu, choose `Run`.
1. In the open box, enter `regedit.exe`. You must have administrative credentials to run regedit.exe.
1. In the Registry Editor, open the subkey `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full`.
1. If the `Full` subkey is not present, then you do not have the .NET Framework 4.5 or later installed.
1. Check for a `DWORD` value named `Release`. The existence of the Release DWORD indicates the .NET Framework 4.5 or newer has been installed on that computer. If the value is `461808` or over then at least .NET Framework 4.7.2 is installed and no further steps need to be taken. If it is not installed, continue with the following steps to install it.

To install .NET Framework 4.7.2:

1. Download the [.NET Framework 4.7.2][NET Framework 472] installer.
1. Double-click on the installer file to run it.
1. Follow the wizard to complete the installation.

[NET Framework 472]: {{< url path="MSDotNet.Framework472.MainDoc" >}}
