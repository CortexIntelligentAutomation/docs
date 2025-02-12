Service Fabric requires access to the `C:\ProgramData\Microsoft\Crypto\` folder for the `Network Service` users.

Grant access to the `Network Service` user following these instructions:

1. Open a Windows PowerShell (x64) window as administrator.
1. Run the following command:

```bash
icacls "C:\ProgramData\Microsoft\Crypto\*" /grant *S-1-5-20:RX /t
```

{{% alert title="Note" %}}
Some files might fail to be processed with `Access is denied`. This can be ignored.
{{% /alert %}}
