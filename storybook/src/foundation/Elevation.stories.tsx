import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

/**
 * Foundation / Elevation — Figma ${FIGMA_DS_FILE_KEY} (-AX-) Elevation 가이드 (node 1438:5158) 그대로
 *   Shadow : effect 스타일 elevation/* 6개 (웹에만 적용)
 *   값은 elevat/* 변수 (none 0 · thin 2 · light 4 · regular 8 · medium 16 · semibold 24 · bold 32 · inset -2)
 *   앱 화면의 계층 표현(배경색 · 구분선 · 오버레이 · 바텀시트)은 가이드 밖 문서 규칙 (2026-11-04 대조)
 */

const meta: Meta = {
  title: "Foundation/Elevation",
  parameters: {
    docs: {
      description: {
        component:
          "Figma Elevation 가이드(1438:5158) 기준. 그림자는 웹에만 적용하며, 앱은 배경색 · 구분선 · 오버레이로 계층을 표현합니다.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

interface Row {
  /** 가이드 토큰 표기 */
  token: string;
  /** Figma effect 스타일 이름 (가이드 견본에 붙은 것) */
  style: string;
  /** tokens.css 변수 */
  cssVar: string;
  /** type · x · y · blur · spread · 색 */
  value: string;
}

const shadows: Row[] = [
  { token: "$shadow-pressed", style: "elevation/shadow-pressed", cssVar: "--elevation-shadow-pressed", value: "inner · 0 · 2 · 4 · 0 · #000 8%" },
  { token: "$shadow-button", style: "elevation/shadow-button", cssVar: "--elevation-shadow-button", value: "drop · 0 · 4 · 4 · 0 · #000 4%" },
  { token: "$shadow-navigation", style: "elevation/shadow-navigation", cssVar: "--elevation-shadow-navigation", value: "drop · 0 · 4 · 8 · 0 · #000 8%" },
  { token: "$shadow-card", style: "elevation/shadow-card", cssVar: "--elevation-shadow-card", value: "drop · -2 · 24 · 32 · 4 · #000 8%" },
  { token: "$shadow-deep", style: "elevation/shadow-dark", cssVar: "--elevation-shadow-dark", value: "drop · -2 · 24 · 32 · 4 · #000 32%" },
  { token: "$shadow-active", style: "elevation/shadow-active", cssVar: "--elevation-shadow-active", value: "drop · 0 · 16 · 24 · 2 · #000 8%" },
];

function Swatch({ cssVar }: { cssVar: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 72,
        height: 48,
        borderRadius: 8,
        background: "var(--color-background-primary)",
        boxShadow: `var(${cssVar})`,
      }}
      aria-hidden
    />
  );
}

/** 가이드 Shadow 6개 */
export const Shadow: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Elevation (웹용)</h1>
      <p className={styles.intro}>웹에만 적용 · 가이드 정리 후 적용 예정</p>

      <h2 className={styles.h2}>Shadow</h2>
      <p className={styles.intro}>웹</p>
      <div className={styles.gridSingleCol}>
        {shadows.map((r) => (
          <div key={r.token} className={styles.row} style={{ padding: "20px 0" }}>
            <span className={styles.rowLabel}>
              {r.token}
              <br />
              <span style={{ color: "var(--color-font-quaternary)" }}>{r.style}</span>
            </span>
            <span className={styles.rowValue} style={{ minWidth: 220 }}>
              {r.value}
            </span>
            <span className={styles.rowSample} style={{ display: "flex", alignItems: "center", paddingLeft: 8 }}>
              <Swatch cssVar={r.cssVar} />
            </span>
          </div>
        ))}
      </div>
      <div className={styles.note} style={{ marginTop: 24 }}>
        가이드의 <code>$shadow-deep</code> 견본에는 <code>elevation/shadow-dark</code>(32%) 스타일이 붙어 있습니다.
        이름이 같은 <code>elevation/shadow-deep</code>(16%) 스타일은 가이드에 나오지 않습니다.
      </div>
    </div>
  ),
};

/** 앱에서 계층을 표현하는 4가지 시각 도구 — 가이드 밖 문서 규칙 */
export const AppDepth: Story = {
  name: "App depth (가이드 밖)",
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>앱의 계층 표현</h1>
      <p className={styles.intro}>
        그림자는 웹에만 적용합니다. 앱 화면의 계층은 <b>배경색 대비</b>,
        <b> 구분선</b>, <b>오버레이</b>, <b>radius</b> 조합으로 표현합니다.
      </p>

      <h2 className={styles.h2}>1) 배경색 대비 — 카드/정보 박스</h2>
      <div style={{ padding: 20, background: "var(--color-background-secondary)", borderRadius: 12 }}>
        <div
          style={{
            padding: 16,
            background: "var(--color-background-primary)",
            borderRadius: 12,
            font: "var(--text-body-2-regular)",
            color: "var(--color-font-tertiary)",
          }}
        >
          흰 배경 카드 위에 회색 배경(<code>background/secondary #F8F9FB</code>) 컨테이너로
          계층을 만듭니다 — 그림자 없음.
        </div>
      </div>

      <h2 className={styles.h2}>2) 구분선 — divider</h2>
      <div style={{ padding: 20, background: "var(--color-background-primary)", borderRadius: 8 }}>
        <div style={{ padding: "12px 0", borderBottom: "1px solid var(--color-divider-primary)" }}>
          리스트 아이템 1 (divider/primary rgba(0,0,0,0.06))
        </div>
        <div style={{ padding: "12px 0", borderBottom: "1px solid var(--color-divider-primary)" }}>
          리스트 아이템 2
        </div>
        <div style={{ padding: "12px 0" }}>리스트 아이템 3 (마지막 · divider 없음)</div>
      </div>

      <h2 className={styles.h2}>3) 오버레이 — 팝업 딤(dim)</h2>
      <div
        style={{
          position: "relative",
          height: 200,
          borderRadius: 8,
          overflow: "hidden",
          background: "var(--color-background-secondary)",
        }}
      >
        <div style={{ padding: 20, color: "var(--color-font-tertiary)" }}>
          아래 컨텐츠 (기본 화면)
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--color-background-dimed)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 240,
              padding: 24,
              background: "var(--color-background-primary)",
              borderRadius: 16,
              textAlign: "center",
              font: "var(--text-body-1-bold)",
            }}
          >
            팝업
            <div
              style={{
                marginTop: 8,
                font: "var(--text-body-2-regular)",
                color: "var(--color-font-tertiary)",
              }}
            >
              dim rgba(0,0,0,0.64) · radius 16
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.h2}>4) 바텀시트 — 상단 코너 radius</h2>
      <div style={{ background: "var(--color-background-secondary)", padding: 20, borderRadius: 8 }}>
        <div
          style={{
            marginTop: 40,
            background: "var(--color-background-primary)",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: "24px 20px 40px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 40,
              height: 4,
              background: "var(--color-icon-quinary)",
              borderRadius: 999,
              margin: "0 auto 24px",
            }}
          />
          <div style={{ font: "var(--text-body-1-bold)" }}>바텀시트</div>
          <div
            style={{
              marginTop: 8,
              font: "var(--text-body-2-regular)",
              color: "var(--color-font-tertiary)",
            }}
          >
            상단 두 코너만 24px, 좌우 하단 0
          </div>
        </div>
      </div>
    </div>
  ),
};
