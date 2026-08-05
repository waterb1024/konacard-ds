import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio } from "./Radio";

const meta = {
  title: "Component/Controls/Radio button",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Radio. konacard-ds-components.md § 05_Control (controls/radio button). " +
          "4 size × 2 state × 2 status. Figma vector 좌표 이식.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small", "tiny"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    type: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  args: {
    size: "large",
    checked: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [on, setOn] = useState(args.checked ?? false);
    return <Radio {...args} checked={on} onChange={setOn} />;
  },
};

export const Selected: Story = { args: { size: "large", checked: true } };
export const Unselected: Story = {
  args: { size: "large", checked: false },
};

export const Matrix: Story = {
  name: "Size × State Matrix",
  render: () => {
    const sizes = ["large", "medium", "small", "tiny"] as const;
    return (
      <div style={{ display: "grid", gap: 16 }}>
        {sizes.map((s) => (
          <div
            key={s}
            style={{ display: "flex", gap: 16, alignItems: "center" }}
          >
            <span
              style={{
                font: "var(--text-body-3-regular)",
                width: 60,
                color: "var(--color-font-tertiary)",
              }}
            >
              {s}
            </span>
            <Radio size={s} checked={false} />
            <Radio size={s} checked />
            <Radio size={s} checked={false} disabled />
            <Radio size={s} checked disabled />
          </div>
        ))}
      </div>
    );
  },
};

export const RadioGroup: Story = {
  name: "결제 수단 선택 그룹 예시",
  render: () => {
    const [value, setValue] = useState("credit");
    const options = [
      { id: "credit", label: "신용카드" },
      { id: "check", label: "체크카드" },
      { id: "bank", label: "계좌이체" },
    ];
    return (
      <div style={{ display: "grid", gap: 12 }}>
        {options.map((o) => (
          <label
            key={o.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              font: "var(--text-body-1-regular)",
              letterSpacing: "var(--font-letterspacing-medium)",
              color: "var(--color-font-primary)",
            }}
          >
            <Radio
              size="large"
              checked={value === o.id}
              onChange={() => setValue(o.id)}
            />
            {o.label}
          </label>
        ))}
      </div>
    );
  },
};
