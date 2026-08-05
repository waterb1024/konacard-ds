/**
 * Figma Code Connect — parser 방식.
 * SearchBar.figma.ts (MCP template) 와 동일 매핑 · 소비자만 다름.
 * 매핑 논리 변경 시 반드시 양쪽 함께 갱신.
 */
import figma from "@figma/code-connect";
import { SearchBar } from "./SearchBar";

figma.connect(
  SearchBar,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=777-4492",
  {
    props: {
      state: figma.enum("state", {
        default: "default",
        focus: "focus",
        active: "active",
        complete: "complete",
        disabled: "inactive",
        error: "error",
      }),
    },
    example: ({ state }) => (
      <SearchBar state={state} placeholder="검색어를 입력하세요" />
    ),
  },
);
