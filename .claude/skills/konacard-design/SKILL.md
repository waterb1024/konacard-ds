---
name: konacard-design
description: 기획 MD/링크를 받아 KONACARD DS 규칙에 맞춘 Figma 화면 설계 계획서 작성 → 사용자 승인 → Figma 프레임 자동 생성
argument-hint: [MD 내용 붙여넣기 / 파일경로.md / Confluence URL]
---

# /konacard-design

KONACARD 디자인시스템 AX 워크플로우 스킬. 기획서(MD 또는 링크)를 받아
DS 규칙에 100% 맞춘 Figma 화면을 설계·생성한다.

**핵심 원칙: 사용자 명시적 승인 없이 Figma 파일에 프레임 생성 금지.**
Phase 2 승인 게이트를 반드시 통과해야 Phase 3 진입.

---

## Phase 0 · Preflight

### 0-1. 입력 판별
사용자 전달 자료를 다음 3가지 중 하나로 분류:

- **MD 텍스트**: 마크다운 본문 직접 붙여넣기 → 그대로 사용
- **파일 경로**: `.md`로 끝나는 로컬 경로 → `Read`로 로드
- **Confluence URL**: `konawiki.konai.com/x/{tinyLink}` 형태 → tinyLink 디코딩 후 `wiki_get_page`

tinyLink 디코딩:
```bash
python3 -c "
import base64, struct
t = '{tinyLink}'
t = t.replace('-', '+').replace('_', '/')
while len(t) % 4: t += '='
b = base64.b64decode(t).ljust(8, b'\x00')
print(struct.unpack('<q', b)[0])
"
```
얻은 pageId로 `wiki_get_page` 호출 → content 추출.

### 0-2. 필수 참조 문서 로드
반드시 세 파일을 읽고 절차에 반영:
- `konacard-ds-rule.md` — 화면 성격 분류(§), 표준 패턴, § "6) 하지 말 것"(안티패턴)
- `konacard-ds-foundation.md` — 토큰 실값 (color/type/spacing/radius/shadow)
- `konacard-ds-components.md` — 12개 대분류 58개 컴포넌트 명세 (v1.0)

### 0-3. 대상 Figma 파일 확인
- 세션 컨텍스트에 대상 Figma URL 있으면 사용
- 없으면 사용자에게 요청 (질문: "어느 Figma 파일에 만들까요? URL 알려주세요")
- ⚠️ **DS 원본 파일 `dHJa65PGtCQHq2n4qgL9Z9`(-AX- KONACARD - COMMON)에는 직접 만들지 말 것** — 이 파일은 컴포넌트 import 대상이지 작업 대상 아님

### 0-4. Code Connect 등록 현황 인지
- **등록 완료 11개** (정확한 매핑 학습됨, 우선 사용):
  Button · IconButton · TextButton · Switch · Checkbox · Radio · Input · SearchBar · Label · Selectbox · Tooltip
- **미등록 47개** (`components.md` 참조):
  Actionbar, Banner, Chips, Divider, Info, List, Tab, Popup 등

---

## Phase 1 · 기획 분석 → 계획서 작성

### 1-1. 화면 유형 판별
`konacard-ds-rule.md § "화면 성격 분류"` 10종 중 하나로 매핑:
- 스택형 진행 / 스택형 조회·설정 / 모달성 진행 / 모달·오버레이
- 브랜드 진입 / 파괴적 액션 진입 / 팝업·바텀시트
- 결과·완료 / 홍보성·유도 / 특수 상태·예외

### 1-2. 기획 파싱 (MD → 구조화)
다음 항목을 추출:
- **화면명** — h1 또는 title
- **화면 목적** — 한 문장 요약
- **핵심 CTA** — 원칙적으로 1개
- **필수 표시 정보** — 필드·데이터·안내 문구·상태 표기
- **사용자 흐름** — 진입 지점, 다음 화면, 예외 경로

### 1-3. 필요 컴포넌트 리스트업
`components.md` § 12개 대분류에서 이 화면에 필요한 것 매칭.

**컴포넌트 선택 우선순위:**
1. 등록된 11개 우선 (매핑 정확)
2. 미등록 47개는 `components.md` 명세를 그대로 사용
3. **직접 그리기 금지** — 검색바·탭·칩·구분선·아이콘까지 반드시 DS 매칭

각 컴포넌트마다 결정:
- variant (color / size / style)
- state (default / focus / error / disabled / active 등)
- 인스턴스 개수 및 위치

### 1-4. 표준 패턴 적용안
- **wrapper**: `360×800` (X hug 사용 안 함, Y fixed)
- **Actionbar**: 높이 `56px` FIXED, `title` `layoutSizingHorizontal='FILL'`
- **content**: auto-layout vertical, 좌우 `padding 20px`
- **CTA**: 원칙 1개 (하단 fixed 또는 인라인)
- **강조색**: `brand/primary` `#805AE9` 1회만
- **배경**: `#FFFFFF` 또는 `background/secondary`
- **폰트**: Pretendard Regular / Bold 만

### 1-5. 계획서 출력 (마크다운)
사용자에게 다음 형식으로 리포트:

```markdown
# 설계 계획서 · {화면명}

## 유형 · 목적
- 화면 유형: {rule.md 매핑 결과}
- 목적: {한 줄 요약}
- CTA: {단 하나}

## 컴포넌트 매트릭스
| 컴포넌트 | 등록? | 개수 | variant | state | 위치 |
|---|---|---|---|---|---|
| Actionbar | X (components.md) | 1 | back+title | default | top |
| Button | O | 1 | Brand · Large | default | bottom fixed |
| ... |

## 레이아웃 개요 (top → bottom)
1. Actionbar (h=56, fixed)
2. Content area (auto-layout, padding 20)
   - Section A: ...
   - Section B: ...
3. Bottom CTA area (Button Brand Large)

## 표준 패턴 반영
- ✅ wrapper 360×800
- ✅ actionbar 56 FIXED, title FILL
- ✅ 좌우 padding 20
- ✅ 폰트 Pretendard R/B

## 안티패턴 대조
- ✅ 보라 1회 사용 (CTA에만)
- ✅ CTA 1개 원칙
- ✅ 본문 텍스트 회색 (검정 아님)
- ✅ 빨강 오류 전용
- ✅ 아이콘 DS import 계획
```

---

## Phase 2 · 사용자 승인 게이트

**중요**: Phase 3 진입 전 반드시 사용자의 명시적 승인 필요.

1. 계획서 출력 후 사용자에게 리뷰 요청
2. 수정·추가 요구 반영 (반복 가능)
3. **"생성 진행"·"만들어줘"·"진행"·"OK" 등 명시적 승인**을 받은 후에만 Phase 3 진입
4. 승인이 애매하면 다시 확인 ("계획서 이대로 Figma에 만들까요?")

---

## Phase 3 · Figma 프레임 생성 (승인 후에만)

### 3-1. 프레임 생성
- MCP `use_figma`로 대상 파일에 새 프레임 생성
- Wrapper 사이즈: `resize(360, 800)` — 세로 fixed
- 텍스트 프레임 height: **항상 hug contents** (fixed 아님)

### 3-2. Actionbar 삽입
- DS 파일(`dHJa65PGtCQHq2n4qgL9Z9`)에서 `action-bar` 컴포넌트 검색·인스턴스 import
- **FIXED 설정만으로 부족** — `resize(w, 56)` 명시 필수
- `title/title` 인스턴스는 `layoutSizingHorizontal='FILL'`

### 3-3. 컨텐츠 영역
- auto-layout vertical
- 좌우 padding `--spacing-medium` (또는 계획서에 명시된 값)
- gap: 컴포넌트별 spacing 토큰 바인딩

### 3-4. 컴포넌트 인스턴스 삽입
- **모든 인스턴스는 DS 파일에서 import** (`search_design_system` 로 키 확보)
- 인스턴스 축소·확대 시 `rescale()` 사용 (`resize()` 아님) — 내부 컨텐츠 비례 변형
- 아이콘·화살표: **DS `04_Image` 페이지에서 import** (직접 그리기 절대 금지)

### 3-5. 토큰 바인딩
- 색상: Figma variables 바인딩
- 타이포: `getLocalTextStylesAsync`로 확보한 text style key 바인딩
- spacing / radius: DS 변수 바인딩
- **raw 숫자 금지** (예: `20`이 아니라 `--spacing-medium`)
- **Figma variables 오타 원본명 유지**: `radius-tost` (실제 toast), `sencondary` 등

---

## Phase 4 · 검증 리포트

Phase 3 완료 후 다음 체크리스트 자동 실행 → 결과와 함께 Figma URL 반환.

### 4-1. 표준 패턴
- [ ] Wrapper 360×800
- [ ] Actionbar 높이 56 FIXED · title FILL
- [ ] 좌우 padding 20
- [ ] 배경색 흰색 또는 `--color-background-secondary`

### 4-2. 컴포넌트 사용
- [ ] 모든 버튼이 Button 인스턴스
- [ ] 모든 input이 Input/SearchBar 인스턴스
- [ ] 체크박스/라디오/스위치 DS import
- [ ] 리스트·탭·배너·구분선까지 모두 DS 기반
- [ ] 아이콘 DS `04_Image` import (직접 그리기 없음)

### 4-3. 안티패턴 (`rule.md § "6) 하지 말 것"`)
- [ ] 보라 색 1회만 사용 (배경 전면·본문 텍스트 금지)
- [ ] 한 화면 = 한 과업 (헤드라인 강조 1구절, CTA 1개)
- [ ] 본문 텍스트 회색 (검정 아님)
- [ ] 빨강은 오류 전용

### 4-4. 토큰
- [ ] 색상 모두 변수 바인딩
- [ ] 타이포 text style 적용 (Body/Headline 등)
- [ ] radius 변수 바인딩
- [ ] hardcoded 값 없음

### 4-5. Figma 작업 규칙 (`rule.md § "Figma 작업 규칙"`)
- [ ] 텍스트 프레임 hug contents (fixed 아님)
- [ ] 인스턴스 리사이징 rescale() 사용
- [ ] title/title FILL 적용
- [ ] action-bar height resize(w, 56) 명시

---

## 항상 준수 (스킬 실행 중)

- 보라 `brand/primary` 1회만 · 배경 전면·본문 텍스트 금지
- Pretendard Regular / Bold 두 굵기만
- 20px 좌우 padding
- 아이콘 직접 그리기 금지 → DS `04_Image` import
- title/title 인스턴스 항상 FILL
- action-bar `resize(w, 56)` 명시
- 인스턴스 리사이징 시 `rescale()` (내부 컨텐츠 비례)
- Figma variables 오타 원본명 유지 (`radius-tost`, `sencondary` 등)
- Confluence URL 지정 시 **절대 새 페이지 생성 금지** — 반드시 tinyLink 디코딩 → `wiki_get_page` 확인 → `wiki_update_page`

---

## 참조 리소스

- `konacard-ds-rule.md` — 화면 성격 분류 · 표준 패턴 · 안티패턴 · Figma 작업 규칙
- `konacard-ds-foundation.md` — 토큰 실값 (color · typography · spacing · radius · shadow)
- `konacard-ds-components.md` — 컴포넌트 명세 (12개 대분류 58개, v1.0)
- `storybook/src/components/` — Storybook 로컬 코드 (Code Connect 등록 11개)
- **Figma DS 원본**: `dHJa65PGtCQHq2n4qgL9Z9` (-AX- KONACARD - COMMON)
  - 02_Components 페이지: `17:827`
  - 01_Foundations 페이지: `295:3042`
  - 04_Image (아이콘): DS 파일 내 페이지

---

## 트리거 예시

- `/konacard-design` (인수 없음) → 사용자에게 MD 또는 URL 요청
- `/konacard-design https://konawiki.konai.com/x/JLItGg` → Confluence 페이지 로드
- `/konacard-design docs/planning/screen-signup.md` → 로컬 파일 로드
- `/konacard-design {마크다운 본문 직접 붙여넣기}` → 그대로 사용
