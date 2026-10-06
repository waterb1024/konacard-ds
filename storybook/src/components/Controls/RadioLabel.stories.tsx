import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioLabel } from "./RadioLabel";

const meta = {
  title: "Component/Controls/Radio label",
  component: RadioLabel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Radio label (라디오 + 텍스트 인라인 옵션). Figma controls/radio label (구 control/radio-text). " +
          "size=small 1종 — radio 24 + body/1-regular, 항목 사이 gap 16. AX 실측 값.",
      },
    },
  },
  argTypes: {
    value: { control: "text" },
    onChange: { table: { disable: true } },
  },
  args: {
    options: [
      { value: "a", label: "Text" },
      { value: "b", label: "Text" },
    ],
    value: "a",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadioLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <RadioLabel {...args} value={value} onChange={setValue} />;
  },
};

export const Example: Story = {
  name: "인라인 옵션 예시",
  render: () => {
    const [value, setValue] = useState("personal");
    return (
      <RadioLabel
        value={value}
        onChange={setValue}
        options={[
          { value: "personal", label: "개인" },
          { value: "corporate", label: "법인" },
          { value: "etc", label: "기타", disabled: true },
        ]}
      />
    );
  },
};
