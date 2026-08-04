// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=2121-5513
// source=storybook/src/components/Label/Label.tsx
// component=Label
import figma from 'figma'

const instance = figma.selectedInstance

const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny',
})

const type = instance.getEnum('type', {
  color: 'color',
  line: 'line',
})

// Figma 원본은 type=color 계열에서 오타 "gray-drak", type=line 계열에서
// "gray-dark" 를 사용. 코드는 "gray-dark" 로 통일해서 두 값 모두 매핑.
const color = instance.getEnum('color', {
  brand: 'brand',
  'brand-light': 'brand-light',
  'brand-gradient': 'brand-gradient',
  'gray-drak': 'gray-dark',
  'gray-dark': 'gray-dark',
  'gray-light': 'gray-light',
  warning: 'warning',
  white: 'white',
})

export default {
  example: figma.code`<Label size="${size}" type="${type}" color="${color}">Label</Label>`,
  imports: ['import { Label } from "./Label"'],
  id: 'label',
  metadata: { nestable: true },
}
