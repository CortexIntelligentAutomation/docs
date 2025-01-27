Remove-item -ItemType Directory -Path "content/en/docs/latest/" -Force
New-Item -ItemType Directory -Path "content/en/docs/latest/" -Force
Copy-Item -Path "content/en/docs/2024.11/*" -Destination "content/en/docs/latest/" -Recurse -Force