import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { Headline, HeadlineEmphasis, SectionTitle } from "./Heading";
import type { SectionTitleSize } from "./Heading";

/**
 * Controls 는 Figma 속성 이름 그대로 보여 줌
 *   heading/headline : headline(주 문구) · sub text(켜고 끄기) · sub(보조 문구)
 *   heading/section  : size · title
 * 주 문구의 강조 구절은 **두 별표** 로 감싸면 보라로 바뀜 (Figma 에서 글자를 골라 fill 을 바꾸는 것과 같음)
 */

type Args = {
  headline: string;
  "sub text": boolean;
  sub: string;
  size: SectionTitleSize;
  title: string;
};

/** "**강조**" 표시를 HeadlineEmphasis 로 바꿈 */
function withEmphasis(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <HeadlineEmphasis key={i}>{part.slice(2, -2)}</HeadlineEmphasis>
    ) : (
      part
    ),
  );
}

const meta: Meta<Args> = {
  title: "Component/Heading",
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
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "var(--color-background-primary)" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<Args>;

/* ── heading/headline ─────────────────────────── */
export const HeadlinePlayground: Story = {
  name: "Headline",
  args: {
    headline: "카드 비밀번호를\n**다시 설정**해 주세요",
    "sub text": false,
    sub: "입력한 정보는 본인 확인에만 사용해요.",
  },
  argTypes: {
    headline: {
      control: "text",
      description: "주 문구. 줄바꿈은 Enter, 강조할 구절은 **두 별표**로 감싸기 (한 구절만)",
      table: { category: "heading/headline" },
    },
    "sub text": {
      control: "boolean",
      description: "보조 문구 보이기 (Figma 기본 꺼짐)",
      table: { category: "heading/headline" },
    },
    sub: {
      control: "text",
      description: "보조 문구",
      if: { arg: "sub text" },
      table: { category: "heading/headline" },
    },
    size: { table: { disable: true } },
    title: { table: { disable: true } },
  },
  render: (args) => (
    <Headline sub={args["sub text"] ? args.sub : undefined}>{withEmphasis(args.headline)}</Headline>
  ),
};

/* ── heading/section ──────────────────────────── */
function Pad({ children }: { children: ReactNode }) {
  return <div style={{ padding: "16px var(--layout-margin)" }}>{children}</div>;
}

export const SectionPlayground: Story = {
  name: "Section",
  args: { size: "large", title: "수취인 정보" },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["large", "medium", "small"],
      description: "large = 검정 14/22 · medium = 회색 12/18 · small = 회색 11/16",
      table: { category: "heading/section" },
    },
    title: { control: "text", description: "제목", table: { category: "heading/section" } },
    headline: { table: { disable: true } },
    "sub text": { table: { disable: true } },
    sub: { table: { disable: true } },
  },
  render: (args) => (
    <Pad>
      <SectionTitle size={args.size}>{args.title}</SectionTitle>
    </Pad>
  ),
};

/* ── 모아 보기 ─────────────────────────────────── */
const noControls = { controls: { disable: true } };

export const SectionSizes: Story = {
  name: "Section — size 3단계",
  parameters: noControls,
  render: () => (
    <Pad>
      <SectionTitle size="large">수취인 정보</SectionTitle>
      <SectionTitle size="medium">마케팅 알림 설정</SectionTitle>
      <SectionTitle size="small">보내는 금액</SectionTitle>
    </Pad>
  ),
};

export const InScreen: Story = {
  name: "화면 배치 — headline + section",
  parameters: noControls,
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
