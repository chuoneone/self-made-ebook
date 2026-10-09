#!/usr/bin/env bash
# self-made-ebook 電子書 Skills 安裝腳本（macOS / Linux）
# 直接在這個 repo 裡使用 AI 助理時「不需要」執行本腳本。
# 用法：
#   bash scripts/install-skills.sh                    # 全域安裝到 Claude Code 與 Antigravity
#   bash scripts/install-skills.sh claude             # 只裝 Claude Code（或 antigravity）
#   bash scripts/install-skills.sh all /path/to/proj  # 裝到指定專案資料夾
set -euo pipefail

agent="${1:-all}"
workspace="${2:-}"
src="$(cd "$(dirname "$0")/../.claude/skills" && pwd)"

dests=()
if [[ -n "$workspace" ]]; then
  [[ "$agent" == all || "$agent" == claude ]] && dests+=("$workspace/.claude/skills")
  [[ "$agent" == all || "$agent" == antigravity ]] && dests+=("$workspace/.agent/skills")
else
  [[ "$agent" == all || "$agent" == claude ]] && dests+=("$HOME/.claude/skills")
  [[ "$agent" == all || "$agent" == antigravity ]] && dests+=("$HOME/.gemini/config/skills")
fi
if [[ ${#dests[@]} -eq 0 ]]; then
  echo "第一個參數只能是 all、claude 或 antigravity" >&2
  exit 1
fi

for dest in "${dests[@]}"; do
  echo "📦 安裝 Skills 至: $dest"
  mkdir -p "$dest"
  for skill in "$src"/*/; do
    name="$(basename "$skill")"
    rm -rf "${dest:?}/$name"
    cp -R "$skill" "$dest/$name"
    echo "  ✅ $name"
  done
done

echo "🎉 安裝完成！在任何資料夾說「幫我做成電子書」，成品會存到該資料夾的 ebook/，目錄頁為 ebook/index.html。"
