import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "./Switch";

const meta = {
  title: "Component/Controls/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Switch. konacard-ds-components.md § 05_Control (controls/swtich). " +
          "4 size × 2 state × 2 status. Disable = Default × opacity 40%.",
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
  args: { size: "large", checked: false, disabled: false },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [on, setOn] = useState(args.checked ?? false);
    return <Switch {...args} checked={on} onChange={setOn} />;
  },
};

export const Large: Story = { args: { size: "large", checked: true } };
export const Medium: Story = { args: { size: "medium", checked: true } };
export const Small: Story = { args: { size: "small", checked: true } };
export const Tiny: Story = { args: { size: "tiny", checked: true } };

export const Disabled: Story = {
  name: "Disabled (opacity 40%)",
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Switch size="large" checked={false} disabled />
      <Switch size="large" checked disabled />
    </div>
  ),
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
            <Switch size={s} checked={false} />
            <Switch size={s} checked />
            <Switch size={s} checked={false} disabled />
            <Switch size={s} checked disabled />
          </div>
        ))}
      </div>
    );
  },
};
