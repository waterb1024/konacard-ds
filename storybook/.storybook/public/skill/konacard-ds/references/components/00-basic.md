> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

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
