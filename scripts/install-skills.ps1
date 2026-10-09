# self-made-ebook 電子書 Skills 安裝腳本 (PowerShell)
# 直接在這個 repo 裡使用 AI 助理時「不需要」執行本腳本（.claude/skills 與 AGENTS.md 會自動生效）。
# 只有想在「其他資料夾」也能做電子書時才需要安裝：
#   全域安裝（預設同時裝到 Claude Code 與 Antigravity）：
#     powershell -ExecutionPolicy Bypass -File scripts/install-skills.ps1
#   只裝到某個 AI 助理：-Agent claude 或 -Agent antigravity
#   裝到指定專案資料夾：-TargetWorkspace "C:\path\to\project"

param (
    [ValidateSet("all", "claude", "antigravity")]
    [string]$Agent = "all",
    [string]$TargetWorkspace = ""
)

$SourceDir = Join-Path $PSScriptRoot "..\.claude\skills"
$Skills = Get-ChildItem -Path $SourceDir -Directory

$Destinations = @()
if ($TargetWorkspace -ne "") {
    if ($Agent -in @("all", "claude")) { $Destinations += Join-Path $TargetWorkspace ".claude\skills" }
    if ($Agent -in @("all", "antigravity")) { $Destinations += Join-Path $TargetWorkspace ".agent\skills" }
} else {
    if ($Agent -in @("all", "claude")) { $Destinations += Join-Path $env:USERPROFILE ".claude\skills" }
    if ($Agent -in @("all", "antigravity")) { $Destinations += Join-Path $env:USERPROFILE ".gemini\config\skills" }
}

foreach ($DestBase in $Destinations) {
    Write-Host "📦 安裝 Skills 至: $DestBase" -ForegroundColor Cyan
    if (-not (Test-Path $DestBase)) {
        New-Item -ItemType Directory -Path $DestBase -Force | Out-Null
    }
    foreach ($skill in $Skills) {
        $dest = Join-Path $DestBase $skill.Name
        if (Test-Path $dest) { Remove-Item -Path $dest -Recurse -Force }
        Copy-Item -Path $skill.FullName -Destination $dest -Recurse -Force
        Write-Host "  ✅ $($skill.Name)" -ForegroundColor Green
    }
}

Write-Host "`n🎉 安裝完成！在任何資料夾說「幫我做成電子書」，成品會存到該資料夾的 ebook/，目錄頁為 ebook/index.html。" -ForegroundColor Yellow
