import type { Meta, StoryObj } from "@storybook/react";
import { Selectbox } from "./Selectbox";

const meta = {
  title: "Component/Select",
  component: Selectbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Selectbox. konacard-ds-components.md § 04_Forms 기준. " +
          "State 5단계: Default / Active(펼침) / Select(선택완료) / Inactive / Error. " +
          "Active 일 때 chevron 이 위쪽(^) 로 회전.",
      },
    },
  },
  argTypes: {
    state: {
      control: "inline-radio",
      options: ["default", "active", "select", "inactive", "error"],
    },
    value: { control: "text" },
    placeholder: { control: "text" },
  },
  args: {
    state: "default",
    placeholder: "선택",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF", width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Selectbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = { args: { state: "default" } };

export const Active: Story = {
  name: "Active (펼침)",
  args: { state: "active", value: "신용카드" },
};

export const Select: Story = {
  name: "Select (선택완료)",
  args: { state: "select", value: "신용카드" },
};

export const Inactive: Story = {
  args: { state: "inactive", placeholder: "선택 불가" },
};

export const ErrorState: Story = {
  name: "Error",
  args: { state: "error", value: "선택 필요" },
};

export const StateMatrix: Story = {
  name: "State Matrix",
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <Selectbox state="default" placeholder="카드 종류 선택" />
      <Selectbox state="active" value="신용카드" />
      <Selectbox state="select" value="신용카드" />
      <Selectbox state="inactive" placeholder="선택 불가" />
      <Selectbox state="error" value="선택이 필요합니다" />
    </div>
  ),
};
