import type { Meta, StoryObj } from "@storybook/react";
import {
  Divider,
  DividerDotted,
  DividerSection,
  DividerSolid,
  DividerVertical,
} from "./Divider";

const meta = {
  title: "Component/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Divider (07_Line). Figma: Nv4o6ozSx5W4w10uFnQIs5 / 9362:7756. " +
          "Solid · Dotted (dashed 2/2) · Section (10px band) · Vertical (1×8/12/16 인라인 구분자).",
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["solid", "dotted", "section", "vertical"],
    },
    color: {
      control: "inline-radio",
      options: ["light", "dark", "white"],
    },
    size: {
      control: "inline-radio",
      options: ["8", "12", "16"],
    },
  },
  args: { variant: "solid", color: "light", size: "12" },
  decorators: [
    (Story) => (
      <div
        style={{ padding: 24, background: "#FFFFFF", width: 320 }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/* ── Solid ────────────────────────────────── */
export const Solid: Story = {
  name: "Solid (1px 가로선)",
  render: () => (
    <div style={{ display: "grid", gap: 24 }}>
      <div>
        <div style={labelStyle}>color=light — rgba(0,0,0,0.06)</div>
        <DividerSolid color="light" />
      </div>
      <div>
        <div style={labelStyle}>color=dark — rgba(0,0,0,0.08)</div>
        <DividerSolid color="dark" />
      </div>
    </div>
  ),
};

/* ── Dotted ───────────────────────────────── */
export const Dotted: Story = {
  name: "Dotted (dash 2/2)",
  render: () => (
    <div style={{ display: "grid", gap: 24 }}>
      <div>
        <div style={labelStyle}>color=light</div>
        <DividerDotted color="light" />
      </div>
      <div>
        <div style={labelStyle}>color=dark</div>
        <DividerDotted color="dark" />
      </div>
      <div style={{ background: "#000", padding: 12, borderRadius: 4 }}>
        <div style={{ ...labelStyle, color: "#ccc" }}>color=white (다크 배경)</div>
        <DividerDotted color="white" />
      </div>
    </div>
  ),
};

/* ── Section (10px 두꺼운 밴드) ────────────── */
export const Section: Story = {
  name: "Section (10px 섹션 구분)",
  render: () => (
    <div style={{ display: "grid", gap: 24 }}>
      <div>
        <div style={labelStyle}>color=light</div>
        <p style={{ margin: 0, font: "var(--text-body-2-regular)" }}>
          섹션 A · 위 컨텐츠
        </p>
        <DividerSection color="light" />
        <p style={{ margin: 0, font: "var(--text-body-2-regular)" }}>
          섹션 B · 아래 컨텐츠
        </p>
      </div>
      <div>
        <div style={labelStyle}>color=dark</div>
        <p style={{ margin: 0, font: "var(--text-body-2-regular)" }}>섹션 A</p>
        <DividerSection color="dark" />
        <p style={{ margin: 0, font: "var(--text-body-2-regular)" }}>섹션 B</p>
      </div>
    </div>
  ),
};

/* ── Vertical (인라인 텍스트 구분자) ────────── */
export const Vertical: Story = {
  name: "Vertical (1×8/12/16 인라인 구분자)",
  render: () => (
    <div style={{ display: "grid", gap: 20 }}>
      {(["8", "12", "16"] as const).map((s) => (
        <div key={s}>
          <div style={labelStyle}>size={s}</div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              font: "var(--text-body-2-regular)",
              color: "var(--color-font-primary)",
            }}
          >
            혜택
            <DividerVertical size={s} color="light" />
            사용내역
            <DividerVertical size={s} color="light" />
            설정
          </span>
        </div>
      ))}
      <div style={{ background: "#000", padding: 12, borderRadius: 4 }}>
        <div style={{ ...labelStyle, color: "#ccc" }}>
          color=white — 다크 배경 위
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            font: "var(--text-body-2-regular)",
            color: "#fff",
          }}
        >
          Item A
          <DividerVertical size="12" color="white" />
          Item B
          <DividerVertical size="12" color="white" />
          Item C
        </span>
      </div>
    </div>
  ),
};

/* ── 실제 사용예 — 리스트 사이 구분 ─────────── */
export const InListContext: Story = {
  name: "사용예 — 리스트 사이",
  render: () => (
    <div
      style={{
        border: "1px solid var(--color-border-default)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {["이용 안내", "자주 묻는 질문", "공지사항"].map((t, i, arr) => (
        <div key={t}>
          <div
            style={{
              padding: "16px 20px",
              font: "var(--text-body-1-regular)",
            }}
          >
            {t}
          </div>
          {i < arr.length - 1 && <DividerSolid color="light" />}
        </div>
      ))}
    </div>
  ),
};

const labelStyle: React.CSSProperties = {
  font: "var(--text-body-3-regular)",
  letterSpacing: "var(--font-letterspacing-xsmall)",
  color: "var(--color-font-tertiary)",
  marginBottom: 8,
};
