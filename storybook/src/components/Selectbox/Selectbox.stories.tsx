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
          "State 4단계(Default/Active/Inactive/Error) — Focus·Complete 상태 없음.",
      },
    },
  },
  argTypes: {
    state: {
      control: "inline-radio",
      options: ["default", "active", "inactive", "error"],
    },
    open: { control: "boolean" },
    value: { control: "text" },
    placeholder: { control: "text" },
  },
  args: {
    state: "default",
    placeholder: "선택",
    open: false,
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
  args: { state: "active", value: "신용카드" },
};

export const ActiveOpen: Story = {
  name: "Active (열림 — chevron 위)",
  args: { state: "active", value: "신용카드", open: true },
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
      <Selectbox state="active" value="신용카드" open />
      <Selectbox state="inactive" placeholder="선택 불가" />
      <Selectbox state="error" value="선택이 필요합니다" />
    </div>
  ),
};
