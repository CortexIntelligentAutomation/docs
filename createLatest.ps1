$Path = ".\config\_default\config.toml"
$latestName = "latest"

$LatestVersion = (Select-String -Path $Path -Pattern "latest = true" -Context 3, 0) -split "`"" 

# Use $LatestVersion[1] as we know that the version is the first line returned and splitting on " makes it the 2nd index
$Version = $LatestVersion[1]

# Remove latest folder and contents in docs if it already exists
if (Test-Path ".\content\en\docs\$latestName"){
    Remove-Item -LiteralPath ".\content\en\docs\$latestName" -Force -Recurse
}
# Create new latest docs folder
New-Item -ItemType Directory -Path ".\content\en\docs\$latestName\" -Force
# Copy contents of latest XXXX.X version into latest folder
Copy-Item -Path ".\content\en\docs\$Version\*" -Destination ".\content\en\docs\$latestName\" -Recurse -Force
Dir ".\content\en\docs\$latestName\" | Get-Childitem
# Replace the title name for the folder to be latest
(Get-Content .\content\en\docs\latest\_index.md) -replace $Version, "Latest" | Set-Content .\content\en\docs\latest\_index.md

# Remove latest folder and contents in static if it already exists
if (Test-Path ".\content\static\$latestName"){
    Remove-Item -LiteralPath ".\content\static\$latestName" -Force -Recurse
}
# Create new latest static folder
New-Item -ItemType Directory -Path ".\content\static\$latestName\" -Force
# Copy contents of latest XXXX.X version into latest folder
Copy-Item -Path ".\content\static\$Version\*" -Destination ".\content\static\$latestName\" -Recurse -Force
Dir ".\content\static\$latestName\" | Get-Childitem
