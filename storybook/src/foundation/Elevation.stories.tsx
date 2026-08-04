import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

const meta: Meta = {
  title: "Foundation/Elevation",
  parameters: {
    docs: {
      description: {
        component:
          "konacard-ds-foundation.md § Elevation & Depth. " +
          "KONACARD 앱(AOS)은 그림자를 최소화 — 배경색·구분선·오버레이로 계층 표현.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

/** 앱에서 계층을 표현하는 4가지 시각 도구 */
export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Elevation & Depth</h1>
      <p className={styles.intro}>
        KONACARD 앱은 그림자(shadow)를 최소화합니다. 계층은 <b>배경색 대비</b>,
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

      <h2 className={styles.h2}>2) 구분선 — line/solid</h2>
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

      <h2 className={styles.h2}>웹 전용 Shadow 토큰 (⚠ 앱 미적용)</h2>
      <div className={styles.note}>
        Figma DS(Elevation 페이지)에는 웹 전용 6단 shadow 토큰이 정의되어 있습니다.
        <b> 앱에는 적용하지 않음.</b> Figma 원본상 "가이드 정리 후 적용 예정" 상태로
        offset/blur/color 값이 미확정입니다. 사용 전 Figma variables 에서 실값 확인 필요.
      </div>
      <div className={styles.gridSingleCol}>
        {[
          { name: "$shadow-pressed", usage: "눌린 상태" },
          { name: "$shadow-button", usage: "버튼 기본" },
          { name: "$shadow-navigation", usage: "네비게이션" },
          { name: "$shadow-card", usage: "카드" },
          { name: "$shadow-deep", usage: "강한 elevation" },
          { name: "$shadow-active", usage: "활성 상태" },
        ].map((s) => (
          <div key={s.name} className={styles.row}>
            <span className={styles.rowLabel}>{s.name}</span>
            <span className={styles.rowValue}>미확정</span>
            <span className={styles.rowSample}>{s.usage}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
