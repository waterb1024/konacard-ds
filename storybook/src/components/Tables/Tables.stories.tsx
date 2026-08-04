import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../_placeholder/Placeholder";

const meta = {
  title: "Component/Tables",
  component: Placeholder,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "행과 열로 정렬된 데이터를 포함합니다.",
      },
    },
  },
  args: { name: "Tables" },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    name: "Tables",
    hint: "행과 열로 정렬된 데이터. Figma 스펙 대기 중.",
  },
};
