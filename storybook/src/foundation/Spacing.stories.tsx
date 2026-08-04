import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

const meta: Meta = {
  title: "Foundation/Spacing",
  parameters: {
    docs: {
      description: {
        component:
          "konacard-ds-foundation.md § Spacing. 4·8 배수 기반, 금융 앱 특성상 최소 2dp 허용. " +
          "spacing-large(20)는 layout margin 고정 — 변경 불가.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

const scale = [
  { token: "spacing-none", value: 0, usage: "간격 없음" },
  { token: "spacing-3xsmall", value: 2, usage: "매우 좁은 컨텐츠 간격" },
  { token: "spacing-2xsmall", value: 4, usage: "좁은 컨텐츠 간격" },
  { token: "spacing-xsmall", value: 8, usage: "일반 컨텐츠 간격 · Form 요소 간" },
  { token: "spacing-small", value: 12, usage: "★ base — 컨텐츠 구분" },
  { token: "spacing-medium", value: 16, usage: "컨텐츠와 그룹 구분" },
  { token: "spacing-large", value: 20, usage: "★ layout margin — 변경 불가" },
  { token: "spacing-xlarge", value: 24, usage: "★ base — 본문과 컨텐츠 여백" },
  { token: "spacing-2xlarge", value: 32, usage: "본문 넓은 여백" },
  { token: "spacing-3xlarge", value: 40, usage: "그룹 명확한 구분" },
];

const displayScale = [
  { token: "spacing-display-margin-l", value: 60 },
  { token: "spacing-display-margin-xl", value: 80 },
];

function Bar({ value }: { value: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: value,
        height: 16,
        background: "var(--color-brand-primary)",
        borderRadius: 2,
      }}
      aria-hidden
    />
  );
}

export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Spacing</h1>
      <p className={styles.intro}>
        4와 8의 배수를 기본 단위로 사용합니다. 금융 앱 특성상 최소 2dp 여백까지 허용.
        base size = spacing-small(12) · spacing-xlarge(24).
      </p>

      <div className={styles.note}>
        <strong>Layout Margin</strong> — 앱의 좌우 여백은 항상 <code>spacing-large</code> (20px).
        변경 불가 토큰. 콘텐츠 가용 영역 = 360 − 20×2 = <b>320px</b>.
      </div>

      <h2 className={styles.h2}>Spacing Scale</h2>
      <div className={styles.gridSingleCol}>
        {scale.map((s) => (
          <div key={s.token} className={styles.row}>
            <span className={styles.rowLabel}>{s.token}</span>
            <span className={styles.rowValue}>{s.value}px</span>
            <span className={styles.rowSample}>
              <Bar value={s.value} /> <span style={{ marginLeft: 12, color: "var(--color-font-tertiary)" }}>{s.usage}</span>
            </span>
          </div>
        ))}
      </div>

      <h2 className={styles.h2}>Display Margin (배너·인트로용 큰 여백)</h2>
      <div className={styles.gridSingleCol}>
        {displayScale.map((s) => (
          <div key={s.token} className={styles.row}>
            <span className={styles.rowLabel}>{s.token}</span>
            <span className={styles.rowValue}>{s.value}px</span>
            <span className={styles.rowSample}>
              <Bar value={s.value} />
            </span>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <strong>사용 규칙</strong>
        <br />
        • 4·8 배수 토큰(4, 8, 16, 24, 32, 40) 우선 사용
        <br />
        • 2·12·20 은 특정 의미가 있을 때만 (2 = 최소 여백, 12 = base, 20 = layout margin)
        <br />
        • 임의 픽셀 값(7px·13px 등) 직접 입력 금지 — 반드시 토큰 참조
      </div>
    </div>
  ),
};
