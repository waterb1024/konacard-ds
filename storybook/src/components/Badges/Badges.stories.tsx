import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../_placeholder/Placeholder";

const meta = {
  title: "Component/Badges",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "정보를 강조하거나 새로운 업데이트 및 알림에 대한 정보를 제공하는 구성 요소.",
      },
    },
  },
  args: { name: "Badges" },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    name: "Badges",
    hint: "정보를 강조하거나 새로운 업데이트·알림에 대한 정보를 제공하는 구성 요소. Figma 스펙 대기 중.",
  },
};
