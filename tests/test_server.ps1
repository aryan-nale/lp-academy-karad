# tests/test_server.ps1
$job = Start-Job -ScriptBlock {
    powershell -ExecutionPolicy Bypass -File "e:\ACE-Academy-main\tests\serve.ps1" -Port 8089
}
Start-Sleep -Seconds 2

try {
    $pages = @("index.html", "about.html", "courses.html", "teachers.html", "facilities.html", "contact.html", "results.html")
    foreach ($p in $pages) {
        $res = Invoke-WebRequest -Uri "http://localhost:8089/$p" -UseBasicParsing
        Write-Host "✅ GET /$p -> Status $($res.StatusCode), Size $($res.Content.Length) bytes"
    }
} finally {
    Stop-Job $job
    Remove-Job $job
    Write-Host "Server job stopped."
}
