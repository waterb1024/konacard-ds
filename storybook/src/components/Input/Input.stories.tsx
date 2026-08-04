import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Inputbox. konacard-ds-components.md § 04_Forms 기준. " +
          "48h · R6 · padding 16 · State 6종(Default/Focus/Active/Complete/Inactive/Error).",
      },
    },
  },
  argTypes: {
    state: {
      control: "inline-radio",
      options: ["default", "focus", "active", "complete", "inactive", "error"],
    },
    guideTone: {
      control: "select",
      options: [
        "info-gray",
        "info-black",
        "guide-gray",
        "guide-black",
        "error",
      ],
    },
    showClear: { control: "boolean" },
    title: { control: "text" },
    guide: { control: "text" },
    placeholder: { control: "text" },
  },
  args: {
    state: "default",
    placeholder: "이름을 입력하세요",
    title: "이름",
    guide: "",
    guideTone: "info-gray",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#FFFFFF", width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { state: "default", title: "이름", placeholder: "이름을 입력하세요" },
};

export const Focus: Story = {
  args: {
    state: "focus",
    title: "이름",
    placeholder: "이름을 입력하세요",
  },
};

export const Active: Story = {
  args: {
    state: "active",
    title: "이름",
    defaultValue: "홍길동",
  },
};

export const Complete: Story = {
  args: {
    state: "complete",
    title: "이름",
    defaultValue: "홍길동",
  },
};

export const Inactive: Story = {
  args: {
    state: "inactive",
    title: "이름",
    defaultValue: "입력 불가",
  },
};

export const ErrorState: Story = {
  name: "Error",
  args: {
    state: "error",
    title: "이메일",
    defaultValue: "wrong@",
    guide: "올바른 이메일 형식이 아닙니다.",
    guideTone: "error",
  },
};

export const WithGuideInfo: Story = {
  name: "Guide Text — info(Gray)",
  args: {
    state: "default",
    title: "휴대폰 번호",
    placeholder: "숫자만 입력",
    guide: "숫자만 입력 가능",
    guideTone: "info-gray",
  },
};

export const WithGuideBlack: Story = {
  name: "Guide Text — Guide(Black)",
  args: {
    state: "active",
    title: "충전 금액",
    defaultValue: "50,000",
    guide: "잔액 100,000원 이하로 입력하세요",
    guideTone: "guide-black",
  },
};

export const StateMatrix: Story = {
  name: "State Matrix",
  parameters: {
    docs: {
      description: {
        story:
          "Default → Focus → Active → Complete → Inactive → Error 6단계. Active/Error 는 clear(×) 노출.",
      },
    },
  },
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      <Input state="default" title="Default" placeholder="입력 대기" />
      <Input state="focus" title="Focus" placeholder="포커스됨" />
      <Input state="active" title="Active" defaultValue="편집 중" />
      <Input state="complete" title="Complete" defaultValue="확정됨" />
      <Input state="inactive" title="Inactive" defaultValue="비활성" />
      <Input
        state="error"
        title="Error"
        defaultValue="잘못된 값"
        guide="검증 실패 메시지"
        guideTone="error"
      />
    </div>
  ),
};

export const BasicComposition: Story = {
  name: "input/basic — Title + Field + Guide",
  parameters: {
    docs: {
      description: {
        story:
          "input/basic 조합 컴포넌트. 요소 간 상하 gap 8px (spacing-xsmall).",
      },
    },
  },
  args: {
    state: "focus",
    title: "이메일",
    placeholder: "example@konacard.co.kr",
    guide: "회사 이메일을 입력해 주세요.",
    guideTone: "guide-gray",
  },
};
