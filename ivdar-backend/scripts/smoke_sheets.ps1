# Ensure script runs from ivdar-backend directory
$env:GOOGLE_SERVICE_ACCOUNT_FILE="secrets\service_account.json"
$env:GOOGLE_SHEET_ID="1Bt0Ke7U3N7OeNsqTUVzILXDVWzBkrykUeul5-dICFJ0"

Write-Host "Starting Uvicorn server..."
# Start Uvicorn in the background
$Process = Start-Process python -ArgumentList "-m uvicorn app.main:app --port 8000" -PassThru -WindowStyle Hidden

Write-Host "Waiting for server to start... (PID: $($Process.Id))"
Start-Sleep -Seconds 8

Write-Host "Sending request to /sheets/summary..."
try {
    $response = Invoke-RestMethod http://127.0.0.1:8000/sheets/summary -UseBasicParsing
    Write-Host "Response received:"
    $response | ConvertTo-Json -Depth 4 | Out-Host
} catch {
    Write-Error "Failed to get response: $_"
}
finally {
    Write-Host "Stopping Uvicorn server (PID: $($Process.Id))..."
    Stop-Process -Id $Process.Id -Force
    Write-Host "Server stopped."
} 