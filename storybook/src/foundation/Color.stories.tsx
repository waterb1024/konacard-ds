import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

/**
 * Foundation / Color — Figma ${FIGMA_DS_FILE_KEY} (-AX-) Color 가이드 (node 296:3042) 그대로
 *   Color Palette    : _Primitive 7계열 × 10단계 (가이드 순서)
 *   주조색과 보조색   : brand · black & white · neutral · background · line & divider · accent · gradient · banner
 *   Semantic 변수    : 가이드 밖 — 컴포넌트가 실제로 묶는 color/* 전체 (Figma 이름 그대로)
 *   값은 모두 Figma 변수 기준 (2026-11-04 대조)
 */

const meta: Meta = {
  title: "Foundation/Color",
  parameters: {
    docs: {
      description: {
        component:
          "Figma Color 가이드(296:3042) 기준. 색상은 서비스 정체성을 표현하는 매우 강력한 요소이므로 가이드라인을 명확히 인지하고 사용하도록 합니다.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const palette: { label: string; family: string; hex: string[] }[] = [
  { label: "purple variation", family: "purple", hex: ["#F8F6FE", "#F4F0FD", "#ECE6FC", "#BFADF4", "#997BED", "#805AE9", "#6648BA", "#523A95", "#33245D", "#1B1138"] },
  { label: "red variation", family: "red", hex: ["#FFEFF1", "#FFE2E5", "#FFCCD1", "#FF9BA5", "#FF5E6F", "#FF364B", "#CC2B3C", "#99202D", "#59131A", "#330B0F"] },
  { label: "blue variation", family: "blue", hex: ["#F0F6FE", "#E6F0FE", "#D5E6FD", "#B9D6FB", "#8ABAF9", "#589CF6", "#4F8CDD", "#3965A0", "#233E62", "#121F31"] },
  { label: "green variation", family: "green", hex: ["#EFFCF9", "#DEF8F2", "#C8F3E9", "#A4EBDB", "#77E2C9", "#1CCEA5", "#159A7C", "#0D634F", "#083E31", "#041F19"] },
  { label: "yellow variation", family: "yellow", hex: ["#FFFBDF", "#FEF9C3", "#FEF08A", "#FDE047", "#FACC15", "#EAB308", "#CA8A04", "#A16207", "#764004", "#462304"] },
  { label: "gray variation", family: "gray", hex: ["#F8F8F8", "#F4F4F4", "#EEEEEE", "#DDDDDD", "#BDBDBD", "#999999", "#757575", "#666666", "#333333", "#1C1C1C"] },
  { label: "cool gray variation", family: "coolgray", hex: ["#F8F9FB", "#F0F1F3", "#DADDE0", "#C7CBD0", "#A9AEB5", "#92989D", "#6E7276", "#585B5E", "#333537", "#1D1E1F"] },
];

interface Chip {
  /** 가이드 이름 (primary · secondary …) */
  name: string;
  /** 가이드 값 줄 (palette / hex) */
  value: string;
  /** Figma 변수 · 스타일 이름 */
  variable: string;
  /** 견본에 칠할 CSS 값 */
  css: string;
}

const brandGroups: { title: string; chips: Chip[] }[] = [
  {
    title: "brand",
    chips: [
      { name: "primary", value: "purple-500 · #805AE9", variable: "color/brand/primary", css: "var(--color-brand-primary)" },
      { name: "secondary", value: "purple-100 · #F4F0FD", variable: "color/brand/sencondary", css: "var(--color-brand-sencondary)" },
      { name: "tertiary", value: "purple-50 · #F8F6FE", variable: "color/brand/tertiary", css: "var(--color-brand-tertiary)" },
    ],
  },
  {
    title: "black & white",
    chips: [
      { name: "black", value: "#000000", variable: "color/black", css: "var(--color-black)" },
      { name: "white", value: "#FFFFFF", variable: "color/white", css: "var(--color-white)" },
    ],
  },
  {
    title: "neutral",
    chips: [
      { name: "primary", value: "gray-800 · #333333", variable: "color/neutral/primary", css: "var(--color-neutral-primary)" },
      { name: "secondary", value: "gray-700 · #666666", variable: "color/neutral/sencondary", css: "var(--color-neutral-sencondary)" },
      { name: "tertiary", value: "gray-500 · #999999", variable: "color/neutral/tertiary", css: "var(--color-neutral-tertiary)" },
      { name: "quaternary", value: "gray-300 · #DDDDDD", variable: "color/neutral/quaternary", css: "var(--color-neutral-quaternary)" },
    ],
  },
  {
    title: "background / surfaces",
    chips: [
      { name: "primary", value: "white · #FFFFFF", variable: "color/background/primary", css: "var(--color-background-primary)" },
      { name: "secondary", value: "coolgray-50 · #F8F9FB", variable: "color/background/secondary", css: "var(--color-background-secondary)" },
      { name: "tertiary", value: "purple-50 · #F8F6FE", variable: "color/background/tertiary", css: "var(--color-background-tertiary)" },
    ],
  },
  {
    title: "line & divider",
    chips: [
      { name: "primary", value: "black 6%", variable: "color/divider/primary", css: "var(--color-divider-primary)" },
      { name: "secondary", value: "black 8%", variable: "color/divider/secondary", css: "var(--color-divider-secondary)" },
      { name: "tertiary", value: "black 12%", variable: "color/divider/tertiary", css: "var(--color-divider-tertiary)" },
      { name: "white", value: "#FFFFFF", variable: "color/divider/white", css: "var(--color-divider-white)" },
    ],
  },
  {
    title: "accent",
    chips: [
      { name: "primary", value: "red-500 · #FF364B", variable: "color/accent/primary", css: "var(--color-accent-primary)" },
      { name: "secondary", value: "blue-500 · #589CF6", variable: "color/accent/sencondary", css: "var(--color-accent-sencondary)" },
      { name: "tertiary", value: "green-500 · #1CCEA5", variable: "color/accent/tertiary", css: "var(--color-accent-tertiary)" },
    ],
  },
  {
    title: "gradient",
    chips: [
      { name: "primary", value: "#804EE2 → #526ED3", variable: "gradient/primary", css: "var(--gradient-primary)" },
      { name: "secondary", value: "#00BB5A → #5978EA", variable: "gradient/secondary", css: "var(--gradient-secondary)" },
      { name: "tertiary", value: "#FF364B → #FF1493", variable: "gradient/tertiary", css: "var(--gradient-tertiary)" },
    ],
  },
  {
    title: "background / banner",
    chips: [
      { name: "brand", value: "purple-50 · #F8F6FE", variable: "color/banner/brand", css: "var(--color-banner-brand)" },
      { name: "gray", value: "coolgray-50 · #F8F9FB", variable: "color/banner/gray", css: "var(--color-banner-gray)" },
      { name: "blue", value: "blue-50 · #F0F6FE", variable: "color/banner/blue", css: "var(--color-banner-blue)" },
      { name: "green", value: "green-50 · #EFFCF9", variable: "color/banner/green", css: "var(--color-banner-green)" },
      { name: "yellow", value: "yellow-50 · #FFFBDF", variable: "color/banner/yellow", css: "var(--color-banner-yellow)" },
      { name: "pink", value: "red-50 · #FFEFF1", variable: "color/banner/pink", css: "var(--color-banner-pink)" },
    ],
  },
];

/** Semantic 컬렉션 — Figma 이름: 값 (→ 참조) */
const semantic: { title: string; vars: [string, string][] }[] = [
  {
    title: "color/font",
    vars: [
      ["primary", "#000000 → black"], ["secondary", "#333333 → neutral/primary"], ["tertiary", "#666666 → neutral/sencondary"],
      ["quaternary", "#999999 → neutral/tertiary"], ["quinary", "#DDDDDD → neutral/quaternary"], ["placeholder", "#999999 → neutral/tertiary"],
      ["brand", "#805AE9 → brand/primary"], ["white", "#FFFFFF"], ["error", "#FF364B → accent/primary"],
      ["accent-red", "#FF364B → accent/primary"], ["accent-blue", "#589CF6 → accent/sencondary"], ["accent-green", "#1CCEA5 → accent/tertiary"],
    ],
  },
  {
    title: "color/background",
    vars: [
      ["primary", "#FFFFFF → white"], ["secondary", "#F8F9FB → neutral/septenary"], ["tertiary", "#F8F6FE → brand/tertiary"],
      ["quaternary", "#F0F1F3 → neutral/senary"], ["brand", "#805AE9 → brand/primary"], ["disabled", "#F8F9FB → neutral/septenary"],
      ["dimed", "black 64%"],
    ],
  },
  {
    title: "color/border",
    vars: [
      ["primay", "black 6%"], ["secondary", "black 8%"], ["tertiary", "black 12%"], ["default", "#DDDDDD → neutral/quaternary"],
      ["disable", "#DDDDDD → neutral/quaternary"], ["focus", "#805AE9 → brand/primary"], ["brand", "#805AE9 → brand/primary"],
      ["error", "#FF364B → accent/primary"], ["balck", "#000000 → black"], ["white", "#FFFFFF"],
    ],
  },
  {
    title: "color/divider",
    vars: [["primary", "black 6%"], ["secondary", "black 8%"], ["tertiary", "black 12%"], ["brand", "#805AE9 → brand/primary"], ["white", "#FFFFFF"]],
  },
  {
    title: "color/icon",
    vars: [
      ["primary", "#000000 → black"], ["secondary", "#333333 → neutral/primary"], ["tertiary", "#666666 → neutral/sencondary"],
      ["quaternary", "#999999 → neutral/tertiary"], ["quinary", "#DDDDDD → neutral/quaternary"], ["senary", "#F0F1F3 → neutral/senary"],
      ["brand", "#805AE9 → brand/primary"], ["white", "#FFFFFF"], ["accent-red", "#FF364B"], ["accent-blue", "#589CF6"],
      ["accent-green", "#1CCEA5"], ["guide", "#FF364B → accent/primary"],
    ],
  },
  {
    title: "color/button",
    vars: [
      ["primary", "#805AE9 → brand/primary"], ["secondary", "#F4F0FD → brand/sencondary"], ["tertiary", "#DDDDDD → neutral/quaternary"],
      ["quarternary", "#999999 → neutral/tertiary"], ["quinary", "#F8F9FB → neutral/septenary"], ["white", "#FFFFFF"],
      ["pressed", "black 12%"],
    ],
  },
  {
    title: "color/label",
    vars: [
      ["brand-primary(gradient)", "#805AE9"], ["brand-secondary", "#805AE9 → brand/primary"], ["brand-tertiary", "#F4F0FD → brand/sencondary"],
      ["brand-quaternary", "#F8F6FE → brand/tertiary"], ["neutral-primary", "#333333"], ["neutral-secondary", "#666666"],
      ["neutral-tertiary", "#999999"], ["neutral-quaternary", "#DDDDDD"], ["neutral-quinary", "#F8F9FB → neutral/septenary"],
      ["accent-red", "#FF364B"], ["accent-blue", "#589CF6"], ["accent-green", "#1CCEA5"], ["white", "#FFFFFF"],
    ],
  },
  {
    title: "color/banner · progress · opacity",
    vars: [["banner/toast", "#333333 → neutral/primary"], ["progress/bar", "#DDDDDD"], ["progress/status", "#805AE9"], ["opacity/pressed", "black 6%"]],
  },
];

function cssVar(group: string, name: string) {
  const path = group.startsWith("color/banner ·") ? name : `${group.replace("color/", "")}/${name}`;
  if (path.startsWith("opacity/")) return `var(--${path.replace(/\//g, "-")})`;
  return `var(--color-${path.replace(/\//g, "-").replace(/[()]/g, "")})`;
}

function Swatch({ css, height = 40 }: { css: string; height?: number }) {
  return (
    <div
      style={{
        height,
        borderRadius: 6,
        background: css,
        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.06)",
      }}
    />
  );
}

export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Color</h1>
      <p className={styles.intro}>
        색상은 서비스 정체성을 표현하는 매우 강력한 요소이므로 아래 가이드라인을 명확히 인지하고 사용하도록 합니다.
        <br />
        특히 브랜드 컬러는 코나카드와 연계된 모든 서비스에 공통으로 적용되는 요소이므로 임의로 추가하거나 변경할 수 없습니다.
      </p>

      <h2 className={styles.h2}>Color Palette</h2>
      {palette.map((row) => (
        <div key={row.family} style={{ marginBottom: 20 }}>
          <div className={styles.tokenName} style={{ marginBottom: 8 }}>{row.label}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(10, minmax(64px, 1fr))", gap: 4, overflowX: "auto" }}>
            {STEPS.map((step, k) => (
              <div key={step}>
                <Swatch css={`var(--color-${row.family}-${step})`} />
                <div className={styles.tokenName} style={{ marginTop: 6 }}>{`${row.family}-${step}`}</div>
                <div className={styles.tokenValue}>{row.hex[k]}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2 className={styles.h2}>주조색과 보조색</h2>
      <p className={styles.intro}>
        색상은 그 자체로 브랜드 정체성을 만들며, 정보의 질서와 위계를 수립하여 사용자가 더욱 쉽고 빠르게 정보를 습득할 수 있도록 돕습니다.
      </p>
      {brandGroups.map((g) => (
        <section key={g.title} style={{ marginBottom: 24 }}>
          <div className={styles.tokenName} style={{ marginBottom: 8 }}>{g.title}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 }}>
            {g.chips.map((c) => (
              <div key={c.variable}>
                <Swatch css={c.css} height={48} />
                <div className={styles.tokenName} style={{ marginTop: 6 }}>{c.name}</div>
                <div className={styles.tokenValue}>{c.value}</div>
                <div className={styles.tokenUsage}>{c.variable}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

/** 가이드 밖 — 컴포넌트가 실제로 묶는 Semantic 변수 전체 */
export const SemanticVariables: Story = {
  name: "Semantic 변수 (가이드 밖)",
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Semantic 변수</h1>
      <p className={styles.intro}>
        컴포넌트는 아래 Semantic 변수를 묶어 씁니다. 이름은 Figma 그대로이며 오타(primay · balck · quarternary · sencondary)도
        유지합니다. CSS 는 <code>/</code> 를 <code>-</code> 로 바꾼 <code>--color-…</code> 입니다.
      </p>
      {semantic.map((g) => (
        <section key={g.title} style={{ marginBottom: 24 }}>
          <h2 className={styles.h2}>{g.title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
            {g.vars.map(([name, value]) => (
              <div key={name}>
                <Swatch css={cssVar(g.title, name)} height={36} />
                <div className={styles.tokenName} style={{ marginTop: 6 }}>{name}</div>
                <div className={styles.tokenValue}>{value}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
