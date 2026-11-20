# tests/check_banned.ps1
$banned = @('Ace Academy', 'Raipur', 'Bhanpuri', 'Shrinagar', 'CBSE', 'ICSE', 'monetag', '8053515171', 'Muskan Kalra', 'mathswithmuskankalra')
$files = Get-ChildItem -Path "e:\ACE-Academy-main\frontend" -Recurse -Include *.jsx, *.html, *.js -Exclude node_modules
$foundAny = $false
foreach ($f in $files) {
    if ($f.FullName -match 'Dashboard|dashboard') { continue }
    $text = [System.IO.File]::ReadAllText($f.FullName)
    # Strip SVG paths to avoid false positives on 'Ace' in geometric coordinates if any
    $clean = [System.Text.RegularExpressions.Regex]::Replace($text, 'd="[^"]*"', '')
    foreach ($b in $banned) {
        if ($clean -match [regex]::Escape($b)) {
            Write-Host "Found '$b' in $($f.FullName)"
            $foundAny = $true
        }
    }
}
if (-not $foundAny) {
    Write-Host "✅ NO BANNED WORDS FOUND in public frontend files!"
}
