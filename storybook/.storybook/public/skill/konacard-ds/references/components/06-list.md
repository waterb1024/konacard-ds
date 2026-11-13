> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 06_List

> Figma 카테고리 노드: `375:2810` (06_List)
> 3개 대분류: **Basic Type** (`list/list` — 진입·값·버튼 4형) / **Accordion** (`accordion` · `accordion/header` · `accordion/body` — 아코디언·FAQ·1:1 문의) / **Select List** (`list/card-select` + `list/list` 선택 상태 응용 + `list/bottomsheet`)
>
> ⚠️ 카탈로그의 대분류 표기(list/menu, benefit, benefit-store, payment, expand-label, expand-open, expand-FAQ)는 이 페이지에서 별도 마스터 컴포넌트로 노출되지 않음 — 실제로는 `list/list`·`list/expand`의 콘텐츠 슬롯 응용. 필요 시 각 화면별로 `konacard-ds-rule.md` § "리스트 종류·카드 종류" 규칙과 조합.

**공통 원칙**

- **좌우 화면 padding = 20px** (`layout/margin`)
- **아이템 사이 divider**: `color/divider/primary` = #0000000F (약 6% 검정), 두께 1dp
- **터치 영역** = **리스트 아이템 행 전체** (chevron·우측 버튼만이 아니라 전체 행 탭 가능)
- **타이틀은 최대 2 line까지만 사용**. 2 line의 텍스트 사이즈가 커지더라도 **1line ↔ 2line 텍스트 간격 유지**
- **폰트 기본**:
  - Main text: `body/1-regular` 15px 검정
  - Sub/부연: `body/2-Regular` 14px `color/font/tertiary` #666666
  - Description(회색 2depth): `body/3-Regular` 12px `color/font/quaternary` #999999


## Basic Type — `list/list`

- **Figma 노드 (샘플 인스턴스)**:
  - 기본형: `2431:6931` (Main text 단독)
  - 텍스트 길어질 경우: `1085:5850`
  - 항목+값: `1085:5896`
  - 항목+버튼: `1085:5977` + `Frame 8994`(`704:6280`), `Frame 8995`(`1085:5782`), `Frame 8996`(`1085:5819`)
- **용도**: 설정·정보 리스트·메뉴·바텀시트 옵션 등 대부분의 세로 리스트 기본 유닛
- **Figma 컴포넌트 세트**: `202:2536` (`size` = large / medium × `type` = link / button / control) — AX 확인 (2026-10-02). size=small 은 NEW 파일에만 있고 AX 에 없음
- **사이즈·기하**:
  - 좌우 padding **20px** (`layout/margin`)
  - Main text ↔ 우측 요소 gap: **16px** (`spacing-medium`)
  - Main text ↔ Description gap: **0** — Description 줄이 Main text 행 바로 아래에 붙음
  - 하단 구분선: `divider` type=solid 1px (컴포넌트 내장)

| size | 상·하 padding | Main text | Description | 우측 요소 높이 | 한 줄 높이 (Description 숨김) |
|---|---|---|---|---|---|
| **large** | 12 / 12 (`spacing-small`) | `body/1-regular` 15/24 | `body/2-Regular` 14/22 `color/font/tertiary` | 40 고정 (link·button·control 공통) | **65** |
| **medium** | 16 / 16 (`spacing-medium`) | `body/2-Regular` 14/22 | `body/4-Regular` 11/16 `color/font/tertiary` | link: hug (22) / control: 24 / button: 32 고정 | link **55** / control **57** / button **65** |

  - 높이 = 상·하 padding + 우측 요소(또는 Main text) 높이 + divider 1. Description을 켜면 그 줄 높이(large 22 / medium 16)만큼 늘어남.
  - 하단 divider를 숨기면 1px 줄어듦 (예: large 64 — 바로 아래 회색 정보 박스가 이어지는 경우)
  - **사이즈별 우측 요소**:
    - link: large는 `ic_arrow_right_14`만 / medium은 value 텍스트(`body/3-Regular` 12px `color/font/brand`) + `ic_arrow_right_14`
    - control(스위치): large 50×28 / medium 42×24
    - button: large는 `button/text button` large · `button/button` style=secondary·size=medium(h32) · `button/icon` medium / medium은 각각 small(h28 · `button/button` style=secondary·size=small h24 · h28)

### 4가지 표기 형태

| 표기 형태 | 우측 요소 | 대표 사용처 | 진입 여부 |
|---|---|---|---|
| **기본형** (Main text 단독) | 없음 | 정보 라벨 나열 | 진입 없음 (또는 행 자체 탭) |
| **텍스트가 길어질 경우** | 없음 | 긴 안내 | 진입 없음 |
| **항목과 값을 표기할 경우** | 값 텍스트 (우측 정렬, `body/2-Regular` `color/font/tertiary` #666666) | "회원등급 : 프리미엄" 형 정보 조회 | 진입 없음 |
| **항목과 버튼을 표기할 경우** | (a) `button/text button` + `>` chevron (진입형) / (b) Small `button` `gray-line` (액션형) | (a) 설정 항목 진입 (b) 인라인 편집 · 변경 | (a) 있음 (b) 즉시 액션 |

- **텍스트 정렬**:
  - Main text: 좌측 정렬
  - 값 텍스트: **우측 정렬**
  - 우측 버튼(진입형·액션형): 우측 정렬
- **하단 부가 텍스트**:
  - Main text 아래 부연 `Description`(회색) 슬롯이 있으면 자동으로 행 높이 확장. Main↔Description gap 0.
- **터치 영역 규칙**:
  - **화면 이동이 되는 리스트** = 리스트 전체 영역 터치 (우측 chevron만이 아님)
  - 행 안 액션 버튼(Small)이 있는 액션형은 **행 전체 = 진입 없음**, **버튼만 터치 액션 실행**


## Accordion — `accordion` · `accordion/header` · `accordion/body`

- **Figma 노드 (AX ❖ Accordion)**: `accordion` 11109:3834 (묶음) · `accordion/header` 202:2089 (구 `list/expand`) · `accordion/body` 607:4415 (구 `list/expand-open`)
- **용도**: 접이식 리스트. FAQ·상세 설명·1:1 문의 답변·상품 부가 정보 등.
- **세트 3개**
  - `accordion` — header + body 묶음. size(large · medium) × type(list · inquiry) × state(closed · open) = 8. open 이면 body 가 보임
  - `accordion/header` — 제목 줄. size × type × state = 8
  - `accordion/body` — 본문. size × type(bg-color · bg-white) = 4 + boolean `caption` · `box` (기본 off). **제목 없이 단독으로도 씀** (공지사항 · 카드 혜택 · 브랜드머니 · 코나콘 상세)
- **묶음 규칙**: 본문 크기 = 제목 size · 본문 바탕 = 제목 type (list → bg-color 회색 · inquiry → bg-white 흰색)

### Header (`accordion/header`)

| | list | inquiry |
|---|---|---|
| 구성 | 제목 + 설명(선택) · 화살표 | `label` small + 제목 · 화살표 |
| 여백 | 좌우 20 · 위아래 16 · 글자–화살표 16 | 안쪽 16 20 · 왼쪽–화살표 24 · 라벨–제목 12 |
| 제목 | large `body/1` 15/24 · medium `body/2` 14/22 — closed Regular, **open Bold** | 같음 |
| 설명 | `body/3-Regular` 12/18 `font/quaternary` #999 · 제목–설명 large 8 · medium 4 | — |
| 라벨 | — | 답변대기 `label` small · gray-light / 답변완료 `label` small · brand |
| 아래 선 | `divider` light, 좌우 20 들여 그림 · **펼치면 숨김** (본문이 바로 붙음) | 전체 폭 · 항상 보임 |
| 높이 | large closed 83 · open 82 / medium 77 · 76 | 57 |

- 화살표: `ic_arrow/ic_arrow_down_14` (closed) · `ic_arrow_up_14` (open), 14×8 #333

### Body (`accordion/body`)

| | large | medium |
|---|---|---|
| 여백 (위 · 좌우 · 아래) | 24 · 20 · 32 | 20 · 20 · 24 |
| 1depth | `body/1-regular` 15/24 `font/secondary` #333 | `body/2-Regular` 14/22 #333 |
| 2depth | `body/3-Regular` 12/18 #999 | 같음 |
| 1depth–2depth 간격 | 12 | 8 |

- 글 블록과 상자 사이 20. 상자(reply): 안쪽 16 · radius 8 · 1depth + 2depth
- 바탕: **bg-color** = 회색 `background/secondary` 본문 + 흰 상자 / **bg-white** = 흰 본문 + 회색 상자
- 아래 선 전체 폭
- **켜고 끄는 속성** (기본 off): `caption` = 1depth 아래 2depth 보조 문구 · `box` = 아래 상자. KeyScreen 보이는 본문 17곳 중 16곳이 1depth 글만 씀 → 필요할 때만 켬. 묶음 `accordion` 은 inquiry 만 둘 다 on (1:1 문의 답변 상자)

### 정리 이력 (2026-10-22, KeyScreen AOS 실사용 기준)
- 본문 39곳 중 30곳이 제목 바로 아래 짝으로 쓰임(18곳은 본문을 숨겨 접힘 표현) → 묶음 `accordion` 새로 만듦
- 보이는 곳 기준 large 제목–large 본문 3 · medium–medium 6 · medium–large 3(코나콘) · large–medium 0 → 본문 크기 = 제목 크기
- inquiry 는 1:1 문의 한 화면, 펼친 답변은 bg-white → 본문 바탕 = 제목 type
- inquiry 라벨 `list/expand-label` 삭제 → `label` small (gray-light 새로 추가 · brand)
- body 에 `caption` · `box` boolean 추가(기본 off), 쓰지 않던 숨김 버튼 자리 삭제

## Accordion 안티패턴

- ❌ 제목 아래 본문을 직접 붙이고 숨겨서 접힘 표현 — `accordion` 의 state 사용
- ❌ medium 제목에 large 본문 (본문 크기는 제목 크기를 따름)
- ❌ chevron 방향을 항상 아래(⌵) 고정 (열림·닫힘 시각 피드백 상실)
- ❌ inquiry 라벨을 직접 만든 칩으로 — `label` small (gray-light · brand)
- ❌ Body 안에 또 다른 accordion 중첩 (최대 2 depth까지만 계층 표현 — 그 이상은 별도 화면 진입)


## Select List (선택 상태 응용)

> ⏳ **Figma 정리 전** — `list/card-select` · `list/bottomsheet` 등 아래 이름 · 값은 옛 기준일 수 있음. 화면에 쓸 때는 Figma(AX) · `components.catalog.json` 을 먼저 확인

### 리스트 선택 예시 — `list/list` 선택 상태

- **원리**: `list/list` 기본형에서 **선택된 항목만** Bold + Brand 색으로 변환
- **Selected 스타일**:
  - Main text: `color/font/brand` #805AE9 + `body/1-Bold`
  - 우측 chevron 색: `color/icon/brand` #805AE9
  - 배경·테두리는 그대로 유지 (색만 변경)
- **Default 스타일**: 기본 검정 Regular 유지
- **사용처**: 옵션 선택 바텀시트, 필터 값 선택, 결제수단 리스트 등
- **터치 영역**: 리스트 아이템 행 전체

### 카드형 선택 — `list/card-select`

- **Figma 노드 (샘플 인스턴스)**: `1086:6161`, `1086:6199`
- **용도**: 카드/상품/결제수단 등 이미지 포함 선택 아이템
- **사이즈·기하**:
  - Height 88px (기본), 폭 가변
  - 좌우 내부 padding **16px** (`spacing-medium`)
  - **Corner radius 8px** (`radius/components/box-button`)
  - 테두리: `color/border/default` #DDDDDD 1px (Default), Selected 시 `#805AE9` 브랜드 보라 1px
- **하위 슬롯**:
  - 좌측: 카드 이미지 (약 40×64, 미니 카드 렌더 또는 상품 썸네일)
  - 우측: 
    - Main text: 카드명 `body/1-Bold` 15px 검정
    - Description: 금액·부가 정보 `body/2-Regular` 14px `color/font/tertiary` #666666
    - Main ↔ Description gap **4px** (`spacing-2xsmall`)
  - 이미지 ↔ 텍스트 gap **24px** (`spacing-xlarge`)
- **Selected 시각 표기**:
  - 테두리 브랜드 보라(`color/border/focus` #805AE9) 변경 + Main text `body/1-Bold` 유지
  - 체크 아이콘 없음 — 선택 상태는 **테두리 색상 변경만으로 표시**하는 구조 (아이콘 추가하지 말 것)
- **터치 영역**: 카드 아이템 전체

### Bottomsheet — `list/bottomsheet`

- **Figma 노드 (샘플 인스턴스)**: `2431:7098` (기본), `2431:7099` (선택) / 화면 예시: KeyScreen `2083:60989` (통신사 선택)
- **용도**: 바텀시트 내부의 옵션 나열 리스트 (지역 선택·정렬 옵션 등)
- **레이아웃**:
  - 한 줄 높이 **56px** = 상·하 padding 16(`spacing-medium`) + 텍스트 24
  - 좌우 padding **0** — 행 폭 320, 좌우 20은 감싸는 리스트 컨테이너가 줌
  - List Title ↔ 선택 아이콘 gap **16px** (`spacing-medium`)
  - 구분선: 줄마다 하단 `color/divider/primary` 1px — **56 안쪽에 포함**(높이 늘지 않음), 마지막 줄 아래에도 있음
- **상태**:
  - 기본: List Title `body/1-regular` 15/24 `color/font/primary` 좌측 정렬 + 선택 아이콘 숨김(opacity 0, 20px 자리는 유지)
  - 선택: `body/1-Bold` + `color/font/brand` #805AE9 + 우측 `ic_system/ic_select_on` 20×20 보라 체크 노출
- **바텀시트 컨테이너**:
  - 배경 `color/background/primary` #FFFFFF, 상단 corner radius 큰 값(20+, `konacard-ds-rule.md` § "팝업·바텀시트" 참조)
  - 상단 드래그 핸들(4px 회색 pill 그립) — 관례상 노출
- **하단 CTA**: 결정 필요한 리스트(다중선택 확인)는 하단 `button/fixed-bottom` 사용

## Select List 안티패턴

- ❌ **Selected 상태에 배경색 채우기** (텍스트 Bold + Brand 색, 바텀시트는 우측 `ic_select_on` 체크까지만 — 배경 채움 금지)
- ❌ 리스트 항목이 3개 이하일 때 바텀시트 사용 (라디오 인라인이 더 나음)
- ❌ Card-select의 이미지 슬롯을 빈 회색 박스로 대체 (반드시 실 이미지 또는 placeholder 아이콘)


## 06_List 카테고리 종합 안티패턴

- ❌ **터치 영역을 chevron·우측 버튼만으로 한정** — 진입형은 항상 행 전체 터치
- ❌ **아이템 사이 divider 두께·색 임의 변경** (반드시 1dp #0000000F)
- ❌ Main text를 3줄 이상으로 (반드시 2줄 이하, 초과 시 `...` 말줄임)
- ❌ **진입형 + 액션형을 같은 행에** (chevron`>` 과 Small 버튼 동시 배치 금지 — 하나만 선택)
- ❌ Accordion 안에 또 Accordion 중첩 (2 depth 초과 시 별도 화면 진입 유도)
- ❌ Select List 선택 상태를 체크박스로 대체 (다중 선택이면 05_Control Checkbox, 단일 선택이면 텍스트 Bold+브랜드 색 — 바텀시트는 + `ic_select_on` 체크 아이콘)


