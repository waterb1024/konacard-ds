// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=10973-651
// source=storybook/src/components/Button/IconButton.tsx
// component=IconButton
import figma from 'figma'

const instance = figma.selectedInstance

// 2026-10-07 정리: 이름 깨진 variant(size=button…) 를 small·bold·gray 로 고치고 state 속성 삭제
// 2026-10-07 tiny 를 small 로 합침 → size 3종 · weight 2종 · type 3종.
const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
})

const weight = instance.getEnum('weight', {
  bold: 'bold',
  regular: 'regular',
})

const type = instance.getEnum('type', {
  black: 'black',
  brand: 'brand',
  gray: 'gray',
})

export default {
  example: figma.code`<IconButton size="${size}" weight="${weight}" type="${type}">Button</IconButton>`,
  imports: ['import { IconButton } from "./IconButton"'],
  id: 'icon-button',
  metadata: { nestable: true },
}
