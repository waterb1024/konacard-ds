import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox, AgreeRow } from "./Checkbox";

const meta = {
  title: "Component/Controls/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Checkbox. konacard-ds-components.md § 05_Control — 4 사이즈 " +
          "(24-icon / 24-box / 28 / 32). 32=전체동의, 28=일반 세부, 24-icon=팝업 세부, 24-box=폼 다중선택.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["24-icon", "24-box", "28", "32"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { size: "28", checked: false, disabled: false },
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

export const Size24Icon: Story = {
  args: { size: "24-icon", checked: true },
};
export const Size24Box: Story = {
  args: { size: "24-box", checked: true },
};
export const Size28: Story = { args: { size: "28", checked: true } };
export const Size32: Story = { args: { size: "32", checked: true } };

export const SizeMatrix: Story = {
  name: "Size × State Matrix",
  render: () => {
    const sizes = ["24-icon", "24-box", "28", "32"] as const;
    return (
      <div style={{ display: "grid", gap: 20 }}>
        {sizes.map((s) => (
          <div
            key={s}
            style={{ display: "flex", gap: 16, alignItems: "center" }}
          >
            <span
              style={{
                font: "var(--text-body-3-regular)",
                width: 80,
                color: "var(--color-font-tertiary)",
              }}
            >
              {s}
            </span>
            <Checkbox size={s} checked={false} />
            <Checkbox size={s} checked />
            <Checkbox size={s} checked={false} disabled />
            <Checkbox size={s} checked disabled />
          </div>
        ))}
      </div>
    );
  },
};

export const AgreeList: Story = {
  name: "control/agree — 약관 동의 리스트",
  render: () => {
    const [all, setAll] = useState(false);
    const [detail1, setDetail1] = useState(false);
    const [detail2, setDetail2] = useState(false);
    return (
      <div style={{ width: 320, display: "grid", gap: 4 }}>
        <AgreeRow
          size="32"
          bold
          checked={all}
          onChange={(v) => {
            setAll(v);
            setDetail1(v);
            setDetail2(v);
          }}
        >
          약관 전체동의
        </AgreeRow>
        <AgreeRow
          size="28"
          checked={detail1}
          onChange={setDetail1}
          showChevron
        >
          (필수) 개인정보 수집·이용 동의
        </AgreeRow>
        <AgreeRow
          size="28"
          checked={detail2}
          onChange={setDetail2}
          showChevron
        >
          (선택) 마케팅 정보 수신 동의
        </AgreeRow>
      </div>
    );
  },
};
