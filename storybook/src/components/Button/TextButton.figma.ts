// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=17-793
// source=storybook/src/components/Button/TextButton.tsx
// component=TextButton
import figma from 'figma'

const instance = figma.selectedInstance

// Figma size 4종 · color 4종 · state 2종. outlier 없이 1:1 매핑 가능.
const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny',
})

const color = instance.getEnum('color', {
  black: 'black',
  brand: 'brand',
  gray: 'gray',
  'gray-light': 'gray-light',
})

// state (true/false) 는 HTML disabled 로 처리 — 매핑 skip.
// 밑줄은 컴포넌트 기본 스타일이라 별도 prop 없음.

export default {
  example: figma.code`<TextButton size="${size}" color="${color}">Button</TextButton>`,
  imports: ['import { TextButton } from "./TextButton"'],
  id: 'text-button',
  metadata: { nestable: true },
}
