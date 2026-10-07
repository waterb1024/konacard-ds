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
          "4 style × state × status. 크기는 style 마다 고정 (circle 28 · square-fill 20 · square-line 24 · line 24). Figma(AX) 실측 좌표·선 두께·모서리 그대로. Disable = opacity 40%.",
      },
    },
  },
  argTypes: {
    style: {
      control: "inline-radio",
      options: ["circle", "square-fill", "square-line", "line"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    // HTML button 상속 attrs 는 Docs 에서 숨김 (내부 고정 값이거나 컴포넌트 API 아님)
    type: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  args: {
    style: "circle",
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
  name: "Style × State Matrix",
  render: () => {
    const styles = ["circle", "square-fill", "square-line", "line"] as const;
    return (
      <div style={{ display: "grid", gap: 16 }}>
        {styles.map((st) => (
          <div
            key={st}
            style={{ display: "flex", gap: 16, alignItems: "center" }}
          >
            <span
              style={{
                font: "var(--text-body-3-regular)",
                width: 90,
                color: "var(--color-font-tertiary)",
              }}
            >
              {st}
            </span>
            <Checkbox style={st} checked={false} />
            <Checkbox style={st} checked />
            <Checkbox style={st} checked={false} disabled />
            <Checkbox style={st} checked disabled />
          </div>
        ))}
      </div>
    );
  },
};
