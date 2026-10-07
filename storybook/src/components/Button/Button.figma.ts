// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=10973-356
// source=storybook/src/components/Button/Button.tsx
// component=Button
import figma from 'figma'

const instance = figma.selectedInstance

// Figma style → 코드 variant (HTML style 속성과 이름 충돌 회피)
const variant = instance.getEnum('style', {
  primary: 'primary',
  secondary: 'secondary',
})

// Figma size 4종 — tiny 는 secondary 에만 있음
const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny',
})

// state=false → disabled
const disabled = instance.getBoolean('state', { true: false, false: true })

// Figma "type" (7종, 2026-10-07 brand-gradient 삭제) → 코드 "color". 이름은 다르지만 값 1:1 대응.
// PascalCase + underscore (Brand_Light 등) 는 Button.tsx 원본 표기 유지.
const color = instance.getEnum('type', {
  brand: 'Brand',
  'brand-light': 'Brand_Light',
  'brand-line': 'Brand_Line',
  gray: 'Gray',
  'gray-light': 'Gray_Light',
  'gray-line': 'Gray_Line',
  'gray-line-light': 'Gray_Line_Light',
})


export default {
  example: figma.code`<Button variant="${variant}" size="${size}" color="${color}" disabled={${disabled}}>Button</Button>`,
  imports: ['import { Button } from "./Button"'],
  id: 'button',
  metadata: { nestable: true },
}
