> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

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


## 04_Forms 카테고리 종합 안티패턴

- ❌ **필드 높이를 32/40/56 등 다양하게 섞기** — 반드시 48px 고정
- ❌ **Corner radius를 4/8/16 등 임의로 변경** — 6px 고정 (`radius/components/form`)
- ❌ 필드 위 Title 라벨 없이 Placeholder만으로 라벨링 (접근성 저하) — 예외: 묶음 아래 칸 · 헤드라인이 대신 말할 때 · 가로 묶음 오른쪽 칸
- ❌ 에러 메시지를 툴팁·모달로 띄우기 (반드시 `info` 슬롯 `icon-error` 로 인라인)
- ❌ 같은 질문을 화면마다 드롭다운(`select box`)과 버튼형(`select button`)으로 다르게 받기 — 선택지 2~4개는 select button, 5개 이상·긴 목록은 select box


