# Ensure script runs from ivdar-backend directory
$env:GOOGLE_SERVICE_ACCOUNT_FILE="secrets\service_account.json"
$env:GOOGLE_SHEET_ID="1Bt0Ke7U3N7OeNsqTUVzILXDVWzBkrykUeul5-dICFJ0"

# Use the specified Python executable for Poetry
$POETRY_PY = "C:\Users\btkep\AppData\Roaming\Python\Scripts\python.exe"

Write-Host "Starting Uvicorn server via Poetry..."
$p = Start-Process -FilePath $POETRY_PY \
    -ArgumentList "-m","poetry","run","uvicorn","app.main:app","--port","8000" \
    -PassThru -WindowStyle Hidden

if (-not $p) {
    Write-Error "Failed to start Uvicorn process using $POETRY_PY"
    exit 1
}

Write-Host "Waiting for server to start... (PID: $($p.Id))"
Start-Sleep -Seconds 8

$targetUrl = "http://127.0.0.1:8000/sheets/dashboard"
Write-Host "Sending request to $targetUrl..."

try {
    $response = Invoke-RestMethod $targetUrl -UseBasicParsing -TimeoutSec 10 # Added timeout
    Write-Host "Response received:"
    $response | ConvertTo-Json -Depth 4 | Out-Host
} catch {
    Write-Error "Failed to get response from $targetUrl : $_"
}
finally {
    if ($p) {
        Write-Host "Stopping Uvicorn server (PID: $($p.Id))..."
        Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue # Added error action
        Write-Host "Server stopped."
    }
} 