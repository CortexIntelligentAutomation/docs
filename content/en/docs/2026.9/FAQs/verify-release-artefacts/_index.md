---
title: "How do I verify the release artefacts?"
linkTitle: "How do I verify the release artefacts?"
description: "Instructions on how to check that the release, patch or hotfix artefacts received are the ones released by WeAreCORTEX."
weight: 50
---

# Verify Release Artefacts

For supply chain verification the artefacts received can be checked against those released by WeAreCORTEX using the {{< filedownload src="/release-artefact-hashes/Cortex.Innovation.VerifyReleaseArtefactHashes.ps1" name="Release Artefact Hash Check script" >}}. The script compares the SHA256 hash of each artefact with the hashes published by WeAreCORTEX, which are signed so that any change to them is detected. It can be run on a server with or without internet access.

| Item                    | Value                                                              |
|-------------------------|--------------------------------------------------------------------|
| Script SHA256 hash      | `7C8FEEDF211CC322485E88DEDFE5BF0910E90940B1F3DE23D5195CAD5C1DE682` |
| Signing key fingerprint | `15B0B3127F4D45D76CEC9E3022777EB9086735685BB592631FF86356F0D5D89F` |

## Check the Artefacts

1. Download the {{< filedownload src="/release-artefact-hashes/Cortex.Innovation.VerifyReleaseArtefactHashes.ps1" name="Release Artefact Hash Check script" >}} and copy it to the server containing the artefacts. Do not use a copy of the script supplied with the artefacts.
1. Open a Windows PowerShell (x64) window.
1. Navigate PowerShell to the folder containing the script, and check that the script is genuine by running the following command and ensuring that the hash shown matches the `Script SHA256 hash` above:

    ```powershell
    Get-FileHash -Path .\Cortex.Innovation.VerifyReleaseArtefactHashes.ps1 -Algorithm SHA256
    ```

1. Ensure that the script has not been blocked by the operating system by running the following command:

    ```powershell
    Unblock-File -Path .\Cortex.Innovation.VerifyReleaseArtefactHashes.ps1
    ```

1. Run the script using one of the following commands, modifying the release name and folder paths as necessary:
    * If the server has internet access, the script downloads the published hashes for the release:

        ```powershell
        .\Cortex.Innovation.VerifyReleaseArtefactHashes.ps1 -Release "{{< version >}}" -ArtefactFolder "C:\Install\{{< version >}}"
        ```

    * If the server does not have internet access, use the `SHA256.txt` file supplied with the artefacts:

        ```powershell
        .\Cortex.Innovation.VerifyReleaseArtefactHashes.ps1 -HashFile "C:\Install\{{< version >}}\SHA256.txt"
        ```

1. Check that the output shows a `Key Fingerprint` matching the `Signing key fingerprint` above, `Signature : VALID` and `OVERALL: PASS`. The output can be kept as evidence that the artefacts have been checked.

    `OVERALL: Partial PASS` means that every artefact checked is genuine, but there are warnings: some artefacts in the release were not found in the folder, or the folder contains files that are not in the release. The warnings list these files.

## Patches and Hotfixes

Hotfixes and patches are checked in the same way, using the release name given in their release notes, for example `-Release 2025.3.26111-HotFix.26461`.
