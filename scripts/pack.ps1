# Build downloadable offline zip for the DoThis website
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot

$Downloads = Join-Path $Root "downloads"
New-Item -ItemType Directory -Force -Path $Downloads | Out-Null

$OfflineZip = Join-Path $Downloads "dothis-offline.zip"
if (Test-Path $OfflineZip) { Remove-Item $OfflineZip -Force }

$stage = Join-Path $env:TEMP "dothis-offline-stage"
if (Test-Path $stage) { Remove-Item $stage -Recurse -Force }
New-Item -ItemType Directory -Force -Path $stage | Out-Null

$siteFiles = @(
  "index.html",
  "guide.html",
  "privacy.html",
  "styles.css",
  "app.js",
  "config.js",
  "OFFLINE-README.txt",
  "robots.txt"
)
foreach ($f in $siteFiles) {
  $src = Join-Path $Root $f
  if (Test-Path $src) {
    Copy-Item $src (Join-Path $stage $f) -Force
  }
}
Copy-Item (Join-Path $Root "data") (Join-Path $stage "data") -Recurse -Force

$stageDl = Join-Path $stage "downloads"
New-Item -ItemType Directory -Force -Path $stageDl | Out-Null
Set-Content -Path (Join-Path $stageDl "README.txt") -Value "You already have the offline copy. Open index.html in the parent folder." -Encoding UTF8

Compress-Archive -Path (Join-Path $stage "*") -DestinationPath $OfflineZip -Force
Remove-Item $stage -Recurse -Force

Write-Host "Created $OfflineZip"
Get-Item $OfflineZip | Format-List Name, Length, LastWriteTime
