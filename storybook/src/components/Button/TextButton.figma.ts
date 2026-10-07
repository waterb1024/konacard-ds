// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=10973-796
// source=storybook/src/components/Button/TextButton.tsx
// component=TextButton
import figma from 'figma'

const instance = figma.selectedInstance

// Figma size 3종 · color 4종 (2026-10-07 정리: 예전 small 삭제, 예전 tiny → small, state 속성 삭제).
const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
})

const color = instance.getEnum('color', {
  black: 'black',
  brand: 'brand',
  gray: 'gray',
  'gray-light': 'gray-light',
})

// 밑줄은 컴포넌트 기본 스타일이라 별도 prop 없음.

export default {
  example: figma.code`<TextButton size="${size}" color="${color}">Button</TextButton>`,
  imports: ['import { TextButton } from "./TextButton"'],
  id: 'text-button',
  metadata: { nestable: true },
}
