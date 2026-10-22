import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { Accordion, AccordionBody, AccordionHeader } from "./Accordion";
import type { AccordionSize, AccordionType } from "./Accordion";

const meta = {
  title: "Component/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "제목을 눌러 본문을 펼치고 접습니다. Figma ${FIGMA_DS_FILE_KEY} / ❖ Accordion — " +
          "accordion(묶음) · accordion/header · accordion/body. size(large · medium) × type(list · inquiry) × state(closed · open). " +
          "본문 크기는 제목 크기를, 본문 바탕은 제목 type 을 따라갑니다 (list → 회색 · inquiry → 흰색). " +
          "본문만 쓰는 화면(공지사항 등)은 AccordionBody 를 단독으로 씁니다.",
      },
    },
  },
  argTypes: {
    size: { control: "inline-radio", options: ["large", "medium"] },
    type: { control: "inline-radio", options: ["list", "inquiry"] },
    className: { table: { disable: true } },
  },
  args: {
    size: "large",
    type: "list",
    defaultOpen: true,
    title: "Main text",
    description: "Description",
    answered: true,
    children: "1depth contents text, 1depth contents text, 1depth contents text, 1depth contents text",
    caption: "2 depth contents text",
    boxContent: "1depth contents list, 1depth contents list, 1depth contents list",
    boxCaption: "2depth contents list",
  },
  /* 360 화면 폭 — 전체 variant 표(parameters.wide)만 넓게 */
  decorators: [
    (Story, ctx) =>
      ctx.parameters.wide ? (
        <Story />
      ) : (
        <div style={{ width: 360, background: "var(--color-background-primary)" }}>
          <Story />
        </div>
      ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── Playground ─────────────────────────────── */
export const Playground: Story = {};

/* ── 전체 variant — Figma accordion 8종 ─────── */
function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ font: "var(--text-body-3-regular)", color: "var(--color-font-quaternary)" }}>{label}</span>
      <div style={{ width: 360, boxShadow: "0 0 0 1px var(--color-border-default)" }}>{children}</div>
    </div>
  );
}

export const AllVariants: Story = {
  name: "전체 variant (size × type × state)",
  parameters: { wide: true },
  render: (args) => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 360px)", gap: 32 }}>
      {(["list", "inquiry"] as AccordionType[]).flatMap((type) =>
        (["large", "medium"] as AccordionSize[]).flatMap((size) =>
          [false, true].map((open) => (
            <Cell key={`${type}-${size}-${open}`} label={`size=${size}, type=${type}, state=${open ? "open" : "closed"}`}>
              <Accordion {...args} size={size} type={type} defaultOpen={open} answered={open} />
            </Cell>
          )),
        ),
      )}
    </div>
  ),
};

/* ── 목록 예시 — FAQ (list) ─────────────────── */
export const ListExample: Story = {
  name: "목록 예시 — list",
  render: () => (
    <div>
      <Accordion title="카드 재발급은 어떻게 하나요?" description="카드 관리" caption="영업일 기준 3~5일 이내 배송">
        홈 &gt; 내 카드 &gt; 재발급 신청에서 카드 종류를 선택 후 신청할 수 있어요.
      </Accordion>
      <Accordion title="실물 카드와 앱카드의 차이는?" description="카드 이용" defaultOpen>
        실물 카드는 오프라인 결제, 앱카드는 온라인·간편결제에 사용해요.
      </Accordion>
      <Accordion title="해외 결제 수수료는?" description="결제">
        해외 이용 시 브랜드사 수수료가 별도로 부과돼요.
      </Accordion>
    </div>
  ),
};

/* ── 1:1 문의 예시 — inquiry (KeyScreen #INQUIRY_02) ── */
export const InquiryExample: Story = {
  name: "1:1 문의 예시 — inquiry",
  render: () => (
    <div>
      <Accordion type="inquiry" title="분실신고해서 재발급 받은 카드는 어떻게 등록되나요?">
        답변을 준비하고 있어요.
      </Accordion>
      <Accordion
        type="inquiry"
        answered
        defaultOpen
        title="분실신고해서 재발급 받은 카드는?"
        caption="2026.10.22 답변"
        boxContent="재발급 카드는 수령 후 앱에서 카드 등록을 하면 바로 쓸 수 있어요."
      >
        문의하신 내용 확인했어요.
      </Accordion>
    </div>
  ),
};

/* ── 부품 단독 ─────────────────────────────── */
export const Parts: Story = {
  name: "header · body 단독",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <AccordionHeader title="Main text" description="Description" />
      <AccordionBody size="medium" caption="본문만 쓰는 화면 (공지사항 · 카드 혜택 등)">
        accordion/body 는 제목 없이 단독으로도 씁니다.
      </AccordionBody>
    </div>
  ),
};
