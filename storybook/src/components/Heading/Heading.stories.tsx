import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { Headline, HeadlineEmphasis, SectionTitle } from "./Heading";

const meta = {
  title: "Component/Heading",
  component: Headline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "화면의 제목 두 가지. Figma ${FIGMA_DS_FILE_KEY} ❖ Heading 페이지. " +
          "<b>heading/headline</b> 은 화면 맨 위(header 아래)에 한 번만 쓰는 큰 제목, " +
          "<b>heading/section</b> 은 화면 안에서 묶음을 나누는 제목입니다. " +
          "입력칸 위 라벨은 Heading 이 아니라 Input 의 라벨(input/label)을 씁니다.",
      },
    },
  },
  args: { children: "Main text", sub: undefined },
  argTypes: {
    className: { table: { disable: true } },
    children: { control: "text", description: "주 문구" },
    sub: { control: "text", description: "보조 문구 (Figma sub text 켬 + sub)" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "var(--color-background-primary)" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Headline>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── heading/headline ─────────────────────────── */
export const Playground: Story = {};

export const HeadlineOnly: Story = {
  name: "Headline — 주 문구 + 강조",
  render: () => (
    <Headline>
      카드 비밀번호를
      <br />
      <HeadlineEmphasis>다시 설정</HeadlineEmphasis>해 주세요
    </Headline>
  ),
};

export const HeadlineWithSub: Story = {
  name: "Headline — 보조 문구 켬",
  render: () => (
    <Headline sub={"입력한 정보는 본인 확인에만 사용해요.\n다른 용도로 쓰지 않아요."}>
      <HeadlineEmphasis>본인 확인</HeadlineEmphasis>을 위해
      <br />
      정보를 입력해 주세요
    </Headline>
  ),
};

/* ── heading/section ──────────────────────────── */
function Pad({ children }: { children: ReactNode }) {
  return <div style={{ padding: "16px var(--layout-margin)" }}>{children}</div>;
}

export const Section: Story = {
  name: "Section — size 3단계",
  render: () => (
    <Pad>
      <SectionTitle size="large">수취인 정보</SectionTitle>
      <SectionTitle size="medium">마케팅 알림 설정</SectionTitle>
      <SectionTitle size="small">보내는 금액</SectionTitle>
    </Pad>
  ),
};

/* ── 화면 안 배치 예 ──────────────────────────── */
export const InScreen: Story = {
  name: "화면 배치 — headline + section",
  render: () => (
    <div>
      <Headline sub="받는 분 정보를 확인해 주세요.">
        <HeadlineEmphasis>송금</HeadlineEmphasis> 정보를
        <br />
        확인해 주세요
      </Headline>
      <Pad>
        <SectionTitle size="large">수취인 정보</SectionTitle>
        <p style={{ margin: 0, font: "var(--text-body-2-regular)", color: "var(--color-font-secondary)" }}>
          홍길동 · 코나은행 123-456-789012
        </p>
      </Pad>
    </div>
  ),
};
