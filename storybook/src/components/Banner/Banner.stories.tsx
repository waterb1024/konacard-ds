import type { Meta, StoryObj } from "@storybook/react";
import {
  ActionBanner,
  BenefitBanner,
  CardBenefitIcon,
  GiftIcon,
} from "./Banner";

const meta = {
  title: "Component/Banner",
  component: BenefitBanner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Banner. konacard-ds-components.md § 12_Banner. " +
          "Corner radius 8 · 6 파스텔 · Benefit(1 line) / Action(2 depth).",
      },
    },
  },
  args: {
    color: "brand",
    title: "이번 달 받은 혜택",
    value: "12,540원",
    icon: <GiftIcon />,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 360,
          background: "#FFFFFF",
          padding: "16px 0",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BenefitBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Benefit: Story = {
  name: "Benefit Banner",
  args: {
    color: "brand",
    icon: <GiftIcon />,
    title: "이번 달 받은 혜택",
    value: "12,540원",
  },
};

export const BenefitColors: Story = {
  name: "Benefit — 6 파스텔",
  render: () => (
    <>
      <BenefitBanner color="brand" icon={<GiftIcon />} title="브랜드성 혜택" value="5,000원" />
      <BenefitBanner color="gray" icon={<CardBenefitIcon />} title="회색 카드" value="2,300원" />
      <BenefitBanner color="blue" icon={<CardBenefitIcon />} title="파랑 카드" value="1,100원" />
      <BenefitBanner color="green" icon={<CardBenefitIcon />} title="성공·긍정" value="8,700원" />
      <BenefitBanner color="yellow" icon={<CardBenefitIcon />} title="안내·주의" value="0원" />
      <BenefitBanner color="pink" icon={<GiftIcon />} title="이벤트" value="+3건" />
    </>
  ),
};

export const Action: Story = {
  name: "Action Banner (2 depth)",
  render: () => (
    <ActionBanner
      color="brand"
      icon={<GiftIcon />}
      title="지금 신청하면 3만원 캐시백"
      description="9월 30일까지 온라인 신청 시 즉시 지급 · 카드 이용 실적 30만원 이상"
    />
  ),
};

export const ActionColors: Story = {
  name: "Action — 6 파스텔",
  render: () => (
    <>
      <ActionBanner
        color="pink"
        icon={<GiftIcon />}
        title="여름 프로모션"
        description="8월 한 정 · 신규 가입자 대상 스타벅스 아메리카노 쿠폰 증정"
      />
      <ActionBanner
        color="yellow"
        icon={<CardBenefitIcon />}
        title="자동 결제 등록 필요"
        description="다음 결제일까지 자동 결제를 등록하지 않으면 서비스 이용이 중단됩니다."
      />
      <ActionBanner
        color="green"
        icon={<CardBenefitIcon />}
        title="약관 동의 완료"
        description="개인정보 처리방침에 동의하셨습니다."
      />
    </>
  ),
};
