import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../_placeholder/Placeholder";

const meta = {
  title: "Component/Indicator",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "정보의 총량과 사용자가 현재 속한 지점을 숫자·기호로 안내합니다.",
      },
    },
  },
  args: { name: "Indicator" },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    name: "Indicator",
    hint: "정보의 총량과 사용자의 현재 지점을 숫자·기호로 안내. Figma 스펙 대기 중.",
  },
};
