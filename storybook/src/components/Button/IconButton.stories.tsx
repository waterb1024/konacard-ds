import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta = {
  title: "Component/Button/Icon",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Icon Button — 글자 + 오른쪽 화살표(>). Figma button/icon button, AX 실측 값 · 화살표는 Figma 원본 SVG. " +
          "size large 40 · medium 32 · small 24 × weight × type. 비활성은 Figma variant 없이 DS 공통 규칙(전체 40% 흐림)으로 처리.",
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small"],
    },
    weight: { control: "inline-radio", options: ["bold", "regular"] },
    type: {
      control: "inline-radio",
      options: ["black", "brand", "gray"],
    },
    children: { control: "text" },
  },
  args: {
    children: "자세히 보기",
    size: "large",
    weight: "regular",
    type: "gray",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Black: Story = {
  args: { type: "black", children: "자세히 보기" },
};

export const Brand: Story = {
  args: { type: "brand", children: "인증하기" },
};

export const Gray: Story = {
  args: { type: "gray", children: "이용안내" },
};

export const Regular: Story = {
  args: { weight: "regular", children: "약관 보기" },
};

export const Disabled: Story = {
  name: "비활성 (DS 공통 규칙 · 40% 흐림)",
  args: { disabled: true, children: "자세히 보기" },
};

export const Matrix: Story = {
  name: "Matrix — Figma 배치 (size × weight × type)",
  render: () => {
    const sizes = ["large", "medium", "small"] as const;
    const cols = [
      ["regular", "gray"], ["regular", "black"], ["regular", "brand"],
      ["bold", "gray"], ["bold", "black"], ["bold", "brand"],
    ] as const;
    return (
      <div style={{ display: "grid", gap: 16 }}>
        {sizes.map((s) => (
          <div key={s} style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span style={{ width: 56, font: "var(--text-body-3-regular)", color: "var(--color-font-quaternary)" }}>{s}</span>
            {cols.map(([w, t]) => (
              <IconButton key={w + t} size={s} weight={w} type={t}>
                Button
              </IconButton>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
