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

rm -rf "$OUT"
mkdir -p "$SKILL/references/rules/patterns" "$OUT/agents"

cp "$ROOT/storybook/src/ai/skill/SKILL.md" "$SKILL/SKILL.md"
for f in konacard-ds-foundation.md konacard-ds-components.md konacard-ds-rule.md components.catalog.json; do
  cp "$ROOT/$f" "$SKILL/references/$f"
done
cp "$ROOT/rules/figma-guide.md" "$SKILL/references/rules/figma-guide.md"
cp "$ROOT"/rules/patterns/*.md "$SKILL/references/rules/patterns/"
cp "$ROOT"/.claude/agents/*.md "$OUT/agents/"

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
grep -oE 'https://konacard-ds\.konanest\.com/skill/[^)]+' "$ROOT/storybook/src/ai/llms.txt" | while read -r u; do
  f="$OUT/${u#https://konacard-ds.konanest.com/skill/}"
  [ -f "$f" ] || { echo "llms.txt 의 링크가 묶음에 없습니다: $u"; exit 1; }
done

echo "스킬 묶음 $(wc -l < "$OUT/manifest.txt" | tr -d ' ')개 파일 → storybook/.storybook/public/skill/"
