import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "./TextButton";

const meta = {
  title: "Component/Button/Text",
  component: TextButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Text Button — 밑줄 있는 글자 버튼. Figma button/text button, AX 실측 값. " +
          "size large 36 (14) · medium 32 (12) · small 24 (11) × color 4종. 비활성 디자인 없음.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small"],
    },
    color: {
      control: "inline-radio",
      options: ["black", "brand", "gray", "gray-light"],
    },
    children: { control: "text" },
  },
  args: {
    children: "약관 보기",
    size: "large",
    color: "black",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Black: Story = { args: { color: "black", children: "약관 보기" } };
export const Brand: Story = {
  args: { color: "brand", children: "인증하기" },
};
export const Gray: Story = { args: { color: "gray", children: "다시 보기" } };
export const GrayLight: Story = {
  name: "Gray_Light",
  args: { color: "gray-light", children: "지원 안 됨" },
};

export const Matrix: Story = {
  name: "Matrix — Size × Color",
  render: () => {
    const sizes = ["large", "medium", "small"] as const;
    const colors = ["black", "brand", "gray", "gray-light"] as const;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {colors.map((c) => (
          <section key={c}>
            <h4 style={{ margin: "0 0 8px", font: "var(--text-body-2-bold)" }}>
              color = {c}
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {sizes.map((s) => (
                <TextButton key={s} size={s} color={c}>
                  {s} {c}
                </TextButton>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  },
};
