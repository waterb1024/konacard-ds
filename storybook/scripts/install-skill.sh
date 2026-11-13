#!/usr/bin/env bash
# KONACARD 스킬 설치 — 사내망에서 실행
#
#   curl -fsSL https://konacard-ds.konanest.com/skill/install.sh | bash               # 내 모든 프로젝트 (~/.claude)
#   curl -fsSL https://konacard-ds.konanest.com/skill/install.sh | bash -s -- --project  # 지금 폴더만 (./.claude)
#
# 받는 것: 스킬(konacard-ds/SKILL.md + references/) → .claude/skills/konacard-ds
#          에이전트 8개 → .claude/agents
# 바뀌는 기존 파일은 .claude/konacard-backup/<시각>/ 에 남긴다 (스킬 폴더 안에 두면 같은 스킬이 둘로 잡힘).
# 다시 실행하면 최신본으로 업데이트된다.
set -euo pipefail

BASE="${KONACARD_SKILL_BASE:-https://konacard-ds.konanest.com/skill}"
DEST="$HOME/.claude"
[ "${1:-}" = "--project" ] && DEST="$PWD/.claude"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

curl -fsSL "$BASE/manifest.txt" -o "$TMP/manifest.txt" || {
  echo "목록을 받지 못했습니다 — 사내망(VPN)에 연결돼 있는지 확인하세요"; exit 1; }

n=0
while IFS= read -r f; do
  [ -n "$f" ] || continue
  mkdir -p "$TMP/files/$(dirname "$f")"
  curl -fsSL "$BASE/$f" -o "$TMP/files/$f"
  n=$((n + 1))
done < "$TMP/manifest.txt"

BAK="$DEST/konacard-backup/$(date +%Y%m%d-%H%M%S)"
backup() { [ -e "$1" ] || return 0; mkdir -p "$BAK"; cp -RL "$1" "$BAK/"; echo "  기존 파일 백업: $BAK/$(basename "$1")"; }

mkdir -p "$DEST/skills" "$DEST/agents"
backup "$DEST/skills/konacard-ds"
rm -rf "$DEST/skills/konacard-ds"
cp -R "$TMP/files/konacard-ds" "$DEST/skills/konacard-ds"
for a in "$TMP"/files/agents/*.md; do
  t="$DEST/agents/$(basename "$a")"
  if [ -e "$t" ] && ! cmp -s "$a" "$t"; then backup "$t"; fi
  cp "$a" "$t"
done

echo "KONACARD 스킬 설치 완료 ($n개 파일) → $DEST"
echo "  스킬: $DEST/skills/konacard-ds"
echo "  에이전트: $DEST/agents"
echo "Claude Code 를 새로 열면 konacard-ds 스킬이 잡힙니다."
echo "Figma 파일 키(\${FIGMA_DS_FILE_KEY})는 팀 관리자에게 받으세요."
