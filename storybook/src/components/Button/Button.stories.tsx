import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Component/Button/Box",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Button (Box). Figma button/button — AX 실측 값. " +
          "variant(primary · secondary) × size × color × 비활성(disabled). " +
          "primary 는 large 56 · medium 48 · small 40 (Bold), secondary 는 large 40 · medium 32 · small 24 · tiny 24 (Regular). " +
          "비활성은 opacity 40% — 단 primary brand 는 회색 바탕(#DDD), large 만 흐림 없음.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary"],
      description: "Figma style",
    },
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small", "tiny"],
      description: "primary: large 56 / medium 48 / small 40 · secondary: large 40 / medium 32 / small 24 / tiny 24 (tiny 는 secondary 전용)",
    },
    color: {
      control: "select",
      options: [
        "Brand",
        "Brand_Light",
        "Brand_Line",
        "Gray",
        "Gray_Light",
        "Gray_Line",
        "Gray_Line_Light",
      ],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "다음",
    variant: "primary",
    size: "large",
    color: "Brand",
    disabled: false,
    fullWidth: false,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── 기본 Playground ────────────────────────────────── */
export const Playground: Story = {};

/* ── Size — Large ─────────────────────────────────── */
export const LargeBrand: Story = {
  name: "Large / Brand (Primary CTA)",
  args: { size: "large", color: "Brand", fullWidth: true, children: "확인" },
};

export const LargeBrandLine: Story = {
  name: "Large / Brand_Line",
  args: {
    size: "large",
    color: "Brand_Line",
    fullWidth: true,
    children: "이전",
  },
};

export const LargeGray: Story = {
  name: "Large / Gray",
  args: { size: "large", color: "Gray", fullWidth: true, children: "취소" },
};

export const LargeDisabled: Story = {
  name: "Large / Disabled",
  args: {
    size: "large",
    color: "Brand",
    fullWidth: true,
    disabled: true,
    children: "확인",
  },
};

/* ── Size — Medium ────────────────────────────────── */
export const MediumBrand: Story = {
  name: "Medium / Brand",
  args: { size: "medium", color: "Brand", children: "저장하기" },
};

export const MediumBrandLine: Story = {
  name: "Medium / Brand_Line",
  args: { size: "medium", color: "Brand_Line", children: "이전으로" },
};

/* ── Size — Small ─────────────────────────────────── */
export const SmallGrayLine: Story = {
  name: "Small / Gray_Line (편집)",
  args: { size: "small", color: "Gray_Line", children: "편집" },
};

export const SmallBrandLine: Story = {
  name: "Small / Brand_Line (강조)",
  args: { size: "small", color: "Brand_Line", children: "인증하기" },
};

/* ── 병렬 CTA (3.5 : 6.5) ─────────────────────────── */
export const FixedBottomPair: Story = {
  name: "Fixed-Bottom 병렬 CTA (3.5:6.5)",
  parameters: {
    docs: {
      description: {
        story:
          "components.md § Fixed-Bottom 병렬 규칙: 좌 3.5 = 보조(Gray/Line), 우 6.5 = 주(Brand). 파괴적 액션은 좌측.",
      },
    },
  },
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 8,
        width: 320,
        padding: "8px 0",
      }}
    >
      <div style={{ flex: "3.5" }}>
        <Button size="large" color="Gray" fullWidth>
          취소
        </Button>
      </div>
      <div style={{ flex: "6.5" }}>
        <Button size="large" color="Brand" fullWidth>
          확인
        </Button>
      </div>
    </div>
  ),
};

/* ── 전체 매트릭스 (Figma 배치 그대로) ───────────────── */
const COLORS = [
  "Brand_Light",
  "Brand",
  "Brand_Line",
  "Gray_Light",
  "Gray",
  "Gray_Line",
  "Gray_Line_Light",
] as const;

const ROWS = [
  ["primary", "large"],
  ["primary", "medium"],
  ["primary", "small"],
  ["secondary", "large"],
  ["secondary", "medium"],
  ["secondary", "small"],
  ["secondary", "tiny"],
] as const;

export const Matrix: Story = {
  name: "Matrix — variant × size × color × 비활성",
  parameters: {
    docs: {
      description: {
        story: "Figma button/button 과 같은 배치. 각 묶음 윗줄 = 활성, 아랫줄 = 비활성(disabled).",
      },
    },
  },
  render: () => (
    <div style={{ display: "grid", gap: 24 }}>
      {ROWS.map(([v, s]) => (
        <section key={v + s}>
          <h4 style={{ margin: "0 0 8px", font: "var(--text-body-3-bold)", color: "var(--color-font-tertiary)" }}>
            {v} / {s}
          </h4>
          {[false, true].map((dis) => (
            <div key={String(dis)} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              {COLORS.map((c) => (
                <Button key={c} variant={v} size={s} color={c} disabled={dis}>
                  Button
                </Button>
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  ),
};
