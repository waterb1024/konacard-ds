import type { Meta, StoryObj } from "@storybook/react";
import {
  BellIcon,
  Header,
  Headline,
  HeadlineEmphasis,
  IconButton,
  MenuIcon,
  SettingsIcon,
} from "./Actionbar";

const meta = {
  title: "Component/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS action-bar/header. konacard-ds-components.md § 01_Actionbar. " +
          "높이 56 고정 · 좌우 padding 20 · Contents 배경 상속. Main / Sub(AOS/iOS) / Scroll Title 3형.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Main 유형 ─────────────────────────────────── */
export const Main: Story = {
  name: "Main — 로고 + 우측 아이콘 2개",
  args: {
    variant: "main",
    title: "KONACARD",
    rightIcons: (
      <>
        <IconButton ariaLabel="알림">
          <BellIcon />
        </IconButton>
        <IconButton ariaLabel="메뉴">
          <MenuIcon />
        </IconButton>
      </>
    ),
  },
};

/* ── Sub AOS ────────────────────────────────────── */
export const SubAOS: Story = {
  name: "Sub — AOS (좌측 정렬)",
  args: {
    variant: "sub-aos",
    title: "카드 상세",
    onBack: () => {},
  },
};

export const SubAOSWithRightAction: Story = {
  name: "Sub — AOS + 우측 text action",
  args: {
    variant: "sub-aos",
    title: "카드 상세",
    onBack: () => {},
    rightText: "완료",
    rightTextEmphasized: true,
  },
};

/* ── Sub iOS ────────────────────────────────────── */
export const SubIOS: Story = {
  name: "Sub — iOS (중앙 정렬)",
  args: {
    variant: "sub-ios",
    title: "카드 상세",
    onBack: () => {},
  },
};

/* ── Scroll Title ───────────────────────────────── */
export const ScrollTitleUnscrolled: Story = {
  name: "Scroll Title — 스크롤 전 (title 숨김)",
  args: {
    variant: "scroll",
    title: "안녕하세요",
    onBack: () => {},
    scrolled: false,
    rightIcons: (
      <IconButton ariaLabel="설정">
        <SettingsIcon />
      </IconButton>
    ),
  },
};

export const ScrollTitleScrolled: Story = {
  name: "Scroll Title — 스크롤 후 (title + divider)",
  args: {
    variant: "scroll",
    title: "안녕하세요",
    onBack: () => {},
    scrolled: true,
    rightIcons: (
      <IconButton ariaLabel="설정">
        <SettingsIcon />
      </IconButton>
    ),
  },
};

/* ── action-bar/headline ─────────────────────────── */
export const HeadlineSample: Story = {
  name: "Headline (Main + 강조 + Sub + Desc)",
  render: () => (
    <div>
      <Header
        variant="scroll"
        onBack={() => {}}
        rightIcons={
          <IconButton ariaLabel="메뉴">
            <MenuIcon />
          </IconButton>
        }
      />
      <Headline
        sub="이번 달 리포트"
        main={
          <>
            홍길동님,
            <br />
            이번 달 <HeadlineEmphasis>32,400원</HeadlineEmphasis> 아꼈어요
          </>
        }
        description="지난 달 대비 12% 더 아꼈어요."
      />
    </div>
  ),
};
