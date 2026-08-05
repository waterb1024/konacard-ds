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
          "KONACARD DS Icon Button. konacard-ds-components.md § 02_Button > Icon 버튼. " +
          "텍스트 + 우측 chevron(>). 진입형 리스트 아이템·설정 아이템 등에 사용.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small", "tiny"],
    },
    weight: { control: "inline-radio", options: ["bold", "regular"] },
    type: {
      control: "inline-radio",
      options: ["black", "brand", "gray"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "자세히 보기",
    size: "medium",
    weight: "bold",
    type: "black",
    disabled: false,
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
  args: { disabled: true, children: "완료 대기" },
};

export const Matrix: Story = {
  name: "Matrix — Size × Weight × Type",
  render: () => {
    const sizes = ["large", "medium", "small", "tiny"] as const;
    const types = ["black", "brand", "gray"] as const;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {types.map((t) => (
          <section key={t}>
            <h4 style={{ margin: "0 0 8px", font: "var(--text-body-2-bold)" }}>
              type = {t}
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {sizes.map((s) => (
                <IconButton key={`${s}-bold`} size={s} weight="bold" type={t}>
                  {s} bold
                </IconButton>
              ))}
              {sizes.map((s) => (
                <IconButton
                  key={`${s}-regular`}
                  size={s}
                  weight="regular"
                  type={t}
                >
                  {s} regular
                </IconButton>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  },
};
