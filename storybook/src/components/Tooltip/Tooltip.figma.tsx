/**
 * Figma Code Connect — parser 방식 (Figma UI · GitHub App · CLI publish 대상).
 * 같은 컴포넌트를 `Tooltip.figma.ts` (MCP template) 로도 매핑 중이며 소비자만 다름.
 * 매핑 논리 변경 시 반드시 양쪽 함께 갱신.
 *
 * Figma "style" (line/brand) → 코드 prop 이름은 "variant" 로 다름 (값은 그대로).
 */
import figma from "@figma/code-connect";
import { Tooltip } from "./Tooltip";

figma.connect(
  Tooltip,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=200-1909",
  {
    props: {
      variant: figma.enum("style", {
        line: "line",
        brand: "brand",
      }),
      placement: figma.enum("placement", {
        "top-left": "top-left",
        top: "top",
        "top-right": "top-right",
        "bottom-left": "bottom-left",
        bottom: "bottom",
        "bottom-right": "bottom-right",
        left: "left",
        right: "right",
      }),
    },
    example: ({ variant, placement }) => (
      <Tooltip variant={variant} placement={placement}>Tooltip Text</Tooltip>
    ),
  },
);
