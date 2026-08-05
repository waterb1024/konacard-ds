import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Component/Controls/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Checkbox. konacard-ds-components.md § 05_Control (controls/check box). " +
          "4 style × 4 size. Figma vector path 이식.",
      },
    },
  },
  argTypes: {
    style: {
      control: "inline-radio",
      options: ["circle", "square-fill", "square-line", "line"],
    },
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small", "tiny"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    style: "circle",
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [on, setOn] = useState(args.checked ?? false);
    return <Checkbox {...args} checked={on} onChange={setOn} />;
  },
};

export const Circle: Story = {
  args: { style: "circle", checked: true },
};
export const SquareFill: Story = {
  args: { style: "square-fill", checked: true },
};
export const SquareLine: Story = {
  args: { style: "square-line", checked: true },
};
export const Line: Story = {
  args: { style: "line", checked: true },
};

export const Matrix: Story = {
  name: "Style × Size Matrix",
  render: () => {
    const styles = ["circle", "square-fill", "square-line", "line"] as const;
    const sizes = ["large", "medium", "small", "tiny"] as const;
    return (
      <div style={{ display: "grid", gap: 24 }}>
        {styles.map((st) => (
          <section key={st}>
            <h4 style={{ margin: "0 0 8px", font: "var(--text-body-2-bold)" }}>
              style = {st}
            </h4>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              {sizes.map((sz) => (
                <div
                  key={sz}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      font: "var(--text-body-3-regular)",
                      color: "var(--color-font-tertiary)",
                    }}
                  >
                    {sz}
                  </span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Checkbox style={st} size={sz} checked={false} />
                    <Checkbox style={st} size={sz} checked />
                    <Checkbox style={st} size={sz} checked disabled />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  },
};
