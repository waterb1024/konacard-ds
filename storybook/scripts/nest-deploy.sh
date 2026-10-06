#!/usr/bin/env bash
# KONA Nest 배포 — storybook/ 폴더의 현재 커밋 상태만 사내 GitLab(apps/konacard-ds)으로 올린다.
#
# 왜 폴더만 올리나: 이 저장소(GitHub)의 옛 커밋 작성자 메일이 사내 도메인이 아니라
# 사내 GitLab 이 전체 이력을 받지 않는다. 그래서 storybook/ 트리만 사내 메일 작성자로
# 새 커밋을 만들어 GitLab 의 main 에 쌓고, semver 태그를 push 해 배포를 트리거한다.
#
# 사용: storybook/scripts/nest-deploy.sh v0.1.1
set -euo pipefail

TAG="${1:-}"
[[ "$TAG" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]] || { echo "사용: $0 vX.Y.Z (예: v0.1.1)"; exit 2; }

cd "$(git rev-parse --show-toplevel)"
REMOTE="https://gitlab.konanest.com/apps/konacard-ds.git"

case "$(git config user.email)" in
  *@konai.com|*@kebt.co.kr|*@kona-m.co.kr) ;;
  *) echo "git user.email 이 사내 메일이 아닙니다 — GitLab 이 거절합니다"; exit 2 ;;
esac

if ! git diff --quiet HEAD -- storybook || [ -n "$(git ls-files --others --exclude-standard storybook)" ]; then
  echo "storybook/ 에 커밋하지 않은 변경이 있습니다 — 먼저 커밋하세요"; exit 2
fi

if git ls-remote --exit-code --tags "$REMOTE" "refs/tags/$TAG" >/dev/null 2>&1; then
  echo "$TAG 는 이미 있습니다 — 새 버전 번호를 쓰세요"; exit 2
fi

TREE="$(git rev-parse HEAD:storybook)"
PARENT="$(git ls-remote "$REMOTE" refs/heads/main | cut -f1)"
PARENT_ARGS=()
if [ -n "$PARENT" ]; then
  git fetch -q "$REMOTE" main
  PARENT_ARGS=(-p "$PARENT")
fi

COMMIT="$(git commit-tree "$TREE" ${PARENT_ARGS[@]+"${PARENT_ARGS[@]}"} -m "deploy $TAG: konacard-ds $(git rev-parse --short HEAD) 의 storybook/")"
echo "배포 커밋 $COMMIT (원본 $(git rev-parse --short HEAD))"

git push "$REMOTE" "$COMMIT:refs/heads/main"
git push "$REMOTE" "$COMMIT:refs/tags/$TAG"
echo "태그 $TAG push 완료 — CI 가 빌드·배포합니다: https://konacard-ds.konanest.com"
