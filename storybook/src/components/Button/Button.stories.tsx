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
          "KONACARD DS Button. konacard-ds-components.md § 02_Button 기준. " +
          "Size × Color × State(Default/Disable) 조합. Disable = Default × opacity 40%.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small"],
      description: "Large=56 / Medium=48 / Small=32",
    },
    color: {
      control: "select",
      options: [
        "Brand",
        "Brand_Light",
        "Brand_Line",
        "Brand_Gradient",
        "Gray",
        "Gray_Light",
        "Gray_Line",
        "Gray_Line_Light",
        "Dark",
      ],
      description: "Dark 는 Small 전용",
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "다음",
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

export const SmallDark: Story = {
  name: "Small / Dark",
  args: { size: "small", color: "Dark", children: "확인" },
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

/* ── 전체 매트릭스 (문서용) ────────────────────────── */
export const Matrix: Story = {
  name: "Matrix — Size × Color",
  parameters: {
    docs: {
      description: {
        story:
          "Size(Large/Medium/Small) × Color 조합. Small 만 Dark 사용, Large·Medium 은 미사용.",
      },
    },
  },
  render: () => {
    const largeColors: Array<
      "Brand" | "Brand_Light" | "Brand_Line" | "Gray" | "Gray_Line"
    > = ["Brand", "Brand_Light", "Brand_Line", "Gray", "Gray_Line"];
    const smallColors: Array<
      "Gray" | "Dark" | "Brand" | "Brand_Line" | "Gray_Line"
    > = ["Gray", "Dark", "Brand", "Brand_Line", "Gray_Line"];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <section>
          <h4 style={{ margin: "0 0 8px", font: "var(--text-body-2-bold)" }}>
            Large
          </h4>
          <div style={{ display: "grid", gap: 8 }}>
            {largeColors.map((c) => (
              <Button key={c} size="large" color={c} fullWidth>
                {c}
              </Button>
            ))}
          </div>
        </section>
        <section>
          <h4 style={{ margin: "0 0 8px", font: "var(--text-body-2-bold)" }}>
            Medium
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {largeColors.map((c) => (
              <Button key={c} size="medium" color={c}>
                {c}
              </Button>
            ))}
          </div>
        </section>
        <section>
          <h4 style={{ margin: "0 0 8px", font: "var(--text-body-2-bold)" }}>
            Small
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {smallColors.map((c) => (
              <Button key={c} size="small" color={c}>
                {c}
              </Button>
            ))}
          </div>
        </section>
      </div>
    );
  },
};
