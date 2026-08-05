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
          "KONACARD DS Text Button. konacard-ds-components.md § 02_Button > Text 버튼. " +
          "배경 없는 텍스트 링크성 버튼. 36h · 4 size × 4 color.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small", "tiny"],
    },
    color: {
      control: "inline-radio",
      options: ["black", "brand", "gray", "gray-light"],
    },
    underline: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "약관 보기",
    size: "medium",
    color: "black",
    underline: false,
    disabled: false,
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

export const Underlined: Story = {
  args: { color: "gray", underline: true, children: "이용약관" },
};

export const Disabled: Story = {
  args: { color: "brand", disabled: true, children: "완료" },
};

export const Matrix: Story = {
  name: "Matrix — Size × Color",
  render: () => {
    const sizes = ["large", "medium", "small", "tiny"] as const;
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
