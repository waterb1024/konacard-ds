import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SwitchLabel } from "./SwitchLabel";

const meta = {
  title: "Component/Controls/Switch label",
  component: SwitchLabel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Switch label (설정 항목 행). Figma controls/swtich label (구 control/swtich_setting). " +
          "size 2종 (large / small) × 안내 문구 유무. 360 폭 · 좌우 20 · 하단 구분선. AX 실측 값.",
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["large", "small"] },
    title: { control: "text" },
    guide: { control: "boolean", description: "Figma 속성 guide — 아래 회색 안내 문구 켜기/끄기" },
    guideText: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { table: { disable: true } },
  },
  args: {
    size: "large",
    title: "타이틀",
    guide: true,
    guideText: "항목에 따른 안내 가이드를 보여줍니다.",
    checked: true,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SwitchLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <SwitchLabel {...args} checked={checked} onChange={setChecked} />;
  },
};

export const Matrix: Story = {
  name: "size × guide 매트릭스",
  render: () => (
    <div style={{ display: "grid" }}>
      <SwitchLabel size="large" title="타이틀" checked />
      <SwitchLabel size="large" title="타이틀" guide={false} />
      <SwitchLabel size="small" title="타이틀" checked />
      <SwitchLabel size="small" title="타이틀" guide={false} />
    </div>
  ),
};

export const SettingsExample: Story = {
  name: "설정 화면 예시",
  render: () => {
    const [push, setPush] = useState(true);
    const [marketing, setMarketing] = useState(false);
    return (
      <div style={{ display: "grid" }}>
        <SwitchLabel title="알림 받기" guideText="새로운 혜택과 안내를 알려드려요." checked={push} onChange={setPush} />
        <SwitchLabel title="마케팅 정보 수신" guideText="이메일·문자로 이벤트 소식을 받습니다." checked={marketing} onChange={setMarketing} />
      </div>
    );
  },
};
