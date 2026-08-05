/**
 * Figma Code Connect — parser 방식.
 * Selectbox.figma.ts (MCP template) 와 동일 매핑 · 소비자만 다름.
 * 매핑 논리 변경 시 반드시 양쪽 함께 갱신.
 *
 * NOTE: Figma variant 이름이 대문자 "State" 임 (다른 폼은 소문자 "state").
 */
import figma from "@figma/code-connect";
import { Selectbox } from "./Selectbox";

figma.connect(
  Selectbox,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=41-550",
  {
    props: {
      state: figma.enum("State", {
        default: "default",
        active: "active",
        select: "select",
        disabled: "inactive",
        error: "error",
      }),
    },
    example: ({ state }) => (
      <Selectbox state={state} placeholder="선택" />
    ),
  },
);
