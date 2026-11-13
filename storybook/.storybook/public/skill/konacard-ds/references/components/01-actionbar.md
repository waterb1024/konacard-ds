> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

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


## 01_Actionbar 카테고리 종합 안티패턴

- ❌ **높이 56 외의 값** (48/64 등) — 반드시 Fixed 56
- ❌ **좌우 padding 20 외의 값** — layout/margin 고정
- ❌ **AOS↔iOS 헤더 혼용** — 플랫폼별 빌드에서 하나만
- ❌ 헤더에 그림자·아웃라인 (배경 상속 원칙과 충돌) — Scroll Title 스크롤 시 divider만 예외적 허용
- ❌ Main 유형과 Sub 유형을 한 화면에서 동시 노출 (탭·모달 내부 헤더 등)


