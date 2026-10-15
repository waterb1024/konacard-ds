import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import type { InputState, InputVariant } from "./Input";

const meta = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "KONACARD DS Input — Figma input (41:505). style/case 6종(text field · search bar · text area · button · card-number · 주민등록번호) × state 6종. " +
          "제목(title)과 안내 문구(info)는 넣으면 보임. error state 면 안내 문구가 빨간 아이콘으로 바뀜.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text-field", "search-bar", "text-area", "button", "card-number", "registration-number"],
    },
    state: { control: "inline-radio", options: ["default", "focus", "active", "complete", "disabled", "error"] },
    title: { control: "text" },
    info: { control: "text" },
    placeholder: { control: "text" },
  },
  args: { variant: "text-field", state: "default", title: "Title", info: "안내 문구", placeholder: "Default" },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const STATES: InputState[] = ["default", "focus", "active", "complete", "disabled", "error"];
const VALUE: Record<InputState, string | undefined> = {
  default: undefined,
  focus: undefined,
  active: "Active",
  complete: "Complete",
  disabled: undefined,
  error: "Error",
};

const matrix = (variant: InputVariant, label: string) => ({
  name: label,
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 280px)", gap: 24 }}>
      {STATES.map((s) => (
        <Input
          key={s}
          variant={variant}
          state={s}
          title={s}
          info={s === "error" ? "Input bottom error text" : "Input bottom info text"}
          placeholder={s === "focus" ? "Focus" : s === "disabled" ? "Disabled" : "Default"}
          defaultValue={VALUE[s] && (variant === "card-number" ? "1234567812345678" : variant === "registration-number" ? "900101" : VALUE[s])}
        />
      ))}
    </div>
  ),
  decorators: [(Story: () => JSX.Element) => <Story />],
});

export const TextField: Story = matrix("text-field", "Text field");
export const SearchBar: Story = matrix("search-bar", "Search bar");
export const TextArea: Story = matrix("text-area", "Text area");
export const WithButton: Story = matrix("button", "Button");
export const CardNumber: Story = matrix("card-number", "Card number");
export const RegistrationNumber: Story = matrix("registration-number", "주민등록번호");
