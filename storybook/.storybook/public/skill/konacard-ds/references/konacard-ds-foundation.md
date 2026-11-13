---
version: "1.0"
name: KONACARD Design Foundation
description: >
  KONACARD 디자인 시스템 토큰 문서 — 색 · 글자 · 간격 · radius · elevation · opacity.
  Figma DS 파일(${FIGMA_DS_FILE_KEY}, -AX-) 의 Foundation 가이드와 변수가 원본이며, 이름은 Figma 그대로 씀.
---

# KONACARD Design Foundation

> **토큰 문서.** 값 · 이름 · 용도만 다룸. Figma 원본: `${FIGMA_DS_FILE_KEY}` (01_Foundations).
> - Figma 에서 화면을 만드는 실무(컴포넌트 우선 원칙 · 코드 예시 · 레이어 구조) → `rules/figma-guide.md`
> - 컴포넌트 이름 · 키 · variant · 크기 → `components.catalog.json`, 용도 · 규칙 → `konacard-ds-components.md`
> - 모든 hex · 크기 값은 Storybook `storybook/src/styles/tokens.css` 에도 같은 이름으로 있음

---

## Overview

KONACARD는 한국의 선불카드·포인트 결제 플랫폼입니다. 디자인 언어는 **신뢰와 간결함**을 우선합니다.

- **브랜드 퍼플 (`#805AE9`)** 이 유일한 액션 컬러입니다. CTA 버튼, 강조 텍스트, 헤드라인 일부에만 사용하며, 다른 용도로는 절대 사용하지 않습니다.
- **흰색 배경** (`background/primary` = `#FFFFFF`) 이 기본입니다. 섹션 분리에는 `background/secondary` (`#F8F9FB`, coolgray-50), 브랜드 약배경에는 `background/tertiary` (`#F8F6FE`, purple-50)를 사용합니다.
- **Pretendard** 폰트 전용입니다. Regular · Bold 두 굵기만 씁니다.
- 토큰 이름은 **Figma 변수 · 스타일 원본 그대로** 씁니다. 오타가 있으면 문서에서 우회하지 말고 Figma 에서 고친 뒤 같이 바꿉니다.
- 화면에서는 토큰을 직접 값으로 넣지 말고 **변수 · 스타일에 묶습니다** (radius · 간격 · 색 · 글자 모두).

---

## Colors

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Color 가이드 (node 296:3042) — 2026-11-04 가이드 · 변수 기준으로 다시 맞춤

색상은 서비스 정체성을 표현하는 매우 강력한 요소이므로 아래 가이드라인을 명확히 인지하고 사용하도록 합니다. 특히 브랜드 컬러는 코나카드와 연계된 모든 서비스에 공통으로 적용되는 요소이므로 임의로 추가하거나 변경할 수 없습니다.

색 변수는 **Primitive → Semantic → Theme** 세 층입니다 (2026-11-04 컬렉션 이름 정리: `_Theme` → `_Semantic`, `Semantic` → `Theme`). 화면·컴포넌트는 맨 위 **Theme** 층을 묶어 씁니다. 컴포넌트 전용 radius · layout 변수는 따로 `Component` 컬렉션(→ `_Semantic`)에 있습니다.

| 층 | Figma 컬렉션 | 발행 | 내용 |
|---|---|---|---|
| Primitive (Color Palette) | `_Primitive` | 숨김 | `color/{purple · red · blue · green · yellow · gray · coolgray}/50~900`, `color/black` · `color/white` |
| Semantic (주조색과 보조색) | `_Semantic` | 숨김 | `color/brand · neutral · accent/*`, `opacity/black-* · white-*` |
| Theme (용도) | `Theme` | 발행 | `color/font · background · border · divider · icon · button · label · banner · progress/*`, `opacity/pressed` |

> **이름은 Figma 그대로**. CSS 는 `/` → `-` (`color/brand/secondary` → `--color-brand-secondary`). 2026-11-04 변수 이름 오타(sencondary · primay · balck · quarternary · dimed)를 Figma 에서 고침.

### Color Palette

| 계열 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| purple | `#F8F6FE` | `#F4F0FD` | `#ECE6FC` | `#BFADF4` | `#997BED` | **`#805AE9`** | `#6648BA` | `#523A95` | `#33245D` | `#1B1138` |
| red | `#FFEFF1` | `#FFE2E5` | `#FFCCD1` | `#FF9BA5` | `#FF5E6F` | **`#FF364B`** | `#CC2B3C` | `#99202D` | `#59131A` | `#330B0F` |
| blue | `#F0F6FE` | `#E6F0FE` | `#D5E6FD` | `#B9D6FB` | `#8ABAF9` | **`#589CF6`** | `#4F8CDD` | `#3965A0` | `#233E62` | `#121F31` |
| green | `#EFFCF9` | `#DEF8F2` | `#C8F3E9` | `#A4EBDB` | `#77E2C9` | **`#1CCEA5`** | `#159A7C` | `#0D634F` | `#083E31` | `#041F19` |
| yellow | `#FFFBDF` | `#FEF9C3` | `#FEF08A` | `#FDE047` | `#FACC15` | `#EAB308` | `#CA8A04` | `#A16207` | `#764004` | `#462304` |
| gray | `#F8F8F8` | `#F4F4F4` | `#EEEEEE` | **`#DDDDDD`** | `#BDBDBD` | **`#999999`** | `#757575` | **`#666666`** | **`#333333`** | `#1C1C1C` |
| coolgray | **`#F8F9FB`** | `#F0F1F3` | `#DADDE0` | `#C7CBD0` | `#A9AEB5` | `#92989D` | `#6E7276` | `#585B5E` | `#333537` | `#1D1E1F` |

굵게 = 주조색·보조색이 가리키는 단계.

### 주조색과 보조색

색상은 그 자체로 브랜드 정체성을 만들며, 정보의 질서와 위계를 수립하여 사용자가 더욱 쉽고 빠르게 정보를 습득할 수 있도록 돕습니다.

| 가이드 묶음 | 이름 | 팔레트 · 값 | Figma 변수 |
|---|---|---|---|
| brand | primary | purple-500 · `#805AE9` | `color/brand/primary` |
| | secondary | purple-100 · `#F4F0FD` | `color/brand/secondary` |
| | tertiary | purple-50 · `#F8F6FE` | `color/brand/tertiary` |
| black & white | black | `#000000` | `color/black` |
| | white | `#FFFFFF` | `color/white` |
| neutral | primary | gray-800 · `#333333` | `color/neutral/primary` |
| | secondary | gray-700 · `#666666` | `color/neutral/secondary` |
| | tertiary | gray-500 · `#999999` | `color/neutral/tertiary` |
| | quaternary | gray-300 · `#DDDDDD` | `color/neutral/quaternary` |
| background / surfaces | primary | white · `#FFFFFF` | `color/background/primary` |
| | secondary | coolgray-50 · `#F8F9FB` | `color/background/secondary` |
| | tertiary | purple-50 · `#F8F6FE` | `color/background/tertiary` |
| line & divider | primary | black 6% | `color/divider/primary` |
| | secondary | black 8% | `color/divider/secondary` |
| | tertiary | black 12% | `color/divider/tertiary` |
| | white | `#FFFFFF` | `color/divider/white` |
| accent | primary | red-500 · `#FF364B` | `color/accent/primary` |
| | secondary | blue-500 · `#589CF6` | `color/accent/secondary` |
| | tertiary | green-500 · `#1CCEA5` | `color/accent/tertiary` |
| gradient | primary | `#804EE2` → `#526ED3` | paint 스타일 `gradient/primary` |
| | secondary | `#00BB5A` → `#5978EA` | `gradient/secondary` |
| | tertiary | `#FF364B` → `#FF1493` | `gradient/tertiary` |
| background / banner | brand | purple-50 · `#F8F6FE` | `color/banner/brand` |
| | gray | coolgray-50 · `#F8F9FB` | `color/banner/gray` |
| | blue | blue-50 · `#F0F6FE` | `color/banner/blue` |
| | green | green-50 · `#EFFCF9` | `color/banner/green` |
| | yellow | yellow-50 · `#FFFBDF` | `color/banner/yellow` |
| | pink | red-50 · `#FFEFF1` | `color/banner/pink` |

가이드 밖 `_Semantic` 변수: `color/neutral/quinary` gray-200 `#EEEEEE` · `color/neutral/senary` coolgray-100 `#F0F1F3` · `color/neutral/septenary` coolgray-50 `#F8F9FB`, `opacity/black-*` · `opacity/white-*` (0 · 4 · 6 · 8 · 12 · 16 · 24 · 32 · 40 · 64 · 100%). 가이드 밖 paint 스타일: `gradient/quaternary` `#CF75FF` → `#805AE9`.

### Theme 변수 (가이드 밖 — 컴포넌트가 묶는 층)

| 묶음 | 변수 → 가리키는 곳 |
|---|---|
| `color/font` | primary → black · secondary → neutral/primary · tertiary → neutral/secondary · quaternary → neutral/tertiary · quinary → neutral/quaternary · placeholder → neutral/tertiary · brand → brand/primary · white · error → accent/primary · accent-red / accent-blue / accent-green → accent/primary · secondary · tertiary |
| `color/background` | primary → white · secondary → neutral/septenary · tertiary → brand/tertiary · quaternary → neutral/senary · brand → brand/primary · disabled → neutral/septenary · dimmed → opacity/black-64 |
| `color/border` | primary → black 6% · secondary → black 8% · tertiary → black 12% · default · disable → neutral/quaternary · focus · brand → brand/primary · error → accent/primary · black → black · white |
| `color/divider` | primary → black 6% · secondary → black 8% · tertiary → black 12% · brand → brand/primary · white |
| `color/icon` | primary → black · secondary → neutral/primary · tertiary → neutral/secondary · quaternary → neutral/tertiary · quinary → neutral/quaternary · senary → neutral/senary · brand · white · accent-red / accent-blue / accent-green · guide → accent/primary |
| `color/button` | primary → brand/primary · secondary → brand/secondary · tertiary → neutral/quaternary · quaternary → neutral/tertiary · quinary → neutral/septenary · white · pressed → black 12% |
| `color/label` | brand-primary(gradient) `#805AE9`(단색) · brand-secondary → brand/primary · brand-tertiary → brand/secondary · brand-quaternary → brand/tertiary · neutral-primary ~ neutral-quaternary → neutral/primary ~ quaternary · neutral-quinary → neutral/septenary · accent-red / blue / green · white |
| `color/banner` | brand · gray · blue · green · yellow · pink (위 표) · toast → neutral/primary `#333333` |
| `color/progress` | bar → neutral/quaternary · status → brand/primary |
| `opacity/pressed` | → black 6% |

hex 값은 위 표의 참조를 따라가면 되고, Storybook `tokens.css` 에 전부 있음.

### 사용 규칙

- **`color/brand/primary` (`#805AE9`)** 는 CTA 버튼과 핵심 강조에만 — 배경 전체에 깔거나 본문 텍스트에 사용 금지
- **`color/accent/primary` (red-500)** 는 오류·취소 같은 상태 표시 전용 — 장식 목적 사용 금지
- 화면·컴포넌트는 **Theme 변수** (`color/font/*`, `color/background/*` …) 를 묶음 — 팔레트(`color/gray/500` 등)를 직접 묶지 않음
- 배경은 `color/background/primary` (white) 기본, 섹션 분리는 `color/background/secondary` (coolgray-50)
- 정보 배너 배경은 `color/banner/*` — 팔레트 50 단계를 직접 쓰지 말 것
- 구분선은 모두 **black + alpha** (`color/divider/*`) — solid gray 직접 사용 금지
- 컬러 변수는 **임의로 추가·변경할 수 없습니다** (DS 공통 자산)

---

## Typography

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Typography 가이드 (node 296:3051) — 2026-10-22 가이드 기준으로 다시 맞춤

서체 또한 사용자와 커뮤니케이션하는 매우 중요 요소이므로, 정보의 목적과 기능에 따라 최적의 서체를 적용합니다.
이를 위해 특수한 경우를 제외하고 시스템(OS) 최적화 폰트를 적용하도록 합니다.

### Typeface

개발환경에 최적화 되도록 OS 기본 서체를 사용합니다. (단, 디자인 파일 및 가이드는 코나아이 지정 서체인 프리텐다드 폰트로 제작/공유합니다.)

| 플랫폼 | 국문 | 영문 / 숫자 |
|--------|------|-------------|
| Android | 노토산스 (Noto Sans KR) | Roboto |
| iOS | 애플네오고딕 (Apple SD Gothic Neo) | San Francisco |
| **웹 · 디자인 컨텐츠 전반** | Pretendard | Pretendard |

지원 굵기: **Regular (400)** / **Bold (700)** — 가이드 17종이 이 두 굵기만 씀.

### Font Size (가이드 17종)

일관된 브랜드 경험과 사용성을 유지하기 위해 아래 제시된 가이드 이외의 폰트 사용을 지양합니다.
스타일 이름은 Figma 텍스트 스타일 원본(대소문자 그대로), 설명은 가이드 Example 열 그대로.

| 스타일 | Value | size / lh / ls | 굵기 | 사용처 (가이드) |
|--------|-------|----------------|------|-----------------|
| `heading/1-bold` | 24 | 24 / 32 / -0.48 | Bold | 타이틀 및 서비스 중요 문구에 사용합니다. |
| `heading/1-regular` | 24 | 24 / 32 / -0.48 | Regular | 서비스 중요 문구에 사용합니다. |
| `heading/2-bold` | 20 | 20 / 28 / -0.40 | Bold | 버텀 팝업 타이틀과 서비스 중요 문구에 사용합니다. |
| `heading/2-regular` | 20 | 20 / 28 / -0.40 | Regular | 컨텐츠 타이틀 및 서비스 중요 문구에 사용합니다. |
| `heading/3-bold` | 18 | 18 / 26 / -0.36 | Bold | 본문 내 중요 문구와 타이틀 영역에 사용합니다. |
| `heading/3-regular` | 18 | 18 / 26 / -0.36 | Regular | 본문 내 시각적으로 중요 정보를 전달할 때 사용합니다. |
| `body/1-Bold` | 15 (base size) | 15 / 24 / -0.30 | Bold | 앱 전반에 사용되며, 본문 내 강조되는 문구에 사용합니다. |
| `body/1-regular` | 15 (base size) | 15 / 24 / -0.30 | Regular | 시스템 기본 폰트로 앱 전반에 적극적으로 사용합니다. |
| `body/2-bold` | 14 (base size) | 14 / 22 / -0.28 | Bold | 15 사이즈와 더불어 앱 전반에 기본 시스템 폰트로 사용합니다. |
| `body/2-Regular` | 14 (base size) | 14 / 22 / -0.28 | Regular | 15 사이즈와 더불어 앱 전반에 기본 시스템 폰트로 사용합니다. |
| `body/3-Bold` | 12 | 12 / 18 / -0.24 | Bold | 서비스 이용 안내 및 가이드 영역에서 적용되는 최소 폰트이지만, 적극적인 사용을 지양합니다. |
| `body/3-Regular` | 12 | 12 / 18 / -0.24 | Regular | 서비스 이용 안내 및 가이드 영역에서 적용되는 최소 폰트이지만, 적극적인 사용을 지양합니다. |
| `body/4-Bold` | 11 | 11 / 16 / -0.22 | Bold | 특수한 경우 뱃지와 태그에 사용할 수는 있으나 사용을 권장하지 않습니다. |
| `body/4-Regular` | 11 | 11 / 16 / -0.22 | Regular | 특수한 경우 뱃지와 태그에 사용할 수는 있으나 사용을 권장하지 않습니다. |
| `button/large-bold` | 15 | 15 / 24 / -0.30 | Bold | 페이지를 컨트롤하는 중요 액션 버튼에 적용합니다. |
| `button/medium-bold` | 14 | 14 / 22 / -0.28 | Bold | 본문 내 중요 액션 버튼에 적용합니다. |
| `button/small-bold` | 12 | 12 / 18 / -0.24 | Bold | 설명 및 가이드에 따른 액션 버튼에 적용합니다. |

> 규칙: letterSpacing 은 항상 `size × -0.02` (Figma `font/letterspacing/*` 변수).
> Storybook 토큰: `--text-heading-{1,2,3}-{bold,regular}` · `--text-body-{1..4}-{bold,regular}` · `--text-button-{large,medium,small}`

### Font 변수 (텍스트 스타일이 묶는 값)

텍스트 스타일 안의 값은 아래 `font/*` 변수에 묶여 있음. 화면에서는 변수를 직접 쓰지 말고 **텍스트 스타일**을 씀.

| 변수 | 값 |
|---|---|
| `font/family/body` · `font/family/heading` | pretendard |
| `font/weight/regular` · `bold` | 400 · 700 (`medium` · `semibold` 변수도 있으나 가이드 밖 — display medium 전용, KeyScreen 0곳) |
| `font/size/2xsmall · xsmall · small · medium · large · xlarge · 2xlarge` | 11 · 12 · 14 · 15 · 18 · 20 · 24 |
| `font/size/display/small · medium · large · xlarge` | 28 · 32 · 36 · 40 (가이드 밖) |
| `font/lineheight/2xsmall … 2xlarge` | 16 · 18 · 22 · 24 · 26 · 28 · 32 |
| `font/lineheight/display/small · medium · large · xlarge` | 36 · 40 · 44 · 50 |
| `font/letterspacing/*` | 글자 크기 × -0.02 (11 → -0.22 … 24 → -0.48) |

> **스타일 이름 대소문자는 Figma 원본 그대로** — `body/1-Bold` · `body/3-Bold` · `body/4-Bold` (대문자 B) / `body/2-bold` (소문자 b), `body/1-regular` (소문자 r) / `body/2-Regular` · `body/3-Regular` · `body/4-Regular` (대문자 R). 이름으로 찾을 때 주의.

### 가이드에 없는 등록 스타일 (참고)

Figma 에 텍스트 스타일로는 있지만 Typography 가이드 표에는 없는 것. 가이드 기준으로는 새 화면에 쓰지 않음.

| 스타일 | 값 | 현재 쓰임 (KeyScreen 보이는 텍스트, 2026-10-22) |
|---|---|---|
| `button/medium-regular` · `button/small-regular` · `button/tiny-regular` | 14/22 · 12/18 · 11/16 Regular | 234 · 245 · 116 — `button/button` secondary 내부 |
| `button/tiny-bold` | 11/16 Bold | 0 |
| `display/1~4-{bold, medium, regular}` (12) | 40/50 · 36/44 · 32/40 · 28/36 | display/4-bold 81 · 1-regular 15 · 1-bold 10 · 3-bold 9 · 4-regular 1, 나머지 0 (Medium 4종 모두 0) |
| `guide/detail-size` · `guide/token-bold` · `guide/token-regular` | 10/16 · 13/20 | DS 가이드 문서 작성용 |

### 사용 규칙

- **모든 텍스트 노드는 DS 텍스트 스타일 키로 설정합니다** — `figma.importStyleByKeyAsync` 사용
- fontSize / fontName / lineHeight / letterSpacing **직접 지정 금지** (스타일이 모든 값을 캡슐화)
- Roboto·Apple SD Gothic Neo 등 OS 폰트가 컴포넌트 내부에 남아 있으면 **반드시 DS 스타일로 교체**
- weight는 Regular(400) / Bold(700) **2종만** 사용 — Medium·SemiBold 등 직접 입력 금지
- 기본 본문은 `body/1-regular` · `body/2-Regular` (15 · 14 base size) — 12 이하(body/3 · body/4)는 안내·가이드 영역 최소 폰트로 적극 사용 지양
- 가이드 17종 밖의 스타일(display · button regular 등)은 새 화면에 쓰지 않음

---

## Spacing

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Spacing 가이드 (node 296:3057) — 2026-11-04 가이드 기준으로 다시 맞춤

여백(Spacing)은 정보를 체계적으로 구조화하는 중요한 역할을 합니다. 잘 계획된 여백을 통해 정보를 체계적으로 그룹화하여 사용자가 쉽고 빠르게 정보를 인지할 수 있도록 지원합니다.

스페이싱의 기본 단위는 **4와 8배수**를 기반으로 사용하며, 금융 앱의 특성으로 **최소 2dp(pt) 여백**을 허용합니다.

> 가이드 표기(`$spacing-small` 등)와 Figma 변수 이름(`spacing/small` 등)이 다름. 아래 표는 둘 다 적음.

### Layout Margin

- 코나카드 앱은 컨텐츠 몰입도를 위해 **디바이스 양쪽 여백을 20dp(pt)로 동일하게** 적용합니다.
- 변수 `layout/margin` → `spacing/large` (20px) — **변경 불가**
- 콘텐츠 가용 영역(Device Flexible Area): `360 - 20 × 2 = 320px`

### Spacing Scale

| 가이드 토큰 | Figma 변수 | 값 (px) | 용도 (가이드 문구) |
|------|------|--------:|------|
| `$spacing-none` | `spacing/none` | 0 | 컨텐츠 간격이 없을 때 사용합니다. |
| `$spacing-3xsmall` | `spacing/3xsmall` | 2 | 컨텐츠 사이 간격이 매우 좁은 경우에 적용합니다. |
| `$spacing-2xsmall` | `spacing/2xsmall` | 4 | 컨텐츠 사이 좁은 간격에 적용합니다. |
| `$spacing-xsmall` | `spacing/xsmall` | 8 | 일반적인 컨텐츠 간격에 적용합니다. |
| **`$spacing-small`** | `spacing/small` | **12** *(base size)* | 컨텐츠와 컨텐츠 사이 구분이 필요한 경우 적용합니다. |
| `$spacing-medium` | `spacing/medium` | 16 | 컨텐츠와 그룹을 구분할 경우에 적용합니다. |
| **`$spacing-large`** | `spacing/large` | **20** *(layout margin)* | 레이아웃 마진에 공통으로 적용합니다. (변경불가) |
| **`$spacing-xlarge`** | `spacing/xlarge` | **24** *(base size)* | 컨텐츠와 본문 사이 여백으로 활용합니다. |
| `$spacing-2xlarge` | `spacing/2xlarge` | 32 | 컨텐츠와 본문 사이 넓은 여백으로 활용합니다. |
| `$spacing-3xlarge` | `spacing/3xlarge` | 40 | 그룹의 명확한 구분이 필요한 경우 넓은 여백으로 활용합니다. |

**Display** — 가이드 밖, Figma 변수에만 있는 큰 여백:

| Figma 변수 | 값 (px) |
|------|--------:|
| `spacing/display/medium` | 48 |
| `spacing/display/large` | 60 |
| `spacing/display/xlarge` | 80 |
| `spacing/display/2xlarge` | 120 |

### 사용 규칙

- `spacing/large` (20) — **레이아웃 마진 변경 불가**. 화면 좌우 패딩은 항상 20px.
- **Base size**는 `spacing/small` (12) 와 `spacing/xlarge` (24) — 디자인 시 우선 후보로 사용
- 헤드라인 상·하 padding 24px 은 `spacing/xlarge` (예전 `layout/margin-top` 변수는 삭제됨)
- 임의의 픽셀 값(예: `7px`, `13px`) 직접 입력 금지 — 반드시 토큰 참조

---

## Radius

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Radius 가이드 (node 481:3296) — 2026-10-23 가이드 기준으로 다시 맞춤

일관된 패턴과 가이드는 사용자가 빠르게 정보를 인지할 수 있도록 돕고, 서비스 전반에 예측 가능한 사용성을 제공합니다.
아래 정의된 컴퍼넌트 가이드를 준수하여 일관된 사용성을 유지할 수 있도록 합니다.

토큰 열은 가이드 표기 그대로, 괄호 안은 실제 Figma 변수 이름. 설명은 가이드 Example 열 그대로.

### Radius

코너 라운드는 2와 4 배수를 기반으로 적용하며 최대 반원을 적용할 수 있습니다.

| 토큰 (Figma 변수) | Value | 사용처 (가이드) |
|------|------|------|
| `$radius-2xsmall` (`radius/2xsmall`) | 4px | 최소 버튼에 적용합니다. |
| `$radius-xsmall` (`radius/xsmall`) | 6px | 입력폼과 본문 내 적용되는 버튼에 적용합니다. |
| `$radius-small` (`radius/small`) | 8px | 페이지를 컨트롤하는 중요 액션 버튼에 적용합니다. |
| `$radius-medium` (`radius/medium`) | 12px (base size) | 본문 내 박스형 컨텐츠에 적용합니다. |
| `$radius-large` (`radius/large`) | 16px | 팝업에 적용합니다. |
| `$radius-xlarge` (`radius/xlarge`) | 24px (base size) | 버텀시트 팝업에 주로 적용합니다. |
| `$radius-2xlarge` (`radius/2xlarge`) | 32px | 홈 메인 상단/하단 구분하는 박스에 활용 |
| `$radius-round` (`radius/round`) | 50% (변수 값 9999) | 레이블과 라운드 버튼에 적용합니다. |

일관된 디자인과 사용성을 유지하기 위하여 아래 제시된 영역은 동일한 가이드를 적용합니다.

### Buttons

| 토큰 (Figma 변수) | Reference token | Value | 사용처 (가이드) |
|------|------|------|------|
| `$radius-button-large` (`radius/button/large`) | `$radius-small` | 8px | 페이지를 컨트롤하는 중요 액션 버튼에 적용합니다. |
| `$radius-button-medium` (`radius/button/medium`) | `$radius-xsmall` | 6px | 본문 내 중요 액션 버튼에 적용합니다. |
| `$radius-button-small` (`radius/button/small`) | `$radius-2xsmall` | 4px | 설명 및 가이드에 따른 액션 버튼에 적용합니다. |
| `$radius-button-round` (`radius/button/round`) | `$radius-round` | 50% | 라운드형 버튼에 적용합니다. |

### Layout

| 토큰 (Figma 변수) | Reference token | Value | 사용처 (가이드) |
|------|------|------|------|
| `$radius-form` (`radius/components/form`) | `$radius-xsmall` | 6px | 입력폼에 적용합니다. |
| `$radius-contents` (`radius/components/box-contents`) | `$radius-medium` | 12px | 컨텐츠에 적용합니다. |
| `$radius-toast` (`radius/components/toast`) | `$radius-medium` | 12px | 토스트 팝업에 사용합니다. |
| `$radius-popup` (`radius/components/popup`) | `$radius-large` | 16px | 팝업에 적용합니다. |
| `$radius-bottomsheet` (`radius/components/bottomsheet`) | `$radius-xlarge` | 24px | 버텀시트 팝업에 적용합니다. |
| `$radius-label` (`radius/components/label`) | `$radius-round` | 50% | 라벨에 적용합니다. |

> Storybook 토큰: `--radius-{2xsmall … round}` · `--radius-button-{large,medium,small,round}` · `--radius-components-{form,box-contents,toast,popup,bottomsheet,label}`

### 가이드에 없는 Figma 변수 (참고)

| 변수 | 값 | 비고 |
|---|---|---|
| `radius/none` | 0 | |
| `radius/components/form-small` | 4 (= 2xsmall) | |
| `radius/components/box-button` | 8 (= small) | card-select 등 박스형 버튼 |
| `radius/components/box-info` | 8 (= small) | Banner · Bubble tooltip |
| `radius/components/box-container` | 24 (= xlarge) | |
| `radius/banner/{small, medium, large, xlarge}` | 8 · 12 · 16 · 24 | 값이 radius 가 아닌 spacing 변수(spacing/xsmall · small · medium · xlarge)를 가리킴 |

### 사용 규칙

- Radius 적용 시 항상 **Buttons · Layout 토큰**(`radius/button/*`, `radius/components/*`)을 우선 사용 — 스케일 토큰 직접 사용은 해당 토큰이 없는 경우에만
- Figma에서는 **variable 바인딩** (`setBoundVariable("topLeftRadius", v)` 등)으로 적용 — `node.cornerRadius = N` 직접 지정 금지
- 바텀시트는 **상단 두 코너만** 24px (좌우 하단은 0)
- `radius-round` 은 height의 절반 이상으로 적용되어 항상 반원 형태가 되도록 함 (`9999px` 또는 `50%`)

---

## Elevation & Depth

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Elevation 가이드 (node 1438:5158) — 2026-11-04 가이드 기준으로 다시 맞춤

가이드 제목은 **Elevation (웹용)** — 그림자는 **웹에만 적용**하고 앱 화면에는 쓰지 않습니다 (가이드 문구: "웹에만 적용 · 가이드 정리 후 적용 예정").

### Shadow (웹)

effect 스타일 `elevation/*`. 색은 모두 검정(#000), x · y · blur · spread 는 `elevat/*` 변수에 묶여 있음.

| 가이드 토큰 | Figma 스타일 | type | x | y | blur | spread | 색 |
|------|------|------|--:|--:|--:|--:|------|
| `$shadow-pressed` | `elevation/shadow-pressed` | inner | 0 | 2 | 4 | 0 | #000 8% |
| `$shadow-button` | `elevation/shadow-button` | drop | 0 | 4 | 4 | 0 | #000 4% |
| `$shadow-navigation` | `elevation/shadow-navigation` | drop | 0 | 4 | 8 | 0 | #000 8% |
| `$shadow-card` | `elevation/shadow-card` | drop | -2 | 24 | 32 | 4 | #000 8% |
| `$shadow-deep` | `elevation/shadow-deep` | drop | -2 | 24 | 32 | 4 | #000 16% |
| `$shadow-active` | `elevation/shadow-active` | drop | 0 | 16 | 24 | 2 | #000 8% |

**`elevat/*` 변수** (Theme 컬렉션): `none` 0 · `inset` -2 · `thin` 2 · `light` 4 · `regular` 8 · `medium` 16 · `semibold` 24 · `bold` 32 · `extrabold` 40 (extrabold 는 스타일에서 안 씀)

Storybook 토큰: `--elevation-shadow-{pressed, button, navigation, card, deep, active}` (CSS `box-shadow` 값)

### 앱의 계층 표현 (가이드 밖)

KONACARD **앱** 은 그림자 대신 배경색·구분선·오버레이로 계층을 표현합니다.

| 용도 | 적용 |
|------|------|
| 카드/정보 박스 | 배경색 차이로 구분 (`background/secondary` #F8F9FB vs `white`) |
| 팝업 | 오버레이(`color/background/dimmed` 64%, `bg-dimmed`) + `radius/components/popup` (16px) |
| 구분선 | `divider` 컴포넌트 (black 6% opacity) |
| 바텀시트 | 상단 radius 24px, 오버레이 |

---

## Opacity

| 변수 | 값 | 용도 |
|---|---|---|
| `opacity/visible` | 100 | 완전 불투명 |
| `opacity/invisible` | 0 | 완전 투명 |
| `opacity/disable/button` | 40 | 버튼 · 컨트롤 비활성 = 기본 모양 × 40% |
| `opacity/pressed` (Theme 색 변수) | black 6% | 누름 상태 덮개 |
| `opacity/black-*` · `opacity/white-*` (_Semantic 색 변수) | 0 · 4 · 6 · 8 · 12 · 16 · 24 · 32 · 40 · 64 · 100% | 구분선 · 딤 등이 참조 |
