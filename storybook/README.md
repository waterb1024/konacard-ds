# KONACARD DS — Storybook

React + Vite + Storybook 8 로 실행되는 KONACARD 디자인 시스템 스토리북.

---

## ⚠️ 진실의 소스: **Figma 파일** (dHJa65PGtCQHq2n4qgL9Z9 -AX- KONACARD)

**컴포넌트를 새로 만들거나 수정할 때 반드시 지킬 규칙**. 예외 없음.

1. **모든 값은 Figma 에서 뽑는다.** height · padding · radius · font-size · line-height · letter-spacing · color hex · gap · border 두께 · disabled 처리 방식 등 **전부**. 눈대중·비슷한 컴포넌트 참조·기억으로 짐작하지 말 것.
2. **문서 (`konacard-ds-components.md`, `konacard-ds-foundation.md`) 는 참고용**이고, Figma 와 어긋나면 **Figma 를 따른다**. 문서는 나중에 정정.
3. Figma 값 추출 순서 (한 컴포넌트당):
   1. `get_context_for_code_connect` 로 property 구조 확보
   2. `get_metadata` 로 variant 별 실제 픽셀 크기 확인
   3. `get_design_context (disableCodeConnect=true)` 로 실제 CSS 값·토큰명·색 hex 뽑기 — 대표 variant 몇 개(사이즈별 · state=true/false · 색 계열별) 반드시 조회
   4. SVG 아이콘은 `imgVectorXXX` URL 을 curl 로 다운로드해서 실제 path 확인
4. **미확인 값은 코드에 넣지 말 것.** 확인 못 한 variant 는 매핑에서 skip 하거나 코드에 명시적으로 "미구현" 처리.
5. **아이콘·화살표·마크 등 벡터 그래픽은 반드시 Figma 파일의 원본 SVG 를 그대로 사용한다.** 절대 자기 스타일로 새로 그리지 말 것.
   - `get_design_context (disableCodeConnect=true)` 응답에 `imgVectorXXX`·`imgUnion` 등 SVG asset URL 이 나옴 → curl 로 다운로드하여 실제 path 추출
   - 컨테이너 크기(예: `w-[8px] h-[14px]`) 와 내부 마크의 inset (예: `left-1/4 right-[12.5%]`) 까지 그대로 옮겨야 함
   - 브랜드 컬러가 텍스트와 다른 톤일 수 있으므로 (예: type=black 텍스트 #000 · chevron #333) 아이콘 색은 별도 매핑 확인
6. **Storybook 스토리로 시각 검증** — 각 사이즈·색·state 매트릭스 스토리를 반드시 추가해서 눈으로 Figma 와 대조.
7. Figma-코드 정합성 검증을 요청받으면, **위 절차를 다시 실행**해서 값 하나하나 대조표를 만들 것.

**과거 실수**: Input 사이즈, Button Small (32 vs 40), Gray 색 (밝은회색 vs 중간회색), Icon Button chevron path, TextButton 폰트 weight/underline offset — 모두 doc 이나 유사 컴포넌트에서 값을 빌려와 Figma 실제값과 불일치했음. 반드시 개별 조회.

---

`konacard-ds-components.md` 명세와 `konacard-ds-foundation.md` 토큰은 코드 참조 구현의 시작점이지만, **Figma 원본과 어긋날 때는 Figma 가 우선**.

## 실행

```bash
npm install
npm run storybook   # http://localhost:6006
```

## 구조

```
storybook/
├── .storybook/
│   ├── main.ts          # Storybook 설정 (react-vite framework)
│   └── preview.ts       # 글로벌 CSS 로드 + 360×800 viewport
├── src/
│   ├── styles/
│   │   ├── tokens.css   # Foundation CSS variables
│   │   └── global.css   # Pretendard + reset
│   └── components/
│       └── Button/      # § 02_Button — Large / Medium / Small
└── package.json
```

## 스택

- **React 18** + **TypeScript**
- **Vite 5**
- **Storybook 8** (`@storybook/react-vite`)
- 스타일: **CSS Modules + CSS Variables** (토큰은 `src/styles/tokens.css`)

## 현재 커버리지

- [x] Foundation 토큰 CSS 변수
- [x] `Button` (size × color × state + 병렬 CTA + Matrix)
- [x] Input / Selectbox / Search bar (04_Forms)
- [x] Control (Switch / Checkbox / Radio + agree / switch_setting / radio-text)
- [x] Actionbar (IconButton / Header 3형 / Headline)
- [x] Tab (Main-Basic / Main-Multi / Sub)
- [x] List (Basic / Expand / Card select / Select 응용)
- [x] Label / Info / Tooltip (Bubble) / Banner (Benefit + Action)

## 토큰 명명 규칙

Figma variable → CSS custom property 변환:

- `/` → `-` (예: `color/brand/primary` → `--color-brand-primary`)
- Figma 원본 오타 유지 (`quarternary`, `primay`)
- 대소문자 그대로 (`body/1-Bold` 등 조합 스타일은 `--text-body-1-bold` 로 lowercase 통일)
