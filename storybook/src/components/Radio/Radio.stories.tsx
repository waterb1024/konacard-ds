import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio, RadioText } from "./Radio";

const meta = {
  title: "Component/Controls/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Radio. konacard-ds-components.md § 05_Control — 단일 선택. " +
          "사이즈 24 / 28. Selected 내부 도트 브랜드 보라.",
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["24", "28"] },
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [on, setOn] = useState(args.checked ?? false);
    return <Radio {...args} checked={on} onChange={setOn} />;
  },
};

export const Size28: Story = { args: { size: "28", checked: true } };
export const Size24: Story = { args: { size: "24", checked: true } };

export const SizeMatrix: Story = {
  name: "Size × State Matrix",
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      {(["28", "24"] as const).map((s) => (
        <div key={s} style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span
            style={{
              font: "var(--text-body-3-regular)",
              width: 40,
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
  ),
};

export const RadioGroup: Story = {
  name: "radio-text (Basic) — 결제 수단 선택",
  render: () => {
    const [value, setValue] = useState("credit");
    const options = [
      { id: "credit", label: "신용카드" },
      { id: "check", label: "체크카드" },
      { id: "bank", label: "계좌이체" },
    ];
    return (
      <div style={{ display: "grid", gap: 4 }}>
        {options.map((o) => (
          <RadioText
            key={o.id}
            variant="basic"
            checked={value === o.id}
            onChange={() => setValue(o.id)}
          >
            {o.label}
          </RadioText>
        ))}
      </div>
    );
  },
};

export const RadioGroupSmall: Story = {
  name: "radio-text (Small) — 인라인 옵션",
  render: () => {
    const [value, setValue] = useState<"m" | "f">("m");
    return (
      <div style={{ display: "flex", gap: 16 }}>
        <RadioText
          variant="small"
          checked={value === "m"}
          onChange={() => setValue("m")}
        >
          남성
        </RadioText>
        <RadioText
          variant="small"
          checked={value === "f"}
          onChange={() => setValue("f")}
        >
          여성
        </RadioText>
      </div>
    );
  },
};
