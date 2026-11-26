#Requires -Version 5.1

<#
.DESCRIPTION
    Checks that CORTEX release, hotfix or patch files match the ones released by CORTEX, by comparing the SHA256 hash
    of each file with the hash for it in the SHA256.txt published by CORTEX for that delivery.

    SHA256.txt ends with a signature made with CORTEX's private key. The signature is checked first, with CORTEX's
    public key built into this script, so any change to SHA256.txt is detected. If the signature is not valid, no files
    are checked and the overall result is FAIL.

    Each file listed in SHA256.txt is then reported as PASS (hashes match), FAIL (hashes differ) or NOT PRESENT (the
    file is not in the artefact folder). Listed files that are not present, and files in the artefact folder that are not
    listed, are reported as warnings.

    The overall result is:
    - PASS if every listed file is present and matches, and there are no warnings.
    - Partial PASS if every file checked matches, but there are warnings.
    - FAIL if any file checked does not match, or no files could be checked.

    Online, use -Release to download the SHA256.txt for a delivery from CORTEX's GitHub docs repository.
    Offline, use -HashFile with the SHA256.txt delivered with the files.

    Download this script from docs.wearecortex.com, not from a delivery, and before using it compare its SHA256 hash
    (Get-FileHash) with the one in the release notes.

.PARAMETER Release
    The name of the delivery folder, e.g. 2026.9 for a release, or 2025.3.26111-HotFix.26461 for a hotfix or patch.

.PARAMETER HashFile
    The path to the SHA256.txt delivered with the files.

.PARAMETER ArtefactFolder
    The folder containing the delivered files. Defaults to the current folder with -Release, and to the folder
    containing the hash file with -HashFile.

.EXAMPLE
    .\Cortex.Innovation.VerifyReleaseArtefactHashes.ps1 -Release 2026.9 -ArtefactFolder "D:\Cortex\2026.9"

.EXAMPLE
    .\Cortex.Innovation.VerifyReleaseArtefactHashes.ps1 -Release 2025.3.26111-HotFix.26461 -ArtefactFolder "D:\Cortex\2025.3.26111-HotFix.26461"

.EXAMPLE
    .\Cortex.Innovation.VerifyReleaseArtefactHashes.ps1 -HashFile "D:\Cortex\2026.9\SHA256.txt"

.NOTES
    Version : 2.0.0.26460
#>

[CmdletBinding(DefaultParameterSetName = 'Online')]
param(
    [Parameter(Mandatory = $true, ParameterSetName = 'Online')]
    [ValidatePattern('^[A-Za-z0-9][A-Za-z0-9.\-]*$')]
    [string] $Release,

    [Parameter(Mandatory = $true, ParameterSetName = 'Offline')]
    [string] $HashFile,

    [Parameter(Mandatory = $false)]
    [string] $ArtefactFolder
)

$HashBaseUrl = 'https://raw.githubusercontent.com/CortexIntelligentAutomation/docs/main/content/static/release-artefact-hashes'
$PublicKeyModulus = 'pHfDEINkYyxA9mAYaabr8sDhwpV1WzZKYZjv5r0e+Q1fwir6ijo2bL6JoHdA3nX1fFJ5qEH02TqaW+qxinFVqpgGhwKVSDmkVJ7d3K8ae7JYQ76LYT8IUjse+IaIiA8J1G10Fbwzr+v549MNXN2ZMTHsQfhxJdOs3ZJ25AOj5Hzy6s8cMv8cmSGOL8ifolOHXpWGkr66fdmDSHpFxvfQYOahwna9zQ3sYzKqnCR28reD+FIawJliMS4C5JqNCq59OaOYI0nDvbxAPIVOB6UP3kUOI3JZDr2gEpFhZ07aI0vLl5Xtp1RLhuj6z3B+wU2VURp3scyuFaLFycPC8BOZ+qSsm4xCFarj1gbd+YCui1jjN0ocDmeJxjR4mRMnGBhP9n/SLrEUqmSltT2ZzXe4QYZ19HrBsRHQlQWdiyN5p4rapgweIDfW2cuK5XgGgOIssE3B31/vuW9xHqZReUy7DqUWpftZAA/Fgvz+CG0pPcUuqPcFfSpC0Z5nrAVFt1+5'
$PublicKeyExponent = 'AQAB'

function Get-SignedHashList {
    # Checks the signature on the last line of the hash file against every byte before that line, and returns the
    # signature status and the signed text.
    param(
        [byte[]] $Bytes,
        [System.Security.Cryptography.RSAParameters] $PublicKey
    )

    $end = $Bytes.Length
    if ($end -gt 0 -and $Bytes[$end - 1] -eq 10) {
        $end--
    }

    $lastLineStart = [Array]::LastIndexOf($Bytes, [byte]10, [Math]::Max($end - 1, 0)) + 1
    if ($end -eq 0 -or $lastLineStart -ge $end) {
        return @{ Status = 'NotSigned' }
    }

    $lastLine = [System.Text.Encoding]::UTF8.GetString($Bytes, $lastLineStart, $end - $lastLineStart).TrimEnd("`r")
    if ($lastLine -notmatch '^# Signature: (?<signature>[A-Za-z0-9+/=]+)$') {
        return @{ Status = 'NotSigned' }
    }

    $signedBytes = New-Object byte[] $lastLineStart
    [Array]::Copy($Bytes, $signedBytes, $lastLineStart)

    try {
        $signature = [Convert]::FromBase64String($Matches['signature'])
    }
    catch {
        return @{ Status = 'NotValid' }
    }

    $rsa = New-Object System.Security.Cryptography.RSACryptoServiceProvider
    try {
        $rsa.ImportParameters($PublicKey)
        $valid = $rsa.VerifyData($signedBytes, 'SHA256', $signature)
    }
    finally {
        $rsa.Dispose()
    }

    if (-not $valid) {
        return @{ Status = 'NotValid' }
    }

    @{ Status = 'Valid'; Text = [System.Text.Encoding]::UTF8.GetString($signedBytes) }
}

if (-not $PublicKeyModulus) {
    Write-Error "This copy of the script has no CORTEX public key, so it cannot check signatures. Download the script from docs.wearecortex.com."
    exit 1
}

$publicKey = New-Object System.Security.Cryptography.RSAParameters
$publicKey.Modulus = [Convert]::FromBase64String($PublicKeyModulus)
$publicKey.Exponent = [Convert]::FromBase64String($PublicKeyExponent)

$sha256 = [System.Security.Cryptography.SHA256]::Create()
$keyFingerprint = -join ($sha256.ComputeHash($publicKey.Modulus) | ForEach-Object { $_.ToString('X2') })
$sha256.Dispose()

if ($PSCmdlet.ParameterSetName -eq 'Online') {
    $hashSource = "$HashBaseUrl/$Release/SHA256.txt"

    # Windows PowerShell 5.1 does not use TLS 1.2 by default, which GitHub requires.
    [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

    # The raw bytes are needed for the signature check, so the file is not decoded as text.
    $webClient = New-Object System.Net.WebClient
    try {
        if ($webClient.Proxy) {
            $webClient.Proxy.Credentials = [Net.CredentialCache]::DefaultNetworkCredentials
        }

        $hashBytes = $webClient.DownloadData($hashSource)
    }
    catch {
        Write-Error ("No hashes are published for release '$Release', or $hashSource could not be reached " +
            "($($_.Exception.GetBaseException().Message)). Check the release folder name, or use -HashFile with the " +
            "SHA256.txt from the delivery.")
        exit 1
    }
    finally {
        $webClient.Dispose()
    }

    if (-not $ArtefactFolder) {
        $ArtefactFolder = (Get-Location).ProviderPath
    }
}
else {
    if (-not (Test-Path -LiteralPath $HashFile -PathType Leaf)) {
        Write-Error "The hash file '$HashFile' does not exist."
        exit 1
    }

    $HashFile = (Resolve-Path -LiteralPath $HashFile).ProviderPath
    $hashSource = $HashFile
    $hashBytes = [System.IO.File]::ReadAllBytes($HashFile)

    if (-not $ArtefactFolder) {
        $ArtefactFolder = Split-Path -Parent $HashFile
    }
}

if (-not (Test-Path -LiteralPath $ArtefactFolder -PathType Container)) {
    Write-Error "The artefact folder '$ArtefactFolder' does not exist."
    exit 1
}

$ArtefactFolder = (Resolve-Path -LiteralPath $ArtefactFolder).ProviderPath

$signedHashList = Get-SignedHashList -Bytes $hashBytes -PublicKey $publicKey

$signatureText = switch ($signedHashList.Status) {
    'Valid' { 'VALID' }
    'NotSigned' { 'NOT SIGNED' }
    default { 'NOT VALID' }
}

Write-Host "CORTEX Release Artefact Hash Check"
Write-Host "Date            : $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss zzz'))"
Write-Host "Computer        : $env:COMPUTERNAME"
Write-Host "Hash Source     : $hashSource"
Write-Host "Artefact Folder : $ArtefactFolder"
Write-Host "Key Fingerprint : $keyFingerprint"
Write-Host "Signature       : $signatureText"
Write-Host ""

if ($signedHashList.Status -eq 'NotSigned') {
    Write-Host "The hash file is not signed, so it cannot be trusted. Use the SHA256.txt exactly as published by CORTEX."
    Write-Host ""
    Write-Host "OVERALL: FAIL (hash file is not signed)" -ForegroundColor Red
    exit 1
}

if ($signedHashList.Status -eq 'NotValid') {
    Write-Host "The hash file's signature is not valid, so the hash file has been changed since CORTEX signed it, or was not signed by CORTEX. No files were checked."
    if ([Array]::IndexOf($hashBytes, [byte]13) -ge 0) {
        Write-Host "The file's line endings may have been changed (for example by an editor or a file transfer). Use the file exactly as delivered."
    }
    Write-Host ""
    Write-Host "OVERALL: FAIL (hash file signature is not valid)" -ForegroundColor Red
    exit 1
}

# Lines are '<hash>  <file name>'.
$listed = @(foreach ($line in $signedHashList.Text.Split("`n")) {
    if ($line -match '^(?<hash>[0-9A-Fa-f]{64})  (?<name>.+)$') {
        [pscustomobject]@{ Name = $Matches['name']; Expected = $Matches['hash'].ToUpperInvariant() }
    }
})

if ($listed.Count -eq 0) {
    Write-Host "The hash file does not list any files."
    Write-Host ""
    Write-Host "OVERALL: FAIL (no artefacts listed)" -ForegroundColor Red
    exit 1
}

# Each row is written as soon as its file is checked, as hashing large files, especially over a network, takes a while.
$nameWidth = [Math]::Max('Artefact'.Length, ($listed | ForEach-Object { $_.Name.Length } | Measure-Object -Maximum).Maximum)
Write-Host ("{0,-$nameWidth} Result" -f 'Artefact')
Write-Host ("{0,-$nameWidth} ------" -f '--------')

$resultColours = @{ 'PASS' = 'Green'; 'FAIL' = 'Red'; 'NOT PRESENT' = 'Yellow' }
$results = for ($index = 0; $index -lt $listed.Count; $index++) {
    $name = $listed[$index].Name
    $expected = $listed[$index].Expected
    $path = Join-Path $ArtefactFolder $name

    Write-Progress -Activity 'Checking the artefacts' -Status "$($index + 1) of $($listed.Count): $name" `
        -PercentComplete ([int](100 * $index / $listed.Count))

    if (Test-Path -LiteralPath $path -PathType Leaf) {
        $actual = (Get-FileHash -LiteralPath $path -Algorithm SHA256).Hash
        $result = if ($actual -eq $expected) { 'PASS' } else { 'FAIL' }
    }
    else {
        $actual = ''
        $result = 'NOT PRESENT'
    }

    Write-Host ("{0,-$nameWidth} " -f $name) -NoNewline
    Write-Host $result -ForegroundColor $resultColours[$result]

    [pscustomobject]@{
        Artefact = $name
        Result   = $result
        Expected = $expected
        Actual   = $actual
    }
}

Write-Progress -Activity 'Checking the artefacts' -Completed
$results = @($results)
Write-Host ""

$failed = @($results | Where-Object Result -eq 'FAIL')
$checked = @($results | Where-Object Result -ne 'NOT PRESENT')

foreach ($failure in $failed) {
    Write-Host "FAIL: $($failure.Artefact)"
    Write-Host "  Expected : $($failure.Expected)"
    Write-Host "  Actual   : $($failure.Actual)"
    Write-Host ""
}

# Missing and extra files are warned about, but do not change the overall result, which only depends on whether the
# files that were checked match.
$missing = @($results | Where-Object Result -eq 'NOT PRESENT')

$listedNames = New-Object 'System.Collections.Generic.HashSet[string]' ([StringComparer]::OrdinalIgnoreCase)
foreach ($result in $results) {
    [void]$listedNames.Add($result.Artefact)
}

# The hash file and this script are not part of the delivery, so are not extra files.
$notDelivered = @($PSCommandPath, $HashFile) | Where-Object { $_ }
$extraFiles = @(Get-ChildItem -LiteralPath $ArtefactFolder -File |
    Where-Object { -not $listedNames.Contains($_.Name) -and $_.Name -ne 'SHA256.txt' -and $notDelivered -notcontains $_.FullName } |
    Sort-Object Name |
    Select-Object -ExpandProperty Name)

if ($missing.Count -gt 0) {
    $count = if ($missing.Count -eq 1) { '1 listed artefact is' } else { "$($missing.Count) listed artefacts are" }
    Write-Host "WARNING: $count not present in the artefact folder, so not checked:" -ForegroundColor Yellow
    foreach ($artefact in $missing) {
        Write-Host "  $($artefact.Artefact)"
    }
    Write-Host ""
}

if ($extraFiles.Count -gt 0) {
    $count = if ($extraFiles.Count -eq 1) { '1 file in the artefact folder is' } else { "$($extraFiles.Count) files in the artefact folder are" }
    Write-Host "WARNING: $count not listed in the hash file, so not supplied by CORTEX in this delivery:" -ForegroundColor Yellow
    foreach ($extraFile in $extraFiles) {
        Write-Host "  $extraFile"
    }
    Write-Host ""
}

$warningCount = $missing.Count + $extraFiles.Count

if ($checked.Count -eq 0) {
    Write-Host "None of the artefacts in the hash file were found in '$ArtefactFolder'. Use -ArtefactFolder to give the folder containing the delivered files."
    Write-Host ""
    Write-Host "OVERALL: FAIL (no artefacts checked)" -ForegroundColor Red
    exit 1
}

if ($failed.Count -gt 0) {
    Write-Host ("OVERALL: FAIL ($($failed.Count) of $($checked.Count) checked artefacts do not match and are not verified " +
        "CORTEX Release Artefacts published by WeAreCORTEX)") -ForegroundColor Red
    exit 1
}

# A partial pass is still a pass: every file that was checked is genuine, but some listed files were missing or some
# unlisted files were found.
if ($warningCount -gt 0) {
    $warningsRaised = if ($warningCount -eq 1) { '1 warning raised' } else { "$warningCount warnings raised" }
    Write-Host ("OVERALL: Partial PASS ($($checked.Count) of $($results.Count) artefacts checked, $warningsRaised, all checked " +
        "hashes match and are verified CORTEX Release Artefacts published by WeAreCORTEX)") -ForegroundColor Yellow
    exit 0
}

Write-Host ("OVERALL: PASS ($($checked.Count) of $($results.Count) artefacts checked, all hashes match and are verified " +
    "CORTEX Release Artefacts published by WeAreCORTEX)") -ForegroundColor Green
exit 0
