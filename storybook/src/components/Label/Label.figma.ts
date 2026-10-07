// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=2121-5513
// source=storybook/src/components/Label/Label.tsx
// component=Label
import figma from 'figma'

const instance = figma.selectedInstance

// 2026-10-07 정리: color 5색 × 4사이즈 / line 3색 × 3사이즈 (gray-drak → gray-dark 이름 수정)
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

const color = instance.getEnum('color', {
  'brand-gradient': 'brand-gradient',
  brand: 'brand',
  'brand-light': 'brand-light',
  'gray-dark': 'gray-dark',
  warning: 'warning',
})

export default {
  example: figma.code`<Label size="${size}" type="${type}" color="${color}">Label</Label>`,
  imports: ['import { Label } from "./Label"'],
  id: 'label',
  metadata: { nestable: true },
}
