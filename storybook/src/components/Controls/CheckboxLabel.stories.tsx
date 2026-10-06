import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CheckboxLabel } from "./CheckboxLabel";

const meta = {
  title: "Component/Controls/Checkbox label",
  component: CheckboxLabel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Checkbox label (약관 동의 행). Figma controls/checkbox label (구 control/agree). " +
          "type 3종 (title / 1depth / 2depth) × state. AX 실측 값.",
      },
    },
  },
  argTypes: {
    type: {
      control: "inline-radio",
      options: ["title", "1depth", "2depth"],
    },
    checked: { control: "boolean" },
    children: { control: "text" },
    onChange: { table: { disable: true } },
    onArrowClick: { table: { disable: true } },
  },
  args: {
    type: "title",
    checked: false,
    children: "Title",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, width: 346, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckboxLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <CheckboxLabel {...args} checked={checked} onChange={setChecked} />;
  },
};

export const Matrix: Story = {
  name: "type × state 매트릭스",
  render: () => (
    <div style={{ display: "grid" }}>
      <CheckboxLabel type="title">Title</CheckboxLabel>
      <CheckboxLabel type="title" checked>
        Title
      </CheckboxLabel>
      <CheckboxLabel type="1depth">1 depth</CheckboxLabel>
      <CheckboxLabel type="1depth" checked>
        1 depth
      </CheckboxLabel>
      <CheckboxLabel type="2depth">2 depth</CheckboxLabel>
      <CheckboxLabel type="2depth" checked>
        2 depth
      </CheckboxLabel>
    </div>
  ),
};

export const AgreeGroup: Story = {
  name: "약관 동의 예시 (전체동의 연동)",
  render: () => {
    const items = [
      "[필수] 서비스 이용약관",
      "[필수] 개인정보 수집·이용 동의",
      "[선택] 마케팅 정보 수신 동의",
    ];
    const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
    const all = checked.every(Boolean);
    return (
      <div style={{ display: "grid" }}>
        <CheckboxLabel
          type="title"
          checked={all}
          onChange={(next) => setChecked(items.map(() => next))}
        >
          약관 전체 동의
        </CheckboxLabel>
        {items.map((label, i) => (
          <CheckboxLabel
            key={label}
            type="1depth"
            checked={checked[i]}
            onChange={(next) =>
              setChecked((prev) => prev.map((v, j) => (j === i ? next : v)))
            }
            onArrowClick={() => {}}
          >
            {label}
          </CheckboxLabel>
        ))}
      </div>
    );
  },
};
