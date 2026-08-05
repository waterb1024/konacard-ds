// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=202-2574
// source=storybook/src/components/Button/IconButton.tsx
// component=IconButton
import figma from 'figma'

const instance = figma.selectedInstance

// Figma size 5종 (large/medium/small/tiny/button). 코드는 4종.
// "button" 은 실사용 없는 outlier variant (weight=icon 과 짝) → medium 으로 대체.
const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny',
  button: 'medium',
})

// Figma weight 3종 (bold/regular/icon). 코드는 2종.
// "icon" 은 아이콘 전용 outlier variant → bold 로 대체.
const weight = instance.getEnum('weight', {
  bold: 'bold',
  regular: 'regular',
  icon: 'bold',
})

// Figma type 4종 (black/brand/gray/small). 코드는 3종.
// "small" 은 outlier variant → gray 로 대체.
const type = instance.getEnum('type', {
  black: 'black',
  brand: 'brand',
  gray: 'gray',
  small: 'gray',
})

// state (true/false/bold) 는 design-time hover 상태. 코드는 HTML disabled 로 처리.
// state=false 는 Figma "비활성" 이지만 매핑 스니펫에선 정적 예시라 disabled 를 강제하지 않음.

export default {
  example: figma.code`<IconButton size="${size}" weight="${weight}" type="${type}">Button</IconButton>`,
  imports: ['import { IconButton } from "./IconButton"'],
  id: 'icon-button',
  metadata: { nestable: true },
}
