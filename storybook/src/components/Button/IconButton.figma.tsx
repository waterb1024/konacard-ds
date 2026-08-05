/**
 * Figma Code Connect — parser 방식 (Figma UI · GitHub App · CLI publish 대상).
 * 같은 컴포넌트를 `IconButton.figma.ts` (MCP template) 로도 매핑 중이며 소비자만 다름.
 * 매핑 논리 변경 시 반드시 양쪽 함께 갱신.
 *
 * 매핑 요약
 * - size: Figma outlier "button" → medium 로 대체
 * - weight: Figma outlier "icon" → bold 로 대체
 * - type: Figma outlier "small" → gray 로 대체
 * - state: 코드에 대응 prop 없어 skip (disabled 는 HTML attribute 로 별도)
 */
import figma from "@figma/code-connect";
import { IconButton } from "./IconButton";

figma.connect(
  IconButton,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=202-2574",
  {
    props: {
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        tiny: "tiny",
        button: "medium",
      }),
      weight: figma.enum("weight", {
        bold: "bold",
        regular: "regular",
        icon: "bold",
      }),
      type: figma.enum("type", {
        black: "black",
        brand: "brand",
        gray: "gray",
        small: "gray",
      }),
    },
    example: ({ size, weight, type }) => (
      <IconButton size={size} weight={weight} type={type}>Button</IconButton>
    ),
  },
);
