import { create } from "@storybook/theming/create";

/**
 * Storybook 관리 화면·Docs 테마 — KONACARD DS foundation 토큰 값 사용
 *   brand/primary #805AE9 · background/secondary #F8F9FB · border/default #DDDDDD
 *   font/primary #000 · font/quaternary #999 · Pretendard
 */
export const konacardTheme = create({
  base: "light",

  /* vibe.monday.com 처럼 워드마크 + 작은 꼬리표 — 로고는 KONACARD 공식 워드마크(img_logo_konacard.svg) */
  brandTitle: `<div style="display:flex;align-items:flex-end;gap:6px">
    <img src="img_logo_konacard.svg" alt="KONACARD" style="height:20px;width:auto;display:block" />
    <span style="font-size:11px;font-weight:700;line-height:1;color:#999;letter-spacing:0">DS</span>
  </div>`,
  brandUrl: "./?path=/docs/introduction--docs",
  brandTarget: "_self",

  colorPrimary: "#805AE9",
  colorSecondary: "#805AE9",

  appBg: "#FFFFFF",
  appContentBg: "#FFFFFF",
  appPreviewBg: "#FFFFFF",
  appBorderColor: "#DDDDDD",
  appBorderRadius: 12,

  fontBase:
    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  fontCode: '"SF Mono", Menlo, Consolas, monospace',

  textColor: "#000000",
  textMutedColor: "#999999",
  textInverseColor: "#FFFFFF",

  barBg: "#FFFFFF",
  barTextColor: "#666666",
  barSelectedColor: "#805AE9",
  barHoverColor: "#805AE9",

  inputBg: "#FFFFFF",
  inputBorder: "#DDDDDD",
  inputTextColor: "#000000",
  inputBorderRadius: 8,

  buttonBg: "#FFFFFF",
  buttonBorder: "#DDDDDD",
  booleanBg: "#F8F9FB",
  booleanSelectedBg: "#805AE9",
});
