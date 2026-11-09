# Figma 제작 가이드 (Plugin API 실무)

> Figma 에서 KONACARD 화면을 **어떻게 만드는지** — 레이어 구조, 컴포넌트 우선 원칙, 컴포넌트별 메모, 코드 예시.
> 2026-11-09 `konacard-ds-foundation.md` 에서 옮겨 옴 (토큰 문서는 값만 남김).
> - 무엇을 그릴지(화면 성격 · 패턴 · 하지 말 것) → `konacard-ds-rule.md`, 프레임 · hug · 아이콘 import 기본 규칙 → 같은 문서 § "Figma 작업 규칙"
> - 토큰 값 → `konacard-ds-foundation.md`, 컴포넌트 키 · variant → `components.catalog.json`

---

## 화면 레이아웃

### 화면 프레임

- **기본 크기: 360 × 800px** (AOS 기준)
- 콘텐츠가 800px를 초과하는 경우에만 높이를 늘립니다
- 너비는 항상 **360px 고정**

### 그리드 & 패딩

> 간격 값은 `konacard-ds-foundation.md` § Spacing 토큰.

| 속성 | 값 | 토큰 |
|------|----|------|
| 화면 좌우 패딩 | `20px` | `layout/margin` (= `spacing-large`, 변경불가) |
| 콘텐츠 영역 너비 | `320px` | `360 - layout/margin × 2` |
| 필드 묶음(라벨+입력창) 간 세로 간격 | `32px` | `spacing-2xlarge` |
| 필드 묶음 내부 간격 (라벨↔입력창·입력창↔입력창·입력창↔안내문구) | `8px` | `spacing-xsmall` |
| 입력 영역 padding (상 / 하) | `24px` / `40px` | `spacing-xlarge` / `spacing-3xlarge` |
| 섹션 내부 콘텐츠 padding | `24px` | `spacing-xlarge` |
| 리스트 아이템 높이 (`list/list` 한 줄, 설명 숨김 기준) | large `65px` / medium `55px`(link) — 설명 켜면 87 / 71 | — (상·하 padding large 12 / medium 16 + 내용 + divider 1) |

### 화면 레이어 구조 (항상 이 순서)

```
wrapper (360×800, white)
└─ Layout [VERTICAL auto-layout, FILL, gap=0]
    ├─ OS/status-bar          h=24px  Color=Black, Type=AOS (어두운 화면은 Color=White)
    ├─ action-bar/header      h=56px  고정 높이
    ├─ [content area]         h=HUG   화면별 콘텐츠
    └─ button/fixed-bottom    h=72px  (필요 시)
```

> Radius 토큰은 `konacard-ds-foundation.md` § Radius.

---

## Component-First Principle

> **이 원칙은 DS의 가장 강한 규칙입니다.** 컬러·타이포·간격·radius 토큰보다도 먼저 적용됩니다.
> 직접 만든 요소(custom frame, autoLayout, vector)는 DS 컴포넌트로 표현할 수 있다면 항상 거기에 양보합니다.

### 왜 컴포넌트 우선인가

- **일관성** — 모든 화면이 같은 인스턴스를 공유하므로 디자인 업데이트가 자동 반영됨
- **유지보수** — DS 컴포넌트 1곳 수정으로 모든 화면이 갱신
- **속도** — 직접 그리는 시간보다 import + 슬롯 채우기가 훨씬 빠름
- **품질** — DS 컴포넌트는 이미 토큰, variant, state, padding이 정합되어 있음

### 화면 제작 시 필수 워크플로

화면 작업을 시작하기 전, 또는 새 UI 요소를 추가할 때마다 다음 순서를 따릅니다.

```
1. DS 파일(${FIGMA_DS_FILE_KEY})을 먼저 검색한다.
   ├─ 02_Components 페이지에서 키워드로 COMPONENT_SET / COMPONENT 탐색
   ├─ 04_Image 페이지에서 아이콘·로고 탐색
   └─ 매칭되는 컴포넌트가 있으면 → components.catalog.json 에서 키 확보 후 import
      (search_design_system 은 사용 중단된 NEW 파일을 돌려주므로 키 조회에 쓰지 않음)
2. variant 옵션(size / type / state)이 요구사항을 커버하는지 확인.
3. 컴포넌트의 내부 슬롯(텍스트·아이콘 슬롯, instance swap)을 활용해
   characters / componentProperties / setProperties 만으로 커스터마이즈.
4. DS에 정말로 없을 때만 autoLayout / custom frame 사용 — 단 내부 요소
   (텍스트 스타일, 아이콘, divider, 라벨, 칩, 색)는 여전히 DS 자산을 사용해야 함.
5. 새 UI 패턴이 반복되면 DS에 컴포넌트로 등록할 후보로 보고하기.
```

### 영역별 우선 매칭 (자주 쓰는 컴포넌트)

새 화면을 만들 때 다음 표를 먼저 참조하세요. 비슷한 영역을 직접 만들기 전에 DS 컴포넌트로 처리 가능한지 확인.

| 만들려는 UI | DS 컴포넌트 | 비고 |
|------------|-------------|------|
| 상태바 | `OS/status-bar` (Color=Black · White × Type=AOS · iOS · iOS_notch · Address-Bar) | 모든 화면 최상단 — AOS 24px. 어두운 화면은 Color=White |
| 페이지 헤더 (back/title/right action) | `action-bar/header` (type=main/page_icon/page_button) | 56px 고정, FILL width |
| 본문 헤드라인 (타이틀+서브) | `heading/headline` (구 action-bar/headline — 단일, 보조 문구는 `sub text` 켜고 끄기 + `sub`) | 직접 만든 heading + sub 텍스트 조합 금지 |
| 검색 입력 | `input` style/case=search bar (state 6종) | 검색 아이콘·clear 아이콘 내장 |
| 일반 입력 | `input` style/case=text field · text area · button · card-number · registration number (title · info · timer boolean) | 용도별로 style/case 만 바꿔 씀 |
| 카테고리/서브 탭 | `tab/sub-ui`, `tab/Sub` | 7개 sub-tab 슬롯 내장. **Tabs 정리 중** (정리안 v2: `tab/chip`) |
| 메인 탭 | `tab/main-full` (+ `tab/main`) | **Tabs 정리 중** (정리안 v2: `tab/line`, 세그먼트는 `tab/segment`) |
| 리스트 행 | `list/list` (size, type=link/button/control), `list/menu`, `list/card-select`, `list/benefit-store` 등 | 구분선 내장 |
| 확장 가능 행(아코디언) | `accordion` (header + body 묶음 · size × type=list/inquiry × state) · `accordion/header` · `accordion/body` | 구 list/expand · expand-open. 본문만 쓸 땐 accordion/body |
| 결제·혜택 행 | `list/payment`, `list/benefit`, `list/benefit-store` | |
| 본문 타이틀(섹션 제목) | `heading/section` (구 title/title — size=large/medium/small, title) | h2 텍스트 직접 입력 금지 |
| 입력칸 위 라벨 | `input/label` (구 title/title Type=Input — label) | 입력칸 · select 하나 위는 그 컴포넌트의 `title` 켜기. 여러 칸 묶음 · select button group · radio · 약관 위에만 단독 사용 |
| 가격·정보 텍스트 그룹 | `info/text-title` | |
| 태그·라벨 칩 | `label` (구 label/basic-label — size, type=color/line, color=brand-gradient/brand/brand-light/gray-dark/warning/gray-light, line 은 3색·tiny 없음) | 직접 cornerRadius+fill로 칩 만들지 말 것 |
| 배지 (점/숫자/new) | `badges/badge` (type=dot/new/num-min/num-max) | |
| CTA 버튼 | `button/button` (style=primary · secondary × size × type) | primary large 56 · medium 48 |
| 하단 고정 버튼 | `button/fixed-bottom` (Device=AOS · iOS) | h=72px |
| 선택 버튼 (보이는 선택지 중 하나 고르기) | `select/select button` (state=default/selected · status), `select/select button group` (columns=2/3/4) | 옛 button/select · select-2line 은 삭제 |
| 아이콘 (배경 약함) | `input/icon`, `input/icon-pass`, `input/bullet` | |
| 얇은 가로 구분선 | `divider` type=solid · dotted (color=light/dark, 1px) | 구 line/solid · line/dotted |
| 두꺼운 섹션 구분 | `divider` type=section (h=10px) | 구 line/divider |
| 수직 구분선 | `divider` type=vertical-12 · vertical-8 | 구 line/divider-line |
| 박스 컨테이너(혜택/카드) | `list/card`, `info-contents`, `list/card-select` | |
| 바텀시트 행 | `list/bottomsheet` (size, type=basic/country/country_flag) | |
| 카드 디자인 | `list/card` | |
| 아이콘 (모든 크기) | `04_Image` 페이지의 `ic_16` ~ `ic_56`, `ic_arrow`, `icn_20` | 직접 vector 그리기 절대 금지 |
| 브랜드 로고 (GS25, CU 등) | `04_Image` 페이지 — 브랜드별 단일 COMPONENT | rescale로 크기 조정 |

> **이 표는 자주 쓰는 항목만 정리한 인덱스입니다.** 빠진 영역이 있더라도 "직접 만든다" 전에 반드시 DS 파일을 검색하세요.

### 안티패턴 (절대 금지)

```js
// ❌ 검색바를 직접 그리기
const search = figma.createFrame(); search.cornerRadius = 6; ...

// ❌ 카테고리 칩을 직접 만들기
const chip = figma.createAutoLayout("HORIZONTAL", { cornerRadius: 9999, ... });

// ❌ 구분선을 rectangle + opacity로 만들기
const line = figma.createRectangle();
line.fills = [{ type: "SOLID", color: {r:0,g:0,b:0}, opacity: 0.06 }];

// ❌ 아이콘을 ellipse + line 으로 그리기
const c = figma.createEllipse(); const l = figma.createLine();

// ❌ 헤딩+서브 텍스트를 두 개의 TEXT 노드로 직접 조합
const h = figma.createText(); const sub = figma.createText();
```

### 올바른 패턴

```js
// ✅ 컴포넌트를 import해서 인스턴스로 사용 (키는 components.catalog.json 에서 확보)
const inputSet = await figma.importComponentSetByKeyAsync(
  "<input 세트 key — components.catalog.json>"
);
const search = inputSet.children
  .find(v => v.name.includes("style/case=search bar") && v.name.includes("state=default"))
  .createInstance();
parent.appendChild(search);
search.layoutSizingHorizontal = "FILL";
// 내부 텍스트 슬롯만 교체
search.findOne(n => n.type === "TEXT").characters = "브랜드명으로 검색";

// ✅ variant 전환은 setProperties 사용
buttonInstance.setProperties({ size: "medium", type: "gray" });

// ✅ ComponentSet 인 경우 importComponentSetByKeyAsync 사용
const dividerSet = await figma.importComponentSetByKeyAsync(
  "<divider 세트 key>"
);
const line = dividerSet.children.find(v => v.name === "type=solid, color=light").createInstance();
```

### 검색 헬퍼

DS에서 컴포넌트를 빠르게 찾을 때 사용할 수 있는 스니펫:

```js
// 02_Components 페이지에서 키워드로 매칭되는 컴포넌트 찾기
const page = await figma.getNodeByIdAsync("17:827"); // 02_Components
await figma.setCurrentPageAsync(page);
const keywords = ["search", "tab", "list", "label", "divider"]; // 원하는 키워드
const found = [];
page.findAll(n => {
  if ((n.type === "COMPONENT_SET" || n.type === "COMPONENT")
      && keywords.some(k => n.name.toLowerCase().includes(k))) {
    found.push({ name: n.name, type: n.type, id: n.id, key: n.key });
  }
  return false;
});
return found;
```

---

## 컴포넌트별 제작 메모

### action-bar/header

헤더는 **항상 56px 고정 높이**입니다. HUG 설정 금지. (Header 정리 중 — variant 이름은 바뀔 수 있음)

| variant | 특성 |
|---------|------|
| `type=main` | 타이틀 텍스트 없음 |
| `type=page_icon` | 중앙 타이틀 텍스트 있음 ("Page title") |
| `type=page_button` | 타이틀 + 우측 버튼 |
| `type=old` | "Main text" 레이블 있음 |

```js
// 올바른 헤더 생성 패턴
const hdr = headerVariant.createInstance();
parent.appendChild(hdr);
hdr.layoutSizingHorizontal = 'FILL';
hdr.layoutSizingVertical = 'FIXED';
hdr.resize(hdr.width, 56);  // 반드시 56px 강제 지정
```

### heading/headline

단일 컴포넌트(variant 없음). 텍스트 내용에 따라 높이가 달라지므로 **HUG**, 폭은 화면에 맞춰 **FILL**로 설정합니다.

```js
headline.layoutSizingHorizontal = 'FILL';
headline.layoutSizingVertical = 'HUG';
```

보조 문구 켜기 (속성 이름 뒤 `#id` 는 파일마다 다르므로 앞부분으로 찾음):
```js
const keys = Object.keys(headline.componentProperties);
headline.setProperties({
  [keys.find(k => k.startsWith('sub text'))]: true,
  [keys.find(k => k.startsWith('sub#'))]: '보조 문구',
});
```

주 문구 강조 구절 — fill 만 `color/font/brand` 로 (폰트는 건드리지 않음):
```js
headline.findOne(n => n.name === 'headline').setRangeFills(start, end, [{ type: 'SOLID', color: C.brand }]);
```

### button/fixed-bottom

하단 고정 버튼 (h=72px). 내부에 좌/우 두 버튼 슬롯이 있습니다.

| 슬롯 | ID suffix | 용도 |
|------|-----------|------|
| 좌측 (보조) | `869:4615` | 취소/건너뛰기 (gray) |
| 우측 (주요) | `17:1037` | 확인/완료 (brand) |

단일 버튼 시나리오: 좌측 `visible=false`, 우측만 표시

### list/list

리스트 아이템의 기본 단위. 구분선이 컴포넌트 내장되어 있으므로 별도 divider 추가 불필요.

```
list [VERTICAL, itemSpacing=0]
└─ list/list size=large, type=link/control (h=65) × N   ※ size=medium link는 h=55
   └─ 내장 구분선 (하단)
```

### divider

- 세트 하나: `type` = solid · dotted (1px) · section (10px 띠) · vertical-12 · vertical-8 × `color` = light · dark — `importComponentSetByKeyAsync` 사용, 키는 카탈로그
- 구 `line/solid` · `line/dotted` · `line/divider` · `line/divider-line` 를 합친 것

---

## Icons

아이콘은 DS 파일(`${FIGMA_DS_FILE_KEY}`)의 `04_Image` 페이지에서 가져옵니다.

**직접 그리기 절대 금지** — Rectangle/Vector/Ellipse로 아이콘을 만드는 것은 허용되지 않습니다.

| 카테고리 | 크기 | 대표 아이콘 |
|---------|------|------------|
| `ic_16/` | 16×16 | ic_time_16_w, ic_select_on_16 |
| `ic_20/` | 20×20 | ic_notice_20_gr, ic_card_20 |
| `ic_24/` | 24×24 | **ic_back_24**, ic_close_24, ic_alarm_24 |
| `ic_32/` | 32×32 | ic_main_cardregist |
| `ic_40/` | 40×40 | ic_plus_40, ic_cancel_40 |
| `ic_45/` | 45×45 | ic_complete_45, ic_caution_45 |
| `ic_56/` | 56×56 | ic_complete_brand_56 |
| `ic_arrow/` | 14×14 | **ic_arrow_right_14** (검정/회색/흰색) |
| `icn_20/` | 20×20 | outline 스타일 아이콘 |
| `img_*` | 다양 | 일러스트, 브랜드 로고 |

크기 조정 시:
- **auto-layout 기반 컴포넌트** → `resize(w, h)` 가능
- **절대 배치 내부 요소 포함 컴포넌트** → 반드시 `rescale(factor)` 사용

---

## Do's and Don'ts

### ✅ Do

1. **DS 컴포넌트를 import해 인스턴스로 사용** — `figma.importComponentByKeyAsync()` 또는 `importComponentSetByKeyAsync()`
2. **Pretendard 폰트를 스크립트 시작 시 모두 preload** — 텍스트 조작 전 필수
3. **TEXT 노드에 `textAutoResize = 'HEIGHT'` 설정** — 기본값 `'NONE'`은 내용이 잘림
4. **radius는 variable 바인딩** — `setBoundVariable()`로 DS variable 적용
5. **action-bar/header 너비를 `resize(360, 56)`으로 명시 지정** — 기본값이 360이 아닐 수 있음
6. **TEXT 노드에 `layoutSizingHorizontal = 'FILL'` 대신 명시적 픽셀 너비** — FILL은 FRAME에만 안전

### ❌ Don't

1. **폰트 직접 지정** (`node.fontSize = 14`, `node.fontName = {...}`) — DS 스타일 키 사용
2. **아이콘 직접 생성** (Rectangle, Vector, Ellipse) — DS 아이콘 컴포넌트 import
3. **action-bar/header에 HUG** — 항상 56px 고정
4. **radius 직접 지정** (`node.cornerRadius = 12`) — DS variable 바인딩
5. **`layoutSizingVertical = 'HUG'`를 Instance 노드에 설정** — 오류 발생. auto-layout frame이나 TEXT 노드에만 가능
6. **`resize()` 전에 `textAutoResize` 설정** — `resize()`가 `'NONE'`으로 리셋함

---

## 주요 패턴 코드

### TEXT 노드 생성 (makeText 패턴)

```js
async function makeText(styleKey, color, width, chars) {
  const style = await figma.importStyleByKeyAsync(styleKey);
  const t = figma.createText();
  t.textStyleId = style.id;
  t.fills = [{ type: 'SOLID', color }];
  t.resize(width, 20);          // 1. 너비 고정
  t.characters = chars;          // 2. 내용 설정
  t.textAutoResize = 'HEIGHT';   // 3. resize() 이후에 설정
  return t;
}
```

### 화면 wrapper + Layout 생성

```js
const wrapper = figma.createFrame();
wrapper.name = '#SCREEN_NAME KONACARD DS';
wrapper.resize(360, 800);
wrapper.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

const layout = figma.createFrame();
layout.name = 'Layout';
layout.layoutMode = 'VERTICAL';
layout.primaryAxisSizingMode = 'AUTO';
layout.counterAxisSizingMode = 'FIXED';
layout.itemSpacing = 0;
layout.fills = [];
wrapper.appendChild(layout);
layout.resize(360, 10);
layout.layoutSizingHorizontal = 'FILL';
```

### list/list 나열

```js
const listSet = await figma.importComponentSetByKeyAsync('<list/list 세트 key — components.catalog.json>');
const listVariant = listSet.children.find(c => c.name === 'size=large, type=link');

const listFrame = figma.createFrame();
listFrame.layoutMode = 'VERTICAL';
listFrame.itemSpacing = 0;  // 구분선은 컴포넌트 내장
listFrame.primaryAxisSizingMode = 'AUTO';
listFrame.fills = [];

for (const item of items) {
  const inst = listVariant.createInstance();
  listFrame.appendChild(inst);
  inst.layoutSizingHorizontal = 'FILL';
  // 타이틀 텍스트 설정
  inst.findOne(n => n.type === 'TEXT' && n.name === 'title').characters = item.label;
}
```
