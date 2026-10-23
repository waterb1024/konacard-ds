import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

/**
 * Foundation / Radius — Figma ${FIGMA_DS_FILE_KEY} (-AX-) Radius 가이드 (node 481:3296) 그대로
 *   Radius  : 스케일 8단계 (2xsmall 4 ~ 2xlarge 32 · round 50%)
 *   Buttons : radius/button/* 4개
 *   Layout  : radius/components/* 6개
 *   토큰 표기·설명 문구는 가이드 그대로, 실제 Figma 변수 이름은 옆에 함께 적음 (2026-10-23 대조)
 */

const meta: Meta = {
  title: "Foundation/Radius",
  parameters: {
    docs: {
      description: {
        component:
          "Figma Radius 가이드(481:3296) 기준. 코너 라운드는 2와 4 배수를 기반으로 적용하며 최대 반원을 적용할 수 있습니다.",
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
  /** 가이드 Reference token 열 (Buttons · Layout) */
  ref?: string;
  /** 가이드 Value 열 */
  value: string;
  /** 칩에 그릴 실제 값 */
  px: string;
  /** 가이드 Exemple 열 */
  usage: string;
  deprecated?: boolean;
}

const scale: Row[] = [
  { token: "$radius-2xsmall", variable: "radius/2xsmall", value: "4px", px: "4px", usage: "최소 버튼에 적용합니다." },
  { token: "$radius-xsmall", variable: "radius/xsmall", value: "6px", px: "6px", usage: "입력폼과 본문 내 적용되는 버튼에 적용합니다." },
  { token: "$radius-small", variable: "radius/small", value: "8px", px: "8px", usage: "페이지를 컨트롤하는 중요 액션 버튼에 적용합니다." },
  { token: "$radius-medium", variable: "radius/medium", value: "12px (base size)", px: "12px", usage: "본문 내 박스형 컨텐츠에 적용합니다." },
  { token: "$radius-large", variable: "radius/large", value: "16px", px: "16px", usage: "팝업에 적용합니다." },
  { token: "$radius-xlarge", variable: "radius/xlarge", value: "24px (base size)", px: "24px", usage: "버텀시트 팝업에 주로 적용합니다." },
  { token: "$radius-2xlarge", variable: "radius/2xlarge", value: "32px", px: "32px", usage: "홈 메인 상단/하단 구분하는 박스에 활용 (향후 제거 예정)", deprecated: true },
  { token: "$radius-round", variable: "radius/round", value: "50%", px: "9999px", usage: "레이블과 라운드 버튼에 적용합니다." },
];

const buttons: Row[] = [
  { token: "$radius-button-large", variable: "radius/button/large", ref: "$radius-small", value: "8px", px: "8px", usage: "페이지를 컨트롤하는 중요 액션 버튼에 적용합니다." },
  { token: "$radius-button-medium", variable: "radius/button/medium", ref: "$radius-xsmall", value: "6px", px: "6px", usage: "본문 내 중요 액션 버튼에 적용합니다." },
  { token: "$radius-button-small", variable: "radius/button/small", ref: "$radius-2xsmall", value: "4px", px: "4px", usage: "설명 및 가이드에 따른 액션 버튼에 적용합니다." },
  { token: "$radius-button-round", variable: "radius/button/round", ref: "$radius-round", value: "50%", px: "9999px", usage: "라운드형 버튼에 적용합니다." },
];

const layout: Row[] = [
  { token: "$radius-form", variable: "radius/components/form", ref: "$radius-xsmall", value: "6px", px: "6px", usage: "입력폼에 적용합니다." },
  { token: "$radius-contents", variable: "radius/components/box-contents", ref: "$radius-medium", value: "12px", px: "12px", usage: "컨텐츠에 적용합니다." },
  { token: "$radius-tost", variable: "radius/components/toast", ref: "$radius-medium", value: "12px", px: "12px", usage: "토스트 팝업에 사용합니다." },
  { token: "$radius-popup", variable: "radius/components/popup", ref: "$radius-large", value: "16px", px: "16px", usage: "팝업에 적용합니다." },
  { token: "$radius-bottomsheet", variable: "radius/components/bottomsheet", ref: "$radius-xlarge", value: "24px", px: "24px", usage: "버텀시트 팝업에 적용합니다." },
  { token: "$radius-label", variable: "radius/components/label", ref: "$radius-round", value: "50%", px: "9999px", usage: "라벨에 적용합니다." },
];

function Chip({ radius }: { radius: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 96,
        height: 48,
        background: "var(--color-brand-secondary)",
        border: "1px solid var(--color-brand-primary)",
        borderRadius: radius,
      }}
      aria-hidden
    />
  );
}

function Table({ rows }: { rows: Row[] }) {
  return (
    <div className={styles.gridSingleCol}>
      {rows.map((r) => (
        <div key={r.token} className={styles.row} style={r.deprecated ? { opacity: 0.5 } : undefined}>
          <span className={styles.rowLabel}>
            {r.token}
            <br />
            <span style={{ color: "var(--color-font-quaternary)" }}>{r.variable}</span>
          </span>
          <span className={styles.rowValue}>
            {r.ref && (
              <>
                {r.ref}
                <br />
              </>
            )}
            {r.value}
          </span>
          <span className={styles.rowSample} style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Chip radius={r.px} />
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
      <h1 className={styles.h1}>Radius</h1>
      <p className={styles.intro}>
        일관된 패턴과 가이드는 사용자가 빠르게 정보를 인지할 수 있도록 돕고, 서비스 전반에 예측 가능한 사용성을 제공합니다.
        <br />
        아래 정의된 컴퍼넌트 가이드를 준수하여 일관된 사용성을 유지할 수 있도록 합니다.
      </p>

      <h2 className={styles.h2}>Radius</h2>
      <p className={styles.intro}>코너 라운드는 2와 4 배수를 기반으로 적용하며 최대 반원을 적용할 수 있습니다.</p>
      <Table rows={scale} />

      <p className={styles.intro} style={{ marginTop: 40 }}>
        일관된 디자인과 사용성을 유지하기 위하여 아래 제시된 영역은 동일한 가이드를 적용합니다.
      </p>

      <h2 className={styles.h2}>Buttons</h2>
      <Table rows={buttons} />

      <h2 className={styles.h2}>Layout</h2>
      <Table rows={layout} />
    </div>
  ),
};
