import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

const meta: Meta = {
  title: "Foundation/Radius",
  parameters: {
    docs: {
      description: {
        component:
          "konacard-ds-foundation.md § Radius. 2·4 배수 기반, 최대 반원(50%). " +
          "시맨틱 별칭(radius/button/*, radius/components/*) 우선 사용.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

const scale = [
  { token: "radius-2xsmall", value: "4px", usage: "최소 버튼" },
  { token: "radius-xsmall", value: "6px", usage: "입력폼, 본문 내 버튼" },
  { token: "radius-small", value: "8px", usage: "페이지 컨트롤 중요 액션 버튼" },
  { token: "radius-medium", value: "12px", usage: "★ base — 본문 내 박스형 컨텐츠" },
  { token: "radius-large", value: "16px", usage: "팝업" },
  { token: "radius-xlarge", value: "24px", usage: "★ base — 바텀시트 팝업" },
  { token: "radius-round", value: "9999px (50%)", usage: "라벨, 라운드 버튼" },
];

const buttonAlias = [
  { token: "radius/button/large", ref: "= radius-small", value: "8px", usage: "페이지 컨트롤 중요 액션" },
  { token: "radius/button/medium", ref: "= radius-xsmall", value: "6px", usage: "본문 내 중요 액션" },
  { token: "radius/button/small", ref: "= radius-2xsmall", value: "4px", usage: "설명·가이드 액션" },
  { token: "radius/button/round", ref: "= radius-round", value: "50%", usage: "라운드형 버튼" },
];

const componentAlias = [
  { token: "radius/components/form", ref: "= radius-xsmall", value: "6px", usage: "Input · Select · Search · Selectbox" },
  { token: "radius/components/box-button", ref: "= radius-small", value: "8px", usage: "card-select 등" },
  { token: "radius/components/box-info", ref: "= radius-small", value: "8px", usage: "Banner · Bubble tooltip" },
  { token: "radius-layout-contents", ref: "= radius-medium", value: "12px", usage: "컨텐츠 박스" },
  { token: "radius-tost", ref: "= radius-medium", value: "12px", usage: "⚠ Figma 오타 그대로 (실제는 toast)" },
  { token: "radius-layout-popup", ref: "= radius-large", value: "16px", usage: "팝업·모달" },
  { token: "radius-layout-bottomsheet", ref: "= radius-xlarge", value: "24px", usage: "바텀시트 상단 코너만" },
  { token: "radius-layout-label", ref: "= radius-round", value: "50%", usage: "라벨·배지 pill" },
];

function Chip({ radius }: { radius: string }) {
  return (
    <div
      style={{
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

export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Radius</h1>
      <p className={styles.intro}>
        코너 라운드는 <b>2와 4의 배수</b>를 기반으로 적용하며, 최대 반원(50%)까지 허용.
        시맨틱 별칭을 우선 사용하고, 스케일 토큰은 별칭이 없을 때만 사용.
      </p>

      <h2 className={styles.h2}>Radius Scale</h2>
      <div className={styles.gridSingleCol}>
        {scale.map((s) => (
          <div key={s.token} className={styles.row}>
            <span className={styles.rowLabel}>{s.token}</span>
            <span className={styles.rowValue}>{s.value}</span>
            <span className={styles.rowSample} style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Chip radius={s.value.split(" ")[0]} />
              <span style={{ color: "var(--color-font-tertiary)" }}>{s.usage}</span>
            </span>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <strong>Deprecated</strong> — <code>radius-2xlarge</code> (32px, 홈 상/하단 박스)는
        향후 제거 예정. 신규 화면 사용 금지.
      </div>

      <h2 className={styles.h2}>Button Aliases</h2>
      <div className={styles.gridSingleCol}>
        {buttonAlias.map((a) => (
          <div key={a.token} className={styles.row}>
            <span className={styles.rowLabel}>{a.token}</span>
            <span className={styles.rowValue}>{a.ref} · {a.value}</span>
            <span className={styles.rowSample}>{a.usage}</span>
          </div>
        ))}
      </div>

      <h2 className={styles.h2}>Components & Layout Aliases</h2>
      <div className={styles.gridSingleCol}>
        {componentAlias.map((a) => (
          <div key={a.token} className={styles.row}>
            <span className={styles.rowLabel}>{a.token}</span>
            <span className={styles.rowValue}>{a.ref} · {a.value}</span>
            <span className={styles.rowSample}>{a.usage}</span>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <strong>사용 규칙</strong>
        <br />
        • 시맨틱 별칭(radius/button/*, radius/components/*) 우선 · 스케일 직접 참조는 별칭 없을 때만
        <br />
        • 바텀시트는 상단 두 코너만 24px (좌우 하단은 0)
        <br />
        • radius-round 는 height/2 이상으로 적용해서 항상 반원 형태 유지
      </div>
    </div>
  ),
};
