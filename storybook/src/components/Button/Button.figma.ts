// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=17-703
// source=storybook/src/components/Button/Button.tsx
// component=Button
import figma from 'figma'

const instance = figma.selectedInstance

// Figma size 4종 (large/medium/small/tiny). 코드는 large/medium/small 3종.
// "tiny" 는 코드 미지원이라 가장 가까운 small 로 대체.
const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'small',
})

// Figma "type" (8종) → 코드 "color" (9종). 이름은 다르지만 값 1:1 대응.
// PascalCase + underscore (Brand_Light 등) 는 Button.tsx 원본 표기 유지.
const color = instance.getEnum('type', {
  brand: 'Brand',
  'brand-light': 'Brand_Light',
  'brand-line': 'Brand_Line',
  'brand-gradient': 'Brand_Gradient',
  gray: 'Gray',
  'gray-light': 'Gray_Light',
  'gray-line': 'Gray_Line',
  'gray-line-light': 'Gray_Line_Light',
})

// style (primary/secondary) · state (true/false) 는 코드에 대응 prop 없어 매핑 skip.
// state 는 hover/pressed 디자인 타임 상태로 CSS pseudo 로 처리, prop 아님.

export default {
  example: figma.code`<Button size="${size}" color="${color}">Button</Button>`,
  imports: ['import { Button } from "./Button"'],
  id: 'button',
  metadata: { nestable: true },
}
