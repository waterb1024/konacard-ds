---
version: "1.0"
name: KONACARD Design Components
description: >
  KONACARD 디자인 시스템 컴포넌트 문서 — 컴포넌트를 언제 · 어떻게 쓰는지와 하지 말 것.
  이름 · 키 · variant · 크기 같은 값의 기준은 components.catalog.json (Figma -AX- 에서 추출).
---

# KONACARD Design Components

> - **값(이름 · 키 · variant · 크기)** → `components.catalog.json` 이 기준 (Figma `${FIGMA_DS_FILE_KEY}` 에서 추출). 이 문서와 다르면 카탈로그 · Figma 우선
> - **이 문서** → 컴포넌트별 용도 · 사용 규칙 · 안티패턴
> - 토큰 값 → `konacard-ds-foundation.md`, 화면 조립 규칙 → `konacard-ds-rule.md`, Figma 제작 코드 → `rules/figma-guide.md`

## 컴포넌트 개요 (14 대분류)

✅ = Figma 정리 완료 · 카탈로그 있음 / ⏳ = Figma 정리 전 (장 머리에 표시, 옛 기준일 수 있음)

| 대분류 | Figma 정리 | 포함 컴포넌트 |
|---|---|---|
| **00_Basic** | ✅ | OS/status-bar (Color × AOS·iOS·iOS_notch·Address-Bar), OS/keyboard (OS × Keypad·Number), spacing 8-based 원칙 |
| **01_Actionbar** | ⏳ (Header 정리안 v2 검토 중) | action-bar/header, action-bar/button (헤드라인은 14_Heading 으로 옮김) |
| **02_Button** | ✅ | button/button (style=primary·secondary), button/text button, button/icon button, button/fixed-bottom |
| **03_Tab** | ⏳ (Tabs 정리안 v2 검토 중) | tab/main-full · tab/main, tab/sub-ui · tab/Sub, tab/sub2-ui |
| **04_Forms** | ✅ | input (style/case 6종), input/label, select/select box, select/select button · group, Form UI(Title · Guide Text) |
| **05_Control** | ✅ | controls/swtich · check box · radio button + 각 label 조합 |
| **06_List** | ✅ list/list · accordion / ⏳ card-select · bottomsheet | list/list, accordion(header + body), list/card-select, list/bottomsheet |
| **07_Line** | ✅ | divider (solid · dotted · section · vertical) |
| **08_Indicator** | ⏳ | indicator, badges/badge |
| **09_Label** | ✅ | label (type color · line) |
| **10_Info** | ✅ info / ⏳ Text info · Info-box | info, info/text-info 외 |
| **11_Tooltip** | ✅ | tooltip/tooltip |
| **12_Banner** | ⏳ | banner/banner |
| **13_Toast** | ✅ | toast |
| **14_Heading** | ✅ | heading/headline, heading/section |

---

# 02_Button

> 버튼 4종 — 채움·테두리 버튼 `button/button`, 글자 링크 `button/text button`, 글자 + 화살표 `button/icon button`, 하단 고정 CTA 묶음 `button/fixed-bottom`.
> 값 전체는 `components.catalog.json`. 여기는 고르는 기준과 규칙만.

**공통 원칙**
- **비활성 = 같은 모양 + opacity 40%** (Figma `state=false`, 2026-11-09 확인). **예외 하나** — `style=primary, type=brand` 만 바탕이 #DDD(`button/tertiary`) + 흰 글자로 바뀜: `large` 는 흐리지 않고(op 1), `medium` · `small` 은 그 위에 40%. `secondary` 의 `brand` 는 다른 type 처럼 보라 그대로 40%
- `button/text button` · `button/icon button` 에는 비활성 variant 가 없음 — 필요하면 버튼 전체에 opacity 40%
- **Corner radius**: `radius/button/*` 토큰 사용 (`konacard-ds-foundation.md`)
- **터치 영역**: 최소 32px 세로 확보 (Text·Icon 버튼도 동일)

## button/button (`10973:356`)

- **용도**: 화면 CTA · 본문 액션 · 정보 행 오른쪽 액션 등 바탕이나 테두리가 있는 버튼
- **속성**: `style` (`primary` / `secondary`) × `size` × `type` × `state` (`true` 활성 / `false` 비활성)
- **size** — style 마다 다름. `primary` 에는 `tiny` 없음

| style | size | 높이 | 부르는 이름 · 쓰는 곳 |
|---|---|---|---|
| `primary` | `large` | 56 | **Large 버튼** — 하단 고정 CTA · 화면 주 CTA. radius 8, `button/large-bold` 15/24 |
| `primary` | `medium` | 48 | **Medium 버튼** — 본문 안 중요한 액션. radius 6, `button/medium-bold` 14/22 |
| `primary` | `small` | 40 | 용도 미정의 |
| `secondary` | `large` | 40 | 용도 미정의 |
| `secondary` | `medium` | 32 | **Small 버튼** — 정보 행 오른쪽 "변경" · "연결", 카드 안 액션, 설명에 붙는 액션 (입력칸 옆에는 쓰지 않음). radius 4, `button/small-regular` 12/18 |
| `secondary` | `small` | 24 | 용도 미정의 |
| `secondary` | `tiny` | 24 | 용도 미정의 (글자 11/16) |

- **type** (7종, 두 style 공통)

| type | 모양 | 코드 `color` |
|---|---|---|
| `brand` | 보라 채움 #805AE9 + 흰 글자 — **기본 Primary CTA** | `Brand` |
| `brand-light` | 연보라 채움 #F4F0FD + 보라 글자 | `Brand_Light` |
| `brand-line` | 흰 바탕 + 보라 테두리 + 보라 글자 — Secondary | `Brand_Line` |
| `gray` | 회색 채움 #999 + 흰 글자 | `Gray` |
| `gray-light` | 연회색 채움 + 검정 글자 (secondary 는 #333) — 병렬 CTA 좌측 보조 | `Gray_Light` |
| `gray-line` | 흰 바탕 + 진한 회색 테두리 1px (`button/quaternary` #999) — 반복 편집 진입점 | `Gray_Line` |
| `gray-line-light` | 흰 바탕 + 연한 회색 테두리 1px (`button/tertiary` #DDD), 글자 #333 (secondary 는 #666) — `gray-line` 과 테두리 진하기만 다름 (Figma 확인 2026-11-09). 용도 미정의 | `Gray_Line_Light` |

- Figma 작업은 `type` 값(소문자·하이픈), PascalCase 는 코드 `color` prop 값
- 관련 rule.md: § "버튼", § "5) 말투 / CTA 라벨", § "5) 말투 / CTA 개수 규칙"

## button/text button (`10973:796`)

- **용도**: 바탕 없는 글자 링크 버튼 — 하단 유틸리티 링크, CTA 위 반대 액션, 필드·카드 우측 "복사" 같은 가벼운 어드먼트
- **속성**: `size` × `color`. 글자 아래 **밑줄 내장**. 폭은 글자에 맞춤

| size | 높이 | 글자 |
|---|---|---|
| `large` | 36 | `button/medium-regular` 14/22 |
| `medium` | 32 | `button/small-regular` 12/18 |
| `small` | 24 | `button/tiny-regular` 11/16 |

- **color**: `gray` (기본 유틸리티 링크) / `gray-light` (부가 정보) / `black` / `brand` (강조 링크)

## button/icon button (`10973:651`)

- **용도**: 글자 + 오른쪽 화살표(`ic_arrow_right`, gap 4) — 진입형 리스트 아이템 우측, 설정 값 표시 + 진입
- **속성**: `size` × `weight` (`regular` / `bold`) × `type` (`gray` / `black` / `brand` = 글자 색)

| size | 높이 | 글자 |
|---|---|---|
| `large` | 40 | `body/1` 15/24 |
| `medium` | 32 | `body/2` 14/22 |
| `small` | 24 | `body/3` 12/18 |

- 가장 많이 쓰는 조합: `medium` · `regular` · `gray`
- 화살표 색은 Figma variant 그대로 (gray #666 · black #333 · brand, `small`·`gray` 만 #333 투명도 60%) — 따로 칠하지 않음

## button/fixed-bottom (`17:1049`)

- **용도**: 화면 하단에 고정되는 CTA 묶음 (Large 버튼을 감싸는 틀)
- **속성**: `Device` = `AOS` (360×72) / `iOS` (375×72) — 폭만 다름
- **구성**: padding 상 0 · 좌우 20 · 하 16, 버튼 사이 gap 8, 흰 바탕
  - 좌: `style=primary, size=large, type=gray-light` **폭 115 고정** (보조)
  - 우: `style=primary, size=large, type=brand` **남은 폭 채움** (주)
- **파괴적 액션·미루기 = 좌측** (rule.md § "CTA 병렬 위계")
- 성격이 다른 버튼을 나란히 둘 때는 가로·세로 모두 **8px** 간격

## Button 사용 매핑

| 위치 | 컴포넌트 · 사이즈 | type / color |
|---|---|---|
| 하단 고정 CTA (주) | `button/button` Large | `brand` |
| 하단 고정 CTA (병렬 보조) | `button/button` Large | `gray-light` |
| 하단 고정 CTA (병렬 반대 액션·아웃라인) | `button/button` Large | `brand-line` or `gray-line` |
| 본문 안 강조 액션 | `button/button` Medium | `brand` or `brand-line` |
| 입력칸 오른쪽 — 입력 돕기 (주소입력 · 은행선택) | `input` style/case=button 내장 | — |
| 입력칸 오른쪽 — 인증번호 재요청 | `button/button` Medium (입력칸 밖) | `brand-line` |
| 정보 행 오른쪽 — 값 변경 진입 ("변경") | `button/button` Small | `gray-light` |
| 정보 행 오른쪽 — 연결 · 등록 강조 | `button/button` Small | `brand-line` |
| 하단 유틸리티 링크 | `button/text button` | `gray` |
| CTA 위 반대 액션 링크 | `button/text button` | `gray` |
| 진입형 리스트 아이템 우측 액션 | `button/icon button` medium | `gray` (설정값이면 `brand`) |

## Button 안티패턴

- ❌ 하단 고정 CTA 2개를 **같은 무게**로 (반드시 좌 115 고정 + 우 채움)
- ❌ **파괴 확정 액션을 우측 주 위치에** (반드시 좌측 회색 보조 위치)
- ❌ 버튼에 로딩 스피너 (비활성 variant 만으로 처리)
- ❌ `button/text button` 에 바탕색 채우기 (그럴 거면 `button/button` Small `brand`)
- ❌ Small 버튼에 Large 의 padding·radius 적용
- ❌ `style=primary` 에 `size=tiny` (없는 조합)

---

# 04_Forms

> Figma 카테고리 노드: `36:409` (04_Forms)
> 2개 대분류(Input / Select — 필드형 select box · 버튼형 select button) + Form UI 조합 규칙(Title / Guide Text). Input 은 2026-10-15 text field · search bar · text area · button · card-number · 주민등록번호를 하나의 세트 `input` 으로 합침

**공통 토큰** (모든 Form 컴포넌트 공유)

- **Corner radius**: `radius/components/form` = **6px**
- **Height**: **48px** (fixed) — `input` 전 style/case AX 실측 확인 (2026-10-15, `41:505`, text area 만 124) · `select/select box` 도 48 (2026-10-15, `41:550`)
- **내부 좌우 padding**: `spacing-medium` = **16px**
- **아이콘·요소 간 gap**: `spacing-small` = **12px** (내부), `spacing-xsmall` = **8px** (필드끼리)
- **배경**: `color/background/primary` = #FFFFFF
- **테두리 두께**: 1px
- **폰트**: Pretendard, `body/1-regular` (15px / lineHeight 24 / letterSpacing -0.3) 기본, Active·Error·Complete 상태는 `body/1-Bold`
- **Width**: Flexible (부모 컨테이너 가변 — "화면이 늘어날 경우 늘어나는 영역")

**상태(State) 스펙 — 공통** (`input` 6개, Select 필드형은 별도 5개 — § Select — 필드형 참조)

| State | 테두리 | 텍스트/아이콘 | 굵기 | 배경 | 사용 시점 |
|---|---|---|---|---|---|
| **Default** | `color/border/default` #DDDDDD | Placeholder `color/font/placeholder` #999999 | Regular | White | 초기(입력 전) |
| **Focus** | `color/border/focus` #805AE9 (보라) | Placeholder 유지 | Regular | White | 필드 탭 후 아직 값 없음 |
| **Active** | `color/border/focus` #805AE9 | 입력값 `color/font/brand` #805AE9 | **Bold** | White | 값 입력 완료·유효 (편집 중) |
| **Complete** | `color/border/default` #DDDDDD | 입력값 `color/font/primary` #000000 | **Bold** | White | 값 확정(편집 종료·읽기 전용에 준함) |
| **Disabled** | `color/border/default` #DDDDDD | `color/font/placeholder` #999999 | Regular | **#F8F9FB** `color/background/disabled` | 비활성/입력 불가 |
| **Error** | `color/border/error` #FF364B (레드) | 입력값 `color/font/error` #FF364B | **Bold** | White | 검증 실패 |

> `input` style/case=text area 만 Complete · Error 글자가 **Regular** (의도, 사용자 확인 2026-10-15).
>
> Select 필드형은 `focus`·`complete` 대신 `active`(펼침)·`select`(선택 완료)를 사용 — `default` → `active` → `select` / `disabled` / `error` 5단계.

---

## Input (`input`)

- **Figma 컴포넌트 세트**: `41:505` — AX 이름 **`input`** (2026-10-15 사용자 정리. 옛 `input/text field` 세트에 search bar · text area · button · card-number · id 를 합침, 키 유지)
- **속성**: `style/case` 6 × `state` 6 = 36 variant + boolean `title` · `info` · `timer`
  - `state`: `default` / `focus` / `active` / `complete` / `disabled` / `error` — 위 공통 표
  - `title` (기본 켜짐): 위에 `input/label` (`body/3-Bold` 12/18 #333, 구 `title/title` Type=Input)
  - `info` (기본 켜짐): 아래에 `info` 컴포넌트. Error state 면 `type=icon-error`, 나머지는 `type=info`
  - `timer` (기본 꺼짐, **text field 전용**): 인증 남은 시간 `3:00` (`body/2-Regular` 14/22 `color/font/error`) + 12 + `input/icon` `type=icon_refresh`
- **틀**: title → 입력칸 → info, 세로 gap **8px** (`spacing-xsmall`). 전체 높이 100 (text area 176). 폭은 부모에 맞춰 늘어남
- **입력칸 공통**: 높이 **48** / radius **6** (`radius/components/form`) / padding 상하 12 · 좌우 16 / 내부 gap 16 / 안쪽 1px 테두리 / 글자 `body/1` 15/24 왼쪽 정렬
- **터치 영역** = 필드 전체 (48px 세로 유지, `konacard-ds-rule.md` § "터치 영역 32px 최소" 규칙 충족)

| style/case | 구성 | 오른쪽 슬롯 |
|---|---|---|
| `text field` | 입력칸 하나. 이름·전화·주소 등 문자 입력 전반 | Active·Complete·Error 에 지우기(×) `input/icon` `type=icon_delete` 24 · `timer` 켜면 그 오른쪽에 타이머 |
| `search bar` | 목록·데이터를 키워드로 거르는 입력칸 | **검색 아이콘** `ic_24/ic_search_24` 항상 · Active·Complete·Error 에 지우기(×) 를 검색 아이콘 왼쪽에(왼쪽 padding 12) |
| `text area` | 여러 줄 입력. 입력칸 padding 16 · 세로 gap 12 · 글자 영역 64 → 입력칸 124 | 오른쪽 아래 글자 수 `0/500` (`body/4-Regular` 11/16 #999) |
| `button` | 입력칸 FILL + 8 + `button/button` primary · medium · brand (48h). 예: 인증번호 요청, 중복확인 | 입력칸에 지우기(×) (Active·Complete·Error) |
| `card-number` | 카드번호 4×4. `0000` 4칸 **Fill (1/N)** + 사이 `ic_24/ic_input_dash` 24 · **가운데 정렬** | 없음 |
| `registration number` | 주민등록번호. 앞 6자리 입력칸 FILL – 대시 24 – 뒤 첫자리 40×48 칸 + 점 6개(8×8, 검정 10%, 사이 8) | 없음 (뒷자리 칸은 state 와 상관없이 #DDD 테두리) |

- **카드번호 입력 UX**: 화면은 4칸이지만 한 칸처럼 동작 — 4자리가 차면 다음 칸으로, 빈 칸에서 백스페이스면 이전 칸으로 (Storybook 구현). 숫자 전용 키패드
- **검색 아이콘**은 항상 오른쪽 고정, 눌러도 별도 액션 없음(엔터·자동검색). 왼쪽에 아이콘 두지 말 것
- **button 의 버튼**: 액션 트리거(인증번호 요청·검색) = Brand. 버튼 여러 개면 사이도 8px
- 정리 이력: `input/basic` · `input/email` (@ 분할 이메일 입력)은 KeyScreen 0곳이라 2026-10-07 삭제. 이메일은 `text field` 하나로 받음

## Input 관련 안티패턴

- ❌ **Placeholder를 Label 대신 사용** — 기본은 `title` 켜서 필드 상단 라벨. 생략은 rule.md § 필드 라벨 두 스타일의 세 경우만 (묶음 아래 칸 · 헤드라인이 대신 말할 때 · 가로 묶음 오른쪽 칸)
- ❌ **Complete와 Active 색상 혼동** — Active(보라)는 편집 중, Complete(검정)는 확정. 화면 목적에 따라 구분
- ❌ Error 상태에서 clear(×) 버튼 생략 (text field · search bar · button — 잘못된 값을 지우고 재입력할 수 있어야 함)
- ❌ 세로 높이를 48px보다 낮게 축소 (터치 영역 확보 실패)
- ❌ text field 가 아닌 style/case 에 인증 타이머 붙이기 (`timer` 는 text field 전용)

---

## Select — 필드형 (`select/select box`)

- **Figma 노드**: 컴포넌트 세트 `41:550` — AX 이름 **`select/select box`** (❖ Select 페이지. NEW 파일 이름 `input/select`, 카탈로그 페이지 인스턴스 이름 `Input/Select`)
- **속성** (2026-10-15 사용자 정리 — 값 1개뿐인 `style/case` 삭제, `State` → `state`, 원본을 고쳐 키 유지)
  - `state` = `default` / `active` / `select` / `disabled` / `error`
  - `title` · `info` (boolean, 기본 켜짐) — `input` 과 같은 틀: 위에 `input/label`, 아래에 `info` (Error 면 `type=icon-error`)
- **용도**: 정해진 옵션 목록을 **열어서** 하나 고르는 필드 (드롭다운 트리거). 옵션이 많거나(5개 이상) 길 때
- **사이즈·기하**: `input` 과 동일 (전체 100 · 칸 48h / R6 `radius/components/form` / padding 좌우 16·상하 12 / left 정렬) — AX 실측
- **하위 슬롯**:
  - Left: 텍스트(플레이스홀더 "선택" 또는 선택값)
  - Right: **chevron** 12×8 — `active` 만 위방향 `ic_arrow/ic_arrow_up_12`, 나머지는 아래방향 `ic_arrow/ic_arrow_down_12` (AX 실측)
    - 아이콘 색은 전 state #333333. `disabled` 만 아이콘 투명도 24% (`opacity/disable/icon`) 로 흐리게 처리
- **State 변형** (5단계, AX 실측):
  - `default` — 옵션 미선택 (#DDD 테두리 + #999 Regular 플레이스홀더)
  - `active` — **드롭다운 펼침 중** (보라 테두리 + 보라 Bold 텍스트 + chevron ↑)
  - `select` — **선택 완료·닫힘** (#DDD 테두리 + 검정 Bold 선택값) — `input` `complete` 대응
  - `disabled` — 비활성 (배경 `color/background/disabled` #F8F9FB + #999 Regular)
  - `error` — 검증 실패 (빨간 테두리 + 빨간 Bold 텍스트)
  - **Focus 상태 없음**
- **터치 영역**: 필드 전체 48px 유지
- KeyScreen 실사용: `input/select` 97곳 (전부 large, 폭 320 또는 148). `input/select-round` 13곳은 해외송금(TBD)만

## Select 필드형 관련 안티패턴

- ❌ **Focus 상태 추가로 그리기** — 펼침은 `active`, 선택 완료는 `select` 로 표현 (`input` 과 다름)
- ❌ chevron 방향을 항상 아래로 고정 (열림 상태 시각 피드백 상실)
- ❌ 옵션이 2~4개뿐인데 드롭다운 사용 — 한눈에 보이게 **select button** 사용

---

## Select button — 버튼형 선택지 (`select/select button`, `select/select button group`)

- **Figma 노드**: `select/select button` `11061:3729` · `select/select button group` `11061:3760` (❖ Select 페이지, 2026-10-15 확정)
- **용도**: 보이는 선택지 2~4개 중 **바로 눌러 하나 고르기** (라디오 역할). 예: 자동충전 기준 금액·기준 일자, 충전 +금액, AML "네 / 아니요", 캐시 전환 금액, 거래내역 기간
  - KeyScreen 에서 `button/primary` medium 을 나란히 놓아 쓰던 패턴(70곳 남짓)을 컴포넌트로 만든 것
  - 옛 `button/select`(80×80 보라 채움형) · `button/select-2line` 은 KeyScreen 0곳이라 삭제
- **속성**:
  - `state` = `default` / `selected`
  - `status` = `true` / `false` — false 면 비활성(투명도 40%). 체크박스·라디오·스위치·탭과 같은 규칙 (true = 활성)
  - group: `columns` = `2` / `3` / `4`
- **사이즈·기하** (AX 실측): 높이 **48** · padding 12 16 · radius **6** · 안쪽 1px 테두리 · 글자 14/22 Bold (`button/medium-bold`)
  - `default` — #DDD 테두리 + #333 글자 (= button `gray-line-light`)
  - `selected` — #805AE9 테두리 + #805AE9 글자 (= button `brand-line`)
- **묶음(group)**: 폭(기본 320)을 선택지 수로 **같은 크기로 나누고 사이 8** — 2열 156 · 3열 101 · 4열 74. 선택 위치는 안의 인스턴스 `state` 로 바꿈

## Select button 관련 안티패턴

- ❌ 선택지를 `button/button` 으로 직접 나란히 놓기 — `select/select button` 사용 (선택 상태·비활성이 일관되게)
- ❌ 선택지 폭을 글자 길이마다 다르게 — 묶음 안에서는 같은 폭
- ❌ 선택지 5개 이상을 한 줄에 — 4개까지. 그 이상은 `select/select box`(드롭다운) 사용
- ❌ "발급 취소 / 주소 변경"처럼 **서로 다른 동작**을 하는 버튼 줄에 사용 — 그건 액션 버튼(`button/button`)

---

## Form UI 조합 규칙 (Title / Guide Text)

Input·Select(필드형) 위·아래에 붙는 라벨/안내 텍스트의 공통 규칙. `input` · `select/select box` 모두 `title` · `info` boolean 으로 내장.

- **요소 간 상·하 gap**: `spacing-xsmall` = **8px** (Title↔Field↔Guide Text 모두)
- **Title** (필드 상단 라벨) = **`input/label` 컴포넌트** (`41:1176`, ❖ Input 페이지 — 2026-11-06 `title/title` Type=Input · Medium · Black 을 세트 밖으로 빼서 옮김, 키 유지)
  - 사용 시점: "Input/Select 상단에 제목이 있는 경우"
  - **어디에 붙이나** — 아래 요소가 무엇이냐로 정함:

    | 라벨 아래 요소 | 라벨 붙이는 법 | 예 |
    |---|---|---|
    | 입력칸 · select 하나 (`input` 모든 style/case · `select/select box`) | 그 컴포넌트의 **`title` 켜기** — 라벨을 따로 놓지 않음 | 영문 이름, 국적, 주민등록번호, 자택 주소, 내용 |
    | 여러 칸 묶음 (select + input 등) | **`input/label` 단독** 1개를 묶음 위에, 안쪽 칸들은 `title` 끔 | 휴대폰 번호(통신사 + 번호) |
    | `title` 칸이 없는 선택 요소 (`select/select button group` · radio 선택지 · `controls/checkbox label`(약관) · 버튼 하나) | **`input/label` 단독** | 거래 내역 기간, 신청하는 거래내역, 약관동의, 신분증 인증 |

    - `input/label` 단독 = 글자 속성 `label`, 폭 FILL(360 화면에서 320), 아래 요소와 gap 8
    - 근거 (KeyScreen AOS, 2026-11-09): 따로 놓인 라벨 307곳 중 277곳(90%)이 입력칸 · select 하나 위 — AX `input` 에 `title` 이 생기기 전에 그린 화면이라 화면을 AX 로 옮길 때 `title` 켜기로 바꿈. 나머지 30곳(여러 칸 묶음 14 · select button 4 · radio 4 · 버튼 하나 4 · 약관 2 · 아이콘 + 상태 글자 2)만 단독 라벨이 필요
  - 타이포: `body/3-Bold` = Pretendard Bold **12px** / lineHeight 18 / letterSpacing -0.24
  - 색: `color/font/secondary` #333333
- **Guide Text** (필드 하단 안내/에러 문구) = **`info` 컴포넌트** (`Info / Info text`)
  - 타이포: `body/3-Regular` = Pretendard Regular **12px** / lineHeight 18
  - `type` 5종:

  | type | 글자 색 | 아이콘 | 사용 시점 |
  |---|---|---|---|
  | `info` | #666 | 없음 | 부가 힌트 (예: "숫자만 입력 가능") — `input` 기본 |
  | `error` | #FF364B | 없음 | 아이콘 없는 오류 문구 |
  | **`icon-error`** | #FF364B | ! 빨강 `icon_danger` | 검증 실패 메시지 — `input` Error state 기본 |
  | `icon-info` | #000 | ! 검정 `icon_alert_black` | 강조 안내 |
  | `icon-guide` | #666 | ! 회색 `icon_alert_gray` | 가이드성 안내 |

## Form UI 안티패턴

- ❌ Title을 필드 안 Placeholder로 대체 (접근성·재입력 편의 하락) — 예외 세 경우는 rule.md § 필드 라벨 두 스타일
- ❌ 검증 결과·필수값을 회색 `info` 로 안내 — 반드시 `icon-error`(#FF364B) 사용
- ❌ Title/Guide Text 간격을 8px 외의 값으로 변경 (`spacing-xsmall` 고정)
- ❌ 입력칸 · select **하나** 위에 `input/label` 을 따로 놓기 — 그 컴포넌트의 `title` 을 켬
- ❌ 여러 칸 묶음에서 칸마다 `title` 을 켜 라벨 반복 — 묶음 위 `input/label` 1개
- ❌ 입력칸 라벨로 `heading/section` 사용 (섹션 제목은 회색 · 위아래 padding 8 이 붙어 모양이 다름)

---

## 04_Forms 카테고리 종합 안티패턴

- ❌ **필드 높이를 32/40/56 등 다양하게 섞기** — 반드시 48px 고정
- ❌ **Corner radius를 4/8/16 등 임의로 변경** — 6px 고정 (`radius/components/form`)
- ❌ 필드 위 Title 라벨 없이 Placeholder만으로 라벨링 (접근성 저하) — 예외: 묶음 아래 칸 · 헤드라인이 대신 말할 때 · 가로 묶음 오른쪽 칸
- ❌ 에러 메시지를 툴팁·모달로 띄우기 (반드시 `info` 슬롯 `icon-error` 로 인라인)
- ❌ 같은 질문을 화면마다 드롭다운(`select box`)과 버튼형(`select button`)으로 다르게 받기 — 선택지 2~4개는 select button, 5개 이상·긴 목록은 select box

---

# 05_Control

> ❖ Controls 페이지 (2026-10-07 정리 완료). 기본 컨트롤 3종 `controls/swtich` · `controls/check box` · `controls/radio button` + 글자를 붙인 조합 3종 `controls/swtich label` · `controls/checkbox label` · `controls/radio label`.
> 이름의 `swtich` 오타와 `check box` 띄어쓰기는 Figma 이름 그대로.

**공통 속성**
- `state` = 켜짐·체크·선택 여부 (`true` = 보라 #805AE9)
- `status` = 활성 여부 (`false` = 비활성). 스위치·체크박스는 전체 opacity 40%, 라디오는 아래 § controls/radio button 참고
- 조합 컴포넌트는 안에 든 기본 컨트롤 인스턴스의 `state` 를 바꿔서 켜고 끔

---

## controls/swtich (`28:409`)

- **용도**: 바로 반영되는 On/Off 토글 — 설정 항목, 알림 On/Off, 필터 켜고 끄기
- **size**: `large` 50×28 / `medium` 42×24
- **모양**: 얇은 트랙 + 전체 높이 원형 썸. 꺼짐 = 회색 #999 트랙, 썸 왼쪽 / 켜짐 = 보라 #805AE9 트랙, 썸 오른쪽
- `list/list` `type=control` 안에는 `medium` 이 들어 있음

## controls/swtich label (`2143:5491`)

- **용도**: 설정 화면 리스트 항목 — 제목 + 안내 문구 + 오른쪽 스위치
- **속성**: `size` (`large` / `small`) · `guide` (boolean, 기본 켜짐 = 아래 회색 안내 문구) · `type` (`1depth` 하나뿐)

| size | 높이 (guide 끔) | 안의 스위치 | 제목 / 안내 |
|---|---|---|---|
| `large` | 95 (57) | `large` 50×28 | `body/1-regular` #000 / `body/2-Regular` #999 |
| `small` | 75 (45) | `medium` 42×24 | `body/3-Regular` / `body/3-Regular` |

- 폭 360, 좌우 padding 20, 아래 구분선(`divider` solid light) 포함

---

## controls/check box (`28:431`)

- **용도**: 여러 개를 고를 수 있는 옵션, 약관 개별 동의
- **style** — style 마다 크기 고정 (size 속성 없음)

| style | 크기 | 모양 (체크 / 미체크) | 쓰는 곳 |
|---|---|---|---|
| `circle` | 28 | 보라 원 + 흰 체크 / #DDD 원 + 흰 체크 | 약관 전체동의 · 그룹 헤더 · 소수(1~3개) 강조 항목, `list/card-select` 선택 표시 |
| `line` | 24 | 보라 체크 / #999 체크 (바탕·테두리 없음) | 반복되는 약관 하위 항목 (4개 이상) |
| `square-line` | 24 | 흰 바탕 + 보라 테두리·체크 | 폼 안 다중 선택 |
| `square-fill` | 20 | 보라 채움 + 흰 체크 / 흰 바탕 + #DDD 테두리·체크 | 용도 미정의 |

- 원형·라인 선택 기준은 rule.md § "약관 동의 체크박스"

## controls/checkbox label (`2004:5148`)

- **용도**: 약관 동의 리스트 한 줄 — 체크박스 + 글자 (+ 오른쪽 `>` 상세 보기)
- **속성**: `type` × `state` (체크 여부)

| type | 높이 | 체크박스 | 글자 | 오른쪽 `>` |
|---|---|---|---|---|
| `title` | 44 | `circle` 28 | `body/1-Bold` | 없음 |
| `1depth` | 44 | `circle` 28 | `body/2-Regular` | 있음 |
| `2depth` | 40 | `line` 24 | `body/2-Regular` | 있음 |

- `title` = "모두 동의합니다" 같은 전체동의 행. 세부 항목 위에 항상 별도 행으로 두고, 전체동의를 켜면 세부 항목도 모두 체크

---

## controls/radio button (`30:409`)

- **용도**: 여러 옵션 중 하나만 고름 — 결제수단, 설정값 라디오 그룹
- **size**: `medium` 28 / `small` 24
- **모양**: 흰 원 + #DDD 테두리. 선택되면 가운데 보라 점
- **비활성** (`status=false`) — 선택 여부에 따라 다름
  - 선택 + 비활성: 바깥 원 #F8F9FB + 점 #DDD, 흐림 없음
  - 미선택 + 비활성: 바깥 원 #F8F9FB + 전체 opacity 40%
- 옵션 배치(세로 / 가로 2개)는 rule.md § "라디오 버튼"

## controls/radio label (`2408:5563`)

- **용도**: 라디오 + 오른쪽 글자 한 쌍을 가로로 나란히 놓는 인라인 선택지 (예: PDF / EXCEL)
- **속성**: `size` = `small` 하나. variant 안에 쌍 2개(선택 1 + 미선택 1)가 들어 있고, 선택은 안의 라디오 `state` 로 바꿈
- **구성**: 라디오 `small` 24 + `body/1-regular`, 라디오 ↔ 글자 gap 8, 쌍 사이 gap 16, 높이 40

---

- 예전 문서의 `control/swtich/large·medium·small·tiny` 개별 컴포넌트는 AX 카탈로그에 없음 (미확인)

## 05_Control 안티패턴

- ❌ **바로 반영되지 않는 값에 스위치** — 저장 버튼이 필요한 폼에는 체크박스
- ❌ **라디오로 다중 선택** — 다중 선택은 체크박스
- ❌ 비활성을 opacity 로 직접 흐리게 — `status=false` variant 사용 (라디오 선택+비활성은 흐리지 않음)
- ❌ 약관 전체동의를 세부 약관 사이에 배치 (반드시 맨 위 별도 행)
- ❌ 컨트롤 크기를 Figma 에 없는 값으로 바꾸기
- ❌ 체크·라디오 아이콘을 새로 그리기 — 컴포넌트 인스턴스 사용

---

# 01_Actionbar

> ⏳ **Figma 정리 전** — 아래 이름 · 값은 옛 기준일 수 있음 (Header 정리안 v2 검토 중). 화면에 쓸 때는 Figma(AX) · `components.catalog.json` 을 먼저 확인

> Figma 카테고리 노드: `17:829` (01_Actionbar)
> 2개 컴포넌트: **action-bar/button** (터치 유닛) / **action-bar/header** (Main·Sub·Scroll Title 헤더 3형). 스크롤 대응 큰 제목은 § 14_Heading 의 `heading/headline` (구 action-bar/headline)

**공통 원칙**

- **높이 Fixed 56px** (모든 action-bar/header variant 공통)
- **배경**: 별도 색 없음 — **Contents 영역과 동일 배경 상속** ("Action bar 배경 색상은 Contents 영역의 배경색과 동일하게 적용")
- **좌우 화면 padding**: **20px** (`layout/margin` — 모든 화면 공통, `konacard-ds-rule.md` 참조)
- **버튼 touch 유닛 = 56×56 정사각** (`action-bar/button`)
- **Text 우측 액션 padding**: 16px (`spacing-medium`)
- **텍스트 정렬**: Page title **가운데 정렬** — AOS·iOS 공통, back 유무와 무관 (AX 컴포넌트 기본값)

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
  - **아이콘만** 배치. 텍스트가 필요하면 `button/text button` 컴포넌트를 헤더 우측에 직접 배치 (예: `7796:5462` — Page title + 우측 "Button" 텍스트)
  - 배지(Badge)는 아이콘 우상단에 붙이는 별도 인스턴스 — 상세는 § "Alert Badge" (08_Indicator) 참조

---

## action-bar/header — 3형 총괄

동일 컴포넌트 `action-bar/header`(높이 56)를 **배치 유형**으로 3가지로 사용:

| 형태 | 좌측 | 중앙/좌측 텍스트 | 우측 | 대표 노드 |
|---|---|---|---|---|
| **Main** (**코나카드 홈 메인 전용**) | 흰색 KONA 워드마크 로고 83×20 | 없음 (로고만) | 흰색 icon 버튼 2개 (알림·메뉴) | `type=main` `375:3142` |
| **Sub** (하위 페이지) | back `<` 버튼 (선택) | Page title `body/1-Bold` 15px 검정 · **가운데 정렬 (AOS·iOS 공통)** | text button 또는 icon 버튼 (선택) | `7796:5440`(AOS) · `7796:5486`(iOS) |
| **Scroll Title** (헤드라인 스크롤 대응) | back `<` (선택) | 스크롤 전 비어있음 → 스크롤 시 Page title 노출 | icon 버튼 (햄버거 등) | `407:3744` |

### Main 유형 (`type=main`, `375:3142`)

- **용도**: **코나카드 홈 메인 화면 전용** 헤더. 다른 화면에서는 사용하지 않음 (다른 화면은 Sub 유형 `page_icon` / `page_button`)
- **레이아웃** (56h, AX 실측):
  - header padding 좌우 4px
  - 좌: `left` 영역 padding-left 16 → **로고 시작 x = 20** (`layout/margin` 과 일치) / 로고 `img_logo_kona_w` **83×20**
  - 우: `action-bar/button` 56×56 × 2 — `ic_24/ic_alarm_24_w`, `ic_24/ic_menu_24_w` (흰색 아이콘)
- **배경**: 투명 (fill 없음)
- **구버전 `type=old`** (원형 로고 + Main text + 아이콘 3개, `307:5511`) 는 사용하지 않음 — 문서에서 제외

### Sub 유형 — AOS (`7796:5440`, `7796:5414`, `7796:5462`)

- **용도**: 뒤로가기 필요한 하위 페이지 상단
- **AX variant 매핑**: 아이콘 액션 = `type=page_icon` / 우측 텍스트 버튼 = `type=page_button` (header padding 좌우 4, 버튼 56×56)
- **레이아웃 3 형태** (Page title 은 항상 **가운데 정렬** — AX 컴포넌트 `textAlignHorizontal: CENTER`):
  - **이전 있음**: `<` back(56×56) + Page title 가운데
  - **이전 없음**: Page title 가운데
  - **이전 + 우측 액션**: `<` back + Page title 가운데 + 우측 text button (`type=page_button`)
- **Page title**: `body/1-Bold` = Pretendard **Bold 15px** / lineHeight 24 / 색 #000000

### Sub 유형 — iOS (`7796:5486`, `7796:5415`, `7796:5416`)

- **레이아웃**: AOS와 동일 (같은 컴포넌트 · Page title 가운데 정렬)
- **주의**: **하나의 화면에 AOS/iOS 헤더를 섞지 말 것** — 플랫폼별 빌드에서 하나만 사용

### Scroll Title 유형 (`407:3744` + `1098:4449`)

- **용도**: 헤드라인 크게 노출 + 스크롤 시 헤더로 축소되는 이중 패턴
- **동작**:
  - **스크롤 전**: action-bar/header에는 우측 액션(햄버거 등)만 노출, 타이틀 영역 비어있음. 본문 상단에 `heading/headline` 큰 제목 노출
  - **스크롤 시**: 헤드라인이 헤더로 밀려 들어가면서 헤더에 **Page title 자동 노출 + 하단 divider(밑줄) 표시**
- **트랜지션 트리거**: 헤드라인 하단 라인이 헤더 하단과 만나는 시점

## action-bar/header 안티패턴

- ❌ **Page title 좌측 정렬 override** — AOS·iOS 모두 컴포넌트 기본값(가운데) 유지
- ❌ **Main 유형에 back 버튼** (Main은 진입점 — back 없음. back 필요하면 Sub 유형)
- ❌ **홈 메인 외 화면에 Main 유형(`type=main`) 사용** — 코나카드 홈 메인 전용
- ❌ **우측 액션 4개 이상** (56×56 × 3 이하 권장, 그 이상은 햄버거 메뉴로 통합)
- ❌ 헤더 배경에 별도 색 지정 (Contents 배경 상속 원칙 위배)
- ❌ Scroll Title 유형에서 스크롤 전에도 헤더에 Page title 노출 (헤드라인과 중복)

---

## 01_Actionbar 카테고리 종합 안티패턴

- ❌ **높이 56 외의 값** (48/64 등) — 반드시 Fixed 56
- ❌ **좌우 padding 20 외의 값** — layout/margin 고정
- ❌ **AOS↔iOS 헤더 혼용** — 플랫폼별 빌드에서 하나만
- ❌ 헤더에 그림자·아웃라인 (배경 상속 원칙과 충돌) — Scroll Title 스크롤 시 divider만 예외적 허용
- ❌ Main 유형과 Sub 유형을 한 화면에서 동시 노출 (탭·모달 내부 헤더 등)

---

# 03_Tab

> ⏳ **Figma 정리 전** — 아래 이름 · 값은 옛 기준일 수 있음 (Tabs 정리안 v2 검토 중 — `tab/line` · `tab/chip` · `tab/segment`). 화면에 쓸 때는 Figma(AX) · `components.catalog.json` 을 먼저 확인

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
  - Select bar 두께 2px, 색: `color/button/primary` #805AE9
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
  - `Selected` — 배경 `color/button/primary` #805AE9 + 텍스트 `color/font/white` #FFFFFF
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

---

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

---

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

---

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

---

## 06_List 카테고리 종합 안티패턴

- ❌ **터치 영역을 chevron·우측 버튼만으로 한정** — 진입형은 항상 행 전체 터치
- ❌ **아이템 사이 divider 두께·색 임의 변경** (반드시 1dp #0000000F)
- ❌ Main text를 3줄 이상으로 (반드시 2줄 이하, 초과 시 `...` 말줄임)
- ❌ **진입형 + 액션형을 같은 행에** (chevron`>` 과 Small 버튼 동시 배치 금지 — 하나만 선택)
- ❌ Accordion 안에 또 Accordion 중첩 (2 depth 초과 시 별도 화면 진입 유도)
- ❌ Select List 선택 상태를 체크박스로 대체 (다중 선택이면 05_Control Checkbox, 단일 선택이면 텍스트 Bold+브랜드 색 — 바텀시트는 + `ic_select_on` 체크 아이콘)

---

# 07_Line

> 구분선은 세트 하나 `divider` (`10997:164`) — 구 `line/solid` · `line/dotted` · `line/divider` · `line/divider-line` 을 합친 것.
> 내용과 영역을 나눌 때 씀. 선을 사각형으로 직접 그리지 말고 인스턴스 사용.

## divider

- **속성**: `type` × `color` (`light` / `dark`)

| type | 크기 | 쓰는 곳 |
|---|---|---|
| `solid` | 가로 1px (폭은 늘려 씀) | 리스트 항목 사이 — 기본 구분선 |
| `dotted` | 가로 1px 점선 (2/2) | 제목 없는 안내 문구(§ 10_Info) 위, 정보 묶음 · Info-box 항목 사이, 팝업 · 안내 카드 안 계층 분리 (예: 완료 통지 ↔ 후속 안내, 진행바 사이) |
| `section` | 높이 10 회색 띠 (`light` 만) | 한 화면 안 큰 영역 사이 (예: "결제 정보" ↔ "혜택 정보") |
| `vertical-12` / `vertical-8` | 세로 1×12 / 1×8 (필요하면 높이를 늘림) | 카드 안 세로 구분 |

- **color** — type 마다 실제 색이 다름
  - `solid` · `dotted` · `section`: `light` = `divider/primary` (검정 6%) · `dark` = `divider/secondary` (8%)
  - `vertical`: `light` = `divider/secondary` (8%) · `dark` = `divider/tertiary` (12%) — 짧은 세로선이라 한 단계 진함
- `solid` · `dotted` · `vertical` 은 선 밑에 흰 바탕이 깔려 있음 — 회색 바탕 위에 놓으면 흰 줄 + 선으로 보임
- 옛 문서 기준 `dark` 는 회색 바탕(`background/secondary`) 위에 씀

## 07_Line 안티패턴

- ❌ 리스트 구분선에 `dotted` (반드시 `solid`)
- ❌ 큰 영역 구분을 `section` 대신 그림자·그라데이션으로
- ❌ 가로선을 2px 이상으로 두껍게 — 굵은 구분이 필요하면 `section`
- ❌ 사각형·선을 직접 그려서 구분선 만들기

---

# 08_Indicator

> ⏳ **Figma 정리 전** — 아래 이름 · 값은 옛 기준일 수 있음. 화면에 쓸 때는 Figma(AX) · `components.catalog.json` 을 먼저 확인

> Figma 카테고리 노드: `30:420`
> 사용자가 선택할 수 없고 **정보 전달 기능만 가진** 시각 요소. (선택 가능한 것은 `03_Tab` 또는 `05_Control` 사용)

## Page dot (indicator / indicator-dot)

- **용도**: 스와이프 페이지·캐러셀의 현재 위치 표시
- **사이즈**: dot **4×4**, dot 사이 **gap 4**
- **State — 단일 (`Active` 강조형)**:
  - `Default(True)`: 회색 점 (`color/icon/quinary` #DDDDDD)
  - `Active(False)`: 브랜드 보라 점 (`color/button/primary` #805AE9)
- **Multi progress**: N개 점 나열 시 활성 위치만 브랜드 보라, 나머지 옅은 회색
- **표시 위치**: 고정 규칙 없음 — 인디케이터를 담는 컨테이너(배너·온보딩·팝업 등)의 레이아웃에 맞춰 상/하, 좌/중/우가 그때그때 다르게 배치됨. 화면 조립 시 "하단 중앙"을 기본값으로 가정하지 말고 해당 화면의 다른 요소 배치에 맞출 것

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
- **위치**: 고정값 없음 — 컨테이너 레이아웃에 따라 달라짐 (예: 롤링배너에서는 배너 우하단)

## Alert Badge (알림 배지) — `badges/badge` (`3426:10001`)

> 아이콘 우상단·리스트 항목 우측 등에 붙여 **신규·미확인 알림 존재**를 표시. 3 타입 모두 `color/gradient/tertiary` (#FF364B → #FF1493) 그라디언트 배경.

- **Type — 3종** (Figma 는 4 variant 이나 코드는 3 타입으로 통합)
  - `dot` — **4×4** 원, 텍스트 없음. 존재만 알림 (미확인 알림 1개 이상).
  - `new` — **20×20** 원 + 흰색 "N" 마크. 신규 콘텐츠·업데이트.
  - `count` — **min-width 20 × height 20** pill. 텍스트 길이에 따라 폭 자연 확장 (`padding: 2px 4px`). 예: `1`, `9`, `25`, `99`, `99+`, `999+`.
    - Figma `num-min`(20×20) / `num-max`(32×20) 두 variant 는 사이즈 예시일 뿐 코드에선 하나로 통합. **폭 고정하지 말 것**.
- **텍스트 (count 전용)**: Pretendard Bold **11px** (`font/size/2xsmall`), lineHeight 16, letter-spacing `-0.22`, color `color/font/white` #FFFFFF.
- **radius**: `radius/button/round` = 9999 (완전 pill).
- **위치·조합**: action-bar/button 우상단(버튼 사이즈 40×56 — 아이콘 24×24 + 좌우 padding 16, 정사각형 아님. 배지 오프셋 top 14 / right 0, 우측은 inset 없이 버튼 가장자리에 그대로 붙음), 리스트 항목 우측 텍스트 옆. 컴포넌트 자체는 position 로직 없음 — 부모가 배치 책임.
- **SVG 원본 유지**: dot·new 는 Figma 원본 SVG (linearGradient defs 포함) 를 그대로 인라인. 벡터를 다시 그리지 않는다.

## 08_Indicator 안티패턴

- ❌ Page dot을 사용자 조작 가능한 요소로 사용 (탭 인터랙션 금지 — 표시 전용)
- ❌ Navigator 비활성 상태에 opacity 40% (반드시 30%)
- ❌ dot 크기 6px 이상으로 확대 (반드시 4×4)
- ❌ Alert Badge `count` 폭을 20/32 로 고정 (텍스트에 따라 확장돼야 함; min-width 20 유지)
- ❌ Alert Badge 배경을 단색으로 대체 (반드시 `gradient/tertiary`; 회색 pill 이 필요하면 § N/NN 카운트 배지 사용)
- ❌ Alert Badge 를 클릭 가능한 요소로 사용 (표시 전용; 액션이 필요하면 부모 요소가 핸들링)

---

# 09_Label

> 사용자가 누를 수 없고 **정보 전달만** 하는 pill 형 태그.

## label (`2121:5513`)

- **속성**: `size` × `type` × `color` — type 마다 쓸 수 있는 색·사이즈가 다름

| type | color | size |
|---|---|---|
| `color` (바탕 채움) | `brand-gradient` · `brand` · `brand-light` · `gray-dark` · `warning` · `gray-light` | `large` · `medium` · `small` · `tiny` |
| `line` (테두리, 바탕 없음) | `brand-gradient` · `brand` · `warning` | `large` · `medium` · `small` (tiny 없음) |

| size | 높이 | 글자 |
|---|---|---|
| `large` | 30 | `body/2-bold` 14/22 |
| `medium` | 26 | `body/3-Bold` 12/18 |
| `small` | 24 | `body/4-Bold` 11/16 |
| `tiny` | 20 | Bold 9/12 (텍스트 스타일 없음) |

- 모서리 `radius/components/label` (완전 pill), 폭은 글자에 맞춤
- **color**
  - `brand-gradient` — #804EE2 → #526ED3 가로 그라데이션 + 흰 글자 (line 은 테두리·글자 모두 그라데이션). 가장 많이 씀
  - `brand` — 보라 #805AE9 채움 + 흰 글자 (line: 보라 테두리·글자)
  - `brand-light` — 연보라 #F4F0FD 채움 + 보라 글자
  - `gray-dark` — #999 채움 + 흰 글자
  - `warning` — 빨강 #FF364B 채움 + 흰 글자 (line: 빨강 테두리·글자)
  - `gray-light` — #F8F9FB 채움 + #666 글자. 대기·미처리 상태 (예: 문의 "답변대기")
- **상태 표시에 쓸 때** (rule.md § 상태 pill 5종 · § Pill 배지): 완료 · 강조 = `brand` / 진행 중 · 활성 · 지속 상태 = `brand-light` / 차단 · 불가 = `warning` / 자연 종료 = `gray-dark` / 대기 = `gray-light` — pill 색을 직접 지정하지 않음

## 09_Label 안티패턴

- ❌ **label 을 누를 수 있는 요소로 사용** — 누르는 게 필요하면 `button/button` Small (`style=secondary, size=medium`)
- ❌ label 에 그림자. 그라데이션은 `brand-gradient` 색으로만
- ❌ label 글자 6자 이상 (짧은 태그 원칙)
- ❌ `type=line` 에 `brand-light` · `gray-dark` · `gray-light` 또는 `tiny` (없는 조합)

---

# 10_Info

> ❖ Info 페이지 (`10950:8835`) — 2026-10-07 정리된 것은 `info` 뿐. Text info · Info-box 는 아직 옛 기준
> 3가지 유형: **info**(입력칸 아래 한 줄 안내·오류 문구) / **Text info**(bullet 안내문구) / **Info-box**(박스형 항목-내용 나열)

## info (`41:1241`, 구 `input/info-text`)

- **용도**: 입력칸·선택칸 아래 Guide Text, 짧은 안내·오류 문구. `input` · `select/select box` 에는 `info` boolean 으로 들어 있음 (§ 04_Forms "Form UI 조합 규칙")
- **속성**: `type` 5종

| type | 글자 색 | 아이콘 | 쓰는 곳 |
|---|---|---|---|
| `info` | #666 | 없음 | 부가 힌트 (예: "숫자만 입력 가능") |
| `error` | 빨강 #FF364B | 없음 | 아이콘 없는 오류 문구 |
| `icon-error` | 빨강 #FF364B | 빨간 ! (`icon_danger`) | 검증 실패 — `input` 오류 상태 기본 |
| `icon-info` | 검정 | 검정 ! (`icon_alert_black`) | 강조 안내 |
| `icon-guide` | #666 | 회색 ! (`icon_alert_gray`) | 가이드성 안내 |

- 글자 `body/3-Regular` 12/18, 한 줄 높이 18. 컴포넌트 폭 230 고정, 길면 줄바꿈 — 아이콘은 첫 줄에 붙음

### info 안티패턴

- ❌ 검증 결과·필수값 안내를 회색 `info` 로 — `icon-error` 사용

## Text info

> ⏳ Figma 정리 전 — 아래는 옛 기준. 값·이름은 Figma 에서 확인

- **원칙**:
  - 안내 문구는 **최대 2Depth까지만** 사용
  - 여러 개 문단 사용 시, 문단 앞에 글머리 기호로 구분 — **`•` 점 · `-` 대시 · `*` 별표 · `※`** 4가지만 (`■` 등 다른 도형 쓰지 않음, 2026-11-09 KeyScreen 기준 결정 — 쓰는 곳은 rule.md § Bullet 스타일)
  - **제목이 없는 안내문구의 상단에는 항상 Dotted line 사용**
  - 안내문구의 아이콘과 텍스트는 **마진 없이 적용**
- **1 Depth**: `•` (Dot) + Text = `body/2-Regular` 14px `color/font/primary` 검정
- **2 Depth**: `*` (Aster) + Text = `body/3-Regular` 12px `color/font/quaternary` #999999
- **사용 예시**:
  - **제목있는 안내문구**: 상단 `⓵ Info title` (Bold + 아이콘) + 아래 bullet 문단
  - **제목없는 안내문구**: 상단 Dotted line + bullet 문단만
  - 문단 조합: "1Depth 한 개 사용" / "1Depth 여러 개 사용" / "1Depth 여러 개와 2Depth 문단 사용" 3형

## Info-box (Item List / Box Case)

> ⏳ Figma 정리 전 — 아래는 옛 기준. 값·이름은 Figma 에서 확인

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

> ❖ Tooltip 페이지 (2026-10-07 대조). 글자 옆 회색 원형 아이콘을 누르면 그 자리에 뜨는 말풍선 `tooltip/tooltip`.
> **터치 영역은 글자 + 아이콘 전체** — 정보에 쉽게 닿도록.

## tooltip/tooltip (`200:1909`)

- **용도**: 용어 정의·단순 정보를 화면 이동 없이 바로 확인 (인라인, 모달 아님)
- **속성**: `style` × `placement`
  - `style`: `line` (흰 바탕 + 보라 #805AE9 1px 테두리 + 검정 글자) / `brand` (보라 #805AE9 바탕 + 흰 글자)
  - `placement`: `top-left` · `top` · `top-right` · `bottom-left` · `bottom` · `bottom-right` · `left` · `right`
    - `top-*` · `bottom-*` = 말풍선 위치 (핀은 반대쪽). `-left` / `-right` 는 핀 중심이 말풍선 끝에서 20
    - `left` · `right` = 핀이 붙는 쪽
- **말풍선**: padding 상하 12 · 좌우 16, radius 8, 글자 `body/2-Regular` 14/22, 폭은 글자에 맞춤
- 핀은 말풍선과 1px 겹침. 높이 53 (`top-*` · `bottom-*`) / 46 (`left` · `right`)

**여는 아이콘 · 배치** (❖ Tooltip 예시 화면 기준)
- 입력칸 제목 옆: 16 `?` (`ic_info/ic_noti_16_g`)
- 정보 값 옆: 20 `?` (`ic_20/ic_question_20_g`) = 설명 / 20 `!` (`ic_20/ic_guide_20_g`) = 주의·조건
- 말풍선은 아이콘 바로 아래·위 (간격 0). 왼쪽 아이콘이면 `-left`, 오른쪽 아이콘이면 `-right`
- 화면 좌우 여백 20 안에 두고, 긴 문구는 의미 단위로 줄바꿈
- 길고 행동을 유도하는 안내는 말풍선 대신 팝업 — `rules/patterns/popups.md` § "사용법 안내 팝업"

## 11_Tooltip 안티패턴

- ❌ 말풍선을 모달로 (반드시 인라인)
- ❌ 터치 영역을 아이콘만으로 한정 (글자 + 아이콘 전체)
- ❌ 안쪽 부품 `tooltip/body` · `tooltip/pin` 을 떼어 조립 — `tooltip/tooltip` 인스턴스 사용
- ❌ 말풍선 글자 크기·여백·모서리를 바꿔 쓰기 (14 · 12/16 · 8)
- ❌ 말풍선이 화면 좌우 여백 20 밖으로 나감

---

# 12_Banner

> ⏳ **Figma 정리 전** — 아래 이름 · 값은 옛 기준일 수 있음. 화면에 쓸 때는 Figma(AX) · `components.catalog.json` 을 먼저 확인

> Figma 카테고리 노드: `253:1908`
> 카드 위·화면 안에 붙이는 강조 밴드. **Corner radius = 8px** 공통.

## Banner Color (6 파스텔)

- **6가지 옅은 파스텔 배경**: 옅은 회색 / 옅은 보라 / 옅은 하늘 / 옅은 민트 / 옅은 노랑 / 옅은 핑크
- **원칙**: 강조 강도는 옅은 톤으로 유지 — 배너가 CTA를 이기지 않도록 (`konacard-ds-rule.md` § "보라 한 색" 원칙)
- **색조 매핑**:
  - **브랜드 제휴 배너** (특정 브랜드 혜택·프로모션, 예: 올리브영 → 녹색): 브랜드 색조(H)에 맞추고 명도(L) 85~95% 범위 안에서 조정 (`konacard-ds-foundation.md` § color/banner 참조)
  - **그 외 일반 배너**: 옅은 보라 = 브랜드성 혜택 / 옅은 노랑 = 안내·주의 / 옅은 민트 = 성공·긍정 / 옅은 핑크 = 프로모션·이벤트

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

# 13_Toast

## Toast (`toast`)

화면 이동 없이 액션 결과를 바로 알려주는 짧은 알림. 용도·문구 예·다른 UI와의 구분은 `konacard-ds-rule.md` § "Toast 컴포넌트".

| 속성 | 값 (AX 실측) |
|---|---|
| 구조 | 속성(variant) 없는 단일 컴포넌트 |
| 크기 | 320 × 42 (높이 고정, 글자는 세로·가로 가운데) |
| radius | 12 (`radius/components/toast`) |
| 배경 | `color/background/dimmed` (검정 64%) |
| 글자 | `body/2-Regular` 14/22 · `font/white` |
| 배치 | 화면 아래에서 **40**, 좌우 **20** (`layout/margin`) — 360 화면에서 폭 320 |

- 성공·실패 색 구분 없음. 문구로만 성격을 전달
- 1줄 짧은 문구

### Toast 안티패턴
- ❌ 성공은 초록, 실패는 빨강처럼 바탕색을 바꾸기
- ❌ 화면 중앙·상단 배치 (항상 아래 40 · 좌우 20)
- ❌ Toast 안에 버튼·아이콘 넣기 (판단이 필요하면 중앙 얼럿 사용)

---

# 14_Heading

> ❖ Heading 페이지 (2026-11-06 사용자 정리 완료). 화면의 제목 두 가지 — 화면 맨 위 큰 제목 `heading/headline`, 화면 안 묶음 제목 `heading/section`.
> 입력칸 위 라벨은 Heading 이 아니라 § 04_Forms 의 `input/label`.

---

## heading/headline (`1098:4409`)

- **Figma 노드**: 단일 컴포넌트 `1098:4409` (구 `action-bar/headline` 세트 `896:4387` 의 `type=1line` 노드를 그대로 써서 키 유지. 2line · 3line variant 와 세트는 삭제)
- **용도**: 화면 맨 위(header 아래)에 **한 번만** 쓰는 큰 제목. Scroll Title 유형 헤더와 짝으로도 씀
- **속성**:
  - `sub text` (boolean, **기본 꺼짐**) — 보조 문구 보이기
  - `sub` (text) — 보조 문구 내용
  - 주 문구에는 글자 속성 없음 — 강조 구절을 직접 칠해야 해서 레이어 글자를 바로 고침
- **사이즈·기하** (AX 실측):
  - 폭 **360** (화면 폭, 인스턴스는 FILL) / 높이 HUG — 주 문구 3줄 기준 144, 보조 문구 2줄 켜면 196
  - padding 상·하 **24** (`spacing/xlarge`) · 좌우 **20** (`layout/margin`), 주 문구 ↔ 보조 문구 gap **8** (`spacing/xsmall`)
- **글자**:
  - **주 문구** (`headline`): `heading/1-bold` = Pretendard **Bold 24px** / lineHeight 32 / letterSpacing -0.48 / `color/font/primary` #000000
    - 강조 구절은 **fill 만** `color/font/brand` #805AE9 (굵기·크기 그대로, 한 구절만)
  - **보조 문구** (`sub text`): `body/2-Regular` 14px / lineHeight 22 / letterSpacing -0.28 / `color/font/tertiary` #666666 — 주 문구 **아래**
- **KeyScreen AOS 근거** (2026-11-06, 보이는 인스턴스 576곳): 주 문구만 443 · 주 문구 + 보조 문구 133 · 세 번째 줄(설명) 0 → 설명 줄 삭제. 강조 287곳
- **여러 줄 처리**: 주 문구 2~3줄 권장, 보조 문구 2줄 이하

## heading/headline 안티패턴

- ❌ 강조 보라를 **여러 구절에 반복 사용** (한 구절 원칙 위배)
- ❌ 강조할 때 폰트·굵기까지 바꾸기 — fill 만 바꿈
- ❌ 한 화면에 headline 2개 이상 (화면 안 묶음 제목은 `heading/section`)
- ❌ Headline 없이 Scroll Title 헤더만 사용 (헤더에 처음부터 Page title 노출) — 이 경우 그냥 Sub 유형 사용
- ❌ Headline과 첫 콘텐츠 카드 사이 여백을 24px 미만으로 축소

---

## heading/section (`576:6131`)

- **Figma 노드**: 컴포넌트 세트 `576:6131` (구 `title/title`. 쓰이던 세 variant 는 이름만 바꿔 키 유지, 0곳인 4개 삭제, Type=Input 은 `input/label` 로 분리)
- **용도**: 화면 안에서 묶음(섹션)을 나누는 제목 — 예: 수취인 정보 · 마케팅 알림 설정 · 보내는 금액
- **속성**: `size` = `large` / `medium` / `small` + `title` (text)
- **사이즈·기하**: 폭 **320** (인스턴스는 FILL) / 글자 위아래 padding **8** (`spacing/xsmall`)

| size | 글자 | 색 | 높이 | 구 이름 | KeyScreen |
|---|---|---|---|---|---|
| `large` | `body/2-bold` 14/22 · -0.28 | `color/font/primary` #000000 | 38 | Type=Black · Large · Black | 29 |
| `medium` | `body/3-Bold` 12/18 · -0.24 | `color/font/quaternary` #999999 | 34 | Type=Con_list · Medium · Gray | 85 |
| `small` | `body/4-Bold` 11/16 · -0.22 | `color/font/quaternary` #999999 | 32 | Type=Con_list · Small · Gray | 14 |

- 크기마다 색이 하나씩만 쓰여서 옛 Color 속성은 size 에 묶음

## heading/section 안티패턴

- ❌ 섹션 제목을 텍스트로 직접 입력 (h2 직접 입력 금지 — 인스턴스 사용)
- ❌ 입력칸 라벨로 `heading/section` 사용 — 라벨은 `input/label`
- ❌ 한 묶음 안에서 size 섞어 쓰기

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

## OS/status-bar (`1236:6993`)

- **Figma 노드**: 컴포넌트 세트 `1236:6993` (❖ OS system UI 페이지 `11217:3864`, 2026-11-09 사용자 정리)
- **용도**: 화면 상단 OS 정보 영역의 시각 placeholder — **실 프로덕션에서는 OS가 자동 렌더**
- **속성**: `Color` = Black / White × `Type` = AOS / iOS / iOS_notch / Address-Bar → **8 variant** (기본 Black · AOS)
  - `Color` 는 글자 · 아이콘 색 (바탕 없음) — **Black = 밝은 화면 위, White = 어두운 화면 위**

| Type | 크기 | 특징 | 사용 상황 |
|---|---|---|---|
| `AOS` | 360×24 | 좌 시간(10:00) / 우 signal·WiFi·battery | Android 목업 상단 (기본) |
| `iOS` | 375×20 | 좌 시간(4:20) / 우 신호·WiFi·battery | iOS notch 없는 목업 |
| `iOS_notch` | 375×48 | notch 또는 Dynamic Island 높이 포함 | iPhone X 이후 목업 |
| `Address-Bar` | 360×56 | home 아이콘 + `example.com` + 탭 수 + 메뉴(⋮) | 웹뷰 · 인앱 브라우저 목업 |

- **사용 원칙**: 목업 상단에 **하나만** 배치. Konacard 앱 자체 헤더(`01_Actionbar`)는 status bar 아래에 위치.

## OS/keyboard (`1709:5279`)

- **Figma 노드**: 컴포넌트 세트 `1709:5279` (❖ OS system UI 페이지)
- **용도**: 인풋 필드 활성 상태 목업에서 **키보드 노출 상황을 시각화**
- **속성**: `OS` = AOS / iOS × `Type` = Keypad / Number → **4 variant** (기본 AOS · Keypad)

| OS · Type | 크기 | 특징 |
|---|---|---|
| AOS · `Keypad` | 360×244 | 문자 자판 — 어두운 회색 바탕 + 진회색 키 + 흰 글자 + 우하단 파란 체크 |
| AOS · `Number` | 360×206 | 숫자 자판 (금액 · 번호 입력) — 같은 어두운 톤 |
| iOS · `Keypad` | 375×244 | 문자 자판 — 밝은 회색 바탕 + 흰 키 + 검정 글자 + 우하단 파란 체크 |
| iOS · `Number` | 375×216 | 숫자 자판 (숫자 아래 영문 보조 글자) |

- **레이아웃 규칙**:
  - 인풋 필드 활성화 시 화면 하단을 키보드 높이만큼 침범 — 하단 CTA(`button/fixed-bottom`)는 키보드 위로 밀어 올림 (구현측 관례)
  - 숫자만 받는 입력칸(금액 · 카드번호 · 주민번호 등)은 `Type=Number`
  - 목업에서는 키보드 활성 상태와 비활성 상태 2 화면을 각각 제시하면 개발 커뮤니케이션에 유리

## 00_Basic 안티패턴

- ❌ **status bar / keyboard를 실제 프로덕션 구현물처럼 코드로 구현** — 반드시 OS 자동 렌더 사용
- ❌ 목업에 status bar를 여러 개 겹쳐 배치
- ❌ 어두운 화면 위에 `Color=Black` status bar (글자가 안 보임 — `Color=White`)
- ❌ 숫자만 받는 입력칸 목업에 문자 자판(`Type=Keypad`)
- ❌ 스페이싱을 8·4 배수 외 값으로 정의 (특히 5·7·11 등 홀수)
- ❌ 아이콘에 Auto layout 강제 적용 (grid 파괴 위험)
- ❌ 소수점 사이즈(예: 47.5) 사용

---

## 12개 대분류 요약

| # | 카테고리 | 대표 컴포넌트 |
|---|---|---|
| 00 | Basic | OS/status-bar (8), OS/keyboard (4), spacing 원칙 |
| 01 | Actionbar | header (Main·Sub AOS/iOS·Scroll Title), button |
| 02 | Button | primary, secondary, text, icon, fixed-bottom |
| 03 | Tab | Main (Basic·Multi), Sub (pill) |
| 04 | Forms | input (text field · search bar · text area · button · card-number · 주민등록번호), select (select box · select button) + Form UI |
| 05 | Control | controls/swtich · check box · radio button + 각 label 조합 |
| 06 | List | list (4형), accordion, card-select, bottomsheet |
| 07 | Line | divider (solid · dotted · section · vertical) |
| 08 | Indicator | Page dot, Navigator, N/NN badge, Alert badge (dot/new/count) |
| 09 | Label | label (color 6색 · line 3색) |
| 10 | Info | Text info (bullet 2depth), Info-box |
| 11 | Tooltip | Popup(?), Bubble(!, Line/Brand) |
| 12 | Banner | Benefit(1line), Action(1+2depth), 6 파스텔 |
| 14 | Heading | headline (화면 큰 제목), section (섹션 제목 size 3단계) |

**다음 단계 후보**:
- `konacard-ds-rule.md` 상 각 화면 성격별 규칙과 컴포넌트 매핑 상세 연결 (§ "화면 성격 분류")
- Figma에 신규 화면 추가 시 이 문서에 규칙 축적 (`CLAUDE.md` § "파일 수정 원칙" 참조)
