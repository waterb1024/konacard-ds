import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch, SwitchSetting } from "./Switch";

const meta = {
  title: "Component/Controls/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Switch. konacard-ds-components.md § 05_Control — 즉시 반영 On/Off 토글. " +
          "Disable = Default × opacity 40%.",
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

export const SizeMatrix: Story = {
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

export const SwitchSettingRow: Story = {
  name: "switch_setting (Title + Desc + Switch)",
  render: () => {
    const [notif, setNotif] = useState(true);
    const [marketing, setMarketing] = useState(false);
    return (
      <div style={{ display: "grid", gap: 8, width: 320 }}>
        <SwitchSetting
          title="알림 받기"
          description="새로운 혜택과 안내를 알려드려요."
          checked={notif}
          onChange={setNotif}
        />
        <SwitchSetting
          title="마케팅 정보 수신"
          description="이메일·문자로 이벤트 소식을 받습니다."
          checked={marketing}
          onChange={setMarketing}
          background="gray"
        />
      </div>
    );
  },
};
