import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MainTabs, SubTabs } from "./Tab";

const meta = {
  title: "Component/Tabs",
  component: MainTabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Tab. konacard-ds-components.md § 03_Tab. " +
          "Main tab(밑줄, 48h) · Sub tab(pill, 38h). Main tab 은 화면당 1개.",
      },
    },
  },
  args: {
    items: [],
    value: "",
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360, background: "#FFFFFF" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MainTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainBasic2: Story = {
  name: "Main - Basic 2 Tab",
  render: () => {
    const [tab, setTab] = useState("card");
    return (
      <MainTabs
        variant="basic"
        value={tab}
        onChange={setTab}
        items={[
          { id: "card", label: "카드" },
          { id: "benefit", label: "혜택" },
        ]}
      />
    );
  },
};

export const MainBasic3: Story = {
  name: "Main - Basic 3 Tab",
  render: () => {
    const [tab, setTab] = useState("card");
    return (
      <MainTabs
        variant="basic"
        value={tab}
        onChange={setTab}
        items={[
          { id: "card", label: "카드" },
          { id: "pay", label: "결제" },
          { id: "benefit", label: "혜택" },
        ]}
      />
    );
  },
};

export const MainMulti: Story = {
  name: "Main - Multi (스크롤, 5+ Tab)",
  render: () => {
    const [tab, setTab] = useState("all");
    return (
      <MainTabs
        variant="multi"
        value={tab}
        onChange={setTab}
        items={[
          { id: "all", label: "전체" },
          { id: "food", label: "음식·카페" },
          { id: "shop", label: "쇼핑·마트" },
          { id: "travel", label: "여행·교통" },
          { id: "life", label: "생활·구독" },
          { id: "edu", label: "교육·문화" },
        ]}
      />
    );
  },
};

export const SubTabsBasic: Story = {
  name: "Sub Tab (Pill)",
  render: () => {
    const [tab, setTab] = useState("benefit");
    return (
      <div style={{ paddingTop: 12 }}>
        <SubTabs
          value={tab}
          onChange={setTab}
          items={[
            { id: "benefit", label: "혜택" },
            { id: "history", label: "이용내역" },
            { id: "setting", label: "설정" },
          ]}
        />
      </div>
    );
  },
};

export const MainAndSub: Story = {
  name: "Main + Sub 조합",
  render: () => {
    const [main, setMain] = useState("card");
    const [sub, setSub] = useState("benefit");
    return (
      <>
        <MainTabs
          variant="basic"
          value={main}
          onChange={setMain}
          items={[
            { id: "card", label: "카드" },
            { id: "pay", label: "결제" },
            { id: "benefit", label: "혜택" },
          ]}
        />
        <div style={{ paddingTop: 12 }}>
          <SubTabs
            value={sub}
            onChange={setSub}
            items={[
              { id: "benefit", label: "혜택" },
              { id: "history", label: "이용내역" },
              { id: "setting", label: "설정" },
            ]}
          />
        </div>
      </>
    );
  },
};
