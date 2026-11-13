> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

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


