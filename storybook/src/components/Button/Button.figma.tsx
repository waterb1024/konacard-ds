/**
 * Figma Code Connect — parser 방식 (Figma UI · GitHub App · CLI publish 대상).
 * 같은 컴포넌트를 `Button.figma.ts` (MCP template) 로도 매핑 중이며 소비자만 다름.
 * 매핑 논리 변경 시 반드시 양쪽 함께 갱신.
 *
 * 매핑 요약
 * - size: Figma tiny 는 코드 미지원 → small 로 대체
 * - type → color 로 이름 변경, PascalCase+underscore (Brand_Light 등) 유지
 *   미지원 3종(brand-gradient, gray-light, gray-line-light) 은 가장 유사한 값으로
 * - style (primary/secondary), state (true/false) 는 코드에 대응 prop 없어 skip
 */
import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(
  Button,
  "https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=17-703",
  {
    props: {
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        tiny: "small",
      }),
      color: figma.enum("type", {
        brand: "Brand",
        "brand-light": "Brand_Light",
        "brand-line": "Brand_Line",
        "brand-gradient": "Brand",
        gray: "Gray",
        "gray-light": "Gray",
        "gray-line": "Gray_Line",
        "gray-line-light": "Gray_Line",
      }),
    },
    example: ({ size, color }) => (
      <Button size={size} color={color}>Button</Button>
    ),
  },
);
