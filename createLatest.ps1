$Path = ".\config\_default\config.toml"
$latestName = "latest"

$LatestVersion = (Select-String -Path $Path -Pattern "latest = true" -Context 3, 0) -split "`"" 

#Use $LatestVersion[1] as we know that the version is the first line returned and splitting on " makes it the 2nd index
$Version = $LatestVersion[1]

if (Test-Path ".\content\en\docs\$latestName"){
    Remove-Item -LiteralPath ".\content\en\docs\$latestName" -Force -Recurse
}
New-Item -ItemType Directory -Path ".\content\en\docs\$latestName\" -Force
Copy-Item -Path ".\content\en\docs\$Version\*" -Destination ".\content\en\docs\$latestName\" -Recurse -Force
(Get-Content .\content\en\docs\latest\_index.md) -replace $Version, "Latest" | Set-Content .\content\en\docs\latest\_index.md

New-Item -ItemType Directory -Path ".\content\static\$latestName\" -Force
Copy-Item -Path ".\content\static\$Version\*" -Destination ".\content\static\$latestName\" -Recurse -Force
