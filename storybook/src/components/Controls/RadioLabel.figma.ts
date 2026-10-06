// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=2408-5563
// source=storybook/src/components/Controls/RadioLabel.tsx
// component=RadioLabel
import figma from 'figma'

// Figma variant: size=small 1종. 선택 여부는 내장 controls/radio button 의 state override 라
// 세트 속성으로 매핑할 수 없음 → 고정 예시만 제공
export default {
  example: figma.code`<RadioLabel
  value="a"
  onChange={setValue}
  options={[
    { value: "a", label: "Text" },
    { value: "b", label: "Text" },
  ]}
/>`,
  imports: ['import { RadioLabel } from "./RadioLabel"'],
  id: 'radio-label',
  metadata: { nestable: false },
}
