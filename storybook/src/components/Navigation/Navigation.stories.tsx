import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../_placeholder/Placeholder";

const meta = {
  title: "Component/Navigation",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "사용자가 필요한 것을 찾도록 돕고 현재 위치를 알려주는 컴포넌트.",
      },
    },
  },
  args: { name: "Navigation" },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    name: "Navigation",
    hint: "사용자가 필요한 것을 찾도록 돕고 현재 위치를 알려주는 컴포넌트. Figma 스펙 대기 중.",
  },
};
