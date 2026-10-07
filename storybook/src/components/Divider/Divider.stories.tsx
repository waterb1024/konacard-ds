import type { Meta, StoryObj } from "@storybook/react";
import type React from "react";
import { Divider } from "./Divider";
import type { DividerType } from "./Divider";

const TYPES: DividerType[] = ["solid", "dotted", "section", "vertical-12", "vertical-8"];

const meta = {
  title: "Component/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Divider — Figma `divider` (2026-10-07 line/solid · line/dotted · line/divider · line/divider-line 4개를 하나로 합침). " +
          "type: solid(실선) · dotted(점선 2/2) · section(섹션 사이 높이 10 띠) · vertical-12 / vertical-8(세로선) × color light · dark. " +
          "color 는 type 마다 실제 색이 다름 — 가로선 light 6% · dark 8%, 세로선 light 8% · dark 12%. section 은 light 만.",
      },
    },
  },
  argTypes: {
    type: { control: "inline-radio", options: TYPES },
    color: { control: "inline-radio", options: ["light", "dark"] },
  },
  args: { type: "solid", color: "light" },
  decorators: [
    (Story) => (
      <div style={{ padding: 24, background: "#FFFFFF", width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

const labelStyle: React.CSSProperties = {
  font: "var(--text-body-3-regular)",
  letterSpacing: "var(--font-letterspacing-xsmall)",
  color: "var(--color-font-tertiary)",
  marginBottom: 8,
};

export const Playground: Story = {};

export const Matrix: Story = {
  name: "Matrix — Figma 배치 (type × color)",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 24px", width: 440 }}>
      {TYPES.flatMap((t) =>
        (["light", "dark"] as const).map((c) =>
          t === "section" && c === "dark" ? (
            <div key={t + c} />
          ) : (
            <div key={t + c}>
              <div style={labelStyle}>
                {t} · {c}
              </div>
              <Divider type={t} color={c} />
            </div>
          ),
        ),
      )}
    </div>
  ),
};

/* ── 사용 예 ─────────────────────────────── */
export const InList: Story = {
  name: "사용 예 — 리스트 사이 (solid)",
  render: () => (
    <div>
      {["이용 안내", "자주 묻는 질문", "공지사항"].map((t, i, arr) => (
        <div key={t}>
          <div style={{ padding: "16px 0", font: "var(--text-body-1-regular)" }}>{t}</div>
          {i < arr.length - 1 && <Divider type="solid" />}
        </div>
      ))}
    </div>
  ),
};

export const BetweenSections: Story = {
  name: "사용 예 — 섹션 사이 (section)",
  render: () => (
    <div style={{ margin: "0 -24px" }}>
      <p style={{ margin: "0 24px 16px", font: "var(--text-body-2-regular)" }}>섹션 A</p>
      <Divider type="section" />
      <p style={{ margin: "16px 24px 0", font: "var(--text-body-2-regular)" }}>섹션 B</p>
    </div>
  ),
};

export const InlineVertical: Story = {
  name: "사용 예 — 글자 사이 (vertical-12 · vertical-8)",
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      {(["vertical-12", "vertical-8"] as const).map((t) => (
        <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--text-body-2-regular)" }}>
          혜택
          <Divider type={t} />
          사용내역
          <Divider type={t} />
          설정
        </span>
      ))}
    </div>
  ),
};
