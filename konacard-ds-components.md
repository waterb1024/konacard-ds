---
version: "1.0"
name: KONACARD Design Components
description: >
  KONACARD 모바일 앱(AOS) 공통 디자인 시스템 — Component 명세 문서.
  Figma DS 파일(Nv4o6ozSx5W4w10uFnQIs5)의 컴포넌트 카탈로그 페이지(node 17:827)를 원본 소스로 함.
  각 컴포넌트의 variant/state/props/사용 조건을 정리.
scope: >
  Figma 카탈로그의 12개 대분류(00_Basic ~ 12_Banner) 전체 완료.
  각 대분류별 컴포넌트·variant·state·용도·안티패턴 정리 완료.
related_docs:
  - "konacard-ds-foundation.md — 토큰(color/typography/spacing/radius/elevation)"
  - "konacard-ds-rule.md — 사용 원칙·화면 성격별 규칙·안티패턴"
---

# KONACARD Design Components

> Figma DS 원본: `Nv4o6ozSx5W4w10uFnQIs5` / 카탈로그 페이지 `17:827` (`02_Components`)
> 각 컴포넌트의 Figma 노드 ID·variant·state·용도를 정리합니다.
> 토큰 상세는 `konacard-ds-foundation.md`, 사용 상황·조합 원칙은 `konacard-ds-rule.md` 참조.

## 컴포넌트 카탈로그 개요 (12 대분류)

| 대분류 | 상태 | 포함 컴포넌트 |
|---|---|---|
| **00_Basic** | ✅ 완료 | OS/status-bar (AOS·iOS·notch·Chrome), OS/keyboard (AOS·iOS), spacing 8-based 원칙 |
| **01_Actionbar** | ✅ 완료 | action-bar/header(Main·Sub AOS/iOS·Scroll Title), action-bar/headline, action-bar/button |
| **02_Button** | ✅ 완료 | button/primary, secondary, tetiary, text, icon, fixed-bottom, select |
| **03_Tab** | ✅ 완료 | Tab/UI(main·Full·Multi), tab/main-multi, tab/Sub, tab/sub-ui |
| **04_Forms** | ✅ 완료 | input/input, input/basic, input/search, input/email, input/card-number, input/button, Input/Select, Form UI(Title·Guide Text) |
| **05_Control** | ✅ 완료 | control/swtich(large·medium·small·tiny), control/checkbox(24·28·32), control/radio(24·28), control/agree(3 variants), control/swtich_setting, control/radio-text(Basic·Small) |
| **06_List** | ✅ 완료 | list/list(4형), list/expand(header+body), list/card-select, list/bottomsheet + Select List 응용 |
| **07_Line** | ✅ 완료 | Solid line, Dotted line, Divider(BG+Line 겹침) |
| **08_Indicator** | ✅ 완료 | Page dot, Navigator(chevron button), N/NN count pill, YYYY.MM period navigator |
| **09_Label** | ✅ 완료 | Basic Label(Fill·Line 5색), Link Label(icon+text), label-State(deprecated) |
| **10_Info** | ✅ 완료 | Text info(1·2Depth bullet), Info-box(Item List + Box Case) |
| **11_Tooltip** | ✅ 완료 | Popup Type(?, dialog), Bubble Type(!, inline Line/Brand) + 제작 가이드 |
| **12_Banner** | ✅ 완료 | Benefit Banner(1line), Action Banner(1+2depth) + 6 파스텔 color |

---

## 카탈로그 항목 템플릿

각 컴포넌트를 아래 형식으로 정리:

```
### {component/name}

- **Figma 노드**: `123:456`
- **컴포넌트 키**: (있으면)
- **용도**: 한 줄 요약
- **사이즈·기하**: height / padding / radius / min-max width
- **Variant**: (예: Color=Brand/Gray, State=Default/Disable)
- **Props (Figma variants)**: 이름=옵션들
- **하위 슬롯**: 텍스트 / 아이콘 등
- **관련 rule.md**: 링크
- **주의**: 오타·deprecated 등
```

---

# 02_Button

**공통 원칙**
- **Disable 상태 = Default 버튼의 opacity 40%** (모든 버튼 사이즈·색조 공통)
- **폰트**: Pretendard Bold, 사이즈는 사이즈별 대응 (Large=button-large 15px / Medium=button-medium 14px / Small=button-small 12px — `konacard-ds-foundation.md` 참조)
- **Corner radius**: `$radius-button-*` 시맨틱 토큰 사용 (`konacard-ds-foundation.md` 참조)
- **터치 영역**: 최소 32px 세로 확보 (Text·Icon 버튼도 동일)

## Large 버튼

- **Figma 노드**: `17:703` (button/primary), `2423:4577` (button/secondary), `1212:4553` (button/tetiary — Figma 파일 원본 오타)
- **용도**: 페이지를 컨트롤하는 중요 액션 버튼 (하단 고정 CTA·주요 화면 CTA)
- **사이즈·기하**:
  - Fixed height: **56px**
  - Padding: 좌우 16px, 상하 auto (텍스트 세로 중앙)
  - Corner radius: **8px** (`$radius-button-large = $radius-small`)
  - Width: Flexible (부모 너비)
- **Variant — Color** (5개):
  - `Brand` — 진한 보라 배경(`brand/primary` #805AE9) + 흰 텍스트 · **기본 Primary CTA**
  - `Brand_Light` — 옅은 보라 배경(`brand/secondary` #F4F0FD 추정) + 보라 텍스트
  - `Brand_Line` — 흰 배경 + 보라 아웃라인 + 보라 텍스트 · **Secondary(보라 아웃라인)**
  - `Gray` — 회색 배경(`background/secondary` 계열) + 검정 텍스트 · **Neutral(병렬 CTA 좌측 보조)**
  - `Gray_Line` — 흰 배경 + 회색 아웃라인 + 검정 텍스트 · **Secondary(회색 아웃라인, 반복 편집 진입점)**
- **Variant — State** (2개):
  - `Default (True)` — 활성
  - `Disable (False)` — 비활성 (opacity 40%)
- **관련 rule.md**:
  - § "버튼" — Primary/Secondary/Neutral/비활성 원칙
  - § "5) 말투 / CTA 라벨" — 라벨 규칙
  - § "5) 말투 / CTA 개수 규칙" — 화면당 개수

## Medium 버튼

- **Figma 노드**: 카탈로그 `17:916` 내부 (별도 컴포넌트 인스턴스, 노드ID는 variant instance)
- **용도**: 본문 내 중요 액션 버튼
- **사이즈·기하**:
  - Fixed height: **48px**
  - Padding: 좌우 16px
  - Corner radius: **6px** (`$radius-button-medium = $radius-xsmall`)
  - Width: Flexible
- **Variant — Color**: Large와 동일 5색조 (Brand_Light / Brand / Brand_Line / Gray / Gray_Line)
- **Variant — State**: Default / Disable (opacity 40%)

## Small 버튼

- **Figma 노드**: 카탈로그 내부
- **용도**: 설명·가이드에 붙는 액션 버튼, 필드 우측 어드먼트, 카드 안 액션 등
- **사이즈·기하**:
  - Fixed height: **32px**
  - Padding: 좌우 12px
  - Corner radius: **4px** (`$radius-button-small = $radius-2xsmall`)
  - Width: Flexible
- **Variant — Color** (5개 — Large와 다름):
  - `Gray` — 회색 배경 + 검정 텍스트 (기본)
  - `Dark` — 진한 회색·검정 배경 + 흰 텍스트
  - `Brand` — 보라 배경 + 흰 텍스트
  - `Brand_Line` — 흰 배경 + 보라 아웃라인 + 보라 텍스트
  - `Gray_Line` — 흰 배경 + 회색 아웃라인 + 검정 텍스트
- **Variant — State**: Default / Disable

## Text 버튼 (`button/text`)

- **Figma 노드**: `17:793`
- **용도**: 배경 없는 텍스트 링크성 버튼 (하단 유틸리티 링크, CTA 위 반대 액션 등)
- **사이즈·기하**:
  - Fixed height: **36px** (터치 영역 = 버튼명 가로 × 32 세로)
  - Padding: 상하 6px, 좌우 auto (텍스트 만큼)
- **Variant — Color** (4개):
  - `Gray_Light` — 옅은 회색 텍스트 (비활성 링크 or 부가 정보)
  - `Gray` — 회색 텍스트 (기본 유틸리티 링크)
  - `Black` — 검정 텍스트
  - `Brand` — 보라 텍스트 (강조 링크)
- **Variant — State**: Default / Disable (opacity 40%)
- **스타일 참고**: 하단 유틸리티 링크는 밑줄 병기 (rule.md 참조).

## Icon 버튼 (`button/icon`)

- **Figma 노드**: `202:2574`
- **용도**: 진입형 리스트 아이템 우측 텍스트 + `>` 아이콘, 설정 아이템 등
- **사이즈·기하**:
  - Fixed height: **34px** (터치 영역 = 버튼명 + 아이콘 가로 × 32 세로)
  - Padding: 상하 8px, 좌우 4px
- **Variant — Color** (3개):
  - `Gray` — 회색 텍스트·아이콘
  - `Black` — 검정 텍스트·아이콘
  - `Brand` — 보라 텍스트·아이콘
- **Variant — State**: Default / Disable
- **주의**: 회색(#666) 사용 시 이미지에 opacity 60% 적용.

## Fixed-Bottom 버튼 (`button/fixed-bottom`)

- **Figma 노드**: `17:1049`
- **용도**: 화면 하단 고정 CTA 컨테이너 (Large 버튼을 감싸는 래퍼)
- **사이즈·기하**:
  - Height: 72px (버튼 56 + 상하 여백 8+8)
  - Padding: 좌우 20px (`$screen-h-padding`)
  - 배경: Contents 영역과 동일 배경 (별도 색 없음)
- **하단 고정 버튼 병렬 비율**:
  - **좌 : 우 = 3.5 : 6.5** (성격이 다른 CTA 2개 병렬 시)
  - 비율 계산 후 정수 안 떨어지면 반올림
  - 좌측 = 보조(회색 채움 or 아웃라인), 우측 = 주(Primary 보라)
  - **파괴적 액션/미루기 = 좌측** (rule.md § "CTA 병렬 위계" 참조)
- **AOS vs iOS**: AOS는 사각+radius small / iOS는 더 큰 radius (플랫폼별 관례)

## Select 버튼 (`button/select`)

- **Figma 노드**: `247:2113`
- **용도**: 필드형 셀렉트(드롭다운) 버튼 — 밖 라벨 아래에서 값 선택 UI로 사용
- (상세 미확인 — Forms 카테고리 정리 시 재검토 예정)

## Margin (버튼 병렬 배치 규칙)

- 성격이 다른 버튼이 2개 이상 위치할 경우, **좌우/상하 = 8px 간격**을 두고 배열.
- 병렬 CTA 2개 예: [보조(회색)] [주(보라)] 사이 8px gap.

## Button 사용 매핑 (사이즈·용도)

| 위치 | 사이즈 | 색조 |
|---|---|---|
| 하단 고정 CTA (Primary) | Large | Brand (진한 보라) |
| 하단 고정 CTA (병렬 보조) | Large | Gray (회색 채움) |
| 하단 고정 CTA (병렬 반대 액션·아웃라인) | Large | Brand_Line or Gray_Line |
| 본문 내 강조 액션 | Medium | Brand or Brand_Line |
| 필드 우측 어드먼트 (편집) | Small | Gray_Line (회색 아웃라인) |
| 필드 우측 어드먼트 (강조 부가 액션) | Small | Brand_Line (보라 아웃라인) |
| 정보 조회 화면의 반복 편집 진입점 | Small | Gray_Line |
| 하단 유틸리티 링크 | Text | Gray |
| CTA 위 반대 액션 링크 | Text | Gray (밑줄 병기) |
| 진입형 리스트 아이템 우측 액션 | Icon | Gray / Brand (설정값이면 Brand) |

## Button 관련 안티패턴

- ❌ 하단 고정 CTA 2개 병렬을 **동등 무게**로 (반드시 3.5:6.5 위계)
- ❌ **파괴 확정 액션을 우측 주 위치에** (반드시 좌측 회색 보조 위치)
- ❌ 로딩·처리중 표시(스피너)를 버튼에 (**opacity 40% Disable만으로 처리**)
- ❌ Text 버튼에 배경색 채우기 (그럴 거면 Small Brand 버튼 사용)
- ❌ Small 버튼에 Large 사이즈 padding·radius 적용

---

# 04_Forms

> Figma 카테고리 노드: `36:409` (04_Forms)
> 3개 대분류(Inputbox / Search bar / Selectbox) + Form UI 조합 규칙(Title / Guide Text) + 특수 폼(Email / Card number / Input+Button)

**공통 토큰** (모든 Form 컴포넌트 공유)

- **Corner radius**: `radius/components/form` = **6px**
- **Height**: **48px** (fixed) — Inputbox/Search bar/Selectbox 모두 동일
- **내부 좌우 padding**: `spacing-medium` = **16px**
- **아이콘·요소 간 gap**: `spacing-small` = **12px** (내부), `spacing-xsmall` = **8px** (필드끼리)
- **배경**: `color/background/primary` = #FFFFFF
- **테두리 두께**: 1px
- **폰트**: Pretendard, `body/1-regular` (15px / lineHeight 24 / letterSpacing -0.3) 기본, Active·Error·Complete 상태는 `body/1-Bold`
- **Width**: Flexible (부모 컨테이너 가변 — "화면이 늘어날 경우 늘어나는 영역")

**상태(State) 스펙 — 공통** (Inputbox·Search bar 기준 6개, Selectbox는 축약 4개)

| State | 테두리 | 텍스트/아이콘 | 굵기 | 배경 | 사용 시점 |
|---|---|---|---|---|---|
| **Default** | `color/border/default` #DDDDDD | Placeholder `color/font/placeholder` #999999 | Regular | White | 초기(입력 전) |
| **Focus** | `color/border/focus` #805AE9 (보라) | Placeholder 유지 | Regular | White | 필드 탭 후 아직 값 없음 |
| **Active** | `color/border/focus` #805AE9 | 입력값 `color/font/brand` #805AE9 | **Bold** | White | 값 입력 완료·유효 (편집 중) |
| **Complete** | `color/border/default` #DDDDDD | 입력값 `color/font/primary` #000000 | **Bold** | White | 값 확정(편집 종료·읽기 전용에 준함) |
| **Inactive (Disable)** | `color/border/default` #DDDDDD | `color/font/placeholder` #999999 | Regular | White (opacity 미적용, 텍스트만 회색) | 비활성/입력 불가 |
| **Error** | `color/border/error` #FF364B (레드) | 입력값 `color/font/error` #FF364B | **Bold** | White | 검증 실패 |

> Selectbox는 `Focus`·`Complete` 상태를 사용하지 않음 — Default → Active → Inactive → Error 4단계.

---

## Inputbox (`input/input`, `input/basic`)

- **Figma 노드 (샘플 인스턴스)**:
  - `99:881` (Default) / `99:884` (Focus) / `99:932` (Active + clear 아이콘)
  - `386:2868` (input/basic — Title + Input + Guide Text 조합 컴포넌트)
- **용도**: 텍스트 자유 입력 필드. 이름·전화·주소 등 문자 입력 전반.
- **사이즈·기하**:
  - Height 48px / Radius 6px / 좌우 padding 16px
  - 문구 영역 = 가변 (컨테이너 너비에 맞춰 확장)
  - **터치 영역** = 필드 전체 (48px 세로 유지, `konacard-ds-rule.md` § "터치 영역 32px 최소" 규칙 충족)
- **텍스트 정렬**: Fill — **Align: Left** (플레이스홀더·입력값 모두 좌측 정렬)
- **State 변형**:
  - `Default` / `Focus` / `Active` / `Complete` / `Inactive(Disable)` / `Error` — 위 공통 표 그대로
  - **Active·Error 상태에서만 clear 버튼(×) 노출** (우측 어드먼트, `color/icon/quinary` #DDDDDD 원형 + `color/icon/white` 아이콘)
- **하위 슬롯**:
  - Left: 텍스트(플레이스홀더 또는 입력값)
  - Right (선택): clear 아이콘(Active/Error에서만) — Icon `color/icon/quinary` #DDDDDD 배경 + white "×"
- **input/basic 확장**: input/input에 상단 Title(`body/3-Bold` 12px)과 하단 Guide Text(`body/3-Regular` 12px) 슬롯이 결합된 조합 컴포넌트 — 요소 간 상하 gap **8px** (`spacing-xsmall`)

## Inputbox 관련 안티패턴

- ❌ **Placeholder를 Label 대신 사용** — 반드시 필드 상단 Title 라벨 사용 (Placeholder는 예시값 힌트 전용)
- ❌ **Complete와 Active 색상 혼동** — Active(보라)는 편집 중, Complete(검정)는 확정. 화면 목적에 따라 구분
- ❌ Error 상태에서 clear(×) 버튼 생략 (사용자가 잘못된 값을 지우고 재입력할 수 있어야 함)
- ❌ 세로 높이를 48px보다 낮게 축소 (터치 영역 확보 실패)

---

## Search bar (`input/search`)

- **Figma 노드 (샘플 인스턴스)**: `2408:7204` (Default) / `2408:7213` (Active with clear)
- **용도**: 목록·데이터를 텍스트 키워드로 필터링. 상단 툴바 하단 배치 또는 필터 카드 상단.
- **사이즈·기하**: Inputbox와 동일 (48h / R6 / padding 16 / left 정렬)
- **하위 슬롯**:
  - Left: 텍스트 (플레이스홀더/입력값)
  - Right: **검색 아이콘 🔍** (`color/icon/secondary` #333333, 항상 노출)
  - Right (Active/Error에서만): **clear 아이콘(×)** — 검색 아이콘 좌측에 위치
- **State 변형**: Inputbox와 동일 6단계 (Default/Focus/Active/Complete/Inactive/Error)
- **Search bar 자체 사용 규칙**:
  - 검색 아이콘은 항상 우측 고정, 클릭해도 별도 액션 없음(엔터·자동검색으로 동작)
  - 좌측에 아이콘 두지 말 것 (Inputbox와 시각적으로 구분 안 됨)

---

## Selectbox (`Input/Select`)

- **Figma 노드 (샘플 인스턴스)**: `99:951`
- **용도**: 정해진 옵션 목록에서 하나 고르는 필드 (드롭다운 트리거)
- **사이즈·기하**: Inputbox와 동일 (48h / R6 / padding 16 / left 정렬)
- **하위 슬롯**:
  - Left: 텍스트(플레이스홀더 "선택" 또는 선택값)
  - Right: **chevron 아이콘 ⌵** — Default 아래방향, Active/Focus 위방향(펼침 상태)
    - Default·Inactive: `color/icon/quaternary` #999999
    - Active·Error: `color/icon/secondary` #333333
- **State 변형** (축약 4단계):
  - `Default` — 옵션 미선택
  - `Active` — 옵션 선택 완료 (텍스트 보라 Bold + 보라 테두리)
  - `Inactive (Disable)` — 비활성
  - `Error` — 검증 실패 (빨간 테두리 + 빨간 텍스트)
  - **Focus·Complete 상태 없음** (선택식이므로 편집 중 vs 확정 구분 불필요)
- **터치 영역**: 필드 전체 48px 유지
- **button/select와의 관계**: `02_Button § Select 버튼(247:2113)`은 이 Selectbox와 동일 렌더링을 재활용한 별도 버튼 인스턴스 (Forms 카탈로그에서는 `Input/Select`, Buttons 카탈로그에서는 `button/select` 로 이중 노출). **폼 안 = Selectbox 사용, 폼 밖 필터 트리거 = button/select 사용**

## Selectbox 관련 안티패턴

- ❌ **Focus 상태 추가로 그리기** — Active 하나로 편집·확정 모두 커버 (Inputbox와 다름)
- ❌ chevron 방향을 항상 아래로 고정 (열림 상태 시각 피드백 상실)
- ❌ 옵션이 3개 이하일 때 Selectbox 사용 — 라디오 버튼(`05_Control`) 사용 고려

---

## Form UI 조합 규칙 (Title / Guide Text)

Inputbox·Search bar·Selectbox 위·아래에 붙는 라벨/안내 텍스트의 공통 규칙.

- **요소 간 상·하 gap**: `spacing-xsmall` = **8px** (Title↔Field↔Guide Text 모두)
- **Title** (필드 상단 라벨)
  - 사용 시점: "Inputbox/Selectbox 상단에 제목이 있는 경우"
  - 타이포: `body/3-Bold` = Pretendard Bold **12px** / lineHeight 18 / letterSpacing -0.24
  - 색: `color/font/secondary` #333333
- **Guide Text** (필드 하단 안내/에러 문구)
  - 타이포: `body/3-Regular` = Pretendard Regular **12px** / lineHeight 18
  - 5가지 톤 variant:

  | Variant | 색 | 아이콘 | 사용 시점 |
  |---|---|---|---|
  | `info (Gray)` | `color/font/placeholder` #999999 | 없음 | 부가 힌트 (예: "숫자만 입력 가능") |
  | `info (Black)` | `color/font/primary` #000000 | 없음 | 강조 힌트 (예: 잔액 표시) |
  | `Guide (Gray)` | #999999 | ! 아이콘 `color/icon/quaternary` | 가이드성 안내 (검증 전) |
  | `Guide (Black)` | #000000 | ! 아이콘 `color/icon/secondary` | 강조 가이드 |
  | **`Error`** | `color/font/error` **#FF364B** | ⓘ 아이콘 `color/icon/accent-red` #FF364B | 검증 실패 메시지 (Error state와 항상 페어링) |

## Form UI 안티패턴

- ❌ Title을 필드 안 Placeholder로 대체 (접근성·재입력 편의 하락)
- ❌ Guide Text에 라이트 회색(#999999) 남발 — 검증 결과·필수값은 반드시 `Error`(#FF364B) 사용
- ❌ Title/Guide Text 간격을 8px 외의 값으로 변경 (`spacing-xsmall` 고정)

---

## 특수 폼 조합 (Form - Button / Email / Card number)

### Form - Button (`input/button`)

- **Figma 노드**: `386:2895`
- **용도**: 인풋 + 우측 액션 버튼 조합 (예: "인증번호 요청", "중복확인")
- **레이아웃**:
  - **인풋 영역 = 가변** (화면이 늘어나면 늘어남)
  - **버튼 영역 = 고정** (내용 너비 + Small/Medium 사이즈)
  - **인풋 ↔ 버튼 gap = 8px** (`spacing-xsmall`)
  - 버튼 여러 개일 경우 각 버튼 사이도 **8px 씩**
- **버튼 사이즈**: 인풋 높이(48px)와 맞추기 위해 Medium 이상 사용 권장 (Small은 회색·경량 액션에 한정)
- **버튼 색조**:
  - 액션 트리거(인증번호 요청·검색) = **Brand** (보라 채움)
  - 보조 액션(초기화·재요청) = **Gray_Line**

### Form - Email (`input/email`)

- **Figma 노드**: `386:2894`
- **용도**: 이메일 로컬파트 + `@` + 도메인 선택 3단 구조
- **레이아웃**:
  - **좌측 Input · 우측 Selectbox 각각 Fill (1/N)** — 동등 비율 반반 분할
  - 실제 가로 산식: **`Inputbox 가로 = (Contents area - 24) / 2`**
  - 중앙 `@` 텍스트 자리 폭 = **24px** (`spacing-large` 계열)
  - 좌우 필드 정렬 baseline은 `@` 텍스트 세로 중앙과 일치
- **State**: 좌·우 필드 각각 독립 상태 (한쪽 에러 시 해당 필드만 빨강)

### Form - Card number (`input/card-number`)

- **Figma 노드**: `386:2893`
- **용도**: 카드번호 4×4 자리 입력. 4구간을 `-`로 시각 구분.
- **레이아웃**:
  - 4구간 각 `0000` 자리 = **Fill (1/N)** — 동일 폭 4등분
  - 구간 사이 구분자 폭 = **24px** (총 24×3 = 72px 고정 공제)
  - 실제 가로 산식: **`카드번호 텍스트 영역 = (Text area - (24 × 이미지개수)) / 4`**
  - **텍스트 정렬 = 가운데 정렬** (Inputbox 일반 좌측 정렬과 다름 — 카드번호 전용 규칙)
  - 카드번호 영역 자체는 가변 (컨테이너 확장 시 각 구간이 늘어남)
- **키보드**: 숫자 전용 키패드, 자리 입력 완료 시 자동 다음 구간 포커스 이동 (구현측 관례)
- **주의**: 각 4자리 구간을 별도 인풋으로 분리하지 말고 한 인풋 내부에서 시각 구분자로만 처리 (백스페이스 UX 유지)

---

## 04_Forms 카테고리 종합 안티패턴

- ❌ **필드 높이를 32/40/56 등 다양하게 섞기** — 반드시 48px 고정
- ❌ **Corner radius를 4/8/16 등 임의로 변경** — 6px 고정 (`radius/components/form`)
- ❌ 필드 위 Title 라벨 없이 Placeholder만으로 라벨링 (접근성 저하)
- ❌ 에러 메시지를 툴팁·모달로 띄우기 (반드시 Guide Text 슬롯 `Error` variant에 인라인)
- ❌ 하나의 폼에 Selectbox와 button/select 를 혼용 (일관성 저하 — 폼 내부는 Selectbox 통일)

---

# 05_Control

> Figma 카테고리 노드: `27:396` (05_Control)
> 3개 기본 컨트롤(Switch / Checkbox / Radio) + 조합 컴포넌트(agree, swtich_setting, radio-text)
> **공통 원칙**: **Disable = Default 상태의 opacity 40%** (모든 컨트롤·모든 사이즈 공통, 라디오만 별도 asset 예외)

**공통 색 매핑 (모든 컨트롤)**

| 상태 | 색 토큰 |
|---|---|
| Selected(True) 채움 | `color/background/button-brand` = **#805AE9** |
| Selected 아이콘/핸들 | `color/icon/white` = #FFFFFF |
| Default(False) 채움 | `color/button/quarternary` = **#999999** (Switch) / 흰 배경 + `color/border/default` #DDDDDD (Checkbox·Radio 아이콘형) |
| Default 아이콘 | `color/icon/quaternary` = #999999 |
| Radio Selected 내부 도트 | `color/icon/brand` = #805AE9 |
| Disable | Default 상태 시각 그대로 + **opacity 40%** |

---

## Switch (`control/swtich`)

> **Figma 파일명 오타**: `swtich` — 원본 그대로 참조.

- **Figma 노드 (샘플 인스턴스)**: `386:2936` (40 Default), `386:2937` (40 Selected), `2408:7338` (50 Default), `2408:7339` (50 Selected)
- **개별 사이즈 컴포넌트**: `control/swtich/large`(50×28) `5743:5593`, `medium`(42×24) `5743:5594`, `small`(34×20) `5743:5595`, `tiny`(28×16) `5743:5596`
- **용도**: 즉시 반영 On/Off 토글. 설정 항목·알림 On/Off·필터 활성/비활성.
- **사이즈** (Figma 카탈로그 명명):
  | 카탈로그 표기 | Track W×H | Thumb | 개발 네이밍 |
  |---|---|---|---|
  | 40 Size | 42×24 | 20 | `medium` |
  | 50 Size | 50×28 | 24 | `large` |
  | (small) | 34×20 | 16 | `small` |
  | (tiny) | 28×16 | 12 | `tiny` |
  > 카탈로그의 "40/50 Size"는 track 세로 40/50 아닌 **가로 참고 명칭** — 실제 개발 시 `large / medium / small / tiny` 네이밍 사용.
- **Variant — Type** (2개):
  - `Selected (True)` — 트랙 보라(#805AE9) + 핸들 우측 + 흰 핸들
  - `Default (False)` — 트랙 회색(#999999) + 핸들 좌측 + 흰 핸들
- **Variant — State** (2개):
  - `Default (True)` — 활성
  - `Disable (False)` — Default 상태 + **opacity 40%**
- **Radius**: 트랙은 완전 pill (height/2), 핸들은 원형
- **애니메이션**: 핸들 좌↔우 이동 시 슬라이드 트랜지션 (구현측 관례)

### control/swtich_setting (`2408:7412`, `2409:6212`)

- **용도**: **Title + Description + Switch** 조합 카드 (설정 화면 리스트 항목 전용)
- **레이아웃**:
  - 크기 360×95 (기본), 배경 흰색 또는 `background/secondary` 회색 카드 (강조 필요 시)
  - 좌측: Title(`body/1-Bold` 15px) + 아래 Description(`body/3-Regular` 12px, `color/font/quaternary` #999999)
  - 우측: Switch 50 Size(large) 세로 중앙 정렬
- **사용 예시**: 설정 화면의 "알림 받기" On/Off 카드

---

## Checkbox (`control/checkbox`)

- **Figma 노드 (샘플 인스턴스)**:
  - 24 Size: `386:2946` (Selected 아이콘형), `386:2947` (Default 아이콘형), `2408:7361` (Selected 박스형), `2408:7363` (Default 박스형)
  - 28 Size: `386:2944` (Selected), `386:2945` (Default)
  - 32 Size: `386:2942` (Selected), `386:2943` (Default)
- **용도**: 복수 선택 가능한 옵션·약관 개별 동의 체크
- **사이즈 & 서브타입**:

| 사이즈 | 서브타입 | 스펙 | 주 사용처 |
|---|---|---|---|
| **24 Size (아이콘형)** | 체크 아이콘 only, 배경/외곽선 없음 | 체크 색: `color/background/button-brand` #805AE9 / Default: `color/icon/quaternary` #999999 | **팝업 내 약관 세부 항목** (일반 페이지 지양) |
| **24 Size (박스형)** | 8×8 라운드 사각형 외곽선 + 체크 | Selected: 외곽선·체크 모두 브랜드 보라 / Default: 회색 외곽선 + 회색 체크 | 폼 내 개별 옵션(다중 선택) |
| **28 Size** | 원형 배경 + 흰 체크 | Selected: 보라 채움 + 흰 체크 / Default: 회색 원형 + 흰 체크 | **약관 세부 - 2depth (일반 페이지)** |
| **32 Size** | 원형 배경 + 흰 체크 (28과 동일 스타일, 크기만 확대) | 동일 | **약관 전체 선택** |

- **Variant — State**: Default(True) / Disable(False, opacity 40%)
- **Variant — Type**: Selected(True) / Default(False)
- **터치 영역**: 카탈로그상 최소 24px — 리스트 아이템 안에서는 부모 행 전체(≥48px)가 터치 영역

---

## Radio (`control/radio`)

- **Figma 노드 (샘플 인스턴스)**:
  - 24 Size: `386:2966` (Selected), `386:2967` (Selected Disable), `386:2968` (Default), `386:2969` (Default Disable)
  - 28 Size: `386:2962` (Selected), `386:2963` (Selected Disable), `386:2964` (Default), `386:2965` (Default Disable)
- **용도**: 단일 선택 (여러 옵션 중 하나만). 결제수단 선택·설정값 라디오 그룹.
- **사이즈**: 24 / 28 (2개)
- **모양**:
  - Selected(True): 흰 원 + 회색 테두리(`color/border/default` #DDDDDD) + **내부 도트 보라(#805AE9)** (`color/icon/brand`)
  - Default(False): 흰 원 + 회색 테두리(내부 비어있음)
- **Variant — State** (Disable 예외):
  - Default(True): 활성 (Selected 또는 Default 렌더)
  - Disable(False): **라디오 버튼에서만 예외로 Disable 상태용 별도 image asset 사용**
    - (opacity 40% 계산이 아닌 사전 정의된 회색조 렌더 이미지) — Figma 카탈로그의 아래 행 참조
- **터치 영역**: 24/28 미만이므로 부모 행(≥44px 권장)이 실제 터치 영역

### control/radio-text (`2409:6267`, `2410:6280`)

- **용도**: 라디오 + 우측 텍스트 라벨 조합 (인라인 옵션)
- **variant**:
  - `Basic` — 28 Size 라디오 + 텍스트 `body/1-regular` 15px, 컨테이너 h40 (176×40)
  - `Small` — 24 Size 라디오 + 텍스트 `body/2-regular` 14px, 컨테이너 h32 (180×32)
- **가로 배치**: 라디오 ↔ 텍스트 gap = `spacing-xsmall` 8px, 라벨끼리 gap = `spacing-medium` 16px 이상 권장

---

## 조합 컴포넌트 — control/agree (약관 동의)

`control/agree`는 **Checkbox + 텍스트(+ chevron)** 조합의 약관 동의 리스트 아이템 컴포넌트. 3가지 variant.

| Variant | 사용처 | 스펙 | Figma 노드 |
|---|---|---|---|
| **약관 전체동의** | 리스트 최상단 "모두 동의합니다" 행 | Checkbox 32 Size + Title(`body/1-Bold` 15px 검정) / 컨테이너 346×44, 배경 흰색 또는 회색 카드 | `2004:5187` |
| **세부 약관 - 일반** | 일반 페이지의 세부 항목 각 행 | Checkbox 28 Size + 텍스트(`body/1-regular` 15px) + 우측 chevron `>` (상세 보기 진입) / 346×44 | `2004:5193` |
| **세부 약관 - 팝업** | **팝업/바텀시트에 노출될 경우만** (일반 페이지 지양) | Checkbox 24 Size + 텍스트 + 우측 chevron `>` / 346×40 | `2409:6241` |

- **레이아웃 공통**:
  - Checkbox 좌측, 텍스트 8px gap 뒤 → 우측 확장(가변)
  - chevron 필요한 variant는 우측 끝 24×24 아이콘 영역
- **사용 원칙**:
  - "약관 전체동의"는 세부 항목 위에 항상 별도 행으로 배치 (전체동의 = 모든 세부 항목 chk on 동기화)
  - **팝업 variant는 일반 페이지에서 사용 금지** — 일반 페이지는 28(2depth) 사용

---

## 05_Control 카테고리 종합 안티패턴

- ❌ **Switch로 즉시 반영 안 되는 액션 트리거** — Switch는 값 변경이 즉시 저장/반영되는 컨트롤. 저장 버튼이 필요한 폼에는 Checkbox 사용
- ❌ **Radio를 다중 선택에 사용** — 다중 선택은 반드시 Checkbox
- ❌ **Radio Disable 상태에 opacity 40% 직접 적용** — 예외적으로 미리 준비된 image asset 사용 (라디오만)
- ❌ 약관 전체동의를 세부 약관 사이에 배치 (반드시 최상단 별도 행)
- ❌ 팝업 variant의 checkbox 24 아이콘형을 일반 페이지에 사용 (일반 페이지 = 28 원형)
- ❌ Switch·Radio·Checkbox 사이즈를 카탈로그 외 값으로 변경 (스케일 breakage)

---

# 01_Actionbar

> Figma 카테고리 노드: `17:829` (01_Actionbar)
> 3개 컴포넌트: **action-bar/button** (터치 유닛) / **action-bar/header** (Main·Sub·Scroll Title 헤더 3형) / **action-bar/headline** (스크롤 대응 큰 제목)

**공통 원칙**

- **높이 Fixed 56px** (모든 action-bar/header variant 공통)
- **배경**: 별도 색 없음 — **Contents 영역과 동일 배경 상속** ("Action bar 배경 색상은 Contents 영역의 배경색과 동일하게 적용")
- **좌우 화면 padding**: **20px** (`layout/margin` — 모든 화면 공통, `konacard-ds-rule.md` 참조)
- **버튼 touch 유닛 = 56×56 정사각** (`action-bar/button`)
- **로고↔타이틀 gap** (Main 유형): **12px**
- **Text 우측 액션 padding**: 16px (`spacing-medium`)
- **텍스트 정렬**:
  - **AOS**: 좌측 정렬(back 유무와 무관)
  - **iOS**: 중앙 정렬(back 유무와 무관)

---

## action-bar/button (`375:3246`, `375:3247`)

- **Figma 노드**: `375:3246`, `375:3247` (샘플 인스턴스)
- **용도**: 헤더 좌/우측에 배치되는 아이콘 버튼 단위 (뒤로가기 `<`, 알림 🔔, 햄버거 ≡, 검색 🔍 등)
- **사이즈·기하**:
  - **56×56 정사각** (터치 영역)
  - Icon 자체 크기: **24px**, 상하좌우 **16px 여백**
  - Corner radius: 없음 (배경 투명이므로 무의미)
- **하위 슬롯**: 중앙에 아이콘 하나. 색: `color/icon/secondary` #333333 기본, 강조 필요 시 `color/icon/brand` #805AE9
- **State**: Default / Disable (opacity 40% — 다른 버튼 규칙과 동일)
- **주의**:
  - **아이콘만** 배치. 텍스트가 필요하면 `button/text` 컴포넌트를 헤더 우측에 직접 배치 (예: `7796:5462` — Page title + 우측 "Button" 텍스트)
  - 배지(Badge)는 아이콘 우상단에 붙이는 별도 인스턴스 (12_Banner 정리 시 재검토)

---

## action-bar/header — 3형 총괄

동일 컴포넌트 `action-bar/header`(높이 56)를 **배치 유형**으로 3가지로 사용:

| 형태 | 좌측 | 중앙/좌측 텍스트 | 우측 | 대표 노드 |
|---|---|---|---|---|
| **Main** (홈·메인 진입 화면) | 로고 24px + 12px gap + Main text | `body/1-Bold` 15px 검정, 좌측 정렬 | icon 버튼 1~3개 (알림·설정·햄버거 등) | `375:3198` |
| **Sub** (하위 페이지) | back `<` 버튼 (선택) | Page title `body/1-Bold` 15px 검정 · **AOS 좌측·iOS 중앙** | text button 또는 icon 버튼 (선택) | `7796:5440`(AOS) · `7796:5486`(iOS) |
| **Scroll Title** (헤드라인 스크롤 대응) | back `<` (선택) | 스크롤 전 비어있음 → 스크롤 시 Page title 노출 | icon 버튼 (햄버거 등) | `407:3744` |

### Main 유형 (`375:3198`)

- **용도**: 홈·메인·주요 진입 화면 상단
- **레이아웃** (56h):
  - 좌: **로고 24px** + gap 12px + Main text (`body/1-Bold` 15px, `color/font/primary` #000000)
  - 좌 padding: **20px** (`layout/margin`)
  - 우: icon button 1~3개 병렬 (각 56×56, gap 없음 — 버튼 자체 여백으로 자연 간격 형성)
- **align**: Vertical middle (`Align: Middle`)
- **로고**: 브랜드 심볼 (원형 브랜드 아이콘). 실 프로덕트에서는 브랜드 오브젝트로 대체 가능하나 크기 24px 고정.
- **Main text**: 브랜드명 또는 짧은 위치 표시 (예: "KONACARD", "MY카드")

### Sub 유형 — AOS (`7796:5440`, `7796:5414`, `7796:5462`)

- **용도**: 뒤로가기 필요한 하위 페이지 상단
- **레이아웃 3 variant**:
  - **이전 있음**: `<` back(56×56) + gap 4px + Page title 좌측 정렬 (실좌 padding = back 56 + 4 = 60px 지점)
  - **이전 없음**: Page title 20px 좌측 padding
  - **이전 + 우측 액션**: `<` back + Page title 좌측 + 우측 text button (`body/1-Bold`, 우측 padding 16)
- **Page title**: `body/1-Bold` = Pretendard **Bold 15px** / lineHeight 24 / 색 #000000

### Sub 유형 — iOS (`7796:5486`, `7796:5415`, `7796:5416`)

- **레이아웃**: AOS와 동일 구조, **다만 Page title은 항상 중앙 정렬** (back 유무 무관)
- **주의**: iOS 관례에 따른 중앙 정렬. **하나의 화면에 AOS/iOS 헤더를 섞지 말 것** — 플랫폼별 빌드에서 하나만 사용

### Scroll Title 유형 (`407:3744` + `1098:4449`)

- **용도**: 헤드라인 크게 노출 + 스크롤 시 헤더로 축소되는 이중 패턴
- **동작**:
  - **스크롤 전**: action-bar/header에는 우측 액션(햄버거 등)만 노출, 타이틀 영역 비어있음. 본문 상단에 `action-bar/headline` 큰 제목 노출
  - **스크롤 시**: 헤드라인이 헤더로 밀려 들어가면서 헤더에 **Page title 자동 노출 + 하단 divider(밑줄) 표시**
- **트랜지션 트리거**: 헤드라인 하단 라인이 헤더 하단과 만나는 시점

## action-bar/header 안티패턴

- ❌ **AOS 헤더에서 title 중앙 정렬** / **iOS 헤더에서 title 좌측 정렬** (플랫폼 관례 위배)
- ❌ **Main 유형에 back 버튼** (Main은 진입점 — back 없음. back 필요하면 Sub 유형)
- ❌ **우측 액션 4개 이상** (56×56 × 3 이하 권장, 그 이상은 햄버거 메뉴로 통합)
- ❌ 헤더 배경에 별도 색 지정 (Contents 배경 상속 원칙 위배)
- ❌ Scroll Title 유형에서 스크롤 전에도 헤더에 Page title 노출 (헤드라인과 중복)

---

## action-bar/headline (`1098:4444`, `1098:4449`)

- **용도**: Scroll Title 유형과 페어링되는 **큰 제목 영역** (본문 최상단 배치)
- **사이즈·기하**:
  - 폭: 360px 기준(가변) / 높이: 248px 기준(콘텐츠 따라 가변)
  - 좌우 padding: **20px** (`layout/margin`)
  - 상단 padding: **24px** (`layout/margin-top`)
- **하위 슬롯** (스크롤 전 렌더):
  - **Main text** (큰 제목): `heading/1-bold` = Pretendard **Bold 24px** / lineHeight 32 / letterSpacing -0.48 / 색 #000000
    - 강조 부분은 `color/font/brand` #805AE9 사용 가능 (한 구절만)
  - **Sub text** (부제): `body/2-Regular` 14px / `color/font/tertiary` #666666, 상단 gap 8px
  - **Main text description** (설명): `body/2-Regular` 14px / `color/font/quaternary` #999999
- **강조 규칙** (Main text 안):
  - "Main text Main text **Main text 강조** Main text Main text" 형태
  - **한 구절만 브랜드 보라 강조** — `konacard-ds-rule.md` § "한 화면 = 한 과업" 원칙 준수
- **여러 줄 처리**: Main text는 2~3줄 권장, Sub text는 2줄 이하

## action-bar/headline 안티패턴

- ❌ 강조 보라를 **여러 구절에 반복 사용** (한 구절 원칙 위배)
- ❌ Headline 없이 Scroll Title 헤더만 사용 (헤더에 처음부터 Page title 노출) — 이 경우 그냥 Sub 유형 사용
- ❌ Headline과 첫 콘텐츠 카드 사이 여백을 24px 미만으로 축소

---

## 01_Actionbar 카테고리 종합 안티패턴

- ❌ **높이 56 외의 값** (48/64 등) — 반드시 Fixed 56
- ❌ **좌우 padding 20 외의 값** — layout/margin 고정
- ❌ **AOS↔iOS 헤더 혼용** — 플랫폼별 빌드에서 하나만
- ❌ 헤더에 그림자·아웃라인 (배경 상속 원칙과 충돌) — Scroll Title 스크롤 시 divider만 예외적 허용
- ❌ Main 유형과 Sub 유형을 한 화면에서 동시 노출 (탭·모달 내부 헤더 등)

---

# 03_Tab

> Figma 카테고리 노드: `99:587` (03_Tab)
> **Main tab**(화면 전체 분리용, 밑줄 선택 스타일) + **Sub tab**(콘텐츠 영역 내 분류용, 필 스타일)

**공통 원칙**

- **Main tab은 한 화면에서 1번만 사용** (중복 불가)
- **Sub tab은 Main tab과 병행 가능** (Contents 영역에 주로 사용)
- **Tab Menu Name 길이 제한** (한글 기준 띄어쓰기 포함):
  - Main-Basic **2 Tab = 7자**, **3 Tab = 4자** 최대. 초과 시 Multi tab 사용 권장
  - Main/Sub 모두 **10자 이상 시 '...' 말줄임** 처리
- **텍스트 정렬**: Text = Align Middle / Select bar = Align Bottom (Main), Sub는 pill 내부 중앙

---

## Main tab (`Tab/UI`, `tab/main-multi`)

- **Figma 노드 (샘플 인스턴스)**:
  - Basic 2 Tab: `102:1382` (260×48)
  - Basic 3 Tab: `407:3491` (280×48)
  - Multi Full: `102:1398` (360×48)
  - Multi 스크롤: `102:1493` (`tab/main-multi`, 360×48)
- **용도**: 화면 전체를 두세 개의 큰 섹션으로 분리 (예: "카드 · 결제 · 혜택" 최상위 분류)
- **사이즈·기하 공통**:
  - **높이 = Fixed 48px** (하단 1dp 선 포함)
  - 좌우 화면 padding: **20px** (`layout/margin`)
  - 텍스트 위·아래 padding으로 세로 중앙(Align: Middle)
  - **Select bar 폭 = 텍스트 폭 + 16 + 16** (텍스트 좌우 각각 16 여백 후 시작·종료)
  - Select bar 두께 2px, 색: `color/background/button-brand` #805AE9
  - 하단 divider: `color/divider/secondary` #00000014 (1dp)
- **Variant — Type**:
  - `Selected` — 텍스트 `color/font/brand` #805AE9 + **`body/1-Bold`** (Pretendard Bold 15px) + 하단 Select bar 노출
  - `Default` — 텍스트 `color/font/quaternary` #999999 + `body/1-regular` (Pretendard Regular 15px) + Select bar 없음
- **Variant — State**: Default(True) / Disable(False, opacity 40%)

### Main - Basic (Full 분할, 2·3 Tab)

- **레이아웃**: 20 (좌 padding) + Fill(1/N) × N + 20 (우 padding)
  - **Tab width = (화면 너비 - 40) / N**
  - **화면 전체를 쓰는 탭은 최대 3개까지만 사용** (그 이상은 Multi tab)
  - 각 탭 안에서 텍스트는 가로 중앙 정렬 (Fill 영역 안 중앙)
- **글자 수 제한** (한글 기준):
  - 2 Tab → **각 탭 7자 이하**
  - 3 Tab → **각 탭 4자 이하** (10자 아님 — 여기서만 4자)
- **초과 시**: 반드시 Multi tab으로 전환

### Main - Multi (`tab/main-multi`)

- **Figma 노드**: `102:1493`
- **용도**: 4개 이상 or 이름이 긴 카테고리 탭
- **레이아웃**:
  - **First** variant: 화면 좌 padding 20px 시작 → 첫 탭 노출
  - **Last** variant: 마지막 탭까지 스크롤 시 우측 padding 20px 유지
  - 탭들은 **텍스트 폭 + 좌우 16px 여백** 만큼만 차지 (Fill 아님) — 자연스러운 가변 폭
  - 탭 사이에는 별도 gap 없음 (텍스트 여백 16+16으로 자연 간격)
- **말줄임**: 텍스트 10자 이상 시 `...` 표기
- **Gradation** (개발 구현): Tab 영역이 화면 가로 영역보다 길 경우 스크롤 우측 끝에 **그라데이션 페이드** 적용 (더 있음을 시각적으로 알림)

## Main tab 안티패턴

- ❌ **한 화면에서 Main tab 2개 이상 노출** (반드시 1개)
- ❌ **4개 이상을 Basic Full로 배치** (반드시 Multi 사용)
- ❌ 2 Tab에 8자 이상, 3 Tab에 5자 이상 텍스트 (자간 강제 축소로 가독성 저하)
- ❌ **Selected 탭에 하단 Select bar 생략** (Type 시각 구분 실패)
- ❌ Select bar 폭을 텍스트 폭에 딱 맞추기 (반드시 텍스트 좌우 16px 여유 포함)

---

## Sub tab (`tab/Sub`, `tab/sub-ui`)

- **Figma 노드 (샘플 인스턴스)**:
  - `105:695` (`tab/Sub`, 단일 pill, 56×38)
  - `334:2575`, `334:2576` (`tab/sub-ui`, 여러 pill을 담은 스크롤 컨테이너, 360×38)
- **용도**: Contents 영역 내부 세부 분류 (예: 카드 상세 안에서 "혜택 · 사용내역 · 설정")
- **사이즈·기하**:
  - **높이 = Fixed 38px**
  - **Corner radius = 50%** (완전 pill, `radius/button/round` = 9999)
  - 내부 좌우 padding: **16px** (`spacing-medium`)
  - 텍스트 세로 중앙, 가로 중앙 정렬
  - 폰트: `body/2-bold` (Pretendard Bold 14px / lineHeight 22 / letterSpacing -0.28)
- **Variant — Type**:
  - `Selected` — 배경 `color/background/button-brand` #805AE9 + 텍스트 `color/font/white` #FFFFFF
  - `Default` — 배경 흰색 + `color/border/default` #DDDDDD 테두리 1px + 텍스트 검정
- **Variant — State**: Default(True) / Disable(False, opacity 40%)
- **레이아웃** (여러 pill 나열 = `tab/sub-ui`):
  - **First** variant: 좌 padding 20 → 첫 pill → 사이 **gap 4px** → 다음 pill …
  - **Last** variant: 마지막 pill → 우 padding 20
  - pill들 사이 gap = **4px** (매우 좁게 붙임, pill 자체 padding으로 시각 간격 확보)
  - 화면보다 폭 초과 시 가로 스크롤 (Gradation 페이드 관례 동일)

## Sub tab 안티패턴

- ❌ **Corner radius 50% 외 값** (Sub는 반드시 완전 pill — Main과 시각적으로 구분되는 핵심)
- ❌ Main tab 대신 Sub tab을 화면 최상단 분류에 사용 (Sub는 반드시 Contents 영역 안에서만)
- ❌ Sub tab pill 사이 gap을 8px 이상으로 (반드시 4px — 밀집 배치가 pill 스타일의 시각 특징)
- ❌ Sub tab에 밑줄 Select bar 얹기 (스타일 혼용 금지)

---

## Main vs Sub 사용 매핑

| 상황 | 사용 tab | 이유 |
|---|---|---|
| 화면 최상단 최대 3개 카테고리 (짧은 이름) | Main - Basic (2·3 Tab) | 균등 분할 + 명확한 강조 |
| 화면 최상단 4개 이상 or 긴 이름 카테고리 | Main - Multi | 스크롤 대응 |
| 카드/상품 상세 내부 세부 탭 (혜택·이용내역·설정) | Sub tab | Main tab과 시각적으로 구분되는 하위 계층 |
| 필터·정렬 옵션 (선택 시 즉시 반영) | Sub tab | pill 스타일의 필터 관례 |
| 필드형 옵션 선택 (폼 내부) | 03_Tab 대신 `05_Control` Radio 또는 `04_Forms` Select 사용 | 폼 컨트롤과 탭은 분리 |

---

## 03_Tab 카테고리 종합 안티패턴

- ❌ **한 화면에 Main tab 여러 개** (반드시 1개)
- ❌ **Main과 Sub의 스타일 혼용** (밑줄 + pill 조합 금지)
- ❌ 탭 안에서 텍스트만 좌측 정렬 (Text는 항상 세로 중앙 + 가로 중앙)
- ❌ 텍스트 폭이 넘칠 때 자간·글자 크기 축소로 억지로 우겨넣기 (Multi로 전환하거나 `...` 처리)
- ❌ Select bar 색을 브랜드 보라 외로 변경 (강조 색 통일 원칙 위배)

---

# 06_List

> Figma 카테고리 노드: `375:2810` (06_List)
> 3개 대분류: **Basic Type** (`list/list` — 진입·값·버튼 4형) / **Expand Type** (`list/expand` — 아코디언·FAQ) / **Select List** (`list/card-select` + `list/list` 선택 상태 응용 + `list/bottomsheet`)
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

---

## Basic Type — `list/list`

- **Figma 노드 (샘플 인스턴스)**:
  - 기본형: `2431:6931` (Main text 단독)
  - 텍스트 길어질 경우: `1085:5850`
  - 항목+값: `1085:5896`
  - 항목+버튼: `1085:5977` + `Frame 8994`(`704:6280`), `Frame 8995`(`1085:5782`), `Frame 8996`(`1085:5819`)
- **용도**: 설정·정보 리스트·메뉴·바텀시트 옵션 등 대부분의 세로 리스트 기본 유닛
- **사이즈·기하**:
  - 최소 높이 **56px** (한 줄 텍스트 기준, 상·하 padding 자동)
  - 좌우 padding **20px** (`layout/margin`)
  - Main text ↔ 우측 요소 gap: **12px** (`spacing-small`)
  - Main text ↔ Description(하단 2줄째) gap: **8px** (`spacing-xsmall`)
  - 하단 divider: 1dp #0000000F

### 4가지 표기 형태

| 표기 형태 | 우측 요소 | 대표 사용처 | 진입 여부 |
|---|---|---|---|
| **기본형** (Main text 단독) | 없음 | 정보 라벨 나열 | 진입 없음 (또는 행 자체 탭) |
| **텍스트가 길어질 경우** | 없음 | 긴 안내 | 진입 없음 |
| **항목과 값을 표기할 경우** | 값 텍스트 (우측 정렬, `body/2-Regular` `color/font/tertiary` #666666) | "회원등급 : 프리미엄" 형 정보 조회 | 진입 없음 |
| **항목과 버튼을 표기할 경우** | (a) `button/text` + `>` chevron (진입형) / (b) Small `button` `Gray_Line` (액션형) | (a) 설정 항목 진입 (b) 인라인 편집 · 변경 | (a) 있음 (b) 즉시 액션 |

- **텍스트 정렬**:
  - Main text: 좌측 정렬
  - 값 텍스트: **우측 정렬**
  - 우측 버튼(진입형·액션형): 우측 정렬
- **하단 부가 텍스트**:
  - Main text 아래 부연 `Description`(회색) 슬롯이 있으면 자동으로 행 높이 확장. Main↔Description gap 8px 유지.
- **터치 영역 규칙**:
  - **화면 이동이 되는 리스트** = 리스트 전체 영역 터치 (우측 chevron만이 아님)
  - 행 안 액션 버튼(Small)이 있는 액션형은 **행 전체 = 진입 없음**, **버튼만 터치 액션 실행**

---

## Expand Type — `list/expand`

- **Figma 노드 (샘플 인스턴스)**: `2431:7045`, `2431:7093`, `2431:7095`, `2431:7097`
- **용도**: 접이식(아코디언) 리스트. FAQ·상세 설명·이용약관 세부·이용 내역 상세 등.
- **레이아웃 구성**:
  - **Header** (항상 노출, 56px 이상):
    - 좌: Main text `body/1-Bold` 15px 검정
    - Main text 아래(선택): Description `body/2-Regular` 14px `color/font/quaternary` #999999
    - 우: chevron 아이콘 (열림 시 `⌃`, 닫힘 시 `⌵`, `color/icon/secondary` #333333)
  - **Divider** (1dp #0000000F, Header ↔ Body 사이 · 열림 상태에서만)
  - **Body** (열림 상태에서만 노출):
    - **1depth contents text**: `body/1-regular` 15px 검정 (본문)
    - **2depth contents text**: `body/3-Regular` 12px `color/font/quaternary` #999999 (1depth 아래 부연)
    - **Inner card** (선택): `color/background/secondary` 회색 카드 안에 다시 1depth·2depth 텍스트 (깊은 계층 강조 시)
- **State**:
  - `closed` — Header만
  - `open` — Header + Body 노출
- **애니메이션**: 높이 slide-down (구현측 관례)

### FAQ 응용
- Header에 "Q. " 접두어 + Main text → 열리면 Body에 답변 노출
- 카탈로그의 별도 `expand-FAQ` 컴포넌트는 없음. `list/expand`의 콘텐츠 응용으로 처리.

## Expand 안티패턴

- ❌ **닫힌 상태에서도 Body divider 노출** (열림 시에만)
- ❌ chevron 방향을 항상 아래(⌵) 고정 (열림·닫힘 시각 피드백 상실)
- ❌ Body 안에 또 다른 `list/expand` 중첩 (최대 2 depth까지만 계층 표현 — 그 이상은 별도 화면 진입)

---

## Select List (선택 상태 응용)

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
  - 테두리 브랜드 보라 변경 + Main text `body/1-Bold` 유지
  - **우측 체크 아이콘 노출**(관례) — 카드-select 컴포넌트 자체에는 아이콘 슬롯이 있음
- **터치 영역**: 카드 아이템 전체

### Bottomsheet — `list/bottomsheet`

- **Figma 노드 (샘플 인스턴스)**: `2431:7098`, `2431:7099`
- **용도**: 바텀시트 내부의 옵션 나열 리스트 (지역 선택·정렬 옵션 등)
- **레이아웃**: 각 행 최소 56px, 좌우 padding 20, 텍스트만 배치
  - 기본: List Title (`body/1-regular` 15px 검정) 좌측 정렬
  - 선택된 옵션: `body/1-Bold` + `color/font/brand` #805AE9 (Select List 응용과 동일)
- **바텀시트 컨테이너**:
  - 배경 `color/background/primary` #FFFFFF, 상단 corner radius 큰 값(20+, `konacard-ds-rule.md` § "팝업·바텀시트" 참조)
  - 상단 드래그 핸들(4px 회색 pill 그립) — 관례상 노출
- **하단 CTA**: 결정 필요한 리스트(다중선택 확인)는 하단 `button/fixed-bottom` 사용

## Select List 안티패턴

- ❌ **Selected 상태에 배경색 채우기** (반드시 텍스트 Bold + Brand 색만으로 표기 — 배경 채움은 Card-select에서만)
- ❌ 리스트 항목이 3개 이하일 때 바텀시트 사용 (라디오 인라인이 더 나음)
- ❌ Card-select의 이미지 슬롯을 빈 회색 박스로 대체 (반드시 실 이미지 또는 placeholder 아이콘)

---

## 06_List 카테고리 종합 안티패턴

- ❌ **터치 영역을 chevron·우측 버튼만으로 한정** — 진입형은 항상 행 전체 터치
- ❌ **아이템 사이 divider 두께·색 임의 변경** (반드시 1dp #0000000F)
- ❌ Main text를 3줄 이상으로 (반드시 2줄 이하, 초과 시 `...` 말줄임)
- ❌ **진입형 + 액션형을 같은 행에** (chevron`>` 과 Small 버튼 동시 배치 금지 — 하나만 선택)
- ❌ Expand 안에 또 Expand 중첩 (2 depth 초과 시 별도 화면 진입 유도)
- ❌ Select List 선택 상태를 체크박스로 대체 (다중 선택이면 05_Control Checkbox, 단일 선택이면 텍스트 Bold+브랜드 색)

---

# 07_Line

> Figma 카테고리 노드: `99:1134`
> 컨텐츠와 영역을 구분하기 위해 사용되는 **1px 이상의 라인**에 사용.

## Solid line

- **두께**: 1px
- **색 (Light)**: **#0F000000** (R0 G0 B0 A0.6 = alpha 약 6%) — 흰 배경 위 기본
- **색 (Dark)**: **#14000000** (alpha 약 8%) — 회색 배경(`background/secondary`) 위 사용
- **사용처**: 리스트 항목 사이 구분(`06_List` divider와 동일 값), 카드 내부 세로 구분 등

## Dotted line

- **두께**: 1px
- **패턴**: **Dash 2 : Gap 2** (점선 반복 단위)
- **색**: Solid line과 동일 (Light #0F000000 / Dark #14000000)
- **사용처**: `10_Info` 안내문구 상단(제목 없는 경우) 구분, Info-box 항목 그룹 간 구분

## Divider (BG + Line 겹침)

- **용도**: **한 화면 내에서 큰 영역 단위로 구분**이 필요한 경우 (예: "결제 정보" ↔ "혜택 정보" 큰 섹션 분리)
- **구조**: 컨텐츠의 명확한 구분을 위해 **배경 위에 선을 겹쳐** 사용
  - **BG**: `#0F000000` — 두꺼운 배경 밴드 (여백 8~12px 정도 세로)
  - **Line**: `#0F000000` — 그 안의 1px 선
- **주의**: 일반 아이템 divider는 solid line 1px만 사용 — Divider(BG+Line 겹침)는 화면 스크롤 시 심리적 단절이 필요할 때만

## 07_Line 안티패턴

- ❌ 리스트 divider에 dashed/dotted (반드시 solid)
- ❌ Divider(BG+Line 겹침) 대신 그림자·그라데이션 사용
- ❌ 라인 두께 2px 이상 (기본 1px, 예외 없이)

---

# 08_Indicator

> Figma 카테고리 노드: `30:420`
> 사용자가 선택할 수 없고 **정보 전달 기능만 가진** 시각 요소. (선택 가능한 것은 `03_Tab` 또는 `05_Control` 사용)

## Page dot (indicator / indicator-dot)

- **용도**: 스와이프 페이지·캐러셀의 현재 위치 표시
- **사이즈**: dot **4×4**, dot 사이 **gap 4**
- **State — 단일 (`Active` 강조형)**:
  - `Default(True)`: 회색 점 (`color/icon/quinary` #DDDDDD)
  - `Active(False)`: 브랜드 보라 점 (`color/background/button-brand` #805AE9)
- **Multi progress**: N개 점 나열 시 활성 위치만 브랜드 보라, 나머지 옅은 회색
- **표시 위치**: 캐러셀 하단 중앙 (관례)

## Navigator (좌/우 chevron 버튼)

- **용도**: 데이터 페이지 이동(월/주 단위 이동, YYYY.MM 등)
- **사이즈**: **48×48 정사각** 터치 유닛, 아이콘 24px + 상하좌우 12px padding
- **Variant — Type**:
  - `Selected(True)` — 검정 chevron (`color/icon/secondary` #333333) — **데이터 존재 시**
  - `Default(False)` — 옅은 회색 chevron — 방향 표시만
- **Variant — State**:
  - `Default(True)`: 활성
  - `Active(False)`: **데이터가 없는 경우 = 투명도 30% 적용** (호버 등이 아닌 "이동 불가" 상태 표시)
- **YYYY.MM 컨테이너**: 좌 chevron(48) + 중앙 텍스트 (Pretendard Bold, `heading` 계열 폰트) + 우 chevron(48)

## N/NN 카운트 배지

- **용도**: 캐러셀·갤러리에서 "1/6" 형식 현재/전체 표시
- **모양**: 회색 반투명 pill (`background/tertiary` 계열), 흰 텍스트 `body/3-Regular` 12px
- **위치**: 이미지 좌하단 (관례)

## 08_Indicator 안티패턴

- ❌ Page dot을 사용자 조작 가능한 요소로 사용 (탭 인터랙션 금지 — 표시 전용)
- ❌ Navigator 비활성 상태에 opacity 40% (반드시 30%)
- ❌ dot 크기 6px 이상으로 확대 (반드시 4×4)

---

# 09_Label

> Figma 카테고리 노드: `149:1240`
> 사용자가 선택할 수 없고 **정보 전달 기능만** 가진 pill 형 태그.

## Basic Label

- **사이즈·기하**:
  - **Fixed 24** (height)
  - **Corner radius = 50%** (완전 pill)
  - 좌우 padding **8px**
  - 문구 입력 영역 = 가변(화면이 늘어날 경우 늘어나는 영역)
  - Line 1dp(pt) (아웃라인 variant에서만)
- **Type — Fill (배경 채움)** 5색조:
  - `Brand` — 보라 채움 + 흰 텍스트
  - `Brand_Light` — 옅은 보라 채움 + 보라 텍스트
  - `Gray_Light` — 옅은 회색 채움 + 검정 텍스트
  - `Dark` — 진한 회색 채움 + 흰 텍스트
  - `White` — 흰 채움 + 검정 텍스트 (음영·그림자 없음)
- **Type — Line (아웃라인)** 5색조: 같은 5색 (Brand/Brand_Light/Gray_Light/Dark/White) — 흰 배경 + 해당 색 border 1dp + 해당 색 텍스트
- **텍스트**: `body/3-Bold` 12px 권장 (짧은 태그)

## Link Label

- **용도**: 아이콘 + 짧은 텍스트 조합 태그 (링크·첨부·상태 표기)
- **사이즈·기하**:
  - **Fixed 22** (height, Basic보다 낮음)
  - 좌측 아이콘 12px + gap **2px** + 텍스트 + 우측 padding 8px, 좌 padding 4px
  - Corner radius 50%
- **Type — Fill / Line 각 5색** (Basic Label과 동일 5색조)
- **주로 링크 아이콘 🔗** 등 액션 힌트 아이콘과 함께 사용

## label - State (⚠️ 향후 제거 예정)

- **Figma에 존재하나 신규 화면 사용 지양** (deprecated)
- 좌측 dot 아이콘 + 텍스트 pill (Fixed 24, dot 색으로 상태 표기)
- 6색 dot: red / purple / mint / blue / darkgray / orange
- **대체**: Basic Label의 `Fill` 5색으로 표현 (dot 대신 배경 색으로)

## 09_Label 안티패턴

- ❌ **Label을 클릭 가능한 요소로 사용** (반드시 정보 표시 전용 — 클릭이 필요하면 `02_Button § Small` 사용)
- ❌ Label에 그림자·gradient (플랫 스타일 유지)
- ❌ Label 안 텍스트 6자 이상 (짧은 태그 원칙)
- ❌ 신규 화면에 `label - State` (dot 형) 사용 (Basic Label Fill로 대체)

---

# 10_Info

> Figma 카테고리 노드: `190:1665`
> 2가지 유형: **Text info**(bullet 안내문구) / **Info-box**(박스형 항목-내용 나열)

## Text info

- **원칙**:
  - 안내 문구는 **최대 2Depth까지만** 사용
  - 여러 개 문단 사용 시, 문단 앞에 **Dot(•) / Aster(\*) 표기**하여 구분 (Dot/Aster를 제외한 도형 사용 지양)
  - **제목이 없는 안내문구의 상단에는 항상 Dotted line 사용**
  - 안내문구의 아이콘과 텍스트는 **마진 없이 적용**
- **1 Depth**: `•` (Dot) + Text = `body/2-Regular` 14px `color/font/primary` 검정
- **2 Depth**: `*` (Aster) + Text = `body/3-Regular` 12px `color/font/quaternary` #999999
- **사용 예시**:
  - **제목있는 안내문구**: 상단 `⓵ Info title` (Bold + 아이콘) + 아래 bullet 문단
  - **제목없는 안내문구**: 상단 Dotted line + bullet 문단만
  - 문단 조합: "1Depth 한 개 사용" / "1Depth 여러 개 사용" / "1Depth 여러 개와 2Depth 문단 사용" 3형

## Info-box (Item List / Box Case)

- **박스 여백 규칙**:
  - 박스형 컨텐츠는 **상/하/좌/우 각각 마진 24씩** 적용
  - **항목 간 구분** = 마진 **16**
  - **항목 그룹 간 구분** = Dotted line, 선을 기준으로 **상/하 마진 20**
- **Item List (항목명 ↔ 항목 내용)**:
  - 좌측 항목명: `body/2-Regular` 14px `color/font/tertiary` #666666, **Align: Right**
  - 좌↔우 gap **16**
  - 우측 항목 내용: `body/2-Regular` 14px 검정, **Align: Left**
  - 항목 내용 2줄 이상일 경우 좌측 항목명은 첫 줄 baseline 정렬
- **배경**: 회색 카드 `color/background/secondary` 또는 흰 배경(구분 필요 시 solid line 위/아래)

## 10_Info 안티패턴

- ❌ 안내문구 3 depth 이상 (반드시 2 depth까지)
- ❌ 문단 구분 도형에 ✓, →, ★ 등 사용 (반드시 • 또는 \*)
- ❌ 제목 없는 안내문구 상단 Dotted line 생략
- ❌ Info-box 안 마진 24 미준수

---

# 11_Tooltip

> Figma 카테고리 노드: `191:1851`
> **정보에 접근하기 용이하도록 터치 영역은 텍스트와 아이콘 포함한 전체 영역**
> 2가지 유형: **Popup Type**([?] 아이콘) / **Bubble Type**([!] 아이콘)

## Popup Type

- **트리거 아이콘**: **[ ? ]** (question mark) — `body/2-Regular` 옆에 붙어서 노출
- **용도**:
  - 안내 및 가이드 (사용자의 충분한 인지가 필요한 내용 노출)
  - 구체적인 내용 확인 및 사용자의 **행동을 유도하는 내용**
- **동작**: `?` 아이콘 탭 시 **다이얼로그 팝업**이 노출
- **팝업 스펙**:
  - 배경: **#000000 / 투명도 64% 적용** (dim overlay)
  - 팝업 카드: 흰 배경 + 상단 큰 corner radius (`konacard-ds-rule.md` § "팝업" 참조)
  - 상단 padding 32 / 제목(대기금 등) `body/1-Bold` / 제목-본문 gap 16
  - 본문 좌우 padding **20**, `body/2-Regular` 14px
  - 하단 padding 24 → 하단 고정 CTA(`button/fixed-bottom` Large Brand 채움)
  - CTA 하단 좌우 padding 20, 상하 padding 16

## Bubble Type

- **트리거 아이콘**: **[ ! ]** (exclamation) — `Infomation Text` 옆에 붙어서 노출
- **용도**:
  - 용어 정의 또는 단순 정보 확인
  - 해당 정보에 대한 내용 **바로 확인**하는 경우 (인라인)
- **동작**: `!` 아이콘 탭 시 인라인 bubble tooltip이 이웃 위치에 노출 (모달 아님)
- **Type variant**:
  - `Type - Line`: **흰 배경 + `color/border/default` #DDDDDD 1dp border + 검정 텍스트 `body/3-Regular`**
  - `Type - Brand`: **보라 채움(#805AE9) + 흰 텍스트 `body/3-Regular`**
- **박스 내부 padding**: 좌우 **16 / 상하 12** (내부 편안 여백)
- **삼각형 pointer**:
  - 하나의 이미지를 위/아래 상황에 맞춰 **회전(rotate) 사용** (별도 이미지 생성 X)
  - 4 위치 지원: top-left / top-right / bottom-left / bottom-right (기준 요소 위치 따라 자동 선택)
- **박스와 삼각형 관계** (제작 가이드):
  - 툴팁 상/하단 삼각형 이미지와 박스 영역: **상/하는 -1px 오버랩** (틈 없게), **좌/우는 상황에 따라 24dp(pt) 마진**
  - 박스 영역은 **상하좌우 16dp(pt) 마진** 확보

## 11_Tooltip 안티패턴

- ❌ **? / ! 아이콘 혼용** (반드시 용도별 구분 — 팝업은 ?, 인라인은 !)
- ❌ Bubble tooltip을 모달로 (반드시 인라인)
- ❌ Popup tooltip 배경 dim opacity를 64% 외 값으로
- ❌ 삼각형 pointer를 별도 이미지로 4개 관리 (반드시 1개 회전)
- ❌ 터치 영역을 아이콘만으로 한정 (반드시 텍스트 + 아이콘 통합)

---

# 12_Banner

> Figma 카테고리 노드: `253:1908`
> 카드 위·화면 안에 붙이는 강조 밴드. **Corner radius = 8px** 공통.

## Banner Color (6 파스텔)

- **6가지 옅은 파스텔 배경**: 옅은 회색 / 옅은 보라 / 옅은 하늘 / 옅은 민트 / 옅은 노랑 / 옅은 핑크
- **원칙**: 강조 강도는 옅은 톤으로 유지 — 배너가 CTA를 이기지 않도록 (`konacard-ds-rule.md` § "보라 한 색" 원칙)
- **색조 매핑** (관례):
  - 옅은 보라: 브랜드성 혜택 / 옅은 노랑: 안내·주의 / 옅은 민트: 성공·긍정 / 옅은 핑크: 프로모션·이벤트

## Benefit Banner

- **용도**: **1line으로 항목과 혜택을 노출**. 케이스에 따라 상세 혜택을 확인하는 페이지로 이동 가능.
- **레이아웃** (컴팩트, 약 40~48h):
  - 좌 padding **20** → 아이콘 24 → gap **16** → **Benefit Title** (`body/1-Bold` 15px) → Fill(가변) → 우측 값(nn 개·15,500원 등 `body/1-Bold` 브랜드 보라) → gap **8** → chevron `>` → 우 padding **20**
  - 세로 padding: 상하 각 **16** (총 높이 대략 icon 24 + 16+16 = 56 컴팩트)
- **아이콘**: 좌측 카테고리 아이콘 (선물 상자·카드 등 서비스별)
- **터치 영역**: 배너 전체 (진입 있을 시)

## Action Banner

- **용도**: 텍스트 2 depth 필요한 프로모션·CTA 유도 밴드
- **원칙**:
  - **1Depth 텍스트는 최대 1line** 으로 노출
  - **2Depth 설명 문구는 최대 2line까지** 노출
- **레이아웃**:
  - 좌 padding **20** → 아이콘 24 → gap **16** → 텍스트 영역
    - **1depth Title** `body/1-Bold` 15px (1 line)
    - gap 4 → **2depth Guide Text** `body/2-Regular` 14px `color/font/tertiary` 회색 (최대 2 line)
  - → Fill 가변 → 우측 chevron `>` (`color/icon/secondary`) → 우 padding **20**
  - **세로 padding**: 상하 각 **24** (총 높이 콘텐츠에 따라 가변)
- **터치 영역**: 배너 전체 (chevron 유무 무관)

## 12_Banner 안티패턴

- ❌ Banner에 진한 브랜드 보라 채움 (반드시 파스텔 6색 중 선택 — 강조는 chevron·값 텍스트만)
- ❌ Benefit Banner에 2 line 텍스트 (반드시 1 line — 필요 시 Action Banner 사용)
- ❌ Action Banner의 2depth 3 line 이상
- ❌ Corner radius 8 외의 값
- ❌ Banner 안에 CTA 버튼 배치 (진입 시 배너 전체 터치 사용)

---

# 00_Basic (디자인 업무용)

> Figma 카테고리 노드: `2408:6113`
> **디자인 업무용 placeholder** 컨텐츠. 실제 개발 구현 대상이 아닌 **모형(mockup)에서 OS/브라우저 요소를 자연스럽게 표시**하기 위한 컴포넌트 모음.
> 프로덕션 구현 시에는 각 OS·브라우저가 자동 렌더 (Figma 작업에서만 사용).

## 스페이싱(Spacing) 기본 단위 원칙

> **스페이싱의 기본 단위는 4와 8의 배수에 기반한 8가지로 규정하여 사용합니다.**
> 8의 배수는 가장 큰 기본 배수이며, 8이 포함하고 있는 **2와 4의 배수도 사용 가능**합니다.

- **표준 8가지 (권장)**: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40+` (프로젝트 실사용 스케일)
- **8dp 그리드 우선** — 특별한 이유가 없다면 8의 배수 (8·16·24·32) 우선
- **불가피한 경우 4dp** 도 사용 (12·20 등)
- **금지**: 소수점 스페이싱, 5·7·11 등 배수 아닌 값, 3dp 미만의 미세 조정
- **토큰 매핑**: 스페이싱 값은 `spacing-*` 토큰으로 관리 (`konacard-ds-foundation.md` § "spacing")
  - `spacing-3xsmall` 2 · `spacing-2xsmall` 4 · `spacing-xsmall` 8 · `spacing-small` 12 · `spacing-medium` 16 · `spacing-xlarge` 24 · `spacing-2xlarge` 32
  - `layout/margin` 20 (화면 좌우 padding 전용)

## Grid & 아이콘 제작 원칙

- **가급적 많은 해상도 대응**을 위해 새로운 사이즈 추가 시 **8dp 그리드**에 맞춰 제작 (불가피한 경우 4dp)
- 가급적 PX에 맞춰 작업하고 **소수점 사이즈 지양**
- Figma 컴포넌트는 **하나의 Component로 Variable 기능 사용하지 않고 각각의 Component**로 제작 (variant 안 남발 지양)
- **아이콘 제작 시 Auto layout 기능 사용하지 않고** 제작 (Grid가 있는 경우, 최대한 grid에 맞춰 작업)

---

## OS/status-bar

- **Figma 노드 (샘플 인스턴스)**: `2408:6119`~`2408:6122`
- **용도**: 화면 상단 OS 정보 영역의 시각 placeholder — **실 프로덕션에서는 OS가 자동 렌더**
- **4 variant**:

| Variant | 크기 | 특징 | 사용 상황 |
|---|---|---|---|
| AOS status bar | 360×24 | 좌 시간(10:00) / 우 signal·WiFi·battery | Android 목업 상단 |
| iOS status bar (표준) | 375×20 | 좌 시간(4:20) / 우 신호·WiFi·battery | iOS notch 없는 목업 |
| iOS status bar (notch/DI) | 375×48 | notch 또는 Dynamic Island 포함 | iPhone X 이후 목업 |
| Chrome URL bar | 360×56 | home 아이콘 + `example.com` + tab 카운트 + menu(⋮) | 웹뷰·인앱 브라우저 목업 |

- **사용 원칙**: 목업 상단에 **하나만** 배치. Konacard 앱 자체 헤더(`01_Actionbar`)는 status bar 아래에 위치.

## OS/keyboard

- **Figma 노드 (샘플 인스턴스)**: `2408:6379` (AOS), `2408:6606` (iOS)
- **용도**: 인풋 필드 활성 상태 목업에서 **키보드 노출 상황을 시각화**
- **2 variant**:

| Variant | 크기 | 특징 |
|---|---|---|
| AOS keyboard | 360×244 | 어두운 회색 배경 + 각 키 진회색 사각형 + 흰 텍스트 + 우하단 파란 체크 (enter) |
| iOS keyboard | 375×244 | 밝은 회색 배경 + 흰색 각 키 + 검정 텍스트 + 우하단 파란 체크 |

- **레이아웃 규칙**:
  - 인풋 필드 활성화 시 화면 하단에서 244px 만큼 침범 — 하단 CTA(`button/fixed-bottom`)는 키보드 위로 밀어 올림 (구현측 관례)
  - 목업에서는 키보드 활성 상태와 비활성 상태 2 화면을 각각 제시하면 개발 커뮤니케이션에 유리

## 00_Basic 안티패턴

- ❌ **status bar / keyboard를 실제 프로덕션 구현물처럼 코드로 구현** — 반드시 OS 자동 렌더 사용
- ❌ 목업에 status bar를 여러 개 겹쳐 배치
- ❌ 스페이싱을 8·4 배수 외 값으로 정의 (특히 5·7·11 등 홀수)
- ❌ 아이콘에 Auto layout 강제 적용 (grid 파괴 위험)
- ❌ 소수점 사이즈(예: 47.5) 사용

---

## 12개 대분류 요약

| # | 카테고리 | 대표 컴포넌트 |
|---|---|---|
| 00 | Basic | OS/status-bar, keyboard, spacing 원칙 |
| 01 | Actionbar | header (Main·Sub AOS/iOS·Scroll Title), headline, button |
| 02 | Button | primary, secondary, tetiary, text, icon, fixed-bottom, select |
| 03 | Tab | Main (Basic·Multi), Sub (pill) |
| 04 | Forms | input, search, select, email, card-number, button + Form UI |
| 05 | Control | swtich, checkbox, radio + agree/setting/radio-text |
| 06 | List | list (4형), expand, card-select, bottomsheet |
| 07 | Line | Solid, Dotted, Divider |
| 08 | Indicator | Page dot, Navigator, N/NN badge |
| 09 | Label | Basic (Fill·Line 5색), Link, label-State(deprecated) |
| 10 | Info | Text info (bullet 2depth), Info-box |
| 11 | Tooltip | Popup(?), Bubble(!, Line/Brand) |
| 12 | Banner | Benefit(1line), Action(1+2depth), 6 파스텔 |

**다음 단계 후보**:
- `konacard-ds-rule.md` 상 각 화면 성격별 규칙과 컴포넌트 매핑 상세 연결 (§ "화면 성격 분류")
- Figma에 신규 화면 추가 시 이 문서에 규칙 축적 (`CLAUDE.md` § "파일 수정 원칙" 참조)
