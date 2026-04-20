while (!(Test-Path "C:\FS2Exp9\frontend\package.json")) {
    Start-Sleep -Seconds 5
}
Write-Output "package.json found. Waiting for CRA to finish..."
while (!(Test-Path "C:\FS2Exp9\frontend\src\App.js")) {
    Start-Sleep -Seconds 5
}

Write-Output "CRA finished. Installing dependencies..."
Set-Location C:\FS2Exp9\frontend
npm install axios bootstrap react-router-dom @mui/material @emotion/react @emotion/styled

Write-Output "Copying temp files to src..."
Copy-Item -Path C:\FS2Exp9\frontend_temp\* -Destination C:\FS2Exp9\frontend\src\ -Force

Write-Output "Setup complete. Run npm start inside C:\FS2Exp9\frontend"
