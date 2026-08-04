import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

const meta: Meta = {
  title: "Foundation/Iconography",
  parameters: {
    docs: {
      description: {
        component:
          "konacard-ds-foundation.md § Icon. 색은 color/icon/* 토큰. " +
          "action-bar/button = 56×56 정사각, icon 자체 = 24px + 상하좌우 16px padding.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

const iconColors = [
  { token: "--color-icon-secondary", value: "#333333", usage: "기본 아이콘" },
  { token: "--color-icon-tertiary", value: "#666666", usage: "서브 아이콘" },
  { token: "--color-icon-quaternary", value: "#999999", usage: "비활성·힌트" },
  { token: "--color-icon-quinary", value: "#DDDDDD", usage: "clear 원형 배경 등" },
  { token: "--color-icon-brand", value: "#805AE9", usage: "브랜드 아이콘" },
  { token: "--color-icon-white", value: "#FFFFFF", usage: "채움 배경 위 흰 아이콘" },
  { token: "--color-icon-accent-red", value: "#FF364B", usage: "오류 아이콘" },
  { token: "--color-icon-accent-green", value: "#1CCEA5", usage: "성공 아이콘" },
  { token: "--color-icon-accent-blue", value: "#589CF6", usage: "정보 아이콘" },
];

/* 시스템 카탈로그의 대표 24px 아이콘 스포츠라이트 */
function IconTile({
  name,
  color = "var(--color-icon-secondary)",
  children,
}: {
  name: string;
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.token}>
      <div
        style={{
          height: 72,
          borderRadius: 6,
          border: "1px solid var(--color-divider-secondary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-background-primary)",
          color,
        }}
      >
        {children}
      </div>
      <span className={styles.tokenName}>{name}</span>
      <span className={styles.tokenValue}>24 × 24</span>
    </div>
  );
}

function IconSet() {
  const stroke = "currentColor";
  return (
    <div className={styles.grid}>
      <IconTile name="chevron-left">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 5L8 12L15 19" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconTile>
      <IconTile name="chevron-right">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L16 12L9 19" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconTile>
      <IconTile name="chevron-down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconTile>
      <IconTile name="menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconTile>
      <IconTile name="bell">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 16V11a6 6 0 1112 0v5l1.5 2H4.5L6 16z" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 20a2 2 0 004 0" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconTile>
      <IconTile name="settings">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke={stroke} strokeWidth="1.8" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconTile>
      <IconTile name="search">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke={stroke} strokeWidth="1.8" />
          <path d="M17 17L21 21" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconTile>
      <IconTile name="close (clear)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 6L18 18M18 6L6 18" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconTile>
      <IconTile name="check-circle" color="var(--color-icon-accent-green)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconTile>
      <IconTile name="info" color="var(--color-icon-accent-blue)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="1.8" />
          <path d="M12 10v6M12 7v0.1" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconTile>
      <IconTile name="alert" color="var(--color-icon-accent-red)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth="1.8" />
          <path d="M12 7v6M12 16v0.1" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconTile>
      <IconTile name="gift">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="8" width="18" height="12" rx="1.5" stroke={stroke} strokeWidth="1.6" />
          <path d="M3 12h18M12 8v12M8 8c-1.5-1.5-1.5-4 0-5s3 0 4 2c1-2 2.5-3 4-2s1.5 3.5 0 5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </IconTile>
      <IconTile name="card">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke={stroke} strokeWidth="1.6" />
          <path d="M3 10h18" stroke={stroke} strokeWidth="1.6" />
          <circle cx="17" cy="14" r="1.2" fill={stroke} />
        </svg>
      </IconTile>
      <IconTile name="link">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 15L15 9M10 7L11.5 5.5C13 4 15 4 16.5 5.5S18 9 16.5 10.5L15 12M9 12L7.5 13.5C6 15 6 17 7.5 18.5S11 20 12.5 18.5L14 17" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </IconTile>
    </div>
  );
}

export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Iconography</h1>
      <p className={styles.intro}>
        아이콘은 기호로 만든 시각적 언어. 한정된 공간에서 효율적으로 정보를 전달합니다.
        기본 크기는 24px 스케일 · 터치 유닛은 56×56 (action-bar/button 기준, 상하좌우 16px padding).
      </p>

      <h2 className={styles.h2}>Icon Colors</h2>
      <div className={styles.grid}>
        {iconColors.map((c) => (
          <div key={c.token} className={styles.token}>
            <div
              style={{
                height: 72,
                borderRadius: 6,
                border: "1px solid var(--color-divider-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  c.token === "--color-icon-white"
                    ? "var(--color-background-button-brand)"
                    : "var(--color-background-primary)",
                color: `var(${c.token})`,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className={styles.tokenName}>{c.token}</span>
            <span className={styles.tokenValue}>{c.value}</span>
            <span className={styles.tokenUsage}>{c.usage}</span>
          </div>
        ))}
      </div>

      <h2 className={styles.h2}>Icon Set (대표 24px 아이콘)</h2>
      <IconSet />

      <div className={styles.note}>
        <strong>사용 규칙</strong>
        <br />
        • 기본 크기 24 · 소형 20 · 초소형 16 로 스케일 다운 (임의 크기 금지)
        <br />
        • 스트로크는 1.6~1.8px 유지 · 24px 뷰박스 기준
        <br />
        • 터치 유닛(action-bar/button)은 56×56 정사각, icon 24 + padding 16
        <br />
        • 색은 반드시 color/icon/* 토큰 — 원본 팔레트 직접 참조 금지
      </div>
    </div>
  ),
};
