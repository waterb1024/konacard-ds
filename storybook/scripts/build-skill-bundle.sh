#!/usr/bin/env bash
# 스킬 배포 묶음 만들기 — 저장소 루트의 문서 · 에이전트 · 스킬 초안을
# storybook/.storybook/public/skill/ 로 모은다. 배포되면 https://konacard-ds.konanest.com/skill/ 에서 받는다.
#
# 왜 복사본을 커밋하나: 배포는 storybook/ 폴더만 올리므로 루트 문서를 거기 넣어 둬야 사이트에서 받을 수 있다.
# 원본은 루트 파일이다 — 묶음 안 파일은 직접 고치지 말고 원본을 고친 뒤 이 스크립트를 다시 돌린다.
# nest-deploy.sh 가 배포 전에 이 스크립트를 돌려 묶음이 낡았으면 멈춘다.
#
# 사용: bash storybook/scripts/build-skill-bundle.sh
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
OUT="$ROOT/storybook/.storybook/public/skill"
SKILL="$OUT/konacard-ds"

rm -rf "$OUT" "$ROOT/storybook/.storybook/public/components"
mkdir -p "$SKILL/references/rules/patterns" "$OUT/agents"

cp "$ROOT/storybook/src/ai/skill/SKILL.md" "$SKILL/SKILL.md"
for f in konacard-ds-foundation.md konacard-ds-components.md konacard-ds-rule.md components.catalog.json; do
  cp "$ROOT/$f" "$SKILL/references/$f"
done
cp "$ROOT/rules/figma-guide.md" "$SKILL/references/rules/figma-guide.md"
cp "$ROOT"/rules/patterns/*.md "$SKILL/references/rules/patterns/"
cp "$ROOT"/.claude/agents/*.md "$OUT/agents/"

# 컴포넌트 명세를 대분류 장(`# NN_이름`)마다 한 파일로 나눈다 — 에이전트가 필요한 장만 읽게 (seed-design.io/components/llms.txt 방식)
# 장 설명은 명세 머리의 "컴포넌트 개요" 표(정리 상태 · 포함 컴포넌트)에서 가져온다
SITE="https://konacard-ds.konanest.com"
SPLIT="$SKILL/references/components"
COMP_INDEX="$ROOT/storybook/.storybook/public/components/llms.txt"
mkdir -p "$SPLIT" "$(dirname "$COMP_INDEX")"
ENTRIES="$(awk -v dir="$SPLIT" -v base="$SITE/skill/konacard-ds/references" '
  /^\| \*\*[0-9][0-9]_/ {
    split($0, c, "|"); n = c[2]; gsub(/[ *]/, "", n)
    st = c[3]; inc = c[4]; gsub(/^ +| +$/, "", st); gsub(/^ +| +$/, "", inc)
    desc[n] = st " — " inc; next
  }
  /^# [0-9][0-9]_/ {
    if (f) close(f)
    key = $2; title = substr($0, 6); slug = tolower(key); sub(/_/, "-", slug)
    f = dir "/" slug ".md"
    if (!(key in desc)) { print "MISSING " key; exit 1 }
    print key "\t- [" title "](" base "/components/" slug ".md): " desc[key]
    print "> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.\n" > f
  }
  f && $0 != "---" { print > f }
' "$SKILL/references/konacard-ds-components.md")" || { echo "컴포넌트 장 나누기 실패: $ENTRIES"; exit 1; }
{
  echo "# KONACARD Components"
  echo
  echo "> 컴포넌트 명세를 대분류 장마다 나눈 목록. ✅ = Figma 정리 완료 · ⏳ = 정리 전(옛 기준일 수 있음). 이름 · 키 · variant 값은 카탈로그가 기준이다."
  echo
  echo "필요한 장만 연다. 여러 장을 한꺼번에 봐야 하면 아래 Optional 의 전체 명세를 쓴다."
  echo
  echo "## Components"
  echo
  printf '%s\n' "$ENTRIES" | LC_ALL=C sort | cut -f2-
  echo
  echo "## Optional"
  echo
  echo "- [컴포넌트 명세 전체]($SITE/skill/konacard-ds/references/konacard-ds-components.md): 모든 장을 한 파일로"
  echo "- [컴포넌트 카탈로그]($SITE/skill/konacard-ds/references/components.catalog.json): 정리가 끝난 Figma 컴포넌트의 키 · variant 값"
} > "$COMP_INDEX"

# Figma 파일 키는 저장소 규칙대로 플레이스홀더로 바꾼다 (README "파일 키" 참고)
find "$OUT" -type f \( -name '*.md' -o -name '*.json' \) -print0 | xargs -0 perl -pi -e '
  s/dHJa65PGtCQHq2n4qgL9Z9/\$\{FIGMA_DS_FILE_KEY\}/g;
  s/Nv4o6ozSx5W4w10uFnQIs5/\$\{FIGMA_DS_FILE_KEY_LEGACY\}/g;
  s/작업 파일\([A-Za-z0-9]{22}\)/작업 파일/g;
'

# 남은 Figma 파일 키 · 메일 주소가 있으면 멈춘다
LEAK="$(grep -rnoE '\b[A-Za-z0-9]*[A-Z][A-Za-z0-9]*[0-9][A-Za-z0-9]*\b' "$OUT" | awk -F: 'length($NF)==22' || true)"
MAIL="$(grep -rnoE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}' "$OUT" || true)"
if [ -n "$LEAK$MAIL" ]; then
  echo "묶음에 파일 키나 메일 주소로 보이는 값이 있습니다 — 원본에서 지우거나 위 치환 목록에 넣으세요:"
  echo "$LEAK$MAIL"
  exit 1
fi

# 설치 스크립트가 받을 파일 목록
( cd "$OUT" && find konacard-ds agents -type f | LC_ALL=C sort ) > "$OUT/manifest.txt"
cp "$ROOT/storybook/scripts/install-skill.sh" "$OUT/install.sh"

# 문서 목록(llms.txt) — 사이트 루트에 둔다 (https://konacard-ds.konanest.com/llms.txt). 원본은 storybook/src/ai/llms.txt
cp "$ROOT/storybook/src/ai/llms.txt" "$ROOT/storybook/.storybook/public/llms.txt"
PUB="$ROOT/storybook/.storybook/public"
grep -ohE 'https://konacard-ds\.konanest\.com/[^)?]+\.(md|json|txt)' "$PUB/llms.txt" "$COMP_INDEX" | while read -r u; do
  f="$PUB/${u#https://konacard-ds.konanest.com/}"
  [ -f "$f" ] || { echo "llms.txt 의 링크가 사이트 파일에 없습니다: $u"; exit 1; }
done

echo "스킬 묶음 $(wc -l < "$OUT/manifest.txt" | tr -d ' ')개 파일 → storybook/.storybook/public/skill/"
