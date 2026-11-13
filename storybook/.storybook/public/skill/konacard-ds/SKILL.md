---
name: konacard-ds
description: KONACARD 앱 화면을 만들거나 고칠 때, KONACARD 디자인 시스템(Figma AX 원본 · Storybook · 문서)을 관리할 때 쓴다. 기획서로 새 화면 만들기, 기존 화면을 KONACARD 컴포넌트와 스타일로 바꾸기, 컴포넌트 값 확인 · Storybook 매핑 · 문서 정합성 점검 요청이면 이 스킬을 먼저 읽는다.
---

# KONACARD Design System (초안)

> 작성 중인 초안이다. 문서 내용을 이 파일에 옮겨 적지 않고, 필요한 순간에 어느 파일을 열지만 알려 준다. 값과 규칙은 원본 파일이 기준이다.

## 1. 무엇을 열까

파일 위치: 사이트에서 설치했으면 이 스킬 폴더의 `references/` 안, konacard-ds 저장소에서 작업 중이면 저장소 루트에 같은 이름으로 있다. 에이전트는 `.claude/agents/` 에 있다.

| 필요할 때 | 열 파일 |
|---|---|
| 토큰 값 (색 · 글꼴 · 간격 · 모서리 · 그림자 · 투명도) | `konacard-ds-foundation.md` |
| 컴포넌트 명세 (variant · 상태 · 속성 · 용도 · 하지 말 것) | `konacard-ds-components.md` |
| 컴포넌트 키 · variant 값 (Figma 에 넣을 때) | `components.catalog.json` |
| 화면 성격 분류 · 조립 원칙 · 하지 말 것 · Figma 작업 규칙 | `konacard-ds-rule.md` |
| 특정 화면 · 팝업의 상세 구조 (약관 · 팝업 · 코나콘 · 카드/홈) | `rules/patterns/*.md` — 목차는 `konacard-ds-rule.md` § 화면별 표준 패턴 |
| Figma 제작 실무 (레이어 구조 · UI→컴포넌트 표 · Plugin API 예시) | `rules/figma-guide.md` |
| 코드로 된 컴포넌트 | `storybook/` (배포본: konacard-ds.konanest.com) |

## 2. 요청별 진행

### A. 기획서로 새 화면 만들기

`.claude/agents/` 의 네 에이전트에 순서대로 맡긴다.

1. `screen-spec-reader` — 기획서(Confluence · PRD · Figma · 이미지)에서 목적 · 필수 정보 · 사용자 행동 · 예외 상태를 정리
2. `screen-planner` — 화면 성격 판정 → 표준 패턴 → 쓸 컴포넌트와 배치 계획
3. **사용자 승인** — 계획을 보여 주고 "조립해줘" 같은 확인이 있을 때만 다음으로
4. `figma-composer` — Figma 에 DS 인스턴스로 조립 (360×800 · auto-layout hug · 좌우 20)
5. `screen-reviewer` — 하지 말 것 목록과 대조해 문제만 알려 줌 (직접 고치지 않음)

### B. 기존 화면을 KONACARD 컴포넌트 · 스타일로 바꾸기

1. **읽기만 먼저** — 스크린샷 · 레이어 구조 · 각 노드의 fill / 글꼴 / 텍스트 스타일 / 인스턴스 출처(AX 인지 다른 라이브러리인지)를 확인
2. **원본은 건드리지 않는다** — 화면을 복제해 원본 오른쪽 빈 자리에 두고 이름 끝에 `— KONACARD DS` 를 붙여 복제본만 고친다
3. **요소별로 맞는 DS 를 고른다** — `components.catalog.json` 에 있는 것만 키로 가져온다 (검색 도구는 사용 중단된 옛 라이브러리를 돌려주므로 키 조회에 쓰지 않음)
   - 인스턴스는 `swapComponent` 로 바꾸고, 직접 그린 요소는 지우고 DS 인스턴스를 같은 자리에 넣는다
   - 텍스트는 AX 텍스트 스타일, 색은 AX 변수에 연결한다 (raw 값 금지)
   - 카드 이미지 · 브랜드 그림 같은 콘텐츠는 그대로 둔다
4. **간격은 원본 구조를 유지** — 새 숫자를 지어내지 않는다. 바꿔야 하면 spacing 토큰으로, 사용자에게 먼저 알린다
5. **스크린샷으로 확인** 후 "바꾼 것" 표와 "확인할 것"(브랜드 느낌이 빠진 곳 · 정리 전(⏳) 컴포넌트를 쓴 곳 · 간격 차이)을 보고한다

### C. 디자인 시스템 관리

| 요청 예 | 맡길 에이전트 |
|---|---|
| Figma 원본에서 크기 · 색 · 글꼴 · SVG 값 뽑기 | `ds-figma-inspector` |
| Storybook 컴포넌트 4종(`.tsx` · `.module.css` · `.stories.tsx` · `.figma.ts`) 작성 · 수정 | `ds-component-implementer` |
| Code Connect publish | `ds-publisher` |
| foundation · components · rule 문서 수정 · Figma 와 대조 | `ds-doc-curator` |

## 3. 공통 원칙 (화면을 만들 때 항상)

- **보라 한 색, 필요한 한 곳에만** — `brand/primary` 는 강조 전용. 배경 전면 · 본문 글자 금지
- **한 화면 = 한 과업** — 헤드라인 강조는 한 구절, 주 버튼(CTA)은 원칙적으로 1개
- **모노톤 뼈대** — 배경 흰색, 카드는 `background/secondary` 회색만, 빨강은 오류에만
- **Pretendard Regular / Bold 두 굵기만**
- **좌우 여백 20px** — 모든 화면 공통

## 4. Figma 원본 규칙

- DS 원본은 AX 파일(`${FIGMA_DS_FILE_KEY}`). 옛 NEW 파일은 사용 중단
- 문서와 Figma 가 다르면 **Figma 가 기준**
- 아이콘 · 화살표는 직접 그리지 않고 DS 에서 가져온다
- Figma 이름에 오타가 있으면 코드에서 우회하지 않고 Figma 에서 고친 뒤 문서 · 카탈로그를 같이 고친다
- `konacard-ds-components.md` 상태 표에서 ⏳(정리 전)인 컴포넌트는 이름 · 값이 바뀔 수 있다 — 쓸 때 사용자에게 알린다
