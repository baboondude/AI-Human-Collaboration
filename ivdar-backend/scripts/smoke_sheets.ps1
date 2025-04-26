# scripts/smoke_sheets.ps1
<#
Quick "does it boot & hit /sheets/dashboard?" check.
Requires:
  - pyproject deps installed via Poetry
  - .env with valid creds   (we only check that the file exists)
#>

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Get-PoetryExe {
    $poetry = Get-Command poetry -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1
    if (-not $poetry) {
        $candidates = @(
            "$env:LOCALAPPDATA\pypoetry\bin\poetry.exe",
            "$env:USERPROFILE\AppData\Roaming\Python\Scripts\poetry.exe"
        ) | Where-Object { Test-Path $_ }
        if ($candidates) { $poetry = $candidates[0] }
    }
    if (-not $poetry) { throw "ERROR: Poetry not found in PATH or common install locations." }
    return $poetry
}

$poetryExe = Get-PoetryExe
Write-Host "OK: Using Poetry at $poetryExe"

# Check for .env file existence
if (-not (Test-Path .env)) { throw "ERROR: .env file missing. Please create it from .env.example." }

# Start backend
$process = Start-Process $poetryExe -ArgumentList "run", "uvicorn", "app.main:app", "--port=8000" -PassThru
Write-Host "INFO: Started backend process PID: $($process.Id)"
Start-Sleep -Seconds 5     # give server time to boot

# Hit the dashboard endpoint
try {
    Write-Host "INFO: Pinging http://127.0.0.1:8000/sheets/dashboard..."
    $resp = Invoke-WebRequest -Uri "http://127.0.0.1:8000/sheets/dashboard" -UseBasicParsing -TimeoutSec 10
    Write-Host "INFO: Received status code $($resp.StatusCode)"
    if ($resp.StatusCode -ne 200) { throw "ERROR: Non-200 status code from endpoint: $($resp.StatusCode)" }
    Write-Host "OK: Smoke test passed (HTTP 200)"
} catch {
    Write-Error "ERROR: Smoke test failed. Details: $_"
    throw $_ # Re-throw the exception to ensure non-zero exit code
} finally {
    if ($process -and !$process.HasExited) {
        Write-Host "INFO: Stopping backend process PID: $($process.Id)"
        $process | Stop-Process -Force
        Write-Host "INFO: Backend process stopped."
    }
}