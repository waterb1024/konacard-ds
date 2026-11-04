import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

/**
 * Foundation / Spacing — Figma ${FIGMA_DS_FILE_KEY} (-AX-) Spacing 가이드 (node 296:3057) 그대로
 *   Spacing       : 스케일 10단계 (none 0 ~ 3xlarge 40)
 *   Layout Margin : 디바이스 양쪽 20dp(pt) — 변수 layout/margin (→ spacing/large)
 *   Display       : spacing/display/* 4개 — 가이드 밖, Figma 변수에만 있음
 *   토큰 표기·설명 문구는 가이드 그대로, 실제 Figma 변수 이름은 옆에 함께 적음 (2026-11-04 대조)
 */

const meta: Meta = {
  title: "Foundation/Spacing",
  parameters: {
    docs: {
      description: {
        component:
          "Figma Spacing 가이드(296:3057) 기준. 스페이싱의 기본 단위는 4와 8배수를 기반으로 사용하며, 금융 앱의 특성으로 최소 2dp(pt) 여백을 허용합니다.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

interface Row {
  /** 가이드 Token 열 */
  token: string;
  /** Figma 변수 이름 */
  variable: string;
  /** 가이드 Value 열 */
  value: string;
  /** 막대에 그릴 실제 값 */
  px: number;
  /** 가이드 Example 열 */
  usage: string;
}

const scale: Row[] = [
  { token: "$spacing-none", variable: "spacing/none", value: "0px", px: 0, usage: "컨텐츠 간격이 없을 때 사용합니다." },
  { token: "$spacing-3xsmall", variable: "spacing/3xsmall", value: "2px", px: 2, usage: "컨텐츠 사이 간격이 매우 좁은 경우에 적용합니다." },
  { token: "$spacing-2xsmall", variable: "spacing/2xsmall", value: "4px", px: 4, usage: "컨텐츠 사이 좁은 간격에 적용합니다." },
  { token: "$spacing-xsmall", variable: "spacing/xsmall", value: "8px", px: 8, usage: "일반적인 컨텐츠 간격에 적용합니다." },
  { token: "$spacing-small", variable: "spacing/small", value: "12px (base size)", px: 12, usage: "컨텐츠와 컨텐츠 사이 구분이 필요한 경우 적용합니다." },
  { token: "$spacing-medium", variable: "spacing/medium", value: "16px", px: 16, usage: "컨텐츠와 그룹을 구분할 경우에 적용합니다." },
  { token: "$spacing-large", variable: "spacing/large", value: "20px (layout margin)", px: 20, usage: "레이아웃 마진에 공통으로 적용합니다. (변경불가)" },
  { token: "$spacing-xlarge", variable: "spacing/xlarge", value: "24px (base size)", px: 24, usage: "컨텐츠와 본문 사이 여백으로 활용합니다." },
  { token: "$spacing-2xlarge", variable: "spacing/2xlarge", value: "32px", px: 32, usage: "컨텐츠와 본문 사이 넓은 여백으로 활용합니다." },
  { token: "$spacing-3xlarge", variable: "spacing/3xlarge", value: "40px", px: 40, usage: "그룹의 명확한 구분이 필요한 경우 넓은 여백으로 활용합니다." },
];

const display: Row[] = [
  { token: "—", variable: "spacing/display/medium", value: "48px", px: 48, usage: "" },
  { token: "—", variable: "spacing/display/large", value: "60px", px: 60, usage: "" },
  { token: "—", variable: "spacing/display/xlarge", value: "80px", px: 80, usage: "" },
  { token: "—", variable: "spacing/display/2xlarge", value: "120px", px: 120, usage: "" },
];

function Bar({ value }: { value: number }) {
  return (
    <span
      style={{
        flexShrink: 0,
        display: "inline-block",
        width: value,
        height: 16,
        background: "var(--color-brand-primary)",
      }}
      aria-hidden
    />
  );
}

function Table({ rows }: { rows: Row[] }) {
  return (
    <div className={styles.gridSingleCol}>
      {rows.map((r) => (
        <div key={r.variable} className={styles.row}>
          <span className={styles.rowLabel}>
            {r.token}
            <br />
            <span style={{ color: "var(--color-font-quaternary)" }}>{r.variable}</span>
          </span>
          <span className={styles.rowValue}>{r.value}</span>
          <span className={styles.rowSample} style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Bar value={r.px} />
            <span>{r.usage}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Spacing</h1>
      <p className={styles.intro}>
        여백(Spacing)은 정보를 체계적으로 구조화하는 중요한 역할을 합니다.
        <br />
        잘 계획된 여백을 통해 정보를 체계적으로 그룹화하여 사용자가 쉽고 빠르게 정보를 인지할 수 있도록 지원합니다.
      </p>

      <h2 className={styles.h2}>Layout Margin</h2>
      <p className={styles.intro}>
        코나카드 앱은 컨텐츠 몰입도를 위해 디바이스 양쪽 여백을 20dp(pt)로 동일하게 적용합니다.
      </p>
      <div className={styles.note}>
        변수 <code>layout/margin</code> → <code>spacing/large</code> (20px). 360 기준 컨텐츠 영역(Device Flexible Area) = 360 −
        20×2 = <b>320px</b>.
      </div>

      <h2 className={styles.h2}>Spacing</h2>
      <p className={styles.intro}>
        스페이싱의 기본 단위는 4와 8배수를 기반으로 사용하며, 금융 앱의 특성으로 최소 2dp(pt) 여백을 허용합니다.
      </p>
      <Table rows={scale} />

      <h2 className={styles.h2}>Display (가이드 밖)</h2>
      <p className={styles.intro}>가이드에는 없고 Figma 변수에만 있는 큰 여백입니다.</p>
      <Table rows={display} />
    </div>
  ),
};
