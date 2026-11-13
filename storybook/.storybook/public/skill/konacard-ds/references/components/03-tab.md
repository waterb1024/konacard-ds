> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

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


## Main vs Sub 사용 매핑

| 상황 | 사용 tab | 이유 |
|---|---|---|
| 화면 최상단 최대 3개 카테고리 (짧은 이름) | Main - Basic (2·3 Tab) | 균등 분할 + 명확한 강조 |
| 화면 최상단 4개 이상 or 긴 이름 카테고리 | Main - Multi | 스크롤 대응 |
| 카드/상품 상세 내부 세부 탭 (혜택·이용내역·설정) | Sub tab | Main tab과 시각적으로 구분되는 하위 계층 |
| 필터·정렬 옵션 (선택 시 즉시 반영) | Sub tab | pill 스타일의 필터 관례 |
| 필드형 옵션 선택 (폼 내부) | 03_Tab 대신 `05_Control` Radio 또는 `04_Forms` Select 사용 | 폼 컨트롤과 탭은 분리 |


## 03_Tab 카테고리 종합 안티패턴

- ❌ **한 화면에 Main tab 여러 개** (반드시 1개)
- ❌ **Main과 Sub의 스타일 혼용** (밑줄 + pill 조합 금지)
- ❌ 탭 안에서 텍스트만 좌측 정렬 (Text는 항상 세로 중앙 + 가로 중앙)
- ❌ 텍스트 폭이 넘칠 때 자간·글자 크기 축소로 억지로 우겨넣기 (Multi로 전환하거나 `...` 처리)
- ❌ Select bar 색을 브랜드 보라 외로 변경 (강조 색 통일 원칙 위배)


