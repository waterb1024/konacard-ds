// url=https://www.figma.com/design/dHJa65PGtCQHq2n4qgL9Z9/-AX--KONACARD?node-id=200-1909
// source=storybook/src/components/Tooltip/Tooltip.tsx
// component=Tooltip
import figma from 'figma'

const instance = figma.selectedInstance

// Figma "style" (line/brand) → 코드 prop 이름은 "variant" 로 다름. 값은 그대로.
const variant = instance.getEnum('style', {
  line: 'line',
  brand: 'brand',
})

// Figma "placement" 는 코드와 1:1 (8종).
const placement = instance.getEnum('placement', {
  'top-left': 'top-left',
  top: 'top',
  'top-right': 'top-right',
  'bottom-left': 'bottom-left',
  bottom: 'bottom',
  'bottom-right': 'bottom-right',
  left: 'left',
  right: 'right',
})

// Figma tooltip/body 내부의 텍스트는 실제 사용 시점에 채워지는 자유 문자열이라
// 매핑에서는 예시 텍스트만 넣어둠. children 은 부모가 결정.
export default {
  example: figma.code`<Tooltip variant="${variant}" placement="${placement}">Tooltip Text</Tooltip>`,
  imports: ['import { Tooltip } from "./Tooltip"'],
  id: 'tooltip',
  metadata: { nestable: true },
}
