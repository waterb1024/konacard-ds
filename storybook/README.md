# KONACARD DS — Storybook

React + Vite + Storybook 8 로 실행되는 KONACARD 디자인 시스템 스토리북.
`konacard-ds-components.md` 명세와 `konacard-ds-foundation.md` 토큰을 코드로 옮긴 참조 구현.

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
