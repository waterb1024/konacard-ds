import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

const meta: Meta = {
  title: "Foundation/Color",
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD Design Foundation — Color. konacard-ds-foundation.md 기준. " +
          "브랜드/폰트/배경/버튼/보더/아이콘/디바이더/배너 파스텔 + 원자 팔레트.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

interface ColorGroup {
  title: string;
  tokens: { name: string; value: string; usage?: string }[];
}

const groups: ColorGroup[] = [
  {
    title: "Brand",
    tokens: [
      { name: "--color-brand-primary", value: "#805AE9", usage: "브랜드 강조 · Primary CTA" },
      { name: "--color-brand-secondary", value: "#F4F0FD", usage: "Brand_Light 채움" },
      { name: "--color-brand-tertiary", value: "#F8F6FE", usage: "옅은 브랜드 배경" },
    ],
  },
  {
    title: "Font",
    tokens: [
      { name: "--color-font-primary", value: "#000000", usage: "본문 기본" },
      { name: "--color-font-secondary", value: "#333333", usage: "Title 라벨" },
      { name: "--color-font-tertiary", value: "#666666", usage: "값·부연" },
      { name: "--color-font-quaternary", value: "#999999", usage: "회색 2depth" },
      { name: "--color-font-placeholder", value: "#999999", usage: "Placeholder" },
      { name: "--color-font-error", value: "#FF364B", usage: "Error state" },
      { name: "--color-font-brand", value: "#805AE9", usage: "브랜드 텍스트" },
      { name: "--color-font-white", value: "#FFFFFF", usage: "채움 위 흰 텍스트" },
    ],
  },
  {
    title: "Background",
    tokens: [
      { name: "--color-background-primary", value: "#FFFFFF", usage: "화면 기본" },
      { name: "--color-background-secondary", value: "#F8F9FB", usage: "카드 회색" },
      { name: "--color-background-tertiary", value: "#F8F6FE", usage: "옅은 보라 배경" },
      { name: "--color-background-button-brand", value: "#805AE9", usage: "Primary CTA 채움" },
      { name: "--color-background-brand", value: "#805AE9" },
      { name: "--color-background-dimed", value: "rgba(0,0,0,0.64)", usage: "팝업 오버레이" },
    ],
  },
  {
    title: "Button",
    tokens: [
      { name: "--color-button-secondary", value: "#F4F0FD", usage: "Brand_Light" },
      { name: "--color-button-tertiary", value: "#DDDDDD", usage: "Gray_Line outline" },
      { name: "--color-button-quarternary", value: "#999999", usage: "Figma 원본 오타 유지" },
      { name: "--color-button-white", value: "#FFFFFF" },
    ],
  },
  {
    title: "Border",
    tokens: [
      { name: "--color-border-default", value: "#DDDDDD", usage: "기본 아웃라인" },
      { name: "--color-border-focus", value: "#805AE9", usage: "Focus/Active 아웃라인" },
      { name: "--color-border-brand", value: "#805AE9" },
      { name: "--color-border-error", value: "#FF364B", usage: "Error 아웃라인" },
    ],
  },
  {
    title: "Icon",
    tokens: [
      { name: "--color-icon-secondary", value: "#333333", usage: "기본 아이콘" },
      { name: "--color-icon-tertiary", value: "#666666", usage: "서브 아이콘" },
      { name: "--color-icon-quaternary", value: "#999999", usage: "비활성·힌트" },
      { name: "--color-icon-quinary", value: "#DDDDDD", usage: "clear 원형 배경" },
      { name: "--color-icon-brand", value: "#805AE9" },
      { name: "--color-icon-white", value: "#FFFFFF" },
      { name: "--color-icon-accent-red", value: "#FF364B", usage: "오류 아이콘" },
      { name: "--color-icon-accent-green", value: "#1CCEA5", usage: "성공 아이콘" },
      { name: "--color-icon-accent-blue", value: "#589CF6", usage: "정보 아이콘" },
    ],
  },
  {
    title: "Divider",
    tokens: [
      { name: "--color-divider-primary", value: "rgba(0,0,0,0.06)", usage: "리스트 사이 1dp" },
      { name: "--color-divider-secondary", value: "rgba(0,0,0,0.08)" },
      { name: "--color-divider-tertiary", value: "rgba(0,0,0,0.12)" },
    ],
  },
  {
    title: "Banner (6 파스텔)",
    tokens: [
      { name: "--color-banner-brand", value: "#F8F6FE", usage: "브랜드성 혜택" },
      { name: "--color-banner-gray", value: "#F8F9FB" },
      { name: "--color-banner-blue", value: "#F0F6FE" },
      { name: "--color-banner-green", value: "#EFFCF9", usage: "성공·긍정" },
      { name: "--color-banner-yellow", value: "#FFFBDF", usage: "안내·주의" },
      { name: "--color-banner-pink", value: "#FFEFF1", usage: "이벤트" },
    ],
  },
  {
    title: "Palette (원자)",
    tokens: [
      { name: "--palette-purple-50", value: "#F8F6FE" },
      { name: "--palette-purple-100", value: "#F4F0FD" },
      { name: "--palette-purple-500", value: "#805AE9" },
      { name: "--palette-red-500", value: "#FF364B" },
      { name: "--palette-blue-500", value: "#589CF6" },
      { name: "--palette-green-500", value: "#1CCEA5" },
    ],
  },
];

export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Color</h1>
      <p className={styles.intro}>
        Figma DS (KONACARD - COMMON) 색 토큰을 CSS custom property 로 옮긴 사본.
        Figma 원본 이름의 오타 (quarternary, primay 등) 그대로 유지합니다.
      </p>
      {groups.map((g) => (
        <section key={g.title} className={styles.section}>
          <h2 className={styles.sectionTitle}>{g.title}</h2>
          <div className={styles.grid}>
            {g.tokens.map((t) => (
              <div key={t.name} className={styles.token}>
                <div
                  className={styles.tokenSwatch}
                  style={{ background: `var(${t.name})` }}
                />
                <span className={styles.tokenName}>{t.name}</span>
                <span className={styles.tokenValue}>{t.value}</span>
                {t.usage && (
                  <span className={styles.tokenUsage}>{t.usage}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
